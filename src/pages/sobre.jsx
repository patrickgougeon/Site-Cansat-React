import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoInstagram from "../images/LogoInstagram.svg";
import LogoFacebook from "../images/LogoFacebook.svg";
import LogoYoutube from "../images/LogoYoutube.svg";
import GrupoImagens from "../images/GrupoImagens.svg";

export function Sobre() {
    return (
        <div className="sobre-page-wrapper">
            <Navbar />

            <main>

           {/* Section com as informações da empresa */}

                <section className="primeira">
                    <div className="text-section">
                        <h1>Quem somos?</h1>
                        <p>LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus finibus, pretium nibh sed, finibus eros. Sed tempor consectetur leo sed ultrices. Integer dui nunc, volutpat eu nisl in, ultricies viverra nulla. Phasellus eu vestibulum ipsum. Mauris quis condimentum ipsum. Morbi fermentum tincidunt lorem, sit amet posuere ipsum aliquet in. Suspendisse felis lacus, tincidunt eu dui. LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus finibus, pretium nibh sed, finibus eros. Sed tempor consectetur leo sed ultrices. Integer dui nunc, volutpat eu nisl in, ultricies viverra nulla. Phasellus eu vestibulum ipsum. Mauris quis condimentum ipsum. Morbi fermentum tincidunt lorem, sit amet posuere ipsum aliquet in. Suspendisse felis lacus, tincidunt eu dui.</p>
                    </div>
                    <div className="img-section">
                        <img src={GrupoImagens} alt="Grupo" width="300" />
                    </div>
                </section>
            </main>

            {/* Section com as redes sociais da competição */}

            <div className="page-bottom-group">
                <section className="segunda">
                    <div className="qconteiner">
                        <h2>Redes Sociais</h2>
                        <div className="patrocinadores">
                            <div className="patrocinadores-box">
                                <a href="">
                                    <img src={LogoInstagram} alt="nosso instagram" width="60"/>
                                </a>
                            </div>
                            <div className="patrocinadores-box">
                                <a href="">
                                    <img src={LogoFacebook} alt="nosso facebook" width="60"/>
                                </a>
                            </div>
                            <div className="patrocinadores-box">
                                <a href="">
                                    <img src={LogoYoutube} alt="nosso youtube" width="60"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}