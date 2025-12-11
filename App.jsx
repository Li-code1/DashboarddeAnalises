import { useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data2024 = [
  { mes: "Jan", vendas: 400 },
  { mes: "Fev", vendas: 300 },
  { mes: "Mar", vendas: 500 },
  { mes: "Abr", vendas: 200 },
];

const data2025 = [
  { mes: "Jan", vendas: 600 },
  { mes: "Fev", vendas: 700 },
  { mes: "Mar", vendas: 800 },
  { mes: "Abr", vendas: 650 },
];

export default function App() {
  const [ano, setAno] = useState("2024");
  const dados = ano === "2024" ? data2024 : data2025;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-gray-200 p-6 hidden md:block">
        <h1 className="text-xl font-bold mb-6">Dashboard</h1>
        <ul className="space-y-4">
          <li><a href="#" className="hover:text-indigo-400">Análises</a></li>
          <li><a href="#" className="hover:text-indigo-400">Relatórios</a></li>
          <li><a href="#" className="hover:text-indigo-400">Configurações</a></li>
        </ul>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Dashboard de Análises</h2>

        {/* Filtro */}
        <div className="flex justify-center mb-6">
          <select
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="2024">Ano 2024</option>
            <option value="2025">Ano 2025</option>
          </select>
        </div>

        {/* Gráfico responsivo */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dados}>
              <Line type="monotone" dataKey="vendas" stroke="#4f46e5" strokeWidth={3} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
