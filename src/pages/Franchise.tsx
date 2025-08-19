import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

const Franchise = () => {
  const franchisePackages = [
    {
      name: "Мини-формат",
      area: "30-50 м²",
      investment: "1 500 000₽",
      payback: "12-15 месяцев",
      revenue: "300 000₽/мес",
      description: "Компактный магазин в спальном районе",
      features: [
        "Базовый ассортимент",
        "1-2 сотрудника",
        "Холодильное оборудование",
        "Система учета"
      ]
    },
    {
      name: "Стандарт",
      area: "80-120 м²",
      investment: "3 000 000₽",
      payback: "15-18 месяцев",
      revenue: "600 000₽/мес",
      description: "Полноценный магазин с широким ассортиментом",
      features: [
        "Полный ассортимент",
        "3-4 сотрудника",
        "Зона разделки",
        "Дегустационная зона"
      ],
      popular: true
    },
    {
      name: "Премиум",
      area: "150-200 м²",
      investment: "5 000 000₽",
      payback: "18-24 месяца",
      revenue: "1 000 000₽/мес",
      description: "Флагманский магазин с полным сервисом",
      features: [
        "Эксклюзивный ассортимент",
        "6-8 сотрудников",
        "Кулинария",
        "Кафе-зона"
      ]
    }
  ];

  const support = [
    {
      category: "Обучение",
      description: "Полная подготовка персонала",
      duration: "2 недели",
      items: [
        "Работа с продукцией",
        "Стандарты обслуживания",
        "Система продаж",
        "Управление магазином"
      ]
    },
    {
      category: "Маркетинг",
      description: "Продвижение и реклама",
      duration: "Постоянно",
      items: [
        "Рекламные материалы",
        "Акции и промо",
        "Цифровой маркетинг",
        "PR-поддержка"
      ]
    },
    {
      category: "Операционная поддержка",
      description: "Помощь в ежедневной работе",
      duration: "Постоянно",
      items: [
        "Поставки товаров",
        "Контроль качества",
        "Финансовая отчетность",
        "Решение проблем"
      ]
    }
  ];

  const requirements = [
    {
      category: "Финансовые",
      items: [
        "Собственные средства от 40% инвестиций",
        "Подтвержденная платежеспособность",
        "Резерв на операционные расходы",
        "Кредитная история без нарушений"
      ]
    },
    {
      category: "Опыт и навыки",
      items: [
        "Опыт в розничной торговле от 2 лет",
        "Управленческие навыки",
        "Знание местного рынка",
        "Готовность к обучению"
      ]
    },
    {
      category: "Помещение",
      items: [
        "Собственность или долгосрочная аренда",
        "Проходимое место",
        "Соответствие санитарным нормам",
        "Возможность установки оборудования"
      ]
    }
  ];

  const timeline = [
    {
      phase: "Подача заявки",
      duration: "1 день",
      description: "Заполнение анкеты и первичная оценка"
    },
    {
      phase: "Собеседование",
      duration: "1 неделя",
      description: "Встреча с командой франчайзинга"
    },
    {
      phase: "Бизнес-план",
      duration: "2 недели",
      description: "Разработка индивидуального бизнес-плана"
    },
    {
      phase: "Поиск помещения",
      duration: "1-3 месяца",
      description: "Подбор и согласование локации"
    },
    {
      phase: "Подготовка",
      duration: "1-2 месяца",
      description: "Ремонт, оборудование, обучение"
    },
    {
      phase: "Открытие",
      duration: "1 день",
      description: "Торжественное открытие магазина"
    }
  ];

  const successStories = [
    {
      name: "Алексей Морозов",
      city: "Санкт-Петербург",
      openDate: "2022",
      revenue: "+150%",
      story: "Открыл магазин в спальном районе. За 2 года бизнес полностью окупился, планирую второй магазин."
    },
    {
      name: "Мария Козлова",
      city: "Екатеринбург",
      openDate: "2021",
      revenue: "+200%",
      story: "Первый магазин МЕСТО ДРАРИ в Екатеринбурге. Сейчас у меня 3 точки и команда из 15 человек."
    },
    {
      name: "Дмитрий Волков",
      city: "Казань",
      openDate: "2023",
      revenue: "+120%",
      story: "Решил сменить сферу деятельности. Франшиза МЕСТО ДРАРИ оказалась отличным выбором!"
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
              <Link to="/franchise" className="hover:text-orange-200 transition-colors">Франшиза</Link>
              <Link to="/partnership" className="hover:text-orange-200 transition-colors">Партнерство</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Франшиза МЕСТО ДРАРИ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Откройте собственный магазин премиальных мясных продуктов под проверенным брендом. 
            Готовая бизнес-модель с высокой рентабельностью и полной поддержкой.
          </p>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-gray-600">лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-gray-600">франчайзи</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-gray-600">рентабельность</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">18</div>
              <div className="text-gray-600">месяцев окупаемость</div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Форматы франшизы</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {franchisePackages.map((pkg, index) => (
              <Card key={index} className={`p-6 ${pkg.popular ? 'ring-2 ring-primary' : ''} hover:shadow-lg transition-shadow`}>
                <CardHeader className="text-center">
                  {pkg.popular && <Badge className="mb-4 bg-primary">Популярный</Badge>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Площадь:</span>
                      <span className="font-semibold">{pkg.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Инвестиции:</span>
                      <span className="font-semibold text-primary">{pkg.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Окупаемость:</span>
                      <span className="font-semibold text-green-600">{pkg.payback}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Выручка:</span>
                      <span className="font-semibold">{pkg.revenue}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-3">Особенности:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full">Выбрать формат</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Поддержка франчайзи</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {support.map((item, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">{item.category}</CardTitle>
                  <p className="text-gray-600">{item.description}</p>
                  <Badge variant="outline">{item.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.items.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Требования к франчайзи</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{req.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
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

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Этапы открытия</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {timeline.map((phase, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{phase.phase}</h3>
                    <p className="text-gray-700">{phase.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-blue-100 text-blue-800">{phase.duration}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Истории успеха</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{story.name}</h3>
                      <p className="text-gray-600">{story.city}</p>
                      <p className="text-sm text-gray-500">Открытие: {story.openDate}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{story.story}"</p>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-100 text-green-800">Рост выручки: {story.revenue}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Финансовая модель</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Пример расчета (формат "Стандарт")</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Первоначальные инвестиции:</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Паушальный взнос:</span>
                        <span className="font-semibold">500 000₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Оборудование:</span>
                        <span className="font-semibold">1 500 000₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ремонт и дизайн:</span>
                        <span className="font-semibold">800 000₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Первоначальный товар:</span>
                        <span className="font-semibold">200 000₽</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Итого:</span>
                          <span className="font-bold text-primary">3 000 000₽</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ежемесячные расходы:</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Роялти (5%):</span>
                        <span className="font-semibold">30 000₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Аренда:</span>
                        <span className="font-semibold">150 000₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Зарплата:</span>
                        <span className="font-semibold">180 000₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Прочие расходы:</span>
                        <span className="font-semibold">90 000₽</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-lg">
                          <span className="font-bold">Итого расходы:</span>
                          <span className="font-bold">450 000₽</span>
                        </div>
                        <div className="flex justify-between text-lg text-green-600 mt-2">
                          <span className="font-bold">Прибыль:</span>
                          <span className="font-bold">150 000₽</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Стать франчайзи</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Что вы получите</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Award" className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Узнаваемый бренд</h4>
                      <p className="text-gray-600">15 лет на рынке, высокое доверие клиентов</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="BookOpen" className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Готовая бизнес-модель</h4>
                      <p className="text-gray-600">Отработанные процессы и стандарты</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Users" className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Полная поддержка</h4>
                      <p className="text-gray-600">От открытия до ежедневной работы</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="TrendingUp" className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Высокая рентабельность</h4>
                      <p className="text-gray-600">Средняя рентабельность 25-30%</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Shield" className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Защита территории</h4>
                      <p className="text-gray-600">Эксклюзивные права на район</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Заявка на франшизу</CardTitle>
                  <p className="text-gray-600">
                    Заполните анкету, и мы свяжемся с вами для обсуждения деталей
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Фамилия</label>
                        <Input placeholder="Ваша фамилия" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Город</label>
                      <Input placeholder="В каком городе планируете открытие?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Формат франшизы</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Выберите формат</option>
                        <option>Мини-формат</option>
                        <option>Стандарт</option>
                        <option>Премиум</option>
                        <option>Не определился</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Размер инвестиций</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Выберите размер</option>
                        <option>до 2 000 000₽</option>
                        <option>2 000 000 - 4 000 000₽</option>
                        <option>4 000 000 - 6 000 000₽</option>
                        <option>свыше 6 000 000₽</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Опыт в бизнесе</label>
                      <Textarea 
                        placeholder="Расскажите о своем опыте в бизнесе, особенно в розничной торговле..."
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                      <Textarea 
                        placeholder="Есть ли у вас помещение, команда, особые пожелания..."
                        rows={3}
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

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Какой размер роялти?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Роялти составляет 5% от ежемесячной выручки. Это покрывает 
                  поддержку, маркетинг и использование торговой марки.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Нужен ли опыт в торговле?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Опыт желателен, но не обязателен. Мы проводим полное обучение 
                  всем аспектам ведения бизнеса.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Можно ли открыть в небольшом городе?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Да, мы рассматриваем города с населением от 50 000 человек. 
                  Главное — наличие целевой аудитории.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Какая поддержка после открытия?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Постоянная поддержка: поставки, маркетинг, обучение персонала, 
                  решение операционных вопросов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать свой бизнес?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с отделом франчайзинга для получения подробной информации
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Отдел франчайзинга</h3>
              <p>+7 (495) 123-45-67 доб. 501</p>
              <p className="text-sm opacity-75">Пн-Пт: 9:00-18:00</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>franchise@mestodari.ru</p>
              <p className="text-sm opacity-75">Ответим в течение дня</p>
            </div>
            <div>
              <Icon name="FileText" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Презентация</h3>
              <p>Подробная информация о франшизе</p>
              <p className="text-sm opacity-75">PDF для скачивания</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Скачать презентацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Записаться на встречу
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;