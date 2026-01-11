
import React from 'react';
import { PRIMARY_COLOR } from '../constants';

interface HeaderProps {
  progress: number;
}

const Header: React.FC<HeaderProps> = ({ progress }) => {
  return (
    <header className="w-full pt-8 pb-4 px-4 bg-white/80 backdrop-blur-md sticky top-0 z-30 flex flex-col items-center">
      <div className="w-full max-w-[280px] bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-700 ease-in-out rounded-full"
          style={{ 
            width: `${progress}%`,
            backgroundColor: PRIMARY_COLOR
          }}
        />
      </div>
    </header>
  );
};

export default Header;
