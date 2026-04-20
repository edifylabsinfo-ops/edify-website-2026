import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    /* ─── TOÀN BỘ SCRIPT CỦA SẾP GIỮ NGUYÊN ─── */
    // 1. Navigation & Scroll logic
    const handleScroll = () => {
      const header = document.getElementById('main-header');
      if (window.scrollY > 60) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Particle Canvas
    const canvas = document.getElementById('heroCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let pts = [];
      const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
      resize();
      const N = window.innerWidth < 768 ? 55 : 110;
      for (let i = 0; i < N; i++) pts.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
        r: Math.random() * 1.8 + .4, c: Math.random() > .5 ? '48,77,48' : '182,196,182', a: Math.random() * .5 + .15
      });
      const frame = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pts.forEach((p, i) => {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + p.c + ',' + p.a + ')'; ctx.fill();
          for (let j = i + 1; j < pts.length; j++) {
            let q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
            if (d < 110) {
              ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = 'rgba(182,196,182,' + ((1 - d / 110) * .12) + ')'; ctx.lineWidth = .5; ctx.stroke();
            }
          }
        });
        requestAnimationFrame(frame);
      };
      frame();
    }

    // 3. Observers & Counters
    const revIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); } });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach((el) => revIO.observe(el));

    // 4. FAQ Logic
    document.querySelectorAll('.faq-btn').forEach((btn) => {
      btn.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.faq-icon i');
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
        content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + "px";
        content.style.opacity = isOpen ? 0 : 1;
        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ─── TOÀN BỘ CSS TOKENS CỦA SẾP GIỮ NGUYÊN ─── */
        :root {
          --deep-forest: #163020; --soft-cream: #EEF0E5; --hunter-green: #304D30; --sage-mist: #B6C4B6;
          --navy: var(--deep-forest); --off-white: var(--soft-cream); --electric: var(--hunter-green);
          --gray-800: var(--deep-forest); --white: #FFFFFF;
        }
        body { font-family: 'Montserrat', sans-serif; background: var(--off-white); color: var(--gray-800); margin: 0; }
        .container-std { width: 100%; max-width: 1440px; margin: 0 auto; padding: 0 40px; }
        .topbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1001; background: var(--navy); height: 36px; display: flex; align-items: center; justify-content: center; }
        .topbar-highlight { font-size: 11px; font-weight: 700; color: #FFFFFF !important; text-decoration: none; display: flex; align-items: center; gap: 6px; }
        header { position: fixed; top: 36px; left: 0; right: 0; z-index: 1000; background: transparent; transition: all .3s; }
        header.scrolled { background: rgba(238,240,229,0.97); backdrop-filter: blur(12px); border-bottom: 1px solid #B6C4B6; }
        nav { height: 64px; display: flex; align-items: center; justify-content: space-between; }
        .logo-mark { width: 36px; height: 36px; background: var(--navy); display: flex; align-items: center; justify-content: center; position: relative; }
        .logo-name { font-size: 15px; font-weight: 800; color: white; transition: color .3s; }
        header.scrolled .logo-name { color: var(--navy); }
        .nav-link { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.82); text-decoration: none; padding: 8px 14px; }
        header.scrolled .nav-link { color: #465946; }
        .btn-primary { font-size: 13px; font-weight: 700; color: white; background: var(--electric); border: none; padding: 9px 20px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 6px; }
        
        /* Layout Sections */
        .fh-row { display: flex; border-bottom: 1px solid rgba(0,0,0,0.1); min-height: 520px; }
        .fh-media { flex: 1; display: flex; align-items: center; justify-content: center; padding: 60px 40px; position: relative; }
        .fh-content { flex: 1; padding: 60px 8%; display: flex; flex-direction: column; justify-content: center; }
        .fh-bg-dark { background: var(--navy); color: white; }
        .fh-tag { font-size: 10px; font-weight: 800; background: rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 100px; margin-bottom: 20px; align-self: flex-start; }
        .fh-title { font-size: 38px; font-weight: 800; margin-bottom: 16px; }
        .reveal { opacity: 0; transform: translateY(24px); transition: all .7s; }
        .reveal.in { opacity: 1; transform: translateY(0); }
        
        /* FAQ & Team */
        .faq-panel { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; margin-bottom: 12px; }
        .faq-btn { width: 100%; padding: 20px; background: none; border: none; color: white; font-weight: 700; display: flex; justify-content: space-between; cursor: pointer; }
        .faq-content { max-height: 0; opacity: 0; overflow: hidden; transition: all .3s; }
        .team-card { background: white; border: 1px solid #B6C4B6; border-radius: 20px; padding: 32px 24px; text-align: center; }
        .team-avatar { width: 110px; height: 110px; border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.1); margin-bottom: 16px; }

        @media (max-width: 768px) {
          .fh-row { flex-direction: column !important; }
          .container-std { padding: 0 20px; }
        }
      `}</style>

      {/* ─── TOÀN BỘ CẤU TRÚC HTML CỦA SẾP GIỮ NGUYÊN ─── */}
      <div className="topbar">
        <div className="container-std">
          <a href="#" className="topbar-highlight">
            <i className="fa-solid fa-star"></i> Khoá học mới: TikTok Livestream Master 2026
          </a>
        </div>
      </div>

      <header id="main-header">
        <nav className="container-std">
          <a href="#" className="logo">
            <div className="logo-mark"><span style={{color: 'white', fontWeight: 800}}>E</span></div>
            <div style={{marginLeft: '10px', display: 'flex', flexDirection: 'column'}}>
              <span className="logo-name">Edify Labs</span>
            </div>
          </a>
          <div className="nav-links">
            <a href="#" className="nav-link">Dịch Vụ</a>
            <a href="#" className="nav-link">Giải Pháp</a>
            <a href="#" className="nav-link">Blog</a>
          </div>
          <button className="btn-primary">Bắt Đầu Miễn Phí</button>
        </nav>
      </header>

      <section id="hero" style={{position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', background:'var(--navy)', width: '100%'}}>
        <canvas id="heroCanvas" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}></canvas>
        <div className="container-std" style={{position:'relative', zIndex:2, textAlign:'center', width: '100%'}}>
          <h1 style={{fontSize:'clamp(34px,5.5vw,64px)', fontWeight:800, color:'white', marginBottom:'22px'}}>
            Học để làm.<br/>Làm để <span style={{color: 'var(--sage-mist)'}}>đo lường.</span><br/>Đo để tối ưu.
          </h1>
          <p style={{color:'rgba(255,255,255,0.6)', maxWidth:'540px', margin:'0 auto 40px'}}>
            Edify Labs thiết kế hệ sinh thái học – làm – tối ưu, giúp cá nhân và doanh nghiệp tạo ra kết quả thật.
          </p>
          <div style={{display:'flex', gap:'14px', justifyContent:'center'}}>
            <button className="btn-primary" style={{padding: '15px 30px'}}>Trải Nghiệm Ngay</button>
            <button style={{background:'transparent', border:'1px solid white', color:'white', padding:'15px 30px', borderRadius:'8px'}}>Tư Vấn</button>
          </div>
        </div>
      </section>

      <section id="video-formats" style={{background: 'var(--off-white)'}}>
        <div className="fh-row fh-bg-dark reveal">
          <div className="fh-media">
             <div style={{width: '280px', height: '500px', background: '#000', borderRadius: '16px'}}></div>
          </div>
          <div className="fh-content">
            <span className="fh-tag">1. Talking Head</span>
            <h3 className="fh-title">Xây Dựng Uy Tín</h3>
            <p style={{fontStyle: 'italic', opacity: 0.7}}>"Trở thành gương mặt thương hiệu triệu view"</p>
          </div>
        </div>
      </section>

      <section id="team" style={{padding: '96px 0'}}>
        <div className="container-std">
          <h2 style={{textAlign: 'center', marginBottom: '50px'}}>Đội Ngũ Chuyên Gia</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            <div className="team-card reveal">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300" className="team-avatar" alt="Phong" />
              <h3 className="team-name">Lê Thanh Phong</h3>
              <p className="team-role">Founder & CEO</p>
            </div>
            <div className="team-card reveal">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" className="team-avatar" alt="Tuan" />
              <h3 className="team-name">Trần Minh Tuấn</h3>
              <p className="team-role">Performance Director</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{background: 'var(--navy)', color: 'white', padding: '60px 0', textAlign: 'center'}}>
        <div className="container-std">
          <p style={{opacity: 0.5, fontSize: '12px'}}>© 2026 EDIFY LABS TRAINING AND CONSULTING. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
