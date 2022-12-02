import Layout from "../../../components/layout";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function LayoutPodcast({
  title,
  description,
  image,
  footer,
  audio,
  name,
}) {
  return (
    <Layout>
      <h1 className="text-3xl text-center capitalize text-white">{title}</h1>
      <p className="text-white text-sm italic text-center">{name}</p>
      <div className="flex items-center justify-center content-center my-3">
        <AudioPlayer src={`/audios/podcast/${audio}.mp3`} />
      </div>
      <div className="sipnosis text-white">{description}</div>
      <div className="image flex flex-col justify-center content-center items-center my-3">
        <img
          src={`/images/podcast/${image}.jpg`}
          alt={image}
          className="object-contain rounded-sm"
        />
        <p className="text-center italic text-white">{footer}</p>
        <p className="text-center italic text-white">
          {name ? (
            <span>Foto tomada por: {name}</span>
          ) : (
            <span>Foto sacada de internet</span>
          )}
        </p>
      </div>
    </Layout>
  );
}
