import React from 'react';
import Chart from 'react-apexcharts';

export default function Dashboard() {
  const chartOptions = {
    chart: { type: 'area', toolbar: { show: false }, sparkline: { enabled: true } },
    stroke: { curve: 'smooth', width: 2 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.0, stops: [0, 100] } },
    colors: ['#0A2342'],
    tooltip: { fixed: { enabled: false }, x: { show: false }, y: { title: { formatter: () => 'Vendas' } }, marker: { show: false } }
  };
  
  const chartSeries = [{ name: 'Vendas', data: [30, 40, 35, 50, 49, 60, 70] }];

  const activities = [
    { id: 1, name: 'Ana Souza', status: 'Negociação', time: 'Hoje, 10:00', avatar: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Roberto Lima', status: 'Contrato', time: 'Ontem', avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Fernanda Torres', status: 'Lead', time: '2 dias atrás', avatar: 'https://i.pravatar.cc/150?u=3' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* KPI Total Vendido */}
        <div className="bg-gradient-to-br from-navy to-navy_light p-6 rounded-3xl text-white shadow-lg md:col-span-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <p className="text-blue-200 text-xs font-bold uppercase mb-1">Total Vendido</p>
          <h3 className="text-3xl font-bold">R$ 450k</h3>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="bg-emerald text-white px-2 py-0.5 rounded-md font-bold shadow-sm">+12%</span>
            <span className="opacity-70">vs mês anterior</span>
          </div>
        </div>

        {/* KPI Estoque */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 md:col-span-1">
          <p className="text-gray-400 text-xs font-bold uppercase mb-1">Estoque</p>
          <h3 className="text-3xl font-bold text-gray-800">34 <span className="text-sm text-gray-400 font-normal">/ 120</span></h3>
          <div className="w-full bg-gray-100 h-2 rounded-full mt-4 overflow-hidden">
            <div className="bg-emerald h-full rounded-full" style={{ width: '28%' }}></div>
          </div>
        </div>

        {/* Gráfico */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 md:col-span-2 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2"><h4 className="font-bold text-navy">Performance</h4></div>
          <div className="h-24 w-full">
            <Chart options={chartOptions} series={chartSeries} type="area" height="100%" width="100%" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-navy">Últimas Atividades</h3>
            <button className="text-xs font-bold text-emerald uppercase">Ver tudo</button>
          </div>
          <div className="space-y-4">
            {activities.map(c => (
              <div key={c.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                <img src={c.avatar} className="w-12 h-12 rounded-2xl bg-gray-200 object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">{c.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Novo status: <strong className="text-navy">{c.status}</strong></p>
                </div>
                <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">{c.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
           <div className="bg-emerald/10 rounded-3xl p-6 border border-emerald/20">
              <h4 className="font-bold text-emerald mb-2">Meta Mensal</h4>
              <p className="text-sm text-gray-600 mb-4">Você está a apenas <strong>2 vendas</strong> de atingir o bônus trimestral.</p>
              <button className="w-full bg-emerald text-white py-3 rounded-xl text-sm font-bold hover:bg-emerald_dark transition shadow-lg shadow-emerald/20">Ver Detalhes</button>
           </div>
        </div>
      </div>
    </div>
  );
}