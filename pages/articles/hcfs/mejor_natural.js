import Layout from "./layout";

const props = {
  title: "Mejor natural",
  description: "",
  image: "mejor_natural",
  footer: "Casa en el campo",
  audio: "mejor_natural",
  name: "Richard Daniel Aguagallo",
};

export default function Hcfs() {
  return <Layout {...props} />;
}
