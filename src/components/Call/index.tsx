import { useState, useEffect } from 'react';
import { DailyAudio, useParticipantIds, useLocalSessionId } from '@daily-co/daily-react';
import { Minimize, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Video } from '../Video';
import { Button } from '../ui/button';

export const Call = () => {
  const remoteParticipantIds = useParticipantIds({ filter: 'remote' });
  const localSessionId = useLocalSessionId();
  const [mode, setMode] = useState<'full' | 'minimal'>('full');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleMode = () => {
    setMode(prev => prev === 'full' ? 'minimal' : 'full');
  }

  // Calculate logo size based on screen width
  const getLogoSize = () => {
    if (mode === 'minimal') return 'w-20';
    
    if (windowWidth < 480) return 'w-20'; // Mobile
    if (windowWidth < 768) return 'w-24'; // Small tablets
    if (windowWidth < 1024) return 'w-32'; // Larger tablets
    return 'w-40'; // Desktop
  };

  return <>
    <div className={cn("flex items-center justify-center", {
      'fixed bottom-20 right-20': mode === 'minimal',
    })}>
      <div className='relative'>
        <Button variant='outline' onClick={handleToggleMode} className='absolute top-2 right-2 z-10 gap-2' size='sm'>
          {mode === 'full' ? 'Minimize' : 'Maximize'}
          {mode === 'full' ? <Minimize className='size-4' /> : <Maximize className='size-4' />}
        </Button>
        {
          remoteParticipantIds.length > 0 ? (
            <div className="relative">              
              {/* Right logo overlay */}
              <img 
                src="/fla.png" 
                alt="FLA Logo" 
                className={cn("absolute z-10 rounded-md", getLogoSize(), {
                  'top-[30%] right-4': mode === 'full',
                  'top-[30%] right-2': mode === 'minimal',
                })}
              />
              
              <Video
                id={remoteParticipantIds[0]}
                className={
                  cn({
                    'max-h-[50vh] min-h-[20rem]': mode === 'full',
                    'max-h-[15rem]': mode === 'minimal',
                  })
                }
              />
            </div>
          ) : (
            <div className='relative flex items-center justify-center size-[50vh]'>
              <p className='text-2xl text-black'>Waiting for others to join...</p>
            </div>
          )
        }
        {localSessionId && (
          <Video
            id={localSessionId}
            className={cn('absolute bottom-2 right-2', {
              'max-h-40': mode === 'full',
              'max-h-20': mode === 'minimal',
            })}
          />
        )}
      </div>
    </div>
    <DailyAudio />
  </>
}