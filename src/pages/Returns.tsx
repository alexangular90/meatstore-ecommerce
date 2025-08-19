import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Returns = () => {
  const returnReasons = [
    {
      reason: "Товар ненадлежащего качества",
      description: "Продукт не соответствует заявленным характеристикам",
      timeLimit: "24 часа",
      refundType: "Полный возврат или замена",
      icon: "AlertTriangle"
    },
    {
      reason: "Нарушение упаковки",
      description: "Повреждение упаковки при транспортировке",
      timeLimit: "При получении",
      refundType: "Замена товара",
      icon: "Package"
    },
    {
      reason: "Неправильный товар",
      description: "Доставлен не тот товар, который был заказан",
      timeLimit: "24 часа",
      refundType: "Замена или возврат",
      icon: "RefreshCw"
    },
    {
      reason: "Истекший срок годности",
      description: "Товар с истекшим или близким к истечению сроком",
      timeLimit: "При получении",
      refundType: "Полный возврат",
      icon: "Clock"
    }
  ];

  const returnProcess = [
    {
      step: 1,
      title: "Обращение",
      description: "Свяжитесь с нами по телефону или email",
      timeframe: "В течение 24 часов",
      icon: "Phone"
    },
    {
      step: 2,
      title: "Фиксация проблемы",
      description: "Опишите проблему и приложите фото товара",
      timeframe: "5-10 минут",
      icon: "Camera"
    },
    {
      step: 3,
      title: "Решение вопроса",
      description: "Мы предложим замену или возврат средств",
      timeframe: "В течение часа",
      icon: "CheckCircle"
    },
    {
      step: 4,
      title: "Исполнение",
      description: "Забираем товар и возвращаем деньги или привозим замену",
      timeframe: "В тот же день",
      icon: "Truck"
    }
  ];

  const qualityIssues = [
    {
      issue: "Неприятный запах",
      action: "Немедленный возврат",
      compensation: "Полная компенсация + бонус"
    },
    {
      issue: "Изменение цвета",
      action: "Возврат или замена",
      compensation: "Полная компенсация"
    },
    {
      issue: "Неправильная консистенция",
      action: "Замена товара",
      compensation: "Замена + скидка на следующий заказ"
    },
    {
      issue: "Посторонние включения",
      action: "Немедленный возврат",
      compensation: "Полная компенсация + расследование"
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
              <Link to="/returns" className="hover:text-orange-200 transition-colors">Возврат</Link>
              <Link to="/faq" className="hover:text-orange-200 transition-colors">FAQ</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Возврат и обмен товаров</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы гарантируем качество всех наших продуктов. Если товар не соответствует 
            вашим ожиданиям, мы решим проблему быстро и справедливо.
          </p>
        </div>
      </section>

      {/* Return Reasons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Основания для возврата</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {returnReasons.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                    <CardTitle className="text-xl">{item.reason}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Срок обращения:</p>
                      <Badge className="bg-blue-100 text-blue-800">{item.timeLimit}</Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Компенсация:</p>
                      <Badge className="bg-green-100 text-green-800">{item.refundType}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Процесс возврата</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {returnProcess.map((step) => (
                <Card key={step.step} className="text-center p-6">
                  <CardContent>
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <Icon name={step.icon as any} size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <Badge variant="outline">{step.timeframe}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Issues */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Проблемы с качеством</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-6">Как мы решаем проблемы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {qualityIssues.map((issue, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{issue.issue}</h4>
                      </div>
                      <div className="flex-1 text-center">
                        <Badge className="bg-orange-100 text-orange-800">{issue.action}</Badge>
                      </div>
                      <div className="flex-1 text-right">
                        <Badge className="bg-green-100 text-green-800">{issue.compensation}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Return Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Оформить возврат</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Что нужно для возврата</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Номер заказа</h4>
                      <p className="text-gray-600">Указан в чеке или email-подтверждении</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Фото товара</h4>
                      <p className="text-gray-600">Для фиксации проблемы с качеством</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Описание проблемы</h4>
                      <p className="text-gray-600">Подробно опишите, что не устраивает</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Контактные данные</h4>
                      <p className="text-gray-600">Для связи и уточнения деталей</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Заявка на возврат</CardTitle>
                  <p className="text-gray-600">
                    Заполните форму, и мы свяжемся с вами в течение часа
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Номер заказа</label>
                      <Input placeholder="Например: MD-2024-001234" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя</label>
                        <Input placeholder="Иван Иванов" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Товар для возврата</label>
                      <Input placeholder="Название товара" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Причина возврата</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Выберите причину</option>
                        <option>Товар ненадлежащего качества</option>
                        <option>Нарушение упаковки</option>
                        <option>Неправильный товар</option>
                        <option>Истекший срок годности</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Подробное описание проблемы</label>
                      <Textarea 
                        placeholder="Опишите проблему максимально подробно..."
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Фото товара (если применимо)</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Icon name="Upload" size={32} className="text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Перетащите файлы сюда или нажмите для выбора</p>
                        <p className="text-xs text-gray-500 mt-2">Максимум 5 файлов, до 10 МБ каждый</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Желаемое решение</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option>Выберите вариант</option>
                        <option>Возврат денежных средств</option>
                        <option>Замена на аналогичный товар</option>
                        <option>Замена на другой товар</option>
                        <option>Частичная компенсация</option>
                      </select>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Отправить заявку на возврат
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши гарантии</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Быстрое решение</h3>
                <p className="text-gray-600">
                  Рассматриваем обращения в течение часа, решаем проблемы в день обращения
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="DollarSign" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Полная компенсация</h3>
                <p className="text-gray-600">
                  При подтверждении проблемы возвращаем 100% стоимости товара
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Забота о клиентах</h3>
                <p className="text-gray-600">
                  Ваше удовлетворение — наш приоритет. Идем навстречу в спорных ситуациях
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Статистика возвратов</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">0.5%</div>
              <div className="text-gray-600">Доля возвратов</div>
              <div className="text-sm text-gray-500">от общего объема</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1 час</div>
              <div className="text-gray-600">Среднее время</div>
              <div className="text-sm text-gray-500">рассмотрения заявки</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Решенных проблем</div>
              <div className="text-sm text-gray-500">в пользу клиента</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-gray-600">Оценка сервиса</div>
              <div className="text-sm text-gray-500">по 5-балльной шкале</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как избежать проблем</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Eye" className="text-primary mr-2" />
                  При получении товара
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Проверьте целостность упаковки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Убедитесь в соответствии заказу</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Проверьте сроки годности</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Оцените внешний вид и запах</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Refrigerator" className="text-primary mr-2" />
                  Правильное хранение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Соблюдайте температурный режим</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Используйте герметичную упаковку</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Не нарушайте сроки хранения</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Избегайте повторной заморозки</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Returns */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужно вернуть товар?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами любым удобным способом — мы решим проблему максимально быстро
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Горячая линия</h3>
              <p>+7 (495) 123-45-67</p>
              <p className="text-sm opacity-75">Круглосуточно</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>returns@mestodari.ru</p>
              <p className="text-sm opacity-75">Ответим в течение часа</p>
            </div>
            <div>
              <Icon name="MessageCircle" size={32} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Чат</h3>
              <p>WhatsApp, Telegram</p>
              <p className="text-sm opacity-75">Мгновенные ответы</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Связаться с поддержкой
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Returns;