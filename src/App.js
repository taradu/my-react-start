import person from './img/med1.jpg'
import './style/style.scss';
import bgheader from './img/bg_header.png';

const personal = [
  {
    name: 'Мішель Андраде',
    position: 'Хірург',
    email: 'andrademichael@gmail.com',
    tel: '+380986674522',
    img: 'https://nu.aeon.co/images/33c15eff-c80c-444e-9981-c7a4a10d964f/header_essay-yierkewicsz-medical-disrespect-rtr3cjyi.jpg',
  },
  {
    name: 'Кей Глок',
    position: 'Терапевт',
    email: 'keyglock@gmail.com',
    tel: '+380965559898',
    img: 'https://www.sgmc.org/wp-content/uploads/2021/02/Garcia_Web-1.png',
  },
  {
    name: 'Янг Блад',
    position: 'Офтольмолог',
    email: 'bloodyang@gmail.com',
    tel: '+380689990990',
    img: 'https://www.sgmc.org/wp-content/uploads/2021/02/Zeigler.png',
  },
  {
    name: 'Воркунова Вероника',
    position: 'Лор',
    email: 'vorkuta@gmail.com',
    tel: '+30993332454',
    img: 'https://berezka-sanatory.by/upload/medialibrary/d3e/d3edd89b59ed26f8d9931d115779734c.jpg',
  },
  {
    name: 'Сальний Ярослав',
    position: 'Психолог',
    email: 'saloyar@gmail.com',
    tel: '+30956780090',
    img: 'https://docacademy.com.ua/wp-content/uploads/2019/02/dhffdh-1.jpg',
  },
  {
    name: 'Мошка Марія',
    position: 'Рентген',
    email: 'moshka@gmail.com',
    tel: '+38073256787',
    img: 'https://avatars.mds.yandex.net/get-bunker/135516/ef98ec26e8e3dece9728920f822748985d676f65/orig',
  }

]


function App() {
    return (
    <div className="App">
         <div className="container">
      <div className="header">
        <div className="header__logo">
          <img className="medicalLogo" src="" alt=""/>
          <p className="titleLogo">Medical Lutsk Community</p>
        </div> 
        <div className="header__logo-bg">
          <img src={bgheader} alt=""/>
        </div>
          <ul>
            <li>Головна</li>
            <li>Наші спеціалісти</li>
            <li>Про нас</li>
            <li>Контакти</li>
          </ul>
      </div>
      <hr/>
      <div className="main">
        {personal.map((obj) => {

          return (
          <div className="card">
          <div className="card-info">
           <img className="card-img" src={obj.img} alt={obj.position}/>
            <strong>{obj.name}<br/> {obj.position}</strong>
            <a href="">Зв'язатись</a>
            <span>{obj.email}</span>
            <span>{obj.tel}</span>
          </div>
        </div>
          )
          
        }) }
        

        
        

    </div>
    </div>
    </div>
  );
}

export default App;
