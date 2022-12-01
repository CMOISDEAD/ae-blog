import Layout from "./layout";

const props = {
  title: "Comentario Radial",
  description:
    "En el microformato se abordarán temas relacionados con la contaminación en las ciudades y en el campo, con una mirada educativa, fomentando buenos pilares en el colegio con el fin de mitigar la problemática a futuro.",
  image: "radial",
  audio: "radial",
  name: "Jeison Cano",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
