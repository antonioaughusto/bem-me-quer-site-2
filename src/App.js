import React from "react";

const company = "Bem Me Quer";
const slogan = "Ser criança é voar por sua imaginação";

export default function App(){
  return (
    <div>
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <img src="/logo.png" className="logo" alt="Logo Bem Me Quer" />
            <div>
              <div className="brand-title">{company}</div>
              <div style={{fontSize:12}}>{slogan}</div>
            </div>
          </div>
          <a href="https://wa.me/54991543109" className="btn btn-primary">WhatsApp</a>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1 style={{color:"#e6007e"}}>Um lugar onde brincar é aprender e imaginar é crescer</h1>
          <p>{slogan}</p>
          <div className="grid grid-2">
            <img src="/images/por-do-sol.jpg" alt="Foto destaque" style={{width:"100%",borderRadius:10}}/>
            <div>
              <h2>Sobre nós</h2>
              <p>Na Bem Me Quer, acreditamos que a infância é o período mais criativo da vida. Nosso trabalho une afeto, brincadeira e projetos interdisciplinares que desenvolvem autonomia, coordenação motora, comunicação e socialização. <strong>As famílias participam ativamente das experiências.</strong></p>
              <a href="#contato" className="btn btn-primary" style={{marginTop:12,display:"inline-block"}}>Conheça nossa proposta pedagógica</a>
            </div>
          </div>
        </section>

        <section id="galeria">
          <h2>Galeria</h2>
          <div className="grid grid-3 gallery">
            {['/images/pao-caseiro.jpg','/images/pe-no-chao.jpg','/images/por-do-sol.jpg','/images/artesanato-natal.jpg'].map((src,i)=>(
              <img key={i} src={src} alt={"Galeria "+(i+1)} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>© {new Date().getFullYear()} {company}.</div>
          <div className="center">{slogan}</div>
          <div className="end"><a href="mailto:mari.suliani@gmail.com">Contato</a></div>
        </div>
      </footer>
    </div>
  );
}
