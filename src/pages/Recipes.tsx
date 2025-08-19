import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Стейк Рибай на гриле",
      description: "Классический рецепт приготовления сочного стейка рибай",
      difficulty: "Средний",
      time: "30 минут",
      servings: "2 порции",
      category: "Говядина",
      image: "/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg",
      ingredients: ["Стейк рибай 400г", "Соль морская", "Перец черный", "Масло оливковое", "Розмарин"],
      steps: [
        "Достать мясо из холодильника за 30 минут до готовки",
        "Разогреть гриль до высокой температуры",
        "Приправить стейк солью и перцем",
        "Жарить по 3-4 минуты с каждой стороны",
        "Дать отдохнуть 5 минут перед подачей"
      ]
    },
    {
      id: 2,
      title: "Свиная вырезка в духовке",
      description: "Нежная свиная вырезка с травами и овощами",
      difficulty: "Легкий",
      time: "45 минут",
      servings: "4 порции",
      category: "Свинина",
      image: "/img/fe083e35-117b-45f0-a257-972c6d1873ec.jpg",
      ingredients: ["Свиная вырезка 600г", "Картофель 4 шт", "Морковь 2 шт", "Тимьян", "Чеснок 3 зубчика"],
      steps: [
        "Разогреть духовку до 200°C",
        "Нарезать овощи крупными кусками",
        "Натереть мясо специями и чесноком",
        "Запекать 35-40 минут",
        "Проверить готовность термометром"
      ]
    },
    {
      id: 3,
      title: "Куриная грудка в сливочном соусе",
      description: "Диетическое блюдо с нежным сливочным соусом",
      difficulty: "Легкий",
      time: "25 минут",
      servings: "3 порции",
      category: "Курица",
      image: "/img/7e26611b-2cdb-4ce8-9aff-03877ba171dc.jpg",
      ingredients: ["Куриная грудка 500г", "Сливки 200мл", "Грибы 200г", "Лук 1 шт", "Зелень"],
      steps: [
        "Нарезать грудку небольшими кусочками",
        "Обжарить на сковороде до золотистого цвета",
        "Добавить лук и грибы",
        "Влить сливки и тушить 10 минут",
        "Посыпать зеленью перед подачей"
      ]
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
              <Link to="/recipes" className="hover:text-orange-200 transition-colors">Рецепты</Link>
              <Link to="/cooking-tips" className="hover:text-orange-200 transition-colors">Советы</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Рецепты от шеф-повара</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Лучшие рецепты приготовления мясных блюд от профессиональных поваров. 
            Превратите качественные продукты в кулинарные шедевры!
          </p>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Категории рецептов</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <div className="text-4xl mb-4">🥩</div>
                <h3 className="text-xl font-semibold mb-2">Говядина</h3>
                <p className="text-gray-600">15 рецептов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <div className="text-4xl mb-4">🐷</div>
                <h3 className="text-xl font-semibold mb-2">Свинина</h3>
                <p className="text-gray-600">12 рецептов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <div className="text-4xl mb-4">🐔</div>
                <h3 className="text-xl font-semibold mb-2">Курица</h3>
                <p className="text-gray-600">18 рецептов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <div className="text-4xl mb-4">🌭</div>
                <h3 className="text-xl font-semibold mb-2">Колбасы</h3>
                <p className="text-gray-600">8 рецептов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Популярные рецепты</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{recipe.title}</CardTitle>
                    <Badge variant="outline">{recipe.category}</Badge>
                  </div>
                  <p className="text-gray-600">{recipe.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Users" size={16} className="mr-1" />
                      {recipe.servings}
                    </div>
                    <div className="flex items-center">
                      <Icon name="BarChart" size={16} className="mr-1" />
                      {recipe.difficulty}
                    </div>
                  </div>
                  <Button className="w-full">
                    Смотреть рецепт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Detail Modal would go here */}
      
      {/* Cooking Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Полезные советы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Thermometer" className="text-primary mr-2" />
                  Температура приготовления
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Говядина (medium-rare):</span>
                    <span className="font-semibold">54-57°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Свинина:</span>
                    <span className="font-semibold">63°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Курица:</span>
                    <span className="font-semibold">74°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Баранина:</span>
                    <span className="font-semibold">60-65°C</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Timer" className="text-primary mr-2" />
                  Время маринования
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Стейки:</span>
                    <span className="font-semibold">2-4 часа</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Курица:</span>
                    <span className="font-semibold">4-8 часов</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Свинина:</span>
                    <span className="font-semibold">6-12 часов</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Баранина:</span>
                    <span className="font-semibold">8-24 часа</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Получайте новые рецепты</h2>
          <p className="text-xl mb-8 opacity-90">
            Подпишитесь на нашу рассылку и получайте лучшие рецепты каждую неделю
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-primary hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;