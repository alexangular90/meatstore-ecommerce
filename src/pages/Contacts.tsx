import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Contacts = () => {
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
              <Link to="/delivery" className="hover:text-orange-200 transition-colors">Доставка</Link>
              <Link to="/contacts" className="hover:text-orange-200 transition-colors">Контакты</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Как с нами связаться</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" size={32} className="text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">Телефон</h3>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                      <p className="text-sm text-gray-500">Ежедневно с 8:00 до 22:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" size={32} className="text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">Email</h3>
                      <p className="text-gray-600">info@mestodari.ru</p>
                      <p className="text-sm text-gray-500">Ответим в течение часа</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" size={32} className="text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">Адрес</h3>
                      <p className="text-gray-600">Москва, ул. Примерная, д. 123</p>
                      <p className="text-sm text-gray-500">Метро "Примерная", 5 минут пешком</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Clock" size={32} className="text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">Часы работы</h3>
                      <div className="text-gray-600">
                        <p>Пн-Пт: 8:00 - 22:00</p>
                        <p>Сб-Вс: 9:00 - 21:00</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Напишите нам</CardTitle>
                  <p className="text-gray-600">
                    Оставьте сообщение, и мы свяжемся с вами в ближайшее время
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <Input placeholder="Ваше имя" />
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
                      <label className="block text-sm font-medium mb-2">Тема</label>
                      <Input placeholder="Тема сообщения" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите, чем мы можем помочь..."
                        rows={5}
                      />
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Мы в социальных сетях</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="flex flex-col items-center p-4 hover:text-primary transition-colors">
              <Icon name="Instagram" size={48} className="mb-2" />
              <span className="font-medium">Instagram</span>
            </a>
            <a href="#" className="flex flex-col items-center p-4 hover:text-primary transition-colors">
              <Icon name="Facebook" size={48} className="mb-2" />
              <span className="font-medium">Facebook</span>
            </a>
            <a href="#" className="flex flex-col items-center p-4 hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={48} className="mb-2" />
              <span className="font-medium">Telegram</span>
            </a>
            <a href="#" className="flex flex-col items-center p-4 hover:text-primary transition-colors">
              <Icon name="Phone" size={48} className="mb-2" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Как нас найти</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={64} className="text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold">Интерактивная карта</p>
              <p className="text-gray-600">Москва, ул. Примерная, д. 123</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;