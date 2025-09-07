import React from 'react';

interface MapSectionProps {
  title: string;
  content: string[];
  className?: string;
}

export const MapSection: React.FC<MapSectionProps> = ({ 
  title, 
  content, 
  className = '', 
}) => {
  const titleColor = 'text-red-500';
  const bulletColor = 'bg-red-500';

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out p-8 ${className}`}
    >
      <h2 className={`text-xl font-bold mb-6 ${titleColor}`}>
        {title}
      </h2>
      <ul className="space-y-4">
        {content.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`flex-shrink-0 w-2 h-2 mt-2 mr-4 ${bulletColor}`}></span>
            <span className="text-gray-700 text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};