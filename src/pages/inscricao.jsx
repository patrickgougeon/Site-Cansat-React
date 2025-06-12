import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Formulario from "../components/Formulario";

 export function Inscricao() {
    return (
      <>
        <Navbar />
        <main id="inscricao">
          <div id="apresentacao-insc">
            <h1>Página de Inscrição</h1>
            <p>Preencha o formulário abaixo para se inscrever e gerar seu comprovante em PDF.</p>
          </div>
          <Formulario />
        </main>
        <Footer />
      </>
    );

  }
