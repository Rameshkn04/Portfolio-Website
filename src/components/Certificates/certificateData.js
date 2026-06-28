import oracleGenAI from "../../Assets/certificates/oracle-genai.png";
import oracleAI from "../../Assets/certificates/oracle-ai-foundation.png";
import salesforce from "../../Assets/certificates/salesforce-agentforce.png";
import wipro from "../../Assets/certificates/wipro-datascience.jpg";
import columbia from "../../Assets/certificates/columbia-ml.jpg";
import hp from "../../Assets/certificates/hp-ai.jpg";
import cmrit from "../../Assets/certificates/cmrit-coe.png";
import toughTongue from "../../Assets/certificates/toughtongue.jpg";
import fullstack from "../../Assets/certificates/fullstack-fiesta.jpg";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    image: oracleGenAI,
    description:
      "Validated expertise in Large Language Models, Retrieval-Augmented Generation (RAG), Prompt Engineering, Vector Databases and Oracle Cloud Infrastructure AI Services.",
    skills: ["LLMs", "RAG", "OCI AI", "Prompt Engineering", "LangChain"],
    link:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5C1B90307818B03E3A150AFC01E00D9265AA87FC62A968C79AD530B6B3D79ECA",
    category: "Professional"
  },

  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle",
    image: oracleAI,
    description:
      "Demonstrated foundational knowledge of Artificial Intelligence, Machine Learning, Deep Learning and Oracle AI Cloud Services.",
    skills: ["AI", "ML", "Deep Learning", "OCI", "Generative AI"],
    link:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3ABD29D7B161592F3D247E789CCE0B4C6096E95C681AA8FF1CBC82110D790AA3",
    category: "Professional"
  },

  {
    title: "Salesforce Trailhead Agentforce",
    issuer: "Salesforce",
    image: salesforce,
    description:
      "Earned 40+ Trailhead badges with Agentblazer Champion 2026 status through hands-on Salesforce AI and CRM learning.",
    skills: ["Agentforce", "CRM", "Trailhead", "Sales Cloud", "AI"],
    link: "https://www.salesforce.com/trailblazer/rameshkn04",
    category: "Professional"
  },

  {
    title: "Data Science",
    issuer: "Wipro",
    image: wipro,
    description:
      "Completed Wipro TalentNext Digital Skills Readiness Program in Data Science.",
    skills: ["Python", "Data Science", "Machine Learning"],
    link: "#",
    category: "Professional"
  },

  {
    title: "Machine Learning I",
    issuer: "Columbia+",
    image: columbia,
    description:
      "Successfully completed Columbia+ Machine Learning I certification.",
    skills: ["Machine Learning", "Python", "Statistics"],
    link: "https://badges.plus.columbia.edu/b6f63947-0fc4-4f59-a401-12f18b6a0158#acc.sIN1VFgP",
    category: "Professional"
  },

  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    image: hp,
    description:
      "Completed HP LIFE Artificial Intelligence for Beginners course.",
    skills: ["AI", "Ethics", "Fundamentals"],
    link: "https://drive.google.com/file/d/1BKeFAPiACdq81nhZQlfR0J9_TLYunzIW/view?usp=drive_link",
    category: "Professional"
  },

  {
    title: "Centre of Excellence - AI UI/UX",
    issuer: "CMR Institute of Technology",
    image: cmrit,
    description:
      "Successfully completed the Centre of Excellence Certification Program in Artificial Intelligence Based User Interface (UI) and User Experience (UX).",
    skills: ["AI", "UI", "UX", "Design"],
    link: "https://drive.google.com/file/d/1ScJyEWm70EKGu6sBNtuEKRybpaa7Chm0/view?usp=drive_link",
    category: "Academic"
  },

  {
    title: "Coding Case Challenge Final Round",
    issuer: "Tough Tongue AI",
    image: toughTongue,
    description:
      "Reached the Final Round of the Tough Tongue AI Coding Case Challenge.",
    skills: ["Coding", "Problem Solving", "AI"],
    link: "https://drive.google.com/file/d/1a_J9DGTT8coWRzxcBH-HZEZmFkcf6jFC/view?usp=drive_link",
    category: "Hackathon"
  },

  {
    title: "FullStack Fiesta Hackathon",
    issuer: "CMRIT Innovation Council",
    image: fullstack,
    description:
      "Participated in FullStack Fiesta - Innovate, Build and Deploy Hackathon.",
    skills: ["Full Stack", "React", "Innovation"],
    link: "https://drive.google.com/file/d/1Wp8XY089Gii_ioGbuqm0AZ0YN3atbSUZ/view?usp=drive_link",
    category: "Hackathon"
  }
];

export default certificates;