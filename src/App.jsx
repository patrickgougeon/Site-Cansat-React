import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Competicoes } from "./pages/competicoes"
import { Inscricao } from "./pages/inscricao"
import { Sobre } from "./pages/sobre"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/competicoes" element={<Competicoes />}/>
        <Route path="/inscricao" element={<Inscricao />}/>
      </Routes>
    </Router>
  );
}

export default App;