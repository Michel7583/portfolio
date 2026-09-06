export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Clarify the product, the users, and the constraints.",
    details: [
      "Map existing systems, data, and operational risk",
      "Agree what a successful first release looks like",
      "Decide what is in scope—and what is not",
    ],
  },
  {
    number: "02",
    title: "Design",
    description: "Set architecture, UX, and the build specification.",
    details: [
      "Define the domain model and system boundaries",
      "Prototype the critical user and operations flows",
      "Write the specification the build will follow",
    ],
  },
  {
    number: "03",
    title: "Build",
    description: "Implement the product in reviewable increments.",
    details: [
      "Ship small slices with tests in the path",
      "Keep environments and observability current",
      "Surface risk early—not in a late demo",
    ],
  },
  {
    number: "04",
    title: "Validate",
    description: "Prove it works under real operating conditions.",
    details: [
      "Exercise the real workflows, not just happy paths",
      "Test security, performance, and failure modes",
      "Confirm operators can run the product",
    ],
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy to production with controls in place.",
    details: [
      "Ship behind monitoring the team can operate",
      "Stand up alerts, runbooks, and access paths",
      "Support the first days of real traffic",
    ],
  },
  {
    number: "06",
    title: "Scale",
    description: "Improve from production evidence after launch.",
    details: [
      "Optimize from usage and operational data",
      "Add capability without rewriting the core",
      "Stay as an engineering partner",
    ],
  },
] as const;
