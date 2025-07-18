import { motion } from "framer-motion";
export default function EventAndTestimony() {
  return (
    <div className="sectionHero-h1">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Events</h2>

        <motion.div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>GMUN 2025 Opening Ceremony</h3>
          <p>
            <strong>Date:</strong> March 14, 2025
          </p>
          <p>
            Kick-off event with keynote speakers from global diplomatic bodies.
          </p>
        </motion.div>

        <motion.div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3>Policy Drafting Workshop</h3>
          <p>
            <strong>Date:</strong> January 28, 2025
          </p>
          <p>
            Interactive workshop on drafting impactful international policies.
          </p>
        </motion.div>

        <motion.div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>Crisis Committee Simulation</h3>
          <p>
            <strong>Date:</strong> February 10, 2025
          </p>
          <p>
            High-stakes emergency response session with real-world scenarios.
          </p>
        </motion.div>
      </motion.section>

      {/*  TESTIMONIALS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>What Participants Say</h2>

        <motion.div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
          }}
          variants={{
            hidden: { opacity: 0, y: 75 },
          }}
        >
          <p>
            “GMUN helped me find my voice and confidence on a global platform.”
          </p>
          <p>
            <strong>Aditi Sharma</strong> - Delegate, GMUN 2024
          </p>
        </motion.div>

        <motion.div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            “The crisis committee was intense and eye-opening. I learned so
            much!”
          </p>
          <p>
            <strong>Raj Mehta</strong> - Crisis Committee, GMUN 2024
          </p>
        </motion.div>

        <motion.div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>
            “Being part of the press corps let me explore diplomacy through
            journalism.”
          </p>
          <p>
            <strong>Mariam Sayeed</strong> - Press Corps, GMUN 2023
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}
