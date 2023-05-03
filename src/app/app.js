import React, { Component } from 'react';
import './app.css';


function NavMenu() {
  return (
    <nav className="menu">
      <ul className="menu__title">
      <li><a href="#info">Инфо</a></li>
        <li><a href="#story">История</a></li>
        <li><a href="#galery">Галерея</a></li>
        <li><a href="#color">Палитра</a></li>
        <li><a href="#program">Программа</a></li>
        <li><a href="#location">Маршрут</a></li>
        <li><a href="#contact">Контакты</a></li>
      </ul>
    </nav>
  );
}

function HeaderBody() {
  return (
    <div id='head' className="header-contaner bg10">
      <NavMenu />
      <div className="contener_row">
        <div className="box_left">
          <h1 className="title title-60 center">Мария & Александр</h1>
          <div className="title-40">01.07.2023</div>
          <div className="title title-30 txt-col mr-bt-60">приглашение на свадьбу</div>
          <a href='#info' className="button_glass">Узнать больше</a>
        </div>
      </div>
    </div>
  );
}

function MyPhoto() {
  return (
    <div className="bg_fon">
      <img className="bg1" src="./img/11.jpg" />
    </div>
  );
}

function Heart() {
  return (
    <div className="img-heart">
      <svg id="Capa_1" enable-background="new 0 0 89.072 89.072" viewBox="0 0 89.072 89.072" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m32.162 43.742c-2.9-5-6.9-9.9-13.2-10.2-6.2-.3-11.2 5-12.4 10.8-1.5 7.5 2.4 14.7 5.9 21 2 3.7 4.3 7.2 6.7 10.7 2.5 3.6 4.9 7.5 3.7 12-.2.9 1 1.4 1.5.7 3-4.6.7-9.8-1.6-14.2-3.3-6.2-7.2-12-9.8-18.5-2.1-5.3-3.6-12.6 1.9-16.5 6.5-4.7 12 4.1 14.5 8.9.7 1.4 2.6 1.5 3.7.5 2.7-2.5 8.2-5.3 11-1.5 2.6 3.5.2 7.9-2.3 10.6-2.4 2.5-5.2 4.3-7.8 6.4-3.2 2.6-6 5.5-8.2 9-1.9 3 2.9 5.8 4.8 2.8 5.5-8.5 18.7-13 19.4-24.2.3-4.4-1.8-8.9-6.1-10.5-4.1-1.6-8.3-.2-11.7 2.2z" /><path d="m60.562 44.342c2.2-2.1 3.3-5.3 5-7.8 1.8-2.7 3.9-5.1 6.2-7.4 4.4-4.4 9.8-7.6 10.9-14.2.8-4.8-1.1-10.6-5.9-12.6-4.8-1.9-7.9 1.1-11 4.2-1.8-3-4.3-5.7-7.8-6.4-4.7-.9-9 2.6-10.4 6.9-1.7 5.1.4 10.5 2.3 15.2 2.4 6.1 4.6 12.8 7.9 18.5.1.1.1.2.2.3-.2.7-.4 1.4-.5 2.1-.2 1.6 2.1 2.2 3.1 1.2zm-8.6-29.2c-.9-3.7-1-10 4-10.7 3.7-.5 5.9 3.9 7.4 6.7.7 1.3 2.4 1.4 3.4.4 2.8-2.5 6.8-8.6 10.5-3.4 3.5 5-.4 10.6-4.1 13.9-3.5 3-6.7 6-9.5 9.7-1.2 1.5-2.5 3.2-3.6 5-2.2-7.3-6.2-14.2-8.1-21.6z" /></g></g></svg>
    </div>

  );
}

function Body() {
  return (
    <div id='info' className="body-all">
      <div className="block1">
        <div className="title title-60">Мы женимся</div>
        <p className="mr-bt-20">Дорогие друзья, родные и близкие!</p>
        <p>"Мы счастливы пригласить вас на нашу свадьбу. Для нас очень важно, чтобы вы смогли разделить с нами самое счастливое мгновение в нашей жизни. Порадуйте нас своим присутствием:"</p>
        <div className="title-data">1 июля 2023 года</div>
        <div className="heart-line">
          <Heart />
          <Heart />
          <Heart />
        </div>
        <div>С любовью, Саша и Маша</div>
      </div>
    </div>
  );
}

function LoveStory() {
  return (
    <div className="body-all">
      <div className="contetn-love">
        <div className="title title-60 teg-love love1">love story</div>
        <div className="title title-60 teg-love love2">love story</div>
        <div className="title title-60 teg-love love3">love story</div>
        <div className="frame">
          <img className="bg2" src="./img/22.jpg" />
        </div>
      </div>
    </div>
  );
}

function LoveStoryNext() {
  return (
    <div id='story' className="body-all">
      <div className="flex">
        <div className="frame flex_left">
          <img className="bg3" src="./img/33.jpg" />
        </div>
        <div className="flex_right">
          <div className="title title-40">История нашей любви…</div>
          <div>Общие друзья пытались нас познакомить полгода, утверждая, что мы идеально подходим друг другу. Как вы понимаете, они оказались правы. Через несколько дней после знакомства мы встретились на чашечку кофе в Coffee Like и больше не захотели расставаться.</div>
        </div>
      </div>
    </div>
  );
}

function ScrollingImg() {
  return (
    <div id='galery' className="body-all">
      <div className='body6'>
        <div className="title title-60 title-small">Наши счастливые моменты</div>
        <Slider />
      </div>
    </div>

  );
}

const com = [
  { img: "./img/с_1.jpg" },
  { img: "./img/с_2.jpg" },
  { img: "./img/с_3.jpg" }
]

function Comment({ index }) {
  return (
    <div className="card_comment">
      <img src={com[index].img} alt="" />
    </div>
  );
}

function Slider() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === com.length - 1 ? 0 : current + 1
        return res
      })
    }, 8000)
    return () => clearInterval()
  }, [])
  const prevImgIndex = activeIndex ? activeIndex - 1 : com.length - 1;
  const nextImgIndex = activeIndex === com.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        <Comment index={prevImgIndex} />
      </div>
      <div className="slider-img" key={activeIndex}>
        <Comment index={activeIndex} />
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        <Comment index={nextImgIndex} />
      </div>
    </div>
  )
}

function Color() {
  return (
    <div id='color' className='body-all'>
      <div className="title title-40 blc1">Нам будет приятно, если вы поддержите стилистику нашей свадьбы, и предпочтёте наряды в следующей цветовой гамме:</div>
      <div className="blokCore">
        <p className="core"></p>
        <p className="core"></p>
        <p className="core"></p>
        <p className="core"></p>
        <p className="core"></p>
        <p className="core"></p>
      </div>
    </div>
  );
}

const cats = [
  {
    "name": "Дата",
    "info": "1 июля 2023 года"
  },
  {
    "name": "Время",
    "info": "14:00 - 15:00"
  },
  {
    "name": "Место проведения",
    "info": "Береговая ротонда"
  },
  {
    "name": "Адрес",
    "info": "Александровский сад, ул. Набережная Грина"
  }
];

const cats2 = [
  {
    "name": "Дата",
    "info": "1 июля 2023 года"
  },
  {
    "name": "Время",
    "info": "16:00 - 22:00"
  },
  {
    "name": "Место проведения",
    "info": "Ресторан Альфа"
  },
  {
    "name": "Адрес",
    "info": "ул. Московская 129А"
  }
];

function RowLine({ name, info }) {
  return (
    <div className="row1">
      <p >{name}</p>
      <p className="row1_txt">{info}</p>
    </div>
  );
}

function TableAll({ category, titleN }) {
  return (
    <div className="content-prog_table">
      <h3 className="title title-30 mr-bt-20 prog_title">{titleN}</h3>
      {category.map((obj, i) => <RowLine key={obj.name} name={obj.name} info={obj.info} />)}
    </div>
  );
}

function ProgramMer() {
  return (
    <div id='program' className='body-all'>
      <h2 className="title title-40 mr-bt-40">Программа мероприятия</h2>
      <div className="flex-col-2">

        <div className="frame content-prog_img">
          <img className="img-prog" src="./img/registr.jpg" />
        </div>
        <TableAll category={cats} titleN={'Регистрация'} />
      </div>

      <div className="flex-col-2">
        <TableAll category={cats2} titleN={'Банкет'} />
        <div className="content-prog_img">
          <img className="frame img-prog" src="./img/bancet.jpg" />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div id='location' className="body-all mem">
      <div className="title title-40 center">Как добраться</div>

      <div className="title title-30 center nullmarg txt-col">Регистрация</div>
      <div className="center nullmarg">Александровский парк</div>
      <div className="link0">
        <a href="https://yandex.ru/maps/org/beregovaya_rotonda/127983404520/?utm_medium=mapframe&utm_source=maps" className="link1">Береговая ротонда</a>
        <a href="https://yandex.ru/maps/46/kirov/category/landmark_attraction/89683368508/?utm_medium=mapframe&utm_source=maps" className="link2">Достопримечательность в Кирове</a>
        <iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=49.688407%2C58.608839&mode=poi&poi%5Bpoint%5D=49.688229%2C58.608860&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D127983404520&source=mapframe&utm_source=mapframe&z=16" frameborder="1" allowfullscreen="true" className="link3"></iframe>
      </div>

      <div className="title title-30 center nullmarg txt-col">Банкет</div>
      <div className="center nullmarg">Ресторан "Альфа"</div>
      <div className="link0" >
        <a href="https://yandex.ru/maps/org/alfa/1296000078/?utm_medium=mapframe&utm_source=maps" className="link1">Альфа</a>
        <a href="https://yandex.ru/maps/46/kirov/category/hotel/184106414/?utm_medium=mapframe&utm_source=maps" className="link2">Гостиница в Кирове</a>
        <iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=49.622473%2C58.602563&mode=poi&poi%5Bpoint%5D=49.622877%2C58.603161&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1296000078&z=16" frameborder="1" allowfullscreen="true" className="link3"></iframe>
      </div>


    </div>
  );
}

function Contact() {
  return (
    <div id='contact' className="body-all">
      <div className="center">
        <div className="title title-30 nullmarg">МЫ ВАС ОЧЕНЬ ЖДЁМ И БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ НА НАШЕЙ СВАДЬБЕ!</div>
        <div className='txt-col txt-end1'>Если будут вопросы, позвоните нам</div>
        <div className='mr-bt-40 txt-end1'>Если вы думаете какие подарить цветы, тогда возьмите белые или по цвету свадебной палитры</div>

        <div>
        <div className="title title-bold">Координатор: <a className='link-tel' href="tel:+79960462763">+7 (996)-046-27-63</a></div>
        <div className="title title-bold">Саша: <a className='link-tel' href="tel:+79123652855">+7 (912)-365-28-55</a></div>
        <div className="title title-bold">Маша: <a className='link-tel' href="tel:+79091406826">+7 (909)-140-68-26</a></div>
        </div>
        
      </div>
    </div>
  );
}


export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderBody />
        <MyPhoto />
        <Body />
        <LoveStory />
        <LoveStoryNext />
        <ScrollingImg />
        <Color />
        <ProgramMer />
        <Card />
        <Contact />
      </div>
    );
  }
};
