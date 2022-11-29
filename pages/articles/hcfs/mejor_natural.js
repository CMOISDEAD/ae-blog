import Layout from "./layout";

const props = {
  title: "Mejor natural",
  description: "",
  image: "mejor_natural",
  audio: "mejor_natural",
};

export default function() {
  return <Layout {...props} />;
}
