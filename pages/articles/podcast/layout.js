import Layout from "../../../components/layout";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function LayoutPodcast({
  title,
  description,
  image,
  audio,
  name,
}) {
  return (
    <Layout>
      <h1 className="text-3xl text-center capitalize text-white">{title}</h1>
      <div className="flex items-center justify-center content-center my-3">
        <AudioPlayer src={`/audios/podcast/${audio}.mp3`} />
      </div>
      <div className="sipnosis text-white">{description}</div>
      <div class="image flex flex-col justify-center content-center items-center my-3">
        <img
          src={`/images/podcast/${image}.jpg`}
          alt={image}
          className="object-contain rounded-sm"
        />
        <p className="text-center italic text-white">Foto tomada por: {name}</p>{" "}
      </div>
    </Layout>
  );
}
