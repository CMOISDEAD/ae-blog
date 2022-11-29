import Layout from "./layout";

const props = {
  title: "Cuña Anti Promocional",
  description:
    "Esta cuña intenta concientizar sobre los discursos engañosos que se propagan cada vez más en los diversos territorios que son ricos en minerales para la extracción de estos. Teniendo en cuenta que existen casos donde han salido victoriosas las multinacionales. ",
  image: "antipromocional",
  audio: "antipromocional",
};

export default function() {
  return <Layout {...props} />;
}
