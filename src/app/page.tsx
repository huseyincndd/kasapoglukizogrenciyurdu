"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const galleryImages = [
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/1.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Modern oda tasarımı"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/2.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Konforlu yaşam alanı"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/3.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Çalışma odası"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/4.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Ortak alan"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/5.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Banyo ve WC"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/6.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Mutfak alanı"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/7.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Spor salonu"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/8.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Etüt odası"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/9.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Teras alanı"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/10.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Giriş ve lobi"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/11.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Güvenlik sistemi"
    },
    { 
      image: "https://villaqrmenu.b-cdn.net/kasapogullari/12.png",
      alt: "Kasapoğulları Kız Öğrenci Yurdu - Dış görünüm"
    }
  ];

  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Kasapoğulları Kız Öğrenci Yurdu nerede bulunuyor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kasapoğulları Kız Öğrenci Yurdu, Kütahya merkezde Yıldırım Beyazıt Mahallesi, Özengi sokak, no:2 adresinde bulunmaktadır."
                }
              },
              {
                "@type": "Question",
                "name": "Hangi üniversitelere yakın konumda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dumlupınar Üniversitesi ve Kütahya Sağlık Bilimleri Üniversitesi'ne otobüs durağına 300 metre mesafede bulunmaktadır."
                }
              },
              {
                "@type": "Question",
                "name": "Yurdunuzda hangi olanaklar mevcut?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "7/24 güvenlik, yerden ısıtma, fiber internet, spor salonu, etüt odaları, sinema salonu ve Platinum Kart ayrıcalıkları bulunmaktadır."
                }
              },
              {
                "@type": "Question",
                "name": "Oda seçenekleri nelerdir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Suit Oda, Suit Mutfaklı Oda ve VIP Oda seçenekleri mevcuttur."
                }
              },
              {
                "@type": "Question",
                "name": "İletişim bilgileriniz nelerdir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Telefon: +90 541 275 43 43, Instagram: @kasapogullarikizrezidans43"
                }
              }
            ]
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300" role="navigation" aria-label="Ana navigasyon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold font-serif-condensed text-gradient-brown-blue">
                Kasapoğulları Kız Öğrenci Yurdu
              </div>
            </div>
            <div className="hidden md:flex space-x-8" role="menubar">
              <a href="#anasayfa" className="nav-link hover:text-primary-brown transition-colors" role="menuitem">Ana Sayfa</a>
              <a href="#hakkimizda" className="nav-link hover:text-primary-brown transition-colors" role="menuitem">Hakkımızda</a>
              <a href="#olanaklar" className="nav-link hover:text-primary-brown transition-colors" role="menuitem">Olanaklar</a>
              <a href="#odalar" className="nav-link hover:text-primary-brown transition-colors" role="menuitem">Odalar</a>
              <a href="#galeri" className="nav-link hover:text-primary-brown transition-colors" role="menuitem">Galeri</a>
              <a href="#yorumlar" className="nav-link hover:text-primary-brown transition-colors" role="menuitem">Yorumlar</a>
              <a href="#konum" className="nav-link hover:text-primary-brown transition-colors" role="menuitem">Konum</a>
              <a href="#iletisim" className="nav-link hover:text-primary-brown transition-colors" role="menuitem">İletişim</a>
            </div>
            <button className="md:hidden mobile-menu-btn">
              <div className="space-y-1">
                <div className="w-6 h-0.5 mobile-menu-line"></div>
                <div className="w-6 h-0.5 mobile-menu-line"></div>
                <div className="w-6 h-0.5 mobile-menu-line"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Ana sayfa hero bölümü">
        {/* Slider Background */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Slide 1 */}
            <div className="absolute inset-0 animate-slide-1">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://villaqrmenu.b-cdn.net/kasapogullari/2.png ')`
                }}
              ></div>
            </div>
            
            {/* Slide 2 */}
            <div className="absolute inset-0 animate-slide-2">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://villaqrmenu.b-cdn.net/kasapogullari/3.png ')`
                }}
              ></div>
            </div>
            
            {/* Slide 3 */}
            <div className="absolute inset-0 animate-slide-3">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://villaqrmenu.b-cdn.net/kasapogullari/1.png ')`
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif-condensed text-white mb-6 drop-shadow-2xl">
              <span className="text-gradient-brown-blue">
                Kasapoğulları
              </span>
              <br />
              <span className="text-white">Kız Öğrenci Yurdu</span>
            </h1>
            <p className="text-xl md:text-3xl font-proxima text-white/90 mb-12 max-w-4xl mx-auto drop-shadow-lg">
              Kütahya&apos;da güvenli, konforlu ve modern yaşam alanları ile eğitim hayatınızda size destek oluyoruz. Dumlupınar Üniversitesi ve Sağlık Bilimleri Üniversitesi&apos;ne yakın konumda.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => {
                  document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-12 py-6 bg-gradient-brown-blue text-white rounded-full text-xl font-bold font-serif-condensed overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500 backdrop-blur-sm"
                aria-label="Hemen başvuru yapmak için iletişim bölümüne git"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                Hemen Başvur
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/20 rounded-full animate-ping group-hover:animate-pulse"></div>
              </button>
              <button 
                onClick={() => window.open('tel:+905412754343', '_self')}
                className="group relative px-12 py-6 border-3 border-white text-white rounded-full text-xl font-bold font-serif-condensed overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500 backdrop-blur-sm hover:bg-white hover:text-primary-blue"
                aria-label="Hemen aramak için telefon numarasını çevir"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Arayın
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-3">
            <div className="w-4 h-4 bg-white/50 rounded-full animate-dot-1"></div>
            <div className="w-4 h-4 bg-white/50 rounded-full animate-dot-2"></div>
            <div className="w-4 h-4 bg-white/50 rounded-full animate-dot-3"></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

            {/* Why Kasapoğulları Section - New Simple Approach */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
        {/* Same Background as About Section */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-brown/20 to-primary-blue/20 rounded-full opacity-30 animate-pulse-slow"></div>
        
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-primary-brown/10 to-amber-200/15 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-primary-blue/10 to-indigo-200/15 rounded-full opacity-25 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-18 h-18 bg-gradient-to-br from-amber-300/15 to-orange-300/20 rounded-full opacity-30 animate-float" style={{animationDelay: '3.5s'}}></div>
        
        <div className="absolute top-16 right-16 w-12 h-1 bg-gradient-to-r from-primary-brown/30 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-1 h-12 bg-gradient-to-t from-primary-blue/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-8 h-8 border border-primary-brown/25 rotate-45 animate-spin-slow"></div>
        
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, #594323 0deg, transparent 90deg, transparent 180deg, #052254 270deg, transparent 360deg)`,
            backgroundSize: '100px 100px'
          }}></div>
            </div>
            
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-gradient-brown-blue text-white rounded-full text-sm font-serif-condensed font-semibold tracking-wide">
                Kasapoğulları Farkı
              </span>
              </div>
            <h2 className="text-5xl md:text-6xl font-bold font-serif-condensed text-gray-900 mb-6">
              <span className="text-gradient-brown-blue">
                Neden Kasapoğulları?
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-4xl mx-auto leading-relaxed">
              7+ yıllık deneyimimizle binlerce öğrenciye ev sahipliği yaptık. 
              <span className="text-primary-brown font-semibold"> Bizi tercih etmenizin </span>
              sebepleri çok açık.
            </p>
            </div>
            
          {/* Simple Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {[
              {
                icon: "🏆",
                title: "7+ Yıl Deneyim",
                description: "2017 yılından bu yana binlerce öğrenciye ev sahipliği yaparak, deneyimli kadromuzla en kaliteli hizmeti sunmaya devam ediyoruz.",
                isKahverengi: true
              },
              {
                icon: "🛡️",
                title: "Güvenlik Önceliği",
                description: "7/24 güvenlik hizmeti ve gelişmiş kamera sistemleriyle tüm bina güvence altına alınırken, akıllı kart ve parmak izi giriş sistemleri sayesinde sadece rezidansımızda kalan öğrencilerimiz binaya giriş yapabiliyor. Bu sayede öğrencilerimiz tamamen güvenli ve huzurlu bir ortamda yaşamlarını sürdürüyor.",
                isKahverengi: false
              },
              {
                icon: "📍",
                title: "Kolay Ulaşım ve Merkez Konum",
                description: "Kasapoğulları Kız Rezidans, üniversitelere ve şehrin tüm önemli noktalarına kolay ulaşım imkanı sunuyor. Market, kafe ve toplu taşıma araçlarına olan yakınlığımız sayesinde öğrencilerimizin günlük yaşamını büyük ölçüde kolaylaştırıyoruz.",
                isKahverengi: true
              },
              {
                icon: "💎",
                title: "KASAPOĞULLARI PLATİNUM KART",
                description: "Kasapoğulları Kız Rezidans, üniversitelere ve şehrin tüm önemli noktalarına kolay ulaşım imkanı sunuyor. Market, kafe ve toplu taşıma araçlarına olan yakınlığımız sayesinde öğrencilerimizin günlük yaşamını büyük ölçüde kolaylaştırıyoruz.",
                isKahverengi: false
              },
              {
                icon: "📚",
                title: "Çalışma Ortamı",
                description: "Kasapoğulları Kız Rezidansı'nda, öğrencilerimizin tüm ihtiyaçları göz önünde bulundurularak tasarlanmış tek kişilik odalarımızda her odada bulunan çalışma masası, geniş dolaplar ve konforlu yataklar sayesinde öğrencilerimiz derslerine tam odaklanabilir ve dinlenme süreçlerini en verimli şekilde geçirebilir.",
                isKahverengi: true
              },
              {
                icon: "❤️",
                title: "Aile Ortamı",
                description: "Sıcak ve samimi aile ortamımızla kendinizi evinizde hissedeceğiniz bir yer arıyorsanız, Kasapoğulları Kız Rezidansı tam size göre!",
                isKahverengi: false
              }
            ].map((feature, index) => (
              <div key={index} className={`${feature.isKahverengi ? 'bg-primary-brown text-white' : 'bg-white/80 text-gray-900'} backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${feature.isKahverengi ? 'border-amber-200' : 'border-amber-100'}`}>
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold font-serif-condensed ${feature.isKahverengi ? 'text-amber-100' : 'text-primary-blue'} mb-4`}>{feature.title}</h3>
                </div>
                <p className={`${feature.isKahverengi ? 'text-amber-50' : 'text-gray-600'} font-proxima leading-relaxed text-center`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 border border-amber-200">
            <h3 className="text-3xl font-bold font-serif-condensed text-primary-blue mb-4">
              Hemen Yerinizi Ayırtın!
            </h3>
            <p className="text-lg font-proxima text-gray-600 mb-8 max-w-2xl mx-auto">
              Kasapoğulları ailesinin bir parçası olmak için bugün başvurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('tel:+905412754343', '_self')}
                className="px-8 py-4 bg-gradient-brown-blue text-white rounded-xl font-serif-condensed font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                📞 Hemen Arayın
              </button>
              <button 
                onClick={() => {
                  document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-primary-brown text-primary-brown rounded-xl font-serif-condensed font-bold hover:bg-primary-brown hover:text-white transition-all duration-300"
              >
                📍 Kasapoğulları Kız Rezidansı Ziyaret Edin
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
        {/* Same Background as About Section */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-brown/20 to-primary-blue/20 rounded-full opacity-30 animate-pulse-slow"></div>
        
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-primary-brown/10 to-amber-200/15 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-primary-blue/10 to-indigo-200/15 rounded-full opacity-25 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-18 h-18 bg-gradient-to-br from-amber-300/15 to-orange-300/20 rounded-full opacity-30 animate-float" style={{animationDelay: '3.5s'}}></div>
        
        <div className="absolute top-16 right-16 w-12 h-1 bg-gradient-to-r from-primary-brown/30 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-1 h-12 bg-gradient-to-t from-primary-blue/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-8 h-8 border border-primary-brown/25 rotate-45 animate-spin-slow"></div>
        
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, #594323 0deg, transparent 90deg, transparent 180deg, #052254 270deg, transparent 360deg)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-gradient-brown-blue text-white rounded-full text-sm font-serif-condensed font-semibold tracking-wide">
                Kasapoğulları Ailesi
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-serif-condensed text-gray-900 mb-6">
              <span className="text-gradient-brown-blue">
                Hakkımızda
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kasapoğulları Kız Rezidans, Kütahya&apos;da üniversite öğrencilerinin kendilerini güvende, konforlu ve evlerinde hissedecekleri özel bir yaşam alanı sunmak amacıyla kurulmuştur. Dumlupınar Üniversitesi ve Sağlık Bilimleri Üniversitesi öğrencileri için ideal konumda bulunan yurdumuz, modern mimarisi, şık ve ferah odaları, 7/24 güvenlik sistemi, kesintisiz internet altyapısı ve özenle planlanmış sosyal alanlarıyla öğrencilik yıllarınıza değer katıyoruz.
              <br /><br />
              Kütahya merkezde konumlanan yurdumuz, öğrencilerimizin ihtiyaçlarına göre tasarlanmış donanımlı mutfaklar, düzenli temizlik hizmeti, sıcak-soğuk su imkanı, odaları ve dinlenme alanları ile sadece bir konaklama değil, aynı zamanda konforlu bir üniversite hayatı sunuyoruz.
            </p>
          </div>
          
          {/* Vision & Mission Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="relative">
              <div className="bg-primary-brown text-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-2.59 0-5.04-.659-7.177-1.823L15 45l2.177-7.823C15.659 35.04 15 32.59 15 30c0-8.284 6.716-15 15-15z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold font-serif-condensed text-amber-100">Vizyonumuz</h3>
                </div>
                <p className="text-amber-50 font-proxima text-lg leading-relaxed mb-6">
                Kız öğrencilere ev konforunda, güvenli ve sosyal bir yaşam alanı sunarak eğitim hayatlarına katkıda bulunmak ana hedefimizdir.
              </p>
                <div className="flex items-center text-amber-200">
                  <span className="font-semibold font-proxima">Misyonumuz</span>
                  <div className="flex-1 h-0.5 bg-amber-400 mx-4"></div>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                </div>
                </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-brown-blue-light rounded-2xl flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
                  <h3 className="text-3xl font-bold font-serif-condensed text-primary-blue">Değerlerimiz</h3>
              </div>
                <div className="space-y-4">
                  {[
                    { icon: "🛡️", title: "Güvenlik", desc: "7/24 güvenli ortam" },
                    { icon: "🤝", title: "Aile Ortamı", desc: "Sıcak ve samimi atmosfer" },
                    { icon: "📚", title: "Eğitim Odaklı", desc: "Akademik başarıya destek" },
                    { icon: "🌟", title: "Kalite", desc: "Her alanda mükemmellik" }
                  ].map((value, index) => (
                    <div key={index} className="flex items-center group">
                      <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</span>
                      <div>
                        <h4 className="font-semibold font-serif-condensed text-primary-brown">{value.title}</h4>
                        <p className="text-sm text-gray-600 font-proxima">{value.desc}</p>
            </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section - Redesigned with Brown Cards */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold font-serif-condensed text-center text-primary-blue mb-12">
              🏗️ Gelişim Hikayemiz
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { year: "2017", title: "İlk Adım", desc: "Kasapoğulları Kız Rezidans olarak ilk adımı attık", icon: "🏗️", isKahverengi: true },
                { year: "2018", title: "Kaliteli Hizmet", desc: "Kaliteli hizmet anlayışımızla, her geçen gün daha fazla öğrenciye ev sahipliği yaptık", icon: "📈", isKahverengi: false },
                { year: "2019", title: "Modern Odalar", desc: "Modern odalarımızla her geçen gün öğrencilerimizin memnuniyetine daha çok önem verdik", icon: "🔧", isKahverengi: true },
                { year: "2024", title: "Bugün", desc: "Bu güne kadar binlerce öğrenci ile Kütahya'nın en sevilen ve en güvenilir kız rezidansı olduk", icon: "🎯", isKahverengi: false }
              ].map((item, index) => (
                <div key={index} className={`group relative ${item.isKahverengi ? 'bg-primary-brown text-white' : 'bg-white text-gray-900'} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border ${item.isKahverengi ? 'border-amber-200' : 'border-gray-100'}`}>
                  {/* Year Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`${item.isKahverengi ? 'bg-amber-600' : 'bg-gradient-brown-blue'} text-white px-6 py-2 rounded-full text-sm font-bold font-serif-condensed shadow-lg`}>
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-center mb-6 mt-4">
                    <div className={`w-16 h-16 ${item.isKahverengi ? 'bg-amber-600' : 'bg-gradient-brown-blue'} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h4 className={`text-xl font-bold font-serif-condensed ${item.isKahverengi ? 'text-amber-100' : 'text-primary-blue'} mb-4`}>
                      {item.title}
                    </h4>
                  </div>
                  
                  {/* Description */}
                  <p className={`${item.isKahverengi ? 'text-amber-50' : 'text-gray-600'} font-proxima text-center leading-relaxed`}>
                    {item.desc}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-full h-2 bg-gray-200 rounded-full">
                    <div className={`h-full ${item.isKahverengi ? 'bg-amber-400' : 'bg-gradient-brown-blue'} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}></div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700"></div>
                </div>
              ))}
            </div>
          </div>




        </div>
      </section>

            {/* Enhanced Facilities Section */}
      <section id="olanaklar" className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
        {/* Same Background as About Section */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-brown/20 to-primary-blue/20 rounded-full opacity-30 animate-pulse-slow"></div>
        
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-primary-brown/10 to-amber-200/15 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-primary-blue/10 to-indigo-200/15 rounded-full opacity-25 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-18 h-18 bg-gradient-to-br from-amber-300/15 to-orange-300/20 rounded-full opacity-30 animate-float" style={{animationDelay: '3.5s'}}></div>
        
        <div className="absolute top-16 right-16 w-12 h-1 bg-gradient-to-r from-primary-brown/30 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-1 h-12 bg-gradient-to-t from-primary-blue/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-8 h-8 border border-primary-brown/25 rotate-45 animate-spin-slow"></div>
        
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, #594323 0deg, transparent 90deg, transparent 180deg, #052254 270deg, transparent 360deg)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-6 bg-white/80 backdrop-blur-sm border border-amber-200 text-primary-brown px-8 py-3 rounded-full shadow-lg">
              <span className="text-2xl mr-3">🏠</span>
              <span className="font-serif-condensed font-bold text-lg">Premium Yaşam Alanları</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-serif-condensed text-gray-900 mb-8">
              <span className="text-gradient-brown-blue">
                Olanaklar & Hizmetler
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Konforunuz ve mutluluğunuz için tasarlanmış modern yaşam alanları...
            </p>
          </div>
          
          {/* Facilities Grid - Redesigned */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
            {[
              { 
                title: "Modern ve Tek Kişilik Konforlu Odalar", 
                desc: "Tek kişilik lüks odalar, çalışma masası, geniş dolaplar, rahat ve konforlu yataklar",
                icon: "🛏️",
                color: "from-blue-500 to-indigo-500",
                details: ["Tek Kişilik Lüks Odalar", "Çalışma Masası", "Geniş Dolaplar", "Rahat ve Konforlu Yataklar"],
                image: "https://villaqrmenu.b-cdn.net/kasapogullari/Modern%20ve%20tek%20ki%C5%9Filik%20konforlu%20odalar.png"
              },
              { 
                title: "7/24 Güvenlik", 
                desc: "7/24 kamera sistemi, güvenlik personeli, ziyaretçi kontrolü, parmak izi giriş sistemi",
                icon: "🛡️",
                color: "from-red-500 to-pink-500",
                details: ["7/24 Kamera Sistemi", "Güvenlik Personeli", "Ziyaretçi Kontrolü", "Parmak İzi Giriş Sistemi"],
                image: "https://villaqrmenu.b-cdn.net/kasapogullari/7_24%20g%C3%BCvenlik.png"
              },
              { 
                title: "Merkez Konum ve Kolay Ulaşım", 
                desc: "Merkez konum, şehrin merkezinde, üniversite duraklarına 3 dakika, kafeler caddesine 5 dakika, marketlere yürüme mesafesinde",
                icon: "📍",
                color: "from-green-500 to-emerald-500",
                details: ["Merkez Konum", "Şehrin Merkezinde", "Üniversite Duraklarına 3 Dakika", "Kafeler Caddesine 5 Dakika", "Marketlere Yürüme Mesafesinde"],
                image: "https://villaqrmenu.b-cdn.net/kasapogullari/Merkezi%20konum%20ve%20kolay%20ula%C5%9F%C4%B1m.png"
              },
              { 
                title: "Spor Salonu, Etüt Odaları ve Sosyal Alanlar", 
                desc: "Konforlu etüt odaları, geniş ve ferah teras, spor salonu, sinema salonu",
                icon: "🏋️",
                color: "from-purple-500 to-pink-500",
                details: ["Konforlu Etüt Odaları", "Geniş ve Ferah Teras", "Spor Salonu", "Sinema Salonu"],
                image: "https://villaqrmenu.b-cdn.net/kasapogullari/Spor%20salonu%2C%20et%C3%BCt%20odalar%C4%B1%20ve%20sosyal%20alanlar.png"
              },
              { 
                title: "Yerden Isıtma Sistemi", 
                desc: "Yerden ısıtma sistemi, sıcak konforlu odalar, fiber internet altyapısı, her odada ayrı WC banyo",
                icon: "🔥",
                color: "from-orange-500 to-red-500",
                details: ["Yerden Isıtma Sistemi", "Sıcak Konforlu Odalar", "Fiber İnternet Altyapısı", "Her Odada Ayrı WC Banyo"],
                image: "https://villaqrmenu.b-cdn.net/kasapogullari/Yerden%20%C4%B1s%C4%B1tma%20sistemi.png"
              },
              { 
                title: "Platinum Kart Ayrıcalıkları", 
                desc: "30'dan fazla firma ile anlaşma, kafelerde & restoranlarda indirim, ücretsiz ve öğrenci dostu, sadece bir kartla onlarca fırsat",
                icon: "💎",
                color: "from-amber-500 to-orange-500",
                details: ["30'dan Fazla Firma ile Anlaşma", "Kafelerde & Restoranlarda İndirim", "Ücretsiz ve Öğrenci Dostu", "Sadece Bir Kartla Onlarca Fırsat"],
                image: "https://villaqrmenu.b-cdn.net/kasapogullari/Platinum%20kart%20ayr%C4%B1cal%C4%B1klar%C4%B1.png"
              }
            ].map((facility, index) => (
              <div key={index} className="group relative h-full">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* Header Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={`Kasapoğulları Kız Öğrenci Yurdu - ${facility.title}`}
                    width="800"
                    height="600"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${facility.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                        {facility.icon}
                      </div>
                    </div>

                    {/* Floating Animation Dots */}
                    <div className="absolute top-6 left-6 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold font-serif-condensed text-white mb-2">
                        {facility.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold font-serif-condensed text-gray-900 mb-4 group-hover:text-primary-brown transition-colors duration-300">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 font-proxima mb-6 leading-relaxed">
                      {facility.desc}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {facility.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center group/item">
                          <div className="w-6 h-6 bg-gradient-brown-blue rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                </div>
                          <span className="text-gray-700 font-proxima font-medium group-hover/item:text-primary-brown transition-colors duration-200">
                            {detail}
                          </span>
              </div>
            ))}
                    </div>

                    {/* Action Button */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300 text-primary-brown font-serif-condensed font-semibold hover:text-primary-blue flex items-center mx-auto">
                      <span>Keşfet</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 border border-amber-200">
            <h3 className="text-3xl font-bold font-serif-condensed text-primary-blue mb-4">
              🎉 Hemen Yerinizi Ayırtın!
            </h3>
            <p className="text-lg font-proxima text-gray-600 mb-8 max-w-2xl mx-auto">
              Tüm bu olanaklardan faydalanmak ve Kasapoğulları ailesinin bir parçası olmak için hemen başvurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('tel:+905412754343', '_self')}
                className="px-8 py-4 bg-gradient-brown-blue text-white rounded-xl font-serif-condensed font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                📞 Hemen Arayın
              </button>
              <button 
                onClick={() => {
                  document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-primary-brown text-primary-brown rounded-xl font-serif-condensed font-bold hover:bg-primary-brown hover:text-white transition-all duration-300"
              >
                📍 Kasapoğulları Kız Rezidansı Ziyaret Edin
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="odalar" className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
        {/* Same Background as About Section */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-brown/20 to-primary-blue/20 rounded-full opacity-30 animate-pulse-slow"></div>
        
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-primary-brown/10 to-amber-200/15 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-primary-blue/10 to-indigo-200/15 rounded-full opacity-25 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-18 h-18 bg-gradient-to-br from-amber-300/15 to-orange-300/20 rounded-full opacity-30 animate-float" style={{animationDelay: '3.5s'}}></div>
        
        <div className="absolute top-16 right-16 w-12 h-1 bg-gradient-to-r from-primary-brown/30 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-1 h-12 bg-gradient-to-t from-primary-blue/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-8 h-8 border border-primary-brown/25 rotate-45 animate-spin-slow"></div>
        
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, #594323 0deg, transparent 90deg, transparent 180deg, #052254 270deg, transparent 360deg)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif-condensed text-gray-900 mb-6">
              <span className="text-gradient-brown-blue">
                Oda Türleri
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-3xl mx-auto">
              İhtiyacınıza uygun farklı oda seçenekleri ile konforlu bir yaşam.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Suit Oda",
                popular: false
              },
              {
                title: "Suit Mutfaklı Oda",
                popular: true
              },
              {
                title: "VIP Oda",
                popular: false
              }
            ].map((room, index) => (
              <div key={index} className={`relative ${room.popular ? 'bg-primary-brown text-white ring-4 ring-amber-400 scale-105' : 'bg-white text-gray-900'} rounded-3xl shadow-xl p-8`}>
                {room.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold font-serif-condensed">
                      En Popüler
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`text-3xl font-bold font-serif-condensed ${room.popular ? 'text-amber-100' : 'text-primary-blue'} mb-4`}>{room.title}</h3>
                </div>
                <button className={`group w-full py-4 rounded-2xl font-semibold font-serif-condensed transition-all duration-300 transform hover:scale-105 overflow-hidden relative ${
                  room.popular 
                    ? 'bg-amber-600 text-white hover:shadow-xl hover:bg-amber-700' 
                    : 'border-2 border-primary-brown text-primary-brown hover:bg-primary-brown hover:text-white hover:shadow-lg'
                }`}>
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  Rezervasyon Yap
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className={`absolute inset-0 ${room.popular ? 'bg-gradient-to-r from-amber-600 to-orange-600' : 'bg-gradient-to-r from-primary-brown to-primary-blue'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  {room.popular && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Location Section */}
      <section id="konum" className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
        {/* Same Background as About Section */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-brown/20 to-primary-blue/20 rounded-full opacity-30 animate-pulse-slow"></div>
        
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-primary-brown/10 to-amber-200/15 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-primary-blue/10 to-indigo-200/15 rounded-full opacity-25 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-18 h-18 bg-gradient-to-br from-amber-300/15 to-orange-300/20 rounded-full opacity-30 animate-float" style={{animationDelay: '3.5s'}}></div>
        
        <div className="absolute top-16 right-16 w-12 h-1 bg-gradient-to-r from-primary-brown/30 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-1 h-12 bg-gradient-to-t from-primary-blue/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-8 h-8 border border-primary-brown/25 rotate-45 animate-spin-slow"></div>
        
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, #594323 0deg, transparent 90deg, transparent 180deg, #052254 270deg, transparent 360deg)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-6 bg-white/80 backdrop-blur-sm border border-amber-200 text-primary-brown px-8 py-3 rounded-full shadow-lg">
              <span className="text-2xl mr-3">📍</span>
              <span className="font-serif-condensed font-bold text-lg">Stratejik Konum Avantajı</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-serif-condensed text-gray-900 mb-8">
              <span className="text-gradient-brown-blue">
                Konum & Ulaşım
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <span className="text-primary-brown font-semibold">İstanbul&apos;un kalbinde</span>, tüm üniversitelere ve sosyal alanlara 
              <span className="text-primary-blue font-semibold"> kolayca ulaşabileceğiniz</span> eşsiz konumumuz.
            </p>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Transportation & Universities */}
            <div className="space-y-10">
              {/* Universities Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-brown-blue rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-3xl font-bold font-serif-condensed text-primary-blue">Yakınımızdaki Üniversiteler</h3>
                </div>
              <div className="space-y-4">
                {[
                    { name: "Dumlupınar Üniversitesi", distance: "Otobüs durağına 300 metre", type: "Otobüs", color: "bg-blue-100 text-blue-700" },
                    { name: "Kütahya Sağlık Bilimler Üniversitesi", distance: "Otobüs durağına 300 metre", type: "Otobüs", color: "bg-blue-100 text-blue-700" }
                ].map((uni, index) => (
                    <div key={index} className="group bg-white/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold font-serif-condensed text-gray-900 text-lg group-hover:text-primary-brown transition-colors duration-300">{uni.name}</h4>
                          <div className="flex items-center mt-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${uni.color} mr-3`}>
                              {uni.type}
                            </span>
                            <span className="text-gray-600 font-proxima">{uni.distance}</span>
                          </div>
                        </div>
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">🏫</div>
                      </div>
                      <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-brown-blue h-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" style={{width: index === 0 ? '90%' : index === 1 ? '75%' : index === 2 ? '60%' : '45%'}}></div>
                      </div>
                  </div>
                ))}
                </div>
              </div>
              
              {/* Transportation Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-brown-blue-light rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🚌</span>
                  </div>
                  <h3 className="text-3xl font-bold font-serif-condensed text-primary-blue">Ulaşım Seçenekleri</h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { icon: "🚌", name: "Otobüs Durağı", distance: "300 metre", color: "from-blue-400 to-blue-500" }
                ].map((transport, index) => (
                    <div key={index} className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className={`w-16 h-16 bg-gradient-to-r ${transport.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{transport.icon}</span>
                      </div>
                      <h4 className="font-bold font-serif-condensed text-gray-900 mb-2 group-hover:text-primary-brown transition-colors duration-300">{transport.name}</h4>
                      <p className="text-primary-brown font-proxima font-semibold">{transport.distance}</p>
                      <div className="mt-3 w-full h-1 bg-gray-200 rounded-full">
                        <div className={`h-full bg-gradient-to-r ${transport.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                      </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
            
            {/* Right Side - Map and Address */}
            <div className="space-y-8">
              {/* Google Maps */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-brown-blue rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">🗺️</span>
              </div>
                  <h3 className="text-2xl font-bold font-serif-condensed text-primary-blue">İnteraktif Harita</h3>
                </div>
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.7839832288894!2d29.9833!3d39.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI1JzAwLjAiTiAyOcKwNTknMDAuMCJF!5e0!3m2!1str!2str!4v1709123456789!5m2!1str!2str"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-6 flex gap-4">
                  <button className="flex-1 bg-gradient-brown-blue text-white py-3 rounded-xl font-semibold font-serif-condensed hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Haritada Büyüt
                  </button>
                  <button className="flex-1 border-2 border-primary-brown text-primary-brown py-3 rounded-xl font-semibold font-serif-condensed hover:bg-primary-brown hover:text-white transition-all duration-300 flex items-center justify-center group">
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Yol Tarifi Al
                </button>
              </div>
            </div>

              {/* Address & Contact Info */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl border border-amber-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-brown-blue rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif-condensed text-primary-blue">İletişim Bilgileri</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-brown-blue rounded-xl flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold font-serif-condensed text-primary-brown mb-1">Adres</h4>
                      <p className="text-gray-700 font-proxima">
                        Yıldırım Beyazıt Mahallesi,<br />
                        Özengi sokak, no:2 Merkez /<br />
                        KÜTAHYA
                      </p>
                    </div>
            </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-brown-blue rounded-xl flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold font-serif-condensed text-primary-brown mb-1">Telefon</h4>
                      <p className="text-gray-700 font-proxima">
                        +90 541 275 43 43
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-brown-blue rounded-xl flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold font-serif-condensed text-primary-brown mb-1">Ziyaret Saatleri</h4>
                      <p className="text-gray-700 font-proxima">
                        Hafta içi: 09:00-18:00<br />
                        Hafta sonu: 10:00-16:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Advantages */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold font-serif-condensed text-center text-primary-blue mb-12">
              🌟 Konum Avantajlarımız
            </h3>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  icon: "📍",
                  title: "Merkezi Konum",
                  desc: "Şehrin tam merkezinde konumlanmış olup, tüm önemli noktalara kolay erişim imkanı sunuyor.",
                  color: "from-amber-500 to-orange-500",
                  isKahverengi: true
                },
                {
                  icon: "🚌",
                  title: "Ulaşım Ağı",
                  desc: "Otobüs durağına sadece 3 dakika yürüme mesafesinde bulunan rezidansımız, toplu taşıma ağına mükemmel entegrasyon sağlıyor.",
                  color: "from-blue-500 to-indigo-500",
                  isKahverengi: false
                },
                {
                  icon: "🛍️",
                  title: "Sosyal Hayat",
                  desc: "Apartımız market, kafeler, toplu taşıma araçlarına yakınlığı sayesinde, öğrencilerin günlük hayatını büyük ölçüde kolaylaştırıyor",
                  color: "from-green-500 to-emerald-500",
                  isKahverengi: true
                }
              ].map((advantage, index) => (
                <div key={index} className={`group ${advantage.isKahverengi ? 'bg-primary-brown text-white' : 'bg-white text-gray-900'} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border ${advantage.isKahverengi ? 'border-amber-200' : 'border-gray-100'} h-full flex flex-col`}>
                  <div className={`w-16 h-16 ${advantage.isKahverengi ? 'bg-amber-600' : `bg-gradient-to-r ${advantage.color}`} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{advantage.icon}</span>
                  </div>
                  <h4 className={`text-xl font-bold font-serif-condensed ${advantage.isKahverengi ? 'text-amber-100' : 'text-primary-blue'} text-center mb-4 group-hover:text-primary-brown transition-colors duration-300`}>
                    {advantage.title}
                  </h4>
                  <p className={`${advantage.isKahverengi ? 'text-amber-50' : 'text-gray-600'} font-proxima text-center leading-relaxed flex-grow`}>
                    {advantage.desc}
                  </p>
                  <div className="mt-6 w-full h-1 bg-gray-200 rounded-full">
                    <div className={`h-full ${advantage.isKahverengi ? 'bg-amber-400' : `bg-gradient-to-r ${advantage.color}`} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
        {/* Same Background as About Section */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-brown/20 to-primary-blue/20 rounded-full opacity-30 animate-pulse-slow"></div>
        
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-primary-brown/10 to-amber-200/15 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-primary-blue/10 to-indigo-200/15 rounded-full opacity-25 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-18 h-18 bg-gradient-to-br from-amber-300/15 to-orange-300/20 rounded-full opacity-30 animate-float" style={{animationDelay: '3.5s'}}></div>
        
        <div className="absolute top-16 right-16 w-12 h-1 bg-gradient-to-r from-primary-brown/30 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-1 h-12 bg-gradient-to-t from-primary-blue/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-8 h-8 border border-primary-brown/25 rotate-45 animate-spin-slow"></div>
        
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, #594323 0deg, transparent 90deg, transparent 180deg, #052254 270deg, transparent 360deg)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif-condensed text-gray-900 mb-6">
              <span className="text-gradient-brown-blue">
                Galeri
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-3xl mx-auto">
              Yurdumuzdaki yaşam alanlarından görüntüler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <div 
                key={index} 
                className="relative gallery-item rounded-3xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
                onClick={() => openLightbox(index)}
                style={{
                  willChange: 'transform',
                }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out"
                    style={{
                      willChange: 'transform',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  
                  {/* Overlay that appears on hover */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-200"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0';
                    }}
                  />
                  
                  {/* View Icon */}
                  <div 
                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      opacity: '0',
                      transform: 'scale(0.8)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0';
                      e.currentTarget.style.transform = 'scale(0.8)';
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7l3 3-3 3" />
                    </svg>
                  </div>
                  
                  {/* Click to View Text */}
                  <div 
                    className="absolute bottom-4 left-4 transition-all duration-200"
                    style={{
                      opacity: '0',
                      transform: 'translateY(10px)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0';
                      e.currentTarget.style.transform = 'translateY(10px)';
                    }}
                  >
                    <span className="text-white font-medium text-sm bg-black/50 px-3 py-2 rounded-full backdrop-blur-sm">
                      Görüntülemek için tıklayın
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 parallax-section relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}>
        {/* Enhanced Statistics Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '100px 100px, 150px 150px'
          }}></div>
        </div>
        
        {/* Floating Numbers */}
        <div className="absolute top-10 left-10 text-6xl text-white/5 font-bold animate-pulse">15</div>
        <div className="absolute top-20 right-20 text-4xl text-white/5 font-bold animate-float">100</div>
        <div className="absolute bottom-20 left-20 text-5xl text-white/5 font-bold animate-pulse" style={{animationDelay: '1s'}}>98</div>
        <div className="absolute bottom-10 right-10 text-3xl text-white/5 font-bold animate-float" style={{animationDelay: '2s'}}>50</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif-condensed text-white mb-6">
              <span className="text-gradient-brown-blue">
                Rakamlarla Kasapoğulları
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-300 max-w-3xl mx-auto mb-12">
              Kasapoğulları ailesinin bir parçası olan öğrencilerimizin deneyimleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "7+", label: "Yıl Deneyim", icon: "🏆" },
              { number: "1000+", label: "Mezun Öğrenci", icon: "🎓" },
              { number: "50", label: "Oda Kapasitesi", icon: "🏠" },
              { number: "%98", label: "Memnuniyet Oranı", icon: "❤️" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold font-serif-condensed text-white mb-2 stats-number">{stat.number}</div>
                <div className="text-white/80 font-proxima text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="yorumlar" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        {/* Speech Bubble Inspired Background */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-primary-brown/8 to-amber-200/12 rounded-full opacity-40 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-44 h-44 bg-gradient-to-br from-primary-blue/8 to-blue-200/12 rounded-full opacity-40 animate-pulse-slow" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-gradient-to-br from-amber-300/15 to-orange-300/20 rounded-full opacity-35 animate-float" style={{animationDelay: '1.4s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-gradient-to-br from-primary-blue/10 to-indigo-200/15 rounded-full opacity-35 animate-pulse-slow" style={{animationDelay: '3.4s'}}></div>
        
        {/* Quote Marks and Speech Elements */}
        <div className="absolute top-20 left-20 w-12 h-12 border-4 border-primary-brown/25 rounded-full animate-pulse">
          <div className="absolute top-1 left-2 text-2xl text-primary-brown/30">&quot;</div>
        </div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-3 border-primary-blue/25 rounded-full rotate-12 animate-spin-slow">
          <div className="absolute top-2 right-3 text-xl text-primary-blue/30">&quot;</div>
        </div>
        <div className="absolute top-1/3 right-16 w-8 h-8 bg-amber-400/30 rounded-full animate-bounce" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute bottom-1/3 left-16 w-10 h-10 bg-primary-brown/20 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
        
        {/* Chat Bubble Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23594323' fill-opacity='1'%3E%3Cpath d='M30 15c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-2.59 0-5.04-.659-7.177-1.823L15 45l2.177-7.823C15.659 35.04 15 32.59 15 30c0-8.284 6.716-15 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}></div>
        </div>
        
        {/* Star Rating Elements */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 text-amber-400/40 animate-pulse">⭐</div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 text-amber-400/40 animate-ping" style={{animationDelay: '1.5s'}}>⭐</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif-condensed text-gray-900 mb-6">
              <span className="text-gradient-brown-blue">
                Öğrenci Yorumları
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-3xl mx-auto">
              Kasapoğulları ailesinin bir parçası olan öğrencilerimizin deneyimleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Elif Yılmaz",
                school: "Dumlupınar Üniversitesi",
                text: "3 yıldır burada kalıyorum. Güvenli, temiz ve personel çok ilgili. Ailemden uzakta olduğumu hiç hissetmedim.",
                rating: 5
              },
              {
                name: "Merve Arslan",
                school: "Dumlupınar Üniversitesi",
                text: "Odalar çok rahat ve temiz. Arkadaş ortamı harika. Herkese tavsiye ederim.",
                rating: 5
              },
              {
                name: "Selin Öztürk",
                school: "Sağlık Bilimleri Üniversitesi",
                text: "Konum olarak çok merkezi. Hem üniversiteme hem de şehir merkezine çok yakın. Çok memnunum.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-brown-blue rounded-full flex items-center justify-center mr-4 text-white text-xl font-bold font-serif-condensed">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-serif-condensed text-gray-900">{testimonial.name}</h4>
                    <p className="text-primary-brown font-proxima text-sm">{testimonial.school}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 font-proxima italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
        {/* Same Background as About Section */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-brown/20 to-primary-blue/20 rounded-full opacity-30 animate-pulse-slow"></div>
        
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-primary-brown/10 to-amber-200/15 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-primary-blue/10 to-indigo-200/15 rounded-full opacity-25 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-18 h-18 bg-gradient-to-br from-amber-300/15 to-orange-300/20 rounded-full opacity-30 animate-float" style={{animationDelay: '3.5s'}}></div>
        
        <div className="absolute top-16 right-16 w-12 h-1 bg-gradient-to-r from-primary-brown/30 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-1 h-12 bg-gradient-to-t from-primary-blue/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/2 w-8 h-8 border border-primary-brown/25 rotate-45 animate-spin-slow"></div>
        
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, #594323 0deg, transparent 90deg, transparent 180deg, #052254 270deg, transparent 360deg)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif-condensed text-gray-900 mb-6">
              <span className="text-gradient-brown-blue">
                İletişim
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-3xl mx-auto">
              Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold font-serif-condensed text-primary-blue mb-8">İletişim Bilgileri</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-brown-blue rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif-condensed text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600 font-proxima">+90 541 275 43 43</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-brown-blue-light rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif-condensed text-gray-900 mb-1">Instagram</h4>
                    <p className="text-gray-600 font-proxima">@kasapogullarikizrezidans43</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-brown-blue rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif-condensed text-gray-900 mb-1">Adres</h4>
                    <p className="text-gray-600 font-proxima">
                      Yıldırım Beyazıt Mahallesi,<br />
                      Özengi sokak, no:2 Merkez /<br />
                      KÜTAHYA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-brown-blue-light rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif-condensed text-gray-900 mb-1">Çalışma Saatleri</h4>
                    <p className="text-gray-600 font-proxima">Hafta içi: 09:00-18:00<br />Hafta sonu: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold font-serif-condensed text-primary-blue mb-6">Bize Yazın</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Adınız Soyadınız" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-brown focus:border-transparent outline-none transition-all font-proxima"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="E-posta Adresiniz" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-brown focus:border-transparent outline-none transition-all font-proxima"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Telefon Numaranız" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-brown focus:border-transparent outline-none transition-all font-proxima"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Mesajınız" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-brown focus:border-transparent outline-none transition-all resize-none font-proxima"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-brown-blue text-white py-4 rounded-xl font-semibold font-serif-condensed hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-serif-condensed text-gradient-brown-blue mb-4">
                Kasapoğulları Yurdu
              </h3>
              <p className="text-gray-400 font-proxima">
                Güvenli, konforlu ve modern yaşam alanları ile eğitim hayatınızda size destek oluyoruz.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold font-serif-condensed mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-gray-400 font-proxima">
                <li><a href="#anasayfa" className="hover:text-amber-400 transition-colors">Ana Sayfa</a></li>
                <li><a href="#hakkimizda" className="hover:text-amber-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#olanaklar" className="hover:text-amber-400 transition-colors">Olanaklar</a></li>
                <li><a href="#odalar" className="hover:text-amber-400 transition-colors">Odalar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold font-serif-condensed mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400 font-proxima">
                <li>+90 541 275 43 43</li>
                <li>@kasapogullarikizrezidans43</li>
                <li>Kütahya</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold font-serif-condensed mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/kasapogullarikizrezidans43" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-brown-blue rounded-full flex items-center justify-center hover:shadow-lg transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="font-proxima">&copy; 2024 Kasapoğulları Kız Öğrenci Yurdu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={galleryImages[currentImageIndex].image}
                alt={galleryImages[currentImageIndex].alt}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                style={{
                  minWidth: '60vw',
                  minHeight: '60vh'
                }}
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Keyboard Navigation */}
            <div className="absolute bottom-4 left-4 text-white/60 text-sm">
              <p>← → tuşları ile gezinin</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
