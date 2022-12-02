import Layout from "./layout";

const props = {
  title: "Llamas gemelas",
  description:
    "El pódcast trata sobre las gemelas Muriel, Mónica y Vanessa como personajes emblemáticos de la ciudad  . Desde muy pequeñas han desarrollado la habilidad del arte de la pintura, por medio del muralismo, han representado  el Paisaje Cultural Cafetero y  personajes representativos. De esta manera, embellecen las calles de los municipios del departamento del Quindío, dando como ejemplo la labor que han realizado en el municipio de Calarcá, adquiriendo reconocimiento en la sociedad. ",
  image: "llamas_gemelas",
  footer: "Arte compartido",
  audio: "llamas_gemelas",
  name: "Jessica Martinez",
};

export default function Podcast() {
  return <Layout {...props} />;
}
