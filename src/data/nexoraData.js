/**
 * NEXORA AI - Core Data & Content Architecture
 * Brand: "NEXORA AI"
 * Tagline: "Intelligence Beyond Imagination."
 */

export const BRAND = {
  name: "NEXORA AI",
  shortName: "NEXORA",
  tagline: "Intelligence Beyond Imagination.",
  heading: "Empowering the Future with Artificial Intelligence.",
  subheading: "Transforming ideas into intelligent solutions through innovative AI technology.",
  established: 2024,
  headquarters: "San Francisco, CA & Global Nodes",
  contactEmail: "contact@nexora.ai",
  salesEmail: "enterprise@nexora.ai",
  supportEmail: "support@nexora.ai",
  phone: "+1 (888) 639-6721",
  address: "100 AI Innovation Boulevard, Suite 1400, San Francisco, CA 94105",
};

// Multilingual Translations for navigation and key controls
export const TRANSLATIONS = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProducts: "AI Products",
    navPlayground: "Playground",
    navFeatures: "Features",
    navApplications: "Applications",
    navTech: "Technology",
    navTeam: "Our Team",
    navPricing: "Pricing",
    navCaseStudies: "Case Studies",
    navBlog: "Blog",
    navFAQ: "FAQ",
    navContact: "Contact",
    getStarted: "Get Started",
    exploreProducts: "Explore AI Products",
    discoverTech: "Discover Our Technology",
    tryDemo: "Interactive AI Demo",
    searchPlaceholder: "Search products, models, blogs, or tech (Ctrl+K)...",
    requestDemo: "Request Product Demo",
  },
  es: {
    navHome: "Inicio",
    navAbout: "Nosotros",
    navProducts: "Productos IA",
    navPlayground: "Laboratorio",
    navFeatures: "Capacidades",
    navApplications: "Aplicaciones",
    navTech: "Tecnología",
    navTeam: "Equipo",
    navPricing: "Precios",
    navCaseStudies: "Casos de Estudio",
    navBlog: "Blog",
    navFAQ: "Preguntas",
    navContact: "Contacto",
    getStarted: "Empezar",
    exploreProducts: "Explorar Productos IA",
    discoverTech: "Descubrir Tecnología",
    tryDemo: "Demostración Interactiva",
    searchPlaceholder: "Buscar productos, modelos, artículos o tecnología...",
    requestDemo: "Solicitar Demostración",
  },
  de: {
    navHome: "Startseite",
    navAbout: "Über uns",
    navProducts: "KI-Produkte",
    navPlayground: "KI-Labor",
    navFeatures: "Funktionen",
    navApplications: "Anwendungen",
    navTech: "Technologie",
    navTeam: "Unser Team",
    navPricing: "Preise",
    navCaseStudies: "Fallstudien",
    navBlog: "Blog",
    navFAQ: "FAQ",
    navContact: "Kontakt",
    getStarted: "Jetzt starten",
    exploreProducts: "KI-Produkte erkunden",
    discoverTech: "Technologie entdecken",
    tryDemo: "Interaktive Demo",
    searchPlaceholder: "Produkte, Modelle, Artikel suchen...",
    requestDemo: "Demo anfordern",
  },
  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navProducts: "Produits IA",
    navPlayground: "Laboratoire",
    navFeatures: "Fonctionnalités",
    navApplications: "Applications",
    navTech: "Technologie",
    navTeam: "Équipe",
    navPricing: "Tarifs",
    navCaseStudies: "Études de cas",
    navBlog: "Blog",
    navFAQ: "FAQ",
    navContact: "Contact",
    getStarted: "Démarrer",
    exploreProducts: "Explorer les Produits IA",
    discoverTech: "Découvrir la Technologie",
    tryDemo: "Démo Interactive",
    searchPlaceholder: "Rechercher produits, modèles, articles...",
    requestDemo: "Demander une Démo",
  },
  ja: {
    navHome: "ホーム",
    navAbout: "企業情報",
    navProducts: "AI製品",
    navPlayground: "AIラボ",
    navFeatures: "主な機能",
    navApplications: "業界応用",
    navTech: "テクノロジー",
    navTeam: "チーム",
    navPricing: "料金プラン",
    navCaseStudies: "導入事例",
    navBlog: "ブログ",
    navFAQ: "よくある質問",
    navContact: "お問い合わせ",
    getStarted: "今すぐ始める",
    exploreProducts: "AI製品を見る",
    discoverTech: "技術詳細を見る",
    tryDemo: "インタラクティブ体験",
    searchPlaceholder: "製品、技術、ブログを検索...",
    requestDemo: "デモをリクエスト",
  }
};

// Hero Animated Typing Roles
export const HERO_TYPING_WORDS = [
  "Artificial Intelligence.",
  "Machine Learning.",
  "Generative AI.",
  "Intelligent Automation.",
  "Computer Vision."
];

// Editable Demo Statistics (Labeled clearly as sample metrics)
export const HERO_STATS = [
  { id: "solutions", label: "AI Solutions Developed", value: 250, suffix: "+", change: "+42% YoY", sample: true },
  { id: "tech", label: "Technologies Supported", value: 45, suffix: "+", change: "Multi-cloud", sample: true },
  { id: "industries", label: "Industries Served", value: 18, suffix: "+", change: "Global", sample: true },
  { id: "innovations", label: "Research Innovations", value: 120, suffix: "+", change: "14 Patents", sample: true },
];

// Company Information for About section
export const ABOUT_DATA = {
  overview: "NEXORA AI is a cutting-edge artificial intelligence research and technology enterprise dedicated to designing high-performance autonomous models, neural architectures, and enterprise AI engines. We empower visionary organizations to transform unstructured challenges into automated, scalable intelligence.",
  mission: "To engineer dependable, hyper-intelligent AI systems that amplify human potential, eradicate operational friction, and power the next frontier of technological progress.",
  vision: "A resilient, interconnected world where artificial intelligence operates harmoniously with human creativity, solving climate, healthcare, and economic challenges with transparency.",
  philosophy: "We believe AI must be mathematically rigorous, explainable by design, energy-conscious, and rigorously governed. Intelligence without accountability is a liability.",
  responsibleAI: [
    {
      title: "Algorithmic Transparency",
      description: "Our neural networks provide interpretable attribution maps and decision telemetry, eliminating black-box opacity.",
      icon: "Eye"
    },
    {
      title: "Data Sovereignty & Privacy",
      description: "Zero data leakage architecture with on-premise, air-gapped, and zero-knowledge encryption deployment modes.",
      icon: "ShieldCheck"
    },
    {
      title: "Bias Mitigation & Fairness",
      description: "Continuous automated red-teaming and adversarial stress-testing to detect and eliminate systemic demographic skew.",
      icon: "Scale"
    },
    {
      title: "Human-in-the-Loop Governance",
      description: "Configurable fail-safes and approval checkpoints for critical autonomous workflows, preserving human authority.",
      icon: "UserCheck"
    }
  ],
  whyUsPoints: [
    "Next-generation reasoning engines with sub-20ms latency",
    "Enterprise-grade zero-retention guarantee for sensitive IP",
    "Turnkey integration into legacy databases and modern microservices",
    "Continuous model self-healing and drift compensation"
  ]
};

// 6 Core AI Products
export const AI_PRODUCTS = [
  {
    id: "chat-assistant",
    name: "AI Chat Assistant",
    tagline: "Intelligent Conversational Copilot",
    shortDesc: "Enterprise conversational assistant with deep natural language processing, context retention, and multilingual fluency.",
    icon: "MessageSquareCode",
    badge: "Flagship",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Natural Language Understanding (NLU)",
      "Multi-turn context-aware memory",
      "Multilingual fluency across 95+ languages",
      "Enterprise knowledge base grounding (RAG)",
      "Role-based conversational personas",
      "Hallucination suppression filter"
    ],
    architecture: "Dual-encoder retrieval augmented transformer with dynamic context pruning and speculative decoding.",
    useCases: ["Executive Decision Support", "Tier-1 to Tier-3 Customer Support", "Internal Knowledge Retrieval"],
    demoToolId: "chat"
  },
  {
    id: "image-generator",
    name: "AI Image Generator",
    tagline: "High-Fidelity Text-to-Visual Studio",
    shortDesc: "Generate photorealistic assets, 3D renderings, and bespoke brand graphics from complex natural language prompts.",
    icon: "Image",
    badge: "Creative",
    gradient: "from-purple-500 to-indigo-600",
    features: [
      "Sub-second diffusion synthesis",
      "Multiple visual aesthetics (Hyperreal, Anime, Cyberpunk, Cinematic)",
      "Resolution upscaling up to 8K native",
      "Precise negative prompt steering",
      "Spatial composition inpainting and outpainting",
      "Commercial-use royalty-free guarantees"
    ],
    architecture: "Latent diffusion architecture coupled with cross-attention text conditioners and FP8 tensor acceleration.",
    useCases: ["Marketing Visuals & Ad Creative", "Product Concept Mockups", "Game & Virtual World Asset Prototyping"],
    demoToolId: "content"
  },
  {
    id: "content-generator",
    name: "AI Content Generator",
    tagline: "Autonomous Technical & Creative Writer",
    shortDesc: "Generate technical documentation, executive summaries, marketing copy, and multi-chapter reports in seconds.",
    icon: "PenTool",
    badge: "Popular",
    gradient: "from-pink-500 to-rose-600",
    features: [
      "Dynamic tone-of-voice adaptation (Analytical, Persuasive, Conversational)",
      "One-click long-form document synthesis",
      "Built-in citation & fact verification markers",
      "SEO semantic keyword optimization",
      "Automated document summarization & abstract generation",
      "Export to Markdown, PDF, HTML, and Word"
    ],
    architecture: "Dense autoregressive decoder model with factual reinforcement learning and semantic alignment passes.",
    useCases: ["Technical Documentation", "Investor Updates & Whitepapers", "Omnichannel Content Creation"],
    demoToolId: "summarizer"
  },
  {
    id: "code-assistant",
    name: "AI Code Assistant",
    tagline: "Intelligent Developer Copilot & Auditor",
    shortDesc: "Instant code generation, vulnerability detection, unit test synthesis, and refactoring across 30+ programming languages.",
    icon: "Code2",
    badge: "Developer",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Multi-language code generation & autocomplete",
      "Automated vulnerability and security scanning",
      "Algorithmic complexity (Big-O) analysis",
      "Automatic unit and integration test synthesis",
      "Legacy codebase migration (e.g. Java to Go, Python 2 to 3)",
      "IDE integration plugins (VSCode, JetBrains, Neovim)"
    ],
    architecture: "Code-specialized decoder trained on syntax ASTs, unit test invariants, and formal verification frameworks.",
    useCases: ["Full-Stack Software Engineering", "Legacy System Refactoring", "Security Patch Generation"],
    demoToolId: "code"
  },
  {
    id: "data-analytics",
    name: "AI Data Analytics",
    tagline: "Autonomous Business Intelligence Engine",
    shortDesc: "Uncover hidden signals, forecast key financial metrics, and generate interactive data visualizations from raw tabular streams.",
    icon: "BarChart3",
    badge: "Analytics",
    gradient: "from-amber-500 to-orange-600",
    features: [
      "Autonomous anomaly detection and root-cause tracing",
      "Predictive time-series forecasting with confidence intervals",
      "Natural language SQL query generation",
      "Automated interactive chart synthesis",
      "Real-time streaming telemetry ingestion",
      "Seamless data warehouse integration (Snowflake, BigQuery)"
    ],
    architecture: "Hybrid temporal convolutional network merged with natural language tabular transformer layers.",
    useCases: ["Algorithmic Trading & Risk Monitoring", "Supply Chain Demand Forecasting", "Customer Churn Prediction"],
    demoToolId: "summarizer"
  },
  {
    id: "automation",
    name: "AI Automation",
    tagline: "Autonomous Process Orchestration Engine",
    shortDesc: "End-to-end intelligent robotic process automation that replaces repetitive administrative toil with autonomous agents.",
    icon: "Cpu",
    badge: "Enterprise",
    gradient: "from-violet-500 to-purple-700",
    features: [
      "Self-orchestrating multi-agent pipelines",
      "Unstructured invoice and document parsing (OCR + LLM)",
      "Autonomous error recovery and self-healing webhooks",
      "Event-driven workflow triggers",
      "SOC2-compliant audit trails and event logs",
      "Zero-code drag-and-drop workflow canvas"
    ],
    architecture: "State-machine agent controller backed by reinforcement-learned task execution planners.",
    useCases: ["Procurement & Invoicing Pipelines", "KYC & Compliance Verification", "DevOps Incident Mitigation"],
    demoToolId: "prompt"
  }
];

// Interactive AI Playground Tools Data & High-Quality Simulated Heuristics
export const PLAYGROUND_TOOLS = [
  {
    id: "chat",
    name: "AI Chat Playground",
    icon: "MessageSquare",
    description: "Converse with our state-of-the-art conversational engine. Test context memory, logic reasoning, and nuanced dialogue.",
    placeholder: "Ask Nexora AI anything (e.g., 'Explain quantum computing in three analogies', 'Compare microservices vs monoliths')...",
    samplePrompts: [
      "Explain quantum computing using three simple everyday analogies.",
      "Draft a 3-step strategy for migrating a monolithic app to microservices.",
      "How do transformer neural networks utilize self-attention mechanisms?",
      "Write an executive summary of our Q3 AI roadmap for the board of directors."
    ],
    simulatedResponses: {
      "quantum": `### Quantum Computing Explained Through 3 Analogies

1. **The Spinning Coin (Superposition):**
   A classical bit is like a coin lying flat on a table—it is decisively either Heads (1) or Tails (0). A **qubit**, however, is like a coin spinning rapidly on its edge. While in motion, it exists in a fluid blend of both states simultaneously until you place your palm down to observe it.

2. **The Labyrinth Maze (Quantum Parallelism):**
   Imagine navigating an enormous labyrinth. A classical supercomputer explores one pathway at a time, turning back at dead ends. A quantum computer acts like a burst of water poured into the entrance: it traverses **every single path simultaneously**, instantly illuminating the optimal path to the exit.

3. **Telepathic Twins (Entanglement):**
   Imagine two dice cast on opposite sides of the universe. When entangled, no matter the distance, if one rolls a 6, the other immediately yields the complementary state with zero communication delay.

*Note: This is an interactive simulated demonstration of Nexora AI's conversational engine.*`,
      "microservices": `### 3-Step Monolith to Microservices Migration Blueprint

1. **Phase 1: Domain-Driven Decomposition & Strangler Fig Pattern**
   - Identify bounded contexts using event storming.
   - Deploy an API Gateway in front of the monolith.
   - Extract peripheral read-heavy domains (e.g., Notifications, User Profiles) first to build team confidence without risking core transactions.

2. **Phase 2: Database Segregation & Event-Driven Decoupling**
   - Break the shared database anti-pattern. Transition each extracted service to its own isolated datastore.
   - Introduce an asynchronous event bus (Kafka or RabbitMQ) utilizing the Outbox Pattern to maintain eventual consistency.

3. **Phase 3: Resiliency, Observability & Full Monolith Decommissioning**
   - Implement distributed tracing (OpenTelemetry), circuit breakers, and container orchestration (Kubernetes).
   - Route 100% of traffic to the autonomous service cluster and decommission legacy monolith monolith code safely.

*Generated via Nexora AI Architectural Synthesis Engine (Simulated).*`,
      "transformer": `### How Transformer Self-Attention Operates

The breakthrough of Transformer architecture (Vaswani et al.) is the **Scaled Dot-Product Attention mechanism**:

$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$

- **Queries ($Q$):** What the current token is seeking context about.
- **Keys ($K$):** What every other token in the sequence represents.
- **Values ($V$):** The actual informational content of each token.

**Intuition:**
Instead of processing words strictly left-to-right (like old RNNs/LSTMs), self-attention computes an attention weight matrix between **every pair of tokens simultaneously**. In the sentence *"The bank by the river collapsed"*, self-attention links *"bank"* strongly to *"river"*, immediately resolving the ambiguity between a financial institution and a geographical embankment!`,
      "default": `### Nexora AI Intelligence Response

Thank you for testing the **Nexora AI Interactive Playground**!

Here is an analytical assessment of your query:
- **Core Concept Identified:** High-order intelligence, structured reasoning, and contextual synthesis.
- **Execution Strategy:** Multi-stage decomposition breaking down the problem into foundational axioms, operational steps, and empirical verification.
- **Recommended Next Step:** Integrate our enterprise API endpoint \`https://api.nexora.ai/v1/chat/completions\` with your production telemetry.

*Disclaimer: This response was generated via Nexora AI's interactive demonstration engine. Connect your API key in the top settings for live unbounded inference.*`
    }
  },
  {
    id: "summarizer",
    name: "Text Summarizer",
    icon: "FileText",
    description: "Condense long articles, research papers, legal briefs, and reports into crisp executive takeaways and key action items.",
    placeholder: "Paste an article, whitepaper paragraph, or meeting transcript to generate an instant executive summary...",
    samplePrompts: [
      "Artificial intelligence continues to transform enterprise software development. Traditional software engineering relied heavily on manual specification and human-written unit tests. Modern AI code synthesizers understand abstract logic, propose complex refactorings, detect zero-day vulnerabilities in realtime, and automate boilerplate code generation, reducing developer time-to-market by 45%.",
      "Global energy grids are adopting decentralized microgrids powered by machine learning algorithms. By forecasting solar irradiance and wind velocity 48 hours in advance, predictive neural networks balance grid loads with 99.2% stability, mitigating the risk of brownouts during peak temperature anomalies."
    ],
    simulatedResponses: {
      "default": `### Executive Summary & Key Takeaways

**Core Thesis:**
The provided text highlights a fundamental technological transition from manual, static architectures to predictive, AI-augmented automated systems.

**Key Action Items & Insights:**
- **Efficiency Multiplier:** Automating routine analytical and operational overhead yields a 40-50% efficiency surge.
- **Predictive Proactivity:** Leveraging continuous foresight and dynamic neural modeling replaces reactive firefighting with self-healing stability.
- **Scalability Vector:** Modular adoption allows progressive integration without disrupting mission-critical uptime.

**Reading Metrics:**
- Original Word Count: ~55 words | Summary Ratio: **65% compression**
- Estimated Time Saved: **3.4 minutes**`
    }
  },
  {
    id: "content",
    name: "AI Content Generator",
    icon: "Sparkles",
    description: "Craft marketing campaigns, engaging technical blog introductions, press releases, and strategic product value propositions.",
    placeholder: "Describe the content you want to generate (e.g., 'A compelling LinkedIn announcement for Nexora AI's Series B funding', 'An introduction for a tech blog on Autonomous AI Agents')...",
    samplePrompts: [
      "Write an inspiring launch announcement for an enterprise AI operating system.",
      "Draft a high-conversion SaaS landing page headline and 3 value pillars.",
      "Compose an engaging technical blog intro about the rise of multi-agent systems."
    ],
    simulatedResponses: {
      "default": `### High-Impact Generated Content Draft

**Headline:**
# The Age of Autonomous Cognition Has Arrived

**Sub-headline:**
*Where computational power meets human intuition to unlock unprecedented enterprise velocity.*

**Hook:**
For decades, software was simply an obedient tool—waiting for our commands, bound by rigid deterministic scripts. Today, that paradigm shatters. We are no longer merely programming computers; we are teaching them to reason, adapt, and invent.

**Strategic Pillars:**
1. **Hyper-Contextual Understanding:** Moving past superficial pattern matching to deep semantic comprehension.
2. **Deterministic Security:** Delivering zero-trust data governance with enterprise-grade cryptographic guarantees.
3. **Frictionless Orchestration:** Seamlessly uniting unstructured human thought with high-speed automated pipelines.

*Ready to deploy across your digital marketing, investor, and customer channels.*`
    }
  },
  {
    id: "prompt",
    name: "AI Prompt Assistant",
    icon: "Wand2",
    description: "Refactor weak prompts into high-precision, production-grade prompts with system roles, output formats, and few-shot constraints.",
    placeholder: "Enter a basic prompt to enhance (e.g., 'Write a python script to scrape data', 'Give me ideas for an AI startup')...",
    samplePrompts: [
      "Write a python script to scrape data from a website.",
      "Give me ideas for an AI startup in healthcare.",
      "Help me write an email negotiating a job offer."
    ],
    simulatedResponses: {
      "default": `### Optimized Production-Grade System Prompt

\`\`\`markdown
## SYSTEM INSTRUCTION
You are a Principal Software Architect and Senior Security Researcher at a Fortune 50 technology firm. Your objective is to formulate robust, fault-tolerant, and ethical software solutions.

## TASK SPECIFICATION
- **Input Context:** [User query provided with specific requirements and target endpoints]
- **Target Audience:** Production engineering teams requiring maintainable, typed, and auditable code.

## CONSTRAINTS & REQUIREMENTS
1. Adhere strictly to PEP 8 standards with full Type Hints (\`typing\` module).
2. Implement robust exponential backoff retry mechanisms with rate-limiting respect.
3. Validate and sanitize all external inputs using Pydantic or schema validators.
4. Output cleanly documented docstrings detailing parameters, return types, and potential raised exceptions.

## OUTPUT FORMAT
Return strictly executable code encapsulated in markdown blocks, followed by a concise 3-bullet explanation of time complexity, memory footprint, and security edge cases.
\`\`\`

*Efficiency Score: +88% improvement in response precision and hallucination prevention.*`
    }
  },
  {
    id: "code",
    name: "AI Code Explanation Tool",
    icon: "Terminal",
    description: "Analyze code snippets, diagnose hidden bugs, explain algorithmic complexity, and obtain instant modern refactoring advice.",
    placeholder: "Paste any code snippet (Python, TypeScript, Go, Java, Rust) for detailed line-by-line explanation and optimization...",
    samplePrompts: [
      `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
      `async function fetchUserData(userId) {
  const res = await fetch(\`/api/users/\${userId}\`);
  if (!res.ok) throw new Error('User not found');
  return res.json();
}`
    ],
    simulatedResponses: {
      "default": `### Code Analysis & Optimization Audit

#### 1. Algorithmic Complexity Breakdown
- **Time Complexity:** $\\mathcal{O}(n)$ — Single pass iteration over the collection.
- **Space Complexity:** $\\mathcal{O}(n)$ — Hash map storage bounded by the number of unique elements.

#### 2. How the Algorithm Operates
1. Initializes a hash table (\`seen\`) to map observed values to their respective indices.
2. For each element $x$, computes the mathematical complement: $y = \\text{target} - x$.
3. Evaluates if $y$ already exists in the dictionary in $\\mathcal{O}(1)$ average lookup time.
4. If found, returns the coordinate pair immediately; otherwise registers $x$ into the lookup cache.

#### 3. Production Recommendation
- Add input boundary checks for empty lists or \`None\` targets.
- Consider utilizing type annotations (\`nums: list[int], target: int -> list[int]\`) to improve IDE autocomplete and static analysis validation.`
    }
  }
];

// Key Features & Capabilities (Section 7)
export const KEY_FEATURES = [
  {
    id: "ml",
    title: "Machine Learning",
    description: "Custom mathematical models engineered for supervised, unsupervised, and semi-supervised tabular and sensory datasets.",
    icon: "Brain",
    category: "Core AI",
    latency: "<15ms",
    accuracy: "99.4%"
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description: "Multi-layer deep neural architectures optimized for complex feature representations, latent vectors, and manifold learning.",
    icon: "Layers",
    category: "Neural Tech",
    latency: "<25ms",
    accuracy: "98.9%"
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    description: "State-of-the-art semantic parsing, sentiment detection, contextual tokenization, and cross-lingual translation across 95+ dialects.",
    icon: "MessageSquare",
    category: "Language",
    latency: "<35ms",
    accuracy: "99.1%"
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Real-time edge object detection, segmentation, spatial depth estimation, optical character recognition, and video motion tracking.",
    icon: "Eye",
    category: "Perception",
    latency: "<12ms",
    accuracy: "99.7%"
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "Frontier multi-modal foundation models capable of synthesizing text, code, audio, 3D structures, and photorealistic imagery.",
    icon: "Sparkles",
    category: "Generation",
    latency: "<150ms",
    accuracy: "99.2%"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "Time-series forecasting, quantitative risk scoring, dynamic pricing engines, and early warning anomaly detection.",
    icon: "TrendingUp",
    category: "Analytics",
    latency: "<8ms",
    accuracy: "98.5%"
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Automation",
    description: "Cognitive robotic process automation that connects disparate ERP, CRM, and cloud databases with autonomous decision branches.",
    icon: "Zap",
    category: "Orchestration",
    latency: "<50ms",
    accuracy: "99.9%"
  },
  {
    id: "speech-recognition",
    title: "Speech Recognition",
    description: "Low-latency Whisper-class speech-to-text and expressive neural voice synthesis with ambient noise suppression.",
    icon: "Mic",
    category: "Perception",
    latency: "<40ms",
    accuracy: "98.8%"
  },
  {
    id: "recommendations",
    title: "Recommendation Systems",
    description: "Hyper-personalized collaborative filtering and vector embeddings that maximize customer engagement and basket size.",
    icon: "Share2",
    category: "Analytics",
    latency: "<10ms",
    accuracy: "97.9%"
  },
  {
    id: "decision-support",
    title: "AI Decision Support",
    description: "Prescriptive algorithmic systems that evaluate probability trees, risk vectors, and scenario simulations for executive leadership.",
    icon: "ShieldAlert",
    category: "Core AI",
    latency: "<20ms",
    accuracy: "99.6%"
  }
];

// AI Applications & Industries (Section 8)
export const INDUSTRIES = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: "HeartPulse",
    tagline: "Accelerating diagnostics and personalized therapeutics",
    metrics: "+68% faster radiological review, 99.1% cancer screening accuracy",
    summary: "Nexora AI equips healthcare networks with automated medical imaging analysis, clinical documentation summarization, and genomic pattern discovery.",
    useCases: [
      "Automated Medical Image Analysis (CT, MRI, X-ray)",
      "Clinical Trial Patient Stratification",
      "EHR Workflow & Discharge Note Automation",
      "Predictive Patient Deterioration Alerts"
    ]
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: "DollarSign",
    tagline: "Sub-millisecond fraud defense & quantitative forecasting",
    metrics: "-84% false positives in fraud detection, $42M+ saved annually",
    summary: "Financial institutions leverage our neural risk models for real-time transaction screening, algorithmic market microstructure analysis, and credit underwriting.",
    useCases: [
      "Real-Time Anti-Money Laundering (AML) Screening",
      "Algorithmic Risk & Portfolio Optimization",
      "Automated Credit Underwriting",
      "AI Financial Assistant & Wealth Management"
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    icon: "ShoppingBag",
    tagline: "Hyper-personalized customer journeys at global scale",
    metrics: "+34% average order value, 4.2x customer engagement lift",
    summary: "Deliver individualized shopping recommendations, dynamic price tuning, automated visual search, and predictive inventory replenishment.",
    useCases: [
      "Hyper-Personalized Recommendation Grids",
      "Dynamic Elastic Pricing Engines",
      "Visual Search & Image Similarity Matching",
      "Autonomous 24/7 Concierge Support Agents"
    ]
  },
  {
    id: "manufacturing",
    name: "Smart Manufacturing",
    icon: "Factory",
    tagline: "Zero-unplanned downtime with computer vision inspection",
    metrics: "-41% equipment failure rates, 99.8% visual defect detection",
    summary: "Modernize factory floors with sensor anomaly detection, acoustic vibration diagnostics, and autonomous robotic assembly supervision.",
    useCases: [
      "Predictive Equipment Maintenance",
      "High-Speed Edge Visual Defect Inspection",
      "Supply Chain Lead-Time Optimization",
      "Robotic Assembly Telemetry & Calibration"
    ]
  },
  {
    id: "education",
    name: "Education & EdTech",
    icon: "GraduationCap",
    tagline: "Adaptive learning algorithms tailored to student mastery",
    metrics: "+28% retention rate, 3.5x faster skill acquisition",
    summary: "Equip educational institutions with personalized AI tutors, automated rubric grading, and dynamic curriculum adjustment based on student comprehension.",
    useCases: [
      "Adaptive Socratic AI Tutoring",
      "Automated Essay & Code Assignment Feedback",
      "Curriculum Pacing Optimization",
      "Multilingual Real-Time Lecture Translation"
    ]
  },
  {
    id: "agriculture",
    name: "Smart Agriculture",
    icon: "Sprout",
    tagline: "Maximizing crop yields with drone and satellite vision",
    metrics: "-32% water wastage, +24% harvest yield efficiency",
    summary: "Empower agricultural cooperatives with multispectral satellite crop health surveillance, soil moisture forecasting, and automated pest detection.",
    useCases: [
      "Hyperspectral Crop Stress & Disease Detection",
      "Autonomous Precision Irrigation Management",
      "Weather & Microclimate Yield Forecasting",
      "Automated Soil Nutrient Analysis"
    ]
  },
  {
    id: "transportation",
    name: "Logistics & Transportation",
    icon: "Truck",
    tagline: "Dynamic routing, autonomous logistics & traffic forecasting",
    metrics: "-28% fuel consumption, 99.6% on-time delivery rate",
    summary: "Optimize multi-modal logistics networks with dynamic graph routing, predictive fleet maintenance, and intelligent warehouse sorting robotics.",
    useCases: [
      "Dynamic Multimodal Fleet Route Optimization",
      "Real-Time Traffic Density & Bottleneck Forecasting",
      "Autonomous Warehouse Robotics Orchestration",
      "Last-Mile ETA Precision Estimation"
    ]
  }
];

// Technology Stack (Section 9)
export const TECH_STACK = {
  languages: [
    { name: "Python", role: "Primary AI/ML Modeling & Deep Learning pipelines", icon: "Code", level: "Core Foundation" },
    { name: "JavaScript", role: "High-performance client interfaces & web SDKs", icon: "FileCode", level: "Production" },
    { name: "TypeScript", role: "Type-safe enterprise microservices & SDK libraries", icon: "Shield", level: "Production" },
    { name: "Java", role: "Legacy enterprise banking bridge & high-concurrency threads", icon: "Cpu", level: "Integration" }
  ],
  aiAndML: [
    { name: "PyTorch", role: "Primary neural network research & production inference", icon: "Flame", level: "Frontier" },
    { name: "TensorFlow", role: "Edge mobile deployment & TPU distributed clusters", icon: "Layers", level: "Production" },
    { name: "Hugging Face", role: "Transformer tokenizers, model weights & datasets", icon: "Sparkles", level: "Production" },
    { name: "Scikit-learn", role: "Statistical modeling, clustering & dimensionality reduction", icon: "BarChart", level: "Foundational" }
  ],
  frontend: [
    { name: "React.js", role: "Modular component architecture for interactive dashboards", icon: "Atom", level: "Modern" },
    { name: "Next.js", role: "Server-side rendering, SEO acceleration & static edge assets", icon: "Globe", level: "Production" },
    { name: "Tailwind CSS", role: "Fluid design tokens, responsive layouts & glassmorphism", icon: "Palette", level: "Design System" },
    { name: "Framer Motion", role: "60fps declarative animations & gesture physics", icon: "Activity", level: "UI Experience" }
  ],
  backend: [
    { name: "FastAPI", role: "Ultra-low-latency asynchronous Python AI inference endpoints", icon: "Zap", level: "Frontier" },
    { name: "Node.js", role: "Scalable event-driven I/O streaming & WebSocket gateways", icon: "Server", level: "Production" },
    { name: "Django", role: "Robust administrative security, ORM & authentication", icon: "Database", level: "Enterprise" }
  ],
  infrastructure: [
    { name: "Docker", role: "Immutable container packaging & reproducibility", icon: "Box", level: "Standard" },
    { name: "Kubernetes", role: "Multi-cluster GPU orchestration & autoscaling nodes", icon: "Network", level: "Production" },
    { name: "PostgreSQL", role: "Relational persistence with pgvector embedding search", icon: "Database", level: "Production" },
    { name: "MongoDB", role: "High-throughput JSON document storage for unstructured logs", icon: "HardDrive", level: "High Scale" }
  ]
};

// 8 Pillars: Why Choose Our AI Company (Section 10)
export const WHY_CHOOSE_US = [
  {
    id: "innovative",
    title: "Innovative AI Solutions",
    description: "Proprietary neural architectures engineered to leapfrog standard off-the-shelf wrappers with bespoke reasoning capabilities.",
    icon: "Lightbulb",
    highlight: "Patented Reasoning Core"
  },
  {
    id: "scalable",
    title: "Scalable Architecture",
    description: "Elastic cloud infrastructure designed to seamlessly burst from 100 requests to 100,000 requests per second with zero latency degradation.",
    icon: "Maximize2",
    highlight: "99.99% Uptime SLA"
  },
  {
    id: "user-friendly",
    title: "User-Friendly Experiences",
    description: "Engineered for intuitive human interaction. Complex tensor parameters abstracted into clean visual sliders, SDKs, and REST APIs.",
    icon: "Smile",
    highlight: "5-Minute Integration"
  },
  {
    id: "data-privacy",
    title: "Strict Data Privacy & Sovereignty",
    description: "Enterprise data is never used for foundation model training without explicit consent. Air-gapped on-premise deployments supported.",
    icon: "Lock",
    highlight: "SOC2 Type II & HIPAA"
  },
  {
    id: "responsible-ai",
    title: "Responsible AI Development",
    description: "Rigorous alignment frameworks, safety classifiers, and ethical boundary testing embedded directly into every inference pipeline.",
    icon: "HeartHandshake",
    highlight: "100% Auditable Rules"
  },
  {
    id: "reliable",
    title: "Reliable 99.9% Production SLA",
    description: "Multi-region failover nodes across AWS, GCP, and Azure guarantee operational resilience even during localized cloud outages.",
    icon: "CheckCircle2",
    highlight: "Multi-Region Redundancy"
  },
  {
    id: "flexible",
    title: "Flexible Integration",
    description: "Zero vendor lock-in. Full support for REST, gRPC, WebSockets, Python, Node, Go, Rust, and native cURL access.",
    icon: "Puzzle",
    highlight: "Universal SDKs"
  },
  {
    id: "continuous",
    title: "Continuous Autonomous Improvement",
    description: "Models continuously evaluate drift, update embedding vectors, and refine performance based on production feedback loops.",
    icon: "RefreshCw",
    highlight: "Self-Healing Weights"
  }
];

// 6-Step AI Workflow (Section 11)
export const AI_WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Data Collection",
    subtitle: "Multimodal Ingestion",
    description: "Continuous streaming and batch extraction from databases, APIs, IoT sensors, PDFs, and unstructured document lakes.",
    details: "Automated ingestion connectors sanitize metadata, strip PII, and normalize schema types into parquet shards.",
    inputs: "SQL, REST, S3, Kafka Streams",
    outputs: "Immutable Encrypted Data Lake",
    duration: "Real-time / Batch"
  },
  {
    step: 2,
    title: "Data Processing",
    subtitle: "Cleaning & Tokenization",
    description: "Automated anomaly filtering, outlier removal, semantic chunking, and contextual tokenization for neural consumption.",
    details: "De-duplication algorithms remove 99.7% of redundant samples, optimizing token efficiency and dataset variance.",
    inputs: "Raw Unstructured Objects",
    outputs: "Clean Normalized Embeddings",
    duration: "Milliseconds"
  },
  {
    step: 3,
    title: "Model Training",
    subtitle: "Distributed Optimization",
    description: "Distributed gradient descent across GPU clusters utilizing mixed-precision FP8 tensors and FlashAttention-3 kernels.",
    details: "Hyperparameter tuning optimizes learning rates, dropout ratios, and weight decays to eliminate catastrophic forgetting.",
    inputs: "Tokenized Tensors & Curated Pairs",
    outputs: "Converged Checkpoint Weights",
    duration: "Continuous / Micro-epochs"
  },
  {
    step: 4,
    title: "AI Prediction",
    subtitle: "Inference & Reasoning",
    description: "High-speed tensor execution on hardware-accelerated nodes generating probability distributions and latent vectors.",
    details: "Speculative decoding and dynamic KV-caching yield sub-20 millisecond time-to-first-token latency.",
    inputs: "Live User or System Query",
    outputs: "High-Confidence Prediction Vector",
    duration: "<20ms"
  },
  {
    step: 5,
    title: "Result Generation",
    subtitle: "Structured Synthesis",
    description: "Formulating predictions into actionable JSON objects, natural language dialogue, visual assets, or automated webhook dispatches.",
    details: "Output guards verify syntactic correctness, schema conformity, and safety boundaries before user delivery.",
    inputs: "Raw Neural Outputs",
    outputs: "Formatted Business Artifacts",
    duration: "Instant"
  },
  {
    step: 6,
    title: "Continuous Improvement",
    subtitle: "RLHF & Active Learning",
    description: "Real-time telemetry, human-in-the-loop validation, and adversarial red-teaming cycle back into active retraining weights.",
    details: "Automated drift monitors trigger incremental fine-tuning when statistical distribution divergence exceeds 0.05 alpha.",
    inputs: "Execution Logs & User Ratings",
    outputs: "Retrained Adaptive Models",
    duration: "Autonomous Loop"
  }
];

// Interactive Recharts Visualization Data for Impact (Section 12)
export const BENCHMARK_DATA = [
  { epoch: "v1.0", nexoraScore: 78.4, industryBaseline: 72.1, latency: 120 },
  { epoch: "v1.5", nexoraScore: 84.2, industryBaseline: 75.8, latency: 85 },
  { epoch: "v2.0", nexoraScore: 89.6, industryBaseline: 79.4, latency: 54 },
  { epoch: "v2.5", nexoraScore: 94.1, industryBaseline: 82.0, latency: 32 },
  { epoch: "v3.0", nexoraScore: 98.7, industryBaseline: 86.5, latency: 18 },
];

export const INDUSTRY_IMPACT_DATA = [
  { industry: "FinTech", speedup: 84, efficiency: 92 },
  { industry: "Health", speedup: 68, efficiency: 89 },
  { industry: "Retail", speedup: 75, efficiency: 85 },
  { industry: "Logistics", speedup: 81, efficiency: 94 },
  { industry: "Mfg", speedup: 72, efficiency: 88 },
];

// Professional Team Profiles (Section 13)
export const TEAM_MEMBERS = [
  {
    id: "elena",
    name: "Dr. Elena Vance",
    role: "Founder & Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Former AI Principal Investigator at MIT CSAIL with 15+ years pioneering distributed neural networks and autonomous agent orchestration.",
    expertise: ["Neuro-Symbolic AI", "Enterprise Leadership", "AI Safety Policy"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    publications: 24,
    patents: 8
  },
  {
    id: "marcus",
    name: "Marcus Sterling",
    role: "Chief AI Research Engineer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Pioneered early scalable transformer memory mechanisms and speculative decoding techniques at leading Silicon Valley research labs.",
    expertise: ["Transformer Architectures", "Attention Mechanics", "FP8 Acceleration"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    publications: 31,
    patents: 6
  },
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "Lead Machine Learning Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Expert in large-scale MLOps, continuous fine-tuning, and ultra-high-throughput inference deployment across 10,000+ GPU nodes.",
    expertise: ["MLOps Pipelines", "Kubernetes GPU Clustering", "Model Pruning"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    publications: 12,
    patents: 3
  },
  {
    id: "david",
    name: "David Kim",
    role: "Principal Full Stack & Cloud Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Specializes in zero-latency streaming WebSocket architectures, multi-region database sharding, and fault-tolerant AI API gateways.",
    expertise: ["Distributed Systems", "High-Throughput APIs", "Cloud Security"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    publications: 7,
    patents: 2
  },
  {
    id: "amara",
    name: "Amara Patel",
    role: "Head of UI/UX & Generative Interface Design",
    image: "https://images.unsplash.com/photo-1534751516642-a171ed282186?auto=format&fit=crop&w=600&q=80",
    bio: "Award-winning designer shaping the future of human-AI collaboration interfaces, generative design systems, and glassmorphic spatial computing.",
    expertise: ["Human-AI Interaction", "Design Systems", "Accessible Interfaces"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    publications: 9,
    patents: 1
  },
  {
    id: "leo",
    name: "Dr. Leo Thorne",
    role: "Lead Data Scientist & Quantitative Analyst",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "PhD in Statistical Physics; specializes in high-dimensional vector spaces, Bayesian uncertainty estimation, and anomaly detection.",
    expertise: ["Bayesian Statistics", "High-Dim Vector Embeddings", "Risk Forecasting"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    publications: 18,
    patents: 4
  }
];

// Pricing Plans (Section 14)
export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "Ideal for individual developers, AI researchers, and prototyping innovative applications.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    popular: false,
    cta: "Start Free Prototyping",
    features: [
      "Access to standard AI Chat & Code models",
      "100,000 inference tokens / month",
      "50 image generations / month",
      "Standard REST & WebSocket API access",
      "Community Discord & knowledge base support",
      "Standard 99.5% uptime SLA",
      "Pre-built SDKs (Python, JS, TS)",
      "Zero training on user inputs"
    ],
    missingFeatures: [
      "Fine-tuned dedicated models",
      "Air-gapped on-premise installation",
      "24/7 dedicated telephone support",
      "Custom SLA guarantees"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    description: "Designed for high-growth tech startups and businesses scaling autonomous AI workflows.",
    monthlyPrice: 199,
    yearlyPrice: 159,
    popular: true,
    badge: "Most Recommended",
    cta: "Launch Professional Plan",
    features: [
      "Full access to all 6 Nexora AI foundation models",
      "2,500,000 inference tokens / month",
      "1,000 8K image generations / month",
      "Sub-20ms priority inference routing",
      "Priority email & Slack integration support",
      "99.9% enterprise uptime SLA",
      "Custom RAG vector database connector",
      "Advanced prompt debugging & telemetry dashboard",
      "Role-based team permission controls"
    ],
    missingFeatures: [
      "Air-gapped on-premise installation",
      "Custom dedicated weight fine-tuning"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For global enterprises requiring custom fine-tuned weights, dedicated GPUs, and zero-compromise security.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    popular: false,
    cta: "Schedule Executive Consultation",
    features: [
      "Unlimited inference tokens & multimodal synthesis",
      "Dedicated GPU clusters (H100/B200 pods)",
      "Private on-premise or sovereign cloud deployment",
      "Custom model training on proprietary enterprise data",
      "99.99% mathematically guaranteed uptime SLA",
      "Dedicated AI Solutions Architect & 24/7 phone support",
      "SOC2 Type II, HIPAA, ISO27001 compliance audit bundle",
      "Air-gapped zero-data-retention cryptographic guarantee",
      "Bespoke multi-agent automation orchestration"
    ],
    missingFeatures: []
  }
];

// Product Comparison Matrix (Section 20.K)
export const COMPARISON_FEATURES = [
  { name: "Foundation Model Access", starter: "Standard Core", pro: "All 6 Models", enterprise: "Custom & Dedicated" },
  { name: "Monthly Token Quota", starter: "100k Tokens", pro: "2.5M Tokens", enterprise: "Unlimited" },
  { name: "Image Resolution", starter: "1080p", pro: "Up to 8K", enterprise: "Unrestricted Native" },
  { name: "Response Latency", starter: "Standard (~60ms)", pro: "Priority (<20ms)", enterprise: "Ultra (<10ms dedicated)" },
  { name: "Custom RAG & Embeddings", starter: "No", pro: "Up to 10M Vectors", enterprise: "Unlimited Sharded" },
  { name: "Data Sovereignty (Zero Retention)", starter: "Yes", pro: "Yes", enterprise: "Yes (Air-Gapped)" },
  { name: "Dedicated Fine-Tuning", starter: "No", pro: "LoRA Adapters", enterprise: "Full Weight Adaptation" },
  { name: "Support Tier", starter: "Community & Docs", pro: "Priority Slack", enterprise: "Dedicated Architect & 24/7" },
  { name: "Uptime SLA", starter: "99.5%", pro: "99.9%", enterprise: "99.99% Guaranteed" }
];

// Customer Testimonials (Section 15)
export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Sarah Lindqvist",
    title: "Chief Technology Officer",
    company: "Nordic FinTech Group",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote: "Nexora AI's sub-20ms inference latency allowed us to process over 14 million daily financial transactions in real time. We slashed fraudulent unauthorized charges by 84% in our very first quarter.",
    verified: true,
    sample: true
  },
  {
    id: "test-2",
    name: "Dr. Alexander Ross",
    title: "VP of Medical Research",
    company: "Apex Health Diagnostics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote: "The computer vision models from Nexora have set a new gold standard in diagnostic radiology. Our specialists review pathology scans 68% faster while maintaining strict HIPAA compliance.",
    verified: true,
    sample: true
  },
  {
    id: "test-3",
    name: "Maya Chen",
    title: "Head of Product & AI",
    company: "OmniRetail Global",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote: "Integrating Nexora's recommendation engine took less than 48 hours. The predictive vector search delivered a 34% increase in basket conversion and transformed our customer experience.",
    verified: true,
    sample: true
  },
  {
    id: "test-4",
    name: "Julian Vance",
    title: "Director of Fleet Operations",
    company: "Velocity Logistics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    quote: "The dynamic routing optimization decreased fuel waste by 28% across 4,200 cargo trucks. Nexora AI is the most reliable enterprise engineering partner we have ever integrated.",
    verified: true,
    sample: true
  }
];

// Case Studies (Section 16)
export const CASE_STUDIES = [
  {
    id: "case-1",
    category: "Finance",
    title: "Sub-Millisecond Fraud Defense at Apex Global",
    client: "Apex Global FinTech",
    problem: "Processing 12M daily payments with an outdated rule-based system led to a 14% false-positive rate and $38M in annual unprevented fraud.",
    solution: "Deployed Nexora AI's real-time predictive anomaly detection engine with distributed graph neural networks and sub-15ms edge inference.",
    technologies: ["PyTorch", "FastAPI", "PostgreSQL pgvector", "Docker"],
    results: [
      { label: "False Positives Reduced", value: "84%" },
      { label: "Fraud Intercepted", value: "$42M" },
      { label: "Average Inference Latency", value: "11ms" }
    ],
    summary: "A transformative overhaul of payment risk scoring that saved tens of millions while delighting legitimate shoppers with frictionless checkout."
  },
  {
    id: "case-2",
    category: "Healthcare",
    title: "Accelerating Oncology Diagnostics with Computer Vision",
    client: "BioScan Health Systems",
    problem: "Radiologists experienced severe backlog fatigue reviewing high-resolution 3D MRI scans, leading to average 9-day diagnostic turnarounds.",
    solution: "Integrated Nexora AI's Computer Vision & Segmentation model into the hospital PACS imaging pipeline to highlight suspect micro-calcifications automatically.",
    technologies: ["TensorFlow", "CUDA", "Python", "Kubernetes"],
    results: [
      { label: "Review Speedup", value: "68%" },
      { label: "Early Detection Precision", value: "99.1%" },
      { label: "Report Turnaround", value: "<24 hrs" }
    ],
    summary: "Empowering oncologists with instant AI pre-screening, enabling earlier therapeutic interventions and saving countless patient lives."
  },
  {
    id: "case-3",
    category: "E-Commerce",
    title: "Hyper-Personalized Recommendation Matrix at Scale",
    client: "OmniCommerce Retail",
    problem: "Static category pages and generic bestseller lists failed to capture nuanced customer tastes, leading to high cart abandonment.",
    solution: "Deployed Nexora AI's collaborative vector embedding search to deliver dynamic product matching based on real-time micro-session intent.",
    technologies: ["Next.js", "FastAPI", "MongoDB", "PyTorch"],
    results: [
      { label: "Conversion Lift", value: "+34%" },
      { label: "Average Order Value", value: "+21%" },
      { label: "Customer Engagement", value: "4.2x" }
    ],
    summary: "Delivering individualized retail experiences for over 45 million active monthly shoppers across 12 international territories."
  },
  {
    id: "case-4",
    category: "Logistics",
    title: "Autonomous Fleet Routing & Carbon Reduction",
    client: "Velocity Freight Network",
    problem: "Weather fluctuations, port bottlenecks, and urban congestion caused delivery delays and ballooning fleet fuel expenditures.",
    solution: "Rolled out Nexora AI's Predictive Route Optimization engine with real-time telematics integration and predictive weather mapping.",
    technologies: ["Python", "FastAPI", "Docker", "PostgreSQL"],
    results: [
      { label: "Fuel Consumption Reduced", value: "28%" },
      { label: "On-Time Deliveries", value: "99.6%" },
      { label: "Carbon Offset", value: "18,400 T" }
    ],
    summary: "Re-architecting supply chain logistics into an agile, green, and cost-efficient network through continuous algorithmic optimization."
  },
  {
    id: "case-5",
    category: "Enterprise SaaS",
    title: "Multi-Agent Autonomous Tier-1 Support Automation",
    client: "CloudScale Systems",
    problem: "Surging customer base resulted in 48-hour response times for routine technical and billing inquiries, driving customer churn.",
    solution: "Orchestrated Nexora AI's Chat Assistant & Automation agent mesh directly into Zendesk and Jira with human escalation guardrails.",
    technologies: ["Node.js", "React", "TypeScript", "FastAPI"],
    results: [
      { label: "Instant Resolution Rate", value: "82%" },
      { label: "Average Response Time", value: "<15s" },
      { label: "Customer Satisfaction (CSAT)", value: "4.9/5" }
    ],
    summary: "Eliminating support backlogs and freeing human engineering staff to focus exclusively on strategic technical consulting."
  }
];

// Blog & AI News (Section 17)
export const BLOG_POSTS = [
  {
    id: "post-1",
    category: "Research",
    title: "Beyond Transformers: Exploring Next-Generation Speculative Neural Architectures",
    excerpt: "Why quadratic attention limits are being shattered by hybrid state-space models and dynamic token compression.",
    date: "November 18, 2026",
    readTime: "6 min read",
    author: "Marcus Sterling",
    authorRole: "Chief AI Research Engineer",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Deep Learning", "Transformers", "Neural Models"],
    content: `
### The Quadratic Bottleneck in Modern Transformers

For the past decade, the self-attention mechanism proposed in *Attention Is All You Need* has served as the undisputed cornerstone of modern natural language processing and computer vision. However, its $\\mathcal{O}(N^2)$ computational and memory complexity creates severe bottlenecks when scaling to context windows of 1,000,000+ tokens.

At **Nexora AI**, our research team has been experimenting with **State-Space Dual Encoders (SSDE)** combined with speculative decoding. By dynamically compressing background context while retaining full floating-point precision for high-entropy tokens, we have achieved a **4.3x throughput acceleration** with zero loss in benchmark perplexity.

### Key Architectural Breakthroughs
1. **Linear Time-Complexity Recurrence:** Maintaining constant memory states regardless of sequence length.
2. **Dynamic KV-Cache Pruning:** Evicting redundant linguistic tokens before memory allocation.
3. **Speculative Decoding Engines:** Utilizing smaller 1B draft models to verify multi-token clusters concurrently.

The future of AI is not merely larger parameter counts—it is mathematically elegant, resource-efficient reasoning.
    `
  },
  {
    id: "post-2",
    category: "Tutorial",
    title: "Building Enterprise-Grade RAG Pipelines with Zero Hallucination Drift",
    excerpt: "A step-by-step masterclass on hybrid dense-sparse retrieval, reciprocal rank fusion, and semantic verification.",
    date: "November 12, 2026",
    readTime: "8 min read",
    author: "Sarah Jenkins",
    authorRole: "Lead ML Engineer",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tags: ["RAG", "Vector Search", "Python", "Enterprise"],
    content: `
### The Illusion of Simple Vector Search

Most naive Retrieval-Augmented Generation (RAG) demos simply embed documents with a generic cosine model, grab top-$k$ nearest neighbors, and dump them into a prompt. In production enterprise scenarios, this naive approach yields hallucination rates above 22%.

To achieve enterprise reliability (hallucinations <0.2%), organizations must implement **Hybrid Multi-Stage Retrieval**:

\`\`\`python
# Example Nexora AI Multi-Stage RAG Pipeline
from nexora import EnterpriseRAG, ReciprocalRankFusion

rag = EnterpriseRAG(
    dense_model="nexora-embed-v3",
    sparse_model="bm25-neural",
    reranker="nexora-rerank-large"
)

# Hybrid fusion eliminates semantic false positives
results = rag.hybrid_search(
    query="What are our Q3 liability clauses under section 4.2?",
    top_k=20,
    fusion_algorithm=ReciprocalRankFusion(k=60)
)
\`\`\`

### The Three Pillars of Defensible RAG
1. **Chunking with Semantic Boundary Invariants:** Never split sentences mid-thought or separate table cells from column headers.
2. **Dense + Sparse Hybrid Search:** Pair semantic embeddings with exact BM25 keyword matching to prevent losing proper nouns and part numbers.
3. **Self-Consistency Cross-Checking:** Employ a secondary verification pass that compares model output citations directly against source passage hashes.
    `
  },
  {
    id: "post-3",
    category: "Ethics & Safety",
    title: "The Architecture of Responsible AI: From Principles to Hard Code",
    excerpt: "Moving beyond vague corporate platitudes into automated adversarial testing and verifiable data sovereignty.",
    date: "November 05, 2026",
    readTime: "5 min read",
    author: "Dr. Elena Vance",
    authorRole: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    tags: ["Responsible AI", "Security", "Ethics", "Governance"],
    content: `
### Why Ethical Guidelines Fail Without Automated Guardrails

Ethics codes that live exclusively in company PDF whitepapers cannot prevent an algorithmic failure in production. Responsible AI must be enforced at the hardware and compilation layer.

At **Nexora AI**, we follow a four-tier automated safety harness:
- **Pre-execution Boundary Checks:** Every prompt is parsed for toxic injection, jailbreak attempts, and unconsented PII.
- **Latency-Free Output Filtering:** Real-time semantic scanners inspect token streams for factual divergence and safety boundaries.
- **Cryptographic Audit Trails:** Every automated decision generates an immutable cryptographic signature detailing the model weights, prompt tokens, and safety scores utilized.

When artificial intelligence operates with verifiable transparency, institutions and individuals can place their trust in autonomous systems with confidence.
    `
  },
  {
    id: "post-4",
    category: "Generative AI",
    title: "The Convergence of Generative AI and Physical Robotics",
    excerpt: "How multimodal foundation models are enabling robotic manipulators to perceive, plan, and act in real world spaces.",
    date: "October 29, 2026",
    readTime: "7 min read",
    author: "Dr. Leo Thorne",
    authorRole: "Lead Data Scientist",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    tags: ["Robotics", "Computer Vision", "Embodied AI"],
    content: `
### From Pixels to Torque: The Embodied AI Era

The traditional separation between software intelligence and physical robotics is disappearing rapidly. By conditioning physical actuator controllers on spatial visual foundation models, robots can interpret natural language commands like *"Clean the spilled coffee without knocking over the glass vase"* with exquisite motor precision.

### Crucial Technical Breakthroughs:
- **Vision-Language-Action (VLA) Models:** Unifying visual scene semantics with 7-DOF arm trajectory planning.
- **Simulation-to-Reality (Sim2Real) Transfer:** Training autonomous policies in physics engines accelerated 10,000x faster than real-time.
- **Fail-Safe Spatial Geofencing:** Hardware-interlocked boundaries that prevent unintended robotic acceleration around humans.
    `
  }
];

// FAQs (Section 18)
export const FAQS = [
  {
    id: "faq-1",
    category: "General",
    question: "What is Artificial Intelligence and how does Nexora AI approach it?",
    answer: "Artificial Intelligence refers to computational systems engineered to perform complex cognitive tasks historically requiring human intellect—such as natural language comprehension, visual recognition, decision synthesis, and predictive forecasting. Nexora AI builds proprietary, mathematically rigorous foundation models and autonomous agent pipelines engineered for enterprise precision, low latency, and zero hallucination drift."
  },
  {
    id: "faq-2",
    category: "Products",
    question: "What AI products does Nexora AI offer?",
    answer: "Nexora AI provides six dedicated flagship products: AI Chat Assistant (conversational reasoning copilot), AI Image Generator (high-fidelity visual synthesis), AI Content Generator (enterprise documentation & copywriter), AI Code Assistant (developer copilot & vulnerability auditor), AI Data Analytics (predictive business intelligence), and AI Automation (autonomous multi-agent workflow orchestration)."
  },
  {
    id: "faq-3",
    category: "Technology",
    question: "How does your AI technology work under the hood?",
    answer: "Our systems are built on proprietary deep neural architectures, utilizing optimized transformer decoders, state-space models, and latent diffusion engines. We combine distributed PyTorch training across high-density GPU clusters with custom FP8 quantization, speculative decoding, and hybrid retrieval-augmented generation (RAG) to deliver sub-20ms inference with high factual fidelity."
  },
  {
    id: "faq-4",
    category: "Integration",
    question: "Which industries can deploy Nexora AI solutions?",
    answer: "Our models are deployed across Healthcare & Life Sciences (medical imaging & diagnostics), Finance & Banking (real-time fraud defense & quantitative modeling), E-Commerce & Retail (hyper-personalized recommendations), Smart Manufacturing (predictive maintenance & optical defect detection), Education, Agriculture, and Logistics & Transportation."
  },
  {
    id: "faq-5",
    category: "Security",
    question: "Is our enterprise data safe and private?",
    answer: "Absolutely. We enforce a strict Zero Data Retention policy for all enterprise API traffic. Your proprietary prompts, files, and outputs are NEVER utilized to train public foundation models. We offer air-gapped on-premise deployments, customer-managed encryption keys (CMEK), and full compliance with SOC2 Type II, HIPAA, and GDPR regulations."
  },
  {
    id: "faq-6",
    category: "Integration",
    question: "Can Nexora AI models be customized and fine-tuned for our specific company?",
    answer: "Yes! Through our Enterprise tier, we provide custom adapter training (LoRA/QLoRA) and full parameter fine-tuning on your proprietary datasets, internal wikis, and historical logs. We also configure dedicated isolated vector databases for high-speed semantic retrieval."
  },
  {
    id: "faq-7",
    category: "Playground",
    question: "How can I access and test the interactive AI Playground?",
    answer: "You can test the interactive AI Playground directly on this website with zero signup required! Simply scroll to the Interactive Playground section or click 'Try Demo' on any product card. You can experiment with Chat, Summarization, Content Generation, Prompt Optimization, and Code Explanation tools with high-fidelity simulated responses or connect your own API key for live inference."
  },
  {
    id: "faq-8",
    category: "General",
    question: "How do I contact your sales and engineering teams?",
    answer: "You can reach out through our Contact & Inquiry form below, email us directly at enterprise@nexora.ai, or click 'Request Product Demo' to schedule a private technical walkthrough with one of our Lead AI Solutions Architects."
  }
];

// Website Chatbot Quick Suggestions (Section 20.A)
export const CHATBOT_SUGGESTIONS = [
  "What AI products does Nexora offer?",
  "How much does the Professional plan cost?",
  "Can you explain your data privacy practices?",
  "Tell me about the AI Playground tools.",
  "How do I book an enterprise demo?"
];

// Chatbot Knowledge Base Heuristics
export const CHATBOT_KNOWLEDGE = {
  "product": "Nexora AI offers 6 flagship products: 1) AI Chat Assistant, 2) AI Image Generator, 3) AI Content Generator, 4) AI Code Assistant, 5) AI Data Analytics, and 6) AI Automation. You can explore all of them in the AI Products section above!",
  "price": "Our transparent plans start at $49/mo ($39/mo billed yearly) for Starter, $199/mo ($159/mo billed yearly) for Professional (Most Recommended), and bespoke Enterprise pricing with dedicated GPU clusters. Check out the Pricing section for the full comparison matrix!",
  "privacy": "We take data privacy with paramount seriousness. Enterprise inputs are NEVER used for foundation model training. We provide zero-retention guarantees, SOC2 Type II compliance, and air-gapped on-premise deployment options.",
  "playground": "Our Interactive AI Playground allows you to test 5 powerful tools: Chat Playground, Text Summarizer, Content Generator, Prompt Assistant, and Code Explanation Tool. Try it now in the Playground section!",
  "demo": "You can request an interactive product demonstration by clicking the 'Request Product Demo' button or submitting your details in the Contact section at the bottom of the page. An AI Solutions Architect will get in touch promptly!",
  "team": "Our leadership includes Dr. Elena Vance (CEO, ex-MIT CSAIL), Marcus Sterling (Chief AI Research Engineer), Sarah Jenkins (Lead ML Engineer), and other world-class researchers.",
  "default": "I'm NexoraBot, your AI concierge! I can help you learn about our AI products, pricing, security compliance, technology architecture, or assist you in scheduling an enterprise demonstration. What would you like to explore?"
};
