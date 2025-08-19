import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/about" className="hover:text-orange-200 transition-colors">О нас</Link>
              <Link to="/delivery" className="hover:text-orange-200 transition-colors">Доставка</Link>
              <Link to="/contacts" className="hover:text-orange-200 transition-colors">Контакты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Доставка</h1>
          <p className="text-xl text-gray-600">
            Быстрая и надежная доставка свежих продуктов прямо к вашему дому
          </p>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Варианты доставки</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Курьерская доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge className="bg-green-100 text-green-800">Популярно</Badge>
                  <p className="text-gray-600">Доставка курьером по Москве и области</p>
                  <div className="text-2xl font-bold text-primary">от 300₽</div>
                  <p className="text-sm text-gray-500">Время доставки: 2-4 часа</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Экспресс доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge className="bg-orange-100 text-orange-800">Быстро</Badge>
                  <p className="text-gray-600">Срочная доставка в течение часа</p>
                  <div className="text-2xl font-bold text-primary">от 800₽</div>
                  <p className="text-sm text-gray-500">Время доставки: 30-60 минут</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Самовывоз</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge className="bg-blue-100 text-blue-800">Экономно</Badge>
                  <p className="text-gray-600">Забрать заказ из нашего магазина</p>
                  <div className="text-2xl font-bold text-primary">Бесплатно</div>
                  <p className="text-sm text-gray-500">Готов через: 30 минут</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Зоны доставки</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="text-primary mr-2" />
                  Москва (в пределах МКАД)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Стоимость доставки:</span>
                    <span className="font-semibold">300₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Бесплатная доставка от:</span>
                    <span className="font-semibold text-green-600">3000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Время доставки:</span>
                    <span className="font-semibold">2-4 часа</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="text-primary mr-2" />
                  Московская область
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Стоимость доставки:</span>
                    <span className="font-semibold">500₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Бесплатная доставка от:</span>
                    <span className="font-semibold text-green-600">5000₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Время доставки:</span>
                    <span className="font-semibold">4-6 часов</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как происходит доставка</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Оформление заказа</h3>
              <p className="text-gray-600">Выберите товары и оформите заказ на сайте или по телефону</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Подтверждение</h3>
              <p className="text-gray-600">Наш менеджер свяжется с вами для подтверждения деталей</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Сборка заказа</h3>
              <p className="text-gray-600">Мы тщательно упаковываем ваш заказ с соблюдением температурного режима</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600">Курьер доставит заказ в указанное время и место</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Особые условия</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Icon name="Snowflake" className="mr-2" />
                  Холодовая цепь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Все продукты доставляются в специальных термосумках с поддержанием 
                  необходимой температуры. Мы гарантируем сохранность свежести 
                  от склада до вашего дома.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Icon name="Shield" className="mr-2" />
                  Гарантия качества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Если вы не удовлетворены качеством доставленного товара, 
                  мы вернем деньги или заменим продукт в течение 24 часов 
                  с момента получения заказа.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Delivery */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Вопросы по доставке?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами, и мы поможем выбрать оптимальный вариант доставки
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center">
              <Icon name="Phone" className="mr-2" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" className="mr-2" />
              <span>Ежедневно 8:00-22:00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;