import { motion } from "framer-motion";
import about from "../assets/About me.jpg";
import Title from "../Component/Title";
import { Link } from "react-router-dom";

const About_me = () => {
  const welcomeTitle = {
    hidden: {
      x: "200%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="container">
      <Title title="About me" />
      <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row text-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <img
            src={about}
            className="img order-1 order-lg-0 rounded about-img"
            alt="about me"
          />
        </motion.div>
        <div className=" ps-lg-5 pb-3 pt-3 ">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="text-start"
          >
            My name is <span className="about-name fw-bold">mahmoud omar</span>,
            and I specialize in website penetration testing within the field of cybersecurity.
            I have a deep passion for learning and uncovering vulnerabilities to enhance online security.
            I have obtained certificates of completion and proficiency from reputable platforms such as
            .{" "}
            <span className="about-cert fw-bold">
              ( Hack The Box , VulnHub, TryHackMe, Offensive Security, SANS Institute, PentesterLab , Bugcrowd).
            </span>
            <br /> I focus on identifying and mitigating security risks to ensure robust and secure web applications. 
            I take pride in my ability to detect potential threats and vulnerabilities by employing advanced penetration testing techniques. 
            By staying up-to-date with the latest cybersecurity tools and methodologies, I aim to contribute to creating a safer digital environment for all users.
          </motion.p>
          <div className="d-flex flex-column flex-md-row gap-3">
            {[
              {
                text: "Download CV",
                link: "https://drive.google.com/file/d/1LPUCEf_QEnXluyZrZSmpD2F41piV1irD/view?usp=sharing",
              },
              {
                text: "Get in touch",
                link: "/contact",
              },
              {
                text: "Show Skills",
                link: "/skills",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="me-4"
                variants={welcomeTitle}
                initial={"hidden"}
                animate={"visible"}
                transition={{ delay: 0.05 + index * 0.05 }}
                exit={{ opacity: 0, y: "200%" }}
              >
                <Link to={item.link}>
                  <button type="button" className="btn">
                    {item.text}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_me;
