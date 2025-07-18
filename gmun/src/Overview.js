import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section className="sectionHero">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="sectionHero-h1">What is GMUN?</h2>
          <p>
            Global Model United Nations (GMUN) is an academic simulation of the
            UN where students role-play as international diplomats, addressing
            global issues through discussion, debate, and diplomacy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="sectionHero-h1">Our Mission</h2>
          <p>
            To foster critical thinking, leadership, and cross-cultural
            collaboration by simulating real-world international diplomacy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="sectionHero-h1">Objectives</h2>
          <ul className="ulOverview">
            <li>Promote awareness of global issues</li>
            <li>Encourage leadership and public speaking</li>
            <li>Teach negotiation and conflict resolution</li>
            <li>Connect young leaders across the globe</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="sectionHero-h1">What We Do</h2>
          <p>
            We host international conferences, committee simulations, diplomacy
            workshops, and speaker sessions, giving students a platform to
            express ideas and create real impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
