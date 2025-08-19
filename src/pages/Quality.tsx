import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Quality = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/quality" className="hover:text-orange-200 transition-colors">Качество</Link>
              <Link to="/certificates" className="hover:text-orange-200 transition-colors">Сертификаты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Контроль качества</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы применяем самые строгие стандарты контроля качества на всех этапах — 
            от закупки сырья до доставки готовой продукции
          </p>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши стандарты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>HACCP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Система анализа опасностей и критических контрольных точек
                </p>
                <Badge className="bg-green-100 text-green-800">Сертифицировано</Badge>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>ISO 22000</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Международный стандарт системы менеджмента безопасности пищевых продуктов
                </p>
                <Badge className="bg-green-100 text-green-800">Сертифицировано</Badge>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="CheckCircle" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>ГОСТ Р</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Соответствие российским государственным стандартам качества
                </p>
                <Badge className="bg-green-100 text-green-800">Соответствует</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Этапы контроля качества</h2>
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Отбор поставщиков</h3>
                  <p className="text-gray-700 mb-4">
                    Мы тщательно проверяем каждого поставщика: посещаем фермы и производства, 
                    изучаем документацию, проводим аудит систем качества.
                  </p>
                  <div className="flex space-x-4">
                    <Badge variant="outline">Аудит производства</Badge>
                    <Badge variant="outline">Проверка документов</Badge>
                    <Badge variant="outline">Анализ образцов</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Входной контроль</h3>
                  <p className="text-gray-700 mb-4">
                    Каждая партия товара проходит входной контроль: проверяется температура, 
                    внешний вид, запах, консистенция, документы качества.
                  </p>
                  <div className="flex space-x-4">
                    <Badge variant="outline">Органолептический анализ</Badge>
                    <Badge variant="outline">Температурный контроль</Badge>
                    <Badge variant="outline">Проверка сроков</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Хранение</h3>
                  <p className="text-gray-700 mb-4">
                    Продукция хранится в специальных холодильных камерах с постоянным 
                    мониторингом температуры и влажности.
                  </p>
                  <div className="flex space-x-4">
                    <Badge variant="outline">Холодовая цепь</Badge>
                    <Badge variant="outline">Мониторинг 24/7</Badge>
                    <Badge variant="outline">Раздельное хранение</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Упаковка и доставка</h3>
                  <p className="text-gray-700 mb-4">
                    Продукты упаковываются в специальную тару с соблюдением санитарных норм. 
                    Доставка осуществляется в рефрижераторах.
                  </p>
                  <div className="flex space-x-4">
                    <Badge variant="outline">Вакуумная упаковка</Badge>
                    <Badge variant="outline">Термосумки</Badge>
                    <Badge variant="outline">Контроль температуры</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Laboratory */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Собственная лаборатория</h2>
              <p className="text-gray-700 mb-6">
                В нашей аккредитованной лаборатории проводятся микробиологические, 
                химические и физико-химические исследования всех поступающих продуктов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" />
                  <span>Микробиологический анализ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" />
                  <span>Определение антибиотиков</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" />
                  <span>Анализ на тяжелые металлы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" />
                  <span>Проверка на пестициды</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8">
              <div className="text-center">
                <Icon name="Microscope" size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Современное оборудование</h3>
                <p className="text-gray-700">
                  Используем новейшие методы анализа и высокоточное оборудование 
                  ведущих мировых производителей
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Наши гарантии</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Icon name="Shield" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% качество</h3>
              <p className="opacity-90">
                Гарантируем высочайшее качество всех наших продуктов
              </p>
            </div>
            <div>
              <Icon name="RefreshCw" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Возврат товара</h3>
              <p className="opacity-90">
                Вернем деньги, если товар не соответствует заявленному качеству
              </p>
            </div>
            <div>
              <Icon name="Clock" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Свежесть</h3>
              <p className="opacity-90">
                Поставляем только свежие продукты с максимальным сроком годности
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;