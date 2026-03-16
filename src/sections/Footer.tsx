import { Database, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI&OPC创新社区</h3>
                <p className="text-sm text-slate-400">数据要素市场化机会场景清单</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-6">
              探索人工智能与开放平台通信技术融合创新的无限可能，
              构建数据要素市场化配置的全场景应用生态，
              推动数字经济高质量发展。
            </p>
            <div className="flex gap-4">
              {['公共数据', '交通数据', '文化旅游', '城市治理', '数据资产'].map((tag, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">五大领域</h4>
            <ul className="space-y-3">
              {[
                { name: '公共数据领域', color: '#3b82f6' },
                { name: '交通数据领域', color: '#10b981' },
                { name: '文化旅游创意', color: '#f59e0b' },
                { name: '城市治理领域', color: '#8b5cf6' },
                { name: '数据资产化服务', color: '#ec4899' },
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href={`#${item.name}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                  >
                    <span 
                      className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">天津市河北区诺德中心19层</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">hbqszjt@tj.gov.cn</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">15822224192</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm font-medium">发布机构</span>
              </div>
              <p className="text-slate-400 text-sm">天津数据资产登记评估中心</p>
              <p className="text-slate-500 text-xs mt-1">2026年3月17日</p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-slate-800 mb-8">
          {[
            { label: '应用场景', value: '20+' },
            { label: '覆盖领域', value: '5大' },
            { label: '技术融合', value: 'AI+OPC' },
            { label: '服务模式', value: '全链条' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© 2026 AI&OPC创新社区. All rights reserved.</p>
          <p>技术支持：津数科技（天津）有限公司</p>
        </div>
      </div>
    </footer>
  );
}
