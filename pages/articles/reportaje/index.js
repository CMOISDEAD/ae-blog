import Layout from "./layout";

const props = {
  title: "Repotaje",
  description:
    "En el siguiente reportaje se relata las causas y consecuencias que producen los recientes monocultivos de aguacate Hass en las montañas de la cordillera quindiana, los cuales vienen causando molestia en las poblaciones de estos municipios por todos los aspectos negativos que trae consigo estos cultivos de origen chileno, mexicano y colombiano y que de  manera masiva se han tomado grandes territorios montañosos provocando efectos perjudiciales en la tierra, vegetación, fauna y cuerpos fluviales.",
  image: "reportaje",
  audio: "reportaje",
};

export default function Cronica() {
  return <Layout {...props} />;
}
