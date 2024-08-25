import Title from "../Component/Title";
import { skills } from "../data";
import { motion } from "framer-motion";

const Skills = () => {
  const welcomeTitle = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="container d-flex align-items-center flex-column">
      <Title title="Skills" />
      <div className="row gap-5 mb-2 h-100 justify-content-center align-items-center mt-3">
        {skills.map((categoryData) => (
          <div key={categoryData.category} className="category-section">
            <h2 className="category-title">{categoryData.category}</h2>
            <div className="row gap-5 justify-content-center align-items-center">
              {categoryData.items.map((item, index) => (
                <motion.div
                  variants={welcomeTitle}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  key={item.id}
                  className="skill col col-lg-2 d-flex flex-column justify-content-center align-items-center rounded"
                >
                  <span className="icon-container rounded px-3">{item.icon}</span>
                  <p className="skill-text">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
