"use client";

import { motion } from "framer-motion";
import {
  FiCpu,
  FiLayers,
  FiGrid,
  FiTool,
  FiMonitor,
  FiCode,
} from "react-icons/fi";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "EDA 工具",
    icon: <FiTool className="text-xl" />,
    skills: [
      { name: "Cadence Virtuoso", level: 95 },
      { name: "ADE 仿真环境", level: 90 },
      { name: "FineSim", level: 90 },
      { name: "HSpice", level: 88 },
      { name: "版图设计 (Layout XL)", level: 80 },
      { name: "Calibre DRC/LVS", level: 75 },
    ],
  },
  {
    title: "模拟 IP 核设计",
    icon: <FiCpu className="text-xl" />,
    skills: [
      { name: "OTA 设计", level: 90 },
      { name: "LDO 线性稳压器", level: 88 },
      { name: "Bandgap 基准源", level: 85 },
      { name: "Comparator 比较器", level: 85 },
      { name: "Charge Pump", level: 80 },
      { name: "DC-DC Converter", level: 82 },
    ],
  },
  {
    title: "设计方法学",
    icon: <FiGrid className="text-xl" />,
    skills: [
      { name: "小信号分析", level: 90 },
      { name: "噪声分析", level: 85 },
      { name: "稳定性分析 (Bode)", level: 88 },
      { name: "PVT Corner 仿真", level: 85 },
      { name: "网表编写 (HSpice)", level: 88 },
      { name: "混合信号验证", level: 75 },
    ],
  },
  {
    title: "编程与系统",
    icon: <FiCode className="text-xl" />,
    skills: [
      { name: "C 语言", level: 82 },
      { name: "Python", level: 75 },
      { name: "Linux 操作系统", level: 80 },
      { name: "Tcl / Perl 脚本", level: 70 },
      { name: "Verilog-A", level: 70 },
      { name: "硬件测试仪器", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-dark-900">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">
            &gt; SKILLS
          </p>
          <h2 className="section-title text-white">
            专业<span className="gradient-text">技能</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-2xl border border-primary/10 bg-dark-800/50 backdrop-blur-sm p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: catIdx * 0.1 + skillIdx * 0.05,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-dark-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-dark-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-dark-700 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #00d4ff, #7b61ff)",
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.15 + skillIdx * 0.08,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: <FiCpu />, label: "CMOS 工艺与器件物理" },
            { icon: <FiLayers />, label: "BCD 工艺设计经验" },
            { icon: <FiGrid />, label: "全流程仿真验证" },
            { icon: <FiMonitor />, label: "自动化测试体系搭建" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-primary/10 bg-dark-800/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <span className="text-xs text-dark-300 text-center font-medium group-hover:text-dark-200 transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
