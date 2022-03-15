import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Makeup",
    description:
      "Get an appealing and fresh look that lasts the whole day with our makeup products at most affordable prices!",
  },
  {
    _id: uuid(),
    categoryName: "Skincare",
    description:
    "Pamper your skin with our products and feel the glow!",
  },
  {
    _id: uuid(),
    categoryName: "MenstrualHygiene",
    description:
      "Buy Menstrual Hygiene care products at most affordable prices now.",
  },
  {
    _id: uuid(),
    categoryName: "Haircare",
    description:
      "Buy hair care products now on Naaricare at great deals!",
  },
  {
    _id: uuid(),
    categoryName: "Bodycare",
    description:
      "We bring bodycare products at best prices.",
  },
];
