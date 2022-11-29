import Layout from "./layout";

const props = {
  title: "El Poeta del Quindio",
  description:
    "Baudilio Montoya fue un poeta reconocido en el Quindío; sin embargo, no nació en el tal departamento, fue un gran representante de este territorio, convirtiéndose hasta la actualidad en un emblema. Era un poeta que resaltaba en sus versos la belleza de la naturaleza y la particularidad de la gente del departamento; el campesino fue uno de los pilares para la creación de sus versos. Además, aunque no es originario del Quindío, fue muy querido en el departamento, siendo homenajeado después de su muerte de muchas maneras.",
  image: "el_poeta_del_quindio",
  audio: "el_poeta_del_quindio",
};

export default function() {
  return <Layout {...props} />;
}
