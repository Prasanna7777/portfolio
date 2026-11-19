// All the text on the site lives here. Replace the placeholders marked YOUR-... before publishing.

export const profile = {
  name: "Lakshmi Prasanna Yadlapalli",
  shortName: "Lakshmi Prasanna",
  eyebrow: "Software engineer, moving into AI",
  lead: "Two years as a software engineer at Target, now an M.Tech student in AI and ML at IIT Hyderabad (graduating June 2027). I am interested in building AI systems that are grounded, reliable and useful in real-world applications.",
  about: [
    "I am a software engineer finishing an M.Tech in AI and ML at IIT Hyderabad. Before that, I spent two years at Target building customer-facing features on Target.com in React and TypeScript, working closely with design, accessibility and mobile teams.",
    "My time in software engineering shaped how I approach problems, with an emphasis on thoughtful implementation, reliability, and building solutions that work in real-world settings. I've been building on that foundation through academic research and hands-on exploration of AI/ML techniques.",
  ],
  skillGroups: [
    { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
    { label: "Frontend and backend", items: ["React", "Next.js", "HTML", "CSS", "FastAPI", "Accessibility"] },
    { label: "ML and deep learning", items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "XGBoost", "HuggingFace Transformers"] },
    { label: "Data and visualization", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
    { label: "Tools", items: ["Git", "GitHub", "VS Code"] },
  ],
  links: {
    github: "https://github.com/Prasanna7777",
    linkedin: "https://www.linkedin.com/in/lakshmi-prasanna-yadlapalli-748a641a4",
  },
  // When you have a resume that is safe to share publicly, put the PDF in public/ and set this,
  // for example: "Lakshmi_Prasanna_Yadlapalli_Resume.pdf". The Resume button appears only when this is set.
  resume: undefined as string | undefined,
};

export interface Paper {
  title: string;
  venue: string;
  text: string;
  href?: string; // optional link to the paper, for example its IEEE Xplore page
}

export const research = {
  intro:
    "I started research as an undergraduate and continue it now at IIT Hyderabad, where my thesis is on medical image understanding.",
  thesis: {
    title: "Grounded findings generation for open-set brain MRI abnormalities",
    where: "Data Driven Intelligence Lab, IIT Hyderabad",
    advisor: "Supervised by Dr. Konda Reddy Mopuri",
    dates: "June 2026 to present",
    status: "Early stage",
    text: "Brain MRI models usually recognize only the abnormalities they were trained on. My thesis asks how a vision-language model can locate and describe abnormalities it has not seen during training. The approach combines finding the abnormality in the scan with writing a clinical finding that is tied to that location.",
  },
  papersIntro:
    "Two peer-reviewed IEEE conference papers from my undergraduate years at Amrita Vishwa Vidyapeetham, written with classmates and faculty.",
  papers: [
    {
      title: "Comparative Deep Network Analysis of Speech Emotion Recognition Models using Data Augmentation",
      venue: "CENTCON 2022 (IEEE)",
      href: "https://ieeexplore.ieee.org/document/10051557",
      text: "Compared five deep learning architectures for speech emotion recognition on the MELD dataset. Targeted data augmentation handled the class imbalance and brought the best model to 92% accuracy.",
    },
    {
      title: "Automatic Correction of Speech Recognized Mathematical Equations using Encoder-Decoder Attention Model",
      venue: "INDICON 2022 (IEEE)",
      href: "https://ieeexplore.ieee.org/document/10039926",
      text: "Built an encoder-decoder attention model that corrects the grammar, spelling and phonetic errors speech recognition adds when it transcribes spoken math equations. It lowered the word and character error rates, which helps voice-based tools for math education and accessibility.",
    },
  ] as Paper[],
};

export const experience = {
  title: "Engineer, Target",
  dates: "Aug 2023 to July 2025",
  teams: [
    {
      name: "Post Purchase and Returns web team",
      duration: "1.5 years",
      bullets: [
        "Developed and maintained the Order Details and Returns experiences on Target.com, including new feature development, bug fixes, cross-team integration testing, API migrations, and on-call support during peak season.",
        "Built the front end of major new features, including In-Store Order Exchange, a new capability that lets guests exchange an online or in-store pickup order in the store.",
      ],
    },
    {
      name: "Discretionary Journey team",
      duration: "0.5 years",
      bullets: [
        "Joined this newly formed team, which focused on improving the shopping experience for discretionary categories, at a manager's request after the manager had seen my work on Post Purchase.",
        "Built the Compare feature on the Search Listing Page.",
        "Built the web UI for the redesigned product review form (details below).",
      ],
    },
  ],
  overall:
    "Worked closely with design, accessibility and iOS/Android teams throughout, aligning on changing requirements and keeping the experience consistent and accessible across platforms.",
};

export const quotes = [
  {
    text: "Thank you for owning this and driving it successfully. Thanks for being a great asset to post purchase and returns space!",
    by: "Colleague, Post Purchase and Returns team",
  },
  {
    text: "Your dedication and effort in the project have not gone unnoticed. Your commitment makes a significant impact on Post-Purchase team's success.",
    by: "Colleague, Post Purchase team",
  },
  {
    text: "Nice work and really impressed with how quickly you scaled up.",
    by: "Engineering colleague, Target",
  },
  {
    text: "You stood up to expectations (I guess you outpaced it) and have a good engineering mind.",
    by: "Engineering colleague, Target",
  },
];

// Use either `src` (an MP4 file in public/media) or `embed` (a YouTube embed link).
export interface Video {
  src?: string;
  embed?: string;
  poster?: string;
  caption: string;
}

export const reviewForm: {
  title: string;
  text: string;
  note: string;
  viewIntro: string;
  viewLink: { label: string; href: string };
  viewNote: string;
  // Set this when you have the recording, for example:
  // video: { src: "media/review-form.mp4", poster: "media/review-form-poster.jpg", caption: "..." }
  video?: Video;
} = {
  title: "Product review form (web UI)",
  text: "The product review form is where guests share what they think of something they bought. Our UX designer redesigned it into two variants, and I built the web UI for both, turning the designs into accessible React and TypeScript components. I also tackled the new form's complex accessibility requirements.",
  note: "The form is part of the public Target.com site. Target and its logos belong to Target. This page is my own and is not endorsed by Target.",
  viewIntro: "Want to see it? You need to sign in to Target.com, or sign up for an account.",
  viewLink: {
    label: "Open the review form on Target.com",
    href: "https://www.target.com/product/1010801894/add-review?lnk=pdp",
  },
  viewNote:
    "Please don't submit a review. If that product is no longer available, open any product page and choose \"Write a review\".",
  video: undefined,
};

export interface Project {
  title: string;
  text: string;
  tech: string;
  links: { label: string; href: string }[];
  // Add one or more videos when you have them, for example:
  // videos: [
  //   { src: "media/claim-demo.mp4", poster: "media/claim-demo.jpg", caption: "Testing the demo" },
  //   { embed: "https://www.youtube.com/embed/VIDEO_ID", caption: "Responsive layout on phone and desktop" },
  // ]
  videos?: Video[];
  // Optional short note shown under the links.
  note?: string;
}

// Live demo links. Leave a URL empty ("") to hide that project's Live demo link.
const ragDemoUrl = "https://prasanna7777.github.io/rag-based-claim-verification-system/";
const churnDemoUrl = "https://prasanna7777.github.io/customer-churn-prediction/";

export const projects: Project[] = [
  {
    title: "Customer churn prediction",
    text: "Predicts which telecom customers are likely to leave. An XGBoost model reached 0.848 ROC-AUC on the IBM Telco churn dataset, and SHAP explains each customer's risk.",
    tech: "Python, XGBoost, SHAP, FastAPI, React",
    links: [
      { label: "Code on GitHub", href: "https://github.com/Prasanna7777/customer-churn-prediction" },
      ...(churnDemoUrl ? [{ label: "Live demo", href: churnDemoUrl }] : []),
    ],
    videos: [
      { src: "media/xg1.mp4", caption: "Testing the demo: predicting a customer's churn risk." },
      { src: "media/xg_responsive.mp4", caption: "Responsive layout: the app on phone and desktop widths." },
    ],
  },
  {
    title: "Claim verification with RAG",
    text: "Checks a short claim against Wikipedia and returns True, False, Misleading or Unknown, with quotes that are verified against the evidence. If the evidence is weak, it answers Unknown instead of guessing.",
    tech: "Python, sentence-transformers, FAISS, LLM API, FastAPI, React",
    links: [
      { label: "Code on GitHub", href: "https://github.com/Prasanna7777/rag-based-claim-verification-system" },
      ...(ragDemoUrl ? [{ label: "Live demo (front end only)", href: ragDemoUrl }] : []),
    ],
    note: "The live page is the front end only. The backend runs only locally, so checking a claim there shows an error. The demo videos above show the full app working.",
    videos: [
      { src: "media/rag.mp4", caption: "Testing the demo: checking a claim and reading the verdict." },
      { src: "media/responsive_rag.mp4", caption: "Responsive layout: the app on phone and desktop widths." },
    ],
  },
];

export const education = {
  degrees: [
    {
      degree: "M.Tech, Artificial Intelligence and Machine Learning",
      school: "IIT Hyderabad",
      year: "Graduating June 2027",
      score: "CGPA 8.8",
    },
    {
      degree: "B.Tech",
      school: "Amrita Vishwa Vidyapeetham",
      year: "2023",
      score: "CGPA 9.05",
    },
  ],
  achievements: [
    "Ranked 6th among 72 students in B.Tech, graduating with Distinction.",
    "Awarded a 50% merit-based scholarship for sustained academic performance during B.Tech.",
  ],
  coursesLabel: "Relevant courses",
  courses: [
    "Deep Learning",
    "Foundations of Machine Learning",
    "Visual Computing",
    "Topics in Optimization",
    "Linear Algebra",
    "Probability and Stochastic Processes",
    "Advanced Data Structures and Algorithms",
  ],
};