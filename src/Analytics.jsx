import { useEffect } from 'react';

export function Analytics() {
  useEffect(() => {
    const id = import.meta.env.VITE_GA_ID;
    if (!id) return;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    script.onload = () => {
      gtag('js', new Date());
      gtag('config', id, { send_page_view: true });
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
