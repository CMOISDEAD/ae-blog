import Layout from "./layout";

const props = {
  title: "Noticiero Radiofónico",
  description:
    "El siguiente noticiero radiofónico nos hablará de diferentes temas y problemáticas culturales que vive la región del Quindío de una manera novedosa y con voces totalmente universitarias, no te pierdas de todo el contenido que traemos para ti.",
  collage: ["radio_1", "radio_2"],
  footer: "Mar, Cielo y Tierra & Un mundo verde",
  audio: "radio",
  name: "Maria Angeles",
};

export default function Radio() {
  return <Layout {...props} />;
}
