"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "ro" | "ru" | "en";

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: "ro", setLanguage: () => {} });
const originalTexts = new WeakMap<Text, string>();

const translations: Record<"en" | "ru", Record<string, string>> = {
  en: {
    "Produse": "Products", "Despre": "About", "Despre noi": "About us", "Ecosistem": "Ecosystem", "Clienți": "Customers", "Contact": "Contact", "Solicită demo": "Request a demo",
    "Suita software care crește odată cu afacerea ta": "The software suite that grows with your business",
    "Un singur": "One", "ecosistem.": "ecosystem.", "Toată afacerea ta.": "Your entire business.",
    "Sisteme specializate pentru service auto, contabilitate și construcții, cu module care lucrează împreună ca să vezi întreaga afacere dintr-o singură privire.": "Specialized systems for auto service, accounting and construction, with modules that work together to give you a complete view of your business.",
    "Solicită un demo": "Request a demo", "Descoperă produsele": "Explore products", "sisteme integrate": "integrated systems", "Suport": "Dedicated", "dedicat": "support",
    "Rapoarte în timp real": "Real-time reports", "Automatizări": "Automations", "API deschis": "Open API",
    "Sisteme specializate.": "Specialized systems.", "O singură sursă de adevăr.": "One source of truth.",
    "Fiecare produs e puternic singur. Împreună, elimină munca dublă, Excel-urile paralele și datele pierdute între departamente.": "Each product is powerful on its own. Together, they eliminate duplicate work, parallel spreadsheets and data lost between departments.",
    "Service-ul tău, pe pilot automat.": "Your workshop on autopilot.", "Contabilitate fără haos.": "Accounting without chaos.", "Șantierul, sub control.": "Your job site, under control.",
    "Producția la comandă, organizată cap-coadă.": "Custom production, organized end to end.", "Produs în dezvoltare": "Product in development", "Disponibil în curând": "Coming soon", "Vezi produsul": "View product",
    "În interiorul Zafirok": "Inside Zafirok", "Tot ce ai nevoie pentru a conduce": "Everything you need to run", "afacerea": "your business",
    "O platformă unică pentru clienți, operațiuni, documente și decizii — configurată după procesele industriei tale.": "One platform for customers, operations, documents and decisions — configured around your industry's workflows.",
    "Module operaționale": "Operational modules", "Construiește sistemul potrivit afacerii tale": "Build the right system for your business",
    "Fiecare modul se activează și se achită separat, dar folosește aceleași date și se conectează cu restul sistemului.": "Each module is activated and billed separately, while sharing the same data and connecting with the rest of the system.",
    "Vânzări": "Sales", "Achiziții": "Purchasing", "Stocuri": "Inventory", "Proiecte": "Projects", "Planificare": "Planning", "Documente": "Documents",
    "Istoric și vizibilitate": "History and visibility", "Securitate și control": "Security and control", "Flexibilitate și conectare": "Flexibility and connectivity",
    "Istoricul activității": "Activity history", "Cronologia clientului": "Customer timeline", "Jurnal de audit": "Audit log", "Istoricul versiunilor": "Version history", "Căutare globală": "Global search", "Rapoarte și analiză": "Reports & analytics",
    "Backup automat": "Automatic backups", "Permisiuni bazate pe roluri": "Role-based permissions", "Roluri pentru utilizatori": "User roles", "Controlul accesului": "User access control", "Notificări": "Notifications", "Administrare multi-companie": "Multi-company management",
    "Manager de fișiere": "File manager", "Atașamente": "File attachments", "Câmpuri personalizate": "Custom fields", "Integrări": "Integrations", "Multi-locație": "Multi-location", "Asistent AI": "AI assistant",
    "Cloud pe orice dispozitiv": "Cloud on any device", "Sincronizare în timp real": "Real-time synchronization", "Date pregătite pentru decizii": "Decision-ready data",
    "Alegi ce ai nevoie.": "Choose what you need.", "Extinzi când crești.": "Expand as you grow.", "Capabilități": "Capabilities",
    "Afaceri reale,": "Real businesses,", "rezultate reale": "real results", "CRM + ERP": "CRM + ERP", "Toată afacerea, într-un singur": "Your entire business, in one", "sistem": "system",
    "Relația cu clientul": "Customer relationships", "Resursele companiei": "Company resources", "Date conectate · Fluxuri specializate · O singură sursă de adevăr": "Connected data · Specialized workflows · One source of truth",
    "Pregătit să-ți vezi afacerea": "Ready to see your business", "dintr-o singură privire?": "at a glance?", "Programează un demo": "Schedule a demo", "Contactează-ne": "Contact us", "Companie": "Company",
    "Despre Zafirok": "About Zafirok", "Software pentru afaceri reale, construit de oameni care le": "Software for real businesses, built by people who", "înțeleg.": "understand them.",
    "Credem că afacerile mici și mijlocii merită sisteme moderne, fără implementări costisitoare, contracte complicate sau procese greu de înțeles.": "We believe small and medium businesses deserve modern systems without expensive implementations, complicated contracts or hard-to-understand processes.",
    "Misiunea noastră": "Our mission", "Mai puțin haos. Mai mult timp pentru creștere.": "Less chaos. More time to grow.",
    "Construim sisteme care ajută antreprenorii să organizeze clienții, echipele, documentele și operațiunile într-un singur mediu. Scopul nostru este simplu: mai puțină muncă administrativă, decizii mai clare și dezvoltare sustenabilă.": "We build systems that help entrepreneurs organize customers, teams, documents and operations in one environment. Our goal is simple: less administrative work, clearer decisions and sustainable growth.",
    "Viziunea noastră": "Our vision", "Tehnologie accesibilă, adaptată fiecărei industrii.": "Accessible technology, tailored to every industry.",
    "O platformă cloud colaborativă, modulară și ușor de folosit, care crește odată cu afacerea și se adaptează fluxurilor reale din fiecare nișă.": "A collaborative, modular and easy-to-use cloud platform that grows with the business and adapts to real workflows in every niche.",
    "Construit de CreateGo": "Built by CreateGo", "Produse software din 2009.": "Software products since 2009.",
    "Sisteme CRM și platforme ERP": "CRM systems and ERP platforms", "Automatizarea fluxurilor de lucru": "Workflow automation", "Aplicații cloud și sisteme de stocuri": "Cloud applications and inventory systems", "Platforme pentru gestiunea afacerii": "Business management platforms", "Soluții bazate pe inteligență artificială": "AI-powered solutions",
    "Cum lucrăm": "How we work", "Construim împreună cu antreprenorii.": "Built together with entrepreneurs.", "Ascultăm proprietarii și echipele, înțelegem provocările operaționale și prioritizăm funcțiile după nevoi reale, nu după presupuneri.": "We listen to owners and teams, understand operational challenges and prioritize features based on real needs, not assumptions.",
    "Simplitate practică": "Practical simplicity", "Transparență și încredere": "Transparency and trust", "Suport uman": "Human support", "Evoluție continuă": "Continuous improvement",
    "Software-ul puternic nu trebuie să fie complicat. Construim instrumente pe care echipele le pot înțelege și folosi rapid.": "Powerful software does not have to be complicated. We build tools that teams can understand and use quickly.", "Prețuri clare, date care îți aparțin și relații construite prin comunicare onestă și practici corecte.": "Clear pricing, data that belongs to you and relationships built through honest communication and fair practices.", "Ajutor rapid și aplicat, oferit de oameni care înțeleg atât produsul, cât și realitatea operațională a afacerii.": "Fast, practical help from people who understand both the product and the operational reality of your business.", "Îmbunătățim platforma pornind de la probleme reale și o dezvoltăm odată cu afacerile clienților noștri.": "We improve the platform around real problems and develop it alongside our customers' businesses.",
    "dezvoltă sisteme practice, scalabile și ușor de folosit pentru medii operaționale reale. Zafirok reunește această experiență într-un ecosistem modern pentru gestiunea afacerii.": "builds practical, scalable and easy-to-use systems for real operational environments. Zafirok brings this experience together in a modern business management ecosystem.",
    "Hai să discutăm despre": "Let's talk about", "afacerea ta.": "your business.", "Ai nevoie de suport, vrei o demonstrație sau cauți sistemul potrivit pentru echipa ta? Suntem aici să te ajutăm.": "Need support, want a demo or are looking for the right system for your team? We are here to help.",
    "Europa": "Europe", "SUA și Canada": "US & Canada", "Suport și întrebări generale": "Support and general inquiries", "Apeluri și WhatsApp": "Calls and WhatsApp", "Răspundem cât mai rapid": "We respond as quickly as possible", "Echipa noastră îți oferă ajutor practic și direct.": "Our team provides practical, direct help.", "Trimite un email": "Send an email"
  },
  ru: {
    "Produse": "Продукты", "Despre": "О нас", "Despre noi": "О нас", "Ecosistem": "Экосистема", "Clienți": "Клиенты", "Contact": "Контакты", "Solicită demo": "Запросить демо",
    "Suita software care crește odată cu afacerea ta": "Программная платформа, которая растёт вместе с бизнесом",
    "Un singur": "Единая", "ecosistem.": "экосистема.", "Toată afacerea ta.": "Весь ваш бизнес.",
    "Sisteme specializate pentru service auto, contabilitate și construcții, cu module care lucrează împreună ca să vezi întreaga afacere dintr-o singură privire.": "Специализированные системы для автосервиса, бухгалтерии и строительства с модулями, которые дают полную картину бизнеса.",
    "Solicită un demo": "Запросить демо", "Descoperă produsele": "Смотреть продукты", "sisteme integrate": "интегрированные системы", "Suport": "Поддержка", "dedicat": "специалистов",
    "Rapoarte în timp real": "Отчёты в реальном времени", "Automatizări": "Автоматизации", "API deschis": "Открытый API",
    "Sisteme specializate.": "Специализированные системы.", "O singură sursă de adevăr.": "Единый источник данных.",
    "Fiecare produs e puternic singur. Împreună, elimină munca dublă, Excel-urile paralele și datele pierdute între departamente.": "Каждый продукт эффективен сам по себе. Вместе они устраняют дублирование работы, разрозненные таблицы и потерю данных.",
    "Service-ul tău, pe pilot automat.": "Ваш автосервис на автопилоте.", "Contabilitate fără haos.": "Бухгалтерия без хаоса.", "Șantierul, sub control.": "Стройка под контролем.",
    "Producția la comandă, organizată cap-coadă.": "Заказное производство от начала до конца.", "Produs în dezvoltare": "Продукт в разработке", "Disponibil în curând": "Скоро", "Vezi produsul": "Открыть продукт",
    "În interiorul Zafirok": "Внутри Zafirok", "Tot ce ai nevoie pentru a conduce": "Всё для управления", "afacerea": "бизнесом",
    "O platformă unică pentru clienți, operațiuni, documente și decizii — configurată după procesele industriei tale.": "Единая платформа для клиентов, операций, документов и решений, настроенная под процессы вашей отрасли.",
    "Module operaționale": "Операционные модули", "Construiește sistemul potrivit afacerii tale": "Создайте систему под свой бизнес",
    "Fiecare modul se activează și se achită separat, dar folosește aceleași date și se conectează cu restul sistemului.": "Каждый модуль подключается и оплачивается отдельно, но использует общие данные и связан с остальной системой.",
    "Vânzări": "Продажи", "Achiziții": "Закупки", "Stocuri": "Склад", "Proiecte": "Проекты", "Planificare": "Планирование", "Documente": "Документы",
    "Istoric și vizibilitate": "История и прозрачность", "Securitate și control": "Безопасность и контроль", "Flexibilitate și conectare": "Гибкость и интеграции",
    "Istoricul activității": "История действий", "Cronologia clientului": "Хронология клиента", "Jurnal de audit": "Журнал аудита", "Istoricul versiunilor": "История версий", "Căutare globală": "Глобальный поиск", "Rapoarte și analiză": "Отчёты и аналитика",
    "Backup automat": "Автоматические резервные копии", "Permisiuni bazate pe roluri": "Ролевые разрешения", "Roluri pentru utilizatori": "Роли пользователей", "Controlul accesului": "Контроль доступа", "Notificări": "Уведомления", "Administrare multi-companie": "Несколько компаний",
    "Manager de fișiere": "Файловый менеджер", "Atașamente": "Вложения", "Câmpuri personalizate": "Настраиваемые поля", "Integrări": "Интеграции", "Multi-locație": "Несколько локаций", "Asistent AI": "AI-ассистент",
    "Cloud pe orice dispozitiv": "Облако на любом устройстве", "Sincronizare în timp real": "Синхронизация в реальном времени", "Date pregătite pentru decizii": "Данные для принятия решений",
    "Alegi ce ai nevoie.": "Выбирайте нужное.", "Extinzi când crești.": "Расширяйте по мере роста.", "Capabilități": "Возможности",
    "Afaceri reale,": "Реальный бизнес,", "rezultate reale": "реальные результаты", "Toată afacerea, într-un singur": "Весь бизнес в единой", "sistem": "системе",
    "Relația cu clientul": "Работа с клиентами", "Resursele companiei": "Ресурсы компании", "Date conectate · Fluxuri specializate · O singură sursă de adevăr": "Связанные данные · Отраслевые процессы · Единый источник данных",
    "Pregătit să-ți vezi afacerea": "Готовы увидеть бизнес", "dintr-o singură privire?": "целиком?", "Programează un demo": "Запланировать демо", "Contactează-ne": "Связаться", "Companie": "Компания",
    "Despre Zafirok": "О Zafirok", "Software pentru afaceri reale, construit de oameni care le": "Программы для реального бизнеса от людей, которые его", "înțeleg.": "понимают.",
    "Credem că afacerile mici și mijlocii merită sisteme moderne, fără implementări costisitoare, contracte complicate sau procese greu de înțeles.": "Мы считаем, что малый и средний бизнес заслуживает современных систем без дорогого внедрения, сложных контрактов и непонятных процессов.",
    "Misiunea noastră": "Наша миссия", "Mai puțin haos. Mai mult timp pentru creștere.": "Меньше хаоса. Больше времени для роста.",
    "Construim sisteme care ajută antreprenorii să organizeze clienții, echipele, documentele și operațiunile într-un singur mediu. Scopul nostru este simplu: mai puțină muncă administrativă, decizii mai clare și dezvoltare sustenabilă.": "Мы создаём системы, которые объединяют клиентов, команды, документы и операции. Наша цель проста: меньше административной работы, более ясные решения и устойчивый рост.",
    "Viziunea noastră": "Наше видение", "Tehnologie accesibilă, adaptată fiecărei industrii.": "Доступные технологии для каждой отрасли.",
    "O platformă cloud colaborativă, modulară și ușor de folosit, care crește odată cu afacerea și se adaptează fluxurilor reale din fiecare nișă.": "Совместная, модульная и удобная облачная платформа, которая растёт вместе с бизнесом и адаптируется к реальным процессам каждой ниши.",
    "Construit de CreateGo": "Создано CreateGo", "Produse software din 2009.": "Программные продукты с 2009 года.",
    "Sisteme CRM și platforme ERP": "CRM-системы и ERP-платформы", "Automatizarea fluxurilor de lucru": "Автоматизация рабочих процессов", "Aplicații cloud și sisteme de stocuri": "Облачные приложения и складские системы", "Platforme pentru gestiunea afacerii": "Платформы управления бизнесом", "Soluții bazate pe inteligență artificială": "Решения на базе искусственного интеллекта",
    "Cum lucrăm": "Как мы работаем", "Construim împreună cu antreprenorii.": "Создаём вместе с предпринимателями.", "Ascultăm proprietarii și echipele, înțelegem provocările operaționale și prioritizăm funcțiile după nevoi reale, nu după presupuneri.": "Мы слушаем владельцев и команды, изучаем рабочие задачи и выбираем функции на основе реальных потребностей.",
    "Simplitate practică": "Практичная простота", "Transparență și încredere": "Прозрачность и доверие", "Suport uman": "Поддержка людей", "Evoluție continuă": "Постоянное развитие",
    "Software-ul puternic nu trebuie să fie complicat. Construim instrumente pe care echipele le pot înțelege și folosi rapid.": "Мощное программное обеспечение не должно быть сложным. Мы создаём инструменты, которые команды быстро понимают и осваивают.", "Prețuri clare, date care îți aparțin și relații construite prin comunicare onestă și practici corecte.": "Понятные цены, ваши собственные данные и отношения, основанные на честной коммуникации и справедливых принципах.", "Ajutor rapid și aplicat, oferit de oameni care înțeleg atât produsul, cât și realitatea operațională a afacerii.": "Быстрая практическая помощь от людей, которые понимают продукт и реальные процессы бизнеса.", "Îmbunătățim platforma pornind de la probleme reale și o dezvoltăm odată cu afacerile clienților noștri.": "Мы улучшаем платформу на основе реальных задач и развиваем её вместе с бизнесом наших клиентов.",
    "dezvoltă sisteme practice, scalabile și ușor de folosit pentru medii operaționale reale. Zafirok reunește această experiență într-un ecosistem modern pentru gestiunea afacerii.": "создаёт практичные, масштабируемые и удобные системы для реальных рабочих процессов. Zafirok объединяет этот опыт в современной экосистеме управления бизнесом.",
    "Hai să discutăm despre": "Давайте поговорим о", "afacerea ta.": "вашем бизнесе.", "Ai nevoie de suport, vrei o demonstrație sau cauți sistemul potrivit pentru echipa ta? Suntem aici să te ajutăm.": "Нужна поддержка, демонстрация или подходящая система для вашей команды? Мы готовы помочь.",
    "Europa": "Европа", "SUA și Canada": "США и Канада", "Suport și întrebări generale": "Поддержка и общие вопросы", "Apeluri și WhatsApp": "Звонки и WhatsApp", "Răspundem cât mai rapid": "Отвечаем максимально быстро", "Echipa noastră îți oferă ajutor practic și direct.": "Наша команда предоставит практическую помощь.", "Trimite un email": "Отправить email"
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ro");

  useEffect(() => {
    const saved = localStorage.getItem("zafirok-language") as Language | null;
    const browser = navigator.language.toLowerCase();
    setLanguageState(saved && ["ro", "ru", "en"].includes(saved) ? saved : browser.startsWith("ru") ? "ru" : browser.startsWith("en") ? "en" : "ro");
  }, []);

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  useEffect(() => {
    const translatePage = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const textNode = node as Text;
        const raw = originalTexts.get(textNode) ?? textNode.data;
        originalTexts.set(textNode, raw);
        const trimmed = raw.trim();
        if (!trimmed) continue;
        const translated = language === "ro" ? trimmed : translations[language][trimmed];
        if (translated) textNode.data = raw.replace(trimmed, translated);
      }
    };
    translatePage();
    const observer = new MutationObserver(translatePage);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  const setLanguage = (next: Language) => {
    localStorage.setItem("zafirok-language", next);
    setLanguageState(next);
  };

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
