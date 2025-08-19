import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Suppliers = () => {
  const suppliers = [
    {
      id: 1,
      name: "Ранчо 'Пампа'",
      country: "Аргентина",
      specialization: "Мраморная говядина",
      since: "2015",
      certification: ["Organic", "Grass-Fed", "Non-GMO"],
      description: "Семейное ранчо в провинции Буэнос-Айрес, специализирующееся на выращивании крупного рогатого скота породы Ангус на естественных пастбищах.",
      products: ["Рибай", "Филе-миньон", "Стриплойн", "Томагавк"],
      image: "/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg",
      rating: 5.0,
      partnership: "Эксклюзивный партнер"
    },
    {
      id: 2,
      name: "Фермы Кентербери",
      country: "Новая Зеландия",
      specialization: "Баранина",
      since: "2018",
      certification: ["Free Range", "Organic", "Animal Welfare"],
      description: "Экологически чистые фермы на Южном острове Новой Зеландии, где овцы пасутся на альпийских лугах.",
      products: ["Каре ягненка", "Нога ягненка", "Лопатка", "Ребрышки"],
      image: "/img/39f5a6a9-d66f-4ddc-9dd9-9f6191b9c82f.jpg",
      rating: 4.9,
      partnership: "Долгосрочный контракт"
    },
    {
      id: 3,
      name: "Агрохолдинг 'Русское поле'",
      country: "Россия",
      specialization: "Свинина и курица",
      since: "2012",
      certification: ["ГОСТ Р", "HACCP", "Халяль"],
      description: "Современное российское предприятие полного цикла с собственными кормами и ветеринарной службой.",
      products: ["Свиная вырезка", "Куриная грудка", "Бедро", "Крылья"],
      image: "/img/fe083e35-117b-45f0-a257-972c6d1873ec.jpg",
      rating: 4.8,
      partnership: "Стратегический партнер"
    },
    {
      id: 4,
      name: "Мясокомбинат 'Традиция'",
      country: "Россия",
      specialization: "Колбасные изделия",
      since: "2010",
      certification: ["ГОСТ Р", "ISO 22000", "Без ГМО"],
      description: "Семейное предприятие, сохраняющее традиционные рецепты и технологии изготовления колбас.",
      products: ["Сырокопченые колбасы", "Варено-копченые", "Деликатесы", "Паштеты"],
      image: "/img/e518ae2f-d156-45ca-8c99-3b0cc17d11b6.jpg",
      rating: 4.7,
      partnership: "Региональный партнер"
    }
  ];

  const requirements = [
    {
      category: "Качество продукции",
      items: [
        "Все необходимые сертификаты и лицензии",
        "Соответствие международным стандартам",
        "Регулярные лабораторные исследования",
        "Система контроля качества HACCP"
      ]
    },
    {
      category: "Производственные мощности",
      items: [
        "Стабильные объемы производства",
        "Современное оборудование",
        "Соблюдение санитарных норм",
        "Возможность масштабирования"
      ]
    },
    {
      category: "Логистика",
      items: [
        "Надежная система доставки",
        "Соблюдение холодовой цепи",
        "Гибкость в планировании поставок",
        "Страхование грузов"
      ]
    },
    {
      category: "Деловая репутация",
      items: [
        "Положительная кредитная история",
        "Рекомендации от других клиентов",
        "Прозрачность бизнес-процессов",
        "Готовность к долгосрочному сотрудничеству"
      ]
    }
  ];

  const selectionProcess = [
    {
      step: 1,
      title: "Первичная оценка",
      description: "Анализ документов и базовых требований",
      duration: "1-2 дня"
    },
    {
      step: 2,
      title: "Аудит производства",
      description: "Выездная проверка производственных мощностей",
      duration: "3-5 дней"
    },
    {
      step: 3,
      title: "Тестирование продукции",
      description: "Лабораторные исследования и дегустация",
      duration: "1-2 недели"
    },
    {
      step: 4,
      title: "Пилотные поставки",
      description: "Тестовые поставки небольших партий",
      duration: "1 месяц"
    },
    {
      step: 5,
      title: "Заключение договора",
      description: "Подписание долгосрочного соглашения",
      duration: "1 неделя"
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
              <Link to="/suppliers" className="hover:text-orange-200 transition-colors">Поставщики</Link>
              <Link to="/quality" className="hover:text-orange-200 transition-colors">Качество</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Наши поставщики</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы сотрудничаем только с лучшими производителями мясной продукции 
            со всего мира. Строгий отбор и постоянный контроль качества.
          </p>
        </div>
      </section>

      {/* Suppliers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши партнеры</h2>
          <div className="space-y-8">
            {suppliers.map((supplier) => (
              <Card key={supplier.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img 
                      src={supplier.image} 
                      alt={supplier.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{supplier.name}</h3>
                        <div className="flex items-center space-x-4">
                          <Badge className="bg-blue-100 text-blue-800">{supplier.country}</Badge>
                          <Badge variant="outline">{supplier.partnership}</Badge>
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                            <span className="font-semibold">{supplier.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Партнеры с</p>
                        <p className="text-2xl font-bold text-primary">{supplier.since}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{supplier.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Специализация:</h4>
                        <p className="text-primary font-medium mb-4">{supplier.specialization}</p>
                        
                        <h4 className="font-semibold mb-3">Основные продукты:</h4>
                        <div className="flex flex-wrap gap-2">
                          {supplier.products.map((product) => (
                            <Badge key={product} variant="outline">{product}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Сертификации:</h4>
                        <div className="flex flex-wrap gap-2">
                          {supplier.certification.map((cert) => (
                            <Badge key={cert} className="bg-green-100 text-green-800">{cert}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Критерии отбора поставщиков</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{req.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {req.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Процесс отбора</h2>
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              {selectionProcess.map((process) => (
                <Card key={process.step} className="p-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{process.title}</h3>
                      <p className="text-gray-700">{process.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{process.duration}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become Supplier */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Стать нашим поставщиком</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Преимущества сотрудничества</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="TrendingUp" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Стабильные заказы</h4>
                      <p className="text-gray-600">Гарантированные объемы закупок</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="DollarSign" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Справедливые цены</h4>
                      <p className="text-gray-600">Конкурентная оплата за качество</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Своевременные платежи</h4>
                      <p className="text-gray-600">Оплата в срок без задержек</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Users" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Долгосрочные отношения</h4>
                      <p className="text-gray-600">Партнерство на годы вперед</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Award" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Развитие бренда</h4>
                      <p className="text-gray-600">Помощь в продвижении продукции</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Заявка на сотрудничество</CardTitle>
                  <p className="text-gray-600">
                    Заполните форму, и наш специалист свяжется с вами
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Название компании</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="ООО Ваша компания"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Контактное лицо</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Должность</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Директор"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <input 
                          type="tel" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="info@company.ru"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Специализация</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Какую продукцию производите?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Объемы производства</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Тонн в месяц"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={4}
                        placeholder="Расскажите о вашей компании, сертификатах, опыте работы..."
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

      {/* Quality Standards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Стандарты качества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
                <p className="text-gray-600">
                  Все поставщики проходят аудит системы безопасности пищевых продуктов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Сертификация</h3>
                <p className="text-gray-600">
                  Обязательное наличие всех необходимых сертификатов и лицензий
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Eye" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Контроль</h3>
                <p className="text-gray-600">
                  Регулярные проверки качества продукции и производственных процессов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите стать нашим поставщиком?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с отделом закупок для обсуждения возможностей сотрудничества
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Отдел закупок</h3>
              <p>+7 (495) 123-45-67 доб. 301</p>
              <p className="text-sm opacity-75">Пн-Пт: 9:00-18:00</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>suppliers@mestodari.ru</p>
              <p className="text-sm opacity-75">Ответим в течение дня</p>
            </div>
            <div>
              <Icon name="FileText" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Документы</h3>
              <p>Требования к поставщикам</p>
              <p className="text-sm opacity-75">PDF для скачивания</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Скачать требования
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Suppliers;