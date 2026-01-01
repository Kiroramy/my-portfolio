"use client";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Terminal,
  Code2,
  Database,
  Smartphone,
  GraduationCap,
  Globe,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function MyPortfolio() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 font-sans selection:bg-blue-500/30">
      {/* Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10"
      >
        {/* --- Card 1: Main Identity (Hero) --- */}
        <motion.div
          variants={item}
          className="md:col-span-8 p-8 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-black border border-white/10 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500" />
<Image
  src="/kiro.jpg"
  alt="Profile"
  width={160}
  height={160}
  priority
  className="relative w-40 h-40 rounded-2xl object-cover border border-white/20"
/>

          </div>
          <div className="flex-1 text-center md:text-right">
            <h1 className="text-4xl font-black tracking-tight mb-2">
              KIROLLOS RAMY TALAAT{" "}
            </h1>
            <p className="text-blue-400 font-mono mb-4 text-sm tracking-widest uppercase italic">
              Fullstack Engineer & Software Architect
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              متخصص في تطوير الحلول البرمجية المتكاملة، أجمع بين مرونة Next.js
              وقوة Laravel لبناء تطبيقات تتسم بالكفاءة العالية وتجربة المستخدم
              السلسة.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono">
                LARAVEL EXPERT
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono">
                NEXTJS MASTER
              </span>
            </div>
          </div>
        </motion.div>

        {/* --- Card 2: Contact & Status --- */}
        <motion.div
          variants={item}
          className="md:col-span-4 p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <a
              href="https://github.com/kiroramy"
              className="hover:text-blue-500 transition"
            >
              <Github size={30} />
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-1 italic">Contact Me</h3>
            <p className="text-neutral-500 text-sm mb-4">
              Ready for new challenges
            </p>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: 7.5 }}
              className="flex items-center gap-2 text-sm bg-green-500 text-white font-bold py-3 px-4 rounded-xl justify-center hover:bg-green-600 transition-all"
            >
              <FaWhatsapp size={18} />
              WhatsApp Me
            </a>
            <a
              href="mailto:kirollos.ramy.94@gmail.com"
              className="flex items-center gap-2 text-sm bg-white text-black font-bold py-3 px-4 rounded-xl justify-center hover:bg-blue-500 hover:text-white transition-all"
            >
              <Mail size={16} /> Send an Email
            </a>
          </div>
        </motion.div>

        {/* --- Card 3: Skills Architecture (Detailed) --- */}
        <motion.div
          variants={item}
          className="md:col-span-12 p-8 rounded-[2rem] bg-gradient-to-r from-neutral-900 to-transparent border border-white/10"
        >
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3 italic">
            <Terminal size={20} className="text-blue-500" /> Technology Stack &
            Proficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillItem
              name="Next.js"
              level="95%"
              icon={<Globe className="text-blue-400" />}
            />
            <SkillItem
              name="PHP Laravel"
              level="90%"
              icon={<Database className="text-red-500" />}
            />
            <SkillItem
              name="React Native"
              level="85%"
              icon={<Smartphone className="text-cyan-400" />}
            />
            <SkillItem
              name="Django REST"
              level="60%"
              icon={<Code2 className="text-green-600" />}
            />
          </div>
        </motion.div>

        {/* --- Card 4: Projects (GitHub Integration Feel) --- */}
        <motion.div
          variants={item}
          className="md:col-span-7 p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/10 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Code2 size={120} />
          </div>

          <h3 className="text-xl font-bold mb-6 italic">Featured Work</h3>
          <div className="space-y-4">
            <ProjectRow
              name="Restaurant Management System (backend)"
              tech="PHP Laravel"
              link="https://github.com/Kiroramy/burger-taste-backend"
            />
            <ProjectRow
              name="Burger Taste (frontend)"
              tech="Next.js"
              link="https://github.com/Kiroramy/burger-taste-frontend"
            />

            <ProjectRow
              name="Car workshop Website"
              tech="React.js"
              link="https://github.com/Kiroramy/car-workshop"
            />
            <ProjectRow
              name="Online Food Ordering System (Backend)"
              tech="PHP Laravel"
              link="https://github.com/Kiroramy/Online-Food-Ordering-App-Backend"
            />
            <ProjectRow
              name="Online Food Ordering System (Frontend)"
              tech="Next.js"
              link="https://github.com/Kiroramy/Online-Food-Ordering-App-Frontend"
            />
            <ProjectRow
              name="E-Learning App(Backend)"
              tech="PHP Laravel"
              link="https://github.com/Kiroramy/Apex-academy_Backend"
            />
            <ProjectRow
              name="E-Learning App(Frontend)"
              tech="Next.js"
              link="https://github.com/Kiroramy/Apex-academy_Frontend"
            />
            <ProjectRow
              name="Todo List (Backend)"
              tech="PHP Laravel"
              link="https://github.com/Kiroramy/todo-list_backend"
            />
            <ProjectRow
              name="Todo List (Frontend)"
              tech="Next.js"
              link="https://github.com/Kiroramy/todo-list_frontend"
            />
            <ProjectRow
              name="Landing Page"
              tech="Next.js"
              link="https://github.com/Kiroramy/delta-workshop"
            />
          </div>
        </motion.div>

        {/* --- Card 5: Personal Statement (Important for Scholarship) --- */}
        <motion.div
          variants={item}
          className="md:col-span-5 p-8 rounded-[2rem] bg-blue-600 border border-blue-400/50 flex flex-col justify-between"
        >
          <GraduationCap size={40} className="text-white/40" />
          <div>
            <h3 className="text-xl font-black mb-2 italic uppercase">
              Vision & Goals
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              أسعى لدمج علوم هندسة البرمجيات مع أحدث تقنيات الويب للمساهمة في
              بناء بنية تحتية رقمية ذكية. هدفي الأكاديمي هو التوسع في أمن
              المعلومات وتحليل البيانات الضخمة.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function SkillItem({ name, level, icon }) {
  return (
    <div className="group">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm font-mono">{name}</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: level }}
          transition={{ duration: 1 }}
          className="h-full bg-blue-500"
        />
      </div>
    </div>
  );
}

function ProjectRow({ name, tech, link }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition group">
      <div>
        <h4 className="font-bold text-sm group-hover:text-blue-400 transition">
          {name}
        </h4>
        <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-tighter">
          {tech}
        </p>
      </div>
      <a href={link} className="text-neutral-600 hover:text-white transition">
        <ExternalLink size={18} />
      </a>
    </div>
  );
}
