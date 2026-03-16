export interface Scene {
  id: number;
  title: string;
  description: string;
  features?: string[];
  techPoints?: string[];
  metrics?: string[];
  innovations?: string[];
  coreValue?: string;
}

export interface Field {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  scenes: Scene[];
  color: string;
  icon: string;
}

export const fields: Field[] = [
  {
    id: "public",
    title: "公共数据领域",
    subtitle: "PUBLIC DATA",
    description: "政务数据智能服务、民生数据创新应用、数据治理与合规服务三大方向，依托公共数据授权运营机制，构建合规高效的数据价值释放通道。",
    color: "#3b82f6",
    icon: "Building2",
    scenes: [
      {
        id: 1,
        title: "AI+政务办事助手",
        description: "自然语言交互的政策咨询与办事导航，破解信息分散、术语专业、流程复杂三重困境。",
        metrics: ["答复准确率>90%", "好评率>90%", "需求识别率>95%"],
        techPoints: ["政策知识库构建与同步更新", "RAG架构确保回答准确可溯源", "用户意图理解与多轮对话"]
      },
      {
        id: 2,
        title: "医疗健康数据守护",
        description: "数字化健康监测与异常预警，解决数据采集标准化、分析模型准确性、医疗建议合规性三大挑战。",
        features: ["数据采集标准化，整合不同厂商设备数据", "分析模型准确性，联邦学习保护隐私协同训练", "医疗建议合规性，明确AI辅助定位，确保安全"]
      },
      {
        id: 3,
        title: "公共数据质量评估工具",
        description: "自动化的数据质量评估工具，作为SaaS服务提供给数据管理部门。",
        features: ["完整性检查", "准确性验证", "时效性评估", "一致性校验"],
        techPoints: ["结合规则引擎和机器学习，处理明确业务规则并识别复杂质量模式。"]
      }
    ]
  },
  {
    id: "transport",
    title: "交通数据领域",
    subtitle: "TRANSPORT DATA",
    description: "城市综合交通数据服务方向，通过轨道、公交、共享出行数据融合。",
    color: "#10b981",
    icon: "Train",
    scenes: [
      {
        id: 4,
        title: "多模式出行智能规划",
        description: "公交-地铁-共享交通一体化规划，提供一站式、个性化、实时化出行方案，降低空驶率。",
        features: ["多目标路径~~~优化时间、费用、舒适度", "实时状态预测~~~动态交通状况", "动态方案调整~~~实时路况响应"]
      },
      {
        id: 5,
        title: "实时客流预测与调度",
        description: "解决公共交通运力配置与客流需求的时空不匹配问题。",
        features: ["时空图神经网络~~~建模客流时空依赖关系", "强化学习调度~~~优化发车间隔与配置", "需求响应式公交~~~动态生成线路与站点"]
      }
    ]
  },
  {
    id: "culture",
    title: "文化旅游创意领域",
    subtitle: "CULTURE & TOURISM",
    description: "智能导览与体验服务、文化遗产数字化、文旅运营优化三大方向，AI技术赋能文旅服务个性化、互动化，支撑多源数据融合。",
    color: "#f59e0b",
    icon: "Palace",
    scenes: [
      {
        id: 6,
        title: "AI数字人导游",
        description: "多语言、方言解说与无障碍交互，提供个性化、互动化导览服务。",
        features: ["知识引擎 - 景区历史文化知识图谱", "大语言模型 - 开放域问答与个性化讲解", "数字人渲染 - 2D/3D形象与语音驱动"],
        innovations: ["方言与多语言支持（天津方言）", "无障碍设计（手语翻译、实时字幕）", "情感化交互（情绪识别与回应）"]
      },
      {
        id: 7,
        title: "文物智能识别与知识图谱",
        description: "高精度采集、智能识别、知识图谱构建，形成文物-人物-事件-地点-时代关联网络。",
        features: ["高精度采集 - 三维激光扫描、倾斜摄影", "智能识别 - AI自动识别类别、年代、风格", "知识图谱构建 - 整合考古报告与研究文献"]
      },
      {
        id: 8,
        title: "非遗技艺AI记录与传承",
        description: "动作捕捉与三维重建，精准记录传统技艺动作细节，生成可交互三维教学内容。",
        features: ["动作捕捉与三维重建 - 精准记录技艺动作细节", "智能教学 - 动作对比分析与实时反馈", "创新设计工具 - 传统元素参数化现代转化"]
      },
      {
        id: 9,
        title: "景区客流预测与预警",
        description: "多源数据融合预测，动态承载量评估与智能分流引导。",
        features: ["多源数据融合~门票+历史+气象", "时空分布预测~区域+时段客流", "智能分流引导~信息发布+预约"]
      },
      {
        id: 10,
        title: "文旅消费数据洞察",
        description: "游客画像构建、需求趋势预测、营销效果优化、会员生命周期管理。",
        features: ["游客画像构建，线上线下消费行为分析", "需求趋势预测，新兴消费偏好识别", "精准营销，A/B测试与归因分析"]
      },
      {
        id: 11,
        title: "文旅舆情监测与响应",
        description: "多平台信息采集、情感分析、危机预警、应对建议生成。",
        features: ["情感分析", "危机预警", "应对建议", "多平台采集"]
      }
    ]
  },
  {
    id: "governance",
    title: "城市治理领域",
    subtitle: "URBAN GOVERNANCE",
    description: "城市治理服务、公共安全与应急管理、社区智慧治理等方向，构建城市级数据融合与智能决策体系，提升城市治理现代化水平。",
    color: "#8b5cf6",
    icon: "City",
    scenes: [
      {
        id: 12,
        title: "网格化治理智能助手",
        description: "信息采集助手、政策知识库、任务智能提醒的数字化赋能。",
        features: ["信息采集助手 - 语音输入自动转结构化数据", "政策知识库 - 智能问答解答居民咨询", "任务智能提醒 - 基于紧急度优化巡查路线"]
      },
      {
        id: 13,
        title: "居民诉求智能分析",
        description: "从\"接诉即办\"到\"未诉先办\"的主动服务转型。",
        features: ["诉求热点分析 - 聚类识别高频问题", "风险预警 - 诉求量异常波动", "主动服务 - 推送服务信息"]
      },
      {
        id: 14,
        title: "城市大数据知识图谱",
        description: "多源异构数据融合与语义关联，解决数据碎片化、系统烟囱化挑战。",
        features: ["数据目录编制", "本体建模", "实体融合", "知识推理"],
        coreValue: "实现跨系统数据关联，发现隐性关系，支撑风险预警与决策支持"
      },
      {
        id: 15,
        title: "热源-管网-换热站协同优化",
        description: "全系统能效提升，热源、管网、换热站、用户全链条协同优化。",
        features: ["深度学习代理模型，快速近似水力计算", "强化学习，学习近优调度策略", "图神经网络，建模管网拓扑结构"]
      }
    ]
  },
  {
    id: "asset",
    title: "数据资产化服务领域",
    subtitle: "DATA ASSET SERVICE",
    description: "数据资产评估与定价、数据资产运营平台、数据资产金融创新三大方向，构建数据资产价值实现的全流程服务体系，支撑数据要素市场化配置。",
    color: "#ec4899",
    icon: "Database",
    scenes: [
      {
        id: 16,
        title: "自动化数据质量评估",
        description: "完整性、准确性、时效性、一致性等多维度自动化评估。",
        features: ["完整性", "准确性", "时效性", "一致性"],
        techPoints: ["结合规则引擎和机器学习，处理明确业务规则并识别复杂质量模式。"]
      },
      {
        id: 17,
        title: "数据价值评估模型",
        description: "多维评估框架：内在价值、业务价值、市场价值、战略价值。",
        features: ["内在价值~规模、质量、独特性", "业务价值~场景支撑效果", "市场价值~同类产品价格", "战略价值~核心竞争力贡献"]
      },
      {
        id: 18,
        title: "行业数据定价参考体系",
        description: "成本法、市场法、收益法等方法论探索。",
        features: ["成本法 - 采集、存储、加工成本加成", "市场法 - 同类数据产品交易价格", "收益法 - 预期收益现值法"]
      },
      {
        id: 19,
        title: "数据产品智能设计与封装",
        description: "需求洞察、产品设计、智能封装、效果追踪的敏捷开发能力。",
        features: ["需求洞察~市场分析", "产品设计~功能规格定义", "智能封装~自动清洗脱敏"]
      },
      {
        id: 20,
        title: "数据交易撮合与合规审查",
        description: "供需匹配、合规审查、交易保障的增值服务。",
        features: ["供需匹配~智能推荐算法", "合规审查~个人信息保护检测", "交易保障~质量担保与争议仲裁"]
      }
    ]
  }
];

export const backgroundInfo = {
  title: "AI&OPC机会场景发布背景",
  sections: [
    {
      title: "高校创新创业适配性",
      icon: "GraduationCap",
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
      icon: "HeartHandshake",
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
  ]
};
