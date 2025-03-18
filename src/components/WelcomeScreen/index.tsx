import { QRCodeSVG } from 'qrcode.react';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';

export const WelcomeScreen = ({ onStart, loading }: { onStart: () => void, loading: boolean }) => {
  const [isCalendlyRedirect, setIsCalendlyRedirect] = useState(false);
  const calendlyUrl = "https://calendly.com/vlad-ai-netevia/30min";
  
  useEffect(() => {
    // Check if the URL has the r=calendly parameter
    const urlParams = new URLSearchParams(window.location.search);
    setIsCalendlyRedirect(urlParams.get('r') === 'calendly');
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-8 p-10 text-center'>
      {!isCalendlyRedirect && (
        <>
          <div className='bg-white p-4 rounded-xl shadow-lg'>
            <QRCodeSVG
              value={calendlyUrl}
              size={200}
              level="H"
              includeMargin={true}
              className="mx-auto"
            />
          </div>
          <a 
            href={calendlyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-lg"
          >
            Book a Meeting with Vlad AI
          </a>
        </>
      )}
      <h1 className='text-4xl font-bold'>
        Vlad Sadovskiy AI Avatar
      </h1>
      <h2 className='text-2xl'>
        CEO of Netevia
      </h2>
      <p className='text-gray-600 max-w-2xl'>
        Welcome to a conversation with Vlad Sadovskiy's personal AI avatar, specially crafted by Pavel Sukhachev in Miami, FL.
        Experience interactive discussions about payments, entrepreneurship, and business insights.
      </p>
      {isCalendlyRedirect && (
        <Button onClick={onStart} className='mt-4'>
          {loading ? 'Loading...' : 'Start Conversation'}
        </Button>
      )}
    </div>
  );
};
