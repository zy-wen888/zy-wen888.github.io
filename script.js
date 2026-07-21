'use strict';

const PUBLICATIONS = [
  {
    year: 2026,
    title: 'RFLM: An RF Language Model for Instruction-Conditioned RF Processing',
    authors: ['Zhongyi Wen', 'Changjian Yang', 'Hongyang Zhang', 'Yatong Wang', 'Huaizong Shao', 'Shafei Wang'],
    role: 'first',
    venue: 'IEEE Transactions on Mobile Computing',
    detail: 'Accepted, July 2026',
    link: 'https://huggingface.co/collections/zywen/rflm-dataset',
    linkType: 'project',
    statusKey: 'statusAcceptedTmc',
    tags: ['RF Language Model', 'Instruction-conditioned RF', 'Edge LLM']
  },
  {
    year: 2026,
    title: 'On the Shoulders of Giants: Knowledge-Driven Self-Adaptive Network for Distillation',
    authors: ['Kaicong Yu', 'Zhongyi Wen', 'Yi Fang', 'Jingran Lin', 'Kai Xie', 'Jian Yang'],
    role: 'coauthor',
    venue: 'ICASSP 2026 — IEEE International Conference on Acoustics, Speech and Signal Processing',
    detail: 'pp. 4721–4725',
    doi: 'https://doi.org/10.1109/ICASSP55912.2026.11460459',
    tags: ['Knowledge Distillation', 'Adaptive Network', 'ICASSP']
  },
  {
    year: 2026,
    title: 'RLSW: Reinforcement Learning-Guided Sample Weighting for Dynamic Early-Exiting Networks',
    authors: ['Kaicong Yu', 'Zhongyi Wen', 'Yi Fang', 'Kai Xie', 'Jian Yang'],
    role: 'coauthor',
    venue: 'ICASSP 2026 — IEEE International Conference on Acoustics, Speech and Signal Processing',
    detail: 'pp. 2336–2340',
    doi: 'https://doi.org/10.1109/ICASSP55912.2026.11464187',
    tags: ['Reinforcement Learning', 'Dynamic Early Exit', 'ICASSP']
  },
  {
    year: 2026,
    title: 'Radar Signal Reconstruction in Severe Interference via Robust Tensor Completion',
    authors: ['Chang Zhu', 'Kui Xiong', 'Yutao Xiang', 'Zhongyi Wen', 'Wei Zhang', 'Huaizong Shao'],
    role: 'coauthor',
    venue: 'IEEE Transactions on Signal Processing',
    detail: 'vol. 74, pp. 1233–1248',
    doi: 'https://doi.org/10.1109/TSP.2026.3665693',
    tags: ['Radar Reconstruction', 'Tensor Completion', 'Interference Mitigation']
  },
  {
    year: 2026,
    title: 'Pretrained Foundation Model-Driven Source-Free Unsupervised Domain Adaptation for IoT Physical-Layer Authentication',
    authors: ['Zhongyi Wen', 'Yatong Wang', 'Qiang Li', 'Huaizong Shao'],
    role: 'first',
    venue: 'IEEE Internet of Things Journal',
    detail: 'vol. 13, no. 12, pp. 28077–28080',
    doi: 'https://doi.org/10.1109/JIOT.2026.3681700',
    tags: ['Foundation Model', 'SFDA', 'IoT Security']
  },
  {
    year: 2026,
    title: 'RF-MAE: A Self-Supervised Adaptive Frequency Masked Autoencoder With Radio-Frequency Signal Processing Applications',
    authors: ['Zhongyi Wen', 'Zhikai Zhai', 'Yatong Wang', 'Qiang Li', 'Wei Zhang', 'Huaizong Shao'],
    role: 'first',
    venue: 'IEEE Transactions on Mobile Computing',
    detail: 'vol. 25, no. 4, pp. 5920–5935',
    doi: 'https://doi.org/10.1109/TMC.2025.3633287',
    tags: ['Self-supervised Learning', 'RF Foundation', 'CCF A']
  },
  {
    year: 2026,
    title: 'FGPLFA: Fine-Grained Pseudo-Labeling and Feature Alignment for Source-Free Unsupervised Domain Adaptation',
    authors: ['Zhongyi Wen', 'Qiang Li', 'Yatong Wang', 'Huaizong Shao', 'Guoming Sun'],
    role: 'first',
    venue: 'IEEE Transactions on Neural Networks and Learning Systems',
    detail: 'vol. 37, no. 3, pp. 1332–1346',
    doi: 'https://doi.org/10.1109/TNNLS.2025.3616236',
    tags: ['SFDA', 'Pseudo-labeling', 'CCF B']
  },
  {
    year: 2026,
    title: 'Fine-Grained Transductive Prototypical Network-Based Few-Shot Signal Modulation Classification Using Coarse Labels',
    authors: ['Shuai Feng', 'Yatong Wang', 'Zhongyi Wen', 'Luyan Xu', 'Mu Yan'],
    role: 'coauthor',
    venue: 'IEEE Transactions on Cognitive Communications and Networking',
    detail: 'vol. 12, pp. 2189–2204',
    doi: 'https://doi.org/10.1109/TCCN.2025.3594331',
    tags: ['Few-shot Learning', 'Modulation Classification']
  },
  {
    year: 2026,
    title: 'FATransformer: Feature Alignment Transformer for Unsupervised Domain Adaptation in Radio Frequency Fingerprinting Identification',
    authors: ['Jian Yang', 'Zhongyi Wen', 'Qiang Li', 'Huaizong Shao'],
    role: 'coauthor',
    venue: 'IEEE Internet of Things Journal',
    detail: 'vol. 13, no. 8, pp. 17577–17586',
    doi: 'https://doi.org/10.1109/JIOT.2026.3662512',
    tags: ['Transformer', 'UDA', 'RFFI']
  },
  {
    year: 2025,
    title: 'Cross-Receiver Radio Frequency Fingerprint Identification: A Source-Free Adaptation Approach',
    authors: ['Jian Yang', 'Shaoxian Zhu', 'Zhongyi Wen', 'Qiang Li'],
    role: 'coauthor',
    venue: 'Sensors',
    detail: 'vol. 25, no. 14, article 4451',
    doi: 'https://doi.org/10.3390/S25144451',
    tags: ['Cross-receiver RFFI', 'Source-free Adaptation', 'RF Fingerprinting']
  },
  {
    year: 2025,
    title: 'Domain Adaptation-Based Radio Frequency Fingerprint Identification for Industrial Cyber-Physical Systems',
    authors: ['Yatong Wang', 'Bin Cao', 'Zhongyi Wen', 'Mu Yan', 'Changqing Song'],
    role: 'corresponding',
    venue: 'IEEE Network',
    detail: 'vol. 39, no. 4, pp. 21–28',
    doi: 'https://doi.org/10.1109/MNET.2025.3550907',
    tags: ['Industrial CPS', 'Domain Adaptation', 'RFFI']
  },
  {
    year: 2025,
    title: 'GCODWFA: Gradient Collaborative Optimization With Dynamic Weighted Feature Alignment for Unsupervised Domain Adaptation in Radio Frequency Fingerprinting Identification',
    authors: ['Zhongyi Wen', 'Zhikai Zhai', 'Jiahui Xiang', 'Qiang Li', 'Wei Zhang', 'Huaizong Shao'],
    role: 'first',
    venue: 'IEEE Transactions on Information Forensics and Security',
    detail: 'vol. 20, pp. 11991–12004',
    doi: 'https://doi.org/10.1109/TIFS.2025.3630037',
    tags: ['Gradient Collaboration', 'UDA', 'CCF A']
  },
  {
    year: 2025,
    title: 'SwiftNet: A Cost-Efficient Deep Learning Framework With Diverse Applications',
    authors: ['Zhongyi Wen', 'Qiang Li', 'Yatong Wang', 'Luyan Xu', 'Huaizong Shao', 'Guomin Sun', 'Shafei Wang'],
    role: 'first',
    venue: 'IEEE Transactions on Industrial Informatics',
    detail: 'vol. 21, no. 2, pp. 1038–1047',
    doi: 'https://doi.org/10.1109/TII.2024.3448500',
    tags: ['Dynamic Inference', 'Early Exit', 'Edge AI']
  },
  {
    year: 2024,
    title: 'A Zynq-Based Platform With Conditional-Reconfigurable Complex-Valued Neural Network for Specific Emitter Identification',
    authors: ['Jiayan Gan', 'Qiang Li', 'Huaizong Shao', 'Zhongyi Wen', 'Tao Yang', 'Ye Pan', 'Guomin Sun'],
    role: 'coauthor',
    venue: 'IEEE Transactions on Instrumentation and Measurement',
    detail: 'vol. 73, pp. 1–11',
    doi: 'https://doi.org/10.1109/TIM.2024.3391818',
    tags: ['Zynq', 'Complex-valued NN', 'Specific Emitter Identification']
  },
  {
    year: 2024,
    title: 'Feature Alignment Transformer for Cross-domain Radio Frequency Fingerprint Identification',
    authors: ['Yatong Wang', 'Zhongyi Wen', 'Bin Cao', 'Mu Yan', 'Changqing Song'],
    role: 'coauthor',
    venue: '2024 IEEE 24th International Conference on Communication Technology',
    detail: 'pp. 1985–1990',
    doi: 'https://doi.org/10.1109/ICCT62411.2024.10946398',
    tags: ['Transformer', 'Cross-domain RFFI', 'ICCT']
  },
  {
    year: 2024,
    title: 'Learn to Collaborate in MEC: An Adaptive Decentralized Federated Learning Framework',
    authors: ['Yatong Wang', 'Zhongyi Wen', 'Yunjie Li', 'Bin Cao'],
    role: 'coauthor',
    venue: 'IEEE Transactions on Mobile Computing',
    detail: 'vol. 23, no. 12, pp. 14071–14084',
    doi: 'https://doi.org/10.1109/TMC.2024.3439588',
    tags: ['Federated Learning', 'MEC', 'Collaboration']
  },
  {
    year: 2024,
    title: 'DFA: Decoupling Feature Alignment for Unsupervised Domain Adaptation',
    authors: ['Zhongyi Wen', 'Qiang Li', 'Yatong Wang', 'Luyan Xu', 'Huaizong Shao', 'Guomin Sun'],
    role: 'first',
    venue: 'IEEE Internet of Things Journal',
    detail: 'vol. 11, no. 20, pp. 33151–33163',
    doi: 'https://doi.org/10.1109/JIOT.2024.3423794',
    tags: ['Feature Alignment', 'UDA', 'IoT']
  },
  {
    year: 2024,
    title: 'Cost-Effective RF Fingerprinting Based on Hybrid CVNN-RF Classifier With Automated Multidimensional Early-Exit Strategy',
    authors: ['Jiayan Gan', 'Zhixing Du', 'Qiang Li', 'Huaizong Shao', 'Jingran Lin', 'Ye Pan', 'Zhongyi Wen', 'Shafei Wang'],
    role: 'coauthor',
    venue: 'IEEE Internet of Things Journal',
    detail: 'vol. 11, no. 20, pp. 32557–32571',
    doi: 'https://doi.org/10.1109/JIOT.2024.3416624',
    tags: ['CVNN', 'Early Exit', 'RF Fingerprinting']
  },
  {
    year: 2023,
    title: 'A Hybrid CNN-RF Classifier With Multi-Dimensional Early-Exit Strategy for Radio Frequency Fingerprinting',
    authors: ['Zhongyi Wen', 'Jiayan Gan', 'Zhixing Du', 'Qiang Li', 'Ye Pan', 'Huaizong Shao'],
    role: 'first',
    venue: 'ICC 2023 — IEEE International Conference on Communications',
    detail: 'pp. 2221–2226',
    doi: 'https://doi.org/10.1109/ICC45041.2023.10279359',
    tags: ['CNN-RF', 'Early Exit', 'IEEE ICC']
  }
];

const TRANSLATIONS = {
  en: {
    skipLink: 'Skip to main content',
    brandStatus: 'Open to research and collaboration',
    brandHome: 'Zhongyi Wen home',
    primaryNavigation: 'Primary navigation',
    navOpen: 'Open navigation',
    navClose: 'Close navigation',
    navAbout: 'About',
    navResearch: 'Research',
    navPublications: 'Publications',
    navSystems: 'Systems',
    navHonors: 'Honors',
    navContact: 'Contact',
    heroBadge: 'LLMs · MLLMs · Agent Systems · Efficient AI',
    heroKicker: 'Hi, I’m Zhongyi 👋',
    heroAcademicRole: 'Ph.D. Candidate at UESTC',
    heroCompanyRole: 'Founder & CEO, Hansoric Intelligence Technology',
    heroLede: 'I study artificial intelligence, with a focus on LLMs, MLLMs, and agent systems. I develop methods for efficient adaptation, multimodal reasoning, edge inference, and autonomous decision-making, and explore how these models can understand RF signals and operate reliably in real-world environments.',
    topicRf: 'RF Intelligence',
    topicLlm: 'LLMs',
    topicMllm: 'MLLMs',
    topicPeft: 'PEFT',
    topicAgents: 'Agent Systems',
    topicInference: 'Efficient Inference',
    exploreResearch: 'Explore my research',
    startConversation: 'Get in touch',
    portraitCaption: 'Researching the intelligence beyond connectivity',
    portraitAlt: 'Portrait of Zhongyi Wen',
    academicHighlights: 'Academic highlights',
    statWorks: 'verified research works',
    statFirstAuthor: 'first-author papers',
    statHonors: 'academic honors',
    statPlatform: 'edge RF platform',
    featuredHonorsLabel: 'FEATURED HONORS',
    featuredHonorsTitle: 'Selected recognition.',
    viewAllHonors: 'View all honors',
    aboutEyebrow: 'About',
    aboutTitle: 'A little about me.',
    aboutLead: 'I am an AI researcher focused on large language models, multimodal large language models, and intelligent agent systems.',
    aboutBody: 'My work studies how foundation models learn, adapt, reason, and act across language, vision, signals, and physical environments. I work on parameter-efficient fine-tuning, multimodal alignment, efficient inference, and closed-loop agents, with RF and wireless systems serving as an important domain for grounding, evaluation, and edge deployment.',
    founderLabel: 'COMPANY',
    founderTitle: 'Founder & CEO',
    companyName: 'Hansoric Intelligence Technology Co., Ltd.',
    founderBody: 'I founded Hansoric to turn edge-intelligence research into systems that can be deployed and tested in real environments.',
    educationLabel: 'EDUCATION',
    present: 'Present',
    phdProgram: 'Ph.D. Candidate, Information & Communication Engineering',
    uestcSchool: 'School of Information and Communication Engineering, UESTC',
    advisor: 'Advisor: Prof. Shafei Wang',
    bachelorProgram: 'B.Sc., Mathematical Basic Science',
    yingcaiCollege: 'Yingcai Honors College, UESTC',
    teamTitle: 'Research team',
    teamName: 'Electromagnetic Cognition Applications & Advanced RF Integrated Circuits',
    researchEyebrow: 'Research focus',
    researchTitle: 'What I work on.',
    researchIntro: 'I develop AI methods for wireless signals, from RF representations and multimodal models to PEFT and efficient inference at the edge.',
    rfTitle: 'RF Representation Learning',
    rfBody: 'Learning self-supervised and foundation representations for RF understanding and device intelligence.',
    adaptTitle: 'Parameter-Efficient Adaptation',
    adaptBody: 'Adapting foundation models to new tasks and domains with a small trainable parameter budget.',
    edgeTitle: 'Efficient Inference at the Edge',
    edgeBody: 'Reducing latency and compute through dynamic inference, early exits, and heterogeneous acceleration.',
    agentTitle: 'LLMs, MLLMs & Wireless Agents',
    agentBody: 'Connecting signals with language, multimodal reasoning, and closed-loop decisions for wireless systems.',
    arcLabel: 'RESEARCH ARC',
    arcTitle: 'How the pieces fit together.',
    arcInput: 'Multi-source RF input',
    arcTrust: 'Foundation representations',
    arcAdapt: 'Parameter-efficient adaptation',
    arcDeploy: 'Efficient edge inference',
    arcReason: 'Multimodal reasoning',
    arcDecide: 'Closed-loop decisions',
    rflmSummary: 'An RF language model for instruction-conditioned RF processing, accepted at IEEE TMC.',
    rfMaeSummary: 'Self-supervised RF foundation representations with adaptive frequency masking.',
    gcodwfaSummary: 'Gradient collaboration and dynamic alignment for cross-domain RFFI.',
    swiftNetSummary: 'Cost-efficient dynamic inference for resource-constrained deployment.',
    publicationsEyebrow: 'Publications',
    publicationsTitle: 'Publications and accepted work.',
    publicationsIntro: 'The list below includes my formally published or accepted work, with a public link for each item.',
    publicationStatus: '{count} publications are displayed.',
    systemsEyebrow: 'Practical systems',
    systemsTitle: 'SpectraEdge SDR',
    systemsIntro: 'A working RF edge-AI prototype built around ADRV9009, ZU19EG FPGA, and Jetson Orin NX.',
    hardwareCaption: 'Working prototype · Real hardware',
    systemImageAlt: 'SpectraEdge SDR hardware showing the ADRV9009, ZU19EG FPGA, and Jetson Orin NX',
    processingPipeline: 'SpectraEdge processing pipeline',
    systemStatement: 'It connects real RF acquisition, FPGA preprocessing, and edge inference in one system.',
    hardwareRf: 'RF acquisition and digital baseband conversion',
    hardwareFpga: 'Real-time STFT, feature extraction, and preprocessing',
    hardwareGpu: 'Edge-side deep learning and intelligent inference',
    lowLatency: 'Low latency',
    lowPower: 'Edge efficient',
    heterogeneous: 'Heterogeneous compute',
    honorsEyebrow: 'Honors',
    honorsTitle: 'Selected honors and awards.',
    awardCieNomination: '2025 Chinese Institute of Electronics Nomination Award for the Top Ten Advances in Electromagnetic Spectrum',
    awardNomination: 'Scientific and technological advance nomination',
    awardRisingStar: 'UESTC Academic Rising Star Award',
    awardAcademic: 'Academic recognition',
    awardSeedling: 'UESTC Academic Seedling Award',
    awardXiaomi: 'Xiaomi Special Scholarship',
    awardScholarship: 'Scholarship',
    awardPaper: 'Best paper recognition',
    awardAcademicStar: 'UESTC Honor ICT Academic Star Award',
    contactEyebrow: 'Contact',
    contactTitle: 'Interested in these directions?',
    contactIntro: 'If you work on RF intelligence, LLMs and MLLMs, PEFT, or efficient inference, feel free to get in touch.',
    footerLine: 'RF intelligence, LLMs and MLLMs, PEFT, and efficient edge inference.',
    footerBuilt: 'A personal academic homepage',
    firstAuthor: 'First author',
    correspondingAuthor: 'Corresponding author',
    coAuthor: 'Co-author',
    statusAcceptedTmc: 'New · Accepted at IEEE TMC',
    doiLabel: 'DOI',
    projectLabel: 'Project',
    openDoi: 'Open DOI for',
    openProject: 'Open project page for',
    languageAria: 'Switch to Chinese',
    backToTop: 'Back to top',
    pageTitle: 'Zhongyi Wen — Edge RF Intelligence',
    pageDescription: 'Zhongyi Wen studies RF intelligence, LLMs and MLLMs, parameter-efficient fine-tuning, and efficient inference for edge AI.'
  },
  zh: {
    skipLink: '跳到主要内容',
    brandStatus: '欢迎学术交流与合作',
    brandHome: '文钟毅主页',
    primaryNavigation: '主导航',
    navOpen: '打开导航菜单',
    navClose: '关闭导航菜单',
    navAbout: '关于我',
    navResearch: '研究',
    navPublications: '论文',
    navSystems: '系统',
    navHonors: '荣誉',
    navContact: '联系',
    heroBadge: '大语言模型 · 多模态大模型 · 智能体系统 · 高效人工智能',
    heroKicker: '你好，我是文钟毅 👋',
    heroAcademicRole: '电子科技大学博士生',
    heroCompanyRole: '瀚铄智擎科技有限公司创始人兼 CEO',
    heroLede: '我主要从事人工智能研究，重点关注大语言模型（LLM）、多模态大模型（MLLM）和智能体系统。围绕模型的高效适配、多模态推理、端侧推理与自主决策开展研究，并探索这些技术在射频、无线和真实物理环境中的理解与部署。',
    topicRf: '射频智能',
    topicLlm: '大语言模型',
    topicMllm: '多模态大模型',
    topicPeft: 'PEFT',
    topicAgents: '智能体系统',
    topicInference: '高效推理',
    exploreResearch: '了解我的研究',
    startConversation: '联系我',
    portraitCaption: '探索超越连接本身的智能',
    portraitAlt: '文钟毅的肖像照片',
    academicHighlights: '学术成果概览',
    statWorks: '项论文与已接收成果',
    statFirstAuthor: '篇第一作者论文',
    statHonors: '项学术荣誉',
    statPlatform: '套射频边缘平台',
    featuredHonorsLabel: '精选荣誉',
    featuredHonorsTitle: '部分代表性荣誉。',
    viewAllHonors: '查看全部荣誉',
    aboutEyebrow: '关于我',
    aboutTitle: '关于我',
    aboutLead: '我是一名人工智能研究者，核心方向是大语言模型、多模态大模型和智能体系统。',
    aboutBody: '我关注基础模型如何跨语言、视觉、信号和物理环境进行学习、适配、推理与行动，研究内容包括参数高效微调（PEFT）、多模态对齐、高效推理和闭环智能体。射频与无线系统是我用于模型感知、评测和边缘部署的重要应用场景。',
    founderLabel: '创业',
    founderTitle: '创始人兼 CEO',
    companyName: '瀚铄智擎科技有限公司',
    founderBody: '我创办了瀚铄智擎科技有限公司，希望把边缘智能研究做成可以在真实环境中部署和验证的系统。',
    educationLabel: '教育经历',
    present: '至今',
    phdProgram: '信息与通信工程博士生',
    uestcSchool: '电子科技大学 信息与通信工程学院',
    advisor: '导师：王沙飞教授',
    bachelorProgram: '数理基础科学学士',
    yingcaiCollege: '电子科技大学 英才实验学院',
    teamTitle: '所在团队',
    teamName: '电磁认知应用与先进射频集成电路团队',
    researchEyebrow: '研究方向',
    researchTitle: '我在研究什么',
    researchIntro: '我面向无线信号研究人工智能方法，从射频表征、多模态模型到 PEFT 与边缘高效推理，形成一条完整的技术主线。',
    rfTitle: '射频表征学习',
    rfBody: '通过自监督学习与基础模型表征，让模型理解射频信号并支撑设备智能。',
    adaptTitle: '参数高效微调与适配',
    adaptBody: '以较少的可训练参数，让基础模型高效适配新的任务、设备与无线环境。',
    edgeTitle: '边缘高效推理',
    edgeBody: '通过动态推理、早退机制和异构加速，降低模型在边缘设备上的时延与算力开销。',
    agentTitle: 'LLM、MLLM 与无线智能体',
    agentBody: '连接射频信号与语言，研究多模态理解、语义推理和面向无线系统的闭环决策。',
    arcLabel: '研究演进',
    arcTitle: '这些工作如何联系起来',
    arcInput: '多源射频输入',
    arcTrust: '基础模型表征',
    arcAdapt: '参数高效适配',
    arcDeploy: '边缘高效推理',
    arcReason: '多模态推理',
    arcDecide: '闭环自主决策',
    rflmSummary: '面向指令驱动射频处理的射频语言模型，已获 IEEE TMC 接收。',
    rfMaeSummary: '采用自适应频域掩码学习可迁移的射频自监督基础表征。',
    gcodwfaSummary: '通过梯度协同和动态对齐解决跨域射频指纹识别。',
    swiftNetSummary: '面向资源受限部署的低成本动态推理框架。',
    publicationsEyebrow: '学术成果',
    publicationsTitle: '论文与已接收成果',
    publicationsIntro: '下面列出正式发表或已接收的研究工作，并为每一项附上公开链接。',
    publicationStatus: '当前显示 {count} 项论文与已接收成果。',
    systemsEyebrow: '实物系统',
    systemsTitle: 'SpectraEdge SDR',
    systemsIntro: '一套由 ADRV9009、ZU19EG FPGA 和 Jetson Orin NX 组成的射频边缘智能原型。',
    hardwareCaption: '实物原型 · 真实硬件',
    systemImageAlt: 'SpectraEdge SDR 实物系统，包括 ADRV9009、ZU19EG FPGA 和 Jetson Orin NX',
    processingPipeline: 'SpectraEdge 处理流程',
    systemStatement: '它把真实射频采集、FPGA 预处理和端侧推理连接在同一套系统中。',
    hardwareRf: '射频信号采集与数字基带转换',
    hardwareFpga: '实时 STFT、特征提取与低时延预处理',
    hardwareGpu: '边缘侧深度学习与智能推理',
    lowLatency: '低时延',
    lowPower: '适合边缘部署',
    heterogeneous: '异构计算',
    honorsEyebrow: '荣誉奖项',
    honorsTitle: '部分荣誉与奖项',
    awardCieNomination: '中国电子学会2025年度电磁频谱领域十大科技进展提名奖',
    awardNomination: '科技进展提名荣誉',
    awardRisingStar: '电子科技大学学术新秀奖',
    awardAcademic: '学术荣誉',
    awardSeedling: '电子科技大学学术青苗奖',
    awardXiaomi: '小米特等奖学金',
    awardScholarship: '奖学金',
    awardPaper: '最佳论文荣誉',
    awardAcademicStar: '电子科技大学荣耀信通学术之星奖',
    contactEyebrow: '联系',
    contactTitle: '如果你也在关注这些方向',
    contactIntro: '欢迎就射频智能、LLM / MLLM、PEFT、高效推理或相关技术合作与我联系。',
    footerLine: '射频智能、LLM / MLLM、PEFT 与边缘高效推理。',
    footerBuilt: '个人学术主页',
    firstAuthor: '第一作者',
    correspondingAuthor: '通讯作者',
    coAuthor: '合作作者',
    statusAcceptedTmc: '最新 · 已获 IEEE TMC 接收',
    doiLabel: 'DOI',
    projectLabel: '项目主页',
    openDoi: '打开论文 DOI：',
    openProject: '打开项目主页：',
    languageAria: '切换到英文',
    backToTop: '返回顶部',
    pageTitle: '文钟毅 — 边缘射频智能',
    pageDescription: '文钟毅，电子科技大学博士生、瀚铄智擎科技有限公司创始人兼 CEO，主要研究射频智能、LLM / MLLM、PEFT 与边缘高效推理。'
  }
};

const state = {
  language: 'en',
  revealObserver: null
};

function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (typeof text === 'string') node.textContent = text;
  return node;
}

function renderAuthors(authors) {
  const fragment = document.createDocumentFragment();
  authors.forEach(function (author, index) {
    const name = author === 'Zhongyi Wen' ? element('strong', '', author) : document.createTextNode(author);
    fragment.appendChild(name);
    if (index < authors.length - 1) fragment.appendChild(document.createTextNode(', '));
  });
  return fragment;
}

function roleLabel(role) {
  const words = TRANSLATIONS[state.language];
  if (role === 'first') return words.firstAuthor;
  if (role === 'corresponding') return words.correspondingAuthor;
  return words.coAuthor;
}

function renderPublications() {
  const list = document.getElementById('publication-list');
  if (!list) return;
  list.replaceChildren();
  const words = TRANSLATIONS[state.language];

  const grouped = PUBLICATIONS.reduce(function (accumulator, publication) {
    if (!accumulator[publication.year]) accumulator[publication.year] = [];
    accumulator[publication.year].push(publication);
    return accumulator;
  }, {});

  Object.keys(grouped).sort(function (a, b) { return Number(b) - Number(a); }).forEach(function (year) {
    const yearSection = element('section', 'publication-year');
    yearSection.setAttribute('aria-labelledby', 'year-' + year);
    const yearHeading = element('h3', '', year);
    yearHeading.id = 'year-' + year;
    yearSection.appendChild(yearHeading);

    const items = element('div', 'year-publications');
    grouped[year].forEach(function (publication) {
      const article = element('article', 'publication-item');
      const main = element('div', 'publication-main');
      const meta = element('div', 'publication-meta');
      const role = element('span', 'role-pill role-' + publication.role, roleLabel(publication.role));
      meta.appendChild(role);
      if (publication.statusKey && words[publication.statusKey]) {
        meta.appendChild(element('span', 'publication-status', words[publication.statusKey]));
      }
      publication.tags.forEach(function (tag) {
        meta.appendChild(element('span', 'paper-tag', tag));
      });

      const title = element('h4', '', publication.title);
      const authors = element('p', 'publication-authors');
      authors.appendChild(renderAuthors(publication.authors));
      const venue = element('p', 'publication-venue');
      const venueName = element('em', '', publication.venue);
      venue.appendChild(venueName);
      venue.appendChild(document.createTextNode(' · ' + publication.detail));

      main.appendChild(meta);
      main.appendChild(title);
      main.appendChild(authors);
      main.appendChild(venue);

      const isProject = publication.linkType === 'project';
      const publicationLink = element('a', 'doi-button');
      publicationLink.href = publication.link || publication.doi;
      publicationLink.target = '_blank';
      publicationLink.rel = 'noopener noreferrer';
      publicationLink.setAttribute('aria-label', (isProject ? words.openProject : words.openDoi) + ' ' + publication.title);
      publicationLink.appendChild(document.createTextNode(isProject ? words.projectLabel : words.doiLabel));
      publicationLink.appendChild(element('span', '', '↗'));
      publicationLink.lastElementChild.setAttribute('aria-hidden', 'true');

      article.appendChild(main);
      article.appendChild(publicationLink);
      items.appendChild(article);
    });

    yearSection.appendChild(items);
    list.appendChild(yearSection);
  });

  const status = document.querySelector('[data-publication-status]');
  if (status) status.textContent = words.publicationStatus.replace('{count}', String(PUBLICATIONS.length));
}

function translateAttributes(words) {
  [
    ['data-i18n-aria-label', 'aria-label'],
    ['data-i18n-alt', 'alt']
  ].forEach(function (mapping) {
    document.querySelectorAll('[' + mapping[0] + ']').forEach(function (node) {
      const key = node.getAttribute(mapping[0]);
      if (Object.prototype.hasOwnProperty.call(words, key)) node.setAttribute(mapping[1], words[key]);
    });
  });
}

function updateNavigationToggleLabel() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const label = document.querySelector('[data-nav-toggle-label]');
  if (!toggle || !label) return;
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  const words = TRANSLATIONS[state.language];
  label.textContent = isOpen ? words.navClose : words.navOpen;
  const icon = toggle.querySelector('.nav-toggle-icon');
  if (icon) icon.textContent = isOpen ? '×' : '☰';
}

function applyLanguage(language, updateUrl) {
  state.language = language === 'zh' ? 'zh' : 'en';
  const words = TRANSLATIONS[state.language];
  document.documentElement.lang = state.language === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(function (node) {
    const key = node.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(words, key)) node.textContent = words[key];
  });
  translateAttributes(words);

  const toggle = document.querySelector('[data-language-toggle]');
  const toggleLabel = document.querySelector('[data-language-label]');
  if (toggle) {
    toggle.setAttribute('aria-label', words.languageAria);
  }
  if (toggleLabel) toggleLabel.textContent = state.language === 'zh' ? 'EN' : '中文';

  const backToTop = document.querySelector('[data-back-to-top]');
  if (backToTop) backToTop.setAttribute('aria-label', words.backToTop);
  document.title = words.pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', words.pageDescription);

  try {
    localStorage.setItem('preferred-language', state.language);
  } catch (error) {
    // The site remains fully functional if storage is disabled.
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (state.language === 'zh') url.searchParams.set('lang', 'zh');
    else url.searchParams.delete('lang');
    window.history.replaceState({}, '', url.pathname + url.search + url.hash);
  }

  renderPublications();
  updateNavigationToggleLabel();
}

function observeReveals() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hiddenElements = document.querySelectorAll('.reveal:not([data-observed])');
  hiddenElements.forEach(function (node) {
    node.setAttribute('data-observed', 'true');
    if (reducedMotion || !state.revealObserver) node.classList.add('is-visible');
    else state.revealObserver.observe(node);
  });
}

function initializeRevealObserver() {
  if (!('IntersectionObserver' in window)) {
    observeReveals();
    return;
  }

  state.revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });

  observeReveals();
}

function initializeNavigation() {
  const header = document.querySelector('[data-header]');
  const backToTop = document.querySelector('[data-back-to-top]');
  const navigationLinks = Array.from(document.querySelectorAll('.site-header nav a'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  function updateScrollState() {
    const scrolled = window.scrollY > 30;
    if (header) header.classList.toggle('is-scrolled', scrolled);
    if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 700);
  }

  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach(function (link) {
          const isActive = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('is-active', isActive);
          if (isActive) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }
}

function initializeMobileNavigation() {
  const header = document.querySelector('[data-header]');
  const navigation = document.querySelector('[data-primary-navigation]');
  const toggle = document.querySelector('[data-nav-toggle]');
  if (!header || !navigation || !toggle) return;

  const mobileQuery = window.matchMedia('(max-width: 1080px)');

  function setOpen(isOpen, returnFocus) {
    const canOpen = mobileQuery.matches && header.hasAttribute('data-nav-enhanced');
    const nextOpen = Boolean(isOpen && canOpen);
    toggle.setAttribute('aria-expanded', String(nextOpen));
    navigation.hidden = canOpen ? !nextOpen : false;
    updateNavigationToggleLabel();
    if (!nextOpen && returnFocus) toggle.focus();
  }

  function syncMode() {
    if (mobileQuery.matches) {
      header.setAttribute('data-nav-enhanced', 'true');
      toggle.hidden = false;
      setOpen(false, false);
    } else {
      header.removeAttribute('data-nav-enhanced');
      toggle.hidden = true;
      navigation.hidden = false;
      toggle.setAttribute('aria-expanded', 'false');
      updateNavigationToggleLabel();
    }
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true', false);
  });

  navigation.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false, true); });
  });

  document.addEventListener('click', function (event) {
    if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) setOpen(false, false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, true);
  });

  if (typeof mobileQuery.addEventListener === 'function') mobileQuery.addEventListener('change', syncMode);
  else mobileQuery.addListener(syncMode);
  syncMode();
}

function restoreInitialHash() {
  if (!window.location.hash) return;
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.add('is-visible');
  target.querySelectorAll('.reveal').forEach(function (node) { node.classList.add('is-visible'); });
  window.requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
}

function detectInitialLanguage() {
  const queryLanguage = new URL(window.location.href).searchParams.get('lang');
  if (queryLanguage === 'zh' || queryLanguage === 'en') return queryLanguage;
  try {
    const stored = localStorage.getItem('preferred-language');
    if (stored === 'zh' || stored === 'en') return stored;
  } catch (error) {
    // Fall through to the English default.
  }
  return 'en';
}

function initialize() {
  document.querySelector('[data-current-year]').textContent = String(new Date().getFullYear());
  initializeRevealObserver();
  initializeNavigation();
  initializeMobileNavigation();
  applyLanguage(detectInitialLanguage(), false);
  restoreInitialHash();

  const languageToggle = document.querySelector('[data-language-toggle]');
  if (languageToggle) {
    languageToggle.addEventListener('click', function () {
      applyLanguage(state.language === 'en' ? 'zh' : 'en', true);
    });
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
else initialize();
