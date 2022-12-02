import Layout from "./layout";

const props = {
  title: "Charla Testimonial",
  description:
    "En el microformato se abordarán temas relacionados con la contaminación en el ámbito rural y las maneras de las que se están desarrollando diferentes formas de gestionar sobre la problemática.",
  image: "testimonial",
  footer: "Ave libre",
  audio: "testimonial",
  name: "Jeison Cano",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
