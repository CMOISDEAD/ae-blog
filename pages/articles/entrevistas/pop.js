import Layout from "./layout";

const props = {
  title: "vox pop",
  description:
    "En el siguiente Vox pop se tendrán en cuenta las respuestas de diferentes entrevistados acerca de la proliferación de los residuos sólidos y como este tipo de contaminación afecta su diario vivir.",
  image: "pop",
  collage: [
    "pop_1",
    "pop_2",
    "pop_3",
    "pop_4",
    "pop_5",
    "pop_6",
    "pop_7",
    "pop_8",
    "pop_9",
    "pop_10",
  ],
  footer:
    "Deisy Leon, Duvan Samuel Yepes, Leonel Benitez, Luisa Fernanda Muños, Luisa Maria Mendoza, Maria José Ortiz, Miguel Angel, Publico, Roger Rodriguez",
  audio: "pop",
  name: "Maria Ángeles",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
