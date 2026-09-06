export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export const team: TeamMember[] = [
  {
    name: "Kannan Kanagiah",
    role: "Founder & CEO",
    focus: "Product & engineering",
    bio: "Kannan is the founder and CEO of Veylora. He is a software engineer and entrepreneur with a passion for building products that help people live better lives.",
    image: "/images/team-kannan.png",
    imageAlt: "Portrait of Kannan Kanagiah, Founder & CEO",
  },
  {
    name: "Marcus Chen",
    role: "Head of AI / ML",
    focus: "Intelligence products",
    bio: "Marcus leads the AI practice. He designs models, retrieval, and agents as product features with evaluation—so intelligence stays usable by the people accountable for the result.",
    image: "/images/team-marcus.png",
    imageAlt: "Portrait of Marcus Chen, Head of AI / ML",
  },
  {
    name: "Amira Rahman",
    role: "Head of Blockchain",
    focus: "Web3 systems",
    bio: "Amira leads blockchain and Web3 work. She separates protocol logic from the product layer so wallets, policy, and operations can be run by a real financial team.",
    image: "/images/team-amira.png",
    imageAlt: "Portrait of Amira Rahman, Head of Blockchain",
  },
  {
    name: "Julian Hart",
    role: "Head of Fintech",
    focus: "Payments & lending",
    bio: "Julian leads fintech systems—payments, lending, accounts, and risk. He keeps financial workflows explicit so operations, finance, and support can explain what the software did.",
    image: "/images/team-julian.png",
    imageAlt: "Portrait of Julian Hart, Head of Fintech",
  },
];
