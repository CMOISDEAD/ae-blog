import Layout from "./layout";

const props = {
  title: "Mañanas de basura",
  description:
    "La siguiente historia con efecto de sonido narra como Cada mañana se una ciudad con mañanas de basura  diferentes actores van en busca de las residuos que muchos desperdian siento este un tesoro que envuelve diferente significados para cada uno.",
  image: "mananas_de_basura",
  audio: "mananas_de_basura",
};

export default function() {
  return <Layout {...props} />;
}
