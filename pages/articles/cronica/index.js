import Layout from "./layout";

const props = {
  title: "Cronica",
  description:
    "Néstor Ocampo es un líder ambiental, con buen recorrido y experiencias en temas socio culturales y medio ambientales a nivel nacional y departamental, puesto que en el departamento del Quindío ha estado al frente de grandes movimientos que luchan contra el estado y multinacionales, todo esto para fundamentar la preservación del ecosistema.",
  image: "cronica",
  audio: "cronica",
};

export default function() {
  return <Layout {...props} />;
}
