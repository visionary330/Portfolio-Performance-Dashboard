import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { TrendingUp, PieChart as Piechart1, } from 'lucide-react';
import Header from '../components/Header';

const Dashboard: React.FC = () => {
  // Base link style
  const baseLinkClasses =
    'p-3 transition-all duration-300 hover:text-[#155dfc] hover:border-b-2 hover:border-[#155dfc] flex items-center space-x-2';

  // Helper for NavLink
  const getNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `${baseLinkClasses} ${isActive ? 'text-[#155dfc] border-b-2 border-[#155dfc] flex items-center space-x-2' : ''}`;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <nav>
        <ul className="flex items-center w-[95%] lg:w-[74%] mx-auto pt-6 border-b border-[#0000000f]">
          <li>
            <NavLink to="/performance" className={getNavLinkClasses}>
              <TrendingUp className="w-4 h-4" />
             <span>Performance</span> 
            </NavLink>
          </li>
          <li>
            <NavLink to="/holdings" className={getNavLinkClasses}>
              <Piechart1 className="w-4 h-4" />
             <span>Holdings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="py-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
