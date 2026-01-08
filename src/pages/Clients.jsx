import { useEffect, useState } from 'react';
import { MagnifyingGlass, WhatsappLogo } from '@phosphor-icons/react';
import { supabase } from '../supabase'; // Importe a conexão

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar do Supabase
  useEffect(() => {
    async function fetchClients() {
      const { data, error } = await supabase
        .from('clients')
        .select('*');
      
      if (!error) setClients(data);
      setLoading(false);
    }
    fetchClients();
  }, []);

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* ... (Cabeçalho igual ao anterior) ... */}
      
      {loading ? (
        <p className="text-center text-gray-500 mt-10">Carregando clientes...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map(c => (
             <div key={c.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all relative group">
                <div className="absolute top-4 right-4"><span className="text-[10px] px-2 py-1 rounded-lg bg-gray-50 text-gray-600 font-bold uppercase border border-gray-100">{c.status}</span></div>
                <div className="flex items-center gap-4 mb-4">
                   <img src={c.avatar} className="w-14 h-14 rounded-2xl border-2 border-white shadow-sm bg-gray-100 object-cover" />
                   <div><h4 className="font-bold text-navy text-base">{c.name}</h4><p className="text-xs text-gray-400">Interesse: <strong className="text-navy">{c.lot}</strong></p></div>
                </div>
                {/* ... (Botões iguais ao anterior) ... */}
             </div>
          ))}
        </div>
      )}
    </div>
  );
}