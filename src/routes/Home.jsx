// Statics
import "./Home.css"
import MyPhoto from '../img/avatar.jpg';
import MyQR from '../img/frame2.png';

const Home = () => {
  return (
    <div className="home-responsiveness">
      <div className='container-home'>
        <div className="mydata">
          <img src={MyPhoto} alt="Foto do desenvilvedor" />
          <h1>Robson Silva</h1>
          <p className='description'>Desenvolvedor Frontend Jr</p>
        </div>
        <div className="mylinks">
          <ul>
            <li className='mylinks-item' ><a href="https://github.com/robsondsilva90" target="_blank">GitHub</a></li>
            <li className='mylinks-item' ><a href="https://wa.me/5511956059752" target="_blank">WhatsApp</a></li>
            <li className='mylinks-item' ><a href="https://www.linkedin.com/in/robsondsilva90" target="_blank">Linkedin</a></li>
          </ul>
        </div>
      </div>
      <div>
          <a href="#" id="scrollToBottom" class="scroll-button">
            <i class="fas fa-arrow-down"></i>
          </a>
        </div>
      <div className="sobre-container">
        <div className="sobre-description">
          <h1>Sobre </h1>
          <p>Tenho uma ampla experiência em suporte técnico administrando servidores AD, suporte em dispositivos móveis e suporte a sistemas específicos. 
            Minha trajetória de trabalho comprova minha capacidade de gestão e agilidade em resolver problema técnicos. 
            Agora estou me dedicando a me aprimorar e elevar meu profissional, atualmente estudando desenvolvimento web. 
            Tenho certificação em lógica de programação, controle de versões com git e formação completa em Front-end com HTML, CSS, JavaScript e React.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home