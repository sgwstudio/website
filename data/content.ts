export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Sr. Brand Director at GOAT Group",
        subTitle: "Los Angeles",
        date: "2022 - Present",
        description: "Senior Director at GOAT Group, overseeing Alias, Sneakers.com, and the corporate brand. GOAT Group operates five brands and serves 60M+ members across 170+ countries.",
        link: "https://www.goatgroup.com/",
                       images: [
                 "/images/AGS-1.png",
                 "/images/AGS-2.png",
                 "/images/AGS-3.png",
                 "/images/AGS-4.png",
                 "/images/AGS-5.png",
                 "/images/AGS-6.png"
               ]
      },
                                {
               title: "Assoc. Design Director at GOAT",
               subTitle: "Los Angeles",
               date: "2018 - 2022",
               description: "Led global design across GOAT's app, web, and social platforms. Managed an international team across design, art direction, and motion — delivering brand systems, campaigns, and product experiences.",
               link: "https://goat.com/",
                       images: [
                 "/images/goat-1.png",
                 "/images/goat-2.png",
                 "/images/goat-3.png",
                 "/images/goat-4.png",
                 "/images/goat-5.png",
                 "/images/goat-6.png",
                 "/images/goat-7.png",
                 "/images/goat-8.png",
                 "/images/goat-9.png",
                 "/images/goat-10.png",
                 "/images/goat-11.png"
               ]
      },
                   {
               title: "Design & Art Direction at SGW Studio",
               subTitle: "Paris & Brussels",
        date: "2010 - 2018",
        description: "Design & Art Direction for creative sectors with expertise in Branding, Product and Print Design.",
        link: "https://sgwstudio.com",
                       images: [
                 "/images/SGWS-1.png",
                 "/images/SGWS-2.png",
                 "/images/SGWS-3.png",
                 "/images/SGWS-4.png",
                 "/images/SGWS-5.png",
                 "/images/SGWS-6.png",
                 "/images/SGWS-7.png",
                 "/images/SGWS-8.png"
               ]
      },
      
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Bachelor of Arts (BA), Philosophy",
        subTitle: "Université Paris-Sorbonne",
        date: "",
        description: "Philosophy degree from one of France's most prestigious universities."
      },
      {
        title: "Bachelor of Science (BS), Mathematics and Economics",
        subTitle: "Université Paris-Sorbonne",
        date: "",
        description: "Mathematics and Economics degree providing strong analytical foundation."
      },
    ],
  },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
    link?: string;
    images?: string[];
  }[];
};

export type ContentData = Content[];
