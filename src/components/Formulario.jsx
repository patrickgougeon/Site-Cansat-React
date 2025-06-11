import { useState } from "react";
import jsPDF from "jspdf";   
import html2canvas from "html2canvas"; 

export default function Formulario() {
  const [formData, setFormData] = useState({
    nomeEquipe: "", 
    email: "",
    telefone: "", 
    mensagem: "", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePdf = async () => {

    const input = document.getElementById('form-content'); 

    if (input) {
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210; 
            const pageHeight = 297; 
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(`inscricao_${formData.nomeEquipe.replace(/\s/g, '_')}.pdf`); 
        });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.nomeEquipe || !formData.email || !formData.telefone) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome da Equipe, Email, Telefone).");
      return;
    }


    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwAU_VrAUj3Wk1bm2P2qV108vx8RNlkJuUkU1AvhyqrjS5S7Y1eX2QmrzkJImNdeaXNrA/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      alert("Enviado com sucesso! " + JSON.stringify(result)); 
      await generatePdf(); 
    } catch (err) {
      alert("Erro ao enviar: " + err.message);
    }
  };

  return (
    <form className="forms" onSubmit={handleSubmit} id="form-content"> 
      <input 
        name="nomeEquipe" 
        onChange={handleChange} 
        placeholder="Nome da Equipe" 
        value={formData.nomeEquipe} 
        required
      />
      <br />
      <input 
        type="email" 
        name="email" 
        onChange={handleChange} 
        placeholder="Email de Contato" 
        value={formData.email} 
        required
      />
      <br />
      <input 
        type="tel" 
        name="telefone" 
        onChange={handleChange} 
        placeholder="Telefone de Contato (Ex: 99999-9999)" 
        value={formData.telefone} 
        required 
      />
      <br />
      <textarea
        name="mensagem"
        onChange={handleChange}
        placeholder="Mensagem (Opcional)"
        value={formData.mensagem}
      />
      <br />
      <button type="submit">Enviar Inscrição e Gerar Comprovante em PDF</button>
    </form>
  );
}