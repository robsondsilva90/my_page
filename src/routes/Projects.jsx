// Statics
import "./Projects.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Imports
import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { ProjectContext } from "../components/context";

// Data
import data from '../data/data';

// Swiper
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';

register();

const Projects = ({ item }) => {

    const { setProjectId } = useContext(ProjectContext);

    const handleLinkClick = (id) => {
        setProjectId(id);
    };

    return (
        <div className="myprojects-body">
            <div className="title">
                <h1>Meus Projetos</h1>
            </div>
            <div className="slider">
                <Swiper className="myswiper"
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{
                        delay: 6000, // Tempo em milissegundos entre cada transição
                        disableOnInteraction: false, // Continúa a reprodução automática após interação do usuário
                    }}
                >
                    {data.map((item) => (
                        <SwiperSlide className="slider-item-container" key={item.id}>
                            <img src={item.image} alt={`Slider ${item.id}`} className="slider-item" />
                            <Link to={`/project/${item.id}`} onClick={() => handleLinkClick(item.id)} ><h2>{item.title}  </h2></Link>
                            <label htmlFor={item.id}>{item.description} </label>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="title-project">
            </div>
        </div>
    )
}

export default Projects;