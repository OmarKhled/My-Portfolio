import COLORS from "@constants/colors";

const slug = (name: string) => `/projects/${name}`;

export default [
  {
    name: "IEEE NU Website",
    avatarImg: "/images/projects/avatar/ieeenu.webp",
    client: "IEEE NU",
    year: "2022",
    link: slug("ieee-nu"),
    backgroundColor: COLORS.royalBlue.default,
  },
  {
    name: "IEEE NU Store",
    avatarImg: "/images/projects/avatar/store.webp",
    client: "IEEE NU",
    year: "2023",
    link: slug("ieeenustore"),
    backgroundColor: COLORS.butterflyBlue[600],
  },
  {
    name: "Personal Portfolio",
    avatarImg: "/images/projects/avatar/portfolio.webp",
    client: "OmarKhled",
    year: "2022",
    link: slug("personal-portfolio"),
    backgroundColor: COLORS.violetEggplant.default,
  },
  {
    name: "DedMet Extension",
    avatarImg: "/images/projects/avatar/dedmet.webp",
    client: "DedMet",
    year: "2022",
    link: slug("dedmet"),
    backgroundColor: COLORS.goldenYellow.default,
  }
];
