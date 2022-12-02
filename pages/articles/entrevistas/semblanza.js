import Layout from "./layout";

const props = {
  title: "semblanza",
  description:
    "En esta entrevista se trataron temas ambientales, sociales y coordinados, a partir de la vida y experiencias propias de un hombre que se ha desempeñado por muchos años en actividades u oficios en minería de río, artesanal e industrial, todo esto, por personas naturales del campo de la minería artesanal.",
  image: "semblanza",
  footer: "Juan Octavio",
  audio: "semblanza",
  name: "Jeison Cano",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
