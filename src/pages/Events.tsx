import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Мастер-класс по приготовлению стейков",
      date: "2024-02-15",
      time: "18:00",
      location: "Кулинарная студия 'Вкус'",
      price: "Бесплатно",
      description: "Научитесь готовить идеальные стейки от шеф-повара ресторана 'Мясо & Огонь'",
      instructor: "Алексей Морозов",
      duration: "2 часа",
      maxParticipants: 15,
      currentParticipants: 8,
      image: "/img/09ee0dd6-bd26-4c11-8018-cdafe2b7c12b.jpg",
      category: "Мастер-класс"
    },
    {
      id: 2,
      title: "Дегустация премиальной баранины",
      date: "2024-02-20",
      time: "19:00",
      location: "Шоу-рум МЕСТО ДРАРИ",
      price: "1500₽",
      description: "Попробуйте лучшие отруба новозеландской баранины в сопровождении сомелье",
      instructor: "Мария Петрова",
      duration: "1.5 часа",
      maxParticipants: 20,
      currentParticipants: 12,
      image: "/img/39f5a6a9-d66f-4ddc-9dd9-9f6191b9c82f.jpg",
      category: "Дегустация"
    },
    {
      id: 3,
      title: "Семинар 'Домашние колбасы'",
      date: "2024-02-25",
      time: "15:00",
      location: "Производственная площадка",
      price: "2500₽",
      description: "Полный цикл изготовления домашних колбас: от выбора мяса до готового продукта",
      instructor: "Игорь Козлов",
      duration: "4 часа",
      maxParticipants: 10,
      currentParticipants: 6,
      image: "/img/e518ae2f-d156-45ca-8c99-3b0cc17d11b6.jpg",
      category: "Семинар"
    }
  ];

  const pastEvents = [
    {
      title: "Новогодний кулинарный вечер",
      date: "2023-12-20",
      participants: 45,
      rating: 4.9,
      description: "Готовили праздничные блюда из премиального мяса"
    },
    {
      title: "Мастер-класс по разделке туши",
      date: "2023-11-15",
      participants: 25,
      rating: 4.8,
      description: "Профессиональные техники разделки от мясника"
    },
    {
      title: "Дегустация аргентинской говядины",
      date: "2023-10-10",
      participants: 30,
      rating: 5.0,
      description: "Знакомство с культурой аргентинского барбекю"
    }
  ];

  const eventTypes = [
    {
      name: "Мастер-классы",
      description: "Практические занятия по приготовлению",
      icon: "ChefHat",
      count: 12
    },
    {
      name: "Дегустации",
      description: "Знакомство с новыми продуктами",
      icon: "Wine",
      count: 8
    },
    {
      name: "Семинары",
      description: "Теоретические знания о мясе",
      icon: "BookOpen",
      count: 6
    },
    {
      name: "Экскурсии",
      description: "Посещение производства и ферм",
      icon: "MapPin",
      count: 4
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
              <Link to="/events" className="hover:text-orange-200 transition-colors">События</Link>
              <Link to="/recipes" className="hover:text-orange-200 transition-colors">Рецепты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">События и мероприятия</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Присоединяйтесь к нашим кулинарным мероприятиям! Мастер-классы, дегустации, 
            семинары и экскурсии для всех любителей качественного мяса.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Типы мероприятий</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Icon name={type.icon as any} size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <Badge>{type.count} в год</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Ближайшие события</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge>{event.category}</Badge>
                      <Badge variant="outline">{event.price}</Badge>
                      <span className="text-sm text-gray-500">
                        {event.currentParticipants}/{event.maxParticipants} участников
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{event.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Icon name="Calendar" className="text-primary" size={20} />
                          <span>{new Date(event.date).toLocaleDateString('ru-RU', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="Clock" className="text-primary" size={20} />
                          <span>{event.time} ({event.duration})</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="MapPin" className="text-primary" size={20} />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Icon name="User" className="text-primary" size={20} />
                          <span>Ведущий: {event.instructor}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="Users" className="text-primary" size={20} />
                          <span>Мест: {event.maxParticipants - event.currentParticipants}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Icon name="CreditCard" className="text-primary" size={20} />
                          <span>{event.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-primary hover:bg-primary/90" size="lg">
                      Записаться на событие
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Прошедшие мероприятия</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <p className="text-gray-600">{new Date(event.date).toLocaleDateString('ru-RU')}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-gray-500" />
                      <span className="text-sm">{event.participants} участников</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <span className="font-semibold">{event.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Календарь событий</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="text-center">
                <Icon name="Calendar" size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Интерактивный календарь</h3>
                <p className="text-gray-600 mb-6">
                  Здесь будет размещен интерактивный календарь со всеми предстоящими событиями
                </p>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                    <div key={day} className="p-2 text-center font-semibold text-gray-600">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => (
                    <div 
                      key={i} 
                      className={`p-2 text-center border rounded cursor-pointer hover:bg-primary hover:text-white transition-colors ${
                        i === 14 || i === 19 || i === 24 ? 'bg-primary text-white' : 'bg-white'
                      }`}
                    >
                      {i + 1 <= 31 ? i + 1 : ''}
                    </div>
                  ))}
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  Подписаться на уведомления
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Корпоративные мероприятия</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Организуем для вашей компании</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Тимбилдинг с кулинарией</h4>
                    <p className="text-gray-600">Совместное приготовление блюд укрепляет команду</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Корпоративные дегустации</h4>
                    <p className="text-gray-600">Эксклюзивные мероприятия для ваших клиентов</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Обучение персонала</h4>
                    <p className="text-gray-600">Семинары для сотрудников ресторанов и магазинов</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Выездные мероприятия</h4>
                    <p className="text-gray-600">Проводим события в вашем офисе или на природе</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-primary hover:bg-primary/90">
                Заказать корпоративное мероприятие
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8">
              <div className="text-center">
                <Icon name="Building" size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Для бизнеса</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Группа от 10 человек:</span>
                    <Badge>Скидка 10%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Группа от 20 человек:</span>
                    <Badge>Скидка 20%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Индивидуальная программа:</span>
                    <Badge>По запросу</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы участников</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Анна Петрова</h4>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Потрясающий мастер-класс! Научилась готовить стейки как в ресторане. 
                  Шеф-повар объяснил все секреты. Обязательно приду еще!"
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Михаил Сидоров</h4>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Дегустация баранины превзошла все ожидания. Качество мяса 
                  невероятное, а подача блюд — на уровне мишленовского ресторана."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Елена Козлова</h4>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Семинар по колбасам был очень познавательным. Теперь делаю 
                  домашние колбасы сама. Спасибо за профессиональные знания!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <div className="text-center">
              <Icon name="Bell" size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Не пропустите события!</h2>
              <p className="text-xl mb-8 opacity-90">
                Подпишитесь на уведомления о новых мероприятиях и получите скидку 10% на первое событие
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
                Уведомления только о событиях, никакого спама
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact for Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Вопросы о мероприятиях?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p>+7 (495) 123-45-67 доб. 301</p>
              <p className="text-sm text-gray-500">Отдел мероприятий</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>events@mestodari.ru</p>
              <p className="text-sm text-gray-500">Ответим в течение часа</p>
            </div>
            <div>
              <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Мессенджеры</h3>
              <p>WhatsApp, Telegram</p>
              <p className="text-sm text-gray-500">Быстрые ответы</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;