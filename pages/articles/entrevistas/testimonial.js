import Layout from "./layout";

const props = {
  title: "testimonial",
  description: "",
  image: "testimonial",
  footer: "Néstor Ocampo",
  audio: "testimonial",
  name: "Erika Gabriela",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
