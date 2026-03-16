import { useState } from 'react';
import { ChevronDown, Sparkles, Target, Zap, Lightbulb, Gem } from 'lucide-react';

interface SceneCardProps {
  scene: {
    id: number;
    title: string;
    description: string;
    features?: string[];
    techPoints?: string[];
    metrics?: string[];
    innovations?: string[];
    coreValue?: string;
  };
  color: string;
  index: number;
}

export default function SceneCard({ scene, color, index }: SceneCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    if (scene.metrics) return Target;
    if (scene.techPoints) return Zap;
    if (scene.innovations) return Lightbulb;
    if (scene.coreValue) return Gem;
    return Sparkles;
  };

  const Icon = getIcon();

  return (
    <div 
      className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-opacity-50 transition-all duration-500 overflow-hidden"
      style={{ 
        borderColor: isExpanded ? color : undefined,
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Gradient Background on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}08 0%, transparent 50%)`
        }}
      />

      {/* Card Header */}
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span 
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  #{scene.id.toString().padStart(2, '0')}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                {scene.title}
              </h4>
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300"
          >
            <ChevronDown 
              className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Description */}
        <p className="mt-4 text-slate-400 text-sm leading-relaxed">
          {scene.description}
        </p>

        {/* Quick Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {scene.metrics && (
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
              量化指标
            </span>
          )}
          {scene.techPoints && (
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              技术要点
            </span>
          )}
          {scene.innovations && (
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              创新特色
            </span>
          )}
          {scene.features && (
            <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              核心功能
            </span>
          )}
        </div>
      </div>

      {/* Expandable Content */}
      <div 
        className={`relative overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 space-y-4">
          {/* Metrics */}
          {scene.metrics && scene.metrics.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-800/50">
              <h5 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-green-400" />
                关键指标
              </h5>
              <div className="flex flex-wrap gap-2">
                {scene.metrics.map((metric, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Points */}
          {scene.techPoints && scene.techPoints.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-800/50">
              <h5 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                技术要点
              </h5>
              <ul className="space-y-2">
                {scene.techPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          {scene.features && scene.features.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-800/50">
              <h5 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                核心功能
              </h5>
              <ul className="space-y-2">
                {scene.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Innovations */}
          {scene.innovations && scene.innovations.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-800/50">
              <h5 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-purple-400" />
                创新特色
              </h5>
              <ul className="space-y-2">
                {scene.innovations.map((innovation, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    {innovation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Core Value */}
          {scene.coreValue && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <h5 className="text-sm font-semibold text-amber-300 mb-2 flex items-center gap-2">
                <Gem className="w-4 h-4" />
                核心价值
              </h5>
              <p className="text-sm text-amber-200/80">{scene.coreValue}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
        style={{ 
          width: isExpanded ? '100%' : '0%',
          backgroundColor: color
        }}
      />
    </div>
  );
}
