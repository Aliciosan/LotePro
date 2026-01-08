import { useState } from 'react';
import { X, ArrowRight, Compass, Ruler } from '@phosphor-icons/react';

export default function MapPage() {
  const [selectedLot, setSelectedLot] = useState(null);

  const openDrawer = (lotId, price) => {
    setSelectedLot({ id: lotId, price: price });
  };

  const closeDrawer = () => {
    setSelectedLot(null);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-180px)] md:h-[calc(100vh-100px)] animate-fade-in relative">
      {/* Sidebar Filtros */}
      <div className="md:w-64 flex flex-col gap-3 shrink-0">
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
          <label className="text-xs font-bold text-gray-400 uppercase">Empreendimento</label>
          <select className="w-full mt-2 p-2.5 bg-gray-50 rounded-xl text-sm font-bold text-navy border-none outline-none">
            <option>Horizonte Sul</option>
            <option>Jardim Norte</option>
          </select>
        </div>
        
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex-1 overflow-y-auto hidden md:block">
          <h4 className="font-bold text-navy mb-3 text-sm">Status</h4>
          <div className="space-y-2 text-sm">
             <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"><div className="w-3 h-3 rounded-full bg-emerald shadow-sm"></div> Disponível</div>
             <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"><div className="w-3 h-3 rounded-full bg-ochre shadow-sm"></div> Reservado</div>
             <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"><div className="w-3 h-3 rounded-full bg-softred shadow-sm"></div> Vendido</div>
          </div>
        </div>
      </div>

      {/* Mapa SVG */}
      <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-200 relative overflow-hidden flex items-center justify-center" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png')" }}>
        
        {/* Legenda Mobile Flutuante */}
        <div className="md:hidden absolute top-4 left-4 flex gap-2 justify-center z-10">
           <span className="bg-white/90 backdrop-blur px-2.5 py-1.5 rounded-xl text-[10px] font-bold shadow-sm border border-gray-100 flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald"></div> Livre</span>
           <span className="bg-white/90 backdrop-blur px-2.5 py-1.5 rounded-xl text-[10px] font-bold shadow-sm border border-gray-100 flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-ochre"></div> Reserva</span>
        </div>

        <svg viewBox="0 0 500 400" className="w-full h-full max-h-[80vh]" preserveAspectRatio="xMidYMid meet">
          <path d="M250,0 L250,400 M0,200 L500,200" stroke="#f3f4f6" strokeWidth="40" />
          
          <g transform="translate(20,20)">
            <path d="M0,0 L200,0 L200,150 L0,150 Z" className="lot-shape sold" onClick={() => alert('Lote Vendido')} />
            <text x="100" y="75" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold" pointerEvents="none">L-01</text>
          </g>
          
          <g transform="translate(280,20)">
            <path d="M0,0 L200,0 L200,150 L0,150 Z" className="lot-shape available drop-shadow-md" onClick={() => openDrawer('L-02', 155000)} />
            <text x="100" y="75" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold" pointerEvents="none">L-02</text>
          </g>
          
          <g transform="translate(20,230)">
            <path d="M0,0 L200,0 L200,150 L0,150 Z" className="lot-shape reserved" onClick={() => alert('Reservado')} />
            <text x="100" y="75" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold" pointerEvents="none">L-03</text>
          </g>
          
          <g transform="translate(280,230)">
            <path d="M0,0 L200,0 L200,150 L0,150 Z" className="lot-shape available drop-shadow-md" onClick={() => openDrawer('L-04', 160000)} />
            <text x="100" y="75" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold" pointerEvents="none">L-04</text>
          </g>
        </svg>
      </div>

      {/* Drawer Overlay */}
      {selectedLot && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[60] transition-opacity duration-300" onClick={closeDrawer}></div>
      )}

      {/* Drawer Panel (Mobile Bottom Sheet / Desktop Sidebar) */}
      <div className={`fixed inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto md:w-[450px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 flex flex-col md:rounded-l-3xl rounded-t-3xl h-[85vh] md:h-full ${selectedLot ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-x-full md:translate-y-0'}`}>
        {selectedLot && (
          <div className="h-full flex flex-col relative bg-white rounded-t-3xl md:rounded-none overflow-hidden">
            
            {/* Botão Fechar */}
            <button onClick={closeDrawer} className="absolute top-4 right-4 z-20 bg-black/20 backdrop-blur p-2 rounded-full text-white hover:bg-navy hover:text-white transition-colors shadow-lg">
                <X size={20} weight="bold" />
            </button>
            
            {/* Imagem do Lote */}
            <div className="h-56 md:h-72 relative shrink-0">
               <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" />
               <div className="absolute bottom-0 w-full bg-gradient-to-t from-navy via-navy/60 to-transparent p-6 pt-16">
                  <span className="bg-emerald text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase mb-1 inline-block">Disponível</span>
                  <h2 className="text-3xl font-bold text-white">{selectedLot.id}</h2>
                  <p className="text-gray-200 text-sm">Residencial Horizonte Sul</p>
               </div>
            </div>

            {/* Conteúdo com Scroll */}
            <div className="flex-1 overflow-y-auto p-6 md:px-8">
               <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-4">
                  <div><p className="text-gray-400 text-xs uppercase font-bold">Valor</p><h3 className="text-2xl font-bold text-navy">R$ {selectedLot.price.toLocaleString('pt-BR')}</h3></div>
                  <div className="text-right"><p className="text-gray-400 text-xs uppercase font-bold">Área</p><p className="text-lg font-bold text-gray-700">360 m²</p></div>
               </div>
               <h4 className="font-bold text-navy mb-4 text-sm">Características</h4>
               <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-lightbg p-3 rounded-2xl flex flex-col gap-1"><Compass className="text-2xl text-navy mb-1" /><p className="text-[10px] text-gray-500 uppercase font-bold">Posição</p><p className="text-sm font-semibold">Nascente</p></div>
                  <div className="bg-lightbg p-3 rounded-2xl flex flex-col gap-1"><Ruler className="text-2xl text-navy mb-1" /><p className="text-[10px] text-gray-500 uppercase font-bold">Topografia</p><p className="text-sm font-semibold">Plana</p></div>
               </div>
               <p className="text-gray-500 text-sm leading-relaxed">
                   Este lote possui excelente localização, próximo à área de lazer e com vista privilegiada para o pôr do sol. Documentação 100% regularizada.
               </p>
            </div>

            {/* Rodapé Fixo (Botão) */}
            <div className="p-6 pt-4 border-t border-gray-100 bg-white md:rounded-bl-3xl shrink-0 pb-8 md:pb-6">
               <button className="w-full bg-navy text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-navy/20 hover:bg-navy_light transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                  Iniciar Proposta <ArrowRight weight="bold" />
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}