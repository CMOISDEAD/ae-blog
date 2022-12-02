import Layout from "./layout";

const props = {
  title: "Charla Creativa",
  description:
    "En esta charla se abordará la importancia de cuidar el medio ambiente, las acciones que debemos realizar para proteger y disminuir los efectos nocivos, para así conservarlo y disfrutar de un ambiente sano.",
  image: "creativa",
  footer: "Basura en la ciudad",
  audio: "creativa",
  name: "Jessica Martinez",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
