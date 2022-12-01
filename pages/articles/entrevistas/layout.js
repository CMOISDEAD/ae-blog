import Layout from "../../../components/layout";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function LayoutEntrevista({
  title,
  description,
  image,
  collage,
  audio,
  name,
}) {
  return (
    <Layout>
      <h1 className="text-3xl text-center capitalize text-white">{title}</h1>
      <div className="flex items-center justify-center content-center my-3">
        <AudioPlayer src={`/audios/entrevistas/${audio}.mp3`} />
      </div>
      <div className="sipnosis text-white">{description}</div>
      {collage ? (
        <div className="overflow-hidden text-gray-700">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              {collage.map((img, i) => (
                <div key={i} className="flex flex-wrap w-1/3">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={`/images/entrevistas/${img}.jpg`}
                    />
                  </div>
                </div>
              ))}
              <p className="text-center italic text-white">
                Foto tomada por: {name}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="image flex flex-col justify-center content-center items-center my-3">
          <img
            src={`/images/entrevistas/${image}.jpg`}
            alt={image}
            className="object-contain rounded-sm"
          />
          <p className="text-center italic text-white">
            Foto tomada por: {name}
          </p>
        </div>
      )}
    </Layout>
  );
}
