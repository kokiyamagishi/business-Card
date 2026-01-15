
import React from 'react';
import { Mail, Phone, Globe, Facebook, Music, ChevronDown } from 'lucide-react';

const Section = ({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) => (
  <section className={`h-screen flex flex-col justify-center px-6 md:px-24 relative z-10 ${className}`}>
    {children}
  </section>
);

const Overlay: React.FC = () => {
  return (
    <div className="w-full pointer-events-none">
      <div className="pointer-events-auto">
        {/* ナビゲーション */}
        <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
          <div className="text-2xl font-bold tracking-tighter">KOKI.Y</div>
          <div className="space-x-8 text-sm font-medium hidden md:flex">
            <a href="#about" className="hover:opacity-70 transition-opacity">概要</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">お問い合わせ</a>
          </div>
        </nav>

        {/* ヒーローセクション */}
        <Section>
          <div className="max-w-4xl">
            <h2 className="text-blue-500 font-semibold tracking-widest mb-4">学園長</h2>
            <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight leading-none">
              山岸 広樹 <br />
              <span className="italic font-normal text-5xl md:text-7xl">Koki Yamagishi</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
              <span className="text-white font-semibold">イッサラポン校（Issarapon School）</span>From Laos to World
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
            <span className="text-xs tracking-widest mb-2 text-slate-500 uppercase">スクロールして見る</span>
            <ChevronDown size={20} className="text-slate-500" />
          </div>
        </Section>

        {/* お問い合わせセクション */}
        <Section>
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-12 italic">お問い合わせ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail size={24} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">メール</p>
                    <a href="mailto:info@issarapon.com" className="text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors">info@issarapon.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-indigo-600/20 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Phone size={24} className="text-indigo-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">電話番号</p>
                    <a href="tel:02059902000" className="text-xl md:text-2xl font-medium hover:text-indigo-400 transition-colors">020 5990 2000</a>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-emerald-600/20 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                    <Globe size={24} className="text-emerald-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">所属機関</p>
                    <a href="https://issarapon.com" target="_blank" className="text-xl md:text-2xl font-medium hover:text-emerald-400 transition-colors">issarapon.com</a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-end space-y-6">
                 <div className="flex space-x-4">
                  <a href="https://facebook.com/issaraponschool" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.tiktok.com/@issarapon.school" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <Music size={24} />
                  </a>
                </div>
                <p className="text-slate-500 text-sm max-w-xs">
                  © {new Date().getFullYear()} Koki Yamagishi. All rights reserved. <br />イッサラポン校 学園長
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Overlay;
