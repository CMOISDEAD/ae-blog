import Layout from "./layout";

const props = {
  title: "informativa",
  description:
    "La entrevista informativa fue realizada a Mónica Liliana Flórez, activista y líder de la fundación Pijao Cittaslow, quien nos habla sobre el cuidado del medio ambiente, las consecuencias del deterioro ambiental, algunas estrategias para generar una conciencia ambiental, entre otros.",
  image: "informativa",
  audio: "informativa",
  name: "Jessica Martinez",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
