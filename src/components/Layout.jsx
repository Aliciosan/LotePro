import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { SquaresFour, MapTrifold, Users, SignOut, Bell } from '@phosphor-icons/react';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  
  const navItems = [
    { path: '/app', icon: SquaresFour, label: 'Início', mobLabel: 'Início' },
    { path: '/app/map', icon: MapTrifold, label: 'Mapa Geral', mobLabel: 'Mapa' },
    { path: '/app/clients', icon: Users, label: 'Clientes', mobLabel: 'Clientes' },
  ];

  const getHeaderTitle = () => {
    if (location.pathname === '/app') return 'Visão Geral';
    if (location.pathname === '/app/map') return 'Mapa de Lotes';
    if (location.pathname === '/app/clients') return 'Clientes';
    return 'LotePro';
  };

  return (
    <div className="flex h-screen w-full bg-lightbg">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-navy text-white h-full shadow-xl z-20 shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald rounded-lg flex items-center justify-center font-bold text-navy">LP</div>
          <h1 className="text-xl font-bold tracking-tight">LotePro</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <button key={item.path} onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left text-sm font-medium ${isActive(item.path) ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
              <item.icon className="text-xl" weight={isActive(item.path) ? "fill" : "regular"} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={() => navigate('/')} className="flex items-center gap-3 px-2 w-full hover:bg-white/5 p-2 rounded-lg transition-colors text-left group">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold border border-white/20">CS</div>
            <div className="text-xs flex-1">
              <p className="font-bold group-hover:text-white">Carlos Silva</p>
              <p className="opacity-60 group-hover:text-gray-300">Sair da conta</p>
            </div>
            <SignOut className="text-lg opacity-50 group-hover:opacity-100" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full relative w-full bg-lightbg overflow-hidden">
        <header className="bg-white/80 backdrop-blur border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10 shrink-0 sticky top-0">
           <div className="flex items-center gap-2 md:hidden">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-white text-xs font-bold">LP</div>
            <h2 className="font-bold text-navy">{getHeaderTitle()}</h2>
          </div>
          <h2 className="hidden md:block text-xl font-bold text-navy">{getHeaderTitle()}</h2>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="md:hidden w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-navy"><SignOut /></button>
            <button className="hidden md:block relative p-2 rounded-full hover:bg-gray-100 text-navy transition-colors">
              <Bell className="text-xl" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8 relative">
          <Outlet />
        </main>

        {/* Mobile Navigation */}
        <nav className="md:hidden bg-white border-t border-gray-200 fixed bottom-0 w-full px-6 py-2 flex justify-between items-center z-30 pb-safe shadow-[0_-5px_15px_rgba(0,0,0,0.03)]">
          {navItems.map((item) => (
             <button key={item.path} onClick={() => navigate(item.path)} className={`flex flex-col items-center gap-1 w-16 ${isActive(item.path) ? 'text-navy' : 'text-gray-400'}`}>
                <div className={`h-8 w-14 rounded-full flex items-center justify-center transition-colors relative ${isActive(item.path) ? 'bg-navy/10' : ''}`}>
                  <item.icon className="text-2xl z-10" weight={isActive(item.path) ? "fill" : "regular"} />
                </div>
                <span className="text-[10px] font-medium">{item.mobLabel}</span>
             </button>
          ))}
        </nav>
      </div>
    </div>
  );
}