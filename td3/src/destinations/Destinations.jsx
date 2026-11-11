import Destination from "../components/Destination/destinantion.jsx";

import santorini from "../assets/santorini.jpg";
import bali from "../assets/bali.jpg";
import rome from "../assets/Rome.jpg";

import styles from "./Destinations.module.css";

function Destinations() {

  const destinations = [
    {
      id: 1,
      image: santorini,
      nom: "Santorin",
      pays: "Grèce",
      description: "Découvrez les magnifiques paysages des îles grecques.",
      prix: 1200
    },

    {
      id: 2,
      image: bali,
      nom: "Bali",
      pays: "Indonésie",
      description: "Profitez des plages paradisiaques de Bali.",
      prix: 1800
    },

    {
      id: 3,
      image: rome,
      nom: "Rome",
      pays: "Italie",
      description: "Découvrez les monuments historiques de Rome.",
      prix: 950
    }
  ];

  return (
    <section className={styles.container}>

      <h1 className={styles.title}>
        Nos destinations
      </h1>

      <div className={styles.destinations}>

        {destinations.map((destination) => (
          <Destination
            key={destination.id}
            image={destination.image}
            nom={destination.nom}
            pays={destination.pays}
            description={destination.description}
            prix={destination.prix}
          />
        ))}

      </div>

    </section>
  );
}

export default Destinations;
