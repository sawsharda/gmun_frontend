import { motion } from "framer-motion";
import "./styles.css";
export default function Hero() {
  return (
    <section className="sectionHero">
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          ease: "anticipate",
        }}
        className="sectionHero-h1 "
      >
        Welcome to Global Model United Nations
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        Join the Global MUN and experience diplomacy, leadership, and change.
      </motion.p>

      <motion.a
        href="#register"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        Register Now
      </motion.a>
    </section>
  );
}
