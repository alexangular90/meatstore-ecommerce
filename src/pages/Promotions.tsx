import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

const Promotions = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentPromotions = [
    {
      id: 1,
      title: "Зимняя распродажа",
      description: "Скидки до 30% на замороженные продукты",
      discount: "до 30%",
      validUntil: "2024-02-29",
      code: "WINTER2024",
      image: "/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg",
      category: "Сезонная акция",
      minOrder: 3000,
      products: ["Говядина", "Свинина", "Баранина"],
      featured: true
    },
    {
      id: 2,
      title: "Первый заказ",
      description: "Скидка 15% для новых клиентов",
      discount: "15%",
      validUntil: "2024-12-31",
      code: "WELCOME15",
      image: "/img/fe083e35-117b-45f0-a257-972c6d1873ec.jpg",
      category: "Для новичков",
      minOrder: 2000,
      products: ["Все товары"],
      featured: false
    },
    {
      id: 3,
      title: "Семейный набор",
      description: "При покупке 3 кг мяса - 4-й килограмм в подарок",
      discount: "3+1",
      validUntil: "2024-02-15",
      code: "FAMILY4",
      image: "/img/7e26611b-2cdb-4ce8-9aff-03877ba171dc.jpg",
      category: "Семейная акция",
      minOrder: 0,
      products: ["Курица", "Свинина"],
      featured: false
    },
    {
      id: 4,
      title: "Премиум коллекция",
      description: "Скидка 20% на элитные отруба",
      discount: "20%",
      validUntil: "2024-02-20",
      code: "PREMIUM20",
      image: "/img/39f5a6a9-d66f-4ddc-9dd9-9f6191b9c82f.jpg",
      category: "Премиум",
      minOrder: 5000,
      products: ["Мраморная говядина", "Ребра ягненка"],
      featured: false
    }
  ];

  const upcomingPromotions = [
    {
      title: "День защитника Отечества",
      description: "Мужские наборы со скидкой 25%",
      startDate: "2024-02-20",
      endDate: "2024-02-25",
      category: "Праздничная"
    },
    {
      title: "Международный женский день",
      description: "Готовые решения для праздничного стола",
      startDate: "2024-03-05",
      endDate: "2024-03-10",
      category: "Праздничная"
    },
    {
      title: "Весенняя распродажа",
      description: "Обновление ассортимента с большими скидками",
      startDate: "2024-03-15",
      endDate: "2024-03-31",
      category: "Сезонная"
    }
  ];

  const loyaltyOffers = [
    {
      level: "Друг",
      discount: "5%",
      bonus: "Бесплатная доставка от 2000₽",
      color: "bg-blue-100 text-blue-800"
    },
    {
      level: "VIP",
      discount: "10%",
      bonus: "Эксклюзивные товары + приоритетная доставка",
      color: "bg-purple-100 text-purple-800"
    },
    {
      level: "Платиновый",
      discount: "15%",
      bonus: "Персональный менеджер + закрытые распродажи",
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  const promoTypes = [
    {
      type: "Процентные скидки",
      description: "Скидка в процентах от стоимости заказа",
      example: "Скидка 20% на все товары",
      icon: "Percent"
    },
    {
      type: "Фиксированные скидки",
      description: "Скидка в рублях при достижении суммы",
      example: "Скидка 500₽ при заказе от 3000₽",
      icon: "DollarSign"
    },
    {
      type: "Подарки",
      description: "Бесплатные товары к заказу",
      example: "Специи в подарок к стейкам",
      icon: "Gift"
    },
    {
      type: "Бесплатная доставка",
      description: "Доставка без дополнительной платы",
      example: "Бесплатная доставка от 2500₽",
      icon: "Truck"
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
              <Link to="/promotions" className="hover:text-orange-200 transition-colors">Акции</Link>
              <Link to="/loyalty" className="hover:text-orange-200 transition-colors">Программа лояльности</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Акции и скидки</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выгодные предложения на качественные мясные продукты. Следите за акциями 
            и экономьте на покупках без ущерба для качества!
          </p>
        </div>
      </section>

      {/* Promotion Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <Button
              variant={activeTab === 'current' ? 'default' : 'outline'}
              onClick={() => setActiveTab('current')}
              className="rounded-full"
            >
              Текущие акции
            </Button>
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'outline'}
              onClick={() => setActiveTab('upcoming')}
              className="rounded-full"
            >
              Скоро
            </Button>
            <Button
              variant={activeTab === 'loyalty' ? 'default' : 'outline'}
              onClick={() => setActiveTab('loyalty')}
              className="rounded-full"
            >
              Программа лояльности
            </Button>
          </div>
        </div>
      </section>

      {/* Current Promotions */}
      {activeTab === 'current' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Действующие акции</h2>
            
            {/* Featured Promotion */}
            <div className="mb-12">
              {currentPromotions.filter(promo => promo.featured).map((promo) => (
                <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/10 to-secondary/10">
                      <img 
                        src={promo.image} 
                        alt={promo.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className="bg-red-100 text-red-800">🔥 ХИТ</Badge>
                        <Badge>{promo.category}</Badge>
                        <span className="text-sm text-gray-500">до {promo.validUntil}</span>
                      </div>
                      <h3 className="text-4xl font-bold mb-4">{promo.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{promo.description}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg">Скидка:</span>
                          <span className="text-3xl font-bold text-primary">{promo.discount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Промокод:</span>
                          <Badge className="bg-primary text-white text-lg px-4 py-2">{promo.code}</Badge>
                        </div>
                        {promo.minOrder > 0 && (
                          <div className="flex items-center justify-between">
                            <span>Минимальный заказ:</span>
                            <span className="font-semibold">{promo.minOrder.toLocaleString()}₽</span>
                          </div>
                        )}
                      </div>
                      
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Воспользоваться акцией
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Other Promotions */}
            <div className="grid md:grid-cols-3 gap-8">
              {currentPromotions.filter(promo => !promo.featured).map((promo) => (
                <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">{promo.category}</Badge>
                      <span className="text-sm text-gray-500">до {promo.validUntil}</span>
                    </div>
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                    <p className="text-gray-600">{promo.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span>Скидка:</span>
                        <span className="text-xl font-bold text-primary">{promo.discount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Промокод:</span>
                        <Badge className="bg-gray-100">{promo.code}</Badge>
                      </div>
                      {promo.minOrder > 0 && (
                        <div className="flex justify-between">
                          <span>От:</span>
                          <span className="font-semibold">{promo.minOrder.toLocaleString()}₽</span>
                        </div>
                      )}
                    </div>
                    <Button className="w-full">Применить</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Promotions */}
      {activeTab === 'upcoming' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Скоро начнутся</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {upcomingPromotions.map((promo, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Icon name="Calendar" size={48} className="text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                    <Badge>{promo.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{promo.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Начало:</span>
                        <span className="font-semibold">{promo.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Окончание:</span>
                        <span className="font-semibold">{promo.endDate}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Напомнить о старте
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Loyalty Offers */}
      {activeTab === 'loyalty' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Скидки по программе лояльности</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {loyaltyOffers.map((offer, index) => (
                <Card key={index} className="p-6 text-center">
                  <CardHeader>
                    <Icon name="Crown" size={48} className="text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl">{offer.level}</CardTitle>
                    <Badge className={offer.color}>Постоянная скидка {offer.discount}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{offer.bonus}</p>
                    <Button className="w-full">
                      <Link to="/loyalty">Узнать подробнее</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Promo Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Типы акций</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promoTypes.map((type, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Icon name={type.icon as any} size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{type.type}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm font-medium">{type.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Promo Codes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как использовать промокоды</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Выберите товары</h3>
                <p className="text-gray-600">Добавьте нужные продукты в корзину</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Введите промокод</h3>
                <p className="text-gray-600">В поле "Промокод" при оформлении</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Получите скидку</h3>
                <p className="text-gray-600">Скидка применится автоматически</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Оформите заказ</h3>
                <p className="text-gray-600">Завершите покупку со скидкой</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Календарь акций</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-center">Февраль 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                    <div key={day} className="p-2 text-center font-semibold text-gray-600">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 29 }, (_, i) => {
                    const day = i + 1;
                    const hasPromo = [5, 10, 15, 20, 25].includes(day);
                    return (
                      <div 
                        key={i} 
                        className={`p-2 text-center border rounded cursor-pointer transition-colors ${
                          hasPromo ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100'
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span className="text-sm">Дни с акциями</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <span className="text-sm">Обычные дни</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <div className="text-center">
              <Icon name="Bell" size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Не пропустите выгодные предложения!</h2>
              <p className="text-xl mb-8 opacity-90">
                Подпишитесь на уведомления о новых акциях и получите промокод на 10% скидку
              </p>
              <div className="max-w-md mx-auto flex space-x-4">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <Button className="bg-white text-primary hover:bg-gray-100 px-6">
                  Подписаться
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                Отправляем только важные акции, никакого спама
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Условия акций</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Общие условия:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Акции не суммируются между собой</li>
                      <li>• Один промокод на один заказ</li>
                      <li>• Скидки не распространяются на доставку</li>
                      <li>• Акции могут быть изменены или отменены</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Ограничения:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Промокоды имеют срок действия</li>
                      <li>• Некоторые товары могут быть исключены</li>
                      <li>• Минимальная сумма заказа может применяться</li>
                      <li>• Количество использований может быть ограничено</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Вопросы по акциям?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши консультанты помогут выбрать самое выгодное предложение
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:+74951234567"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Позвонить консультанту
            </a>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Все способы связи
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;