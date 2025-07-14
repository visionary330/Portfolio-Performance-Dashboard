import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, BarChart, Bar, Rectangle
} from 'recharts';

import performanceData from '../data/performanceData.json';
import realWorldData from '../data/realWorldData.json';

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, Paper
} from '@mui/material';

import { BarChart3, TrendingUp, CalendarRange } from 'lucide-react';
import StatCard from '../components/StatCard';

// ------------------
// Types
// ------------------
type Benchmark = 'benchmarkSP500' | 'benchmarkRussell2000' | 'benchmarkMSCIWorld';
type VisibleBenchmarks = Record<Benchmark, boolean>;

// ------------------
// Component
// ------------------
const PerformanceChart: React.FC = () => {
  // State: benchmark toggles
  const [visibleBenchmarks, setVisibleBenchmarks] = useState<VisibleBenchmarks>({
    benchmarkSP500: true,
    benchmarkRussell2000: true,
    benchmarkMSCIWorld: true,
  });

  // State: pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleToggleBenchmark = (benchmark: Benchmark) => {
    setVisibleBenchmarks(prev => ({
      ...prev,
      [benchmark]: !prev[benchmark],
    }));
  };

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const paginatedRows = realWorldData.marketShocks.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (performanceData.length < 2) return null;

  const first = performanceData[0];
  const last = performanceData[performanceData.length - 1];
  const prev = performanceData[performanceData.length - 2];

  const totalValue = last.portfolioValue;
  const totalReturn = ((last.portfolioValue - first.portfolioValue) / first.portfolioValue) * 100;
  const monthlyReturn = ((last.portfolioValue - prev.portfolioValue) / prev.portfolioValue) * 100;

  // ------------------
  // Render
  // ------------------
  return (
    <div className="space-y-6">
      {/* Top Summary Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="Total Portfolio Value"
          value={`$${totalValue.toLocaleString()}`}
          icon={<BarChart3 className="w-6 h-6" />}
        />
        <StatCard
          title="Total Return"
          value={`${totalReturn.toFixed(2)}%`}
          delta={`${totalReturn.toFixed(2)}%`}
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <StatCard
          title="Monthly Return"
          value={`${monthlyReturn.toFixed(2)}%`}
          delta={`${monthlyReturn.toFixed(2)}%`}
          icon={<CalendarRange className="w-6 h-6" />}
        />
      </section>

      {/* Portfolio Line Chart */}
      <section className="shadow-lg p-5 bg-white rounded-lg">
        <h4 className="pb-2 text-lg font-semibold">Portfolio Performance</h4>

        <div className="flex flex-wrap justify-center items-center gap-4 pb-4">
          {(Object.keys(visibleBenchmarks) as Benchmark[]).map(bmk => (
            <label key={bmk} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={visibleBenchmarks[bmk]}
                onChange={() => handleToggleBenchmark(bmk)}
              />
              <span className="whitespace-nowrap text-sm">
                {bmk.replace('benchmark', '').replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </label>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="portfolioValue" stroke="#8884d8" />
            {visibleBenchmarks.benchmarkSP500 && (
              <Line type="monotone" dataKey="benchmarkSP500" stroke="#82ca9d" />
            )}
            {visibleBenchmarks.benchmarkRussell2000 && (
              <Line type="monotone" dataKey="benchmarkRussell2000" stroke="#ff7300" />
            )}
            {visibleBenchmarks.benchmarkMSCIWorld && (
              <Line type="monotone" dataKey="benchmarkMSCIWorld" stroke="#8884d8" />
            )}
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Bottom Grid: Cash Flow + Market Events */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Cash Flow */}
        <div className="shadow-lg p-5 bg-white rounded-lg h-[400px] flex flex-col">
          <h4 className="pb-2 text-lg font-semibold">Cash Flow</h4>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="cashFlow"
                  fill="#ffc658"
                  opacity={0.5}
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Market Events */}
        <div className="shadow-lg p-5 bg-white rounded-lg h-[400px] flex flex-col">
          <h4 className="pb-2 text-lg font-semibold">Market Events</h4>
          <div className="flex-1 overflow-y-auto">
            <TableContainer component={Paper} elevation={0}>
              <Table className="min-w-[250px] table-fixed" aria-label="market events table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className="w-[40%]">Date</TableCell>
                    <TableCell align="center" className="w-[30%]">Event</TableCell>
                    <TableCell align="center" className="w-[30%]">Impact (%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedRows.map(row => (
                    <TableRow key={row.date}>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">{(row.impact * 100).toFixed(2)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <TablePagination
            component="div"
            count={realWorldData.marketShocks.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            labelRowsPerPage="Rows per page"
          />
        </div>
      </section>
    </div>
  );
};

export default PerformanceChart;
