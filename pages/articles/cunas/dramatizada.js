import Layout from "./layout";

const props = {
  title: "Cuña Dramatizada",
  description:
    "La cuña trata de que unas amigas salen a pasear al bosque, entonces ellos deciden tomar unas cervezas y luego se quedan dormidas, posteriormente en ese día tan caluroso el contacto de los rayos solares con los vidrios generan un gran incendio.",
  image: "dramatizada",
  footer: "Laguna Bolsa",
  audio: "dramatizada",
  name: "Erika Gabriela",
};

export default function Cuna() {
  return <Layout {...props} />;
}
