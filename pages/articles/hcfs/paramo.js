import Layout from "./layout";

const props = {
  title: "Quien no ama el páramo no ama la vida",
  description:
    "La historia se trata de una joven llamada Sofía que un día junto a sus amigos deciden salir a vivir una nueva aventura y es visitar el páramo y la laguna, lo que ellos no se esperaban era que unas personas malintencionadas provocaron un incendio en dicho lugar, dejando graves consecuencias medioambientales, pero que gracias a la ayuda de bomberos y comunidad en general lograron apagar el fuego.",
  image: "paramo",
  footer: "Entre el páramo",
  audio: "paramo",
  name: "Erika Gabriela",
};

export default function Hcfs() {
  return <Layout {...props} />;
}
