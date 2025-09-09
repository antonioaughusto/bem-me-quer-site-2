import React, { useState } from "react";
const company = "Bem Me Quer";
const slogan = "Ser criança é voar por sua imaginação";
export default function App(){
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const handleSubmit = (e)=>{
    e.preventDefault();
    window.location.href = `mailto:mari.suliani@gmail.com?subject=Contato — ${company}&body=Nome: ${form.nome}%0AEmail: ${form.email}%0AMensagem:%0A${form.mensagem}`;
  };
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
        <section style={{padding:"24px 0"}}>
          <div className="grid grid-2" style={{alignItems:"center"}}>
            <div>
              <div style={{display:"inline-block",background:"#fff",border:"1px solid rgba(159,216,255,.8)",padding:"6px 12px",borderRadius:999,fontSize:14}}>Educação infantil com afeto e criatividade</div>
              <h1 style={{color:"#e6007e",fontSize:28,lineHeight:1.2,margin:"8px 0 10px"}}>Um lugar onde <strong>brincar</strong> é aprender e <strong>imaginar</strong> é crescer.</h1>
              <p>A Bem Me Quer acolhe crianças em um ambiente seguro, colorido e cheio de descobertas.</p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:10}}>
                <a href="https://wa.me/54991543109" className="btn btn-primary">Agendar visita</a>
                <a href="#galeria" className="btn btn-outline">Ver galeria</a>
              </div>
            </div>
            <div className="card">
              <img src="/images/por-do-sol.jpg" alt="Foto destaque" style={{width:"100%",height:280,objectFit:"cover",borderRadius:10}}/>
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
        <section id="contato" style={{marginTop:24}}>
          <h2>Fale com a gente</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input placeholder="Seu nome" required value={form.nome} onChange={e=>setForm({...form,nome:e.target.value})} />
            <input type="email" placeholder="Seu e-mail" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
            <textarea rows="4" placeholder="Mensagem" required value={form.mensagem} onChange={e=>setForm({...form,mensagem:e.target.value})} />
            <div style={{display:"flex",gap:10}}>
              <button className="btn btn-primary" type="submit">Enviar</button>
              <a className="btn btn-outline" href="https://wa.me/54991543109">WhatsApp</a>
            </div>
          </form>
          <p style={{marginTop:8}}>
            <a href="mailto:mari.suliani@gmail.com">E-mail</a> •{" "}
            <a href="https://wa.me/54991543109">WhatsApp</a> •{" "}
            <a href="https://www.instagram.com/bem_me_quer_recreacao_?igsh=OWY5bWRvcmJ6d242" target="_blank" rel="noreferrer">Instagram</a>
          </p>
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
