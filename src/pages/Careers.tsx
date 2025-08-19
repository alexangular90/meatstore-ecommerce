import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Careers = () => {
  const vacancies = [
    {
      id: 1,
      title: "Менеджер по продажам",
      department: "Продажи",
      type: "Полная занятость",
      location: "Москва",
      salary: "от 80 000₽",
      description: "Ищем активного менеджера для работы с корпоративными клиентами",
      requirements: [
        "Опыт продаж от 2 лет",
        "Знание рынка мясных продуктов приветствуется",
        "Коммуникабельность и целеустремленность",
        "Готовность к командировкам"
      ]
    },
    {
      id: 2,
      title: "Технолог пищевого производства",
      department: "Производство",
      type: "Полная занятость",
      location: "Москва",
      salary: "от 100 000₽",
      description: "Требуется опытный технолог для контроля качества продукции",
      requirements: [
        "Высшее образование (пищевая технология)",
        "Опыт работы технологом от 3 лет",
        "Знание ХАССП и стандартов качества",
        "Внимательность к деталям"
      ]
    },
    {
      id: 3,
      title: "Водитель-экспедитор",
      department: "Логистика",
      type: "Полная занятость",
      location: "Москва",
      salary: "от 60 000₽",
      description: "Доставка продукции клиентам на рефрижераторе",
      requirements: [
        "Права категории B, C",
        "Опыт вождения от 3 лет",
        "Знание Москвы и области",
        "Ответственность и пунктуальность"
      ]
    },
    {
      id: 4,
      title: "Кладовщик",
      department: "Склад",
      type: "Полная занятость",
      location: "Москва",
      salary: "от 50 000₽",
      description: "Работа на складе готовой продукции",
      requirements: [
        "Опыт работы на складе",
        "Знание 1С приветствуется",
        "Физическая выносливость",
        "Внимательность и аккуратность"
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
              <Link to="/about" className="hover:text-orange-200 transition-colors">О нас</Link>
              <Link to="/careers" className="hover:text-orange-200 transition-colors">Карьера</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Работа в МЕСТО ДРАРИ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Присоединяйтесь к нашей команде профессионалов! Мы предлагаем 
            интересную работу, достойную зарплату и возможности для развития.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему стоит работать у нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="TrendingUp" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Стабильный рост</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Компания успешно развивается уже 15 лет. Мы инвестируем в новые 
                  технологии и расширяем географию присутствия.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Дружная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  У нас работают профессионалы своего дела. Мы ценим каждого 
                  сотрудника и создаем комфортную рабочую атмосферу.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Развитие навыков</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Регулярные тренинги, семинары и курсы повышения квалификации. 
                  Мы помогаем сотрудникам расти профессионально.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="DollarSign" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Достойная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Конкурентная заработная плата, премии по результатам работы, 
                  13-я зарплата и другие бонусы.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Соцпакет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Медицинская страховка, оплачиваемый отпуск, больничные, 
                  корпоративные мероприятия и скидки на продукцию.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Удобное расположение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Офис и производство находятся в удобных локациях с хорошей 
                  транспортной доступностью.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Открытые вакансии</h2>
          <div className="space-y-6">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-2xl font-semibold">{vacancy.title}</h3>
                      <Badge>{vacancy.department}</Badge>
                      <Badge variant="outline">{vacancy.type}</Badge>
                    </div>
                    <div className="flex items-center space-x-6 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Icon name="MapPin" size={16} className="mr-1" />
                        {vacancy.location}
                      </div>
                      <div className="flex items-center">
                        <Icon name="DollarSign" size={16} className="mr-1" />
                        {vacancy.salary}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{vacancy.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Требования:</h4>
                      <ul className="space-y-1">
                        {vacancy.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <Button className="w-full lg:w-auto">
                      Откликнуться
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как устроиться к нам</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Отклик на вакансию</h3>
              <p className="text-gray-600">Отправьте резюме на интересующую вас позицию</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Телефонное интервью</h3>
              <p className="text-gray-600">HR-менеджер свяжется с вами для первичного собеседования</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Очное собеседование</h3>
              <p className="text-gray-600">Встреча с руководителем отдела и командой</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Оформление</h3>
              <p className="text-gray-600">Подписание договора и выход на работу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наша корпоративная культура</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Ценности компании</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Target" className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Качество превыше всего</h4>
                    <p className="text-gray-600">Мы никогда не идем на компромиссы в вопросах качества продукции</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Users" className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Командная работа</h4>
                    <p className="text-gray-600">Успех компании - это результат слаженной работы всей команды</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Lightbulb" className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Инновации</h4>
                    <p className="text-gray-600">Мы постоянно внедряем новые технологии и улучшаем процессы</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Heart" className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Забота о сотрудниках</h4>
                    <p className="text-gray-600">Каждый сотрудник важен для нас, мы создаем комфортные условия работы</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8">
              <div className="text-center">
                <Icon name="Users" size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Присоединяйтесь к нам!</h3>
                <p className="text-gray-700 mb-6">
                  Станьте частью успешной команды профессионалов. 
                  Мы всегда рады талантливым и мотивированным людям.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Отправить резюме
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли подходящую вакансию?</h2>
          <p className="text-xl mb-8 opacity-90">
            Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих позиций
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center">
              <Icon name="Mail" className="mr-2" />
              <span>hr@mestodari.ru</span>
            </div>
            <div className="flex items-center">
              <Icon name="Phone" className="mr-2" />
              <span>+7 (495) 123-45-67 доб. 105</span>
            </div>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Связаться с HR
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;