import Layout from "./layout";

const props = {
  title: "Cuña historica",
  description:
    "Esta cuña nos cuenta sobre la marcha pacífica y sin ánimo de lucro en contra de la megaminería en Salento Quindío,en la cual se desarrollaron diferentes actividades a lo largo de la marcha en pro a la conservación del agua y a la vida.",
  image: "historica",
  audio: "historica",
};

export default function Cuna() {
  return <Layout {...props} />;
}
