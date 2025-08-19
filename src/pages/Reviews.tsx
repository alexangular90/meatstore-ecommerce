import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      rating: 5,
      date: "2024-01-15",
      product: "Мраморная говядина",
      text: "Потрясающее качество! Стейк получился невероятно нежным и сочным. Доставили точно в срок, упаковка отличная. Обязательно буду заказывать еще!",
      verified: true
    },
    {
      id: 2,
      name: "Михаил Сидоров",
      rating: 5,
      date: "2024-01-12",
      product: "Свиная вырезка",
      text: "Заказываю уже не первый раз. Мясо всегда свежее, качественное. Особенно нравится, что можно попросить нарезать нужными кусками. Рекомендую!",
      verified: true
    },
    {
      id: 3,
      name: "Елена Морозова",
      rating: 4,
      date: "2024-01-10",
      product: "Куриная грудка",
      text: "Хорошее диетическое мясо, без лишнего жира. Единственное - доставка немного задержалась, но предупредили заранее. В целом довольна покупкой.",
      verified: true
    },
    {
      id: 4,
      name: "Дмитрий Козлов",
      rating: 5,
      date: "2024-01-08",
      product: "Колбасы ассорти",
      text: "Домашние колбасы просто восхитительны! Чувствуется, что сделаны с душой. Гости были в восторге. Цена соответствует качеству.",
      verified: true
    },
    {
      id: 5,
      name: "Ольга Иванова",
      rating: 5,
      date: "2024-01-05",
      product: "Ребра ягненка",
      text: "Заказывала для особого ужина. Мясо нежнейшее, готовилось быстро. Упаковка профессиональная, все продумано до мелочей. Спасибо за качество!",
      verified: true
    },
    {
      id: 6,
      name: "Александр Волков",
      rating: 4,
      date: "2024-01-03",
      product: "Говяжий фарш",
      text: "Фарш отличного качества, без посторонних примесей. Котлеты получились сочными. Немного смутила цена, но качество того стоит.",
      verified: false
    },
    {
      id: 7,
      name: "Мария Николаева",
      rating: 5,
      date: "2024-01-01",
      product: "Стейк рибай",
      text: "Новогодний ужин удался благодаря вашим стейкам! Мраморность идеальная, прожарка получилась именно такой, как хотелось. Будем постоянными клиентами!",
      verified: true
    },
    {
      id: 8,
      name: "Игорь Смирнов",
      rating: 5,
      date: "2023-12-28",
      product: "Индейка целая",
      text: "Заказывал на корпоратив. Птица крупная, мясо нежное. Коллеги остались довольны. Доставка была оперативной, все в лучшем виде.",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/reviews" className="hover:text-orange-200 transition-colors">Отзывы</Link>
              <Link to="/contacts" className="hover:text-orange-200 transition-colors">Контакты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Отзывы клиентов</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мнения наших покупателей о качестве продукции и сервисе. 
            Мы ценим каждый отзыв и стремимся становиться лучше!
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mb-2">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <p className="text-gray-600">Средняя оценка</p>
                  <p className="text-sm text-gray-500">{reviews.length} отзывов</p>
                </div>
                
                <div className="space-y-3">
                  {ratingDistribution.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center space-x-3">
                      <span className="text-sm w-8">{rating}</span>
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Все отзывы</h2>
              <Button 
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-primary hover:bg-primary/90"
              >
                Оставить отзыв
              </Button>
            </div>

            {/* Review Form */}
            {showReviewForm && (
              <Card className="p-6 mb-8">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Напишите отзыв</h3>
                  <p className="text-gray-600">Поделитесь своим мнением о наших продуктах</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя</label>
                        <Input placeholder="Введите ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Продукт</label>
                        <Input placeholder="Какой продукт оцениваете?" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Оценка</label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="text-gray-300 hover:text-yellow-400 transition-colors"
                          >
                            <Icon name="Star" size={24} />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Отзыв</label>
                      <Textarea 
                        placeholder="Расскажите о своем опыте покупки..."
                        rows={4}
                      />
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button type="submit" className="bg-primary hover:bg-primary/90">
                        Отправить отзыв
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setShowReviewForm(false)}
                      >
                        Отмена
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Reviews */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="User" size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{review.name}</h3>
                          {review.verified && (
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              <Icon name="CheckCircle" size={12} className="mr-1" />
                              Проверено
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">{review.product}</Badge>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  
                  <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors">
                      <Icon name="ThumbsUp" size={16} />
                      <span className="text-sm">Полезно</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary transition-colors">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">Ответить</span>
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Показать еще отзывы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Нам доверяют</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8</div>
              <div className="text-gray-600">Средняя оценка</div>
              <div className="text-sm text-gray-500">на Яндекс.Картах</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Отзывов</div>
              <div className="text-sm text-gray-500">от реальных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Положительных</div>
              <div className="text-sm text-gray-500">оценок качества</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-gray-600">Лет</div>
              <div className="text-sm text-gray-500">безупречной работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Убедитесь в качестве сами!</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к сотням довольных клиентов. Сделайте первый заказ уже сегодня!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Перейти в каталог
              </Button>
            </Link>
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

export default Reviews;