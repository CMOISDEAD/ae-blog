import Layout from "./layout";

const props = {
  title: "Cuña humoristica",
  description:
    "Esta cuña busca entretenernos mediante un humor negro sobre la problematica que se vive hoy por hoy y donde, prima el sarcasmo ante cualquier situacion, creando asi un efecto contraproducente a los escuchas.",
  image: "humoristica",
  audio: "humoristica",
  name: "Jeison Cano",
};

export default function Cuna() {
  return <Layout {...props} />;
}
