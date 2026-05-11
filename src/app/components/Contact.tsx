"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiPhone } from "react-icons/fi";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative bg-dark-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-4">
            &gt; CONTACT
          </p>
          <h2 className="section-title text-white">
            联系<span className="gradient-text">我</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <p className="text-dark-200 text-base leading-relaxed mb-10">
              如果您对我的项目经历或技能感兴趣，欢迎随时联系我。
              期待与您在模拟 IC 设计领域交流合作。
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <FiMail />,
                  label: "邮箱",
                  value: "17753476434@163.com",
                  href: "mailto:17753476434@163.com",
                },
                {
                  icon: <FiPhone />,
                  label: "电话",
                  value: "17753476434",
                  href: "tel:17753476434",
                },
                {
                  icon: <FiMapPin />,
                  label: "所在地",
                  value: "安徽合肥",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-dark-400 mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-dark-200 hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-dark-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative circuit line */}
            <div className="mt-12 hidden md:block">
              <svg
                width="200"
                height="40"
                viewBox="0 0 200 40"
                className="opacity-30"
              >
                <path
                  d="M0 20 L40 20 L60 20 L70 10 L80 30 L90 20 L120 20 L140 10 L150 20 L200 20"
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="1.5"
                  className="[stroke-dasharray:4_4]"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-primary/10 bg-dark-800/50 backdrop-blur-sm p-6 md:p-8"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs text-dark-400 font-mono mb-2"
                    >
                      姓名
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-primary/10 text-white text-sm focus:outline-none focus:border-primary/40 transition-colors placeholder:text-dark-400"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs text-dark-400 font-mono mb-2"
                    >
                      邮箱
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-primary/10 text-white text-sm focus:outline-none focus:border-primary/40 transition-colors placeholder:text-dark-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-dark-400 font-mono mb-2"
                  >
                    留言
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-primary/10 text-white text-sm focus:outline-none focus:border-primary/40 transition-colors resize-none placeholder:text-dark-400"
                    placeholder="请描述您的项目需求或合作意向..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    submitted
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-primary text-dark-900 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                  }`}
                >
                  {submitted ? (
                    "消息已发送！"
                  ) : (
                    <>
                      <FiSend className="text-sm" />
                      发送消息
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
