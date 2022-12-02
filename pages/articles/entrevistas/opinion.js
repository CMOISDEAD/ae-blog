import Layout from "./layout";

const props = {
  title: "opinión",
  description:
    "En la entrevista tendremos la compañía de la señora Nancy Liyani González Vélez, quien nos dará su opinión acerca de la contaminación urbana en la ciudad y diferentes tipos de preguntas relacionadas con el tema.",
  // image: "opinion",
  collage: ["opinion", "opinion_II"],
  footer: "Nancy Liyani González",
  audio: "opinion",
  name: "Maria Ángeles",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
