import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Catering = () => {
  const cateringServices = [
    {
      name: "Корпоративные мероприятия",
      description: "Организация питания для деловых событий",
      minGuests: 20,
      priceFrom: 1500,
      features: [
        "Бизнес-ланчи",
        "Фуршеты",
        "Кофе-брейки",
        "Банкеты"
      ],
      icon: "Building"
    },
    {
      name: "Частные праздники",
      description: "Кейтеринг для семейных торжеств",
      minGuests: 10,
      priceFrom: 2000,
      features: [
        "Дни рождения",
        "Свадьбы",
        "Юбилеи",
        "Домашние вечеринки"
      ],
      icon: "Heart"
    },
    {
      name: "Выездное барбекю",
      description: "Организация барбекю на природе",
      minGuests: 15,
      priceFrom: 2500,
      features: [
        "Мангалы и грили",
        "Повара на выезде",
        "Полная сервировка",
        "Развлекательная программа"
      ],
      icon: "Flame"
    },
    {
      name: "Регулярное питание",
      description: "Поставки для столовых и кафе",
      minGuests: 50,
      priceFrom: 800,
      features: [
        "Ежедневные поставки",
        "Меню на месяц",
        "Контроль качества",
        "Гибкие объемы"
      ],
      icon: "Calendar"
    }
  ];

  const menuOptions = [
    {
      category: "Мясные блюда",
      items: [
        { name: "Стейк рибай на гриле", price: 450 },
        { name: "Свиная вырезка в травах", price: 350 },
        { name: "Куриные крылышки BBQ", price: 280 },
        { name: "Шашлык из баранины", price: 420 }
      ]
    },
    {
      category: "Гарниры",
      items: [
        { name: "Овощи на гриле", price: 180 },
        { name: "Картофель по-деревенски", price: 150 },
        { name: "Рис с овощами", price: 120 },
        { name: "Салат из свежих овощей", price: 200 }
      ]
    },
    {
      category: "Закуски",
      items: [
        { name: "Мясная тарелка", price: 380 },
        { name: "Колбасное ассорти", price: 320 },
        { name: "Паштеты домашние", price: 250 },
        { name: "Сало с чесноком", price: 180 }
      ]
    }
  ];

  const packages = [
    {
      name: "Эконом",
      pricePerPerson: 800,
      description: "Базовый набор блюд для небольших мероприятий",
      includes: [
        "2 мясных блюда",
        "2 гарнира",
        "Хлеб и соусы",
        "Базовая сервировка"
      ],
      minGuests: 10
    },
    {
      name: "Стандарт",
      pricePerPerson: 1200,
      description: "Расширенное меню для корпоративных событий",
      includes: [
        "3 мясных блюда",
        "3 гарнира",
        "2 закуски",
        "Напитки",
        "Полная сервировка"
      ],
      minGuests: 20,
      popular: true
    },
    {
      name: "Премиум",
      pricePerPerson: 2000,
      description: "Изысканное меню для особых случаев",
      includes: [
        "5 мясных блюд",
        "4 гарнира",
        "4 закуски",
        "Десерты",
        "Премиум сервировка",
        "Официанты"
      ],
      minGuests: 30
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
              <Link to="/catering" className="hover:text-orange-200 transition-colors">Кейтеринг</Link>
              <Link to="/events" className="hover:text-orange-200 transition-colors">События</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Кейтеринг услуги</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Организуем питание для любых мероприятий. От деловых обедов до праздничных банкетов — 
            качественная еда и безупречный сервис.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cateringServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon name={service.icon as any} size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm">От:</span>
                      <span className="font-semibold">{service.minGuests} гостей</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Цена:</span>
                      <span className="font-semibold text-primary">от {service.priceFrom}₽/чел</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-2">Включает:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full mt-4">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Готовые пакеты</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`p-6 ${pkg.popular ? 'ring-2 ring-primary' : ''} hover:shadow-lg transition-shadow`}>
                <CardHeader className="text-center">
                  {pkg.popular && <Badge className="mb-4 bg-primary">Популярный</Badge>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.pricePerPerson}₽</div>
                  <p className="text-gray-600">за человека</p>
                  <p className="text-sm text-gray-500">от {pkg.minGuests} гостей</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  
                  <h4 className="font-semibold mb-3">В пакет входит:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full">Выбрать пакет</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Меню кейтеринга</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {menuOptions.map((category, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm">{item.name}</span>
                        <span className="font-semibold text-primary">{item.price}₽</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              Скачать полное меню
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Заявка</h3>
              <p className="text-gray-600">Оставляете заявку с деталями мероприятия</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600">Менеджер связывается для уточнения деталей</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Планирование</h3>
              <p className="text-gray-600">Составляем меню и план мероприятия</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2">Подготовка</h3>
              <p className="text-gray-600">Готовим блюда и доставляем к месту</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-lg font-semibold mb-2">Обслуживание</h3>
              <p className="text-gray-600">Сервируем и обслуживаем гостей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Опыт 15+ лет</h3>
                <p className="text-gray-600">
                  Многолетний опыт организации мероприятий любого масштаба
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="ChefHat" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Профессиональные повара</h3>
                <p className="text-gray-600">
                  Команда опытных шеф-поваров с ресторанным опытом
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Полный сервис</h3>
                <p className="text-gray-600">
                  От планирования меню до уборки после мероприятия
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                <p className="text-gray-600">
                  Используем только свежие продукты высшего качества
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Точность во времени</h3>
                <p className="text-gray-600">
                  Всегда приезжаем вовремя и соблюдаем график мероприятия
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="DollarSign" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Прозрачные цены</h3>
                <p className="text-gray-600">
                  Никаких скрытых доплат — все расходы обсуждаем заранее
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src="/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg" 
                  alt="Корпоративный банкет"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Корпоративный банкет</h3>
                <p className="text-gray-600 text-sm">150 гостей, IT-компания</p>
                <Badge className="mt-2">Премиум пакет</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src="/img/fe083e35-117b-45f0-a257-972c6d1873ec.jpg" 
                  alt="Свадебное торжество"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Свадебное торжество</h3>
                <p className="text-gray-600 text-sm">80 гостей, загородный клуб</p>
                <Badge className="mt-2">Стандарт пакет</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src="/img/39f5a6a9-d66f-4ddc-9dd9-9f6191b9c82f.jpg" 
                  alt="Выездное барбекю"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Выездное барбекю</h3>
                <p className="text-gray-600 text-sm">40 гостей, день рождения</p>
                <Badge className="mt-2">Барбекю пакет</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Заказать кейтеринг</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Что входит в стоимость</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Продукты</h4>
                      <p className="text-gray-600">Свежие мясные продукты высшего качества</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Приготовление</h4>
                      <p className="text-gray-600">Профессиональные повара и оборудование</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Сервировка</h4>
                      <p className="text-gray-600">Посуда, приборы, салфетки, скатерти</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Обслуживание</h4>
                      <p className="text-gray-600">Официанты и координатор мероприятия</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Уборка</h4>
                      <p className="text-gray-600">Уборка после завершения мероприятия</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Заявка на кейтеринг</CardTitle>
                  <p className="text-gray-600">
                    Заполните форму, и мы рассчитаем стоимость
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Тип мероприятия</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                          <option>Выберите тип</option>
                          <option>Корпоративное мероприятие</option>
                          <option>Частный праздник</option>
                          <option>Выездное барбекю</option>
                          <option>Регулярное питание</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Количество гостей</label>
                        <Input type="number" placeholder="Например: 50" min="10" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Дата мероприятия</label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Время начала</label>
                        <Input type="time" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Место проведения</label>
                      <Input placeholder="Адрес мероприятия" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Бюджет на человека</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Выберите бюджет</option>
                        <option>до 1000₽</option>
                        <option>1000-1500₽</option>
                        <option>1500-2500₽</option>
                        <option>от 2500₽</option>
                      </select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя</label>
                        <Input placeholder="Иван Иванов" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Дополнительные пожелания</label>
                      <Textarea 
                        placeholder="Особые требования к меню, аллергии, предпочтения..."
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

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы о кейтеринге</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Анна Петрова</h4>
                    <p className="text-sm text-gray-600">Директор по маркетингу</p>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Организовали корпоратив на 100 человек. Все прошло идеально! 
                  Еда была восхитительной, сервис на высшем уровне."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Михаил Сидоров</h4>
                    <p className="text-sm text-gray-600">Частный клиент</p>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Заказывали барбекю на дачу для дня рождения. Повара приехали 
                  со всем необходимым, гости были в восторге от стейков!"
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Елена Козлова</h4>
                    <p className="text-sm text-gray-600">Event-менеджер</p>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Сотрудничаем уже 3 года. Всегда качественно, вовремя и 
                  с пониманием специфики наших мероприятий. Рекомендую!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы организовать мероприятие?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нашими специалистами для расчета стоимости и планирования
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Отдел кейтеринга</h3>
              <p>+7 (495) 123-45-67 доб. 401</p>
              <p className="text-sm opacity-75">Ежедневно 9:00-21:00</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>catering@mestodari.ru</p>
              <p className="text-sm opacity-75">Ответим в течение часа</p>
            </div>
            <div>
              <Icon name="MessageCircle" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Мессенджеры</h3>
              <p>WhatsApp, Telegram</p>
              <p className="text-sm opacity-75">Быстрая связь</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Получить расчет стоимости
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Catering;