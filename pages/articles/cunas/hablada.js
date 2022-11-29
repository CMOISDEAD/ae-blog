import Layout from "./layout";

const props = {
  title: "Cuña hablada",
  description:
    "Esta cuña nos cuenta sobre la importancia de cuidar el medio ambiente, también de algunos pasos a seguir para la conservación y sostenibilidad del mismo y, además, hace referencia a la regla de las 3R. ",
  image: "hablada",
  audio: "hablada",
};

export default function() {
  return <Layout {...props} />;
}
