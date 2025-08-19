import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Partnership = () => {
  const partnershipTypes = [
    {
      title: "Франшиза",
      description: "Откройте собственный магазин под брендом МЕСТО ДРАРИ",
      investment: "от 2 000 000₽",
      payback: "12-18 месяцев",
      benefits: [
        "Узнаваемый бренд",
        "Готовая бизнес-модель",
        "Поддержка на всех этапах",
        "Эксклюзивная территория"
      ],
      icon: "Store"
    },
    {
      title: "Дистрибьюция",
      description: "Станьте официальным дистрибьютором в вашем регионе",
      investment: "от 1 000 000₽",
      payback: "8-12 месяцев",
      benefits: [
        "Эксклюзивные права на регион",
        "Маркетинговая поддержка",
        "Обучение персонала",
        "Льготные условия закупки"
      ],
      icon: "Truck"
    },
    {
      title: "Поставщик",
      description: "Предложите нам свою продукцию для включения в ассортимент",
      investment: "Без вложений",
      payback: "Сразу",
      benefits: [
        "Доступ к широкой клиентской базе",
        "Продвижение продукции",
        "Стабильные заказы",
        "Долгосрочное сотрудничество"
      ],
      icon: "Package"
    }
  ];

  const requirements = [
    {
      type: "Франшиза",
      items: [
        "Опыт в розничной торговле от 2 лет",
        "Собственные или арендованные помещения",
        "Команда от 5 человек",
        "Готовность следовать стандартам бренда"
      ]
    },
    {
      type: "Дистрибьюция",
      items: [
        "Опыт в оптовой торговле от 3 лет",
        "Складские помещения с холодильным оборудованием",
        "Собственная логистика",
        "Клиентская база в регионе"
      ]
    },
    {
      type: "Поставщик",
      items: [
        "Все необходимые сертификаты и лицензии",
        "Стабильные объемы производства",
        "Соответствие стандартам качества",
        "Конкурентоспособные цены"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/partnership" className="hover:text-orange-200 transition-colors">Партнерство</Link>
              <Link to="/wholesale" className="hover:text-orange-200 transition-colors">Опт</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Партнерство с МЕСТО ДРАРИ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Присоединяйтесь к успешной сети! Мы предлагаем различные форматы 
            сотрудничества для развития вашего бизнеса в мясной индустрии.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Виды партнерства</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon name={type.icon as any} size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">Инвестиции:</span>
                      <span className="text-primary font-semibold">{type.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Окупаемость:</span>
                      <span className="text-green-600 font-semibold">{type.payback}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold">Преимущества:</h4>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">Узнать подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <Icon name="TrendingUp" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Растущий рынок</h3>
                <p className="text-gray-600">Мясная индустрия показывает стабильный рост 8-12% в год</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Проверенный бренд</h3>
                <p className="text-gray-600">15 лет успешной работы и безупречная репутация</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
                <p className="text-gray-600">Полная поддержка партнеров на всех этапах развития</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Эффективность</h3>
                <p className="text-gray-600">Отработанные бизнес-процессы и высокая рентабельность</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Требования к партнерам</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-center">{req.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {req.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Истории успеха</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Алексей Морозов</h3>
                    <p className="text-gray-600">Франчайзи, Санкт-Петербург</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Открыл магазин МЕСТО ДРАРИ в 2022 году. За полтора года бизнес 
                  полностью окупился. Отличная поддержка головного офиса и 
                  стабильный поток клиентов."
                </p>
                <div className="flex space-x-4 text-sm">
                  <Badge>Выручка: +150%</Badge>
                  <Badge>Окупаемость: 14 месяцев</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Мария Козлова</h3>
                    <p className="text-gray-600">Дистрибьютор, Екатеринбург</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Стала дистрибьютором в Уральском регионе. Продукция МЕСТО ДРАРИ 
                  пользуется высоким спросом. Планирую расширять географию поставок."
                </p>
                <div className="flex space-x-4 text-sm">
                  <Badge>Рост продаж: +200%</Badge>
                  <Badge>Новые клиенты: 50+</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Стать партнером</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Этапы сотрудничества</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Заявка</h4>
                      <p className="text-gray-600">Заполните форму или свяжитесь с нами</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Анализ</h4>
                      <p className="text-gray-600">Изучаем ваши возможности и потребности</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Встреча</h4>
                      <p className="text-gray-600">Личная встреча и обсуждение условий</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Договор</h4>
                      <p className="text-gray-600">Подписание партнерского соглашения</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <h4 className="font-semibold">Запуск</h4>
                      <p className="text-gray-600">Обучение, поддержка и старт бизнеса</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Заявка на партнерство</CardTitle>
                  <p className="text-gray-600">
                    Заполните форму, и мы свяжемся с вами в течение дня
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Фамилия</label>
                        <Input placeholder="Ваша фамилия" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Город</label>
                      <Input placeholder="В каком городе планируете работать?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Тип партнерства</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Выберите тип партнерства</option>
                        <option>Франшиза</option>
                        <option>Дистрибьюция</option>
                        <option>Поставщик</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Опыт в бизнесе</label>
                      <Input placeholder="Расскажите о своем опыте" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                      <Textarea 
                        placeholder="Расскажите о ваших планах и возможностях..."
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Готовы обсудить партнерство?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Отдел развития</h3>
              <p>+7 (495) 123-45-67 доб. 201</p>
              <p className="text-sm opacity-75">Пн-Пт: 9:00-18:00</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>partnership@mestodari.ru</p>
              <p className="text-sm opacity-75">Ответим в течение дня</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Офис</h3>
              <p>Москва, ул. Примерная, д. 123</p>
              <p className="text-sm opacity-75">Встречи по записи</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Связаться с нами
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Partnership;