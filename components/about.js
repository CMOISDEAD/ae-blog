const autores = [
  {
    image: "/jeison",
    name: "Jeison Andrés Cano ",
  },
  {
    image: "/gabriela",
    name: "Gabriela Tapia",
  },
  {
    image: "/jessica",
    name: "Jessica Martínez",
  },
  {
    image: "/maria",
    name: "Maria Ángeles Vargas",
  },
];

export default function About() {
  return (
    <div className="my-5 text-[#f1c40f]">
      <h3 className="text-3xl text-center font-bold">Sobre Nosotros</h3>
      <div className="text-white flex flex-row justify-center content-center items-center gap-16 my-5">
        {autores.map(({ image, name, email }, i) => (
          <div key={i}>
            <div className="imagen">
              <img
                src={`${image}.jpg`}
                alt=""
                className="h-[30vh] w-[20vw] object-cover object-center"
              />
            </div>
            <div className="info text-sm italic text-center">
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
