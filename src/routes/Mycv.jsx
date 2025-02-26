// Statics
import "./Mycv.css";
import MyPhoto from '../img/avatar.jpg';

// Components
import Columns from "../components/Columns";
import AboutText from "../components/AboutText";

const Mycv = () => {
  return (
    <div className='responsiveness'>
            <div className="information-column">
                <div className="container-mycv">
                    <div className="myphoto">
                    <img src={MyPhoto} alt="" />
                    </div>
                    <h1>Robson Silva</h1>
                    <h2 className='subtitle'>Desenvolvedor Web Jr</h2>
                    <hr/>
                    <h3>Contato</h3>
                    <Columns />
                </div>
            </div>
            <div className="experience-column responsiveness">
                <div className="container-mycv">
                    <section>
                        <AboutText />
                    </section>
                </div>
            </div>
        </div>
  )
}

export default Mycv