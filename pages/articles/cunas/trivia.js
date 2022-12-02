import Layout from "./layout";

const props = {
  title: "Cuña trivia",
  description:
    "Esta trivia descriptiva habla sobre la contaminación que generan las ciudades al aire y los daños que contrae a la salud. ",
  image: "trivia",
  footer: "Mañana en Armenia",
  audio: "trivia",
  name: "Maria Ángeles",
};

export default function Cuna() {
  return <Layout {...props} />;
}
