import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

const CookingTips = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/recipes" className="hover:text-orange-200 transition-colors">Рецепты</Link>
              <Link to="/cooking-tips" className="hover:text-orange-200 transition-colors">Советы</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Советы по приготовлению</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные секреты и техники приготовления мяса от опытных поваров. 
            Научитесь готовить как настоящий шеф!
          </p>
        </div>
      </section>

      {/* Tips Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="preparation" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="preparation">Подготовка</TabsTrigger>
              <TabsTrigger value="cooking">Приготовление</TabsTrigger>
              <TabsTrigger value="storage">Хранение</TabsTrigger>
              <TabsTrigger value="serving">Подача</TabsTrigger>
            </TabsList>

            <TabsContent value="preparation" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Knife" className="text-primary mr-2" />
                      Правильная разделка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Используйте острый нож для чистых разрезов
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Режьте против волокон для нежности
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Удаляйте лишний жир, оставляя тонкий слой
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Делайте надрезы на толстых кусках
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Clock" className="text-primary mr-2" />
                      Подготовка к готовке
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Достаньте мясо за 30-60 минут до готовки
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Промокните поверхность бумажными полотенцами
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Приправляйте солью за 40 минут до готовки
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Разогрейте сковороду или гриль заранее
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Droplets" className="text-primary mr-2" />
                      Маринование
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Кислота размягчает волокна (лимон, уксус)
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Масло помогает специям проникнуть глубже
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Не мариновайте слишком долго тонкие куски
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Используйте неметаллическую посуду
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Zap" className="text-primary mr-2" />
                      Размораживание
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Размораживайте в холодильнике медленно
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Используйте холодную воду для быстрой разморозки
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Никогда не размораживайте при комнатной температуре
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Готовьте сразу после разморозки
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cooking" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Flame" className="text-primary mr-2" />
                      Контроль температуры
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Говядина (стейки):</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>Rare: 49-52°C</li>
                          <li>Medium-rare: 54-57°C</li>
                          <li>Medium: 60-63°C</li>
                          <li>Well-done: 71°C+</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Другие виды мяса:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>Свинина: 63°C</li>
                          <li>Курица: 74°C</li>
                          <li>Баранина: 60-65°C</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Timer" className="text-primary mr-2" />
                      Время отдыха
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Стейки: 5-10 минут под фольгой
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Жаркое: 15-20 минут
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Курица целиком: 10-15 минут
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Отдых перераспределяет соки
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Zap" className="text-primary mr-2" />
                      Методы приготовления
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Обжаривание:</h4>
                        <p className="text-sm text-gray-700">Высокая температура для корочки, затем средняя для прожарки</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Тушение:</h4>
                        <p className="text-sm text-gray-700">Медленное приготовление в жидкости для жестких кусков</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Запекание:</h4>
                        <p className="text-sm text-gray-700">Равномерный нагрев в духовке для больших кусков</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Eye" className="text-primary mr-2" />
                      Признаки готовности
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Используйте термометр для точности
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Проверяйте упругость пальцем
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Обращайте внимание на цвет соков
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Мясо должно легко отделяться от кости
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="storage" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Refrigerator" className="text-primary mr-2" />
                      Хранение в холодильнике
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Температура: 0-4°C
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Говядина: 3-5 дней
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Свинина: 3-5 дней
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Курица: 1-2 дня
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Фарш: 1-2 дня
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Snowflake" className="text-primary mr-2" />
                      Заморозка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Температура: -18°C и ниже
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Стейки: 6-12 месяцев
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Жаркое: 4-12 месяцев
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Курица: 9 месяцев
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Фарш: 3-4 месяца
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Package" className="text-primary mr-2" />
                      Упаковка
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Используйте вакуумную упаковку
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Плотно заворачивайте в пленку
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Подписывайте дату упаковки
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Избегайте контакта с воздухом
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="AlertTriangle" className="text-primary mr-2" />
                      Безопасность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Не оставляйте при комнатной температуре
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Проверяйте запах и цвет
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Соблюдайте принцип "первым пришел - первым ушел"
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Мойте руки после контакта с сырым мясом
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="serving" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Utensils" className="text-primary mr-2" />
                      Нарезка и подача
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Нарезайте против волокон
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Используйте острый нож
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Подавайте на теплых тарелках
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Толщина ломтиков: 0.5-1 см
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Wine" className="text-primary mr-2" />
                      Сочетания
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Говядина:</h4>
                        <p className="text-sm text-gray-700">Красное вино, картофель, грибы</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Свинина:</h4>
                        <p className="text-sm text-gray-700">Белое вино, яблоки, капуста</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Курица:</h4>
                        <p className="text-sm text-gray-700">Белое вино, рис, овощи</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Баранина:</h4>
                        <p className="text-sm text-gray-700">Красное вино, розмарин, чеснок</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Leaf" className="text-primary mr-2" />
                      Гарниры
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Овощи на гриле
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Картофельное пюре
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Рис или крупы
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        Свежие салаты
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Droplets" className="text-primary mr-2" />
                      Соусы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Для стейков:</h4>
                        <p className="text-sm text-gray-700">Перечный, грибной, сливочный</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Для курицы:</h4>
                        <p className="text-sm text-gray-700">Сливочно-чесночный, терияки</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Для свинины:</h4>
                        <p className="text-sm text-gray-700">Яблочный, горчичный</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default CookingTips;