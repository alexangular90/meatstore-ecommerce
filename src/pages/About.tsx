import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const About = () => {
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">О компании МЕСТО ДРАРИ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — команда профессионалов с более чем 15-летним опытом в сфере поставок 
            премиальных мясных продуктов. Наша миссия — обеспечить вас только лучшими продуктами.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Компания МЕСТО ДРАРИ была основана в 2009 году группой энтузиастов, 
                  объединенных общей страстью к качественным мясным продуктам. 
                  Начав с небольшого магазина в центре Москвы, мы постепенно расширили 
                  свою деятельность и сегодня являемся одним из ведущих поставщиков 
                  премиального мяса в регионе.
                </p>
                <p>
                  За годы работы мы установили прочные партнерские отношения с лучшими 
                  фермерскими хозяйствами России и зарубежья, что позволяет нам 
                  гарантировать высочайшее качество всех наших продуктов.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">видов продукции</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-600">гарантия качества</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы никогда не идем на компромиссы в вопросах качества. 
                  Каждый продукт проходит строгий контроль.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Клиентоориентированность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Потребности наших клиентов — наш главный приоритет. 
                  Мы всегда готовы помочь и проконсультировать.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Leaf" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Экологичность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы заботимся об окружающей среде и работаем только 
                  с экологически ответственными поставщиками.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Александр Петров</h3>
                <p className="text-primary font-medium mb-2">Генеральный директор</p>
                <p className="text-gray-600 text-sm">
                  15 лет опыта в мясной индустрии. Эксперт по качеству продукции.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Мария Иванова</h3>
                <p className="text-primary font-medium mb-2">Шеф-технолог</p>
                <p className="text-gray-600 text-sm">
                  Специалист по разработке новых продуктов и контролю качества.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Дмитрий Сидоров</h3>
                <p className="text-primary font-medium mb-2">Менеджер по закупкам</p>
                <p className="text-gray-600 text-sm">
                  Отвечает за поиск и отбор лучших поставщиков мясной продукции.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы попробовать наши продукты?</h2>
          <p className="text-xl mb-8 opacity-90">
            Убедитесь в качестве сами — сделайте первый заказ уже сегодня!
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/">Перейти в каталог</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;