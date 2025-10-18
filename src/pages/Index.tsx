import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState('Все');

  const categories = ['Все', 'Классический', 'Французский', 'Дизайн', 'Педикюр'];

  const galleryItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/1a019c99-404c-4e9b-b4b1-f98dd2d19537/files/9e30722c-b942-455d-9c06-e859043f7ef7.jpg',
      category: 'Классический',
      title: 'Нюдовое покрытие',
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/1a019c99-404c-4e9b-b4b1-f98dd2d19537/files/216f5839-1b75-421f-8940-8afdcd367a14.jpg',
      category: 'Французский',
      title: 'Классический френч',
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/1a019c99-404c-4e9b-b4b1-f98dd2d19537/files/31a0ac91-7399-492a-8ac0-ac5fdb5891b4.jpg',
      category: 'Дизайн',
      title: 'Цветочный дизайн',
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/1a019c99-404c-4e9b-b4b1-f98dd2d19537/files/9e30722c-b942-455d-9c06-e859043f7ef7.jpg',
      category: 'Педикюр',
      title: 'Педикюр в нюде',
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/projects/1a019c99-404c-4e9b-b4b1-f98dd2d19537/files/216f5839-1b75-421f-8940-8afdcd367a14.jpg',
      category: 'Дизайн',
      title: 'Минималистичный дизайн',
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/projects/1a019c99-404c-4e9b-b4b1-f98dd2d19537/files/31a0ac91-7399-492a-8ac0-ac5fdb5891b4.jpg',
      category: 'Классический',
      title: 'Пастельное покрытие',
    },
  ];

  const services = [
    { name: 'Классический маникюр', price: '1500 ₽', duration: '60 мин' },
    { name: 'Маникюр с покрытием гель-лак', price: '2000 ₽', duration: '90 мин' },
    { name: 'Французский маникюр', price: '2200 ₽', duration: '90 мин' },
    { name: 'Дизайн (1 ноготь)', price: '150 ₽', duration: '15 мин' },
    { name: 'Педикюр классический', price: '2500 ₽', duration: '90 мин' },
    { name: 'Педикюр с покрытием', price: '3000 ₽', duration: '120 мин' },
  ];

  const masters = [
    { name: 'Анна Иванова', specialty: 'Мастер ногтевого сервиса', experience: '7 лет' },
    { name: 'Мария Петрова', specialty: 'Nail-дизайнер', experience: '5 лет' },
    { name: 'Екатерина Сидорова', specialty: 'Топ-мастер', experience: '10 лет' },
  ];

  const reviews = [
    { name: 'Ольга', text: 'Потрясающий результат! Маникюр держится уже 3 недели', rating: 5 },
    { name: 'Анастасия', text: 'Очень внимательные мастера, приятная атмосфера', rating: 5 },
    { name: 'Елена', text: 'Лучший салон в городе! Хожу только сюда', rating: 5 },
  ];

  const filteredGallery = selectedFilter === 'Все' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Nailé Studio</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#price" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Прайс</a>
              <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Галерея</a>
              <a href="#masters" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Мастера</a>
              <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Записаться</Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Искусство<br />совершенства<br />на ваших ногтях
              </h2>
              <p className="text-lg text-muted-foreground">
                Создаём идеальный маникюр в атмосфере заботы и внимания к деталям
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Записаться онлайн
                </Button>
                <Button size="lg" variant="outline">
                  Позвонить нам
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/1a019c99-404c-4e9b-b4b1-f98dd2d19537/files/31a0ac91-7399-492a-8ac0-ac5fdb5891b4.jpg"
                alt="Маникюр"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12">Профессиональный уход за вашими ногтями</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <div className="flex items-center justify-between text-muted-foreground mb-2">
                  <span className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    {service.duration}
                  </span>
                  <span className="text-2xl font-bold text-foreground">{service.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
          <p className="text-muted-foreground mb-8">Без скрытых платежей и доплат</p>
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/20">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {services.map((service, index) => (
                <div key={index} className="flex justify-between items-center border-b border-border pb-3 last:border-0">
                  <span className="text-foreground">{service.name}</span>
                  <span className="font-semibold">{service.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Галерея работ</h2>
          <p className="text-center text-muted-foreground mb-8">Вдохновитесь нашими работами</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedFilter === category ? 'default' : 'outline'}
                className={`cursor-pointer px-6 py-2 text-sm transition-all ${
                  selectedFilter === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-primary/10'
                }`}
                onClick={() => setSelectedFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <Badge className="mb-2 bg-white/20 backdrop-blur-sm">{item.category}</Badge>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="masters" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Наши мастера</h2>
          <p className="text-center text-muted-foreground mb-12">Профессионалы своего дела</p>
          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow bg-white">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{master.name}</h3>
                <p className="text-muted-foreground text-sm mb-1">{master.specialty}</p>
                <p className="text-xs text-muted-foreground">Опыт: {master.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12">Что говорят о нас</p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 bg-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <p className="text-sm font-semibold text-muted-foreground">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/20">
            <h2 className="text-3xl font-bold text-center mb-4">Онлайн запись</h2>
            <p className="text-center text-muted-foreground mb-8">Заполните форму и мы свяжемся с вами</p>
            <form className="space-y-4">
              <div>
                <Input placeholder="Ваше имя" className="bg-white" />
              </div>
              <div>
                <Input type="tel" placeholder="Телефон" className="bg-white" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-white" />
              </div>
              <div>
                <Textarea placeholder="Комментарий или предпочтения" className="bg-white min-h-[100px]" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold">Адрес</h3>
              <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto flex items-center justify-center">
                <Icon name="Clock" size={28} className="text-white" />
              </div>
              <h3 className="font-semibold">Режим работы</h3>
              <p className="text-muted-foreground">Пн-Вс: 10:00 — 21:00</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-80">© 2024 Nailé Studio. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
