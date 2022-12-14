import Layout from "./layout";

const props = {
  title: "Cuña Descriptiva",
  description:
    "Esta cuña nos cuenta a través de un diálogo, el mal uso de los manejos que se tienen en los barrios con los desechos de las personas y con sus respectivos puntos de recolección.",
  image: "descriptiva",
  footer: "Armenia y puntos de basura",
  audio: "descriptiva",
  name: "Maria Angeles",
};

export default function Cuna() {
  return <Layout {...props} />;
}
