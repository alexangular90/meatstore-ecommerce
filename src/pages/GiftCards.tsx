import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedDesign, setSelectedDesign] = useState(0);

  const predefinedAmounts = [1000, 3000, 5000, 10000, 15000, 20000];
  
  const cardDesigns = [
    {
      id: 0,
      name: "Классический",
      description: "Элегантный дизайн с логотипом",
      image: "/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg",
      color: "from-primary to-secondary"
    },
    {
      id: 1,
      name: "Премиум",
      description: "Роскошный золотой дизайн",
      image: "/img/fe083e35-117b-45f0-a257-972c6d1873ec.jpg",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 2,
      name: "Новогодний",
      description: "Праздничный дизайн",
      image: "/img/39f5a6a9-d66f-4ddc-9dd9-9f6191b9c82f.jpg",
      color: "from-red-500 to-green-500"
    },
    {
      id: 3,
      name: "День рождения",
      description: "Яркий праздничный дизайн",
      image: "/img/e518ae2f-d156-45ca-8c99-3b0cc17d11b6.jpg",
      color: "from-pink-400 to-purple-500"
    }
  ];

  const benefits = [
    {
      icon: "Gift",
      title: "Идеальный подарок",
      description: "Подходит для любого случая и получателя"
    },
    {
      icon: "Clock",
      title: "Долгий срок действия",
      description: "Действует 12 месяцев с момента покупки"
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description: "Оплачивайте картой или наличными"
    },
    {
      icon: "Smartphone",
      title: "Электронная доставка",
      description: "Мгновенная доставка на email"
    }
  ];

  const useCases = [
    {
      occasion: "День рождения",
      description: "Порадуйте именинника качественными продуктами",
      icon: "🎂"
    },
    {
      occasion: "Новый год",
      description: "Праздничный подарок для всей семьи",
      icon: "🎄"
    },
    {
      occasion: "8 марта",
      description: "Позвольте женщинам не думать о готовке",
      icon: "🌸"
    },
    {
      occasion: "Корпоративные подарки",
      description: "Отличный способ поощрить сотрудников",
      icon: "🏢"
    }
  ];

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/gift-cards" className="hover:text-orange-200 transition-colors">Подарочные карты</Link>
              <Link to="/contacts" className="hover:text-orange-200 transition-colors">Контакты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Подарочные карты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подарите близким возможность выбрать лучшие мясные продукты. 
            Подарочная карта МЕСТО ДРА РИ — это всегда удачный подарок!
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества подарочных карт</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <Icon name={benefit.icon as any} size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Card Configurator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Создать подарочную карту</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Configuration */}
              <div className="space-y-8">
                {/* Amount Selection */}
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Выберите сумму</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedAmount === amount && !customAmount ? "default" : "outline"}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                          className="h-12"
                        >
                          {amount.toLocaleString()}₽
                        </Button>
                      ))}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Или введите свою сумму:</label>
                      <Input
                        type="number"
                        placeholder="Введите сумму"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        min="500"
                        max="100000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Минимум 500₽, максимум 100 000₽</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Design Selection */}
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Выберите дизайн</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {cardDesigns.map((design) => (
                        <div
                          key={design.id}
                          className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
                            selectedDesign === design.id ? 'border-primary' : 'border-gray-200'
                          }`}
                          onClick={() => setSelectedDesign(design.id)}
                        >
                          <div className={`h-24 bg-gradient-to-r ${design.color} rounded-lg mb-3 flex items-center justify-center`}>
                            <span className="text-white font-bold">МЕСТО ДРАРИ</span>
                          </div>
                          <h4 className="font-semibold">{design.name}</h4>
                          <p className="text-sm text-gray-600">{design.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Message */}
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Персональное сообщение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">От кого</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Кому</label>
                        <Input placeholder="Имя получателя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Сообщение</label>
                        <Textarea 
                          placeholder="Напишите поздравление или пожелание..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Preview */}
              <div className="space-y-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Предварительный просмотр</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`bg-gradient-to-r ${cardDesigns[selectedDesign].color} rounded-lg p-8 text-white text-center mb-6`}>
                      <h3 className="text-2xl font-bold mb-4">МЕСТО ДРАРИ</h3>
                      <div className="text-4xl font-bold mb-2">{finalAmount.toLocaleString()}₽</div>
                      <p className="opacity-90">Подарочная карта</p>
                      <div className="mt-6 text-sm opacity-75">
                        <p>Действительна до: {new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-semibold mb-2">Дизайн: {cardDesigns[selectedDesign].name}</h4>
                      <p className="text-gray-600">{cardDesigns[selectedDesign].description}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Summary */}
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Итого к оплате</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Номинал карты:</span>
                        <span className="font-semibold">{finalAmount.toLocaleString()}₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Комиссия:</span>
                        <span className="font-semibold">0₽</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Итого:</span>
                          <span className="font-bold text-primary">{finalAmount.toLocaleString()}₽</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 bg-primary hover:bg-primary/90" size="lg">
                      Купить подарочную карту
                    </Button>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">
                        Карта будет отправлена на email в течение 5 минут
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Подарочные карты для любого случая</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.occasion}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Выберите сумму</h3>
              <p className="text-gray-600">Определите номинал карты от 500₽ до 100 000₽</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Выберите дизайн</h3>
              <p className="text-gray-600">Подберите подходящий дизайн для случая</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Оплатите</h3>
              <p className="text-gray-600">Безопасная оплата картой или другим способом</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Получите карту</h3>
              <p className="text-gray-600">Карта придет на email в течение 5 минут</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Корпоративные подарочные карты</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Для бизнеса</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Корпоративные скидки</h4>
                      <p className="text-gray-600">Специальные цены при заказе от 50 карт</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Брендинг</h4>
                      <p className="text-gray-600">Возможность добавить логотип вашей компании</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Отчетность</h4>
                      <p className="text-gray-600">Детальные отчеты об использовании карт</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Документооборот</h4>
                      <p className="text-gray-600">Полный пакет документов для бухгалтерии</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 bg-primary hover:bg-primary/90">
                  Заказать корпоративные карты
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8">
                <div className="text-center">
                  <Icon name="Building" size={64} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Скидки для бизнеса</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>50-99 карт:</span>
                      <Badge>Скидка 5%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>100-199 карт:</span>
                      <Badge>Скидка 10%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>200+ карт:</span>
                      <Badge>Скидка 15%</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Как использовать подарочную карту?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  При оформлении заказа введите номер карты в специальное поле. 
                  Сумма автоматически спишется с баланса карты.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Можно ли пополнить карту?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Нет, подарочные карты не пополняются. Но вы можете купить 
                  несколько карт или использовать остаток вместе с другой оплатой.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Что если сумма заказа больше номинала?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Вы можете доплатить разницу любым удобным способом: картой, 
                  наличными или другой подарочной картой.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Можно ли вернуть неиспользованную карту?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Возврат подарочных карт не предусмотрен. Но вы можете передать 
                  карту другому человеку - никаких ограничений нет.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы сделать подарок?</h2>
          <p className="text-xl mb-8 opacity-90">
            Подарочная карта МЕСТО ДРАРИ — это всегда удачный выбор для ценителей качества
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Купить подарочную карту
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GiftCards;