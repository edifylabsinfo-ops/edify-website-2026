import React, { useState } from 'react';
import { ChevronDown, Briefcase, Video, GraduationCap, Facebook, Smartphone, Users, School, Star, Zap, MessageCircle } from 'lucide-react';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = {
    dichvu: {
      left: [
        { icon: <Briefcase size={20}/>, title: "Agency", desc: "Triển khai quảng cáo & content toàn diện" },
        { icon: <Video size={20}/>, title: "Studio", desc: "Sản xuất video, podcast & creative content" },
        { icon: <GraduationCap size={20}/>, title: "E-Learning", desc: "Khóa học online từ cơ bản đến chuyên sâu" }
      ],
      right: [
        { icon: <Facebook size={20}/>, title: "Cho Thuê TK Facebook Ads", desc: "Tài khoản Via, BM ổn định, hạn mức cao" },
        { icon: <Smartphone size={20}/>, title: "Cho Thuê TK TikTok Ads", desc: "Agency Account chính hãng, pixel sạch" }
      ]
    },
    giaiphap: [
      { icon: <Users size={20}/>, title: "Dành cho Cá Nhân", desc: "Freelancer, Creator, Marketer tự do" },
      { icon: <School size={20}/>, title: "Dành cho Trường Học", desc: "Trung tâm đào tạo, cơ sở giáo dục" },
      { icon: <Briefcase size={20}/>, title: "Dành cho Doanh Nghiệp", desc: "SME, startup, đội marketing in-house" },
      { icon: <Star size={20}/>, title: "Chứng Nhận", desc: "Cấp chứng chỉ nghề nghiệp được công nhận" }
    ]
  };

  return (
    <nav className="fixed top-9 left-0 right-0 z-[90] bg-[#163020]/80 backdrop-blur-md border-b border-[#EEF0E5]/10 text-[#EEF0E5]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 bg-[#EEF0E5] flex items-center justify-center rounded-sm font-bold text-[#163020]">E</div>
          <div className="leading-tight uppercase tracking-tighter">
            <div className="font-bold text-lg">Edify Labs</div>
            <div className="text-[8px] opacity-50">Knowledge to Execution</div>
          </div>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-white transition-colors">Trang Chủ</a>
          
          {/* Dịch Vụ Dropdown */}
          <div 
            className="relative group h-16 flex items-center"
            onMouseEnter={() => setActiveMenu('dichvu')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-all ${activeMenu === 'dichvu' ? 'bg-[#EEF0E5] text-[#163020] px-3 py-1 rounded-md' : ''}`}>
              Dịch Vụ <ChevronDown size={14} className={`transition-transform ${activeMenu === 'dichvu' ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mega Menu Dịch Vụ */}
            {activeMenu === 'dichvu' && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] bg-white text-[#163020] shadow-2xl rounded-b-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-2">
                  <div className="p-8 border-r border-gray-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">Dịch vụ chính</p>
                    <div className="space-y-6">
                      {menus.dichvu.left.map((item, i) => (
                        <div key={i} className="flex gap-4 group/item cursor-pointer">
                          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover/item:bg-[#163020] group-hover/item:text-white transition-all">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 bg-gray-50/50">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">Tài khoản quảng cáo</p>
                    <div className="space-y-6">
                      {menus.dichvu.right.map((item, i) => (
                        <div key={i} className="flex gap-4 group/item cursor-pointer">
                          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 group-hover/item:bg-[#163020] group-hover/item:text-white transition-all">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-4 bg-[#163020]/5 rounded-lg border border-[#163020]/10">
                       <p className="text-[10px] font-bold mb-2">Hỗ trợ nhanh</p>
                       <div className="flex gap-2">
                          <button className="flex-1 text-[10px] py-2 border border-gray-300 rounded hover:bg-white transition-all">Zalo OA</button>
                          <button className="flex-1 text-[10px] py-2 border border-gray-300 rounded hover:bg-white transition-all">Messenger</button>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#163020] text-white p-4 flex justify-between items-center px-8">
                   <span className="text-xs opacity-80">Chưa biết nên chọn gói nào?</span>
                   <button className="text-xs font-bold flex items-center gap-2 uppercase">Nhận tư vấn miễn phí <Zap size={12}/></button>
                </div>
              </div>
            )}
          </div>

          {/* Giải Pháp Dropdown */}
          <div 
            className="relative group h-16 flex items-center"
            onMouseEnter={() => setActiveMenu('giaiphap')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-all ${activeMenu === 'giaiphap' ? 'bg-[#EEF0E5] text-[#163020] px-3 py-1 rounded-md' : ''}`}>
              Giải Pháp <ChevronDown size={14} className={`transition-transform ${activeMenu === 'giaiphap' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeMenu === 'giaiphap' && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] bg-white text-[#163020] shadow-2xl rounded-b-xl p-8 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">Giải pháp theo đối tượng</p>
                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                  {menus.giaiphap.map((item, i) => (
                    <div key={i} className="flex gap-4 group/item cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover/item:bg-[#163020] group-hover/item:text-white transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#" className="text-sm font-medium hover:text-white transition-colors">Giới Thiệu</a>
          <a href="#" className="text-sm font-medium hover:text-white transition-colors">Blog</a>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Đăng Nhập</button>
          <button className="bg-[#EEF0E5] text-[#163020] px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all">
            Bắt đầu miễn phí
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
