import Layout from "./layout";

const props = {
  title: "Noticiero Radiofonico",
  description:
    "El siguiente noticiero radiofónico nos hablará de diferentes temas y problemáticas culturales que vive la región del Quindío de una manera novedosa y con voces totalmente universitarias, no te pierdas de todo el contenido que traemos para ti.",
  image: "radio",
  audio: "radio",
};

export default function Radio() {
  return <Layout {...props} />;
}
