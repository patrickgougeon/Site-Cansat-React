import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ImagensDefault from "../images/ImagemDefault.png"

export function Competicoes() {

  {/* Botão que alterna entre as competições */}

  function alternarBotao(id1, id2) { 
    let botao1DOM = document.getElementById(id1);
    let botao2DOM = document.getElementById(id2);
    let cansatDOM = document.getElementById("cansat-2025")
    let competicoesDOM = document.getElementById("competicoes-anteriores")
    if (id1 == "botao1") {
      cansatDOM.classList.remove("inativo")
      competicoesDOM.classList.add("inativo")
    } else {
      competicoesDOM.classList.remove("inativo")
      cansatDOM.classList.add("inativo")
    }

    botao1DOM.classList.add("botao-Comp");
    botao2DOM.classList.remove("botao-Comp");
  }

  return (
    <>
      <Navbar />
      <header id="header2">
        <nav id="navbar-comp">
          <button id="botao1" className="link-Comp botao-Comp" onClick={() => {alternarBotao("botao1", "botao2")}}>CANSAT 2025</button>
          <button id="botao2" className="link-Comp" onClick={() => {alternarBotao("botao2", "botao1")}}>Competições anteriores</button>
        </nav>
      </header>

      <main id="competicoes">

        <div id="cansat-2025">`
          
          <h1>CANSAT 2025</h1>

          <section id="regras">
            <h2>Regras</h2> 

            <br />

            {/* link para pdf de regras */}

            <a href="">Documento de regras</a>

            <br />
            <br />

            <h3>Resumo</h3>

            <br />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus!
            </p>
            
            <br />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus!</p>
            
            <br />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus!</p>

            <br />
          </section>

          <section id="premiacao">

            <h2>Premiação</h2> 

            <br />

            <div id="container-premiacao">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam dolorem laboriosam sint odio, tempore officiis libero repellat corrupti dolorum vitae harum voluptas assumenda magni, similique incidunt hic nesciunt alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus!</p>

              <img src={ImagensDefault} alt="" />
            </div>
          </section>
        </div>

        {/* Galeria de fotos das últimas competições */}

        <div id="competicoes-anteriores" className="inativo">
          <h1>Competições Anteriores</h1>

          <h2>Competição Lorem</h2>
          <div className="galeria">
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
          </div>

          <h2>Competição Lorem 2</h2>
          <div className="galeria">
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
          </div>

          <h2>Competição Lorem 3</h2>
          <div className="galeria">
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
            <img src={ImagensDefault} alt="" />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
} 

