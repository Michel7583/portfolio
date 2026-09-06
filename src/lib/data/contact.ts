export const projectTypes = [
  "AI / ML",
  "Blockchain / Web3",
  "Fintech",
  "SaaS",
  "Other",
] as const;

export const budgetRanges = [
  "Under $10K",
  "$10K–$25K",
  "$25K–$50K",
  "$50K–$100K",
  "$100K+",
] as const;

export const timelines = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Not sure yet",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type BudgetRange = (typeof budgetRanges)[number];
export type Timeline = (typeof timelines)[number];

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  projectType: ProjectType | "";
  budget: BudgetRange | "";
  timeline: Timeline | "";
  description: string;
};
