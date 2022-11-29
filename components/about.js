const autores = [
  {
    image: "",
    name: "Jeison Andres Cano ",
    email: "correo@email.com",
  },
  {
    image: "",
    name: "Gabriela Tapia",
    email: "correo@email.com",
  },
  {
    image: "",
    name: "Jessica Martinez",
    email: "correo@email.com",
  },
  {
    image: "",
    name: "Maria Angeles Vargas",
    email: "correo@email.com",
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
                src={
                  !image
                    ? "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                    : image
                }
                alt=""
                className="rounded-md h-[30vh] w-[20vw] object-cover object-center"
              />
            </div>
            <div className="info text-sm italic">
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
