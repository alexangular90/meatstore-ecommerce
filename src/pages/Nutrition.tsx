import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Nutrition = () => {
  const nutritionData = [
    {
      product: "Говядина (стейк)",
      calories: 250,
      protein: 26,
      fat: 15,
      carbs: 0,
      vitamins: ["B12", "B6", "Ниацин", "Рибофлавин"],
      minerals: ["Железо", "Цинк", "Селен", "Фосфор"],
      benefits: [
        "Высокое содержание белка",
        "Источник железа",
        "Витамины группы B",
        "Поддержка мышечной массы"
      ]
    },
    {
      product: "Свинина (вырезка)",
      calories: 143,
      protein: 26,
      fat: 4,
      carbs: 0,
      vitamins: ["B1", "B6", "B12", "Ниацин"],
      minerals: ["Селен", "Фосфор", "Цинк"],
      benefits: [
        "Низкое содержание жира",
        "Богата тиамином (B1)",
        "Легко усваивается",
        "Источник селена"
      ]
    },
    {
      product: "Курица (грудка)",
      calories: 165,
      protein: 31,
      fat: 3.6,
      carbs: 0,
      vitamins: ["B3", "B6", "B12"],
      minerals: ["Селен", "Фосфор"],
      benefits: [
        "Диетический продукт",
        "Высокое содержание белка",
        "Низкое содержание жира",
        "Подходит для похудения"
      ]
    },
    {
      product: "Баранина",
      calories: 294,
      protein: 25,
      fat: 21,
      carbs: 0,
      vitamins: ["B12", "Ниацин", "B6"],
      minerals: ["Цинк", "Железо", "Селен"],
      benefits: [
        "Богата цинком",
        "Источник витамина B12",
        "Поддерживает иммунитет",
        "Улучшает метаболизм"
      ]
    }
  ];

  const dietTypes = [
    {
      name: "Кето-диета",
      description: "Высокожировая, низкоуглеводная диета",
      recommendations: [
        "Жирные отруби говядины",
        "Свиная грудинка",
        "Баранина с жиром",
        "Куриные бедра с кожей"
      ],
      icon: "Zap"
    },
    {
      name: "Белковая диета",
      description: "Высокобелковое питание для набора мышечной массы",
      recommendations: [
        "Куриная грудка",
        "Говяжья вырезка",
        "Свиная вырезка",
        "Индейка"
      ],
      icon: "Dumbbell"
    },
    {
      name: "Похудение",
      description: "Низкокалорийные продукты для снижения веса",
      recommendations: [
        "Куриная грудка без кожи",
        "Телятина",
        "Кролик",
        "Индейка"
      ],
      icon: "TrendingDown"
    },
    {
      name: "Здоровое питание",
      description: "Сбалансированный рацион для поддержания здоровья",
      recommendations: [
        "Нежирная говядина",
        "Курица",
        "Рыба",
        "Субпродукты"
      ],
      icon: "Heart"
    }
  ];

  const healthBenefits = [
    {
      title: "Строительство мышц",
      description: "Полноценный белок содержит все незаменимые аминокислоты",
      icon: "Activity"
    },
    {
      title: "Поддержка иммунитета",
      description: "Цинк, селен и витамины группы B укрепляют защитные силы",
      icon: "Shield"
    },
    {
      title: "Здоровье крови",
      description: "Железо и витамин B12 предотвращают анемию",
      icon: "Heart"
    },
    {
      title: "Энергия и метаболизм",
      description: "Витамины группы B участвуют в энергетическом обмене",
      icon: "Zap"
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
              <Link to="/nutrition" className="hover:text-orange-200 transition-colors">Питание</Link>
              <Link to="/cooking-tips" className="hover:text-orange-200 transition-colors">Советы</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Питательная ценность</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте о пользе мясных продуктов для здоровья. Подробная информация 
            о составе, калорийности и рекомендации по здоровому питанию.
          </p>
        </div>
      </section>

      {/* Nutrition Facts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Пищевая ценность продуктов</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {nutritionData.map((item, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">{item.product}</CardTitle>
                  <p className="text-gray-600">На 100 грамм продукта</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{item.calories}</div>
                      <div className="text-sm text-gray-600">ккал</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{item.protein}</div>
                      <div className="text-sm text-gray-600">белки</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{item.fat}</div>
                      <div className="text-sm text-gray-600">жиры</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{item.carbs}</div>
                      <div className="text-sm text-gray-600">углеводы</div>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="vitamins" className="mt-6">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="vitamins">Витамины</TabsTrigger>
                      <TabsTrigger value="minerals">Минералы</TabsTrigger>
                      <TabsTrigger value="benefits">Польза</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="vitamins" className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {item.vitamins.map((vitamin) => (
                          <Badge key={vitamin} variant="outline">{vitamin}</Badge>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="minerals" className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {item.minerals.map((mineral) => (
                          <Badge key={mineral} variant="outline">{mineral}</Badge>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="benefits" className="mt-4">
                      <ul className="space-y-1">
                        {item.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diet Recommendations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Рекомендации по диетам</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dietTypes.map((diet, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon name={diet.icon as any} size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{diet.name}</CardTitle>
                  <p className="text-gray-600 text-sm">{diet.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Рекомендуем:</h4>
                  <ul className="space-y-2">
                    {diet.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Польза мяса для здоровья</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthBenefits.map((benefit, index) => (
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

      {/* Daily Recommendations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Суточные нормы потребления</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardHeader>
                  <Icon name="User" size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle>Мужчины</CardTitle>
                  <p className="text-gray-600">Активный образ жизни</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-primary">150-200г</div>
                      <div className="text-sm text-gray-600">мяса в день</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">90-120г</div>
                      <div className="text-sm text-gray-600">белка в день</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <Icon name="User" size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle>Женщины</CardTitle>
                  <p className="text-gray-600">Активный образ жизни</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-primary">120-150г</div>
                      <div className="text-sm text-gray-600">мяса в день</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">70-90г</div>
                      <div className="text-sm text-gray-600">белка в день</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader>
                  <Icon name="Baby" size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle>Дети</CardTitle>
                  <p className="text-gray-600">7-14 лет</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-primary">80-100г</div>
                      <div className="text-sm text-gray-600">мяса в день</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">50-70г</div>
                      <div className="text-sm text-gray-600">белка в день</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Myths and Facts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Мифы и факты о мясе</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Icon name="X" className="text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-800">МИФ</h3>
                  </div>
                  <p className="text-red-700">
                    "Красное мясо всегда вредно для здоровья"
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Icon name="CheckCircle" className="text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">ФАКТ</h3>
                  </div>
                  <p className="text-green-700">
                    Качественное красное мясо в умеренных количествах полезно. 
                    Оно содержит железо, B12 и другие важные нутриенты.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Icon name="X" className="text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-800">МИФ</h3>
                  </div>
                  <p className="text-red-700">
                    "Мясо можно полностью заменить растительными белками"
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Icon name="CheckCircle" className="text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">ФАКТ</h3>
                  </div>
                  <p className="text-green-700">
                    Мясо содержит полноценный белок и витамин B12, которые 
                    сложно получить из растительных источников.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Icon name="X" className="text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-800">МИФ</h3>
                  </div>
                  <p className="text-red-700">
                    "Жирное мясо всегда приводит к набору веса"
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Icon name="CheckCircle" className="text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">ФАКТ</h3>
                  </div>
                  <p className="text-green-700">
                    При сбалансированном питании и активном образе жизни 
                    жиры необходимы для нормального функционирования организма.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Advice */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Советы диетолога</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Доктор Елена Морозова</h3>
                  <p className="text-primary font-medium mb-4">Врач-диетолог, кандидат медицинских наук</p>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "Качественное мясо — важная часть сбалансированного рациона. Оно обеспечивает 
                    организм полноценным белком, железом и витаминами группы B. Главное — выбирать 
                    качественные продукты и соблюдать меру. Рекомендую чередовать разные виды мяса 
                    и сочетать их с овощами и зеленью."
                  </blockquote>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация по питанию?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши эксперты помогут составить индивидуальный план питания с учетом ваших целей
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Записаться на консультацию
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;