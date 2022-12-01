import Layout from "./layout";

const props = {
  title: "Diálogo dramatizado",
  description:
    "En el microformato se abordará un tema de preocupación global, se hablará de la contaminación masiva que experimenta el planeta y que esto paulatinamente acabará por terminar con nuestro fin, el fin de la raza humana.",
  image: "dramatizado",
  audio: "dramatizado",
  name: "Maria Angeles",
};

export default function Entrevista() {
  return <Layout {...props} />;
}
