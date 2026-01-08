import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnvelopeSimple, LockKey, ArrowRight } from '@phosphor-icons/react';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simula delay de rede
    setTimeout(() => {
      navigate('/app');
    }, 1200);
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-navy animate-fade-in">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/60 to-navy"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-end md:justify-center pb-0 md:px-4">
        <div className="flex flex-col items-center justify-center mb-8 md:mb-10 animate-slide-up">
          <div className="w-16 h-16 bg-emerald rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald/30 mb-4 transform -rotate-3 border-4 border-navy/20 backdrop-blur-sm">
            <span className="text-navy font-bold text-2xl">LP</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">LotePro</h1>
          <p className="text-gray-300 text-sm mt-1">Gestão Inteligente</p>
        </div>

        <div className="w-full md:w-[400px] bg-white rounded-t-[2.5rem] md:rounded-[2rem] p-8 pb-12 md:pb-8 shadow-soft animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-navy">Acessar Conta</h2>
            <div className="w-2 h-2 rounded-full bg-emerald animate-pulse"></div>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-3.5 flex items-center gap-3 border border-gray-100 focus-within:ring-2 focus-within:ring-emerald focus-within:border-transparent transition-all group">
              <EnvelopeSimple className="text-gray-400 group-focus-within:text-emerald text-xl ml-1" />
              <input type="email" required defaultValue="admin@lotepro.com" placeholder="E-mail corporativo" className="bg-transparent w-full outline-none text-sm font-medium text-navy placeholder-gray-400" />
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-3.5 flex items-center gap-3 border border-gray-100 focus-within:ring-2 focus-within:ring-emerald focus-within:border-transparent transition-all group">
              <LockKey className="text-gray-400 group-focus-within:text-emerald text-xl ml-1" />
              <input type="password" required defaultValue="123456" placeholder="Sua senha" class="bg-transparent w-full outline-none text-sm font-medium text-navy placeholder-gray-400" />
            </div>
            
            <button type="submit" disabled={loading} className={`w-full bg-navy text-white py-4 rounded-2xl font-bold text-base shadow-xl shadow-navy/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2 hover:bg-navy_light ${loading ? 'opacity-90 cursor-not-allowed' : ''}`}>
              {loading ? <div className="btn-spinner"></div> : (
                <><span>Entrar no Sistema</span><ArrowRight /></>
              )}
            </button>
            
            <div className="flex justify-between items-center mt-6 text-xs text-gray-400 px-1">
              <a href="#" className="hover:text-navy transition-colors">Esqueci a senha</a>
              <a href="#" className="hover:text-navy transition-colors">Ajuda</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}