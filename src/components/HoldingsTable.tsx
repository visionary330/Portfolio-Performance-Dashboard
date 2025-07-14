import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { holdingsData, Holding } from '../data/holdingsData'; // Adjust your path

// Define type for sector allocation pie data
type SectorAllocation = {
  sector: string;
  value: number;
};

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00C49F'];

const HoldingsPage: React.FC = () => {
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginated holdings
  const paginatedHoldings = holdingsData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Aggregate Sector Allocation
  const totalPortfolioValue = holdingsData.reduce((sum, h) => sum + h.currentValue, 0);
  const sectorMap = holdingsData.reduce<Record<string, number>>((acc, h) => {
    acc[h.sector] = (acc[h.sector] || 0) + h.currentValue;
    return acc;
  }, {});

  const sectorAllocationData: SectorAllocation[] = Object.entries(sectorMap).map(([sector, value]) => ({
    sector,
    value: (value / totalPortfolioValue) * 100
  }));

  // Top Holdings
  const topHoldings = [...holdingsData]
    .sort((a, b) => b.currentValue - a.currentValue)
    .slice(0, 5);

  return (
    <div className="space-y-4">
      {/* Holdings Table */}
      <div className="shadow-lg p-5 bg-white rounded-lg overflow-auto">
        <div className="h-[325px] overflow-auto">
          <TableContainer component={Paper} elevation={0}>
            <Table stickyHeader aria-label="holdings table">
              <TableHead>
                <TableRow>
                  <TableCell>Symbol</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Sector</TableCell>
                  <TableCell align="right">Current Value ($)</TableCell>
                  <TableCell align="right">Shares</TableCell>
                  <TableCell align="right">Current Price ($)</TableCell>
                  <TableCell align="right">Total Return (%)</TableCell>
                  <TableCell align="right">Weight (%)</TableCell>
                  <TableCell align="right">Volatility (%)</TableCell>
                  <TableCell align="right">Sharpe Ratio</TableCell>
                  <TableCell align="right">Max Drawdown (%)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedHoldings.map((h, index) => (
                  <TableRow key={`${page}-${index}-${h.symbol}-${h.sector}`}>
                    <TableCell>{h.symbol}</TableCell>
                    <TableCell>{h.name}</TableCell>
                    <TableCell>{h.sector}</TableCell>
                    <TableCell align="right">${h.currentValue.toLocaleString()}</TableCell>
                    <TableCell align="right">{h.shares}</TableCell>
                    <TableCell align="right">{h.currentPrice.toFixed(2)}</TableCell>
                    <TableCell align="right">{h.totalReturnPercent.toFixed(2)}%</TableCell>
                    <TableCell align="right">{h.weight.toFixed(2)}%</TableCell>
                    <TableCell align="right">{(h.riskMetrics.volatility * 100).toFixed(2)}%</TableCell>
                    <TableCell align="right">{h.riskMetrics.sharpeRatio.toFixed(2)}</TableCell>
                    <TableCell align="right">{(h.riskMetrics.maxDrawdown * 100).toFixed(2)}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <TablePagination
          component="div"
          count={holdingsData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Rows per page"
        />
      </div>

      {/* Bottom Section: Sector Allocation and Top Holdings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sector Allocation Chart */}
        <div className="shadow-lg p-5 bg-white rounded-lg h-[400px] flex flex-col">
          <h4 className="pb-2 text-lg font-semibold">Sector Allocation</h4>
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  dataKey="value"
                  data={sectorAllocationData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label={({ payload }) =>
                    payload?.sector && payload?.value !== undefined
                      ? `${payload.sector} ${payload.value.toFixed(1)}%`
                      : ''
                  }
                >
                  {sectorAllocationData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Holdings List */}
        <div className="shadow-lg p-5 bg-white rounded-lg h-[400px] flex flex-col">
          <h4 className="pb-2 text-lg font-semibold">Top Holdings</h4>
          <div className="flex-1 space-y-3 overflow-y-auto">
            {topHoldings.map((h, index) => (
              <div
                key={`${index}-${h.symbol}-${h.sector}`}
                className="flex justify-between items-center border-b pb-2 last:border-b-0"
              >
                <div>
                  <p className="font-semibold">{h.symbol}</p>
                  <p className="text-sm text-gray-500">{h.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${h.currentValue.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{h.weight.toFixed(1)}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldingsPage;
