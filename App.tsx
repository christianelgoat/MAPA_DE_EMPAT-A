import React, { useState, useRef, useEffect } from 'react';
import { MapSection } from './components/MapSection';
import { empathyMapData } from './constants';

const App: React.FC = () => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      setScale((prevScale) => {
        const newScale = prevScale - event.deltaY * 0.001;
        return Math.min(Math.max(0.7, newScale), 2); // Clamp scale between 0.7x and 2x
      });
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen text-gray-800 dark:text-gray-200 font-sans overflow-hidden" 
      style={backgroundStyle}
    >
       <div 
        className="transition-transform duration-200 ease-out origin-top" 
        style={{ transform: `scale(${scale})` }}
      >
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
          <header className="text-center mb-12 bg-black bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
              Mapa de Empatía
            </h1>
            <p className="mt-2 text-lg text-gray-200">
              Una visualización interactiva de la experiencia del usuario.
            </p>
          </header>

          <main>
            {/* Desktop Layout */}
            <div className="hidden lg:block relative h-[960px] mb-16">
              {/* Top: Thinks & Feels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl">
                <MapSection {...empathyMapData.thinksAndFeels} />
              </div>

              {/* Left: Hears */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full max-w-sm xl:max-w-md">
                <MapSection {...empathyMapData.hears} className="min-h-[420px]" />
              </div>

              {/* Center: Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full shadow-2xl flex items-center justify-center p-1 border-4 border-white dark:border-gray-700">
                <img 
                  src="https://images.pexels.com/photos/7792815/pexels-photo-7792815.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Gerenta de restaurante"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Right: Sees */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full max-w-sm xl:max-w-md">
                <MapSection {...empathyMapData.sees} className="min-h-[420px]" />
              </div>
              
              {/* Bottom: Says & Does */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl">
                 <MapSection {...empathyMapData.saysAndDoes} />
              </div>
            </div>
            
            {/* Stacked Layout for Mobile/Tablet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:hidden">
              <MapSection {...empathyMapData.thinksAndFeels} />
              <MapSection {...empathyMapData.sees} />
              <MapSection {...empathyMapData.hears} />
              <MapSection {...empathyMapData.saysAndDoes} />
            </div>

            {/* Bottom Sections */}
            <div className="mt-12 border-t-4 border-red-500 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <MapSection {...empathyMapData.efforts} titleColor="text-orange-500 dark:text-orange-400" />
                <MapSection {...empathyMapData.results} titleColor="text-green-500 dark:text-green-400" />
                <MapSection {...empathyMapData.painPoints} titleColor="text-red-600 dark:text-red-500" />
                <MapSection {...empathyMapData.benefits} titleColor="text-sky-500 dark:text-sky-400" />
              </div>
            </div>
          </main>

          <footer className="text-center mt-16 py-6 border-t border-gray-200 dark:border-gray-800 backdrop-blur-sm">
              <p className="text-gray-200 dark:text-gray-300 font-semibold">Creado con React, TypeScript y Tailwind CSS.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;