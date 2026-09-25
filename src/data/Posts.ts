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
    date:"01.25.2026",
    course: "CTS*2010",
    slug: "post-1",
  },
  {
    id: "2",
    title: "Map on Kid Pix",
    course: "CTS*2010",
    date:"02.23.2026",
    slug: "post-2",
  },
  {
    id: "3",
    title: "Digital Story, Navigating Familiar Environments with Unfamiliar Tools",
    date:"03.20.2026",
    course: "CTS*2010",
    slug: "post-3",
  },
  {
    id: "4",
    title: "Final Story, Refamiliarizing the Unknown",
    date:"04.13.2026",
    course: "CTS*2010",
    slug: "post-4",
  },
];