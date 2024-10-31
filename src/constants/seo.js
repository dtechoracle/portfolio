// const image =
//   "https://res.cloudinary.com/dkoe20rzl/image/upload/v1692130992/cover_xhnhes.png";
const creator = "Dtechoracle";
const author = creator;

export const url = (slug) => {
  return `https://dtechoracle-again.vercel.com/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    creator,
    url: url(),
    title: "Dtechoracle - Creative Frontend Engineer",
    description:
      "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
  },
};
