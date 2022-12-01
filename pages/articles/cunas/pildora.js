import Layout from "./layout";

const props = {
  title: "Cuña Pildora",
  description:
    "La cuña píldora data de una sección que informa basadas en unas estadísticas de algunas de las consecuencias que viene presentando la problemática en el medio ambiente y  la vida humana. ",
  image: "pildora",
  audio: "pildora",
  name: "Jeison Cano",
};

export default function Cuna() {
  return <Layout {...props} />;
}
