import Layout from "./layout";

const props = {
  title: "indagatoria",
  description:
    "Esta entrevista busca explorar los conocimientos de quienes cuestionan las operaciones que se realizan en sus territorios. También, trata de informar los procesos y experiencias que hacen parte del desarrollo de los mecanismos de participación relacionados con la megamineria.",
  image: "indagatoria",
  audio: "indagatoria",
};

export default function() {
  return <Layout {...props} />;
}
