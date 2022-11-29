import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, PaperPlaneIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Card({ title, links }) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="h-full w-full flex text-white text-center justify-center content-center items-center backdrop-blur-sm backdrop-grayscale hover:backdrop-blur-0 hover:backdrop-grayscale-0 transition-all duration-300 ease-out cursor-pointer ounded-md">
            <h3 className="text-3xl font-bold font-serif uppercase text-white">
              {title}
            </h3>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent bg-[url('https://wallpapersmug.com/download/3840x2400/2a5029/big-leaf-plant-flora.jpg')] bg-cover bg-center">
            <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Selecciona el elemento de tu interes.
            </Dialog.Description>
            <div className="overflow-y-scroll max-h-[50vh]">
              <div className="text-white">
                {links.map(({ name, description, link }, i) => (
                  <Link href={link} key={i}>
                    <div
                      className="bg-[#161616] mr-2 p-5 rounded-md my-2 cursor-pointer hover:bg-[#262626]"
                      key={i}
                    >
                      <p className="text-xl font-bold capitalize inline-flex gap-2 content-center items-center">
                        <PaperPlaneIcon />
                        {name}
                      </p>
                      <p className="text-sm truncate">{description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
