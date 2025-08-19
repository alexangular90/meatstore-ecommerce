import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/terms" className="hover:text-orange-200 transition-colors">Условия</Link>
              <Link to="/privacy" className="hover:text-orange-200 transition-colors">Конфиденциальность</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Политика конфиденциальности</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы серьезно относимся к защите ваших персональных данных. 
            Узнайте, как мы собираем, используем и защищаем вашу информацию.
          </p>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Shield" className="text-primary mr-3" />
                  Краткий обзор
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Icon name="Lock" size={48} className="text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Безопасность</h3>
                    <p className="text-gray-600">Ваши данные защищены современными технологиями шифрования</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Eye" size={48} className="text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Прозрачность</h3>
                    <p className="text-gray-600">Мы четко объясняем, какие данные собираем и зачем</p>
                  </div>
                  <div className="text-center">
                    <Icon name="UserCheck" size={48} className="text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Контроль</h3>
                    <p className="text-gray-600">Вы можете управлять своими данными и настройками</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Database" className="text-primary mr-3" />
                    1. Какие данные мы собираем
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Личная информация:</h4>
                    <ul className="space-y-1 ml-4">
                      <li>• Имя, фамилия, отчество</li>
                      <li>• Номер телефона</li>
                      <li>• Адрес электронной почты</li>
                      <li>• Адрес доставки</li>
                      <li>• Дата рождения (для программы лояльности)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Данные о заказах:</h4>
                    <ul className="space-y-1 ml-4">
                      <li>• История покупок</li>
                      <li>• Предпочтения в продукции</li>
                      <li>• Способы оплаты</li>
                      <li>• Отзывы и оценки</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Технические данные:</h4>
                    <ul className="space-y-1 ml-4">
                      <li>• IP-адрес</li>
                      <li>• Данные браузера</li>
                      <li>• Файлы cookie</li>
                      <li>• Статистика посещений</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Target" className="text-primary mr-3" />
                    2. Цели обработки данных
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Основные цели:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                          Выполнение заказов и доставка товаров
                        </li>
                        <li className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                          Обработка платежей
                        </li>
                        <li className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                          Клиентская поддержка
                        </li>
                        <li className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                          Программа лояльности
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Дополнительные цели:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                          Персонализация предложений
                        </li>
                        <li className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                          Улучшение сервиса
                        </li>
                        <li className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                          Маркетинговые исследования
                        </li>
                        <li className="flex items-start">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                          Информирование о новинках
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Share2" className="text-primary mr-3" />
                    3. Передача данных третьим лицам
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Мы не продаем и не передаем ваши персональные данные третьим лицам, 
                    за исключением следующих случаев:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Службы доставки (только адрес и контакты для доставки)</li>
                    <li>• Платежные системы (для обработки платежей)</li>
                    <li>• Государственные органы (по официальным запросам)</li>
                    <li>• Аудиторы и консультанты (с подписанием соглашений о конфиденциальности)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Cookie" className="text-primary mr-3" />
                    4. Использование cookies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Мы используем файлы cookie для улучшения работы сайта и персонализации контента:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Необходимые cookie:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Корзина покупок</li>
                        <li>• Авторизация</li>
                        <li>• Настройки сайта</li>
                        <li>• Безопасность</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Аналитические cookie:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Статистика посещений</li>
                        <li>• Анализ поведения</li>
                        <li>• Улучшение сайта</li>
                        <li>• A/B тестирование</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm bg-blue-50 text-blue-800 p-4 rounded-lg">
                    Вы можете отключить cookie в настройках браузера, но это может повлиять на функциональность сайта.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Settings" className="text-primary mr-3" />
                    5. Ваши права
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>В соответствии с законодательством РФ вы имеете следующие права:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Icon name="Eye" className="text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Право на доступ</h4>
                          <p className="text-sm text-gray-600">Получить информацию о ваших данных</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Edit" className="text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Право на исправление</h4>
                          <p className="text-sm text-gray-600">Исправить неточные данные</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Trash2" className="text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Право на удаление</h4>
                          <p className="text-sm text-gray-600">Удалить ваши персональные данные</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Icon name="Download" className="text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Право на портативность</h4>
                          <p className="text-sm text-gray-600">Получить данные в удобном формате</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="StopCircle" className="text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Право на ограничение</h4>
                          <p className="text-sm text-gray-600">Ограничить обработку данных</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="X" className="text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Право на возражение</h4>
                          <p className="text-sm text-gray-600">Возразить против обработки</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Shield" className="text-primary mr-3" />
                    6. Безопасность данных
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Мы применяем современные технологии для защиты ваших данных:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Технические меры:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                          SSL-шифрование
                        </li>
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                          Защищенные серверы
                        </li>
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                          Регулярные обновления безопасности
                        </li>
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                          Мониторинг доступа
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Организационные меры:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                          Обучение персонала
                        </li>
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                          Ограниченный доступ
                        </li>
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                          Соглашения о конфиденциальности
                        </li>
                        <li className="flex items-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                          Аудит безопасности
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Clock" className="text-primary mr-3" />
                    7. Сроки хранения данных
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Активные клиенты:</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Контактные данные:</span>
                          <Badge variant="outline">До отзыва согласия</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>История заказов:</span>
                          <Badge variant="outline">5 лет</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Финансовые данные:</span>
                          <Badge variant="outline">5 лет</Badge>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Неактивные клиенты:</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Контактные данные:</span>
                          <Badge variant="outline">3 года</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Маркетинговые данные:</span>
                          <Badge variant="outline">1 год</Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Аналитические данные:</span>
                          <Badge variant="outline">2 года</Badge>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Mail" className="text-primary mr-3" />
                    8. Маркетинговые коммуникации
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    Мы можем отправлять вам маркетинговые сообщения только с вашего согласия:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Типы сообщений:</h4>
                      <ul className="space-y-1">
                        <li>• Новинки и акции</li>
                        <li>• Персональные предложения</li>
                        <li>• Информация о заказах</li>
                        <li>• Программа лояльности</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Управление подписками:</h4>
                      <ul className="space-y-1">
                        <li>• Отписка в один клик</li>
                        <li>• Настройка частоты</li>
                        <li>• Выбор тем</li>
                        <li>• Полное отключение</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Icon name="Phone" className="text-primary mr-3" />
                    9. Контакты по вопросам конфиденциальности
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>
                    По всем вопросам, связанным с обработкой персональных данных, 
                    обращайтесь к нашему специалисту по защите данных:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Контактная информация:</h4>
                      <p>Email: privacy@mestodari.ru</p>
                      <p>Телефон: +7 (495) 123-45-67 доб. 105</p>
                      <p>Почтовый адрес: 123456, г. Москва, ул. Примерная, д. 123</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Время ответа:</h4>
                      <p>Email: в течение 24 часов</p>
                      <p>Телефон: в рабочее время</p>
                      <p>Почта: в течение 30 дней</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center text-gray-600 mt-8">
              <p>Дата последнего обновления: 15 января 2024 года</p>
              <p className="mt-2">
                Актуальная версия Политики всегда доступна по адресу: 
                <Link to="/privacy" className="text-primary hover:underline ml-1">
                  mestodari.ru/privacy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Защита ваших данных — наш приоритет</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Icon name="Lock" size={48} className="text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">256-bit SSL</h3>
              <p className="text-gray-600">Шифрование данных</p>
            </div>
            <div>
              <Icon name="Shield" size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ISO 27001</h3>
              <p className="text-gray-600">Стандарт безопасности</p>
            </div>
            <div>
              <Icon name="Eye" size={48} className="text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Аудит</h3>
              <p className="text-gray-600">Регулярные проверки</p>
            </div>
            <div>
              <Icon name="Users" size={48} className="text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Обучение</h3>
              <p className="text-gray-600">Подготовка персонала</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Вопросы о конфиденциальности?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наш специалист по защите данных готов ответить на все ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="mailto:privacy@mestodari.ru"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              privacy@mestodari.ru
            </a>
            <a 
              href="tel:+74951234567"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              +7 (495) 123-45-67 доб. 105
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;