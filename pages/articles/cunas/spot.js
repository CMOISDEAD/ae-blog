import Layout from "./layout";

const props = {
  title: "Cuña spot",
  description:
    "Esta cuña trata de explicar las consecuencias que las multinacionales traen cuando se establecen en los territorios.En especial, cuando todo luce muy pintoresco pero lo cierto es que los objetivos de estas no van por este camino.",
  image: "spot",
  audio: "spot",
};

export default function() {
  return <Layout {...props} />;
}
