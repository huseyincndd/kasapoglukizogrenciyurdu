"use client";

interface VideoEmbedProps {
  provider: 'youtube' | 'vimeo';
  id: string;
  title: string;
  params?: string;
  className?: string;
}

export default function VideoEmbed({ 
  provider = 'youtube', 
  id, 
  title, 
  params = '', 
  className = '' 
}: VideoEmbedProps) {
  const getEmbedUrl = () => {
    const baseParams = provider === 'youtube' 
      ? 'rel=0&modestbranding=1&playsinline=1&loop=1&controls=0&showinfo=0&fs=0&iv_load_policy=3&disablekb=1&mute=1' 
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

  return (
    <div className={`relative bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 ${className}`}>
      {/* Video Container - 9:16 Aspect Ratio */}
      <div className="relative video-container" style={{ aspectRatio: '9 / 16' }}>
        <iframe
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
