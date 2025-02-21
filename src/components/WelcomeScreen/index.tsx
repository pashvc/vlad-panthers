import { QRCodeSVG } from 'qrcode.react';
import { Button } from '../ui/button';

export const WelcomeScreen = ({ onStart, loading }: { onStart: () => void, loading: boolean }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-8 p-10 text-center'>
      <div className='bg-white p-4 rounded-xl shadow-lg'>
        <QRCodeSVG
          value="https://vlad-netevia.pages.dev/"
          size={200}
          level="H"
          includeMargin={true}
          className="mx-auto"
        />
      </div>
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
      <Button onClick={onStart} className='mt-4'>
        {loading ? 'Loading...' : 'Start Conversation'}
      </Button>
    </div>
  );
};
