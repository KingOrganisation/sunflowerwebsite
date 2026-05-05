"use client";
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ChevronDown, Sun, LogIn, LogOut, FileText, UserX, LayoutDashboard } from 'lucide-react';

export default function SunflowerHome() {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-yellow-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-yellow-400 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.3)] group-hover:scale-110 transition-transform">
              <Sun className="text-black w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">SunFlower's</span>
          </div>

          {/* Links Centrali */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition">Home</a>
            <a href="#" className="hover:text-yellow-400 transition">Store</a>
            
            {/* Menu Richieste con Freccia */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-yellow-400 transition py-4">
                Richieste 
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-[#121214] border border-white/10 rounded-2xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2">
                  <a href="/candidatura" className="flex items-center gap-3 p-3 hover:bg-yellow-400 hover:text-black rounded-xl transition group">
                    <FileText className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">Richiesta Candidatura</span>
                    </div>
                  </a>
                  <a href="/unban" className="flex items-center gap-3 p-3 hover:bg-red-500 hover:text-white rounded-xl transition group mt-1">
                    <UserX className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">Richiesta Unban</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
            
            <a href="#" className="hover:text-yellow-400 transition">Regolamento</a>
          </div>

          {/* Auth Button */}
          <div>
            {session ? (
              <div className="flex items-center gap-4">
                <img src={session.user?.image!} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-yellow-400" />
                <button onClick={() => signOut()} className="p-2 hover:bg-white/5 rounded-lg transition text-red-400">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => signIn('discord')}
                className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] px-6 py-2.5 rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(88,101,242,0.4)]"
              >
                <LogIn className="w-5 h-5" />
                Accedi con Discord
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            Server Online ora
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-tight">
            IL TUO POSTO <br />NEL <span className="text-yellow-400">SOLE.</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Unisciti alla community di SunFlower's. Entra, gioca e fiorisci insieme a noi nel server più dinamico d'Italia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-300 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(250,204,21,0.2)]">
              GIOCA ORA: mc.sunflowers.it
            </button>
            <button className="w-full sm:w-auto bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition">
              Guarda lo Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}