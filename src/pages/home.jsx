import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

 export function Home() {
    return (
      <>
        <Navbar />
          <main id ="homemain">

            {/* primeira section com link para inscrição */}

            <section id="primeira">
              <h1>LOREM IPSUM <br/><a href="inscricao.html"><button>Inscreva-se já!</button></a>
              </h1>
            </section>

            {/*Segunda Sextion com informações sobre a competição */}

            <section id="segunda">

              <div id="card">

                <div id="text-section">

                    <h2>Sobre a competição</h2>
                    <p>LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus finibus, pretium nibh sed, finibus eros. Sed tempor consectetur leo sed ultrices. Integer dui nunc, volutpat eu nisl in, ultricies viverra nulla. Phasellus eu vestibulum ipsum. Mauris quis condimentum ipsum. Morbi fermentum tincidunt lorem, sit amet posuere ipsum aliquet in. Suspendisse felis lacus, tincidunt eu dui.</p>

                </div>

                <div id="img-section">
                  <img src="" alt="imagem da competição" />
                </div>
              </div>
            </section>

          {/* Terceira section com informações sobre a competição */}

            <section id="terceira">
                <div id="tcontainer">
                    <h1>Atualizações</h1>
                    <div id="tcards">
                    <div id="tcard1">
                        <h3>Lorem</h3>
                        <p>LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus finibus, pretium nibh sed, finibus eros. Sed tempor consectetur leo sed ultrices. Integer dui nunc, volutpat eu nisl in, ultricies viverra nulla. Phasellus eu vestibulum ipsum. Mauris quis condimentum ipsum.</p>
                    </div>
                    <div id="tcard2">
                        <h3>Lorem</h3>
                        <p>LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non risus finibus, pretium nibh sed, finibus eros. Sed tempor consectetur leo sed ultrices. Integer dui nunc, volutpat eu nisl in, ultricies viverra nulla. Phasellus eu vestibulum ipsum. Mauris quis condimentum ipsum.</p>
                    </div>
                    </div>
                </div>

            </section>

         {/* Quarta section com as fotos dos patrocinadores */}

            <section id="quarta">
                <div id="qconteiner">
                    <h2>Patrocinadores</h2>
                    <div id="patrocinadores">
                    <div id="patrocinadores-box"><img src="" alt="primeiro patrocinador" /></div>
                    <div id="patrocinadores-box"><img src="" alt="segundo patrocinador" /></div>
                    <div id="patrocinadores-box"><img src="" alt="terceiro patrocinador" /></div>
                    </div>
                </div>

            </section>

          </main>  
          
        <Footer />
      </>
    );
  }

