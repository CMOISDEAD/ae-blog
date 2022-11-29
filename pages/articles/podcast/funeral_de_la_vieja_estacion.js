import Layout from "./layout";

const props = {
  title: "Funeral de la vieja estacion",
  description:
    "Este pódcast habla del olvido en que se ha convertido la vieja estación del tren de Armenia. De sus compañías actuales y las que tuvo alguna vez. Sus creadores y los grandes sueños que en un pasado albergó. La imponencia y el logro cuyabro que sus paredes transmitian en un pasado y que pocos recuerdan en una ciudad urbana que no da marcha atrás para cuidar historias que nos ayudaron a encontrar el hoy.",
  image: "funeral_de_la_vieja_estacion",
  audio: "funeral_de_la_vieja_estacion",
};

export default function Podcast() {
  return <Layout {...props} />;
}
