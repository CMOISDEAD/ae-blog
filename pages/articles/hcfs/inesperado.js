import Layout from "./layout";

const props = {
  title: "Inseperado",
  description:
    "La historia con efectos de sonidos trata sobre Ariché, un adolescente campesino de 16 años que vive con su familia en una finca en la zona rural de Caquetá. Su vida cotidiana es realizar labores, disfrutar del campo y oír los sonidos de la flora y fauna en compañía de su familia, hasta que, un acontecimiento que desconocían aparece inesperadamente provocando que les cambie la vida. ",
  image: "inesperado",
  audio: "inesperado",
};

export default function Hcfs() {
  return <Layout {...props} />;
}
