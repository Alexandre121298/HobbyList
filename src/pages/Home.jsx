import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

function Home() {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Bienvenue sur HobbyList</h2>
      <p>
        Ce site te permet de suivre mois par mois les sorties de livres que tu veux acheter,
        avec un aperçu du coût total par mois.
      </p>
    </motion.section>
  );
}

export default Home;
