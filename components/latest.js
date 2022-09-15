import Image from "next/image";

const posts = [
  {
    title: "What are JWT?",
    description:
      "As the software industry grows and makes mistakes, the best practices and good software design principles emerge and conceptualize to avoid…",
    footer: "Yesterday - 10 minutes to read",
  },
  {
    title: "Applying SOLID principles in React",
    description:
      "Nowadays, you can easily build a new business using a SaaS application and seize opportunities in new emerging markets. Various SaaS…",
    footer: "Two days ago - 5 minutes to read",
  },
  {
    title: "Low-Code Solutions for Building Basic SaaS Features",
    description:
      "Nowadays, you can easily build a new business using a SaaS application and seize opportunities in new emerging markets. Various SaaS…",
    footer: "One week ago - 16 minutes to read",
  },
];

function Card({ title, description, footer }) {
  return (
    <div className="relative my-5 border rounded border-zinc-200 hover:border-zinc-400 flex flex-row justify-start align-center content-center w-5/6">
      <Image
        className="rounded-l"
        src="/wave.png"
        alt="What are JWT?"
        width={500}
        height={200}
      />
      <div class="content p-5">
        <div className="text-1xl font-bold">{title}</div>
        <div className="text-zinc-900 mb-3">
          {description}
          Sit a commodi sit laborum molestiae Soluta minus libero recusandae
          facilis non Et doloribus quae veniam dolorem qui? Voluptatum amet
          maxime saepe rerum minus temporibus eius? Illum nam odit maiores
        </div>
        <p class="text-sm text-zinc-600">{footer}</p>
      </div>
    </div>
  );
}

export default function Latest() {
  return (
    <div>
      <h4 className="font-bold text-3xl">Latest post.</h4>
      {/* card1 */}
      <div class="flex flex-row justify-between align-center content-center items-center gap-4">
        <Card {...posts[0]} />
        <div class="w-1/6 text-center font-bold uppercase">Fire</div>
      </div>
      {/* card2 */}
      <div class="flex flex-row justify-between align-center content-center items-center gap-4">
        <div class="w-1/6 text-center font-bold uppercase">Dead</div>
        <Card {...posts[1]} />
      </div>
      {/* card3 */}
      <div class="flex flex-row justify-between align-center content-center items-center gap-4">
        <Card {...posts[2]} />
        <div class="w-1/6 text-center font-bold uppercase">Doom</div>
      </div>
    </div>
  );
}
