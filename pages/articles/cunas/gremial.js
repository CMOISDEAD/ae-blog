import Layout from "./layout";

const props = {
  title: "Cuña Gremial",
  description:
    "La locutora hace una invitación a los oyentes para que visiten la página web en el cual hablan sobre problemáticas ambientales como la deforestación, contaminación, como se puede prevenir entre otros aspectos. ",
  image: "gremial",
  audio: "gremial",
  name: "Erika Gabriela",
};

export default function Cuna() {
  return <Layout {...props} />;
}
