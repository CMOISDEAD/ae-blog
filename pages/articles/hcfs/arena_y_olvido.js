import Layout from "./layout";

const props = {
  title: "Arena y Olvido",
  description:
    "La historia  se basa en el diario vivir de una persona del común y que actualmente en su vida se dedica a las labores relacionadas directamente con la minería y su debido transporte, a través de vehículos de carga pesada y de acciones realiza  antes de irse a laborar.",
  image: "arena_y_olvido",
  audio: "arena_y_olvido",
  video: "arena_y_olvido",
  name: "Jeison Cano",
};

export default function Hcfs() {
  return <Layout {...props} />;
}
