import React, { useState } from "react";
import "../styles/Achats.css";

export default function Achats() {
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1, currentYear + 2];

  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [mois, setMois] = useState("Janvier");
  const [annee, setAnnee] = useState(currentYear);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titre || !prix || !mois || !annee) {
      alert("Merci de renseigner tous les champs.");
      return;
    }

    // 🔹 Future connexion à ton API C#
    // await fetch("https://tonapi.com/api/livres", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ titre, prix, mois, annee }),
    // });

    console.log("Livre ajouté :", { titre, prix, mois, annee });

    // Réinitialisation des champs
    setTitre("");
    setPrix("");
    setMois("Janvier");
    setAnnee(currentYear);
  };

  return (
    <div className="achats-container">
      <h1 className="achats-title">Ajouter un Livre </h1>

      <form className="ajout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titre">Titre du livre :</label>
          <input
            id="titre"
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Ex: Dune, Fondation..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="prix">Prix (€) :</label>
          <input
            id="prix"
            type="number"
            step="0.01"
            min="0"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            placeholder="Ex: 14.99"
          />
        </div>

        <div className="form-row">
          <div className="form-group half">
            <label htmlFor="mois">Mois d’achat prévu :</label>
            <select
              id="mois"
              value={mois}
              onChange={(e) => setMois(e.target.value)}
            >
              {[
                "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
              ].map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="form-group half">
            <label htmlFor="annee">Année :</label>
            <select
              id="annee"
              value={annee}
              onChange={(e) => setAnnee(e.target.value)}
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Valider
        </button>
      </form>
    </div>
  );
}
