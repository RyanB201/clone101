import React from 'react';

const stats = [
  { label: 'Total Revenue', value: '$45,231.89', change: '+20.1% from last month', icon: '$' },
  { label: 'Subscriptions', value: '+2350', change: '+180.1% from last month', icon: <svg className='w-4 h-4 inline' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4'></path></svg> },
  { label: 'Sales', value: '+12,234', change: '+19% from last month', icon: <svg className='w-4 h-4 inline' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7'></path></svg> },
  { label: 'Active Now', value: '+573', change: '+201 since last hour', icon: <svg className='w-4 h-4 inline' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/><path d='M12 6v6l4 2'/></svg> },
];

const sales = [
  { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00' },
  { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00' },
  { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00' },
  { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
  { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' },
];

const GitHubIcon = (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-6 h-6">
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" clipRule="evenodd" />
  </svg>
);

export default function Dashboard() {
  return (
    <div className="w-full bg-[#18181b] min-h-[80vh] text-white rounded-2xl shadow-xl max-w-6xl mx-auto p-0 overflow-hidden border border-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-[#18181b]">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-600" />
          <span className="font-semibold">Alicia Koch</span>
          <div className="ml-8 flex gap-6">
            <span className="font-semibold text-white border-b-2 border-white pb-1">Overview</span>
            <span className="text-gray-400 hover:text-white cursor-pointer">Customers</span>
            <span className="text-gray-400 hover:text-white cursor-pointer">Products</span>
            <span className="text-gray-400 hover:text-white cursor-pointer">Settings</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input className="bg-gray-900 text-gray-200 px-3 py-1.5 rounded-md border border-gray-800 focus:outline-none" placeholder="Search..." />
          <button className="bg-gray-900 p-2 rounded-full border border-gray-800 hover:bg-gray-800 transition">{GitHubIcon}</button>
          <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-600" />
        </div>
      </nav>
      {/* Dashboard Content */}
      <div className="px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex gap-4">
            <input type="text" value="Jan 20, 2023 - Feb 09, 2023" readOnly className="bg-gray-900 text-gray-200 px-4 py-2 rounded-md border border-gray-800 focus:outline-none w-64" />
            <button className="bg-white text-black font-semibold px-5 py-2 rounded-md shadow hover:bg-gray-100 transition">Download</button>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <span className="px-5 py-2 rounded-full bg-gray-800 font-semibold text-white shadow">Overview</span>
          <span className="px-5 py-2 rounded-full text-gray-400 hover:text-white cursor-pointer">Analytics</span>
          <span className="px-5 py-2 rounded-full text-gray-400 hover:text-white cursor-pointer">Reports</span>
          <span className="px-5 py-2 rounded-full text-gray-400 hover:text-white cursor-pointer">Notifications</span>
        </div>
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#232326] rounded-2xl p-6 shadow border border-gray-800 flex flex-col gap-2">
              <div className="flex justify-between items-center text-gray-400 text-sm mb-1">
                <span>{stat.label}</span>
                <span>{stat.icon}</span>
              </div>
              <div className="text-2xl font-bold mb-1 text-white">{stat.value}</div>
              <div className="text-green-400 text-xs">{stat.change}</div>
            </div>
          ))}
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bar Chart */}
          <div className="bg-[#232326] rounded-2xl p-6 border border-gray-800 col-span-2 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            <div className="flex-1 flex flex-col justify-end">
              <svg viewBox="0 0 400 160" className="w-full h-48">
                {/* Y axis labels */}
                <text x="0" y="30" fill="#a3a3a3" fontSize="12">$6000</text>
                <text x="0" y="70" fill="#a3a3a3" fontSize="12">$4500</text>
                <text x="0" y="110" fill="#a3a3a3" fontSize="12">$3000</text>
                <text x="0" y="150" fill="#a3a3a3" fontSize="12">$0</text>
                {/* Bars */}
                <rect x="40" y="40" width="30" height="80" rx="6" fill="#fff" />
                <rect x="80" y="100" width="30" height="20" rx="6" fill="#fff" />
                <rect x="120" y="60" width="30" height="60" rx="6" fill="#fff" />
                <rect x="160" y="20" width="30" height="100" rx="6" fill="#fff" />
                <rect x="200" y="80" width="30" height="40" rx="6" fill="#fff" />
                <rect x="240" y="90" width="30" height="30" rx="6" fill="#fff" />
                <rect x="280" y="120" width="30" height="0" rx="6" fill="#fff" />
                <rect x="320" y="60" width="30" height="60" rx="6" fill="#fff" />
                <rect x="360" y="40" width="30" height="80" rx="6" fill="#fff" />
                {/* X axis labels */}
                <text x="50" y="155" fill="#a3a3a3" fontSize="12">Jan</text>
                <text x="90" y="155" fill="#a3a3a3" fontSize="12">Feb</text>
                <text x="130" y="155" fill="#a3a3a3" fontSize="12">Mar</text>
                <text x="170" y="155" fill="#a3a3a3" fontSize="12">Apr</text>
                <text x="210" y="155" fill="#a3a3a3" fontSize="12">May</text>
                <text x="250" y="155" fill="#a3a3a3" fontSize="12">Jun</text>
                <text x="290" y="155" fill="#a3a3a3" fontSize="12">Jul</text>
                <text x="330" y="155" fill="#a3a3a3" fontSize="12">Aug</text>
                <text x="370" y="155" fill="#a3a3a3" fontSize="12">Sep</text>
                <text x="410" y="155" fill="#a3a3a3" fontSize="12">Oct</text>
                <text x="450" y="155" fill="#a3a3a3" fontSize="12">Nov</text>
                <text x="490" y="155" fill="#a3a3a3" fontSize="12">Dec</text>
              </svg>
            </div>
          </div>
          {/* Recent Sales */}
          <div className="bg-[#232326] rounded-2xl p-6 border border-gray-800 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Recent Sales</h3>
            <p className="text-gray-400 text-sm mb-4">You made 265 sales this month.</p>
            <ul className="space-y-4">
              {sales.map((sale) => (
                <li key={sale.email} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" /></svg>
                    </span>
                    <div>
                      <div className="font-semibold text-white">{sale.name}</div>
                      <div className="text-gray-400 text-xs">{sale.email}</div>
                    </div>
                  </div>
                  <span className="font-semibold">{sale.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 