import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: "Заказы и доставка",
      questions: [
        {
          question: "Как оформить заказ?",
          answer: "Вы можете оформить заказ несколькими способами: через наш сайт, по телефону +7 (495) 123-45-67 или написав нам в WhatsApp. Просто выберите нужные товары, укажите адрес доставки и способ оплаты."
        },
        {
          question: "Какие зоны доставки вы обслуживаете?",
          answer: "Мы доставляем по всей Москве в пределах МКАД и в Московскую область. Стоимость доставки по Москве - 300₽, по области - 500₽. Бесплатная доставка при заказе от 3000₽ по Москве и от 5000₽ по области."
        },
        {
          question: "Сколько времени занимает доставка?",
          answer: "Стандартная доставка по Москве занимает 2-4 часа, по области - 4-6 часов. Также доступна экспресс-доставка в течение 30-60 минут за дополнительную плату."
        },
        {
          question: "Можно ли изменить или отменить заказ?",
          answer: "Да, вы можете изменить или отменить заказ до момента его передачи курьеру. Обычно это возможно в течение 30 минут после оформления. Свяжитесь с нами по телефону для внесения изменений."
        }
      ]
    },
    {
      category: "Оплата",
      questions: [
        {
          question: "Какие способы оплаты вы принимаете?",
          answer: "Мы принимаем наличные при получении, банковские карты (Visa, MasterCard, МИР), переводы через СБП, а также безналичный расчет для юридических лиц."
        },
        {
          question: "Можно ли оплатить заказ онлайн?",
          answer: "Да, на нашем сайте доступна онлайн-оплата банковской картой. Это безопасно - мы используем защищенное соединение и не храним данные ваших карт."
        },
        {
          question: "Предоставляете ли вы чеки и документы?",
          answer: "Конечно! При оплате наличными курьер выдаст вам кассовый чек. При безналичной оплате чек придет на указанный email. Для юридических лиц предоставляем полный пакет документов."
        }
      ]
    },
    {
      category: "Качество и хранение",
      questions: [
        {
          question: "Как вы гарантируете качество продукции?",
          answer: "Вся наша продукция проходит строгий контроль качества на всех этапах. У нас есть собственная лаборатория, все товары имеют сертификаты соответствия. Мы работаем только с проверенными поставщиками."
        },
        {
          question: "Как правильно хранить мясные продукты?",
          answer: "Свежее мясо храните в холодильнике при температуре 0-4°C не более 3-5 дней. Замороженные продукты - в морозилке при -18°C. Не размораживайте и не замораживайте повторно."
        },
        {
          question: "Что делать, если товар не соответствует качеству?",
          answer: "Если вы не удовлетворены качеством товара, свяжитесь с нами в течение 24 часов. Мы вернем деньги или заменим товар. Ваше удовлетворение - наш приоритет."
        },
        {
          question: "Какие сроки годности у ваших продуктов?",
          answer: "Сроки годности зависят от вида продукта. Свежее мясо - 5-7 дней, охлажденное - 3-5 дней, замороженное - до 12 месяцев. Точные сроки указаны на упаковке каждого товара."
        }
      ]
    },
    {
      category: "Продукция",
      questions: [
        {
          question: "Откуда поступает ваше мясо?",
          answer: "Мы работаем с лучшими фермерскими хозяйствами России и зарубежья. Говядина поступает из Аргентины и России, баранина - из Новой Зеландии, свинина и курица - от российских производителей."
        },
        {
          question: "Есть ли у вас органические продукты?",
          answer: "Да, в нашем ассортименте есть органические мясные продукты от фермеров, которые не используют антибиотики и гормоны роста. Такие товары отмечены специальной маркировкой."
        },
        {
          question: "Можете ли вы нарезать мясо по моему запросу?",
          answer: "Конечно! Мы можем нарезать мясо нужными вам кусками, сделать фарш или подготовить продукт для конкретного блюда. Укажите пожелания при оформлении заказа."
        },
        {
          question: "Есть ли скидки для постоянных клиентов?",
          answer: "Да, у нас действует программа лояльности. Постоянные клиенты получают скидки до 10%, специальные предложения и приоритетную доставку. Также действуют сезонные акции и распродажи."
        }
      ]
    },
    {
      category: "Оптовые поставки",
      questions: [
        {
          question: "Работаете ли вы с ресторанами и кафе?",
          answer: "Да, мы активно сотрудничаем с предприятиями общественного питания. Предлагаем специальные оптовые цены, регулярные поставки и индивидуальный подход к каждому клиенту."
        },
        {
          question: "Какой минимальный объем для оптового заказа?",
          answer: "Минимальный объем оптового заказа - 50 000₽. При таком объеме действует скидка 5%. Чем больше объем, тем выгоднее условия - до 30% скидки для крупных клиентов."
        },
        {
          question: "Предоставляете ли вы отсрочку платежа?",
          answer: "Для постоянных оптовых клиентов мы предоставляем отсрочку платежа от 7 до 30 дней в зависимости от объемов закупок и истории сотрудничества."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-orange-200">МЕСТО ДРАРИ</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-orange-200 transition-colors">Главная</Link>
              <Link to="/faq" className="hover:text-orange-200 transition-colors">FAQ</Link>
              <Link to="/contacts" className="hover:text-orange-200 transition-colors">Контакты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Здесь вы найдете ответы на самые популярные вопросы о наших продуктах, 
            доставке, оплате и сервисе
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Поиск по вопросам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQ.length === 0 ? (
              <Card className="p-8 text-center">
                <Icon name="Search" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-gray-600">
                  Попробуйте изменить поисковый запрос или свяжитесь с нами напрямую
                </p>
              </Card>
            ) : (
              <div className="space-y-8">
                {filteredFAQ.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-3xl font-bold mb-6 text-center">{category.category}</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`${categoryIndex}-${index}`}
                          className="border rounded-lg px-6"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-semibold">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 pb-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Нужна дополнительная помощь?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Позвонить нам</h3>
                <p className="text-gray-600 mb-4">
                  Свяжитесь с нашими консультантами по телефону
                </p>
                <p className="font-semibold text-primary">+7 (495) 123-45-67</p>
                <p className="text-sm text-gray-500">Ежедневно 8:00-22:00</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Написать в чат</h3>
                <p className="text-gray-600 mb-4">
                  Быстрая помощь через WhatsApp или Telegram
                </p>
                <p className="font-semibold text-primary">WhatsApp</p>
                <p className="text-sm text-gray-500">Отвечаем в течение 5 минут</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Написать email</h3>
                <p className="text-gray-600 mb-4">
                  Отправьте подробный вопрос на почту
                </p>
                <p className="font-semibold text-primary">info@mestodari.ru</p>
                <p className="text-sm text-gray-500">Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Популярные темы</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Доставка", "Оплата", "Качество", "Сроки годности", 
              "Возврат товара", "Оптовые поставки", "Скидки", "Хранение"
            ].map((topic) => (
              <button
                key={topic}
                onClick={() => setSearchTerm(topic.toLowerCase())}
                className="px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наша служба поддержки работает ежедневно и готова помочь вам в любое время
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:+74951234567"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Позвонить сейчас
            </a>
            <Link 
              to="/contacts"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Все контакты
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;