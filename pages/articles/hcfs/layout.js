import Layout from "../../../components/layout";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function LayoutHcfs({ title, description, image, audio }) {
  return (
    <Layout>
      <h1 className="text-3xl text-center capitalize text-white">{title}</h1>
      <div className="flex items-center justify-center content-center my-3">
        <AudioPlayer src={`/audios/hcfs/${audio}.mp3`} />
      </div>
      <div className="sipnosis text-white">{description}</div>
      <div class="image flex justify-center content-center items-center my-3">
        <img
          src={`/images/hcfs/${image}.jpg`}
          alt={image}
          className="object-contain rounded-sm"
        />
      </div>
    </Layout>
  );
}
