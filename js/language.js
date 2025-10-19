// Language translations object
const translations = {
    en: {
        meta_title: "Emiliano Gómez - Full Stack Developer",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hey, I'm",
        hero_title: "Full Stack Developer & AI Enthusiast",
        hero_bio: "I build beautiful, scalable web applications with a passion for AI and data analysis. Specialized in modern web technologies, machine learning integration, and cloud infrastructure.",
        cta_projects: "View Projects",
        cta_contact: "Get in Touch",
        hero_social: "Connect with me:",
        stats_projects: "Projects Delivered",
        stats_languages: "Languages",
        stats_startup: "Founder @ Intone",
        stats_skills: "AWS In Progress",
        about_title: "About Me",
        about_paragraph1: "I'm a Full Stack Developer from Chile, recently graduated with a strong passion for building innovative AI-powered solutions and automation tools. My focus is on turning ideas into functional, scalable products that solve real problems in the tech ecosystem.",
        about_paragraph2: "Currently, I'm launching my own startup Intone (intone.app) under NAMTAFLABS, where I'm developing intelligent automation and AI tools for developers. My recent projects like LucidSpeakAI demonstrate my expertise in AI integration, while Stock Tracker showcases my ability to build robust inventory management systems.",
        about_paragraph3: "I'm fluent in Spanish (native), proficient in English (advanced), and have intermediate Portuguese skills. I'm also pursuing my AWS Cloud Practitioner certification to expand my cloud infrastructure expertise. My philosophy: build fast, iterate based on feedback, and always focus on user experience.",
        experience_title: "My Journey",
        exp_role1: "Founder @ Intone",
        exp_company1: "NAMTAFLABS - Personal Projects Startup",
        exp_description1: "Building innovative AI-powered tools and automation projects. Currently developing Intone (intone.app), focusing on intelligent solutions for modern developers.",
        exp_role2: "Full Stack Developer",
        exp_company2: "Freelance & Open Source",
        exp_description2: "Specialized in building scalable web applications, AI integrations, and inventory management systems. Contributed to multiple open-source projects.",
        exp_role3: "Recent Graduate",
        exp_company3: "Professional Development in Computer Science",
        exp_description3: "Completed studies with focus on full-stack development, cloud infrastructure, and modern web technologies. Now focused on practical project delivery and startup development.",
        skills_title: "Skills & Technologies",
        skills_frontend: "Frontend Development",
        skills_backend: "Backend Development",
        skills_tools: "Tools & Platforms",
        languages_title: "Languages & Certifications",
        languages_heading: "Languages",
        certifications_heading: "Certifications & Goals",
        cert_aws: "AWS Cloud Practitioner",
        cert_aws_status: "In Progress - Q4 2024",
        cert_degree: "Professional Degree",
        cert_degree_field: "Full Stack Developer - 2024",
        cert_startup: "Founder - Intone Startup",
        cert_startup_desc: "NAMTAFLABS - AI & Automation Solutions",
        cert_google_analytics: "Google Data Analytics Professional",
        cert_google_analytics_desc: "Professional Certificate & Specialization",
        projects_title: "Featured Projects",
        projects_subtitle: "Innovating with AI and Modern Web Technologies",
        project_intone_title: "Intone - NAMTAFLABS",
        project_intone_description: "Personal startup developing innovative AI-powered automation tools for developers. Building the next generation of intelligent productivity solutions.",
        badge_startup: "🚀 CURRENT STARTUP",
        button_visit_intone: "Visit intone.app",
        button_github: "GitHub",
        projects_featured_works: "Featured Works",
        project1_title: "Intone - LucidSpeakAI",
        project1_description: "Advanced AI-powered speech recognition and analysis platform with real-time transcription capabilities. Part of the Intone ecosystem.",
        project2_title: "Stock & Expiry Tracker",
        project2_description: "Comprehensive inventory management system with real-time stock tracking, expiration alerts, and Odoo API integration.",
        project3_title: "AIVideoMaker",
        project3_description: "Intelligent video generation tool powered by AI, creating professional-quality videos automatically for content creators.",
        project4_title: "Chrome Scripts",
        project4_description: "Collection of powerful browser extensions and automation scripts to enhance productivity and streamline workflows.",
        view_project: "View Project",
        contact_title: "Get In Touch",
        contact_description: "Have a project in mind or want to collaborate? Feel free to reach out!",
        contact_email: "Email",
        contact_github: "GitHub",
        contact_linkedin: "LinkedIn",
        contact_availability: "Available for freelance projects and full-time opportunities",
        footer_text_prefix: "Made with ❤️ by Emiliano Gómez ©",
        footer_domain_label: "Explore more at:",
        languages_title: "Languages",
        lang_spanish: "Spanish",
        lang_spanish_level: "Native Speaker",
        lang_english: "English",
        lang_english_level: "Advanced / Fluent",
        lang_portuguese: "Portuguese",
        lang_portuguese_level: "Intermediate"
    },
    es: {
        meta_title: "Emiliano Gómez - Desarrollador Full Stack",
        nav_about: "Acerca de",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        hero_greeting: "Hola, soy",
        hero_title: "Desarrollador Full Stack e Entusiasta de IA",
        hero_bio: "Construyo aplicaciones web hermosas y escalables con pasión por IA y análisis de datos. Especializado en tecnologías web modernas, integración de machine learning e infraestructura en la nube.",
        cta_projects: "Ver Proyectos",
        cta_contact: "Ponte en Contacto",
        hero_social: "Conéctate conmigo:",
        stats_projects: "Proyectos Entregados",
        stats_languages: "Idiomas",
        stats_startup: "Fundador @ Intone",
        stats_skills: "AWS En Progreso",
        about_title: "Acerca de Mí",
        about_paragraph1: "Soy un Desarrollador Full Stack de Chile, recientemente graduado con una fuerte pasión por construir soluciones innovadoras impulsadas por IA y herramientas de automatización. Mi enfoque es convertir ideas en productos funcionales y escalables que resuelven problemas reales en el ecosistema tecnológico.",
        about_paragraph2: "Actualmente, estoy lanzando mi propia startup Intone (intone.app) bajo NAMTAFLABS, donde estoy desarrollando herramientas de automatización inteligente e IA para desarrolladores. Mis proyectos recientes como LucidSpeakAI demuestran mi experiencia en integración de IA, mientras que Stock Tracker muestra mi capacidad para construir sistemas robustos de gestión de inventario.",
        about_paragraph3: "Soy fluido en español (nativo), competente en inglés (avanzado) y tengo habilidades intermedias en portugués. También estoy persiguiendo mi certificación AWS Cloud Practitioner para expandir mi experiencia en infraestructura en la nube. Mi filosofía: construir rápido, iterar basándome en retroalimentación y siempre enfocarse en la experiencia del usuario.",
        experience_title: "Mi Trayectoria",
        exp_role1: "Fundador @ Intone",
        exp_company1: "NAMTAFLABS - Startup de Proyectos Personales",
        exp_description1: "Construyendo herramientas innovadoras impulsadas por IA y proyectos de automatización. Actualmente desarrollando Intone (intone.app), enfocándose en soluciones inteligentes para desarrolladores modernos.",
        exp_role2: "Desarrollador Full Stack",
        exp_company2: "Freelance & Código Abierto",
        exp_description2: "Especializado en construcción de aplicaciones web escalables, integraciones de IA y sistemas de gestión de inventario. Contribuido a múltiples proyectos de código abierto.",
        exp_role3: "Graduado Reciente",
        exp_company3: "Desarrollo Profesional en Ciencias de la Computación",
        exp_description3: "Completé estudios con enfoque en desarrollo full-stack, infraestructura en la nube y tecnologías web modernas. Ahora enfocado en entrega de proyectos prácticos y desarrollo de startups.",
        skills_title: "Habilidades y Tecnologías",
        skills_frontend: "Desarrollo Frontend",
        skills_backend: "Desarrollo Backend",
        skills_tools: "Herramientas y Plataformas",
        languages_title: "Idiomas y Certificaciones",
        languages_heading: "Idiomas",
        certifications_heading: "Certificaciones y Objetivos",
        cert_aws: "AWS Cloud Practitioner",
        cert_aws_status: "En Progreso - Q4 2024",
        cert_degree: "Título Profesional",
        cert_degree_field: "Desarrollador Full Stack - 2024",
        cert_startup: "Fundador - Startup Intone",
        cert_startup_desc: "NAMTAFLABS - Soluciones de IA y Automatización",
        cert_google_analytics: "Google Data Analytics Professional",
        cert_google_analytics_desc: "Certificado Profesional y Especialización",
        projects_title: "Proyectos Destacados",
        projects_subtitle: "Innovando con IA y Tecnologías Web Modernas",
        project_intone_title: "Intone - NAMTAFLABS",
        project_intone_description: "Startup personal desarrollando herramientas innovadoras de automatización impulsadas por IA para desarrolladores. Construyendo la próxima generación de soluciones de productividad inteligente.",
        badge_startup: "🚀 STARTUP ACTUAL",
        button_visit_intone: "Visita intone.app",
        button_github: "GitHub",
        projects_featured_works: "Trabajos Destacados",
        project1_title: "Intone - LucidSpeakAI",
        project1_description: "Plataforma avanzada de reconocimiento y análisis de voz impulsada por IA con capacidades de transcripción en tiempo real. Parte del ecosistema Intone.",
        project2_title: "Stock & Expiry Tracker",
        project2_description: "Sistema integral de gestión de inventario con seguimiento de stock en tiempo real, alertas de vencimiento e integración con API Odoo.",
        project3_title: "AIVideoMaker",
        project3_description: "Herramienta inteligente de generación de videos impulsada por IA, creando videos de calidad profesional automáticamente para creadores de contenido.",
        project4_title: "Chrome Scripts",
        project4_description: "Colección de potentes extensiones de navegador y scripts de automatización para mejorar la productividad y optimizar flujos de trabajo.",
        view_project: "Ver Proyecto",
        contact_title: "Ponte en Contacto",
        contact_description: "¿Tienes un proyecto en mente o quieres colaborar? ¡Siéntete libre de contactarme!",
        contact_email: "Correo Electrónico",
        contact_github: "GitHub",
        contact_linkedin: "LinkedIn",
        contact_availability: "Disponible para proyectos freelance y oportunidades de tiempo completo",
        footer_text_prefix: "Hecho con ❤️ por Emiliano Gómez ©",
        footer_domain_label: "Explora más en:",
        languages_title: "Idiomas",
        lang_spanish: "Español",
        lang_spanish_level: "Hablante Nativo",
        lang_english: "Inglés",
        lang_english_level: "Avanzado / Fluido",
        lang_portuguese: "Portugués",
        lang_portuguese_level: "Intermedio"
    }
};

// Current language
let currentLanguage = 'en';

// Initialize language
function initLanguage() {
    // Try to get saved language preference
    const savedLanguage = localStorage.getItem('portfolio-language');
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    } else {
        // Detect browser language
        const browserLanguage = navigator.language.split('-')[0].toLowerCase();
        
        // Check if browser language is supported
        if (browserLanguage === 'es') {
            currentLanguage = 'es';
        } else {
            currentLanguage = 'en';
        }
    }
    
    // Update the page with the detected language
    updatePageLanguage();
    updateLanguageButton();
}

// Update all text on the page based on current language
function updatePageLanguage() {
    // Update page title
    document.documentElement.lang = currentLanguage;
    
    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[currentLanguage][key]) {
            // Check if it's a form input or textarea
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'LABEL') {
                element.textContent = translations[currentLanguage][key];
            } else if (element.tagName === 'TITLE') {
                element.textContent = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Save language preference
    localStorage.setItem('portfolio-language', currentLanguage);
}

// Update language button to show current language
function updateLanguageButton() {
    const langToggle = document.getElementById('language-toggle');
    
    if (langToggle) {
        if (currentLanguage === 'en') {
            langToggle.textContent = 'EN';
        } else {
            langToggle.textContent = 'ES';
        }
    }
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    updatePageLanguage();
    updateLanguageButton();
    
    // Restart typing animation if it exists
    if (typeof window.typeWriter === 'function') {
        window.typeWriter();
    }
}

// Event listener for language toggle button
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
});
