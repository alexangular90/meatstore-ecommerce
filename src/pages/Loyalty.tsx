import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

const Loyalty = () => {
  const loyaltyLevels = [
    {
      name: "Новичок",
      minSpent: 0,
      discount: 0,
      color: "bg-gray-400",
      benefits: ["Приветственная скидка 5%", "Уведомления о новинках"]
    },
    {
      name: "Друг",
      minSpent: 10000,
      discount: 5,
      color: "bg-blue-500",
      benefits: ["Скидка 5%", "Приоритетная поддержка", "Специальные предложения"]
    },
    {
      name: "VIP",
      minSpent: 50000,
      discount: 10,
      color: "bg-purple-500",
      benefits: ["Скидка 10%", "Бесплатная доставка", "Персональный менеджер", "Эксклюзивные товары"]
    },
    {
      name: "Платиновый",
      minSpent: 100000,
      discount: 15,
      color: "bg-yellow-500",
      benefits: ["Скидка 15%", "Приоритетная доставка", "Индивидуальные предложения", "Закрытые распродажи"]
    }
  ];

  const currentUser = {
    name: "Анна Петрова",
    level: "VIP",
    spent: 75000,
    nextLevel: "Платиновый",
    nextLevelSpent: 100000,
    points: 2500,
    discount: 10
  };

  const bonusActions = [
    {
      action: "Покупка на 1000₽",
      points: 50,
      icon: "ShoppingCart"
    },
    {
      action: "Отзыв с фото",
      points: 100,
      icon: "Camera"
    },
    {
      action: "Приглашение друга",
      points: 500,
      icon: "Users"
    },
    {
      action: "День рождения",
      points: 1000,
      icon: "Gift"
    }
  ];

  const rewards = [
    {
      name: "Скидка 5%",
      points: 500,
      description: "Разовая скидка на следующий заказ"
    },
    {
      name: "Бесплатная доставка",
      points: 300,
      description: "Бесплатная доставка одного заказа"
    },
    {
      name: "Премиальный стейк",
      points: 2000,
      description: "Стейк рибай 300г в подарок"
    },
    {
      name: "Набор специй",
      points: 800,
      description: "Авторский набор специй от шеф-повара"
    }
  ];

  const progressToNext = ((currentUser.spent - 50000) / (currentUser.nextLevelSpent - 50000)) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/loyalty" className="hover:text-orange-200 transition-colors">Программа лояльности</Link>
              <Link to="/profile" className="hover:text-orange-200 transition-colors">Профиль</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Программа лояльности</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Покупайте больше — получайте больше! Накапливайте баллы, повышайте статус 
            и получайте эксклюзивные привилегии и скидки.
          </p>
        </div>
      </section>

      {/* User Status */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{currentUser.name}</h2>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-purple-500">{currentUser.level}</Badge>
                        <span className="text-gray-600">Скидка {currentUser.discount}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Потрачено всего:</span>
                      <span className="font-semibold">{currentUser.spent.toLocaleString()}₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Накоплено баллов:</span>
                      <span className="font-semibold text-primary">{currentUser.points}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">До статуса "{currentUser.nextLevel}"</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{currentUser.spent.toLocaleString()}₽</span>
                      <span>{currentUser.nextLevelSpent.toLocaleString()}₽</span>
                    </div>
                    <Progress value={progressToNext} className="h-3" />
                    <p className="text-sm text-gray-600">
                      Осталось потратить: {(currentUser.nextLevelSpent - currentUser.spent).toLocaleString()}₽
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Что получите:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                        Скидка 15% на все товары
                      </li>
                      <li className="flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                        Приоритетная доставка
                      </li>
                      <li className="flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                        Индивидуальные предложения
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Loyalty Levels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Уровни программы лояльности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyaltyLevels.map((level, index) => (
              <Card key={index} className={`p-6 ${currentUser.level === level.name ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name="Crown" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{level.name}</CardTitle>
                  <p className="text-gray-600">от {level.minSpent.toLocaleString()}₽</p>
                  {level.discount > 0 && (
                    <Badge className="mt-2">Скидка {level.discount}%</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Earn Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как заработать баллы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonusActions.map((action, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Icon name={action.icon as any} size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{action.action}</h3>
                  <div className="text-2xl font-bold text-primary">+{action.points}</div>
                  <p className="text-sm text-gray-600">баллов</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Потратить баллы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{reward.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{reward.points} баллов</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{reward.description}</p>
                  <Button 
                    className="w-full" 
                    disabled={currentUser.points < reward.points}
                    variant={currentUser.points >= reward.points ? "default" : "outline"}
                  >
                    {currentUser.points >= reward.points ? "Получить" : "Недостаточно баллов"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Правила программы</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Info" className="text-primary mr-2" />
                    Начисление баллов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Баллы начисляются за каждую покупку</li>
                    <li>• 1 балл = 20 рублей покупки</li>
                    <li>• Баллы поступают в течение 24 часов</li>
                    <li>• Дополнительные баллы за активность</li>
                    <li>• Бонусы в день рождения</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Clock" className="text-primary mr-2" />
                    Использование баллов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 1 балл = 1 рубль скидки</li>
                    <li>• Минимум для списания: 100 баллов</li>
                    <li>• Баллы действуют 12 месяцев</li>
                    <li>• Можно оплатить до 50% заказа</li>
                    <li>• Баллы не суммируются со скидками</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="TrendingUp" className="text-primary mr-2" />
                    Повышение статуса
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Статус зависит от суммы покупок</li>
                    <li>• Пересчет каждые 3 месяца</li>
                    <li>• Статус может понижаться</li>
                    <li>• Скидка действует сразу</li>
                    <li>• Дополнительные привилегии</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Gift" className="text-primary mr-2" />
                    Специальные предложения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Персональные акции</li>
                    <li>• Ранний доступ к новинкам</li>
                    <li>• Закрытые распродажи</li>
                    <li>• Подарки в день рождения</li>
                    <li>• Эксклюзивные товары</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Начните копить баллы уже сегодня!</h2>
          <p className="text-xl mb-8 opacity-90">
            Зарегистрируйтесь в программе лояльности и получите приветственный бонус
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Зарегистрироваться
            </Button>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Начать покупки
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loyalty;