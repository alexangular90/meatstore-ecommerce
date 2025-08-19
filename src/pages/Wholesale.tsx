import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Wholesale = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/wholesale" className="hover:text-orange-200 transition-colors">Опт</Link>
              <Link to="/contacts" className="hover:text-orange-200 transition-colors">Контакты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Оптовые поставки</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Надежный партнер для ресторанов, кафе, магазинов и других предприятий. 
            Качественные мясные продукты по выгодным ценам с доставкой.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества работы с нами</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="TrendingDown" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Выгодные цены</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Специальные оптовые цены со скидками до 30% от розничной стоимости. 
                  Чем больше объем - тем выгоднее условия.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Регулярные поставки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Гибкий график поставок под ваши потребности. Ежедневные, еженедельные 
                  или по запросу - выбирайте удобный формат.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Все продукты проходят строгий контроль качества. Полный пакет документов 
                  и сертификатов для вашей отчетности.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Персональный менеджер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Индивидуальный подход к каждому клиенту. Ваш персональный менеджер 
                  поможет с выбором и оформлением заказов.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Быстрая обработка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Оперативная обработка заказов и быстрая доставка. Срочные заказы 
                  выполняем в день обращения.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="CreditCard" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Удобная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Различные формы оплаты: наличный и безналичный расчет, 
                  отсрочка платежа для постоянных клиентов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Оптовые скидки</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">5%</div>
                <CardTitle>Стартовый</CardTitle>
                <p className="text-gray-600">от 50 000₽</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Скидка 5%</li>
                  <li>✓ Доставка по графику</li>
                  <li>✓ Базовая поддержка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-primary border-2">
              <CardHeader>
                <Badge className="mb-2">Популярный</Badge>
                <div className="text-3xl font-bold text-primary mb-2">15%</div>
                <CardTitle>Стандарт</CardTitle>
                <p className="text-gray-600">от 150 000₽</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Скидка 15%</li>
                  <li>✓ Приоритетная доставка</li>
                  <li>✓ Персональный менеджер</li>
                  <li>✓ Отсрочка платежа 7 дней</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <CardTitle>Премиум</CardTitle>
                <p className="text-gray-600">от 300 000₽</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Скидка 25%</li>
                  <li>✓ Ежедневная доставка</li>
                  <li>✓ Выделенный менеджер</li>
                  <li>✓ Отсрочка платежа 14 дней</li>
                  <li>✓ Индивидуальная нарезка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <CardTitle>VIP</CardTitle>
                <p className="text-gray-600">от 500 000₽</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Скидка 30%</li>
                  <li>✓ Круглосуточная доставка</li>
                  <li>✓ Команда поддержки</li>
                  <li>✓ Отсрочка платежа 30 дней</li>
                  <li>✓ Эксклюзивные продукты</li>
                  <li>✓ Консультации технолога</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши клиенты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold mb-2">Рестораны</h3>
                <p className="text-gray-600">Премиальные отруби для высокой кухни</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-semibold mb-2">Кафе и бары</h3>
                <p className="text-gray-600">Качественные продукты для бизнес-ланчей</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-semibold mb-2">Магазины</h3>
                <p className="text-gray-600">Широкий ассортимент для розничной торговли</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold mb-2">Корпоративное питание</h3>
                <p className="text-gray-600">Поставки для столовых и кейтеринга</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Стать оптовым клиентом</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Почему выбирают нас</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">15+ лет на рынке</h4>
                      <p className="text-gray-600">Проверенный временем поставщик</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">500+ довольных клиентов</h4>
                      <p className="text-gray-600">Рестораны, магазины, кафе по всей России</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Собственное производство</h4>
                      <p className="text-gray-600">Контроль качества на всех этапах</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Логистическая сеть</h4>
                      <p className="text-gray-600">Доставка по всей Москве и области</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Заявка на сотрудничество</CardTitle>
                  <p className="text-gray-600">
                    Заполните форму, и наш менеджер свяжется с вами в течение часа
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Название компании</label>
                        <Input placeholder="ООО Ваша компания" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">ИНН</label>
                        <Input placeholder="1234567890" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Контактное лицо</label>
                        <Input placeholder="Иван Иванов" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Должность</label>
                        <Input placeholder="Директор" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="info@company.ru" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Планируемый объем закупок в месяц</label>
                      <Input placeholder="100 000 рублей" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Комментарий</label>
                      <Textarea 
                        placeholder="Расскажите о вашем бизнесе и потребностях..."
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
          <h2 className="text-3xl font-bold mb-8">Готовы начать сотрудничество?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Отдел продаж</h3>
              <p>+7 (495) 123-45-67</p>
              <p className="text-sm opacity-75">Пн-Пт: 8:00-20:00</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>opt@mestodari.ru</p>
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
            Связаться с менеджером
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Wholesale;