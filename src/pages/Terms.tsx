import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Terms = () => {
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
          <h1 className="text-5xl font-bold mb-6">Пользовательское соглашение</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Условия использования сайта и услуг компании МЕСТО ДРАРИ. 
            Пожалуйста, внимательно ознакомьтесь с данным документом.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="FileText" className="text-primary mr-3" />
                  1. Общие положения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  1.1. Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует 
                  отношения между ООО «МЕСТО ДРАРИ» (далее — «Компания») и пользователями 
                  интернет-сайта mestodari.ru (далее — «Сайт»).
                </p>
                <p>
                  1.2. Использование Сайта означает безоговорочное согласие пользователя 
                  с настоящим Соглашением и указанными в нем условиями.
                </p>
                <p>
                  1.3. Компания вправе вносить изменения в настоящее Соглашение без 
                  предварительного уведомления пользователей.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="ShoppingCart" className="text-primary mr-3" />
                  2. Заказ товаров
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  2.1. Заказ товаров осуществляется через Сайт или по телефону. 
                  Все представленные на Сайте товары имеются в наличии, если не указано иное.
                </p>
                <p>
                  2.2. Цены на товары указаны в российских рублях и включают НДС. 
                  Компания оставляет за собой право изменять цены без предварительного уведомления.
                </p>
                <p>
                  2.3. Заказ считается принятым после подтверждения менеджером Компании 
                  и внесения предоплаты (если требуется).
                </p>
                <p>
                  2.4. В случае отсутствия заказанного товара Компания обязуется 
                  уведомить покупателя в течение 24 часов и предложить замену или возврат средств.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Truck" className="text-primary mr-3" />
                  3. Доставка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  3.1. Доставка осуществляется по Москве и Московской области в сроки, 
                  согласованные с покупателем.
                </p>
                <p>
                  3.2. Стоимость доставки рассчитывается индивидуально в зависимости 
                  от адреса и веса заказа.
                </p>
                <p>
                  3.3. Риск случайной гибели или повреждения товара переходит к покупателю 
                  с момента передачи товара.
                </p>
                <p>
                  3.4. При получении товара покупатель обязан проверить его качество 
                  и соответствие заказу в присутствии курьера.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="CreditCard" className="text-primary mr-3" />
                  4. Оплата
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  4.1. Оплата товаров производится наличными при получении, 
                  банковской картой или безналичным переводом.
                </p>
                <p>
                  4.2. При оплате банковской картой используется защищенное соединение. 
                  Компания не хранит данные банковских карт покупателей.
                </p>
                <p>
                  4.3. Для юридических лиц возможна оплата по безналичному расчету 
                  с отсрочкой платежа согласно договору.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="RotateCcw" className="text-primary mr-3" />
                  5. Возврат и обмен
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  5.1. Возврат товара надлежащего качества не производится в соответствии 
                  с Постановлением Правительства РФ №55 от 19.01.1998.
                </p>
                <p>
                  5.2. В случае обнаружения недостатков товара покупатель вправе потребовать 
                  замены или возврата денежных средств в течение 24 часов с момента получения.
                </p>
                <p>
                  5.3. Возврат денежных средств производится тем же способом, 
                  которым была произведена оплата.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Shield" className="text-primary mr-3" />
                  6. Ответственность
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  6.1. Компания не несет ответственности за ущерб, причиненный 
                  неправильным использованием или хранением товара.
                </p>
                <p>
                  6.2. Ответственность Компании ограничивается стоимостью товара, 
                  в отношении которого возникли претензии.
                </p>
                <p>
                  6.3. Компания не несет ответственности за временную недоступность 
                  Сайта по техническим причинам.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Lock" className="text-primary mr-3" />
                  7. Конфиденциальность
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  7.1. Компания обязуется не разглашать персональные данные покупателей 
                  третьим лицам без их согласия.
                </p>
                <p>
                  7.2. Персональные данные используются исключительно для выполнения 
                  заказов и улучшения качества обслуживания.
                </p>
                <p>
                  7.3. Подробная информация об обработке персональных данных содержится 
                  в Политике конфиденциальности.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Scale" className="text-primary mr-3" />
                  8. Разрешение споров
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  8.1. Все споры и разногласия решаются путем переговоров. 
                  При невозможности достижения соглашения спор передается в суд.
                </p>
                <p>
                  8.2. К отношениям между Компанией и покупателями применяется 
                  законодательство Российской Федерации.
                </p>
                <p>
                  8.3. Все споры подлежат рассмотрению в судах г. Москвы.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Phone" className="text-primary mr-3" />
                  9. Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">ООО «МЕСТО ДРАРИ»</h4>
                    <p>ИНН: 7701234567</p>
                    <p>ОГРН: 1027700123456</p>
                    <p>Адрес: 123456, г. Москва, ул. Примерная, д. 123</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Контакты:</h4>
                    <p>Телефон: +7 (495) 123-45-67</p>
                    <p>Email: info@mestodari.ru</p>
                    <p>Сайт: mestodari.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-gray-600">
              <p>Дата последнего обновления: 15 января 2024 года</p>
              <p className="mt-2">
                Актуальная версия Соглашения всегда доступна по адресу: 
                <Link to="/terms" className="text-primary hover:underline ml-1">
                  mestodari.ru/terms
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Связанные документы</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <Icon name="Lock" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Политика конфиденциальности</h3>
                <p className="text-gray-600">Как мы обрабатываем ваши данные</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <Icon name="RotateCcw" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Условия возврата</h3>
                <p className="text-gray-600">Правила возврата и обмена товаров</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent>
                <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Условия доставки</h3>
                <p className="text-gray-600">Правила и тарифы доставки</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Вопросы по соглашению?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нашей юридической службой для получения разъяснений
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="mailto:legal@mestodari.ru"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              legal@mestodari.ru
            </a>
            <a 
              href="tel:+74951234567"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;