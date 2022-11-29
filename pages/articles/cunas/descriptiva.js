import Layout from "./layout";

const props = {
  title: "Cuña Descriptiva",
  description:
    "Esta cuña nos cuenta a través de un diálogo, el mal uso de los manejos que se tienen en los barrios con los desechos de las personas y con sus respectivos puntos de recolección.",
  image: "descriptiva",
  audio: "descriptiva",
};

export default function() {
  return <Layout {...props} />;
}
