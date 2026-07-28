export interface BlogPost {
  id: string;
  title: string;
  date: string;
  course: string;
  slug: string;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Timeline on Kid Pix",
    date:"2026",
    course: "CIS*2010",
    slug: "post-1",
  },
  {
    id: "2",
    title: "Map on Kid Pix",
    course: "CIS*2010",
    date:"2026",
    slug: "post-2",
  },
  {
    id: "3",
    title: "Digital Story, Navigating Familiar Environments with Unfamiliar Tools",
    date:"2026",
    course: "CIS*2010",
    slug: "post-3",
  },
  {
    id: "4",
    title: "Final Story, Refamiliarizing the Unknown",
    date:"2026",
    course: "CIS*2010",
    slug: "post-4",
  },
];