import React, { useEffect, useRef } from 'react';
import './Instagram.css';
import { FaInstagram } from 'react-icons/fa';

// Custom hook to load Instagram embed script
const useInstagramEmbed = () => {
  useEffect(() => {
    // Only add the script if it doesn't exist yet
    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        // Clean up script on component unmount
        const existingScript = document.getElementById('instagram-embed-script');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }

    // Process embeds when script is already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);
};

const Instagram = ({ url, name }) => {
  const containerRef = useRef(null);
  useInstagramEmbed();

  // Format the Instagram URL to ensure it works with embeds
  const formatInstagramUrl = (url) => {
    // Remove /embed/ from the URL if present
    return url.replace('/embed/', '/');
  };

  const cleanUrl = formatInstagramUrl(url);

  // Process embeds when the component mounts or URL changes
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="instagram-card" ref={containerRef}>
      <h3 className="instagram-title">{name}</h3>
      <div className="instagram-content">
        <blockquote 
          className="instagram-media" 
          data-instgrm-permalink={cleanUrl}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: '0',
            width: '99.375%'
          }}
        >
          <div style={{ padding: '16px' }}>
            <a 
              href={cleanUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: '#FFFFFF',
                lineHeight: '0',
                padding: '0 0',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FaInstagram style={{ fontSize: '24px', marginRight: '8px', color: '#e1306c' }} />
                <div style={{ fontFamily: 'Arial,sans-serif', fontSize: '14px', fontWeight: 550, lineHeight: '18px' }}>
                  View this post on Instagram
                </div>
              </div>
            </a>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default Instagram;