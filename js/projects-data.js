/**
 * Portfolio Data Module
 * Profile, Real Projects, LinkedIn Certifications, Skills, and Multi-language (EN / AR) support.
 */

const PORTFOLIO_DATA = {
  profile: {
    en: {
      name: "Shaden Alsalmi",
      shortName: "Shaden",
      status: "Welcome Everyone!",
      role: "Computer Science & AI Student",
      studyField: "Computer Science & Artificial Intelligence",
      location: "Taif, Saudi Arabia",
      bio: "A computer science student who is interested in AI tools and technologies, passionate about Game development and design, Modern web experiences and interactive systems. Driven by curiosity, problem-solving, and a commitment to continuous learning.",
      stats: [
        { label: "Completed Projects", value: "3+", count: 3, suffix: "+" },
        { label: "Certifications", value: "4+", count: 4, suffix: "+" },
        { label: "Technical Skills", value: "18+", count: 18, suffix: "+" },
        { label: "Academic Standing", value: "Regular", isText: true }
      ]
    },
    ar: {
      name: "شادن السالمي",
      shortName: "شادن",
      status: "أهلاً وسهلاً بالجميع!",
      role: "طالبة علوم حاسب وذكاء اصطناعي",
      studyField: "علوم الحاسب والذكاء الاصطناعي",
      location: "الطائف، المملكة العربية السعودية",
      bio: "طالبة علوم حاسب مهتمة بأدوات وتقنيات الذكاء الاصطناعي، وشغوفة بتطوير الألعاب وتصميمها، وتجارب الويب الحديثة، والأنظمة التفاعلية. مدفوعة بالفضول، وحل المشكلات، والالتزام بالتعلم المستمر.",
      stats: [
        { label: "المشاريع المنجزة", value: "3+", count: 3, suffix: "+" },
        { label: "الشهادات والاعتمادات", value: "4+", count: 4, suffix: "+" },
        { label: "المهارات التقنية", value: "18+", count: 18, suffix: "+" },
        { label: "المستوى الأكاديمي", value: "منتظمة", isText: true }
      ]
    },
    contact: {
      email: "Shadoon-2424@hotmail.com",
      phone: "+966 50 565 5009",
      locationEn: "Taif, Saudi Arabia",
      locationAr: "الطائف، المملكة العربية السعودية",
      github: "https://github.com/shadoon54",
      linkedin: "https://www.linkedin.com/in/shaden-alsalmi-0b7b1140a/",
      twitter: "https://x.com/home",
      resumeUrl: "#"
    }
  },

  rolesTyped: {
    en: [
      "Computer Science",
      "Game Developer",
      "Web Applications Developer",
      "AI & Tech Enthusiast"
    ],
    ar: [
      "علوم حاسب",
      "مطورة ألعاب",
      "مطورة تطبيقات الويب",
      "مهتمة بالذكاء الاصطناعي والتقنية"
    ]
  },

  // Skills specified in Adjustments.md
  skills: {
    en: [
      {
        category: "Programming Languages",
        icon: "code",
        items: ["Python", "JavaScript", "Java", "C", "C++", "SQL"]
      },
      {
        category: "Web Development",
        icon: "globe",
        items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "SQL"]
      },
      {
        category: "Tools & Technologies",
        icon: "tool",
        items: ["Git", "GitHub", "VS Code", "Postman", "Figma"]
      },
      {
        category: "Soft Skills",
        icon: "users",
        items: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability"]
      }
    ],
    ar: [
      {
        category: "لغات البرمجة",
        icon: "code",
        items: ["Python", "JavaScript", "Java", "C", "C++", "SQL"]
      },
      {
        category: "تطوير الويب",
        icon: "globe",
        items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "SQL"]
      },
      {
        category: "الأدوات والتقنيات",
        icon: "tool",
        items: ["Git", "GitHub", "VS Code", "Postman", "Figma"]
      },
      {
        category: "المهارات الشخصية",
        icon: "users",
        items: ["التواصل الفعال", "العمل الجماعي", "حل المشكلات", "إدارة الوقت", "المرونة والتكيف"]
      }
    ]
  },

  // Real Projects specified in Adjustments.md
  projects: [
    {
      id: "2d-adventure-game",
      category: "software",
      categoryNameEn: "Desktop & Game Dev",
      categoryNameAr: "تطوير الألعاب والأنظمة",
      icon: "gamepad",
      image: "assets/images/game project.png",
      featured: true,
      githubUrl: "https://github.com/shadoon54/2D-Adventure-Game",
      demoUrl: "",
      tags: ["Java", "Swing", "AWT", "OOP", "Game Dev"],
      en: {
        title: "2D Adventure Game",
        tagline: "A 2D adventure exploration game developed in Java with interactive world map mechanics.",
        overview: "A simple short under-development 2D adventure game made in Java using Swing and AWT graphical libraries. The game features a playable character moving across a customized world map with quest mechanics to discover and find the hidden treasure. The game is an active work-in-progress.",
        highlights: [
          "Object-oriented architecture utilizing Java Swing and AWT for frame rendering",
          "Custom 2D grid-based player movement and collision boundaries",
          "Map rendering and interactive treasure hunt game loop",
          "Clean event listeners for keyboard controls and state management"
        ]
      },
      ar: {
        title: "لعبة مغامرات ثنائية الأبعاد (2D Adventure Game)",
        tagline: "لعبة مغامرات واستكشاف ثنائية الأبعاد مبنية بلغة Java مع ميكانيكا خريطة العالم التفاعلية.",
        overview: "مشروع لعبة مغامرات ثنائية الأبعاد بسيطة قيد التطوير مبنية بلغة Java باستخدام مكتبتي Swing و AWT الرسوميتين. تتميز اللعبة بشخصية اللاعب التي تتحرك عبر خريطة العالم المخصصة للبحث عن الكنز واكتشافه. المشروع قيد التطوير المستمر.",
        highlights: [
          "بنية برمجية كائنية التوجه (OOP) باستخدام مكتبات Java Swing و AWT للرسم",
          "نظام حركة تفاعلي للشخصية على شبكة الخريطة مع معالجة التصادمات",
          "تصميم خريطة العالم وآلية حلقة اللعبة للعثور على الكنز",
          "معالجة متقدمة لأحداث لوحة المفاتيح والتحكم بسلاسة"
        ]
      }
    },
    {
      id: "summer-training-2026",
      category: "web",
      categoryNameEn: "Web Application",
      categoryNameAr: "تطبيق ويب تفاعلي",
      icon: "globe",
      image: "assets/images/web project.jfif",
      featured: true,
      githubUrl: "https://github.com/shadoon54",
      demoUrl: "",
      tags: ["HTML", "CSS", "JavaScript", "Minigames", "Interactive UI"],
      en: {
        title: "Summer Training 2026 Project",
        tagline: "Interactive multi-minigame web platform for skills evaluation and learning.",
        overview: "A specialized web application engineered during Summer Training 2026 that features 3 interactive minigames designed to test and enhance user skills in English language proficiency, Microsoft Office tools, and sewing craftsmanship.",
        highlights: [
          "Modular front-end architecture with 3 dedicated interactive minigames",
          "Score tracking and instant skill assessment feedback loops",
          "Responsive, user-friendly UI with smooth animations and intuitive navigation",
          "Gamified educational experience evaluating practical real-world skills"
        ]
      },
      ar: {
        title: "مشروع التدريب الصيفي 2026 (Summer Training Project)",
        tagline: "منصة ويب تفاعلية تضم 3 ألعاب تعليمية مصغرة لتقييم المهارات واختبارها.",
        overview: "تطبيق ويب تم تطويره ضمن التدريب الصيفي لعام 2026، يحتوي على 3 ألعاب تفاعلية مصغرة مخصصة لاختبار وتقييم مهارات المستخدمين في كل من: اللغة الإنجليزية، وحزمة مايكروسوفت أوفيس (Microsoft Office)، وفنون الخياطة.",
        highlights: [
          "بنية واجهة أمامية تفاعلية تتضمن 3 ألعاب مصغرة متكاملة",
          "نظام حساب النقاط وتقييم الأداء الفوري للمستخدمين",
          "تصميم متجاوب وسهل الاستخدام مع تأثيرات بصرية جذابة",
          "دمج التلعيب التعليمي (Gamification) لتقييم المهارات العملية"
        ]
      }
    },
    {
      id: "Al-Madinah Bridge",
      category: "web platform",
      categoryNameEn: "Web Platform",
      categoryNameAr: "منصة ويب",
      icon: "globe",
      image: "assets/images/platform.png",
      featured: true,
      githubUrl: "https://github.com/shadoon54/Al-Madinah-Bridge",
      demoUrl: "",
      tags: ["HTML", "CSS", "JavaScript", "TypeScript", "Interactive UI", "Integrated AI"],
      en: {
        title: "Al-Madinah Bridge",
        tagline: "A web platform for connecting with the community.",
        overview: "a web application that links volunteers and visitors of Madinah holy mosque, Additionally featuring many services for both volunteer and visitor.",
        highlights: [
          "Connecting volunteers and visitors of Madinah holy mosque",
          "features many services for both volunteer and visitor"
        ]
      },
      ar: {
        title: "جسر المدينة المنورة",
        tagline: "منصة ويب مبتكرة تربط بين المتطوعين وزوار المسجد النبوي.",
        overview: "تطبيق ويب شامل يهدف إلى تسهيل التواصل بين المتطوعين وزوار المسجد النبوي في المدينة المنورة. يضم التطبيق العديد من الخدمات الموجهة لكل من المتطوعين والزوار لتحسين تجربتهم أثناء تواجدهم.",
        highlights: [
          "ربط سلس وفعال بين المتطوعين وزوار المسجد النبوي",
          "توفير باقة متنوعة من الخدمات المتكاملة لكلا الفئتين"
        ]
      }
    }
  ],

  // LinkedIn Certifications
  certifications: [
    {
      id: "cert-linkedin-profile",
      issuerIcon: "math",
      verified: true,
      credentialUrl: "https://www.linkedin.com/in/shaden-alsalmi-0b7b1140a/details/certifications/",
      en: {
        title: "Prerequisite Courses of Artificial Intelligence - Mathematics",
        issuer: "DeepLearning.AI",
        issueDate: "Completed",
        credentialId: "View on LinkedIn",
        description: "Completion badge for KAUST stage 1 - Mathematics pathway",
        skills: ["Machine Learning", "Probability", "Statistics", "Linear Algebra", "Calculus", "Artificial Neural Networks", "Data Science"]
      },
      ar: {
        title: "المقررات الدراسية المطلوبة في مجال الذكاء الاصطناعي - الرياضيات",
        issuer: "DeepLearning.AI",
        issueDate: "مكتمل",
        credentialId: "عرض في لينكد إن",
        description: "شارة إتمام المرحلة الأولى من مسار الرياضيات في جامعة الملك عبد الله للعلوم والتقنية",
        skills: ["الرياضيات", "التعلم الآلي", "الاحتمالات", "الإحصاء", "الجبر الخطي", "حساب التفاضل والتكامل", "الشبكات العصبونية الاصطناعية", "علم البيانات"]
      }
    },
    {
      id: "cert-web-fundamentals",
      issuerIcon: "code",
      verified: true,
      credentialUrl: "https://www.linkedin.com/in/shaden-alsalmi-0b7b1140a/details/certifications/",
      en: {
        title: "Prerequisite Courses of Artificial Intelligence - Python Basics",
        issuer: "University of Michigan",
        issueDate: "Completed",
        credentialId: "View on LinkedIn",
        description: "Completion badge for KAUST stage 1 - Python pathway",
        skills: ["Python", "Data Wrangling", "Data Visualization", "Machine Learning", "API", "Object-Oriented Programming", "Data Science"]
      },
      ar: {
        title: "المقررات الدراسية المطلوبة في مجال الذكاء الاصطناعي - أساسيات لغة بايثون",
        issuer: "جامعة مشيغان",
        issueDate: "مكتمل",
        credentialId: "عرض في لينكد إن",
        description: "شارة إتمام المرحلة الأولى من مسار لغة بايثون في جامعة الملك عبد الله للعلوم والتقنية",
        skills: ["بايثون", "تحليل البيانات", "تصميم الرسوم البيانية", "التعلم الآلي", "البرمجة كائنية التوجه", "علم البيانات"]
      }
    },
    {
      id: "cert-programming-problem-solving",
      issuerIcon: "grid",
      verified: true,
      credentialUrl: "https://www.linkedin.com/in/shaden-alsalmi-0b7b1140a/details/certifications/",
      en: {
        title: "Microsoft Office Specialist: Excel Associate",
        issuer: "Microsoft",
        issueDate: "Academic Certification",
        credentialId: "Completed",
        description: " Microsoft Certified Associate in Microsoft Excel validates expertise in data organization, calculations, and visualization.",
        skills: ["Excel", "Data Analysis", "Data Visualization", "Microsoft Office"]
      },
      ar: {
        title: "أخصائي مايكروسوفت أوفيس: إكسل",
        issuer: "Microsoft",
        issueDate: "شهادة معتمدة",
        credentialId: "مكتمل",
        description: "شهادة معتمدة من Microsoft في تخصص Microsoft Excel تثبت إتقان تنظيم البيانات وإجراء العمليات الحسابية وتصميم الرسوم البيانية.",
        skills: ["إكسل", "تحليل البيانات", "تصميم الرسوم البيانية", "برنامج مايكروسوفت أوفيس"]
      }
    },
    {
      id: "cert-database-systems",
      issuerIcon: "star",
      verified: true,
      credentialUrl: "https://www.linkedin.com/in/shaden-alsalmi-0b7b1140a/details/certifications/",
      en: {
        title: "Guinness World Record - AI Training Hackathon",
        issuer: "Kanz",
        issueDate: "Verified Credential",
        credentialId: "Completed",
        description: "Participation in the world's largest AI training hackathon, achieving a world record for the largest number of trainees in artificial intelligence.",
        skills: ["AI", "Machine Learning", "Deep Learning"]
      },
      ar: {
        title: "الرقم القياسي العالمي في الهاكاثون التدريبي للذكاء الاصطناعي",
        issuer: "كنز",
        issueDate: "شهادة معتمدة",
        credentialId: "مكتمل",
        description: "المشاركة في أكبر هاكاثون تدريبي للذكاء الاصطناعي في العالم، وتحقيق رقم قياسي عالمي لأكبر عدد من المتدربين في مجال الذكاء الاصطناعي.",
        skills: ["الذكاء الاصطناعي", "التعلم الآلي", "التعلم العميق"]
      }
    }
  ],

  // Complete UI Dictionary for English and Arabic
  i18n: {
    en: {
      navHome: "Home",
      navProjects: "Projects",
      navCertifications: "Certifications",
      navSkills: "Skills",
      navContact: "Contact",
      navAllProjects: "All Projects →",
      langToggleText: "العربية",

      heroGreeting: "Hi, I'm",
      heroGreetingBadge: "Welcome to my Portfolio",
      heroName: "Shaden Alsalmi",
      heroSpeechBubble: "Hi, I'm Shaden Alsalmi, nice to meet you :)",
      heroSpecializedIn: "Specialized in",
      studyFieldTitle: "Study Field:",
      studyFieldBadge: "Computer Science & Artificial Intelligence",
      heroBio: "A computer science student who is interested in AI tools and technologies, passionate about Game development and design, Modern web experiences and interactive systems. Driven by curiosity, problem-solving, and a commitment to continuous learning.",

      btnExploreProjects: "Explore Projects",
      btnCertifications: "Certifications",
      btnSkills: "Skills",
      btnContact: "Contact Me",
      btnGetInTouch: "Get In Touch",
      btnViewAllWorks: "View All Works",

      heroCardCertsTitle: "Certifications",
      heroCardCertsDesc: "Verified Credentials",
      heroCardProjectsTitle: "Projects Made",
      heroCardProjectsDesc: "Desktop & Web Apps",
      heroCardSkillsTitle: "Technical Skills",
      heroCardSkillsDesc: "Languages & Tools",
      heroCardFieldTitle: "Field of Study",
      heroCardFieldVal: "CS & AI",
      heroCardFieldDesc: "Undergraduate",

      badgeCode: "Vibe & Traditional coder",
      badgeAI: "Computer Science & AI",

      topProjectsTag: "Featured Works",
      topProjectsTitle: "Top",
      topProjectsSpan: "Projects",
      topProjectsDesc: "Personal and Academic projects test my technical skills and feature good programming practices that help me improve.",

      certsTag: "Credentials & Badges",
      certsTitle: "Professional",
      certsSpan: "Certifications",
      certsDesc: "All of my professional Certifications and badges in various computer fields, collected throughout my academic and professional path.",
      certsVerifiedBadge: "Verified Credential",
      certsVerifyBtn: "View Credential Details",

      ctaTitle: "Want to see all my applications and code repositories?",
      ctaDesc: "Browse the complete catalog of projects, code repositories, and software implementations.",
      ctaBtn: "Explore Full Projects Catalog",

      skillsTag: "Technical Toolbox",
      skillsTitle: "Skills &",
      skillsSpan: "Competencies",
      skillsDesc: "My technical skills range from development to non-technical areas.",

      contactTag: "Get In Touch",
      contactTitle: "Let's Build Something",
      contactSpan: "Exceptional",
      contactDesc: "Have an upcoming project, opportunity, or idea? Reach out directly or send a message below.",

      contactEmailLabel: "Email Address",
      contactPhoneLabel: "Phone & WhatsApp",
      contactLocationLabel: "Location",
      contactSocialLabel: "Connect on Networks",

      formNameLabel: "Your Name",
      formNamePlaceholder: "e.g. John Doe",
      formEmailLabel: "Email Address",
      formEmailPlaceholder: "e.g. john@example.com",
      formSubjectLabel: "Subject / Topic",
      formSubjectPlaceholder: "Project Inquiry / Message",
      formMessageLabel: "Message",
      formMessagePlaceholder: "Write your message here...",
      formSubmitBtn: "Send Message",
      formSendingBtn: "Sending...",

      footerCopy: "Built with precision, vibrant gradients & modern web standards.",

      // Projects Page
      projectsPageBackHome: "Back to Home",
      projectsPageTitle: "Projects &",
      projectsPageSpan: "Engineering Works",
      projectsPageDesc: "Browse through all featured systems, desktop games, and interactive web applications. Filter by category or search by keywords.",
      searchPlaceholder: "Search by title or stack (e.g. Java, React, Python)...",
      filterAll: "All Works",
      filterSoftware: "Desktop & Games",
      filterWeb: "Web Development",

      ctaProjectsPageTitle: "Interested in collaborating or discussing projects?",
      ctaProjectsPageDesc: "Let's discuss how my computer science and software development skills can add value.",

      modalDetailsTitle: "Project Overview & Details",
      modalHighlightsTitle: "Key Technical Highlights",
      modalTechTitle: "Technologies & Tools Used",
      modalDetailsBtn: "Details",
      modalLaunchDemoBtn: "Launch Demo",
      modalGithubBtn: "GitHub Repo",
      modalOpenAuthorityBtn: "Open LinkedIn Certifications",

      toastCopied: "Copied to clipboard:",
      toastFormSuccess: "Thank you! Your message has been sent successfully.",
      toastFormError: "Please fill out all required fields.",
      toastLangSwitched: "Language switched to English"
    },

    ar: {
      navHome: "الرئيسية",
      navProjects: "المشاريع",
      navCertifications: "الشهادات",
      navSkills: "المهارات",
      navContact: "تواصل معي",
      navAllProjects: "جميع المشاريع ←",
      langToggleText: "English",

      heroGreeting: "أهلاً، أنا",
      heroGreetingBadge: "أهلاً وسهلاً بكم في ملفي التعريفي",
      heroName: "شادن السالمي",
      heroSpeechBubble: "أهلاً، أنا شادن السالمي، سررت بلقائك :)",
      heroSpecializedIn: "متخصصة في",
      studyFieldTitle: "المجال الأكاديمي:",
      studyFieldBadge: "علوم الحاسب والذكاء الاصطناعي",
      heroBio: "طالبة علوم حاسب مهتمة بأدوات وتقنيات الذكاء الاصطناعي، وشغوفة بتطوير الألعاب وتصميمها، وتجارب الويب الحديثة، والأنظمة التفاعلية. مدفوعة بالفضول، وحل المشكلات، والالتزام بالتعلم المستمر.",

      btnExploreProjects: "استكشف المشاريع",
      btnCertifications: "الشهادات",
      btnSkills: "المهارات",
      btnContact: "تواصل معي",
      btnGetInTouch: "تواصل معي الآن",
      btnViewAllWorks: "عرض جميع الأعمال",

      heroCardCertsTitle: "الشهادات والاعتمادات",
      heroCardCertsDesc: "اعتمادات موثقة",
      heroCardProjectsTitle: "المشاريع المنجزة",
      heroCardProjectsDesc: "تطبيقات ويب ومكتبية",
      heroCardSkillsTitle: "المهارات التقنية",
      heroCardSkillsDesc: "لغات وأدوات برمجية",
      heroCardFieldTitle: "المجال الأكاديمي",
      heroCardFieldVal: "علوم حاسب وذكاء اصطناعي",
      heroCardFieldDesc: "طالبة جامعية",

      badgeCode: "كتابة الأكواد والبرمجة",
      badgeAI: "علوم الحاسب والذكاء الاصطناعي",

      topProjectsTag: "الأعمال والمشاريع",
      topProjectsTitle: "أبرز",
      topProjectsSpan: "المشاريع البرمجية",
      topProjectsDesc: "مشاريعي الشخصية والأكاديمية تبرز مهاراتي التقنية وتُظهر ممارسات برمجية جيدة تساعدني في التطور.",

      certsTag: "الاعتمادات والشهادات",
      certsTitle: "الشهادات",
      certsSpan: "والرخص المهنية",
      certsDesc: "كافة الشهادات والاعتمادات المهنية التي حصلت عليها في مختلف مجالات علوم الحاسب، والتي جمعتها على مدار مساري الأكاديمي والمهني.",
      certsVerifiedBadge: "اعتماد موثق",
      certsVerifyBtn: "عرض تفاصيل الاعتماد",

      ctaTitle: "هل ترغب في استعراض كافة المشاريع والأكواد البرمجية؟",
      ctaDesc: "تصفح الدليل الشامل لكافة مشاريعي، وتطبيقاتي البرمجية، والمستودعات المتاحة.",
      ctaBtn: "استكشف معرض المشاريع بالكامل",

      skillsTag: "صندوق الأدوات التقنية",
      skillsTitle: "المهارات",
      skillsSpan: "والخبرات",
      skillsDesc: "تتراوح مهاراتي التقنية بين البرمجة والجوانب غير التقنية.",

      contactTag: "تواصل معي",
      contactTitle: "لنصنع معاً شيئاً",
      contactSpan: "استثنائياً",
      contactDesc: "هل لديك مشروع قادم، أو فكرة تعاون، أو استفسار؟ يسعدني تواصلك المباشر أو إرسال رسالتك أدناه.",

      contactEmailLabel: "البريد الإلكتروني",
      contactPhoneLabel: "رقم الهاتف والواتساب",
      contactLocationLabel: "الموقع الجغرافي",
      contactSocialLabel: "منصات التواصل الاجتماعي",

      formNameLabel: "الاسم الكامل",
      formNamePlaceholder: "مثال: شادن السالمي",
      formEmailLabel: "البريد الإلكتروني",
      formEmailPlaceholder: "مثال: name@example.com",
      formSubjectLabel: "عنوان الموضوع / الرسالة",
      formSubjectPlaceholder: "استفسار عن مشروع / فرصة تعاون",
      formMessageLabel: "الرسالة",
      formMessagePlaceholder: "اكتب رسالتك بالتفصيل هنا...",
      formSubmitBtn: "إرسال الرسالة",
      formSendingBtn: "جارٍ الإرسال...",

      footerCopy: "تم البناء بأحدث المعايير البرمجية، وتدرجات الألوان العصرية المشرقة.",

      // Projects Page
      projectsPageBackHome: "العودة للرئيسية",
      projectsPageTitle: "معرض المشاريع",
      projectsPageSpan: "والأعمال الهندسية",
      projectsPageDesc: "استعرض كافة الأنظمة البرمجية، وألعاب سطح المكتب، وتطبيقات الويب. يمكنك التصفية حسب التصنيف أو البحث بالكلمات المفتاحية.",
      searchPlaceholder: "ابحث بالاسم أو التقنية (مثل: Java, React, JavaScript)...",
      filterAll: "جميع الأعمال",
      filterSoftware: "تطبيقات وألعاب",
      filterWeb: "تطوير الويب",

      ctaProjectsPageTitle: "مهتم بالتعاون البرمجي أو استكشاف الأفكار؟",
      ctaProjectsPageDesc: "يسعدني مناقشة كيف يمكن لمهاراتي في علوم الحاسب وتطوير البرمجيات تقديم قيمة مضافة لمشروعك.",

      modalDetailsTitle: "نظرة عامة على المشروع",
      modalHighlightsTitle: "أبرز المميزات التقنية",
      modalTechTitle: "التقنيات والأدوات المستخدمة",
      modalDetailsBtn: "تفاصيل",
      modalLaunchDemoBtn: "تجربة المشروع",
      modalGithubBtn: "مستودع GitHub",
      modalOpenAuthorityBtn: "فتح شهادات LinkedIn",

      toastCopied: "تم النسخ إلى الحافظة:",
      toastFormSuccess: "شكراً لك! تم إرسال رسالتك بنجاح.",
      toastFormError: "يرجى تعبئة كافة الحقول المطلوبة.",
      toastLangSwitched: "تم تغيير اللغة إلى العربية"
    }
  }
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
