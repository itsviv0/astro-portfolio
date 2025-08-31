const projects = [
  {
    id: "ai-unit-test-generator",
    title: "AI GNU Unit Test Generator",
    description:
      "Built Grok-AI powered test case generator for C/C++ projects with real-time syntax validation",
    longDescription:
      "An intelligent test case generator that leverages Grok AI to create comprehensive unit tests for C/C++ projects with integrated coverage analysis.",
    problem:
      "Manual unit test creation for C/C++ projects was time-consuming and often resulted in incomplete test coverage.",
    approach:
      "Integrated Grok AI for intelligent test generation with real-time syntax validation and Google Test structure checks.",
    solution:
      "Built a professional CLI tool with gcov/lcov integration for automatic coverage analysis and HTML/JSON report generation.",
    outcome:
      "95%+ test coverage achieved with automated threshold validation and detailed logging.",
    impact: "95%+ test coverage",
    stack: ["Python", "Grok AI", "Google Test", "C/C++", "gcov/lcov", "CLI"],
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/itsviv0/Ai_gnu_unit_test_gen",
    demo: null,
    category: "AI/ML",
    featured: true,
    link: "/projects/ai-unit-test-generator",
  },
  {
    id: "express-supabase-api",
    title: "Express Supabase API",
    description:
      "RESTful API with Express.js and PostgreSQL, featuring automated testing with Keploy AI",
    longDescription:
      "A robust RESTful API built with Express.js and PostgreSQL, deployed serverlessly on Vercel with automated testing integration.",
    problem:
      "Need for a scalable API solution with automated testing and reliable deployment pipeline.",
    approach:
      "Built RESTful API with Express.js and PostgreSQL, integrated Keploy AI for automated test generation.",
    solution:
      "Implemented CRUD operations for managing notes with serverless deployment on Vercel.",
    outcome:
      "Automated testing with real-time code coverage analysis and seamless deployment pipeline.",
    impact: "Serverless deployment",
    stack: [
      "Express.js",
      "PostgreSQL",
      "Vercel",
      "Keploy AI",
      "REST API",
      "Node.js",
    ],
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/itsviv0/express-supabase-api",
    demo: "https://github.com/itsviv0/express-supabase-api",
    category: "Backend",
    featured: true,
    link: "/projects/express-supabase-api",
  },
  {
    id: "cropwise",
    title: "CropWise ML Platform",
    description:
      "Machine learning models using Scikit-Learn to predict optimal crops based on soil and climate data",
    longDescription:
      "An intelligent agricultural decision-making platform that uses machine learning to predict optimal crop selection based on environmental factors.",
    problem:
      "Farmers needed data-driven insights to make optimal crop selection decisions based on soil and climate conditions.",
    approach:
      "Created and trained multiple machine learning models using Scikit-Learn with comprehensive data analysis.",
    solution:
      "Developed 6 ML models with interactive GUI integration for user-friendly crop recommendations.",
    outcome:
      "Achieved over 95% model accuracy across all models, supporting smarter agricultural decision-making.",
    impact: "95%+ model accuracy",
    stack: [
      "Python",
      "Scikit-Learn",
      "Machine Learning",
      "GUI",
      "Data Analysis",
      "Agriculture",
    ],
    image:
      "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/itsviv0/CropWise",
    demo: "https://github.com/itsviv0/CropWise",
    category: "Machine Learning",
    featured: true,
    link: "/projects/cropwise",
  },
  {
    id: "repomarker",
    title: "RepoMarker",
    description:
      "Browser-based markdown editor with live preview and theme customization",
    longDescription:
      "A beginner-friendly markdown editor with GUI hot keys, live preview, and browser memory storage for seamless document editing.",
    problem:
      "Need for a simple, accessible markdown editor that works directly in the browser without installation.",
    approach:
      "Built a web-based editor with real-time preview, intuitive GUI controls, and local storage integration.",
    solution:
      "Implemented live preview functionality, theme customization, and browser memory for document persistence.",
    outcome:
      "User-friendly markdown editing experience with zero installation requirements and persistent storage.",
    stack: [
      "JavaScript",
      "HTML/CSS",
      "Markdown",
      "Browser APIs",
      "Local Storage",
      "Web",
    ],
    image:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/itsviv0/RepoMarker",
    demo: "http://repomarker.vivs.live/",
    category: "Frontend",
  },
];

export default projects;