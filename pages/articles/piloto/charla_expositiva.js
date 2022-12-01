import Layout from "./layout";

const props = {
  title: "Charla expositiva",
  description:
    "La charla trata de hacer una pedagogía acerca de que es deforestación, porque se genera, cuáles son las precauciones que se deben tener en cuenta y cómo daña a los ecosistemas. ",
  image: "expositiva",
  audio: "expositiva",
  name: "Erika Gabriela",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
