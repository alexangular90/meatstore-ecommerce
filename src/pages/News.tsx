import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const News = () => {
  const news = [
    {
      id: 1,
      title: "Новое поступление: премиальная говядина из Аргентины",
      excerpt: "В наш ассортимент поступила элитная мраморная говядина от лучших аргентинских ранчо. Ограниченная партия высочайшего качества.",
      content: "Мы рады сообщить о поступлении эксклюзивной партии аргентинской говядины класса Prime. Это мясо от бычков породы Ангус, выращенных на естественных пастбищах Пампы...",
      category: "Новинки",
      date: "2024-01-15",
      author: "Редакция",
      image: "/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Расширение зоны доставки: теперь доставляем в Подмосковье",
      excerpt: "Мы расширили географию доставки и теперь привозим свежие продукты жителям Московской области.",
      content: "С 1 января 2024 года мы начали доставку в города Московской области. Теперь жители Химок, Мытищ, Королева и других городов могут заказывать наши продукты...",
      category: "Сервис",
      date: "2024-01-10",
      author: "Служба доставки",
      image: "/img/fe083e35-117b-45f0-a257-972c6d1873ec.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Зимние скидки: до 25% на замороженные продукты",
      excerpt: "Специальное предложение на зимний период - скидки на всю линейку замороженных мясных продуктов.",
      content: "В рамках зимней акции мы предлагаем скидки до 25% на замороженные продукты. Акция действует до конца февраля на весь ассортимент замороженного мяса...",
      category: "Акции",
      date: "2024-01-08",
      author: "Отдел маркетинга",
      image: "/img/7e26611b-2cdb-4ce8-9aff-03877ba171dc.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Открытие нового производственного цеха",
      excerpt: "Мы инвестировали в расширение производства - открыт новый цех по переработке мяса с современным оборудованием.",
      content: "Компания МЕСТО ДРАРИ открыла новый производственный цех площадью 500 кв.м. Установлено современное немецкое оборудование для переработки мяса...",
      category: "Компания",
      date: "2024-01-05",
      author: "Пресс-служба",
      image: "/img/e518ae2f-d156-45ca-8c99-3b0cc17d11b6.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Новогодние наборы: готовые решения для праздничного стола",
      excerpt: "Специально к новогодним праздникам мы подготовили готовые наборы продуктов для праздничного стола.",
      content: "К новогодним праздникам мы подготовили несколько вариантов готовых наборов: 'Семейный праздник', 'Гурман', 'Мясное ассорти'. Каждый набор включает...",
      category: "Акции",
      date: "2023-12-20",
      author: "Отдел продаж",
      image: "/img/39f5a6a9-d66f-4ddc-9dd9-9f6191b9c82f.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Получили сертификат ISO 22000:2018",
      excerpt: "Наша система менеджмента безопасности пищевых продуктов успешно прошла международную сертификацию.",
      content: "Мы гордимся тем, что получили международный сертификат ISO 22000:2018. Это подтверждает высокий уровень нашей системы обеспечения безопасности...",
      category: "Качество",
      date: "2023-12-15",
      author: "Отдел качества",
      image: "/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg",
      featured: false
    }
  ];

  const categories = ["Все", "Новинки", "Акции", "Компания", "Сервис", "Качество"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/news" className="hover:text-orange-200 transition-colors">Новости</Link>
              <Link to="/blog" className="hover:text-orange-200 transition-colors">Блог</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Новости компании</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Следите за последними новостями МЕСТО ДРАРИ: новинки ассортимента, 
            акции, развитие компании и важные события
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Все" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Главная новость</h2>
          {news.filter(item => item.featured).map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge>{item.category}</Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="text-sm text-gray-500">Автор: {item.author}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{item.excerpt}</p>
                  <Button className="w-fit">Читать полностью</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Все новости</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.filter(item => !item.featured).map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge variant="outline">{item.category}</Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Автор: {item.author}</span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <div className="text-center">
              <Icon name="Bell" size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
              <p className="text-xl mb-8 opacity-90">
                Будьте в курсе всех новинок, акций и важных событий компании
              </p>
              <div className="max-w-md mx-auto flex space-x-4">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <Button className="bg-white text-primary hover:bg-gray-100 px-6">
                  Подписаться
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                Отправляем только важные новости, никакого спама
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Архив новостей</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">2024</h3>
                <p className="text-gray-600">15 новостей</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">2023</h3>
                <p className="text-gray-600">42 новости</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">2022</h3>
                <p className="text-gray-600">38 новостей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Следите за нами в соцсетях</h2>
          <p className="text-xl text-gray-600 mb-8">
            Самые свежие новости и эксклюзивные предложения в наших социальных сетях
          </p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="flex flex-col items-center p-4 hover:text-primary transition-colors">
              <Icon name="Instagram" size={48} className="mb-2" />
              <span className="font-medium">Instagram</span>
              <span className="text-sm text-gray-500">@mestodari</span>
            </a>
            <a href="#" className="flex flex-col items-center p-4 hover:text-primary transition-colors">
              <Icon name="Facebook" size={48} className="mb-2" />
              <span className="font-medium">Facebook</span>
              <span className="text-sm text-gray-500">МЕСТО ДРАРИ</span>
            </a>
            <a href="#" className="flex flex-col items-center p-4 hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={48} className="mb-2" />
              <span className="font-medium">Telegram</span>
              <span className="text-sm text-gray-500">@mestodari_news</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;