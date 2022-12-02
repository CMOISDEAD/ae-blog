import Layout from "./layout";

const props = {
  title: "Tradición y Café",
  description:
    "RECUCA conocido como; Recorrido de la Cultura Cafetera, donde los visitante, entran en contacto con experiencias y tradiciones cafeteras, asumiendo el papel del caficultor y arriero de la época y quieren cumplieron un rol fundamental en la época realizando el proceso de la semilla a la taza.",
  image: "tradicion_y_cafe",
  footer: "Quindío cafetero",
  audio: "tradicion_y_cafe",
  name: "Jeison Cano",
};

export default function Podcast() {
  return <Layout {...props} />;
}
