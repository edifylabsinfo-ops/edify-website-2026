import React from 'react';

const portfolioItems = [
  { id: '01', tag: 'Talking Head', title: 'Xây Dựng Uy Tín Chuyên Gia', desc: 'Đánh bại nỗi sợ ống kính - Trở thành gương mặt thương hiệu triệu view.', videoId: 'WeDea-y21zI' },
  { id: '02', tag: 'Cinematic', title: 'Đỉnh Cao Tư Duy Thẩm Mỹ', desc: 'Nâng tầm mọi khung hình trở thành thước phim điện ảnh chuyên nghiệp.', videoId: '9lUwLlJ4TgA' },
  { id: '03', tag: 'Vlog Storytelling', title: 'Nghệ Thuật Kể Chuyện Cảm Xúc', desc: 'Biến những khoảnh khắc đời thường thành hành trình đầy cảm hứng.', videoId: 'zciL5yEVrO0' },
  { id: '04', tag: 'Short Viral', title: 'Làm Chủ Cuộc Chơi Tương Tác', desc: 'Nắm trọn công thức tạo Trend - Chạm mốc 100k+ tim chỉ với điện thoại.', videoId: 'jfKF9SnGq3c' }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#EEF0E5] w-full border-t border-[#163020]/10">
      <div className="container-std py-24 text-center">
        <div className="reveal mb-20">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#304D30] uppercase mb-3">/ Chìa khóa content</div>
          <h2 className="text-4xl md:text-6xl font-black text-[#163020] uppercase tracking-tighter">
            4 Dòng Video <span className="opacity-30 italic font-light">Thống Trị.</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-[#163020]/10">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className={`flex flex-col md:flex-row min-h-[500px] border-b border-[#163020]/10 reveal ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* MEDIA SIDE */}
              <div className="flex-1 bg-[#163020] flex items-center justify-center p-10 relative overflow-hidden">
                <div className="w-full max-w-[280px] aspect-[9/16] bg-black shadow-2xl z-10">
                   <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${item.videoId}?rel=0`} title={item.tag} allowFullScreen></iframe>
                </div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              </div>

              {/* CONTENT SIDE */}
              <div className="flex-1 p-12 md:p-20 flex flex-col justify-center text-left">
                <span className="inline-block bg-[#163020] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 self-start mb-6">
                  {item.id}. {item.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-[#163020] uppercase mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#163020]/60 text-sm md:text-base leading-relaxed mb-10 font-medium italic">
                  "{item.desc}"
                </p>
                <button className="border border-[#163020] text-[#163020] px-8 py-4 font-bold text-[11px] tracking-widest uppercase hover:bg-[#163020] hover:text-white transition-all self-start">
                  Khám phá lộ trình →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
