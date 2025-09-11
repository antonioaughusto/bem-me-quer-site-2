import React, { useState, useEffect } from "react";

const brand = { pink:"#e6007e", lightBlue:"#9fd8ff" };
const company = "Bem Me Quer";
const slogan = "Ser criança é voar por sua imaginação";

export default function App(){
  const [form, setForm] = useState({ nome:"", email:"", mensagem:"" });
  const phone = "54991543109";
  const email = "mari.suliani@gmail.com";

  // ===== Lightbox da galeria (hooks no topo do componente) =====
  const galleryImages = [
    '/images/artesanato-natal.jpg',
    '/images/brincadeiras-1.jpg',
    '/images/brincadeiras-2.jpg',
    '/images/brincadeiras-3.jpg',
    '/images/brincadeiras-4.jpg',
    '/images/brincadeiras-5.jpg',
    '/images/brincadeiras-6.jpg',
    '/images/brincadeiras-7.jpg',
    '/images/brincadeiras-8.jpg',
    '/images/brincadeiras-9.jpg',
    '/images/brincadeiras-10.jpg',
    '/images/brincadeiras-11.jpg',
    '/images/brincadeiras-12.jpg',
    '/images/brincadeiras-13.jpg',
    '/images/brincadeiras-14.jpg',
    '/images/brincadeiras-15.jpg',
    '/images/brincadeiras-16.jpg',
    '/images/brincadeiras-17.jpg',
    '/images/brincadeiras-18.jpg',
    '/images/brincadeiras-19.jpg',
    '/images/pao-caseiro.jpg',
    '/images/pe-no-chao.jpg',
    '/images/por-do-sol.jpg'
  ];

  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  useEffect(() => {
    if (!lbOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLbOpen(false);
      if (e.key === 'ArrowRight') setLbIndex((i) => (i + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft')  setLbIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lbOpen, galleryImages.length]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    window.location.href = `mailto:${email}?subject=Contato — ${company}&body=Nome: ${form.nome}%0AEmail: ${form.email}%0AMensagem:%0A${form.mensagem}`;
  };

  return (
    <div>
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <img src="/logo.png" alt="Logo Bem Me Quer" className="logo" />
            <div>
              <div className="brand-title">{company}</div>
              <div style={{fontSize:12}}>{slogan}</div>
            </div>
          </div>
          <div style={{display:'flex',gap:10}}>
            <a href="#sobre">Sobre</a>
            <a href="#programas">Programas</a>
            <a href="#galeria">Galeria</a>
            <a href="#contato">Contato</a>
            <a href={`https://wa.me/${phone}`} className="btn btn-primary">WhatsApp</a>
          </div>
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section className="hero" id="inicio">
          <span className="badge">Educação infantil com afeto e criatividade</span>
          <h1>Um lugar onde <strong>brincar</strong> é aprender e <strong>imaginar</strong> é crescer.</h1>
          <p>A {company} acolhe crianças em um ambiente seguro, colorido e cheio de descobertas.</p>
          <div className="grid grid-2" style={{alignItems:'center',marginTop:12}}>
            <div className="card">
              <img src="/images/por-do-sol.jpg" alt="Foto destaque" style={{width:'100%',height:280,objectFit:'cover',borderRadius:10}}/>
            </div>
            <div className="card">
              <p>Contato com a natureza, artes e musicalização, alfabetização lúdica e uma equipe carinhosa e qualificada.</p>
              <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
                <a href={`https://wa.me/${phone}`} className="btn btn-primary">Agendar visita</a>
                <a href="#programas" className="btn btn-outline">Conhecer programas</a>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" style={{padding:"10px 0"}}>
          <div className="grid grid-2" style={{alignItems:'start'}}>
            <div>
              <h2>Sobre nós</h2>
              <p>Na Bem Me Quer, acreditamos que a infância é o período mais criativo da vida. Nosso trabalho une afeto, brincadeira e projetos interdisciplinares que desenvolvem autonomia, coordenação motora, comunicação e socialização. <strong>As famílias participam ativamente das experiências.</strong></p>
              <a href="#contato" className="btn btn-primary" style={{marginTop:10,display:'inline-block'}}>Conheça nossa proposta pedagógica</a>
            </div>
            <div className="grid">
              <img src="/images/brincadeiras-13.jpg" alt="Atividades culinárias" style={{width:'100%',height:160,objectFit:'cover',borderRadius:10}}/>
              <img src="/images/brincadeiras-18.jpg" alt="Pés na grama" style={{width:'100%',height:160,objectFit:'cover',borderRadius:10}}/>
            </div>
          </div>
        </section>

        {/* PROGRAMAS */}
        <section id="programas" style={{padding:"10px 0"}}>
          <h2>Programas</h2>
          <div className="grid grid-3">
            <div className="card"><strong>Berçário & Maternal</strong><p>Estímulos sensoriais e musicalização.</p></div>
            <div className="card"><strong>Educação Infantil</strong><p>Projetos lúdicos e alfabetização inicial.</p></div>
            <div className="card"><strong>Tempo Integral</strong><p>Artes, culinária e relaxamento.</p></div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" style={{padding:"10px 0"}}>
          <h2>Galeria</h2>

          {/* grade de miniaturas */}
          <div className="grid grid-3 gallery">
            {galleryImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Galeria ${i+1}`}
                onClick={() => { setLbIndex(i); setLbOpen(true); }}
              />
            ))}
          </div>

          {/* overlay/lightbox */}
          {lbOpen && (
            <div className="lightbox" onClick={() => setLbOpen(false)} role="dialog" aria-modal="true">
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button
                  className="lightbox-close"
                  onClick={() => setLbOpen(false)}
                  aria-label="Fechar"
                >×</button>

                <button
                  className="lightbox-arrow left"
                  onClick={() => setLbIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
                  aria-label="Anterior"
                >‹</button>

                <img
                  className="lightbox-img"
                  src={galleryImages[lbIndex]}
                  alt={`Imagem ampliada ${lbIndex+1}`}
                />

                <button
                  className="lightbox-arrow right"
                  onClick={() => setLbIndex((i) => (i + 1) % galleryImages.length)}
                  aria-label="Próxima"
                >›</button>
              </div>
            </div>
          )}
        </section>

        {/* CONTATO */}
        <section id="contato" style={{padding:"10px 0"}}>
          <h2>Fale com a gente</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input placeholder="Seu nome" required value={form.nome} onChange={(e)=>setForm({...form,nome:e.target.value})} />
            <input type="email" placeholder="Seu e-mail" required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
            <textarea rows="4" placeholder="Mensagem" required value={form.mensagem} onChange={(e)=>setForm({...form,mensagem:e.target.value})} />
            <div style={{display:"flex",gap:10}}>
              <button className="btn btn-primary" type="submit">Enviar</button>
              <a className="btn btn-outline" href={`https://wa.me/${phone}`}>WhatsApp</a>
            </div>
          </form>
          <p style={{marginTop:8}}>
            <a href={`mailto:${email}`}>E-mail</a> •{" "}
            <a href={`https://wa.me/${phone}`}>WhatsApp</a> •{" "}
            <a href="https://www.instagram.com/bem_me_quer_recreacao_?igsh=OWY5bWRvcmJ6d242" target="_blank" rel="noreferrer">Instagram</a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>© {new Date().getFullYear()} {company}.</div>
          <div className="center">{slogan}</div>
          <div className="end"><a href={`mailto:${email}`}>Contato</a></div>
        </div>
      </footer>
    </div>
  );
}
