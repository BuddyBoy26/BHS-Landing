import React from "react";
import "./MDMessage.css";
import { motion } from "framer-motion";

const MDMessage = () => {
  const timelineData = [
    {
      week: "WEEK ONE",
      title: "UNDERSTAND",
      description: "Gather existing knowledge, expose assumptions and unknowns.",
      icon: "📖",
    },
    {
      week: "WEEK TWO",
      title: "DIVERGE",
      description:
        "Eliminate all limits. Our goal is to explore as many materials, models, or ideas as possible.",
      icon: "🛠️",
    },
    {
      week: "WEEK THREE",
      title: "CONVERGE",
      description:
        "Our goal is the value of the proposition that will be moved forward.",
      icon: "🔗",
    },
    {
      week: "WEEK FOUR",
      title: "PROTOTYPING",
      description:
        "During this phase, we build a quick and cheap version to test the feasibility of ideas.",
      icon: "🛠️",
    },
    {
      week: "WEEK FIVE",
      title: "TESTING",
      description:
        "Ensure that your product meets the needs of users and see how effective it is.",
      icon: "⚙️",
    },
    {
      week: "WEEK SIX",
      title: "REITERATION",
      description:
        "Refine the solution to fix any issues and improve its functionality.",
      icon: "🔄",
    },
    {
      week: "WEEK SEVEN",
      title: "REVIEW",
      description:
        "To review means to look back over time, evaluating the work that has been done.",
      icon: "✔️",
    },
    {
      week: "WEEK EIGHT",
      title: "FINALIZE",
      description:
        "When you are satisfied with the final design, it’s time to finalize and present.",
      icon: "🏁",
    },
  ];

  return (
    <>
      <div>
        <div className="new1">
          <motion.div 
            className="md-container"
            initial={{ opacity: 0, y: 30 }} // Reduced distance
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }} // Improved easing
            style={{ willChange: "opacity, transform" }} // Performance hint
          >
            <motion.div 
              className="md-content"
              initial={{ opacity: 0, scale: 0.95 }} // Less extreme scale
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }} // Improved easing
            >
              <motion.h2 
                className="md-title"
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.33, 1, 0.68, 1] }} // Improved easing
              >
                MD's Message
              </motion.h2>
              <motion.p 
                className="md-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Our goal is to thoroughly understand our customers' business needs before committing to being their service provider. As a team, we bring extensive experience from the region, covering a wide range of industries, ensuring that our customers benefit from this expertise. By doing so, we aim to grow together as a team and with our customers.
              </motion.p>
              <motion.p 
                className="md-signature"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                - Managing Director
              </motion.p>
            </motion.div>
          </motion.div>

          <div className="timeline-section">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="animated-gradient-text"
            >
              {"Our Modus Operandi...".split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <div className="timeline-container">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }} // Reduced distance
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08, // Reduced delay between items
                  ease: [0.33, 1, 0.68, 1] // Improved easing
                }}
                style={{ willChange: "opacity, transform" }} // Performance hint
              >
                <motion.div 
                  className="timeline-icon"
                  
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>

                <motion.div 
                  className="timeline-content"
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                >
                  <h3>{item.week}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MDMessage;
