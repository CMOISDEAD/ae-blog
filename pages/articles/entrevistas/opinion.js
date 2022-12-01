import Layout from "./layout";

const props = {
  title: "opinion",
  description:
    "En la entrevista tendremos la compañía de la señora Nancy Liyani González Vélez, quien nos dará su opinión acerca de la contaminación urbana en la ciudad y diferentes tipos de preguntas relacionadas con el tema.",
  image: "opinion",
  audio: "opinion",
  name: "Maria Angeles",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
