import React from 'react';

interface MapSectionProps {
  title: string;
  content: string[];
  className?: string;
  titleColor?: string;
}

export const MapSection: React.FC<MapSectionProps> = ({ 
  title, 
  content, 
  className = '', 
  titleColor = 'text-red-600 dark:text-red-500' 
}) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 dark:hover:shadow-red-500/20 transition-all duration-300 ease-in-out p-8 ${className}`}
    >
      <h2 className={`text-2xl font-bold mb-6 ${titleColor}`}>
        {title}
      </h2>
      <ul className="space-y-4">
        {content.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`flex-shrink-0 w-2 h-2 mt-2.5 mr-4 ${titleColor.replace('text-', 'bg-')}`}></span>
            <span className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};