import React from "react";
import { motion } from "framer-motion";
import "../styles/Liste.css";

function Liste() {
  return (
    <motion.section
      className="liste"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Ma liste de livres</h2>
      <p>
        Ici tu verras, mois par mois, les livres que tu veux acheter avec leur prix total.
      </p>
    </motion.section>
  );
}

export default Liste;
