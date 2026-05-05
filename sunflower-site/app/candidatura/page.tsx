"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CandidaturaPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center">Caricamento...</div>;
  if (!session) redirect("/");

  return (
    <div className="min-h-screen bg-[#0a0a0c] py-20 px-6">
      <div className="max-w-2xl mx-auto bg-[#121214] border border-white/5 p-8 rounded-3xl">
        <h2 className="text-3xl font-black mb-2 text-yellow-400">CANDIDATURA STAFF</h2>
        <p className="text-gray-400 mb-8">Ciao {session.user?.name}, compila il modulo per unirti al team di SunFlower's.</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-gray-500">Nome In-Game</label>
            <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-yellow-400 outline-none transition" placeholder="Es. Steve_Jobs" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-gray-500">Età</label>
            <input type="number" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-yellow-400 outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-gray-500">Perché dovremmo sceglierti?</label>
            <textarea className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-yellow-400 outline-none transition h-32"></textarea>
          </div>
          <button className="w-full bg-yellow-400 text-black font-black py-4 rounded-xl hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/10">
            INVIA CANDIDATURA
          </button>
        </form>
      </div>
    </div>
  );
}