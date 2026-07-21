'use strict';

const PUBLICATIONS = [
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
    brandStatus: 'Open to collaboration',
    navAbout: 'About',
    navResearch: 'Research',
    navPublications: 'Publications',
    navSystems: 'Systems',
    navHonors: 'Honors',
    navContact: 'Contact',
    heroBadge: 'Edge-native intelligence, from signal to semantics',
    heroKicker: 'HELLO, PHYSICAL WORLD 👋',
    heroAcademicRole: 'Ph.D. Candidate at UESTC',
    heroCompanyRole: 'Founder & CEO, Hansoric Intelligence Technology',
    heroLede: 'I build edge-native intelligence for the physical world — bridging trustworthy RF sensing, efficient inference, LLMs, MLLMs, and autonomous wireless cognitive agents.',
    topicRf: 'RF Intelligence',
    topicLlm: 'Edge LLMs',
    topicMllm: 'MLLMs',
    topicAgents: 'Agents',
    topicInference: 'Efficient Inference',
    exploreResearch: 'Explore my research',
    startConversation: 'Start a conversation',
    portraitCaption: 'Researching the intelligence beyond connectivity',
    statWorks: 'verified research works',
    statFirstAuthor: 'first-author papers',
    statHonors: 'academic honors',
    statPlatform: 'edge RF platform',
    aboutEyebrow: 'About',
    aboutTitle: 'Researcher, builder, and founder.',
    aboutLead: 'My work starts with radio-frequency signals — one of the richest, most immediate interfaces between artificial intelligence and the physical world.',
    aboutBody: 'I study how machines can identify wireless devices reliably, adapt across changing environments, and run efficiently on resource-constrained edge hardware. I am now extending that foundation toward multimodal spectrum understanding, language-guided reasoning, and closed-loop agents.',
    founderLabel: 'VENTURE',
    founderTitle: 'Founder & CEO',
    founderBody: 'Translating edge intelligence research into deployable systems for real physical environments.',
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
    researchTitle: 'From raw spectrum to autonomous decisions.',
    researchIntro: 'A connected research agenda spanning perception, adaptation, deployment, and agentic reasoning.',
    rfTitle: 'RF Signal Intelligence',
    rfBody: 'Self-supervised representations, device fingerprinting, and trustworthy physical-layer authentication.',
    adaptTitle: 'Cross-domain Adaptation',
    adaptBody: 'Robust learning across time, receivers, channels, locations, and unlabeled deployment domains.',
    edgeTitle: 'Efficient Edge Deployment',
    edgeBody: 'Dynamic inference, early exits, FPGA preprocessing, and GPU acceleration under real constraints.',
    agentTitle: 'Edge LLMs, MLLMs & Agents',
    agentBody: 'An emerging direction: unifying RF signals, spectrum imagery, and language for reasoning and action.',
    arcLabel: 'RESEARCH ARC',
    arcTitle: 'One continuous path from sensing to agency.',
    arcInput: 'Multi-source RF input',
    arcTrust: 'Trustworthy identification',
    arcAdapt: 'Cross-scene adaptation',
    arcDeploy: 'Edge-efficient deployment',
    arcReason: 'Multimodal reasoning',
    arcDecide: 'Closed-loop decisions',
    rfMaeSummary: 'Self-supervised RF foundation representations with adaptive frequency masking.',
    gcodwfaSummary: 'Gradient collaboration and dynamic alignment for cross-domain RFFI.',
    swiftNetSummary: 'Cost-efficient dynamic inference for resource-constrained deployment.',
    publicationsEyebrow: 'Publications',
    publicationsTitle: 'A complete, linkable research record.',
    publicationsIntro: 'All verified works are shown below — no hidden tabs, no collapsed entries.',
    systemsEyebrow: 'Practical systems',
    systemsTitle: 'SpectraEdge SDR: intelligence at the RF edge.',
    systemsIntro: 'A heterogeneous platform connecting real signal acquisition, deterministic preprocessing, and neural inference.',
    hardwareCaption: 'Real prototype · Integrated edge stack',
    systemStatement: 'Built for low-latency RF recognition, multimodal spectrum understanding, and future agentic closed-loop decisions.',
    hardwareRf: 'RF acquisition and digital baseband conversion',
    hardwareFpga: 'Real-time STFT, feature extraction, and preprocessing',
    hardwareGpu: 'Edge-side deep learning and intelligent inference',
    lowLatency: 'Low latency',
    lowPower: 'Edge efficient',
    heterogeneous: 'Heterogeneous compute',
    honorsEyebrow: 'Honors',
    honorsTitle: 'Recognition along the way.',
    awardRisingStar: 'UESTC Academic Rising Star Award',
    awardAcademic: 'Academic recognition',
    awardSeedling: 'UESTC Academic Seedling Award',
    awardXiaomi: 'Xiaomi Special Scholarship',
    awardScholarship: 'Scholarship',
    awardPaper: 'Best paper recognition',
    awardAcademicStar: 'UESTC Honor ICT Academic Star Award',
    contactEyebrow: 'Let’s connect',
    contactTitle: 'Let’s turn signals into intelligence.',
    contactIntro: 'Open to research collaboration, ambitious edge-AI systems, and technology translation.',
    footerLine: 'Researching intelligence at the edge of the physical world.',
    footerBuilt: 'Built with curiosity, signals & a few emojis',
    firstAuthor: 'First author',
    correspondingAuthor: 'Corresponding author',
    coAuthor: 'Co-author',
    openDoi: 'Open DOI for',
    languageAria: 'Switch to Chinese',
    backToTop: 'Back to top',
    pageTitle: 'Zhongyi Wen — Edge RF Intelligence',
    pageDescription: 'Zhongyi Wen is a Ph.D. Candidate at UESTC and Founder & CEO of Hansoric Intelligence Technology, working on RF intelligence, edge LLMs, MLLMs, and wireless cognitive agents.'
  },
  zh: {
    skipLink: '跳到主要内容',
    brandStatus: '开放学术与产业合作',
    navAbout: '关于我',
    navResearch: '研究',
    navPublications: '论文',
    navSystems: '系统',
    navHonors: '荣誉',
    navContact: '联系',
    heroBadge: '从信号到语义，构建边缘原生智能',
    heroKicker: '你好，物理世界 👋',
    heroAcademicRole: '电子科技大学博士候选人',
    heroCompanyRole: 'Hansoric Intelligence Technology 创始人兼 CEO',
    heroLede: '面向真实物理世界构建边缘原生智能：融合可信射频感知、高效推理、LLM、MLLM 与自主无线认知智能体。',
    topicRf: '射频智能',
    topicLlm: '边缘大模型',
    topicMllm: '多模态大模型',
    topicAgents: '智能体',
    topicInference: '高效推理',
    exploreResearch: '探索我的研究',
    startConversation: '联系与合作',
    portraitCaption: '探索超越连接本身的智能',
    statWorks: '项已核验学术成果',
    statFirstAuthor: '篇第一作者论文',
    statHonors: '项学术荣誉',
    statPlatform: '套射频边缘平台',
    aboutEyebrow: '关于我',
    aboutTitle: '研究者、工程实践者与创业者。',
    aboutLead: '我的研究始于射频信号——它是人工智能连接真实物理世界最丰富、最即时的接口之一。',
    aboutBody: '我关注无线设备的可信识别、变化环境下的跨域适应，以及资源受限边缘硬件上的高效运行。当前正进一步探索射频信号、频谱图像与自然语言的统一建模，推动语言引导推理与闭环智能体。',
    founderLabel: '创业实践',
    founderTitle: '创始人兼 CEO',
    founderBody: '推动边缘智能研究走向真实物理环境中的可部署系统。',
    educationLabel: '教育经历',
    present: '至今',
    phdProgram: '信息与通信工程博士候选人',
    uestcSchool: '电子科技大学 信息与通信工程学院',
    advisor: '导师：王沙飞教授',
    bachelorProgram: '数理基础科学学士',
    yingcaiCollege: '电子科技大学 英才实验学院',
    teamTitle: '所在团队',
    teamName: '电磁认知应用与先进射频集成电路团队',
    researchEyebrow: '研究方向',
    researchTitle: '从原始频谱到自主决策。',
    researchIntro: '一条贯穿感知、适应、部署与智能体推理的连续研究主线。',
    rfTitle: '射频信号智能',
    rfBody: '自监督表征、无线设备指纹识别与可信物理层认证。',
    adaptTitle: '跨域场景适应',
    adaptBody: '面向跨时间、跨接收机、跨信道与跨地点分布偏移的鲁棒学习。',
    edgeTitle: '边缘高效部署',
    edgeBody: '动态推理、早退机制、FPGA 预处理与 GPU 边缘加速。',
    agentTitle: '边缘 LLM、MLLM 与智能体',
    agentBody: '当前重点方向：统一射频信号、频谱图像与自然语言，实现推理与行动。',
    arcLabel: '研究演进',
    arcTitle: '从感知到智能体的一条连续路径。',
    arcInput: '多源射频输入',
    arcTrust: '可信设备识别',
    arcAdapt: '跨场景适应',
    arcDeploy: '边缘高效部署',
    arcReason: '多模态推理',
    arcDecide: '闭环自主决策',
    rfMaeSummary: '采用自适应频域掩码学习可迁移的射频自监督基础表征。',
    gcodwfaSummary: '通过梯度协同和动态对齐解决跨域射频指纹识别。',
    swiftNetSummary: '面向资源受限部署的低成本动态推理框架。',
    publicationsEyebrow: '学术成果',
    publicationsTitle: '完整、可核验、可跳转的研究记录。',
    publicationsIntro: '下方平铺展示全部已核验成果，不隐藏、不折叠。',
    systemsEyebrow: '实物系统',
    systemsTitle: 'SpectraEdge SDR：运行在射频边缘的智能。',
    systemsIntro: '连接真实信号采集、确定性预处理与神经网络推理的异构边缘平台。',
    hardwareCaption: '真实原型 · 一体化边缘计算栈',
    systemStatement: '面向低时延射频识别、多模态频谱理解与未来智能体闭环决策。',
    hardwareRf: '射频信号采集与数字基带转换',
    hardwareFpga: '实时 STFT、特征提取与低时延预处理',
    hardwareGpu: '边缘侧深度学习与智能推理',
    lowLatency: '低时延',
    lowPower: '边缘高效',
    heterogeneous: '异构计算',
    honorsEyebrow: '荣誉奖项',
    honorsTitle: '研究道路上的认可。',
    awardRisingStar: '电子科技大学学术新秀奖',
    awardAcademic: '学术荣誉',
    awardSeedling: '电子科技大学学术青苗奖',
    awardXiaomi: '小米特等奖学金',
    awardScholarship: '奖学金',
    awardPaper: '最佳论文荣誉',
    awardAcademicStar: '电子科技大学荣耀信通学术之星奖',
    contactEyebrow: '保持联系',
    contactTitle: '让信号走向智能。',
    contactIntro: '欢迎学术合作、前沿边缘智能系统探索与技术成果转化。',
    footerLine: '探索物理世界边缘的智能。',
    footerBuilt: '以好奇心、信号和一些 emoji 构建',
    firstAuthor: '第一作者',
    correspondingAuthor: '通讯作者',
    coAuthor: '合作作者',
    openDoi: '打开论文 DOI：',
    languageAria: 'Switch to English',
    backToTop: '返回顶部',
    pageTitle: '文钟毅 — 边缘射频智能',
    pageDescription: '文钟毅，电子科技大学博士候选人、Hansoric Intelligence Technology 创始人兼 CEO，研究射频智能、边缘 LLM、MLLM 与无线认知智能体。'
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

  const grouped = PUBLICATIONS.reduce(function (accumulator, publication) {
    if (!accumulator[publication.year]) accumulator[publication.year] = [];
    accumulator[publication.year].push(publication);
    return accumulator;
  }, {});

  Object.keys(grouped).sort(function (a, b) { return Number(b) - Number(a); }).forEach(function (year) {
    const yearSection = element('section', 'publication-year reveal');
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

      const doiLink = element('a', 'doi-button');
      doiLink.href = publication.doi;
      doiLink.target = '_blank';
      doiLink.rel = 'noopener noreferrer';
      doiLink.setAttribute('aria-label', TRANSLATIONS[state.language].openDoi + ' ' + publication.title);
      doiLink.appendChild(document.createTextNode('DOI'));
      doiLink.appendChild(element('span', '', '↗'));
      doiLink.lastElementChild.setAttribute('aria-hidden', 'true');

      article.appendChild(main);
      article.appendChild(doiLink);
      items.appendChild(article);
    });

    yearSection.appendChild(items);
    list.appendChild(yearSection);
  });

  observeReveals();
}

function applyLanguage(language, updateUrl) {
  state.language = language === 'zh' ? 'zh' : 'en';
  const words = TRANSLATIONS[state.language];
  document.documentElement.lang = state.language === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(function (node) {
    const key = node.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(words, key)) node.textContent = words[key];
  });

  const toggle = document.querySelector('[data-language-toggle]');
  const toggleLabel = document.querySelector('[data-language-label]');
  if (toggle) {
    toggle.setAttribute('aria-label', words.languageAria);
    toggle.setAttribute('aria-pressed', String(state.language === 'zh'));
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
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

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
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }
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
  applyLanguage(detectInitialLanguage(), false);

  const languageToggle = document.querySelector('[data-language-toggle]');
  if (languageToggle) {
    languageToggle.addEventListener('click', function () {
      applyLanguage(state.language === 'en' ? 'zh' : 'en', true);
    });
  }
}

document.addEventListener('DOMContentLoaded', initialize);
