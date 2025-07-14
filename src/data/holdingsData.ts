export interface Holding {
  symbol: string;
  name: string;
  sector: string;
  subSector: string;
  currentValue: number;
  shares: number;
  avgCostBasis: number;
  currentPrice: number;
  dayChange: number;
  dayChangePercent: number;
  totalReturn: number;
  totalReturnPercent: number;
  weight: number;
  beta: number;
  dividendYield?: number;
  peRatio?: number;
  marketCap: number;
  lastUpdated: string;
  riskMetrics: {
    volatility: number;
    sharpeRatio: number;
    maxDrawdown: number;
  };
}

export const holdingsData: Holding[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Technology",
    subSector: "Consumer Electronics",
    currentValue: 245760,
    shares: 1230,
    avgCostBasis: 165.4,
    currentPrice: 199.8,
    dayChange: 4.2,
    dayChangePercent: 2.14,
    totalReturn: 42294,
    totalReturnPercent: 20.78,
    weight: 24.58,
    beta: 1.26,
    dividendYield: 0.52,
    peRatio: 28.7,
    marketCap: 3120000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.28,
      sharpeRatio: 1.34,
      maxDrawdown: -0.15,
    }
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Technology",
    subSector: "Consumer Electronics",
    currentValue: 245760,
    shares: 1230,
    avgCostBasis: 165.4,
    currentPrice: 199.8,
    dayChange: 4.2,
    dayChangePercent: 2.14,
    totalReturn: 42294,
    totalReturnPercent: 20.78,
    weight: 24.58,
    beta: 1.26,
    dividendYield: 0.52,
    peRatio: 28.7,
    marketCap: 3120000000000,
    lastUpdated: "2025-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.28,
      sharpeRatio: 1.34,
      maxDrawdown: -0.15,
    }
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Ecommerce",
    subSector: "Consumer Electronics",
    currentValue: 245760,
    shares: 1230,
    avgCostBasis: 165.4,
    currentPrice: 199.8,
    dayChange: 4.2,
    dayChangePercent: 2.14,
    totalReturn: 42294,
    totalReturnPercent: 20.78,
    weight: 24.58,
    beta: 1.26,
    dividendYield: 0.52,
    peRatio: 28.7,
    marketCap: 3120000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.28,
      sharpeRatio: 1.34,
      maxDrawdown: -0.15,
    }
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Ecommerce",
    subSector: "Consumer Electronics",
    currentValue: 245760,
    shares: 1230,
    avgCostBasis: 165.4,
    currentPrice: 199.8,
    dayChange: 4.2,
    dayChangePercent: 2.14,
    totalReturn: 42294,
    totalReturnPercent: 20.78,
    weight: 24.58,
    beta: 1.26,
    dividendYield: 0.52,
    peRatio: 28.7,
    marketCap: 3120000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.28,
      sharpeRatio: 1.34,
      maxDrawdown: -0.15,
    }
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Automotive",
    subSector: "Consumer Electronics",
    currentValue: 245760,
    shares: 1230,
    avgCostBasis: 165.4,
    currentPrice: 199.8,
    dayChange: 4.2,
    dayChangePercent: 2.14,
    totalReturn: 42294,
    totalReturnPercent: 20.78,
    weight: 24.58,
    beta: 1.26,
    dividendYield: 0.52,
    peRatio: 28.7,
    marketCap: 3120000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.28,
      sharpeRatio: 1.34,
      maxDrawdown: -0.15,
    }
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Automotive",
    subSector: "Consumer Electronics",
    currentValue: 245760,
    shares: 1230,
    avgCostBasis: 165.4,
    currentPrice: 199.8,
    dayChange: 4.2,
    dayChangePercent: 2.14,
    totalReturn: 42294,
    totalReturnPercent: 20.78,
    weight: 24.58,
    beta: 1.26,
    dividendYield: 0.52,
    peRatio: 28.7,
    marketCap: 3120000000000,
    lastUpdated: "2024-06-22T16:00:00Z",
    riskMetrics: {
      volatility: 0.28,
      sharpeRatio: 1.34,
      maxDrawdown: -0.15,
    }
  }
];
