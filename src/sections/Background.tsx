import { useEffect, useRef, useState } from 'react';
import { GraduationCap, HeartHandshake, Lightbulb, Rocket, TrendingUp, Users } from 'lucide-react';

interface BackgroundSection {
  title: string;
  icon: React.ElementType;
  items: {
    subtitle: string;
    content: string;
  }[];
}

const backgroundData: BackgroundSection[] = [
  {
    title: "高校创新创业适配性",
    icon: GraduationCap,
    items: [
      {
        subtitle: "技术门槛与学科交叉优势",
        content: "AI开发工具的平民化趋势大幅降低了技术门槛，在校学生或个体创业者无需自建算法团队、无需重资产投入。"
      },
      {
        subtitle: "学科交叉协作模式",
        content: "计算机专业：AI模型开发与云原生部署；自动化专业：OPC UA网关与设备集成；领域专业：业务逻辑与场景需求梳理；经管专业：商业模式设计与市场运营"
      },
      {
        subtitle: "轻资产启动与快速验证",
        content: "\"单人+AI工具\"的OPC模式与高校学生的资源约束高度契合，通过AI工具替代人力职能、云服务替代重资产投入，个人或小团队能够以极低成本启动。"
      }
    ]
  },
  {
    title: "社会价值导向商业模式",
    icon: HeartHandshake,
    items: [
      {
        subtitle: "双重价值创造",
        content: "\"AI+OPC\"场景天然兼具社会价值与商业潜力，为获取政策支持、公众认可、影响力投资创造优势。"
      },
      {
        subtitle: "商业模式设计",
        content: "SaaS订阅模式；skills技能订阅模式；标准化工具型产品，按使用量或功能模块收费；效果付费模式；政府/企业购买服务"
      }
    ]
  }
];

const highlights = [
  { icon: Lightbulb, label: "技术创新", desc: "AI+OPC融合" },
  { icon: Users, label: "协作模式", desc: "学科交叉" },
  { icon: Rocket, label: "启动成本", desc: "轻资产" },
  { icon: TrendingUp, label: "商业价值", desc: "双重价值" },
];

export default function Background() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <Lightbulb className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">发布背景</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            AI&OPC机会场景
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 发布背景</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            理解AI与OPC技术融合的创新背景，探索数据要素市场化的无限机遇
          </p>
        </div>

        {/* Highlights Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-white font-semibold mb-1">{item.label}</div>
              <div className="text-slate-500 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Main Content Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {backgroundData.map((section, sectionIndex) => (
            <div 
              key={sectionIndex}
              className={`group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(sectionIndex + 2) * 200}ms` }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{section.title}</h3>
              </div>

              {/* Card Content */}
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="relative pl-6 border-l-2 border-slate-700 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all" />
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">{item.subtitle}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-tr-3xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
