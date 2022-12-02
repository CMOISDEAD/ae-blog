import Layout from "./layout";

const props = {
  title: "Cuña testimonial",
  description:
    "En el apartado de cuña testimonial, se introduce un poco sobre la situación y luego se presenta el testimonio del habitante del sector donde existe una problemática donde se afecta el medio ambiente.",
  image: "testimonial",
  footer: "José Meza la soledad",
  audio: "testimonial",
  name: "Jeison Cano",
};

export default function Cuna() {
  return <Layout {...props} />;
}
