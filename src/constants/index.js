const DICTIONARY = {
  th: {
    navLinks: [
      { name: 'เกี่ยวกับฉัน', href: '#about' },
      { name: 'ทักษะ', href: '#skills' },
      { name: 'ผลงาน', href: '#projects' },
      { name: 'ประสบการณ์', href: '#experience' },
      { name: 'ใบรับรอง', href: '#certifications' },
    ],
    hero: {
      badge: "พร้อมเริ่มงานประจำ (Open to Work)",
      title: "Kasidech Chumthong",
      role: "QA Engineer & Developer",
      description: "บัณฑิตวิศวกรรมซอฟต์แวร์ที่มีความมุ่งมั่นด้านการประกันคุณภาพซอฟต์แวร์ (Quality Assurance) และการทดสอบระบบอัตโนมัติ (Automated Testing) มีประสบการณ์ด้านการทดสอบ E2E ทั้ง Web & Mobile ตลอดจนการพัฒนา Full-Stack Application",
      stats: [
        { label: "วุฒิการศึกษา", value: "วศ.บ. SE" },
        { label: "สถานะ", value: "พร้อมเริ่มงาน" },
        { label: "สถานที่", value: "กรุงเทพฯ, TH" }
      ],
      actions: [
        { label: "ดูเรซูเม่", type: "preview", file: "resume", primary: true },
        { label: "ดูทรานสคริปต์", type: "preview", file: "transcript", primary: false },
        { label: "ดาวน์โหลด CV", href: "/resume.pdf", download: "CV_Kasidech_Chumthong.pdf", type: "download" }
      ],
      floatingUI: [
        { label: "Test Passed", type: "success" },
        { label: "Issue Filed", type: "warning" },
        { label: "Merged PR", type: "info" }
      ]
    },
    about: {
      tag: "ตัวตนของฉัน",
      title: "เกี่ยวกับฉัน",
      cards: [
        {
          id: "education",
          type: "main",
          icon: "🎓",
          title: "การศึกษา & วุฒิบัตร",
          subtitle: "วศ.บ. สาขาวิศวกรรมซอฟต์แวร์",
          meta: "มหาวิทยาลัยแม่ฟ้าหลวง · สำเร็จการศึกษา",
          description: "สำเร็จการศึกษาด้วยพื้นฐานที่มั่นคงด้านการประกันคุณภาพซอฟต์แวร์, การทดสอบระบบอัตโนมัติ, สถาปัตยกรรมระบบ และการพัฒนาซอฟต์แวร์แบบ Full-Stack",
          link: "/Transcript_Kasidech.pdf",
          linkText: "ดูทรานสคริปต์"
        },
        {
          id: "current",
          type: "side",
          icon: "💼",
          title: "ประสบการณ์ทำงาน",
          subtitle: "อดีตนักศึกษาฝึกงาน QA @ Ascend Commerce",
          meta: "Amaze Super App · 2026",
          delay: "0.1s"
        },
        {
          id: "mission",
          type: "side",
          icon: "🎯",
          title: "เป้าหมายการทำงาน",
          subtitle: "คุณภาพและความเสถียรของระบบ",
          description: "มุ่งมั่นส่งมอบซอฟต์แวร์ที่มีคุณภาพสูง เสถียร และไร้ข้อผิดพลาด ด้วยกระบวนการทดสอบอัตโนมัติ (Automated Testing), CI/CD และมาตรฐานทางวิศวกรรมที่รัดกุม",
          delay: "0.2s"
        }
      ]
    },
    skills: {
      tag: "ความเชี่ยวชาญ",
      title: "ทักษะและเทคโนโลยี",
      categories: [
        {
          icon: '💻',
          title: 'ภาษาโปรแกรม (Programming Languages)',
          tags: [
            { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
            { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
            { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
            { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
            { name: 'C#', icon: 'https://cdn.simpleicons.org/csharp/239120' },
            { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart/0175C2' }
          ],
          delay: '0s'
        },
        {
          icon: '🚀',
          title: 'เฟรมเวิร์ก / ไลบรารี (Frameworks & Libraries)',
          tags: [
            { name: 'Playwright', icon: 'https://cdn.simpleicons.org/playwright/2EAD33' },
            { name: 'Robot Framework', icon: 'https://cdn.simpleicons.org/robotframework/000000' },
            { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
            { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
            { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' }
          ],
          delay: '0.1s'
        },
        {
          icon: '🗄️',
          title: 'ฐานข้อมูล (Databases)',
          tags: [
            { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
            { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
            { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' }
          ],
          delay: '0.2s'
        },
        {
          icon: '🛠️',
          title: 'เครื่องมือและแพลตฟอร์ม (Tools & Platforms)',
          tags: [
            { name: 'JIRA', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
            { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
            { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/EEEEEE' },
            { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' }
          ],
          delay: '0.3s'
        },
        {
          icon: '🧠',
          title: 'ทักษะการทำงานร่วมกัน (Soft Skills)',
          tags: [
            { name: 'QA Strategy (กลยุทธ์การทดสอบ)', icon: '🎯' },
            { name: 'Agile / Scrum', icon: '🔄' },
            { name: 'Problem Solving (การแก้ปัญหา)', icon: '🧩' },
            { name: 'Collaboration (การทำงานเป็นทีม)', icon: '🤝' }
          ],
          delay: '0.4s'
        }
      ]
    },
    projects: {
      tag: "ผลงาน",
      title: "โปรเจกต์เด่น",
      projects: [
        {
          id: 6,
          title: "Amaze Automation (Maestro)",
          category: "Automation",
          icon: "🎬",
          description: "ระบบทดสอบ UI อัตโนมัติบน Mobile สำหรับ Amaze Super App ด้วย Maestro framework",
          longDescription: "ชุดทดสอบ Mobile UI อัตโนมัติแบบ End-to-End สำหรับ Amaze Super App โดยใช้ Maestro เน้นความเสถียรและความแม่นยำในทุก User Scenario ช่วยลดระยะเวลา Manual Testing ลง 60% ผ่านสคริปต์ YAML และระบบรายงานผลอัตโนมัติ",
          tech: ["Maestro", "YAML", "Mobile Automation", "Regression Testing"],
          link: "https://github.com/Mafuyu129/amaze-ui-automation-Maestro",
          linkText: "ซอร์สโค้ด",
          delay: "0s"
        },
        {
          id: 7,
          title: "Amaze Automation (Playwright)",
          category: "Automation",
          icon: "🎭",
          description: "ระบบทดสอบ UI อัตโนมัติสำหรับ Web และ Mobile บนแพลตฟอร์ม Amaze ด้วย Playwright",
          longDescription: "ชุดทดสอบ Regression Testing อัตโนมัติบน Amaze Platform ด้วย Playwright เพื่อรองรับ Seller Lifecycle และ Official Accounts จัดการ User Interaction ที่ซับซ้อนและตรวจสอบความถูกต้องของข้อมูลแบบเรียลไทม์",
          tech: ["Playwright", "JavaScript", "E2E Testing", "CI/CD"],
          link: "https://github.com/Mafuyu129/amaze-ui-automation",
          linkText: "ซอร์สโค้ด",
          delay: "0.1s"
        },
        {
          id: 1,
          title: "Kin Rai Dee MFU (กินไรดี มฟล.)",
          category: "Full Stack",
          icon: "🍜",
          description: "เว็บแอปพลิเคชันค้นหา รีวิว และจัดอันดับร้านอาหารสำหรับนักศึกษามหาวิทยาลัยแม่ฟ้าหลวง",
          longDescription: "เว็บแอปพลิเคชัน Full-Stack สำหรับคอมมูนิตี้ มหาวิทยาลัยแม่ฟ้าหลวง ช่วยค้นหาร้านอาหารท้องถิ่น พร้อมระบบรีวิว ให้คะแนน และจัดการข้อมูลแบบเรียลไทม์ พัฒนา Backend ด้วย Spring Boot และฐานข้อมูล MySQL",
          tech: ["Spring Boot", "MySQL", "Thymeleaf", "RESTful API"],
          link: "https://github.com/Kasidech-Chumthong/Online-Food-Delivery-Group-27",
          linkText: "ซอร์สโค้ด",
          delay: "0.2s"
        },
        {
          id: 2,
          title: "PaKurng (พระเครื่อง)",
          category: "Mobile Dev",
          icon: "📿",
          description: "แอปพลิเคชันมือถือ Flutter สำหรับผู้ปฏิบัติธรรมและชาวพุทธ",
          longDescription: "แอปพลิเคชันมือถือพัฒนาด้วย Flutter สำหรับผู้ปฏิบัติธรรม ใช้งาน Firebase เป็นระบบหลังบ้าน ออกแบบ UI ให้เรียบง่ายและใช้งานสะดวกเพื่อส่งเสริมกิจวัตรประจำวัน",
          tech: ["Flutter", "Firebase"],
          link: "https://github.com/Kasidech-Chumthong/PaKurng",
          linkText: "ซอร์สโค้ด",
          delay: "0.3s"
        },
        {
          id: 3,
          title: "MFU-LCMP Mapping",
          category: "Research & AI",
          icon: "🛰️",
          description: "งานวิจัย Deep Learning สำหรับการจำแนกพื้นที่สีเขียวจากภาพถ่ายดาวเทียมด้วย EfficientNet",
          longDescription: "งานวิจัยเชิงวิชาการด้านการจำแนกการใช้ประโยชน์ที่ดินในจังหวัดเชียงราย ด้วยเทคนิค Semantic Segmentation บนภาพถ่ายดาวเทียมความละเอียดสูง ใช้ PyTorch และสถาปัตยกรรม EfficientNet ในการตรวจจับและคำนวณพื้นที่สีเขียว",
          tech: ["Python", "PyTorch", "Computer Vision"],
          link: "/Land_Cover_Mapping.pdf",
          linkText: "ดูงานวิจัย",
          delay: "0.4s"
        },
        {
          id: 4,
          title: "Reservation System",
          category: "Low-Code",
          icon: "🍽️",
          description: "ระบบจองโต๊ะร้านอาหารอัตโนมัติด้วย Microsoft Power Platform",
          longDescription: "โซลูชัน Low-Code ที่พัฒนาด้วย Microsoft Power Apps และ Dataverse เพื่อจัดการขั้นตอนการจองโต๊ะร้านอาหารและสถานะโต๊ะแบบอัตโนมัติ แสดงศักยภาพการสร้างเครื่องมือธุรกิจภายในอย่างรวดเร็ว",
          tech: ["Power Apps", "Dataverse"],
          link: "https://apps.powerapps.com/play/e/9e995021-e39e-e85d-a64a-4630b9e04290/a/9f631f7f-6c15-4560-9437-442d31d637c0?tenantId=e94d57ad-a0b7-44cf-883f-d7987a0bd244&hint=34bf8f37-d504-4b7d-84a2-ed92f5c6fd3d&sourcetime=1758779457450",
          linkText: "เปิดแอปพลิเคชัน",
          secondaryLink: "https://www.canva.com/design/DAGztoR_95U/bI4nUWi8AtNMiokBl6JEsg/edit?utm_content=DAGztoR_95U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
          secondaryLinkText: "ดูสไลด์",
          delay: "0.5s"
        },
        {
          id: 5,
          title: "Sentinel AI",
          category: "AI Bot",
          icon: "🤖",
          description: "บอทวิเคราะห์ข้อมูลตลาดและการเงินอัตโนมัติด้วย Machine Learning",
          longDescription: "ระบบบอทเทรดอัตโนมัติที่ผสาน Technical Analysis, การวิเคราะห์ความรู้สึกจากข่าว (Sentiment Analysis) และ Machine Learning (Random Forest) เพื่อวิเคราะห์แนวโน้มตลาด มีเว็บแดชบอร์ดจำลองพอร์ตและแจ้งเตือนผ่าน Telegram",
          tech: ["Python", "AI / ML"],
          link: "https://github.com/Mafuyu129/Sentinel-AI-Bot",
          linkText: "ซอร์สโค้ด (GitHub)",
          delay: "0.6s"
        }
      ]
    },
    experience: {
      tag: "เส้นทางของฉัน",
      title: "ประสบการณ์",
      experiences: [
        {
          role: "QA Engineer (นักศึกษาฝึกงาน)",
          company: "Ascend Commerce",
          icon: "/ascend-logo.jpg",
          period: "ม.ค. 2026 — เม.ย. 2026",
          details: [
            "ดำเนินการทดสอบฟังก์ชันการทำงานแบบ End-to-End สำหรับแพลตฟอร์ม Livestreaming เพื่อรับประกัน UI และประสบการณ์การใช้งานแบบเรียลไทม์ที่ลื่นไหล",
            "บริหารจัดการวงจรชีวิตข้อผิดพลาด (Defect Lifecycle) ด้วย JIRA จัดทำเอกสาร บันทึกบั๊ก และประสานงานกับทีมนักพัฒนาเพื่อแก้ไขปัญหา",
            "ตรวจสอบความถูกต้องของข้อมูล (Data Validation) ด้วย SQL (MySQL) ระหว่างระบบหลังบ้านและหน้าบ้าน",
            "ทดสอบ API ด้วย Postman เพื่อตรวจสอบความถูกต้องตามข้อกำหนดทางเทคนิคและความเสถียรของการเชื่อมต่อระบบ",
            "พัฒนาสคริปต์ทดสอบอัตโนมัติด้วย Playwright และ JavaScript เพื่อเพิ่มความครอบคลุมของการทดสอบ Regression และเพิ่มประสิทธิภาพการทำงาน"
          ],
          badge: "ฝึกงาน",
          type: "internship"
        },
        {
          role: "วศ.บ. วิศวกรรมซอฟต์แวร์ (สำเร็จการศึกษา)",
          company: "มหาวิทยาลัยแม่ฟ้าหลวง",
          icon: "/mfu-logo.png",
          period: "2022 — 2026",
          details: [
            "หมวดวิชาหลัก: Software Testing, Software Process & Quality Assurance, Software Construction & Evolution และ Software Architecture",
            "หมวดการพัฒนาแอปพลิเคชัน: Web Application Development, Mobile Application Development, Platform Development และ Database Systems",
            "หมวดวิศวกรรมและกระบวนการทำงาน: Software Project Management, การพัฒนาแบบ Agile/Scrum และ Intelligent Computing",
            "งานวิจัยปริญญานิพนธ์: การแบ่งส่วนภาพถ่ายดาวเทียมเพื่อจำแนกพื้นที่สีเขียวด้วย Deep Learning (PyTorch)"
          ],
          badge: "สำเร็จการศึกษา",
          type: "education"
        }
      ]
    },
    certifications: {
      tag: "ใบรับรอง",
      title: "ใบรับรองและเหรียญรางวัล",
      showAll: "ดูใบรับรองทั้งหมด",
      showLess: "ย่อกลับ",
      verify: "ตรวจสอบ",
      certifications: [
        {
          id: "gcp-bigdata",
          title: "Google Cloud Fundamentals: Big Data and Machine Learning",
          issuer: "Google Cloud",
          date: "2025",
          icon: "☁️",
          link: "/8 KASIDECH CHUMTHONG.pdf",
          featured: true
        },
        {
          id: "gcp-gemini",
          title: "Build Real World AI Applications with Gemini and Imagen",
          issuer: "Google Cloud",
          date: "2025",
          icon: "♊",
          link: "https://www.credly.com/badges/5937caa7-dce9-4cfe-807a-1bbeb8bcb5fb",
          featured: true
        },
        {
          id: "gcp-secure-delivery",
          title: "Secure Software Delivery",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🛡️",
          link: "https://www.credly.com/badges/6a15f5c7-af7f-433f-b885-be2723006326",
          featured: true
        },
        {
          id: "gcp-k8s",
          title: "Manage Kubernetes in Google Cloud",
          issuer: "Google Cloud",
          date: "2025",
          icon: "☸️",
          link: "https://www.credly.com/badges/670ff0a2-f256-4528-8601-dca3db1d056f",
          featured: true
        },
        {
          id: "google-ai-essentials",
          title: "Google AI Essentials",
          issuer: "Google",
          date: "2025",
          icon: "✨",
          link: "/Coursera2.pdf",
          featured: true
        },
        {
          id: "gcp-vertex-prompt",
          title: "Prompt Design in Vertex AI",
          issuer: "Google Cloud",
          date: "2025",
          icon: "✍️",
          link: "https://www.credly.com/badges/3cb61fd3-c657-4df5-b464-be6184b09c3d",
          featured: true
        },
        {
          id: "gcp-core-infra",
          title: "Google Cloud Fundamentals: Core Infrastructure",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🏛️",
          link: "/7 KASIDECH CHUMTHONG.pdf"
        },
        {
          id: "google-marketing",
          title: "Foundations of Digital Marketing and E-commerce",
          issuer: "Google",
          date: "2025",
          icon: "📈",
          link: "/Coursera1.pdf"
        },
        {
          id: "gcp-ml-data",
          title: "Prepare Data for ML APIs on Google Cloud",
          issuer: "Google Cloud",
          date: "2025",
          icon: "📊",
          link: "https://www.credly.com/badges/f2a35c72-4a14-4ef8-bc33-3a30cfd45f33"
        },
        {
          id: "gcp-biglake",
          title: "Secure BigLake Data",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🔒",
          link: "https://www.credly.com/badges/ebbbee25-2e82-416a-aae8-6479b18fe810"
        },
        {
          id: "gcp-dlp",
          title: "Protect Sensitive Data with Data Loss Prevention",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🕵️",
          link: "https://www.credly.com/badges/60598e41-8d99-415d-98f2-17b191a6789b"
        },
        {
          id: "gcp-compute-basics",
          title: "The Basics of Google Cloud Compute",
          issuer: "Google Cloud",
          date: "2025",
          icon: "⚙️",
          link: "https://www.credly.com/badges/fef700b2-3794-4034-8e5e-288b3b07fc39"
        },
        {
          id: "gcp-speech-api",
          title: "Cloud Speech API: 3 Ways",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🗣️",
          link: "https://www.credly.com/badges/c913a953-4a68-4ed8-9a19-9d4d594c1321"
        },
        {
          id: "gcp-data-cloud",
          title: "Share Data Using Google Data Cloud",
          issuer: "Google Cloud",
          date: "2025",
          icon: "☁️",
          link: "https://www.credly.com/badges/32658fca-3926-460a-9484-4c54a5d1306b"
        }
      ]
    },
    contact: {
      tag: "ติดต่อฉัน",
      title: "ช่องทางการติดต่อ",
      info: [
        {
          label: "อีเมล",
          value: "gotelove555@gmail.com",
          href: "mailto:gotelove555@gmail.com",
          icon: "📧"
        },
        {
          label: "เบอร์โทรศัพท์",
          value: "0880645556",
          href: "tel:0880645556",
          icon: "📱"
        },
        {
          label: "สถานที่",
          value: "กรุงเทพมหานคร, ประเทศไทย",
          icon: "📍"
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/kasidech-chumthong",
          href: "https://linkedin.com/in/kasidech-chumthong",
          icon: "🔗"
        },
        {
          label: "GitHub (ผลงานหลัก)",
          value: "github.com/Kasidech-Chumthong",
          href: "https://github.com/Kasidech-Chumthong",
          icon: "🐙"
        },
        {
          label: "GitHub (ส่วนตัว)",
          value: "github.com/Mafuyu129",
          href: "https://github.com/Mafuyu129",
          icon: "🤖"
        }
      ]
    },
    ui: {
      search: "ค้นหา",
      searchPlaceholder: "พิมพ์คำสั่งหรือค้นหา...",
      noCommands: "ไม่พบคำสั่งที่ค้นหา",
      viewDetails: "ดูรายละเอียด",
      verified: "ผ่านการตรวจสอบ",
      openInNewTab: "เปิดในแท็บใหม่",
      resumePreview: "ตัวอย่างเรซูเม่",
      transcriptPreview: "ตัวอย่างทรานสคริปต์",
      document: "เอกสาร",
      footerRole: "กษิดิเดช ชุมทอง · QA Engineer & Developer",
      footerPrecision: "มุ่งมั่นในคุณภาพและความแม่นยำของซอฟต์แวร์",
      toggleTheme: "สลับโหมด มืด/สว่าง",
      toggleLang: "Switch to English",
      navTo: "ไปยังส่วน",
      viewProject: "ดูโปรเจกต์",
      navKbd: "เลื่อน",
      selectKbd: "เลือก",
      closeKbd: "ปิด"
    }
  },
  en: {
    navLinks: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Certifications', href: '#certifications' },
    ],
    hero: {
      badge: "Open to Full-Time Opportunities",
      title: "Kasidech Chumthong",
      role: "QA Engineer & Developer",
      description: "A Software Engineering graduate passionate about software testing, quality assurance, and building reliable applications. Experienced in test automation, QA methodologies, and full-stack development.",
      stats: [
        { label: "Degree", value: "B.Eng. SE" },
        { label: "Status", value: "Open to Work" },
        { label: "Location", value: "Bangkok, TH" }
      ],
      actions: [
        { label: "View CV", type: "preview", file: "resume", primary: true },
        { label: "View Transcript", type: "preview", file: "transcript", primary: false },
        { label: "Download CV", href: "/resume.pdf", download: "CV_Kasidech_Chumthong.pdf", type: "download" }
      ],
      floatingUI: [
        { label: "Test Passed", type: "success" },
        { label: "Issue Filed", type: "warning" },
        { label: "Merged PR", type: "info" }
      ]
    },
    about: {
      tag: "Who I Am",
      title: "About Me",
      cards: [
        {
          id: "education",
          type: "main",
          icon: "🎓",
          title: "Education & Degree",
          subtitle: "B.Eng. Software Engineering",
          meta: "Mae Fah Luang University · Graduated",
          description: "Graduated with strong foundations in software quality assurance, automated testing, system architecture, and full-stack development.",
          link: "/Transcript_Kasidech.pdf",
          linkText: "View Transcript"
        },
        {
          id: "current",
          type: "side",
          icon: "💼",
          title: "Professional Experience",
          subtitle: "Former QA Intern @ Ascend Commerce",
          meta: "Amaze Super App · 2026",
          delay: "0.1s"
        },
        {
          id: "mission",
          type: "side",
          icon: "🎯",
          title: "The Mission",
          subtitle: "Software Quality & Reliability",
          description: "Dedicated to delivering high-quality, reliable software through automated testing, CI/CD, and robust engineering standards.",
          delay: "0.2s"
        }
      ]
    },
    skills: {
      tag: "What I Know",
      title: "Skills & Technologies",
      categories: [
        {
          icon: '💻',
          title: 'Programming Languages',
          tags: [
            { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
            { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
            { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
            { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
            { name: 'C#', icon: 'https://cdn.simpleicons.org/csharp/239120' },
            { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart/0175C2' }
          ],
          delay: '0s'
        },
        {
          icon: '🚀',
          title: 'Frameworks / Libraries',
          tags: [
            { name: 'Playwright', icon: 'https://cdn.simpleicons.org/playwright/2EAD33' },
            { name: 'Robot Framework', icon: 'https://cdn.simpleicons.org/robotframework/000000' },
            { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
            { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
            { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' }
          ],
          delay: '0.1s'
        },
        {
          icon: '🗄️',
          title: 'Databases',
          tags: [
            { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
            { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
            { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' }
          ],
          delay: '0.2s'
        },
        {
          icon: '🛠️',
          title: 'Tools & Platforms',
          tags: [
            { name: 'JIRA', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
            { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
            { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/EEEEEE' },
            { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' }
          ],
          delay: '0.3s'
        },
        {
          icon: '🧠',
          title: 'Soft Skills',
          tags: [
            { name: 'QA Strategy', icon: '🎯' },
            { name: 'Agile', icon: '🔄' },
            { name: 'Problem Solving', icon: '🧩' },
            { name: 'Collaboration', icon: '🤝' }
          ],
          delay: '0.4s'
        }
      ]
    },
    projects: {
      tag: "My Work",
      title: "Featured Projects",
      projects: [
        {
          id: 6,
          title: "Amaze Automation (Maestro)",
          category: "Automation",
          icon: "🎬",
          description: "Mobile UI automation for Amaze Super App using Maestro framework.",
          longDescription: "A comprehensive mobile UI testing suite built with Maestro to automate end-to-end flows for the Amaze Super App. This project focuses on reliability and performance across different user scenarios, reducing manual testing time by 60% through robust YAML scripts and automated reporting.",
          tech: ["Maestro", "YAML", "Mobile Automation", "Regression Testing"],
          link: "https://github.com/Mafuyu129/amaze-ui-automation-Maestro",
          linkText: "Source Code",
          delay: "0s"
        },
        {
          id: 7,
          title: "Amaze Automation (Playwright)",
          category: "Automation",
          icon: "🎭",
          description: "Web and Mobile UI automation for Amaze Super App using Playwright.",
          longDescription: "Automated regression testing suite for the Amaze platform utilizing Playwright. This project specializes in stabilizing the seller and official account lifecycles through robust script architecture, handling complex UI interactions and real-time data validation.",
          tech: ["Playwright", "JavaScript", "E2E Testing", "CI/CD"],
          link: "https://github.com/Mafuyu129/amaze-ui-automation",
          linkText: "Source Code",
          delay: "0.1s"
        },
        {
          id: 1,
          title: "Kin Rai Dee MFU",
          category: "Full Stack",
          icon: "🍜",
          description: "A restaurant review and ranking web application for university students.",
          longDescription: "Kin Rai Dee MFU is a full-stack web application designed for the Mae Fah Luang University community. It streamlines the process of discovering local dining options, featuring a community-driven rating system, real-time reviews, and a robust backend built with Spring Boot.",
          tech: ["Spring Boot", "MySQL", "Thymeleaf", "RESTful API"],
          link: "https://github.com/Kasidech-Chumthong/Online-Food-Delivery-Group-27",
          linkText: "Source Code",
          delay: "0.2s"
        },
        {
          id: 2,
          title: "PaKurng",
          category: "Mobile Dev",
          icon: "📿",
          description: "Flutter-based application for specialized Buddhist practitioner tools.",
          longDescription: "PaKurng is a Flutter-based mobile application designed to provide specialized tools for Buddhist practitioners. The project utilizes Firebase for backend services and focuses on delivering a user-friendly interface to aid in daily spiritual practice.",
          tech: ["Flutter", "Firebase"],
          link: "https://github.com/Kasidech-Chumthong/PaKurng",
          linkText: "Source Code",
          delay: "0.3s"
        },
        {
          id: 3,
          title: "MFU-LCMP Mapping",
          category: "Research & AI",
          icon: "🛰️",
          description: "Deep learning research on land cover mapping. Focused on semantic segmentation using EfficientNet for green environment detection.",
          longDescription: "An academic research project focused on utilizing deep learning for land cover classification in Chiang Rai Province. Using Python, PyTorch, and the EfficientNet architecture, the model performs semantic segmentation on high-resolution satellite imagery from Hugging Face and Google Earth Pro to detect and calculate the area of green spaces.",
          tech: ["Python", "PyTorch", "Computer Vision"],
          link: "/Land_Cover_Mapping.pdf",
          linkText: "View Research",
          delay: "0.4s"
        },
        {
          id: 4,
          title: "Reservation System",
          category: "Low-Code",
          icon: "🍽️",
          description: "Automated restaurant reservation workflows using Microsoft Power Platform.",
          longDescription: "A low-code solution built with Microsoft Power Apps and Dataverse to streamline restaurant reservation workflows. It aims to automate the booking process and manage table availability, demonstrating the capability to rapidly develop internal business tools using the Microsoft Power Platform.",
          tech: ["Power Apps", "Dataverse"],
          link: "https://apps.powerapps.com/play/e/9e995021-e39e-e85d-a64a-4630b9e04290/a/9f631f7f-6c15-4560-9437-442d31d637c0?tenantId=e94d57ad-a0b7-44cf-883f-d7987a0bd244&hint=34bf8f37-d504-4b7d-84a2-ed92f5c6fd3d&sourcetime=1758779457450",
          linkText: "View App",
          secondaryLink: "https://www.canva.com/design/DAGztoR_95U/bI4nUWi8AtNMiokBl6JEsg/edit?utm_content=DAGztoR_95U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
          secondaryLinkText: "View Slides",
          delay: "0.5s"
        },
        {
          id: 5,
          title: "Sentinel AI",
          category: "AI Bot",
          icon: "🤖",
          description: "Machine learning bot project for intelligent automation and data analysis.",
          longDescription: "Sentinel AI is an automated trading bot ecosystem integrating technical analysis, news sentiment, and Machine Learning (Random Forest). Patterned to continuously learn and optimize hyperparameters, the bot monitors crypto and stock markets. It features a web dashboard for real-time monitoring, paper trading simulation for backtesting, and Telegram alerts.",
          tech: ["Python", "AI / ML"],
          link: "https://github.com/Mafuyu129/Sentinel-AI-Bot",
          linkText: "GitHub",
          delay: "0.6s"
        }
      ]
    },
    experience: {
      tag: "My Journey",
      title: "Experience",
      experiences: [
        {
          role: "QA Engineer (Intern)",
          company: "Ascend Commerce",
          icon: "/ascend-logo.jpg",
          period: "Jan 2026 — Apr 2026",
          details: [
            "Executed end-to-end functional testing for Livestreaming platforms to ensure seamless UI and real-time user experience.",
            "Managed defect lifecycle using JIRA, documenting and reporting bugs while collaborating with developers for resolution.",
            "Performed data validation using SQL (MySQL) to verify consistency between backend and frontend systems.",
            "Conducted API testing with Postman to validate technical specifications and ensure stable system integration.",
            "Developed automated test scripts using Playwright and JavaScript to improve regression coverage and testing efficiency."
          ],
          badge: "Internship",
          type: "internship"
        },
        {
          role: "B.Eng. Software Engineering (Graduate)",
          company: "Mae Fah Luang University",
          icon: "/mfu-logo.png",
          period: "2022 — 2026",
          details: [
            "Core Coursework: Software Testing, Software Process & Quality Assurance, Software Construction & Evolution, and Software Architecture.",
            "Application Development: Web Application Development, Mobile Application Development, Platform Development, and Database Systems.",
            "Engineering & Methodology: Software Project Management, Agile/Scrum Development, and Intelligent Computing.",
            "Senior Capstone Research: Satellite semantic segmentation and land cover classification using deep learning (PyTorch)."
          ],
          badge: "Graduated",
          type: "education"
        }
      ]
    },
    certifications: {
      tag: "Certifications",
      title: "Verified Badges",
      showAll: "Show All Badges",
      showLess: "Show Less",
      verify: "Verify",
      certifications: [
        {
          id: "gcp-bigdata",
          title: "Google Cloud Fundamentals: Big Data and Machine Learning",
          issuer: "Google Cloud",
          date: "2025",
          icon: "☁️",
          link: "/8 KASIDECH CHUMTHONG.pdf",
          featured: true
        },
        {
          id: "gcp-gemini",
          title: "Build Real World AI Applications with Gemini and Imagen",
          issuer: "Google Cloud",
          date: "2025",
          icon: "♊",
          link: "https://www.credly.com/badges/5937caa7-dce9-4cfe-807a-1bbeb8bcb5fb",
          featured: true
        },
        {
          id: "gcp-secure-delivery",
          title: "Secure Software Delivery",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🛡️",
          link: "https://www.credly.com/badges/6a15f5c7-af7f-433f-b885-be2723006326",
          featured: true
        },
        {
          id: "gcp-k8s",
          title: "Manage Kubernetes in Google Cloud",
          issuer: "Google Cloud",
          date: "2025",
          icon: "☸️",
          link: "https://www.credly.com/badges/670ff0a2-f256-4528-8601-dca3db1d056f",
          featured: true
        },
        {
          id: "google-ai-essentials",
          title: "Google AI Essentials",
          issuer: "Google",
          date: "2025",
          icon: "✨",
          link: "/Coursera2.pdf",
          featured: true
        },
        {
          id: "gcp-vertex-prompt",
          title: "Prompt Design in Vertex AI",
          issuer: "Google Cloud",
          date: "2025",
          icon: "✍️",
          link: "https://www.credly.com/badges/3cb61fd3-c657-4df5-b464-be6184b09c3d",
          featured: true
        },
        {
          id: "gcp-core-infra",
          title: "Google Cloud Fundamentals: Core Infrastructure",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🏛️",
          link: "/7 KASIDECH CHUMTHONG.pdf"
        },
        {
          id: "google-marketing",
          title: "Foundations of Digital Marketing and E-commerce",
          issuer: "Google",
          date: "2025",
          icon: "📈",
          link: "/Coursera1.pdf"
        },
        {
          id: "gcp-ml-data",
          title: "Prepare Data for ML APIs on Google Cloud",
          issuer: "Google Cloud",
          date: "2025",
          icon: "📊",
          link: "https://www.credly.com/badges/f2a35c72-4a14-4ef8-bc33-3a30cfd45f33"
        },
        {
          id: "gcp-biglake",
          title: "Secure BigLake Data",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🔒",
          link: "https://www.credly.com/badges/ebbbee25-2e82-416a-aae8-6479b18fe810"
        },
        {
          id: "gcp-dlp",
          title: "Protect Sensitive Data with Data Loss Prevention",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🕵️",
          link: "https://www.credly.com/badges/60598e41-8d99-415d-98f2-17b191a6789b"
        },
        {
          id: "gcp-compute-basics",
          title: "The Basics of Google Cloud Compute",
          issuer: "Google Cloud",
          date: "2025",
          icon: "⚙️",
          link: "https://www.credly.com/badges/fef700b2-3794-4034-8e5e-288b3b07fc39"
        },
        {
          id: "gcp-speech-api",
          title: "Cloud Speech API: 3 Ways",
          issuer: "Google Cloud",
          date: "2025",
          icon: "🗣️",
          link: "https://www.credly.com/badges/c913a953-4a68-4ed8-9a19-9d4d594c1321"
        },
        {
          id: "gcp-data-cloud",
          title: "Share Data Using Google Data Cloud",
          issuer: "Google Cloud",
          date: "2025",
          icon: "☁️",
          link: "https://www.credly.com/badges/32658fca-3926-460a-9484-4c54a5d1306b"
        }
      ]
    },
    contact: {
      tag: "Let's Connect",
      title: "Contact",
      info: [
        {
          label: "Email",
          value: "gotelove555@gmail.com",
          href: "mailto:gotelove555@gmail.com",
          icon: "📧"
        },
        {
          label: "Phone",
          value: "0880645556",
          href: "tel:0880645556",
          icon: "📱"
        },
        {
          label: "Location",
          value: "Bangkok, Thailand",
          icon: "📍"
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/kasidech-chumthong",
          href: "https://linkedin.com/in/kasidech-chumthong",
          icon: "🔗"
        },
        {
          label: "GitHub (Main)",
          value: "github.com/Kasidech-Chumthong",
          href: "https://github.com/Kasidech-Chumthong",
          icon: "🐙"
        },
        {
          label: "GitHub (Personal)",
          value: "github.com/Mafuyu129",
          href: "https://github.com/Mafuyu129",
          icon: "🤖"
        }
      ]
    },
    ui: {
      search: "Search",
      searchPlaceholder: "Type a command or search...",
      noCommands: "No commands found.",
      viewDetails: "View Details",
      verified: "Verified",
      openInNewTab: "Open in New Tab",
      resumePreview: "Resume Preview",
      transcriptPreview: "Transcript Preview",
      document: "Document",
      footerRole: "Kasidech Chumthong · QA Engineer",
      footerPrecision: "Precision Engineering.",
      toggleTheme: "Toggle Theme",
      toggleLang: "เปลี่ยนเป็นภาษาไทย",
      navTo: "Go to",
      viewProject: "View",
      navKbd: "Navigate",
      selectKbd: "Select",
      closeKbd: "Close"
    }
  }
};

export const getNavLinks = (lang = 'en') => DICTIONARY[lang]?.navLinks || DICTIONARY.en.navLinks;
export const getHeroContent = (lang = 'en') => DICTIONARY[lang]?.hero || DICTIONARY.en.hero;
export const getAboutContent = (lang = 'en') => DICTIONARY[lang]?.about || DICTIONARY.en.about;
export const getSkillsContent = (lang = 'en') => DICTIONARY[lang]?.skills || DICTIONARY.en.skills;
export const getProjectsContent = (lang = 'en') => DICTIONARY[lang]?.projects || DICTIONARY.en.projects;
export const getExperienceContent = (lang = 'en') => DICTIONARY[lang]?.experience || DICTIONARY.en.experience;
export const getCertificationsContent = (lang = 'en') => DICTIONARY[lang]?.certifications || DICTIONARY.en.certifications;
export const getContactContent = (lang = 'en') => DICTIONARY[lang]?.contact || DICTIONARY.en.contact;
export const getUiTranslations = (lang = 'en') => DICTIONARY[lang]?.ui || DICTIONARY.en.ui;

// Default exports for backward compatibility
export const NAV_LINKS = DICTIONARY.en.navLinks;
export const HERO_CONTENT = DICTIONARY.en.hero;
export const ABOUT_CONTENT = DICTIONARY.en.about;
export const SKILLS_CONTENT = DICTIONARY.en.skills;
export const PROJECTS_CONTENT = DICTIONARY.en.projects;
export const EXPERIENCE_CONTENT = DICTIONARY.en.experience;
export const CERTIFICATIONS_CONTENT = DICTIONARY.en.certifications;
export const CONTACT_CONTENT = DICTIONARY.en.contact;
