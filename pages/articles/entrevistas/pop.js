import Layout from "./layout";

const props = {
  title: "vox pop",
  description:
    "En el siguiente Vox pop se tendrán en cuenta las respuestas de diferentes entrevistados acerca de la proliferación de los residuos sólidos y como este tipo de contaminación afecta su diario vivir.",
  image: "pop",
  collage: ["pop_I", "pop_II"],
  audio: "pop",
  name: "Maria Angeles",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
