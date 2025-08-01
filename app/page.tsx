'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-['Pacifico'] text-blue-600">
                611cargo
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/services" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                  Услуги
                </Link>
                <Link href="/calculator" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                  Калькулятор
                </Link>
                <Link href="/tracking" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                  Отслеживание
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                  О нас
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                  Контакты
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Войти
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                Регистрация
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20" 
               style={{
                 backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20cargo%20shipping%20containers%20at%20Chinese%20port%20with%20blue%20sky%2C%20logistics%20and%20international%20trade%2C%20professional%20business%20atmosphere%2C%20clean%20minimalist%20background%20with%20subtle%20geometric%20patterns%2C%20high-tech%20transportation%20infrastructure%2C%20bright%20daylight%2C%20contemporary%20commercial%20photography%20style&width=1920&height=800&seq=hero-cargo&orientation=landscape')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        <div className="absolute inset-0 bg-blue-900/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Доставка грузов из Китая с гарантией качества
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Профессиональная карго доставка товаров из Китая в Россию. Быстро, надежно, выгодно. 
              Более 10 лет опыта работы на рынке международных перевозок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/calculator" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 text-center whitespace-nowrap cursor-pointer">
                Рассчитать стоимость
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 text-center whitespace-nowrap cursor-pointer">
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг по доставке грузов из Китая</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-ship-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Морская доставка</h3>
              <p className="text-gray-600 mb-6">
                Экономичная доставка крупных партий товаров морским транспортом. 
                Сроки доставки 25-35 дней.
              </p>
              <Link href="/services/sea" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                Подробнее →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-plane-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Авиадоставка</h3>
              <p className="text-gray-600 mb-6">
                Быстрая доставка ценных и срочных грузов авиатранспортом. 
                Сроки доставки 5-10 дней.
              </p>
              <Link href="/services/air" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                Подробнее →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-truck-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Автодоставка</h3>
              <p className="text-gray-600 mb-6">
                Надежная доставка автотранспортом через границу. 
                Сроки доставки 10-20 дней.
              </p>
              <Link href="/services/truck" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                Подробнее →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Преимущества работы с 611cargo</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Гарантия качества</h3>
              <p className="text-gray-600">Полное страхование грузов и гарантия сохранности</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Точные сроки</h3>
              <p className="text-gray-600">Соблюдаем обещанные сроки доставки в 98% случаев</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Выгодные цены</h3>
              <p className="text-gray-600">Конкурентные тарифы без скрытых комиссий</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Поддержка 24/7</h3>
              <p className="text-gray-600">Круглосуточная техническая поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">15000+</div>
              <div className="text-xl text-gray-700">Доставленных грузов</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-xl text-gray-700">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-xl text-gray-700">Лет опыта</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-xl text-gray-700">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Готовы начать доставку?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Получите бесплатную консультацию и расчет стоимости доставки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 whitespace-nowrap cursor-pointer">
              Рассчитать стоимость
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 whitespace-nowrap cursor-pointer">
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-['Pacifico'] text-blue-400 mb-4">611cargo</div>
              <p className="text-gray-400 mb-4">
                Профессиональная доставка грузов из Китая с 2013 года. 
                Надежность, скорость, выгодные цены.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                  <i className="ri-wechat-line text-white"></i>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                  <i className="ri-telegram-line text-white"></i>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700">
                  <i className="ri-whatsapp-line text-white"></i>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/sea" className="hover:text-white cursor-pointer">Морская доставка</Link></li>
                <li><Link href="/services/air" className="hover:text-white cursor-pointer">Авиадоставка</Link></li>
                <li><Link href="/services/truck" className="hover:text-white cursor-pointer">Автодоставка</Link></li>
                <li><Link href="/services/consolidation" className="hover:text-white cursor-pointer">Консолидация</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white cursor-pointer">О нас</Link></li>
                <li><Link href="/news" className="hover:text-white cursor-pointer">Новости</Link></li>
                <li><Link href="/careers" className="hover:text-white cursor-pointer">Карьера</Link></li>
                <li><Link href="/partners" className="hover:text-white cursor-pointer">Партнеры</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  info@611cargo.com
                </li>
                <li className="flex items-center">
                  <i className="ri-map-pin-line mr-2"></i>
                  Москва, ул. Примерная, 123
                </li>
                <li className="flex items-center">
                  <i className="ri-time-line mr-2"></i>
                  Пн-Пт: 9:00-18:00
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 611cargo.com. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}