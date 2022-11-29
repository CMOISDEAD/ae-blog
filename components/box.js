import Link from "next/link";
import * as HoverCard from "@radix-ui/react-hover-card";

export const Box = ({ title, links, rows = 3, height = 50 }) => {
  return (
    <>
      <div
        className={`group w-[25vw] h-[${height}vh] border border-black rounded-sm p-5 hover:border-green-500 backdrop-blur-md text-white`}
      >
        <div id="box" className={`grid grid-flow-col grid-rows-${rows} gap-4`}>
          <p className="font-bold row-span-full">
            <span className="text-white bg-black px-3 group-hover:bg-green-500">
              {title}
            </span>
          </p>
          {links.map(({ name, description, link }, i) => (
            <HoverCard.Root closeDelay={10}>
              <HoverCard.Trigger asChild>
                <div
                  key={i}
                  className="hover:text-green-600 hover:cursor-pointer hover:underline"
                >
                  <Link href={link}>
                    <p className="overflow-hidden">{name}</p>
                  </Link>
                </div>
              </HoverCard.Trigger>
              <HoverCard.Portal>
                <HoverCard.Content
                  sideOffset={0}
                  side={"bottom"}
                  align={"start"}
                  className="w-[30vw]"
                >
                  <div className="border border-green-500 p-5 backdrop-blur-md text-white">
                    <h2 className="text-2xl capitalize">{name}</h2>
                    <p className="text-sm truncate">{description}</p>
                  </div>
                  <HoverCard.Arrow />
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
          ))}
        </div>
      </div>
    </>
  );
};
