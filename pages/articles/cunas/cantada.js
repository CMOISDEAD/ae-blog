import Layout from "./layout";

const props = {
  title: "Cuña Cantada",
  description:
    "La cuña cantada cuenta de forma muy creativa, las causas y las consecuencias y que las personas tienen que concientizarse para frenar de cierto modo esta problemática. ",
  image: "cantada",
  footer: "Juan José, Barrio Barcelona",
  audio: "cantada",
  name: "Jeison Cano",
};

export default function Cuna() {
  return <Layout {...props} />;
}
