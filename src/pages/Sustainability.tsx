import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

const Sustainability = () => {
  const initiatives = [
    {
      title: "Экологичная упаковка",
      description: "Переход на биоразлагаемые материалы",
      progress: 75,
      target: "100% к 2025 году",
      icon: "Package"
    },
    {
      title: "Углеродная нейтральность",
      description: "Снижение выбросов CO2",
      progress: 45,
      target: "Нейтральность к 2030 году",
      icon: "Leaf"
    },
    {
      title: "Ответственное животноводство",
      description: "Партнерство с этичными фермами",
      progress: 90,
      target: "100% сертифицированных ферм",
      icon: "Heart"
    },
    {
      title: "Энергоэффективность",
      description: "Использование возобновляемой энергии",
      progress: 60,
      target: "80% зеленой энергии к 2026 году",
      icon: "Zap"
    }
  ];

  const certifications = [
    {
      name: "Organic",
      description: "Органическое производство без химикатов",
      icon: "Leaf"
    },
    {
      name: "Animal Welfare",
      description: "Соблюдение стандартов благополучия животных",
      icon: "Heart"
    },
    {
      name: "Carbon Neutral",
      description: "Компенсация углеродного следа",
      icon: "Globe"
    },
    {
      name: "Sustainable Packaging",
      description: "Экологичная упаковка",
      icon: "Package"
    }
  ];

  const partners = [
    {
      name: "Эко-ферма 'Зеленые луга'",
      location: "Тульская область",
      specialization: "Органическая говядина",
      certification: "EU Organic",
      description: "Семейная ферма с 20-летней историей, специализирующаяся на выращивании крупного рогатого скота на естественных пастбищах"
    },
    {
      name: "Птицефабрика 'Натуральная'",
      location: "Московская область",
      specialization: "Свободный выгул кур",
      certification: "Free Range",
      description: "Современное предприятие, где куры содержатся в естественных условиях без использования антибиотиков"
    },
    {
      name: "Свиноферма 'Экологичная'",
      location: "Калужская область",
      specialization: "Органическая свинина",
      certification: "Organic Plus",
      description: "Инновационная ферма с замкнутым циклом производства и собственными кормами"
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
              <Link to="/sustainability" className="hover:text-orange-200 transition-colors">Экология</Link>
              <Link to="/quality" className="hover:text-orange-200 transition-colors">Качество</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Экологическая ответственность</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы заботимся о планете и будущих поколениях. Наша цель — производить 
            качественные продукты с минимальным воздействием на окружающую среду.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши обязательства</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="text-center">
                  <Icon name={initiative.icon as any} size={48} className="text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{initiative.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{initiative.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс:</span>
                      <span className="font-semibold">{initiative.progress}%</span>
                    </div>
                    <Progress value={initiative.progress} className="h-2" />
                    <p className="text-xs text-gray-500">{initiative.target}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Экологические сертификаты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Icon name={cert.icon as any} size={48} className="text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                  <Badge className="mt-4 bg-green-100 text-green-800">Сертифицировано</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши экологические практики</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Recycle" className="text-green-600 mr-2" />
                    Переработка отходов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Мы перерабатываем 95% производственных отходов. Органические отходы 
                    идут на производство биогаза, упаковочные материалы — на вторичную переработку.
                  </p>
                  <div className="flex space-x-4">
                    <Badge className="bg-green-100 text-green-800">95% переработки</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Биогаз</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Droplets" className="text-blue-600 mr-2" />
                    Водосбережение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Современные системы очистки и рециркуляции воды позволяют нам 
                    сократить потребление на 40% по сравнению с отраслевыми стандартами.
                  </p>
                  <div className="flex space-x-4">
                    <Badge className="bg-blue-100 text-blue-800">-40% потребления</Badge>
                    <Badge className="bg-green-100 text-green-800">Очистка 100%</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Truck" className="text-orange-600 mr-2" />
                    Зеленая логистика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Оптимизация маршрутов доставки и использование экологичного транспорта 
                    помогают снизить выбросы CO2 на 25%.
                  </p>
                  <div className="flex space-x-4">
                    <Badge className="bg-green-100 text-green-800">-25% выбросов</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Эко-транспорт</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Sun" className="text-yellow-600 mr-2" />
                    Возобновляемая энергия
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    60% энергии наших производственных мощностей поступает от солнечных 
                    панелей и ветрогенераторов. К 2026 году планируем достичь 80%.
                  </p>
                  <div className="flex space-x-4">
                    <Badge className="bg-yellow-100 text-yellow-800">60% зеленой энергии</Badge>
                    <Badge className="bg-green-100 text-green-800">Цель: 80%</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Trees" className="text-green-600 mr-2" />
                    Лесовосстановление
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Мы участвуем в программах лесовосстановления. За каждый заказ 
                    свыше 5000₽ мы высаживаем одно дерево в российских лесах.
                  </p>
                  <div className="flex space-x-4">
                    <Badge className="bg-green-100 text-green-800">2500 деревьев в год</Badge>
                    <Badge className="bg-blue-100 text-blue-800">5 регионов</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Users" className="text-purple-600 mr-2" />
                    Социальная ответственность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Мы поддерживаем местные сообщества, создаем рабочие места 
                    и участвуем в благотворительных программах.
                  </p>
                  <div className="flex space-x-4">
                    <Badge className="bg-purple-100 text-purple-800">200+ рабочих мест</Badge>
                    <Badge className="bg-green-100 text-green-800">10 проектов</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Farms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши эко-партнеры</h2>
          <div className="space-y-8">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{partner.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="MapPin" size={16} className="text-gray-500" />
                      <span className="text-gray-600">{partner.location}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{partner.certification}</Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Специализация:</h4>
                    <p className="text-primary font-medium">{partner.specialization}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700">{partner.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наше воздействие на экологию</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Droplets" size={48} className="text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">-40%</div>
                <h3 className="text-lg font-semibold mb-2">Потребление воды</h3>
                <p className="text-gray-600">По сравнению с 2020 годом</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Zap" size={48} className="text-yellow-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">-30%</div>
                <h3 className="text-lg font-semibold mb-2">Энергопотребление</h3>
                <p className="text-gray-600">Благодаря энергоэффективности</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Recycle" size={48} className="text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <h3 className="text-lg font-semibold mb-2">Переработка отходов</h3>
                <p className="text-gray-600">Отходы идут на вторсырье</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Trees" size={48} className="text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">2500</div>
                <h3 className="text-lg font-semibold mb-2">Деревьев в год</h3>
                <p className="text-gray-600">Высаживаем для компенсации</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Цели на будущее</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calendar" className="text-primary mr-2" />
                    2025 год
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>100% биоразлагаемая упаковка</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Сокращение выбросов на 50%</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Партнерство только с эко-фермами</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calendar" className="text-primary mr-2" />
                    2030 год
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Углеродная нейтральность</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>100% возобновляемая энергия</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Замкнутый цикл производства</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как вы можете помочь</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Package" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Возвращайте упаковку</h3>
                <p className="text-gray-600">
                  Приносите чистую упаковку в наши магазины для повторного использования
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="ShoppingCart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Планируйте покупки</h3>
                <p className="text-gray-600">
                  Покупайте столько, сколько сможете использовать, чтобы избежать пищевых отходов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Выбирайте эко-продукты</h3>
                <p className="text-gray-600">
                  Отдавайте предпочтение продукции с экологическими сертификатами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отчеты об устойчивом развитии</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <Icon name="FileText" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Отчет 2023</h3>
                <p className="text-gray-600 mb-4">Итоги года в области экологии</p>
                <Badge className="bg-green-100 text-green-800">PDF, 2.5 МБ</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <Icon name="BarChart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Углеродный след</h3>
                <p className="text-gray-600 mb-4">Анализ выбросов CO2</p>
                <Badge className="bg-blue-100 text-blue-800">PDF, 1.8 МБ</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Сертификаты</h3>
                <p className="text-gray-600 mb-4">Экологические сертификаты</p>
                <Badge className="bg-purple-100 text-purple-800">ZIP, 5.2 МБ</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Вместе за экологичное будущее!</h2>
          <p className="text-xl mb-8 opacity-90">
            Выбирая МЕСТО ДРАРИ, вы поддерживаете ответственное производство и заботу о планете
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Выбрать эко-продукты
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;