// components/DealsChart.tsx
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Jan', agents: 12, clients: 8 },
  { name: 'Feb', agents: 18, clients: 12 },
  { name: 'Mar', agents: 22, clients: 15 },
  { name: 'Apr', agents: 19, clients: 13 },
  { name: 'May', agents: 25, clients: 20 },
  { name: 'Jun', agents: 30, clients: 25 },
  { name: 'Jul', agents: 27, clients: 18 },
];

const Chart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agents' | 'clients'>('agents');

  return (
    <div className="bg-white shadow-md mb-[10px] rounded-lg p-4 w-full max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[20px] font-semibold">Deals</h2>
          <p className="text-[14px] font-[500] text-gray-500">27 New Deals</p>
        </div>
        <div>
          <div className="flex gap-[5px] border-[1px] p-[5px] rounded-md border-gray-200 mb-4">
            <button
              className={`px-2 py-[2px] text-sm font-medium rounded ${
                activeTab === 'agents'
                  ? 'bg-[#F5F8FA] text-gray-600 font-bold'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveTab('agents')}
            >
              Agents
            </button>
            <button
              className={`px-2 py-[2px] text-sm font-medium rounded ${
                activeTab === 'clients'
                  ? 'bg-[#F5F8FA] text-gray-600 font-bold'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveTab('clients')}
            >
              Clients
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[292px]">
        <ResponsiveContainer>
          <BarChart data={data} barCategoryGap="25%">
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E6EF" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: '#999' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              hide
              domain={[0, (dataMax: number) => Math.ceil(dataMax / 5) * 5]}
            />
            <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
            {/* Both bars always visible */}
            <Bar
              dataKey="agents"
              fill={activeTab === 'agents' ? '#00A3FF' : '#D0E6FF'} // Active: Blue, Inactive: Light Blue
              barSize={10}
              radius={[3, 3, 0, 0]} // Rounded corners
            />
            <Bar
              dataKey="clients"
              fill={activeTab === 'clients' ? '#00A3FF' : '#EFF2F5'} // Active: Blue, Inactive: Gray
              barSize={10}
              radius={[3, 3, 0, 0]} // Rounded corners
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
