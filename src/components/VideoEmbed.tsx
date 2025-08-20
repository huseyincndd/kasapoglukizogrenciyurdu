"use client";

import { useEffect, useRef, useState } from 'react';

interface VideoEmbedProps {
  provider: 'youtube' | 'vimeo';
  id: string;
  title: string;
  params?: string;
  className?: string;
  autoplay?: boolean;
  enableControls?: boolean;
  muted?: boolean;
}

export default function VideoEmbed({ 
  provider = 'youtube', 
  id, 
  title, 
  params = '', 
  className = '',
  autoplay = false,
  enableControls = true,
  muted = false
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getEmbedUrl = () => {
    // YouTube parametreleri - muted kontrolü eklendi
    const baseParams = provider === 'youtube' 
      ? `rel=0&modestbranding=1&playsinline=1&loop=1&controls=${enableControls ? 1 : 0}&showinfo=0&fs=1&iv_load_policy=3&enablejsapi=1&autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}` 
      : '';
    const combinedParams = params ? `${baseParams}&${params}` : baseParams;
    
    switch (provider) {
      case 'youtube':
        // Loop için playlist parametresi ekliyoruz (aynı videoyu tekrar oynatmak için)
        return `https://www.youtube-nocookie.com/embed/${id}?${combinedParams}&playlist=${id}`;
      case 'vimeo':
        return `https://player.vimeo.com/video/${id}?${combinedParams}`;
      default:
        return '';
    }
  };

  // Video oynatma/durdurma kontrolü
  const togglePlay = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      if (isPlaying) {
        // Video durdurmak için iframe'e mesaj gönder
        iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        setIsPlaying(false);
      } else {
        // Video oynatmak için iframe'e mesaj gönder
        iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        setIsPlaying(true);
      }
    }
  };

  // Scroll ile görünürlük kontrolü
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        // Eğer video görünmüyorsa ve oynuyorsa durdur
        if (!entry.isIntersecting && isPlaying) {
          togglePlay();
        }
      },
      {
        threshold: 0.5, // Video %50 görünür olduğunda tetikle
        rootMargin: '0px'
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div ref={videoRef} className={`relative bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 ${className}`}>
      {/* Video Container - 9:16 Aspect Ratio */}
      <div className="relative video-container" style={{ aspectRatio: '9 / 16' }}>
        <iframe
          ref={iframeRef}
          src={getEmbedUrl()}
          title={title}
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full rounded-t-3xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ border: 0 }}
        />

        {/* Oynatma/Durdurma Butonu */}
        {enableControls && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 z-30"
            aria-label={isPlaying ? 'Videoyu Durdur' : 'Videoyu Oynat'}
          >
            {isPlaying ? (
              // Pause Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              // Play Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="8,5 19,12 8,19" />
              </svg>
            )}
          </button>
        )}
        
        {/* Title Overlay - Covers YouTube's title area */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 via-black/40 to-transparent pointer-events-none z-10" />
        
        {/* Bottom Overlay - Covers controls area */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 via-black/40 to-transparent pointer-events-none z-10" />
        
        {/* Corner Overlays - Hide YouTube branding */}
        <div className="absolute top-2 right-2 w-16 h-8 bg-gradient-to-br from-black/70 to-transparent rounded pointer-events-none z-10" />
        <div className="absolute bottom-2 right-2 w-20 h-6 bg-gradient-to-tl from-black/70 to-transparent rounded pointer-events-none z-10" />
        
        {/* Subtle site branding overlay */}
        <div className="absolute top-4 left-4 text-white/80 text-sm font-serif-condensed font-semibold drop-shadow-lg pointer-events-none z-20">
          Kasapoğulları
        </div>
      </div>
      
      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-brown/5 to-primary-blue/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
      
      {/* Floating Animation Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full opacity-0 hover:opacity-100 animate-ping transition-opacity duration-500"></div>
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full opacity-0 hover:opacity-100 animate-pulse transition-opacity duration-700"></div>
    </div>
  );
}
