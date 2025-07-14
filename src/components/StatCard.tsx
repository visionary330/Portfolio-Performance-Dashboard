import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
  delta?: string;
  icon: React.ReactNode;
};

const StatCard = ({ title, value, delta, icon }: StatCardProps) => {
  const isNegative = delta?.startsWith('-');

  return (
    <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center min-w-[250px]">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-black">{value}</p>
        {delta && (
          <p
            className={`text-sm flex items-center space-x-1 mt-1 ${isNegative ? 'text-red-600' : 'text-green-600'
              }`}
          >
            {isNegative ? (
              <ArrowDownRight className="w-4 h-4 text-red-500" />
            ) : (
              <ArrowUpRight className="w-4 h-4 text-green-500" />
            )}
            <span>{delta}</span>
          </p>
        )}
      </div>
      <div className="text-gray-400" aria-hidden="true">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;

