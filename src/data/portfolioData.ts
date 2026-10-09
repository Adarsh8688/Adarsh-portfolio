export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Data Analytics' | 'Data Engineering' | 'Business Analytics';
  featured: boolean;
  tagline: string;
  description: string;
  keyMetric?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export interface VideoTranscriptItem {
  timestamp: string;
  title: string;
  text: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    fullName: string;
    headline: string;
    avatarUrl?: string;
    photoUrl?: string;
    shortBio: string;
    longBio: string[];
    location: string;
    education: {
      degree: string;
      institution: string;
      location: string;
      graduationDate?: string;
      status?: string;
      focus: string;
    };
    certifications: {
      title: string;
      issuer: string;
      platform?: string;
      verified?: boolean;
      description: string;
      skills?: string[];
    }[];
    careerInterests?: string;
    targetRoles?: string[];
    status: string;
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  video: {
    sectionHeading: string;
    sectionSubtitle: string;
    videoUrl: string; // Configure local video path e.g. "/videos/intro.mp4" or external video URL
    posterUrl: string;
    isPlaceholder: boolean;
    placeholderNote: string;
    transcripts: VideoTranscriptItem[];
  };
  skills: SkillCategory[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Adarsh",
    fullName: "Adarsh Mamidala",
    headline: "Data Science | Machine Learning | Data Analytics",
    avatarUrl: "/images/adarsh-real-photo.png",
    photoUrl: "/images/adarsh-real-photo.png",
    shortBio:
      "Turning data into insights and building practical machine learning solutions. M.Sc. Data Science graduate based in Germany, specializing in Machine Learning, Spatio-Temporal Graph Neural Networks, and scalable analytics workflows.",
    longBio: [
      "I completed my Master of Science in Data Science at the University of Europe for Applied Sciences (graduated August 2026). My academic and practical focus centers on the intersection of deep learning, spatial-temporal graph modeling, and end-to-end data analytics.",
      "In my Master's thesis research, I investigated Spatio-Temporal Graph Neural Networks for short-term traffic speed forecasting on the METR-LA sensor dataset, reducing the prediction error (MAE) from 3.8 to 3.1—an 18% improvement over standard baselines.",
      "Beyond machine learning algorithms, I believe high-value data science requires solid engineering, verified competencies, and transparent data governance. I hold verified Coursera certifications in SQL, Python, and Data Science, alongside a GDPR Fundamentals certification, and regularly build reproducible data pipelines using SQL, PostgreSQL, PySpark, and interactive dashboards in Streamlit and Power BI.",
      "Currently based in Germany, I am open to opportunities in Data Science, Data Analytics, Business Intelligence, and Machine Learning where I can apply Python, SQL, data visualization, and predictive modeling to solve real-world problems."
    ],
    careerInterests:
      "I am interested in opportunities in Data Science, Data Analytics, Business Intelligence, and Machine Learning, where I can apply Python, SQL, data visualization, and predictive modeling to solve real-world problems.",
    targetRoles: [
      "Junior Data Analyst",
      "Junior Business Intelligence Analyst",
      "Junior Data Scientist",
      "Machine Learning Intern",
      "Data Science Intern",
      "Working Student — Data Analytics",
      "Junior Power BI Analyst"
    ],
    location: "Germany",
    education: {
      degree: "Master of Science (M.Sc.) in Data Science",
      institution: "University of Europe for Applied Sciences",
      location: "Germany",
      graduationDate: "August 2026",
      status: "Completed (August 2026)",
      focus: "Machine Learning, Spatio-Temporal Graph Neural Networks, and Big Data Analytics",
    },
    certifications: [
      {
        title: "SQL for Data Science",
        issuer: "Coursera",
        platform: "Coursera",
        verified: true,
        description: "Advanced SQL querying, complex multi-table joins, subqueries, aggregations, window functions, and relational database management.",
        skills: ["Complex SQL", "Relational DBs", "Window Functions", "Data Aggregation"],
      },
      {
        title: "Python for Data Science",
        issuer: "Coursera",
        platform: "Coursera",
        verified: true,
        description: "Python programming for Data Science, data manipulation with Pandas & NumPy, algorithmic thinking, and automated data pipelines.",
        skills: ["Python", "Pandas", "NumPy", "Data Preprocessing"],
      },
      {
        title: "Data Science Specialization",
        issuer: "Coursera",
        platform: "Coursera",
        verified: true,
        description: "End-to-end data science lifecycle, predictive modeling, statistical inference, machine learning workflows, and data-driven analysis.",
        skills: ["Machine Learning", "Statistical Modeling", "Predictive Analytics", "Feature Engineering"],
      },
      {
        title: "GDPR Fundamentals",
        issuer: "Certified Data Protection",
        platform: "Governance Institute",
        verified: true,
        description: "Data privacy regulations, compliance standards, consent mechanisms, and ethical, privacy-preserving data practices.",
        skills: ["Data Governance", "EU Privacy Law", "Compliance", "Privacy by Design"],
      },
    ],
    status: "Open to Full-Time Data Science, Machine Learning & Analytics Roles in Germany",
  },
  social: {
    github: "https://github.com/Adarsh8688",
    linkedin: "https://www.linkedin.com/in/mamidala-adarsh-1519a62a2/",
    email: "mamidalaadarsh99@gmail.com", // Editable email address
  },
  video: {
    sectionHeading: "Introduction Animation Video",
    sectionSubtitle:
      "Meet Adarsh through an interactive animated video presentation exploring his thesis research, technical toolkit, and practical data science workflows.",
    videoUrl: "", // Leave blank or add path (e.g. "/videos/adarsh-ai-presenter.mp4" or web stream)
    posterUrl: "/images/adarsh-natural-portrait.jpg",
    isPlaceholder: true,
    placeholderNote:
      "An AI-generated presenter video will be placed here soon. Explore the interactive controls below, view the verified introduction script, or read through the full transcript.",
    transcripts: [
      {
        timestamp: "00:00 - 00:28",
        title: "Introduction & Academic Foundation",
        text: "Hello! I am Adarsh, an M.Sc. Data Science graduate based in Germany, having completed my Master of Science at the University of Europe for Applied Sciences in August 2026. My focus lies at the core of Machine Learning, predictive modeling, and scalable analytics.",
      },
      {
        timestamp: "00:28 - 01:10",
        title: "Master's Thesis: Traffic Speed Forecasting",
        text: "In my Master's thesis, I tackled Short-Term Traffic Speed Forecasting using Spatio-Temporal Graph Neural Networks (ST-GNNs). By modeling road network sensor graphs on the benchmark METR-LA dataset, we captured complex spatio-temporal dynamics and reduced Mean Absolute Error from 3.8 to 3.1—an 18% reduction in forecasting error.",
      },
      {
        timestamp: "01:10 - 01:45",
        title: "Full Data Lifecycle & Operational Intelligence",
        text: "Beyond theoretical models, I develop real-world data platforms and operational intelligence workflows. From building shipment delay prediction and risk-scoring systems with Streamlit to designing event-driven streaming architectures with Debezium CDC, Kafka, and PySpark, I build systems that connect raw data to actionable decisions.",
      },
      {
        timestamp: "01:45 - 02:10",
        title: "Verified Certifications & Career Focus",
        text: "I also hold verified Coursera certifications in SQL, Python, and Data Science, along with GDPR Fundamentals certification, prioritizing rigorous analytics and privacy-compliant data practices. I am actively seeking Data Science and Machine Learning opportunities in Germany and across Europe. Feel free to explore my projects below and connect with me on GitHub and LinkedIn!",
      },
    ],
  },
  skills: [
    {
      category: "Programming",
      description: "Core languages used for predictive modeling, automation, and structured querying.",
      skills: [
        { name: "Python", level: "Advanced", context: "Core language for ML modeling, deep learning pipelines, and data manipulation • Coursera Verified." },
        { name: "SQL", level: "Advanced", context: "Complex joins, CTEs, window functions, relational aggregations, and query optimization • Coursera Verified." },
      ],
    },
    {
      category: "Data Analysis",
      description: "Libraries and statistical techniques for exploratory analysis and feature engineering.",
      skills: [
        { name: "Pandas", level: "Proficient", context: "Data manipulation, transformation, time-series indexing, and preprocessing." },
        { name: "NumPy", level: "Proficient", context: "High-performance vectorized operations, array indexing, and linear algebra routines." },
        { name: "SciPy", level: "Intermediate", context: "Statistical tests, distributions, correlation calculations, and numerical methods." },
        { name: "Exploratory Data Analysis (EDA)", level: "Advanced", context: "Hypothesis testing, outlier detection, distribution analysis, and data cleansing." },
      ],
    },
    {
      category: "Machine Learning",
      description: "Predictive architectures, deep learning models, and quantitative evaluation.",
      skills: [
        { name: "Graph Neural Networks (GNN)", level: "Specialized", context: "Spatio-Temporal Graph Neural Networks for dynamic graph topology and time-series forecasting." },
        { name: "Supervised Learning", level: "Proficient", context: "Regression, classification, decision trees, random forests, and gradient boosting." },
        { name: "Deep Learning Architectures", level: "Proficient", context: "Neural network design, spatial-temporal graph modeling, loss optimization." },
        { name: "Model Evaluation & Metrics", level: "Advanced", context: "MAE, RMSE, ROC-AUC, cross-validation, and residual analysis." },
      ],
    },
    {
      category: "Visualization",
      description: "Interactive dashboards and visual storytelling for technical and business stakeholders.",
      skills: [
        { name: "Streamlit", level: "Advanced", context: "Rapid deployment of interactive ML dashboards, multi-page web applications, and analytics tools." },
        { name: "Power BI", level: "Proficient", context: "Interactive business reporting, KPI monitoring dashboards, and executive visual analytics." },
        { name: "Matplotlib", level: "Proficient", context: "Custom scientific figures, loss curve plots, and multi-panel diagnostic charts." },
        { name: "Seaborn", level: "Proficient", context: "Statistical graphics, correlation heatmaps, bivariate distributions, and regression plots." },
        { name: "Excel", level: "Proficient", context: "Data modeling, pivot tables, quick analytical sanity checks, and reporting." },
      ],
    },
    {
      category: "Tools and Technologies",
      description: "Development environments, databases, data engineering tools, and governance.",
      skills: [
        { name: "Git & GitHub", level: "Proficient", context: "Version control, collaborative code reviews, branching workflows, and open-source hosting." },
        { name: "Jupyter Notebooks", level: "Advanced", context: "Reproducible research, exploratory modeling, data visualization, and thesis experiments." },
        { name: "PostgreSQL", level: "Proficient", context: "Relational database schema modeling, indexing, ACID transactions, and analytical storage." },
        { name: "PySpark & Apache Kafka", level: "Intermediate", context: "Streaming event ingestion, CDC data contracts, and distributed dataframe processing." },
        { name: "GDPR & Data Compliance", level: "Certified", context: "GDPR Fundamentals certified, privacy-by-design standards, anonymization, and governance." },
      ],
    },
  ],
  projects: [
    {
      id: "traffic-speed-forecasting",
      title: "Short-Term Traffic Speed Forecasting (GNN)",
      category: "Machine Learning",
      featured: true,
      tagline: "Master's Thesis Research: Spatio-Temporal Graph Neural Networks",
      description:
        "Engineered Spatio-Temporal Graph Neural Networks (ST-GNNs) on highway sensor network benchmarks (METR-LA dataset) to capture topological road connectivity and non-linear temporal dynamics in short-term traffic speed forecasting.",
      keyMetric: "Reduced MAE from 3.8 to 3.1 (~18% error reduction)",
      technologies: ["Python", "PyTorch", "Graph Neural Networks", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/Adarsh8688/Short-Term-Traffic-Speed-Forecasting",
      highlights: [
        "Evaluated on the complex METR-LA highway sensor network dataset",
        "Modeled topological spatial road dependencies using dynamic graph adjacency matrices",
        "Achieved an 18% reduction in Mean Absolute Error over baseline forecasting methods",
        "Formulated as part of Master's thesis research at University of Europe for Applied Sciences, Germany",
      ],
    },
    {
      id: "logistics-operations-intelligence",
      title: "Logistics Operations Intelligence Platform",
      category: "Machine Learning",
      featured: true,
      tagline: "End-to-End Shipment Risk Scoring & Delay Prediction",
      description:
        "An end-to-end logistics analytics and machine learning solution for analyzing shipment throughput, freight cost ratios, delivery delays, and warehouse utilization risks. Combines PostgreSQL data storage, ML classification, and an interactive Streamlit UI.",
      keyMetric: "Live Deployed Streamlit Cloud Application",
      technologies: ["Python", "PostgreSQL", "SQL Analytics", "Streamlit", "Machine Learning", "EDA", "Risk Scoring"],
      githubUrl: "https://github.com/Adarsh8688/logistics-operations-intelligence",
      liveUrl: "https://adarsh8688-https-github-com-yourusername-lo-srcdashboard-33sz4c.streamlit.app/",
      highlights: [
        "Interactive Streamlit web dashboard deployed for operational stakeholder monitoring",
        "Predictive classification pipeline to forecast delivery delays prior to transit",
        "Custom operational risk scoring formula prioritizing high-exposure shipments",
        "SQL schema modeling for warehouse damage claims and utilization bottlenecks",
      ],
    },
    {
      id: "dataforge-platform",
      title: "DataForge: Event-Driven Streaming Data Platform",
      category: "Data Engineering",
      featured: true,
      tagline: "Real-Time CDC, Kafka, Data Contracts & PySpark",
      description:
        "Designed an event-driven data platform for e-commerce operational intelligence. Implements Change Data Capture (CDC) via Debezium and Kafka, enforces schema contracts, transforms stream batches with PySpark, and delivers analytical data to Azure Data Lake and Power BI.",
      keyMetric: "Near-Real-Time Streaming Pipeline Architecture",
      technologies: ["Python", "PySpark", "Apache Kafka", "PostgreSQL", "Debezium", "Azure Data Lake", "dbt", "Power BI"],
      githubUrl: "https://github.com/Adarsh8688/dataforge-event-driven-data-platform",
      highlights: [
        "Change Data Capture (CDC) tracking live transactional database mutations",
        "Schema Registry and strict Data Contract enforcement preventing schema drift",
        "Distributed stream processing with PySpark for aggregations and cleansing",
        "Analytical warehousing architecture ready for dbt models and Power BI reporting",
      ],
    },
    {
      id: "bike-dashboard",
      title: "Washington D.C. Bike Demand Analytics",
      category: "Data Analytics",
      featured: false,
      tagline: "Multi-Variate Temporal & Meteorological Demand Modeling",
      description:
        "Interactive Streamlit application exploring hourly bike rental patterns across Washington D.C. Evaluates multi-season fluctuations, working-day versus holiday demand, and weather condition impacts.",
      technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn", "NumPy", "SciPy"],
      githubUrl: "https://github.com/Adarsh8688/bike-dashboard",
      highlights: [
        "Dynamic multi-dimensional filtering by year, season, and working-day type",
        "Correlation heatmaps analyzing temperature, humidity, and wind speed vs. rental volume",
        "Hourly usage curves illustrating commuter peaks vs. weekend recreational patterns",
      ],
    },
    {
      id: "product-pricing-strategies",
      title: "Product Pricing Strategies & Sales Performance",
      category: "Business Analytics",
      featured: false,
      tagline: "Discount Elasticity & Profit Margin Optimization",
      description:
        "Data-driven pricing analytics dashboard evaluating how varying discount levels and regional pricing strategies impact sales performance, gross profit margins, and volume across product categories.",
      technologies: ["Python", "Streamlit", "Pandas", "Seaborn", "Matplotlib"],
      githubUrl: "https://github.com/Adarsh8688/Product_pricing_strategies_and_sales_performance",
      highlights: [
        "Interactive category and temporal filtering via Streamlit sidebar",
        "Visualized discount sensitivity curves and product profitability thresholds",
        "Automated exploratory statistics on multi-year transactional datasets",
      ],
    },
    {
      id: "chinook-sql-analysis",
      title: "Chinook Store SQL & Customer Intelligence",
      category: "Data Analytics",
      featured: false,
      tagline: "Relational Database Analytics & Business KPIs",
      description:
        "Extensive SQL analytics project querying a multi-table relational digital media store database. Uncovers revenue leaders by country, track genre preferences, customer lifetime value, and support team efficiency.",
      technologies: ["SQL", "Python", "SQLite", "Jupyter Notebook", "Pandas"],
      githubUrl: "https://github.com/Adarsh8688/chinook-sql-python-analysis",
      highlights: [
        "Complex multi-table joins, subqueries, and Common Table Expressions (CTEs)",
        "Country-level customer acquisition and average revenue per user (ARPU) metrics",
        "Data extraction and visualization bridging relational SQL to Python analytical notebooks",
      ],
    },
  ],
};
