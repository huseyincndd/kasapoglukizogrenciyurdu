"use client";
import { useEffect } from "react";

export default function Home() {
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold font-serif-condensed text-gradient-brown-blue">
                Kasapoğlu Kız Öğrenci Yurdu
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#anasayfa" className="nav-link hover:text-primary-brown transition-colors">Ana Sayfa</a>
              <a href="#hakkimizda" className="nav-link hover:text-primary-brown transition-colors">Hakkımızda</a>
              <a href="#olanaklar" className="nav-link hover:text-primary-brown transition-colors">Olanaklar</a>
              <a href="#odalar" className="nav-link hover:text-primary-brown transition-colors">Odalar</a>
              <a href="#galeri" className="nav-link hover:text-primary-brown transition-colors">Galeri</a>
              <a href="#yorumlar" className="nav-link hover:text-primary-brown transition-colors">Yorumlar</a>
              <a href="#konum" className="nav-link hover:text-primary-brown transition-colors">Konum</a>
              <a href="#iletisim" className="nav-link hover:text-primary-brown transition-colors">İletişim</a>
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
      <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slider Background */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Slide 1 */}
            <div className="absolute inset-0 animate-slide-1">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                }}
              ></div>
            </div>
            
            {/* Slide 2 */}
            <div className="absolute inset-0 animate-slide-2">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                }}
              ></div>
            </div>
            
            {/* Slide 3 */}
            <div className="absolute inset-0 animate-slide-3">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
                Kasapoğlu
              </span>
              <br />
              <span className="text-white">Kız Öğrenci Yurdu</span>
            </h1>
            <p className="text-xl md:text-3xl font-proxima text-white/90 mb-12 max-w-4xl mx-auto drop-shadow-lg">
              Güvenli, konforlu ve modern yaşam alanları ile eğitim hayatınızda size destek oluyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-12 py-6 bg-gradient-brown-blue text-white rounded-full text-xl font-bold font-serif-condensed overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500 backdrop-blur-sm">
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
              <button className="group relative px-12 py-6 border-3 border-white text-white rounded-full text-xl font-bold font-serif-condensed overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-500 backdrop-blur-sm hover:bg-white hover:text-primary-blue">
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

            {/* Why Kasapoğlu Section - New Simple Approach */}
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
                Kasapoğlu Farkı
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-serif-condensed text-gray-900 mb-6">
              <span className="text-gradient-brown-blue">
                Neden Kasapoğlu?
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-4xl mx-auto leading-relaxed">
              15 yıllık deneyimimizle binlerce öğrenciye ev sahipliği yaptık. 
              <span className="text-primary-brown font-semibold"> Bizi tercih etmenizin </span>
              sebepleri çok açık.
            </p>
          </div>
          
          {/* Simple Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {[
              {
                icon: "🏆",
                title: "15 Yıl Deneyim",
                description: "2010'dan beri binlerce öğrenciye hizmet veriyoruz. Deneyimli kadromuzla size en iyi hizmeti sunuyoruz.",
                isKahverengi: true
              },
              {
                icon: "🛡️",
                title: "Güvenlik Önceliği",
                description: "7/24 güvenlik sistemi, akıllı kartlı giriş ve güvenlik personeli ile aileniz gibi güvendesiniz.",
                isKahverengi: false
              },
              {
                icon: "📍",
                title: "Merkezi Konum",
                description: "İstanbul'un kalbinde, tüm üniversitelere ve sosyal alanlara yürüme mesafesinde konumumuz.",
                isKahverengi: true
              },
              {
                icon: "🍽️",
                title: "Ev Yemekleri",
                description: "Profesyonel şeflerimizle günlük 3 öğün, ev yemekleri tadında, sağlıklı ve lezzetli menüler.",
                isKahverengi: false
              },
              {
                icon: "📚",
                title: "Çalışma Ortamı",
                description: "Sessiz çalışma alanları, fiber internet ve akademik başarınız için ideal ortam koşulları.",
                isKahverengi: true
              },
              {
                icon: "❤️",
                title: "Aile Ortamı",
                description: "Sıcak ve samimi atmosferimizle ailenizden uzakta olduğunuzu hiç hissetmeyeceğiniz ortam.",
                isKahverengi: false
              }
            ].map((feature, index) => (
              <div key={index} className={`${feature.isKahverengi ? 'bg-primary-brown text-white' : 'bg-white/80 text-gray-900'} backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${feature.isKahverengi ? 'border-amber-200' : 'border-amber-100'}`}>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${feature.isKahverengi ? 'bg-amber-600' : 'bg-gradient-brown-blue'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
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
              Kasapoğlu ailesinin bir parçası olmak için bugün başvurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-brown-blue text-white rounded-xl font-serif-condensed font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                📞 Hemen Arayın
              </button>
              <button className="px-8 py-4 border-2 border-primary-brown text-primary-brown rounded-xl font-serif-condensed font-bold hover:bg-primary-brown hover:text-white transition-all duration-300">
                📍 Yurdu Ziyaret Edin
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
                Kasapoğlu Ailesi
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-serif-condensed text-gray-900 mb-6">
              <span className="text-gradient-brown-blue">
                Hakkımızda
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-4xl mx-auto leading-relaxed">
              2010 yılından beri kız öğrencilere güvenli ve konforlu barınma imkanı sağlayan, 
              <span className="text-primary-brown font-semibold"> deneyimli ekibimizle </span>
              her zaman yanınızdayız.
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
                { year: "2010", title: "Kuruluş", desc: "İlk adımlarımızı attık ve hayalimizi gerçekleştirmeye başladık", icon: "🏗️", isKahverengi: true },
                { year: "2015", title: "Büyüme", desc: "Kapasitemizi artırdık, daha fazla öğrenciye ev sahipliği yaptık", icon: "📈", isKahverengi: false },
                { year: "2020", title: "Modernizasyon", desc: "Tesisleri yeniledik ve teknolojik altyapıyı güçlendirdik", icon: "🔧", isKahverengi: true },
                { year: "2024", title: "Bugün", desc: "1000+ memnun öğrenci ile İstanbul'un en güvenilir yurdu olduk", icon: "🎯", isKahverengi: false }
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



          {/* Team Photo Section */}
          <div className="mt-20 text-center">
            <div className="relative inline-block">
              <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Kasapoğlu Team"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h4 className="text-2xl font-bold font-serif-condensed mb-2">Deneyimli Ekibimiz</h4>
                  <p className="font-proxima opacity-90">Size en iyi hizmeti sunmak için buradayız</p>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-white rounded-full shadow-xl border-4 border-amber-100">
                <span className="text-primary-brown font-bold font-serif-condensed">💪 Güçlü Ekip</span>
              </div>
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
              Konforunuz ve mutluluğunuz için tasarlanmış <span className="text-primary-brown font-semibold">modern tesisler</span> ve 
              <span className="text-primary-blue font-semibold"> özel hizmetler</span>
            </p>
          </div>
          
          {/* Facilities Grid - Redesigned */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Gourmet Mutfak", 
                desc: "Profesyonel şeflerimizle günlük 3 öğün ev yemekleri",
                icon: "👨‍🍳",
                color: "from-orange-500 to-red-500",
                details: ["3 Öğün Yemek", "Özel Diyet Menüsü", "24/7 Mutfak", "Organik Malzemeler"],
                rating: "4.9/5",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              { 
                title: "Akıllı Çalışma Alanları", 
                desc: "Teknoloji destekli, sessiz ve verimli çalışma ortamı",
                icon: "🧠",
                color: "from-blue-500 to-indigo-500",
                details: ["Fiber İnternet", "Sessizlik Garantisi", "Ergonomik Mobilya", "Klima Kontrolü"],
                rating: "4.8/5",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              { 
                title: "Wellness Merkezi", 
                desc: "Spor, yoga ve sağlıklı yaşam için tam donanımlı alan",
                icon: "💪",
                color: "from-green-500 to-emerald-500",
                details: ["Modern Ekipmanlar", "Yoga Salonu", "Kişisel Antrenör", "Sağlık Danışmanlığı"],
                rating: "4.7/5",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              { 
                title: "7/24 Güvenlik Sistemi", 
                desc: "İleri teknoloji güvenlik ve acil durum yönetimi",
                icon: "🛡️",
                color: "from-red-500 to-pink-500",
                details: ["Akıllı Kartlı Giriş", "CCTV Sistemler", "Güvenlik Personeli", "Acil Müdahale"],
                rating: "5.0/5",
                image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              { 
                title: "Sosyal Yaşam Alanları", 
                desc: "Arkadaş ortamı ve sosyal aktiviteler için tasarlanmış alanlar",
                icon: "🎯",
                color: "from-purple-500 to-pink-500",
                details: ["Sinema Köşesi", "Oyun Alanları", "Etkinlik Salonu", "Bahçe Terası"],
                rating: "4.9/5",
                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              { 
                title: "Premium Hizmetler", 
                desc: "Günlük yaşamınızı kolaylaştıran özel hizmet paketi",
                icon: "✨",
                color: "from-amber-500 to-orange-500",
                details: ["Çamaşırhane", "Temizlik Servisi", "Otopark", "Kargo Alım"],
                rating: "4.8/5",
                image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((facility, index) => (
              <div key={index} className="group relative">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 overflow-hidden border border-gray-100">
                  {/* Header Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Icon & Rating Badge */}
                    <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
                      <div className={`w-12 h-12 bg-gradient-to-r ${facility.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                        {facility.icon}
                  </div>
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <div className="flex items-center">
                          <span className="text-yellow-500 text-sm mr-1">⭐</span>
                          <span className="text-xs font-bold text-gray-700">{facility.rating}</span>
                </div>
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
                <div className="p-6">
                    <p className="text-gray-600 font-proxima mb-6 leading-relaxed">
                      {facility.desc}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
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
              Tüm bu olanaklardan faydalanmak ve Kasapoğlu ailesinin bir parçası olmak için hemen başvurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-brown-blue text-white rounded-xl font-serif-condensed font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                📞 Hemen Arayın
              </button>
              <button className="px-8 py-4 border-2 border-primary-brown text-primary-brown rounded-xl font-serif-condensed font-bold hover:bg-primary-brown hover:text-white transition-all duration-300">
                📍 Yurdu Ziyaret Edin
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
                title: "Tek Kişilik Oda",
                price: "2.500 TL/Ay",
                features: ["Özel banyo", "Dolap", "Çalışma masası", "WiFi", "Klima"],
                popular: false
              },
              {
                title: "İki Kişilik Oda",
                price: "2.000 TL/Ay",
                features: ["Özel banyo", "2 dolap", "2 çalışma masası", "WiFi", "Klima"],
                popular: true
              },
              {
                title: "Üç Kişilik Oda",
                price: "1.750 TL/Ay",
                features: ["Özel banyo", "3 dolap", "3 çalışma masası", "WiFi", "Klima"],
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
                  <h3 className={`text-2xl font-bold font-serif-condensed ${room.popular ? 'text-amber-100' : 'text-primary-blue'} mb-4`}>{room.title}</h3>
                  <div className={`text-4xl font-bold font-serif-condensed ${room.popular ? 'text-amber-200' : 'text-primary-brown'} mb-2`}>{room.price}</div>
                  <div className={`${room.popular ? 'text-amber-300' : 'text-gray-500'} font-proxima`}>Kişi başı</div>
                </div>
                                <ul className="space-y-4 mb-8">
                  {room.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`${room.popular ? 'text-amber-100' : 'text-gray-700'} font-proxima`}>{feature}</span>
                    </li>
                  ))}
                </ul>
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
            <div className="inline-flex items-center mb-6 bg-gradient-brown-blue text-white px-8 py-3 rounded-full">
              <span className="text-2xl mr-3">📍</span>
              <span className="font-serif-condensed font-bold text-lg">Stratejik Konum Avantajı</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-serif-condensed text-gray-900 mb-8">
              <span className="text-gradient-brown-blue">
                Konum & Ulaşım
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <span className="text-primary-brown font-semibold">İstanbul'un kalbinde</span>, tüm üniversitelere ve sosyal alanlara 
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
                    { name: "İstanbul Üniversitesi", distance: "5 dk yürüme", type: "Yürüyüş", color: "bg-green-100 text-green-700" },
                    { name: "Marmara Üniversitesi", distance: "10 dk", type: "Otobüs", color: "bg-blue-100 text-blue-700" },
                    { name: "İstanbul Teknik Üniversitesi", distance: "15 dk", type: "Metro", color: "bg-purple-100 text-purple-700" },
                    { name: "Boğaziçi Üniversitesi", distance: "20 dk", type: "Otobüs", color: "bg-blue-100 text-blue-700" }
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
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: "🚌", name: "Otobüs Durağı", distance: "2 dk", color: "from-blue-400 to-blue-500" },
                    { icon: "🚇", name: "Metro İstasyonu", distance: "5 dk", color: "from-purple-400 to-purple-500" },
                    { icon: "🚕", name: "Taksi Durağı", distance: "1 dk", color: "from-yellow-400 to-yellow-500" },
                    { icon: "🛒", name: "AVM & Market", distance: "10 dk", color: "from-green-400 to-green-500" }
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.7839832288894!2d28.947253376456924!3d41.01901997133131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0x4c7543cd5888394!2sFatih%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1709123456789!5m2!1str!2str"
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
                  Kasapoğlu Kız Öğrenci Yurdu<br />
                        Fatih/İSTANBUL<br />
                        <span className="text-sm text-gray-600">Şehir merkezi konumunda</span>
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
                        +90 212 XXX XX XX<br />
                        <span className="text-sm text-gray-600">7/24 ulaşabilirsiniz</span>
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
                        Hafta sonu: 10:00-16:00<br />
                        <span className="text-sm text-gray-600">Randevu ile de kabul edilir</span>
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
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏛️",
                  title: "Tarihi Merkez",
                  desc: "İstanbul'un tarihi dokusunun kalbinde",
                  color: "from-amber-500 to-orange-500",
                  isKahverengi: true
                },
                {
                  icon: "🚇",
                  title: "Ulaşım Ağı",
                  desc: "Metro, otobüs ve tramvay hatlarına yakın",
                  color: "from-blue-500 to-indigo-500",
                  isKahverengi: false
                },
                {
                  icon: "🛍️",
                  title: "Sosyal Hayat",
                  desc: "AVM, sinema, kafe ve restoranlar yürüme mesafesinde",
                  color: "from-green-500 to-emerald-500",
                  isKahverengi: true
                }
              ].map((advantage, index) => (
                <div key={index} className={`group ${advantage.isKahverengi ? 'bg-primary-brown text-white' : 'bg-white text-gray-900'} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border ${advantage.isKahverengi ? 'border-amber-200' : 'border-gray-100'}`}>
                  <div className={`w-16 h-16 ${advantage.isKahverengi ? 'bg-amber-600' : `bg-gradient-to-r ${advantage.color}`} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{advantage.icon}</span>
                  </div>
                  <h4 className={`text-xl font-bold font-serif-condensed ${advantage.isKahverengi ? 'text-amber-100' : 'text-primary-blue'} text-center mb-4 group-hover:text-primary-brown transition-colors duration-300`}>
                    {advantage.title}
                  </h4>
                  <p className={`${advantage.isKahverengi ? 'text-amber-50' : 'text-gray-600'} font-proxima text-center leading-relaxed`}>
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
            {[
              { 
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Modern Odalarımız",
                category: "Odalar",
                icon: "🏠"
              },
              { 
                image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Çalışma Alanları",
                category: "Akademik",
                icon: "📚"
              },
              { 
                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Sosyal Alanlar",
                category: "Ortak Alan",
                icon: "🤝"
              },
              { 
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Spor ve Aktivite",
                category: "Sosyal",
                icon: "🏃‍♀️"
              },
              { 
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Yemek Salonumuz",
                category: "Yemek",
                icon: "🍽️"
              },
              { 
                image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                title: "Temizlik ve Bakım",
                category: "Hizmet",
                icon: "✨"
              }
            ].map((item, index) => (
              <div key={index} className="group relative gallery-item rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-serif-condensed font-medium rounded-full border border-white/30">
                      <span className="mr-2">{item.icon}</span>
                      {item.category}
                    </span>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7l3 3-3 3" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold font-serif-condensed text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/80 font-proxima text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      Detayları görmek için tıklayın
                    </p>
                    
                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-brown-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-brown/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              Rakamlarla Kasapoğlu
            </h2>
            <p className="text-xl font-proxima text-white/90 max-w-3xl mx-auto">
              15 yıllık deneyimimizle binlerce öğrenciye ev sahipliği yaptık
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Yıl Deneyim", icon: "🏆" },
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
          <div className="absolute top-1 left-2 text-2xl text-primary-brown/30">"</div>
        </div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-3 border-primary-blue/25 rounded-full rotate-12 animate-spin-slow">
          <div className="absolute top-2 right-3 text-xl text-primary-blue/30">"</div>
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
              Kasapoğlu ailesinin bir parçası olan öğrencilerimizin deneyimleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ayşe Demir",
                school: "İstanbul Üniversitesi",
                text: "3 yıldır burada kalıyorum. Güvenli, temiz ve personel çok ilgili. Ailemden uzakta olduğumu hiç hissetmedim.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                rating: 5
              },
              {
                name: "Fatma Özkan",
                school: "Marmara Üniversitesi",
                text: "Odalar çok rahat ve temiz. Yemekler lezzetli. Arkadaş ortamı harika. Herkese tavsiye ederim.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                rating: 5
              },
              {
                name: "Zeynep Kaya",
                school: "İTÜ",
                text: "Konum olarak çok merkezi. Hem üniversiteme hem de şehir merkezine çok yakın. Çok memnunum.",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
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

      {/* FAQ Section - Redesigned */}
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
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-gradient-brown-blue text-white rounded-full text-sm font-serif-condensed font-semibold tracking-wide">
                Merak Ettikleriniz
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif-condensed text-gray-900 mb-6">
              <span className="text-gradient-brown-blue">
                Sıkça Sorulan Sorular
              </span>
            </h2>
            <p className="text-xl font-proxima text-gray-600 max-w-3xl mx-auto">
              En çok merak edilen sorular ve detaylı cevapları
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                question: "Oda rezervasyonu nasıl yapılır?",
                answer: "Rezervasyon için bizi arayabilir veya yurdumuza gelerek başvuru yapabilirsiniz. Gerekli evraklar: TC kimlik, öğrenci belgesi ve veliden onay mektubu.",
                icon: "📝",
                isKahverengi: true
              },
              {
                question: "Aylık ücretler neleri kapsar?",
                answer: "Aylık ücretlerimiz barınma, 3 öğün yemek, WiFi, temizlik, çamaşırhane kullanımı ve tüm ortak alanların kullanımını kapsar.",
                icon: "💰",
                isKahverengi: false
              },
              {
                question: "Ziyaret saatleri nelerdir?",
                answer: "Aile ziyaretleri hafta içi 18:00-20:00, hafta sonu 14:00-20:00 saatleri arasında yapılabilir. Önceden haber verilmesi gerekmektedir.",
                icon: "🕒",
                isKahverengi: true
              },
              {
                question: "Yurt kuralları nelerdir?",
                answer: "Sessizlik saatleri 22:00-07:00, misafir kabul etmek yasak, alkol ve sigara kullanımı yasak, odalar temiz tutulmalı ve ortak alanlar düzenli kullanılmalıdır.",
                icon: "📋",
                isKahverengi: false
              },
              {
                question: "Yemek seçeneği var mı?",
                answer: "Günlük menümüz değişkendir ve vejeteryan seçenekler de mevcuttur. Özel diyet ihtiyaçları için mutfak personelimizle görüşebilirsiniz.",
                icon: "🍽️",
                isKahverengi: true
              },
              {
                question: "Güvenlik önlemleri nelerdir?",
                answer: "24/7 güvenlik kamerası, akıllı kart sistemli giriş, güvenlik personeli ve acil durum protokolleri ile maksimum güvenlik sağlıyoruz.",
                icon: "🛡️",
                isKahverengi: false
              }
            ].map((faq, index) => (
              <div key={index} className={`group ${faq.isKahverengi ? 'bg-primary-brown text-white' : 'bg-white text-gray-900'} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${faq.isKahverengi ? 'border-amber-200' : 'border-gray-100'}`}>
                <div className="flex items-start mb-6">
                  <div className={`w-14 h-14 ${faq.isKahverengi ? 'bg-amber-600' : 'bg-gradient-brown-blue'} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-xl text-white">{faq.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold font-serif-condensed ${faq.isKahverengi ? 'text-amber-100' : 'text-primary-blue'} mb-4 group-hover:text-primary-brown transition-colors duration-300`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 ${faq.isKahverengi ? 'bg-amber-700' : 'bg-gray-100'} rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500`}>
                    <svg className={`w-4 h-4 ${faq.isKahverengi ? 'text-amber-200' : 'text-primary-brown'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div className={`${faq.isKahverengi ? 'text-amber-50' : 'text-gray-600'} font-proxima leading-relaxed pl-18`}>
                  <p>{faq.answer}</p>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-6 w-full h-1 bg-gray-200 rounded-full">
                  <div className={`h-full ${faq.isKahverengi ? 'bg-amber-400' : 'bg-gradient-brown-blue'} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}></div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Additional Help Section */}
          <div className="mt-16 text-center bg-primary-brown text-white rounded-3xl p-10 border border-amber-200 shadow-2xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold font-serif-condensed text-amber-100 mb-4">
                Başka Sorularınız Var mı?
              </h3>
              <p className="text-amber-50 font-proxima mb-8 max-w-2xl mx-auto">
                Aklınıza takılan başka sorular için bizimle iletişime geçebilirsiniz. Size yardımcı olmaktan mutluluk duyarız.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-amber-600 text-white rounded-xl font-serif-condensed font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-amber-700 flex items-center justify-center">
                <span className="mr-2">📞</span>
                Hemen Arayın
              </button>
              <button className="px-8 py-4 border-2 border-amber-300 text-amber-100 rounded-xl font-serif-condensed font-bold hover:bg-amber-300 hover:text-primary-brown transition-all duration-300 flex items-center justify-center">
                <span className="mr-2">💬</span>
                Whatsapp
              </button>
            </div>
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
                    <p className="text-gray-600 font-proxima">+90 212 XXX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-brown-blue-light rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold font-serif-condensed text-gray-900 mb-1">E-posta</h4>
                    <p className="text-gray-600 font-proxima">info@kasapogluyurdu.com</p>
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
                    <p className="text-gray-600 font-proxima">Fatih/İSTANBUL</p>
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
                Kasapoğlu Yurdu
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
                <li>+90 212 XXX XX XX</li>
                <li>info@kasapogluyurdu.com</li>
                <li>Fatih/İSTANBUL</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold font-serif-condensed mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-brown-blue rounded-full flex items-center justify-center hover:shadow-lg transition-all">
                  <span className="text-sm font-serif-condensed">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-brown-blue rounded-full flex items-center justify-center hover:shadow-lg transition-all">
                  <span className="text-sm font-serif-condensed">ig</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-brown-blue rounded-full flex items-center justify-center hover:shadow-lg transition-all">
                  <span className="text-sm font-serif-condensed">tw</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="font-proxima">&copy; 2024 Kasapoğlu Kız Öğrenci Yurdu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
