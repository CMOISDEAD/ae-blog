import Layout from "./layout";

const props = {
  title: "Cuña trivia",
  description:
    "Esta trivia descriptiva habla sobre la contaminación que generan las ciudades al aire y los daños que contrae a la salud. ",
  image: "trivia",
  audio: "trivia",
};

export default function() {
  return <Layout {...props} />;
}
