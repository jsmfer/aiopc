import { useEffect, useRef, useState } from 'react';
import { Building2, Train, Landmark, Building, Database, ArrowRight } from 'lucide-react';
import SceneCard from '../components/SceneCard';
import type { Field } from '../data/scenes';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Train,
  Palace: Landmark,
  City: Building,
  Database,
};

interface FieldSectionProps {
  field: Field;
  index: number;
}

export default function FieldSection({ field, index }: FieldSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = iconMap[field.icon] || Database;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: isEven 
          ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
          : 'linear-gradient(180deg, #0f172a 0%, #0f172a 100%)'
      }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Side Gradient */}
        <div 
          className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-1/3 h-full opacity-30`}
          style={{
            background: `linear-gradient(${isEven ? '90deg' : '270deg'}, ${field.color}08 0%, transparent 70%)`
          }}
        />
        
        {/* Top Line */}
        <div 
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background: `linear-gradient(${isEven ? '90deg' : '270deg'}, transparent 0%, ${field.color}30 50%, transparent 100%)`
          }}
        />

        {/* Floating Orb */}
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: field.color }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Left: Title & Icon */}
            <div className="flex items-start gap-6">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                style={{ 
                  backgroundColor: `${field.color}20`,
                  boxShadow: `0 0 40px ${field.color}30`
                }}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: field.color }} />
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span 
                    className="text-sm font-mono tracking-wider"
                    style={{ color: field.color }}
                  >
                    {field.subtitle}
                  </span>
                  <ArrowRight className="w-4 h-4" style={{ color: field.color }} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  {field.title}
                </h2>
                <p className="text-slate-400 max-w-2xl leading-relaxed">
                  {field.description}
                </p>
              </div>
            </div>

            {/* Right: Scene Count */}
            <div 
              className="flex items-center gap-4 px-6 py-3 rounded-2xl border"
              style={{ 
                borderColor: `${field.color}30`,
                backgroundColor: `${field.color}08`
              }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{field.scenes.length}</div>
                <div className="text-xs text-slate-400">应用场景</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scenes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {field.scenes.map((scene, sceneIndex) => (
            <div 
              key={scene.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(sceneIndex + 1) * 150}ms` }}
            >
              <SceneCard 
                scene={scene} 
                color={field.color}
                index={sceneIndex}
              />
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div 
          className={`mt-12 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className="w-24 h-1 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, transparent 0%, ${field.color}50 50%, transparent 100%)`
            }}
          />
        </div>
      </div>
    </section>
  );
}
