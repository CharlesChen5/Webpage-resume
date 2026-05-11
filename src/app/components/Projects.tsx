"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiCpu, FiTarget, FiGrid } from "react-icons/fi";

interface Project {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  spec: string;
  description: string;
  details: string[];
  tech: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: "analog-gen",
    title: "模拟电路自动化生成项目",
    category: "长鑫存储",
    icon: <FiCpu className="text-2xl" />,
    spec: "2025.09 ~ 2026.01 · 仿真验证体系 · 12项指标全达标",
    description:
      "基于算法与自动化设计流程，实现模拟电路拓扑自动选型、参数智能优化与全流程性能验证，替代传统人工设计模式，提升模拟 IP 设计效率与收敛速度。",
    details: [
      "独立完成 Test Bench 开发维护，基于 FineSim/HSpice 完成多维度仿真测试",
      "完成仿真数据分析、性能评估与电路故障排查，输出测试报告支撑方案迭代",
      "累计完成 4款OTA、2款LDO、1款Buffer 电路的全流程仿真验证",
      "参与项目需求对接，完成仿真数据解析，协助平台功能优化与接口联调",
      "项目关键节点按期交付，12项核心仿真指标全达标",
      "达成设计优化周期缩短 2% 的预定目标",
    ],
    tech: ["FineSim", "HSpice", "Test Bench", "OTA", "LDO", "Buffer"],
    color: "#00d4ff",
  },
  {
    id: "circuit-recognition",
    title: "电路识别与分类项目",
    category: "长鑫存储",
    icon: <FiGrid className="text-2xl" />,
    spec: "2026.02 ~ 至今 · 算法模型 · 自动化分类",
    description:
      "基于算法模型实现电路结构自动化解析、元器件智能识别与电路类型分类，为模拟 IC 自动化设计与验证流程提供基础能力支撑。",
    details: [
      "负责电路图与网表的人工识别、分类与标注，输出标准化文档",
      "为模型训练提供高质量标注数据集",
      "完成识别文件的准确性校验，统计漏检率、准确率、召回率等核心评估指标",
      "开展识别代码预处理测试，验证方案可行性与基础识别能力",
    ],
    tech: ["Python", "网表解析", "数据标注", "模型评估"],
    color: "#7b61ff",
  },
  {
    id: "gate-driver",
    title: "CA22A13 栅极驱动 IC",
    category: "合肥工业大学",
    icon: <FiTarget className="text-2xl" />,
    spec: "2025.01 ~ 2025.08 · smic18BCD · H桥栅极驱动",
    description:
      "面向直流电机驱动场景，设计集成智能栅极驱动、电流检测与全链路保护功能的 H 桥栅极驱动 IC，采用 smic18BCD 工艺，完成全模拟模块的方案设计与仿真验证。",
    details: [
      "独立负责 3.3V LDO 线性稳压器模块的电路设计、参数仿真与性能优化",
      "完成 VM 欠压锁定保护模块的电路设计",
      "完成模块功能验证与全芯片联调，确保核心指标满足设计规格",
      "熟练掌握 Cadence Virtuoso 全流程设计与 ADE 仿真工具",
      "积累了 BCD 工艺下模拟 IP 核设计、保护电路开发的完整项目经验",
    ],
    tech: ["smic18BCD", "Virtuoso", "ADE", "LDO", "UVLO", "H-Bridge"],
    color: "#00ff88",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative bg-dark-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">
            &gt; PROJECTS
          </p>
          <h2 className="section-title text-white">
            项目<span className="gradient-text">经历</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() =>
                setActiveProject(
                  activeProject === project.id ? null : project.id
                )
              }
              className={`group relative rounded-2xl border cursor-pointer card-hover ${
                activeProject === project.id
                  ? "border-primary/40 bg-dark-800/80"
                  : "border-primary/10 bg-dark-900/50"
              }`}
            >
              <div className="p-6 md:p-8">
                {/* Icon and company */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${project.color}15`,
                      borderColor: `${project.color}30`,
                      color: project.color,
                    }}
                  >
                    {project.icon}
                  </div>
                  <span className="text-xs font-mono text-dark-400 px-3 py-1.5 rounded-full border border-primary/10 bg-dark-800/50">
                    {project.category}
                  </span>
                </div>

                {/* Title & Spec */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm font-mono text-primary/70 mb-4">
                  {project.spec}
                </p>
                <p className="text-dark-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-primary/5 border border-primary/15 text-dark-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expand indicator */}
                <div className="mt-5 flex items-center gap-1.5 text-xs text-primary/50">
                  <FiExternalLink className="text-[10px]" />
                  <span>
                    {activeProject === project.id
                      ? "点击收起"
                      : "点击展开详情"}
                  </span>
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="mt-5 pt-5 border-t"
                        style={{ borderColor: `${project.color}20` }}
                      >
                        <ul className="space-y-2">
                          {project.details.map((d, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-2.5 text-sm text-dark-300"
                            >
                              <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: project.color }}
                              />
                              {d}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${project.color}15, inset 0 0 40px ${project.color}05`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
