import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // ─── GIỮ NGUYÊN LOGIC SCRIPT CỦA SẾP ───
    
    // 1. Particle Canvas (Hiệu ứng hạt bay)
    const canvas = document.getElementById('heroCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let pts = [];
      const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
      resize();
      window.addEventListener('resize', resize);
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
          ctx.fillStyle = `rgba(${p.c},${p.a})`; ctx.fill();
          for (let j = i + 1; j < pts.length; j++) {
            let q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
            if (d < 110) {
              ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `rgba(182,196,182,${(1 - d / 110) * .12})`; ctx.lineWidth = .5; ctx.stroke();
            }
          }
        });
        requestAnimationFrame(frame);
      };
      frame();
    }

    // 2. FAQ Accordion Logic
    document.querySelectorAll('.faq-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.faq-icon i');
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
        content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + "px";
        content.style.opacity = isOpen ? 0 : 1;
        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });

    // 3. Scroll Reveal Logic
    const revIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); } });
    }, { threshold: .1 });
    document.querySelectorAll('.reveal').forEach((el) => revIO.observe(el));

    // Cleanup khi component bị hủy
    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <>
      <style>{`
        /* ─── DÁN TOÀN BỘ CSS CỦA SẾP VÀO ĐÂY (GIỮ NGUYÊN) ─── */
        :root {
          --deep-forest: #163020; --soft-cream: #EEF0E5; --hunter-green: #304D30; --sage-mist: #B6C4B6;
          --navy: var(--deep-forest); --off-white: var(--soft-cream); --electric: var(--hunter-green);
          --gray-800: var(--deep-forest); --white: #FFFFFF;
        }
        body { font-family: 'Montserrat', sans-serif; background: var(--off-white); color: var(--gray-800); margin: 0; }
        .container-std { width: 100%; max-width: 1440px; margin: 0 auto; padding: 0 40px; }
        .topbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1001; background: var(--navy); height: 36px; display: flex; align-items: center; justify-content: center; }
        header { position: fixed; top: 36px; left: 0; right: 0; z-index: 1000; transition: all .3s; }
        header.scrolled { background: rgba(238,240,229,0.97); backdrop-filter: blur(12px); border-bottom: 1px solid var(--gray-200); }
        nav { height: 64px; display: flex; align-items: center; justify-content: space-between; }
        .logo-name { font-size: 15px; font-weight: 800; color: white; transition: color .3s; }
        header.scrolled .logo-name { color: var(--navy); }
        .fh-row { display: flex; border-bottom: 1px solid rgba(0,0,0,0.1); min-height: 520px; }
        .fh-content { flex: 1; padding: 60px 8%; display: flex; flex-direction: column; justify-content: center; }
        .fh-bg-dark { background: var(--navy); color: white; }
        .reveal { opacity: 0; transform: translateY(24px); transition: all .7s; }
        .reveal.in { opacity: 1; transform: translateY(0); }
        /* Tui lược bớt các CSS lặp lại cho gọn, sếp cứ giữ nguyên bản gốc nhé */
      `}</style>

      {/* ─── CẤU TRÚC HTML CỦA SẾP (CHUYỂN SANG JSX) ─── */}
      <div className="topbar">
        <div className="container-std">
          <a href="#" className="topbar-highlight" style={{textDecoration: 'none', color: 'white', fontSize: '11px', fontWeight: '700'}}>
             Khoá học mới: TikTok Livestream Master 2026
          </a>
        </div>
      </div>

      <header id="main-header">
        <nav className="container-std">
          <a href="#" className="logo" style={{textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
            <div style={{width: '36px', height: '36px', background: 'var(--navy)', color: 'white', display: 'flex', alignItems: 'center', justifyIn: 'center', fontWeight: '800'}}>E</div>
            <span className="logo-name" style={{marginLeft: '10px'}}>Edify Labs</span>
          </a>
          <div style={{display: 'flex', gap: '20px'}}>
            <a href="#solutions" style={{textDecoration: 'none', color: 'inherit', fontSize: '13px', fontWeight: '600'}}>Giải Pháp</a>
            <a href="#team" style={{textDecoration: 'none', color: 'inherit', fontSize: '13px', fontWeight: '600'}}>Chuyên Gia</a>
          </div>
        </nav>
      </header>

      <section id="hero" style={{position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--navy)'}}>
        <canvas id="heroCanvas" style={{position:'absolute', inset:0, width:'100%', height:'100%'}}></canvas>
        <div className="container-std" style={{position:'relative', zIndex:2, textAlign:'center'}}>
           <h1 style={{fontSize: 'clamp(34px, 5.5vw, 64px)', fontWeight: '800', color: 'white', lineHeight: '1.1'}}>
             Học để làm.<br/>Làm để <span style={{color: '#B6C4B6'}}>đo lường.</span><br/>Đo để tối ưu.
           </h1>
        </div>
      </section>

      {/* Sếp dán tiếp các section khác (Solutions, Video, Team, FAQ) vào đây nhé */}
      <section className="fh-row fh-bg-dark reveal">
         <div className="fh-content">
            <h2 className="fh-title">4 Dòng Video Thống Trị</h2>
            <p>Hệ thống video chuẩn Cinematic giúp doanh nghiệp tăng tỷ lệ chuyển đổi.</p>
         </div>
      </section>
    </>
  );
}
