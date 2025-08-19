import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "Сертификат соответствия ГОСТ Р",
      description: "Подтверждает соответствие продукции российским стандартам качества",
      validUntil: "2025-12-31",
      number: "РОСС RU.АГ39.Н00156",
      status: "Действующий"
    },
    {
      id: 2,
      name: "Сертификат HACCP",
      description: "Система анализа опасностей и критических контрольных точек",
      validUntil: "2025-08-15",
      number: "HACCP-2024-001",
      status: "Действующий"
    },
    {
      id: 3,
      name: "ISO 22000:2018",
      description: "Международный стандарт системы менеджмента безопасности пищевых продуктов",
      validUntil: "2026-03-20",
      number: "ISO-22000-2024-MSK",
      status: "Действующий"
    },
    {
      id: 4,
      name: "Ветеринарное свидетельство",
      description: "Подтверждает ветеринарно-санитарную безопасность продукции",
      validUntil: "2024-12-31",
      number: "ВС-77-2024-0892",
      status: "Действующий"
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
              <Link to="/quality" className="hover:text-orange-200 transition-colors">Качество</Link>
              <Link to="/certificates" className="hover:text-orange-200 transition-colors">Сертификаты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Сертификаты и лицензии</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Вся наша деятельность лицензирована и сертифицирована в соответствии 
            с российскими и международными стандартами
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши сертификаты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <Card key={cert.id} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="Award" size={32} className="text-primary" />
                      <div>
                        <CardTitle className="text-xl">{cert.name}</CardTitle>
                        <p className="text-sm text-gray-500">№ {cert.number}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{cert.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{cert.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Действителен до:</p>
                      <p className="font-semibold">{cert.validUntil}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Bodies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контролирующие органы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Building" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Роспотребнадзор</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Федеральная служба по надзору в сфере защиты прав потребителей 
                  и благополучия человека
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Россельхознадзор</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Федеральная служба по ветеринарному и фитосанитарному надзору
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="CheckCircle" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Росстандарт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Федеральное агентство по техническому регулированию и метрологии
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Соответствие требованиям</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" />
                  <span>ТР ТС 021/2011 "О безопасности пищевой продукции"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" />
                  <span>ТР ТС 034/2013 "О безопасности мяса и мясной продукции"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" />
                  <span>СанПиН 2.3.2.1078-01 "Гигиенические требования"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" />
                  <span>ГОСТ 31797-2012 "Мясо. Разделка говядины"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-600" />
                  <span>ГОСТ 31778-2012 "Мясо. Разделка свинины"</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8">
              <div className="text-center">
                <Icon name="FileText" size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Полное соответствие</h3>
                <p className="text-gray-700 mb-6">
                  Все наши процессы и продукция полностью соответствуют 
                  действующему российскому и международному законодательству
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Запросить документы
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Регулярные аудиты</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Мы проходим плановые и внеплановые проверки контролирующих органов, 
            а также внутренние аудиты системы качества
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-gray-600">проверок в год</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-gray-600">нарушений</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">соответствие</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">лет без замечаний</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;