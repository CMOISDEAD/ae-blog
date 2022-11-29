import Layout from "./layout";

const props = {
  title: "Cuña Cotidiana",
  description:
    "La cuña trata sobre sucesos que se ven habitualmente en la calle como las bolsas de basura regadas en diferentes esquinas, animales que se alimentan de los desechos y el mal olor que se percibe, convirtiéndose en una situación común en la población.",
  image: "cotidiana",
  audio: "cotidiana",
};

export default function() {
  return <Layout {...props} />;
}
