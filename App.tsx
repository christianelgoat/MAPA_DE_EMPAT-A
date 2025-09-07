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

  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
       {/* Background */}
       <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-md"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      />
      <div className="absolute inset-0 bg-black opacity-40" />
      
      {/* Foreground content with zoom */}
      <div 
        ref={containerRef}
        className="relative min-h-screen overflow-auto"
      >
        <div 
          className="transition-transform duration-200 ease-out origin-top" 
          style={{ transform: `scale(${scale})` }}
        >
          <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
            <header className="text-center mb-12 p-4">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Mapa de Empatía
              </h1>
              <p className="mt-2 text-base text-gray-200">
                Una visualización interactiva de la experiencia del usuario.
              </p>
            </header>

            <main>
              {/* Desktop Layout */}
              <div className="hidden lg:block relative h-[1080px] mb-16">
                {/* Top: Thinks & Feels */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl">
                  <MapSection {...empathyMapData.thinksAndFeels} />
                </div>

                {/* Middle Row Container - Using Grid for robust spacing */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full grid grid-cols-[1fr_auto_1fr] items-center gap-x-16 xl:gap-x-24 px-4">
                  {/* Left: Hears */}
                  <div className="justify-self-start">
                    <MapSection {...empathyMapData.hears} className="min-h-[420px] max-w-md" />
                  </div>

                  {/* Center: Image */}
                  <div className="w-52 h-52 rounded-full shadow-2xl flex items-center justify-center p-1 border-4 border-white shrink-0">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Perfil de usuario"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Right: Sees */}
                  <div className="justify-self-end">
                    <MapSection {...empathyMapData.sees} className="min-h-[420px] max-w-md" />
                  </div>
                </div>
                
                {/* Bottom: Says & Does */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl">
                   <MapSection {...empathyMapData.saysAndDoes} />
                </div>
              </div>
              
              {/* Stacked Layout for Mobile/Tablet */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:hidden">
                <MapSection {...empathyMapData.thinksAndFeels} />
                <MapSection {...empathyMapData.sees} />
                <MapSection {...empathyMapData.hears} />
                <MapSection {...empathyMapData.saysAndDoes} />
              </div>

              {/* Bottom Sections */}
              <div className="mt-12 border-t-4 border-red-500 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <MapSection {...empathyMapData.efforts} />
                  <MapSection {...empathyMapData.results} />
                  <MapSection {...empathyMapData.painPoints} />
                  <MapSection {...empathyMapData.benefits} />
                </div>
              </div>
            </main>

            <footer className="text-center mt-16 py-6 border-t border-gray-500">
                <p className="text-gray-300 font-semibold">Creado con React, TypeScript y Tailwind CSS.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;