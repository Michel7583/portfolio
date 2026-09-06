import { CoverImage } from "@/components/visual/CoverImage";

const mocks = [
  {
    title: "Financial dashboard",
    caption: "Balances, cash movement, and risk in one view.",
    image: "/images/preview-dashboard.png",
    imageAlt: "Dark financial dashboard on a quiet operations monitor",
  },
  {
    title: "Transaction interface",
    caption: "A single lifecycle for every transfer.",
    image: "/images/preview-transactions.png",
    imageAlt: "Transaction timeline interface glowing on a dark desktop",
  },
  {
    title: "Credit score",
    caption: "A score with reasons an analyst can defend.",
    image: "/images/preview-credit.png",
    imageAlt: "Analyst workstation with a glowing circular score graphic",
  },
  {
    title: "Lending workflow",
    caption: "Application, review, and decision in sequence.",
    image: "/images/preview-lending.png",
    imageAlt: "Lending workflow stages on a dark product screen",
  },
  {
    title: "Payment flow",
    caption: "Initiated, clearing, settled—or clearly failed.",
    image: "/images/preview-payments.png",
    imageAlt: "Payments console with a glowing settlement flow",
  },
] as const;

export function FintechMocks() {
  return (
    <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {mocks.map((mock) => (
        <li key={mock.title}>
          <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <CoverImage
              src={mock.image}
              alt={mock.imageAlt}
              className="aspect-[16/10]"
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            />
            <figcaption className="flex flex-1 flex-col p-5">
              <p className="text-base font-semibold tracking-[-0.02em]">
                {mock.title}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-muted">
                {mock.caption}
              </p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
