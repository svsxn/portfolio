type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
};

type Link = {
  label: string;
  value: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
