import Layout from "./layout";

const props = {
  title: "Llamas gemelas",
  description: "",
  image: "llamas_gemelas",
  audio: "llamas_gemelas",
};

export default function Podcast() {
  return <Layout {...props} />;
}
