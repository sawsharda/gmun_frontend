import gmun from "./gmun.png";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={gmun} alt="GMUN Logo" className="logo" />
      <nav className="nav_links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#committees">Committees</a>
        <a href="#agenda">Agenda</a>
      </nav>
    </motion.header>
  );
}
