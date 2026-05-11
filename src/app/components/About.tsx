"use client";

import { motion } from "framer-motion";
import { FiCpu, FiBookOpen, FiBriefcase, FiAward } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative bg-dark-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">
            &gt; ABOUT
          </p>
          <h2 className="section-title text-white">
            关于<span className="gradient-text">我</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Left: Personal Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="text-dark-200 text-base md:text-lg leading-relaxed mb-5">
              我叫<span className="text-white font-semibold">陈龙</span>，
              25岁，现居安徽合肥。目前就读于{" "}
              <span className="text-primary/90 font-medium">合肥工业大学</span>
              ，攻读集成电路工程硕士学位。
            </p>
            <p className="text-dark-200 text-base md:text-lg leading-relaxed mb-5">
              具备扎实的模拟集成电路设计基础，熟悉{" "}
              <span className="text-white/80">CMOS 工艺流程及器件结构</span>
              ，熟练使用 Virtuoso 等 EDA 工具进行电路设计与仿真，掌握{" "}
              <span className="text-primary/90">
                DC-DC Converter、OP-AMP、Bandgap
              </span>{" "}
              等基本电路结构。
            </p>
            <p className="text-dark-300 text-sm leading-relaxed">
              对模拟电路设计充满兴趣与热情，具备持续学习能力与高度的责任心，
              善于将理论知识与实际项目结合，快速掌握新知识并应用于实践。
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-primary/10">
              {[
                { value: "硕士", label: "在读" },
                { value: "2年+", label: "工作经验" },
                { value: "BCD", label: "工艺经验" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-dark-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline - Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-8"
          >
            {/* Education */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <FiBookOpen className="text-sm" />
                </div>
                <h3 className="text-lg font-bold text-white">教育经历</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    period: "2024.09 ~ 至今",
                    school: "合肥工业大学",
                    major: "集成电路工程 / 硕士在读",
                    courses:
                      "高等模拟集成电路、CMOS模拟集成电路系统设计实践、集成电路版图设计、高等半导体器件物理、大规模模拟/混合信号集成电路等",
                  },
                  {
                    period: "2018.09 ~ 2022.07",
                    school: "郑州大学",
                    major: "电子信息工程 / 本科",
                    courses:
                      "电路基础、模拟电子技术、数字电子技术、C语言程序设计、信号与系统、通信原理等",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.school}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="p-5 rounded-2xl border border-primary/10 bg-dark-800/50 backdrop-blur-sm group hover:border-primary/20 transition-all duration-500"
                  >
                    <span className="text-xs font-mono text-primary/60">
                      {item.period}
                    </span>
                    <h4 className="text-white font-semibold mt-1">
                      {item.school}
                    </h4>
                    <p className="text-sm text-dark-300 mt-0.5">{item.major}</p>
                    <p className="text-xs text-dark-400 mt-2 leading-relaxed">
                      {item.courses}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  <FiBriefcase className="text-sm" />
                </div>
                <h3 className="text-lg font-bold text-white">工作经历</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    period: "2025.09 ~ 至今",
                    company: "长鑫存储技术有限公司",
                    role: "模拟电路自动化设计 · 实习生",
                    points: [
                      "负责模拟电路自动化设计项目核心仿真验证，独立搭建与维护 Test Bench，基于 FineSim、HSpice 完成网表直流、交流、瞬态多维度仿真",
                      "完成数据解析、性能评估、故障定位与排查，输出标准化测试报告支撑设计迭代",
                      "搭建生成式电路设计验证闭环，参与项目多协同对接，协助完成下游数据接口联调与落地",
                    ],
                  },
                  {
                    period: "2022.06 ~ 2023.07",
                    company: "杭州中安电子股份有限公司",
                    role: "硬件工程师（模拟 IC 应用方向）",
                    points: [
                      "参与项目技术评审，完成 IC 选型、电路拓扑设计与参数优化，根据评审意见整改设计缺陷",
                      "负责核心模拟电路原理图设计与 PCB Layout，完成 IC 代码开发、芯片调试与性能适配",
                      "跟进全流程电路故障排查，保障项目按期交付",
                    ],
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.company}
                    custom={i + 2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="p-5 rounded-2xl border border-primary/10 bg-dark-800/50 backdrop-blur-sm group hover:border-secondary/20 transition-all duration-500"
                  >
                    <span className="text-xs font-mono text-secondary/60">
                      {item.period}
                    </span>
                    <h4 className="text-white font-semibold mt-1">
                      {item.company}
                    </h4>
                    <p className="text-sm text-dark-300 mt-0.5 mb-3">
                      {item.role}
                    </p>
                    <ul className="space-y-1.5">
                      {item.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-dark-400 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-secondary/60 mt-1 shrink-0">
                            ▹
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Honors */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <FiAward className="text-sm" />
                </div>
                <h3 className="text-lg font-bold text-white">在校荣誉</h3>
              </div>
              <motion.div
                custom={5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-5 rounded-2xl border border-primary/10 bg-dark-800/50 backdrop-blur-sm"
              >
                <ul className="space-y-2.5">
                  {[
                    '2021.07 — 荣获河南省省级“三好学生”荣誉称号',
                    '2020.10~2020.12 — “语音智能垃圾桶”项目获“大学生实验创新训练项目结项证书”',
                    '2020.03~2020.04 — 校级“单片机设计大赛个人赛一等奖”、“电子电路设计大赛团队赛三等奖”',
                    '2019.12~2020.12 — 连续2届荣获“国家励志奖学金”和校级“三好学生”',
                  ].map((honor, i) => (
                    <li
                      key={i}
                      className="text-xs text-dark-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent/60 mt-0.5 shrink-0">◆</span>
                      {honor}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
