import React from 'react';

interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return value === index ? <div>{children}</div> : null;
};

export default TabPanel;
