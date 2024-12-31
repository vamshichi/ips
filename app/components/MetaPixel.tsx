import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: MetaPixelFunction;
  }
}

interface MetaPixelFunction {
  (...args: any[]): void;
  callMethod?: (...args: any[]) => void;
  queue?: any[];
  version?: string;
  loaded?: boolean;
}

interface MetaPixelProps {
  pixelId: string;
}

const MetaPixel: React.FC<MetaPixelProps> = ({ pixelId }) => {
  useEffect(() => {
    if (!window.fbq) {
      const fbq: MetaPixelFunction = function (...args) {
        fbq.callMethod ? fbq.callMethod(...args) : fbq.queue?.push(args);
      };
      fbq.queue = [];
      fbq.version = '2.0';
      fbq.loaded = true;

      window.fbq = fbq;
    }

    // Initialize Facebook Pixel
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }, [pixelId]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document, 'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
};

export default MetaPixel;