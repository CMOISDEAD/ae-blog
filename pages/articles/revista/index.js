import Layout from "./layout";

const props = {
  title: "Radio Revista",
  description:
    "En este magazine concentramos diferentes temas relacionados con el medio ambiente, todo con el fin de generar un cambio producido por la radio a a través de voces jóvenes y testimonios reales con diferentes productos para entretener y educar.",
  collage: ["revista_1", "revista_2"],
  footer: "Cielo y Tierra & Un mar sin humanos",
  audio: "revista",
  name: "Maria Ángeles",
};

export default function Radio() {
  return <Layout {...props} />;
}
