import "./Columns.css";

const Columns = () => {
    return (
        <>
            <div className="description-contact">
                <ul>
                    <li>
                        <i className="fa-brands fa-github"></i>
                        <a href="https://github.com/robsondsilva90/robsondsilva" target="_blank">/robsondsilva90</a>
                    </li>
                    <li>
                        <i className="fa-brands fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/robsondsilva90" target="_blank">Robson Silva</a>
                    </li>
                    <li>
                        <i className="fa-solid fa-globe"></i>
                        <a href="https://www.google.com.br/maps/place/Guarulhos,+SP/@-23.442159,-46.5648761,11.74z/data=!4m6!3m5!1s0x94cef53fb1b5e26d:0x974ce18d22c3555b!8m2!3d-23.4596858!4d-46.5328559!16s%2Fg%2F1ymtj21_6?entry=ttu"
                            target="_blank">Guarulhos - SP</a>
                    </li>
                    <li>
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                        <a href="https://api.whatsapp.com/send/?phone=5511956059752&text&type=phone_number&app_absent=0"
                            target="_blank">WhatsApp</a>
                    </li>
                </ul>
            </div>
            <div className="education-description">
                <h3>Descrição</h3>
                <ul>
                    <li>
                        <p>2025 - 2027</p>
                        <h4>Analise e Desenvolvimento de Sistemas</h4>
                        <h5>Faculdade Anhanguera Educacional</h5>
                    </li>
                    <li>
                        <p>Fevereiro - 2025</p>
                        <h4>51h - Formação Front-end - HTML, CSS, Javascript, React e Typescript</h4>
                        <a href="https://www.udemy.com/certificate/UC-25a2e3c2-b048-4f7b-b48d-253d9ea62ab4/" target="_blank" >Certificação</a>
                        <h5>Udemy</h5>
                    </li>
                    <li>
                        <p>Outubro - 2024</p>
                        <h4>8.5h - Git e GitHub do Básico ao Avançado com Gits e GitHub Pages</h4>
                        <a href="https://www.udemy.com/certificate/UC-0e302088-821f-43e3-b53f-79acd52a2e1c/" target="_blank" >Certificação</a>
                        <h5>Udemy</h5>
                    </li>
                    <li>
                        <p>Setembro - 2024</p>
                        <h4>20.5h - Algoritmo e Lógica de Programação</h4>
                        <a href="https://www.udemy.com/certificate/UC-25a2e3c2-b048-4f7b-b48d-253d9ea62ab4/" target="_blank" >Certificação</a>
                        <h5>Udemy</h5>
                    </li>
                    <li>
                        <p>Setembro - 2024</p>
                        <h4>10h - Lógica de Programação</h4>
                        <a href="https://www.betrybe.com/badges/9B13E286E53D" target="_blank" >Certificação</a>
                        <h5>Trybe</h5>
                    </li>
                </ul>
                <div className="language-description">
                    <h3>Línguas</h3>
                    <ul>
                        <li>
                            <h4>Português</h4>
                            <div className="percent">
                                <div></div>
                            </div>
                        </li>
                        <li>
                            <h4>Inglês</h4>
                            <div className="percent inglish">
                                <div></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Columns