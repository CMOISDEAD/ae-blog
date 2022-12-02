import Layout from "./layout";

const props = {
  title: "Repotaje",
  description:
    "En el siguiente reportaje se relata las causas y consecuencias que producen los recientes monocultivos de aguacate Hass en las montañas de la cordillera quindiana, los cuales vienen causando molestia en las poblaciones de estos municipios por todos los aspectos negativos que trae consigo estos cultivos de origen chileno, mexicano y colombiano y que de  manera masiva se han tomado grandes territorios montañosos provocando efectos perjudiciales en la tierra, vegetación, fauna y cuerpos fluviales.",
  collage: [
    "reportaje_1",
    "reportaje_2",
    "reportaje_3",
    "reportaje_4",
    "reportaje_5",
    "reportaje_6",
  ],
  footer:
    "Nestor Ocampo, Edwin Reyes, Monica Florez, Manuela Gonzalez, Maria Luisa, Kevin Herrera",
  audio: "reportaje",
  name: "",
};

export default function Cronica() {
  return <Layout {...props} />;
}
