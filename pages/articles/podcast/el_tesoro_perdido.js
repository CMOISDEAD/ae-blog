import Layout from "./layout";

const props = {
  title: "El Tesoro Perdido",
  description:
    "Esta historia nos narra sobre El Tesoro Quimbaya pues, este representa una parte de la historia de las comunidades indígenas representados mediante objetos precolombinos cómo orejeras, caciques de barro, vasijas entre otras, pero terminaron en España ya que el presidente Carlos Holguín Mallarino las obsequio a la reina María Cristina en 1893 y desde entonces permanecen allá. Estos objetos nunca serán devueltos por los españoles pues consideran que son un  bien de interés cultural.",
  image: "el_tesoro_perdido",
  audio: "el_tesoro_perdido",
};

export default function Podcast() {
  return <Layout {...props} />;
}
