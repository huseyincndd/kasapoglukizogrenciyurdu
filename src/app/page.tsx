"use client";
import Image from "next/image";
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Kasapoğlu Kız Öğrenci Yurdu
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#anasayfa" className="nav-link hover:text-pink-400 transition-colors">Ana Sayfa</a>
              <a href="#hakkimizda" className="nav-link hover:text-pink-400 transition-colors">Hakkımızda</a>
              <a href="#olanaklar" className="nav-link hover:text-pink-400 transition-colors">Olanaklar</a>
              <a href="#odalar" className="nav-link hover:text-pink-400 transition-colors">Odalar</a>
              <a href="#galeri" className="nav-link hover:text-pink-400 transition-colors">Galeri</a>
              <a href="#yorumlar" className="nav-link hover:text-pink-400 transition-colors">Yorumlar</a>
              <a href="#konum" className="nav-link hover:text-pink-400 transition-colors">Konum</a>
              <a href="#iletisim" className="nav-link hover:text-pink-400 transition-colors">İletişim</a>
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Kasapoğlu
              </span>
              <br />
              <span className="text-white">Kız Öğrenci Yurdu</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto drop-shadow-lg">
              Güvenli, konforlu ve modern yaşam alanları ile eğitim hayatınızda size destek oluyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                Hemen Başvur
              </button>
              <button className="px-10 py-5 border-3 border-white text-white rounded-full text-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
                Sanal Tur
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

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Modern Dorm Room"
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Odalar</h3>
              <p className="text-gray-600">Konforlu ve ferah odalarımız ile kendinizi evinizde hissedin.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Security System"
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7/24 Güvenlik</h3>
              <p className="text-gray-600">Güvenliğiniz için 24 saat profesyonel güvenlik hizmeti.</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="City Location"
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Merkezi Konum</h3>
              <p className="text-gray-600">Şehir merkezinde, ulaşımı kolay konumumuz ile her yere yakınsınız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Hakkımızda
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2010 yılından beri kız öğrencilere güvenli ve konforlu barınma imkanı sağlayan deneyimli ekibimizle yanınızdayız.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Kız öğrencilere ev konforunda, güvenli ve sosyal bir yaşam alanı sunarak eğitim hayatlarına katkıda bulunmak ana hedefimizdir.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">15+</div>
                  <div className="text-gray-600">Yıl Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Memnun Öğrenci</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">50</div>
                  <div className="text-gray-600">Oda Kapasitesi</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">%100</div>
                  <div className="text-gray-600">Memnuniyet</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Student Life"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="olanaklar" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Olanaklar
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Size daha iyi bir yaşam deneyimi sunmak için her türlü imkanı sağlıyoruz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                title: "Restoran", 
                desc: "Günlük 3 öğün kaliteli ve lezzetli yemek servisi" 
              },
              { 
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                title: "Çalışma Salonu", 
                desc: "Sessiz ve ferah çalışma alanları" 
              },
              { 
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                title: "Spor Salonu", 
                desc: "Fitness ekipmanları ile sağlıklı yaşam" 
              },
              { 
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                title: "WiFi", 
                desc: "Tüm alanlarda hızlı internet erişimi" 
              },
              { 
                image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                title: "Çamaşırhane", 
                desc: "Modern çamaşır makineleri ve kurutma alanı" 
              },
              { 
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                title: "Otopark", 
                desc: "Güvenli kapalı otopark alanı" 
              },
              { 
                image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                title: "Güvenlik", 
                desc: "24 saat güvenlik kamerası ve personel" 
              },
              { 
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                title: "Bahçe", 
                desc: "Dinlenmek için yeşil alan ve bahçe" 
              },
              { 
                image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
                title: "Temizlik", 
                desc: "Günlük temizlik ve hijyen hizmeti" 
              }
            ].map((facility, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{facility.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="odalar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Oda Türleri
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl p-8 ${room.popular ? 'ring-4 ring-pink-500 scale-105' : ''}`}>
                {room.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      En Popüler
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{room.title}</h3>
                  <div className="text-4xl font-bold text-pink-600 mb-2">{room.price}</div>
                  <div className="text-gray-500">Kişi başı</div>
                </div>
                                <ul className="space-y-4 mb-8">
                  {room.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  room.popular 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg' 
                    : 'border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'
                }`}>
                  Rezervasyon Yap
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="konum" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Konum ve Ulaşım
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Şehir merkezinde, üniversitelere ve sosyal alanlara yakın konumumuz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Yakınımızdaki Üniversiteler</h3>
              <div className="space-y-4">
                {[
                  { name: "İstanbul Üniversitesi", distance: "5 dk yürüme" },
                  { name: "Marmara Üniversitesi", distance: "10 dk otobüs" },
                  { name: "İstanbul Teknik Üniversitesi", distance: "15 dk metro" },
                  { name: "Boğaziçi Üniversitesi", distance: "20 dk otobüs" }
                ].map((uni, index) => (
                  <div key={index} className="flex justify-between items-center bg-white/80 p-4 rounded-xl">
                    <span className="font-semibold text-gray-900">{uni.name}</span>
                    <span className="text-pink-600 font-medium">{uni.distance}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Ulaşım İmkanları</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🚌", name: "Otobüs Durağı", distance: "2 dk" },
                  { icon: "🚇", name: "Metro İstasyonu", distance: "5 dk" },
                  { icon: "🚕", name: "Taksi Durağı", distance: "1 dk" },
                  { icon: "🛒", name: "AVM", distance: "10 dk" }
                ].map((transport, index) => (
                  <div key={index} className="bg-white/80 p-4 rounded-xl text-center">
                    <div className="text-2xl mb-2">{transport.icon}</div>
                    <div className="font-semibold text-gray-900">{transport.name}</div>
                    <div className="text-pink-600 text-sm">{transport.distance}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Istanbul City View"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              <div className="mt-6">
                <h4 className="font-bold text-gray-900 mb-2">Adres:</h4>
                <p className="text-gray-600 mb-4">
                  Kasapoğlu Kız Öğrenci Yurdu<br />
                  Fatih/İSTANBUL
                </p>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Haritada Görüntüle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Galeri
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yurdumuzdaki yaşam alanlarından görüntüler
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            ].map((image, index) => (
              <div key={index} className="gallery-item rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rakamlarla Kasapoğlu
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
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
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 stats-number">{stat.number}</div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="yorumlar" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Öğrenci Yorumları
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-pink-600 text-sm">{testimonial.school}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Sıkça Sorulan Sorular
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Merak ettiğiniz soruların cevapları burada
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "Oda rezervasyonu nasıl yapılır?",
                answer: "Rezervasyon için bizi arayabilir veya yurdumuza gelerek başvuru yapabilirsiniz. Gerekli evraklar: TC kimlik, öğrenci belgesi ve veliden onay mektubu."
              },
              {
                question: "Aylık ücretler neleri kapsar?",
                answer: "Aylık ücretlerimiz barınma, 3 öğün yemek, WiFi, temizlik, çamaşırhane kullanımı ve tüm ortak alanların kullanımını kapsar."
              },
              {
                question: "Ziyaret saatleri nelerdir?",
                answer: "Aile ziyaretleri hafta içi 18:00-20:00, hafta sonu 14:00-20:00 saatleri arasında yapılabilir. Önceden haber verilmesi gerekmektedir."
              },
              {
                question: "Yurt kuralları nelerdir?",
                answer: "Sessizlik saatleri 22:00-07:00, misafir kabul etmek yasak, alkol ve sigara kullanımı yasak, odalar temiz tutulmalı ve ortak alanlar düzenli kullanılmalıdır."
              },
              {
                question: "Yemek seçeneği var mı?",
                answer: "Günlük menümüz değişkendir ve vejeteryan seçenekler de mevcuttur. Özel diyet ihtiyaçları için mutfak personelimizle görüşebilirsiniz."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <svg className="w-6 h-6 text-pink-600 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                İletişim
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600">+90 212 XXX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                    <p className="text-gray-600">info@kasapogluyurdu.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                    <p className="text-gray-600">Fatih/İSTANBUL</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</h4>
                    <p className="text-gray-600">Hafta içi: 09:00-18:00<br />Hafta sonu: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bize Yazın</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Adınız Soyadınız" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="E-posta Adresiniz" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Telefon Numaranız" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Mesajınız" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
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
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Kasapoğlu Yurdu
              </h3>
              <p className="text-gray-400">
                Güvenli, konforlu ve modern yaşam alanları ile eğitim hayatınızda size destek oluyoruz.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#anasayfa" className="hover:text-pink-400 transition-colors">Ana Sayfa</a></li>
                <li><a href="#hakkimizda" className="hover:text-pink-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#olanaklar" className="hover:text-pink-400 transition-colors">Olanaklar</a></li>
                <li><a href="#odalar" className="hover:text-pink-400 transition-colors">Odalar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+90 212 XXX XX XX</li>
                <li>info@kasapogluyurdu.com</li>
                <li>Fatih/İSTANBUL</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all">
                  <span className="text-sm">ig</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all">
                  <span className="text-sm">tw</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kasapoğlu Kız Öğrenci Yurdu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
