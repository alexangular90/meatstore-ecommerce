import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Как выбрать идеальный стейк: гид по отрубам говядины",
      excerpt: "Разбираемся в различиях между рибаем, филе-миньоном и стриплойном. Какой стейк выбрать для разных случаев и как не ошибиться при покупке.",
      category: "Советы",
      readTime: "5 мин",
      date: "2024-01-15",
      author: "Александр Петров",
      image: "/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg"
    },
    {
      id: 2,
      title: "Секреты маринования мяса: что нужно знать каждому",
      excerpt: "Профессиональные техники маринования, которые сделают ваше мясо невероятно нежным и ароматным. Рецепты маринадов от шеф-поваров.",
      category: "Рецепты",
      readTime: "7 мин",
      date: "2024-01-12",
      author: "Мария Иванова",
      image: "/img/fe083e35-117b-45f0-a257-972c6d1873ec.jpg"
    },
    {
      id: 3,
      title: "Температурные режимы: готовим мясо правильно",
      excerpt: "Подробное руководство по температурам приготовления разных видов мяса. Как использовать термометр и определять готовность без него.",
      category: "Техники",
      readTime: "6 мин",
      date: "2024-01-10",
      author: "Дмитрий Сидоров",
      image: "/img/7e26611b-2cdb-4ce8-9aff-03877ba171dc.jpg"
    },
    {
      id: 4,
      title: "Домашние колбасы: от теории к практике",
      excerpt: "Пошаговое руководство по изготовлению домашних колбас. Выбор мяса, специй, оболочек и оборудования для начинающих колбасников.",
      category: "Мастер-класс",
      readTime: "12 мин",
      date: "2024-01-08",
      author: "Игорь Козлов",
      image: "/img/e518ae2f-d156-45ca-8c99-3b0cc17d11b6.jpg"
    },
    {
      id: 5,
      title: "Сезонность в мясном деле: что покупать когда",
      excerpt: "Календарь мясных покупок: когда лучше покупать баранину, когда - дичь, а когда стоит запастись говядиной. Сезонные особенности и цены.",
      category: "Советы",
      readTime: "4 мин",
      date: "2024-01-05",
      author: "Елена Морозова",
      image: "/img/39f5a6a9-d66f-4ddc-9dd9-9f6191b9c82f.jpg"
    },
    {
      id: 6,
      title: "Хранение мяса: правила и лайфхаки",
      excerpt: "Как правильно хранить разные виды мяса в холодильнике и морозилке. Сроки хранения, упаковка и признаки порчи продуктов.",
      category: "Полезно знать",
      readTime: "8 мин",
      date: "2024-01-03",
      author: "Александр Петров",
      image: "/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg"
    }
  ];

  const categories = ["Все", "Советы", "Рецепты", "Техники", "Мастер-класс", "Полезно знать"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/blog" className="hover:text-orange-200 transition-colors">Блог</Link>
              <Link to="/recipes" className="hover:text-orange-200 transition-colors">Рецепты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Блог о мясе</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Экспертные статьи, советы профессионалов и секреты приготовления 
            от команды МЕСТО ДРАРИ. Всё о мясе и мясных продуктах.
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

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Рекомендуем прочитать</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge>{blogPosts[0].category}</Badge>
                  <span className="text-sm text-gray-500">{blogPosts[0].readTime} чтения</span>
                  <span className="text-sm text-gray-500">{blogPosts[0].date}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-white" />
                    </div>
                    <span className="font-medium">{blogPosts[0].author}</span>
                  </div>
                  <Button>Читать далее</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Последние статьи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
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

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Подпишитесь на наш блог</h2>
              <p className="text-xl mb-8 opacity-90">
                Получайте новые статьи и эксклюзивные советы прямо на почту
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
                Никакого спама, только полезный контент
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Популярные темы</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["стейки", "маринады", "гриль", "температура", "хранение", "колбасы", "говядина", "свинина", "курица", "рецепты", "советы", "техники"].map((tag) => (
              <Badge key={tag} variant="outline" className="text-lg py-2 px-4 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;