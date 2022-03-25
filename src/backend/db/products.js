import { v4 as uuid } from "uuid";
import maybellineLipstick from '../../assets/ProductImages/MaybellineLipstick.jpg'
import LakmeLipstick from '../../assets/ProductImages/LakmeLipstick.jpg'
import LakmeMascara from '../../assets/ProductImages/Lakmemascara.jpg'
import EyeshadowPalette from '../../assets/ProductImages/LakmeEyeshadowPalette.jpg'
import MaybellineFoundation from '../../assets/ProductImages/MaybellineFoundation.jpg'
import LakmeFoundation from '../../assets/ProductImages/LakmeFoundation.jpg'
import sugarMatteLipstick from '../../assets/ProductImages/sugarMatteLipstick.jpg'
import sugarbananapowder from '../../assets/ProductImages/sugarbananapowder.jpg'
import PondsMoisturizer from '../../assets/ProductImages/pondsMoisturizer.jpg'
import NeutrogenaSunscreen from '../../assets/ProductImages/NeutrogenaSunscreen.jpg'
import LakmeFaceCream from '../../assets/ProductImages/LakmeFaceCream.jpg'
import Whisperpads from '../../assets/ProductImages/Whisperpads.jpg'
import Stayfreepads from '../../assets/ProductImages/Stayfreepads.jpg'
import Tampons from '../../assets/ProductImages/Tampons.jpg'
import Mamaearth from '../../assets/ProductImages/mamaearthshampoo.jpg'
import LorealShampoo from '../../assets/ProductImages/LorealShampoo.jpg'
import wowhairoil from '../../assets/ProductImages/wowhiaroil.jpg'
import mamaearthbodylotion from '../../assets/ProductImages/mamaearthbodylotion.jpg'
import himalayafacewash from '../../assets/ProductImages/HimalayfaceWash.jpg'
import niveaBodyWash from '../../assets/ProductImages/niveaBodyWash.jpg'
import LakmeNailPolish from '../../assets/ProductImages/LakmeNailPolish.jpg'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
export const products = [
  {
    _id: uuid(),
    name: "Maybelline New York Color Sensational Creamy Matte Lipstick",
    desc: "The Maybelline Color Sensational Creamy Mattes Lipstick has a unique,velvety matte cream formula",
    info: "The Color Sensational Creamy Mattes Lipstick has a unique, matte cream formula that offers a non-drying & uncrackable finish that stays comfortably on your lips through the day.These hydrating lip colors that are infused with honey nectar, glide smoothly while keeping your lips moisturized all day long.These lipsticks are smooth, creamy, comfortable and are highly pigmented.The Color Sensational Creamy Matte Lipsticks are available in 35 pigmented shades; ranging from reds to nudes, and many more shades in the middle.",
    img: maybellineLipstick,
    price: 239,
    categoryName: "Makeup",
    subCategoryName: "Lipstick",
    brand: "Maybelline",
    inStock: "true",
    fastDelivery: "true",
    rating: 4,
    discount: 20,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "Maybelline New York Hypercurl Mascara Waterproof, Black, 9.2g",
    desc: 'Volume: Wax coating & special bristles that can reach the lash line up to the tip Gives 75% curled effect with a thick pad and lasts 3 times longer with the 18-hour formula',
    info: "Maybelline New York Hypercurl Mascara Waterproof gives a long lastig look. Contains Wax coating & special bristles that can reach the lash line up to the tip Gives 75% curled effect with a thick",
    img: LakmeMascara,
    price: 319,
    categoryName: "Makeup",
    subCategoryName: "Mascara",
    brand: "Maybelline",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    offer: "false",
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "LAKMÉ 9 to 5 Primer + Matte Lip Color.Super Matte",
    desc: '8 - 12 hours long stay.Comfortable matte finish; In built primer.Smooth and comfortable application.',
    info: " Matte Finish, MR20 Ruby Rush, 3.6 g,Gives intense matte finish.LogLasting.Matte Finish, MR20 Ruby Rush, 3.6 g,Gives intense matte finish.LogLasting.",
    img: LakmeLipstick,
    price: 250,
    categoryName: "Makeup",
    subCategoryName: "Lipstick",
    brand: "Lakme",
    inStock: "true",
    fastDelivery: "true",
    rating: 4,
    discount: 30,
    offer: "false",
    quantity: 0,
    avalQty: 6,
  },
  {
    _id: uuid(),
    name: "Lakmé Absolute Spotlight Eye Shadow Palette, Berry Martini, 12 g",
    desc: 'Highly pigmented with intense colour payoff.Ultra-rich velvety textures for a superior finish. Good pigmentation and coverage',
    info:"Highly pigmented with intense colour payoff.Ultra-rich velvety textures for a superior finish",
    img: EyeshadowPalette,
    price: 319,
    categoryName: "Makeup",
    subCategoryName: "Eyeshadow",
    brand: "Lakme",
    inStock: "true",
    fastDelivery: "true",
    rating: 2,
    discount: 50,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "Lakmé Color Crush Nailart, U4, 6ml",
    desc: ' Lakme Absolute Skin Natural Mousse gives amazing matte finish and look.Shades highlight each texture.Extremely Matte .Long lasting',
    info: "Shades highlight each texture.Gives Matte look and is long lasting.",
    img: LakmeNailPolish,
    price: 124,
    categoryName: "Makeup",
    subCategoryName: "NailPolish",
    brand: "Lakme",
    inStock: "true",
    fastDelivery: "true",
    rating: 5,
    discount: 20,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "Lakme Absolute Skin Natural Mousse",
    desc: 'Spf 8.Feather-light texture.Stays up to 16 hours.Keeps your skin healthy and protected. Long Lasting Weightless Full Coverage. 25g.Feather-light texture',
    info: "Ivory Fair 01, SPF 8 Natural Finish Matte Cream Foundation -Long Lasting Weightless Full Coverage Face Makeup, 25g.Feather-light texture.Stays up to 16 hour.Keeps your skin healthy and protected",
    img: LakmeFoundation,
    price: 742,
    categoryName: "Makeup",
    subCategoryName: "Foundation",
    brand: "Lakme",
    inStock: "true",
    fastDelivery: "true",
    rating: 5,
    discount: 20,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "Maybelline New York Fit Me Foundation 39 g (Pack of 2)",
    desc: 'Fit me fits skin tone and texture to give flawless natural finish.Combo pack.',
    info:"foundation and concealer, to ace your face make up",
    img: MaybellineFoundation,
    price: 787,
    categoryName: "Makeup",
    subCategoryName: "Foundation",
    brand: "Maybelline",
    inStock: "true",
    fastDelivery: "true",
    rating: 5,
    discount: 10,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "SUGAR Cosmetics - Matte Attack - Transferproof Lipstick",
    desc: 'Start off with Creamy formula, sets to complete Matte,Lasts Up to 8 hours. Creamy formula.',
    info: "The Grandberries (Dark Berry) - 2 gms - Transferproof Lipstick Matte Finish, Lasts upto 8 Hours.Start off with Creamy formula, sets to complete Matte.High Pigmentation.Enriched with Jojoba Oil and Vitamine.Non Drying and Zero Feathering Formula",
    img: sugarMatteLipstick,
    price: 629,
    categoryName: "Makeup",
    subCategoryName: "Lipstick",
    brand: "Sugar",
    inStock: "true",
    fastDelivery: "true",
    rating: 5,
    discount: 40,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "SUGAR Cosmetics - All Set To Go - Banana Powder",
    desc: 'A setting powder that suits all skin tones. Gives fresh look. Suitable for all skin types and long lasting',
    info: "Setting Powder for Mattified Skin.Suits all skin types.Long lasting.",
    img: sugarbananapowder,
    price: 569,
    categoryName: "Makeup",
    subCategoryName: "Compact",
    brand: "Sugar",
    inStock: "true",
    fastDelivery: "true",
    rating: 5,
    discount: 20,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "POND'S Super Light Gel Oil Free Face Moisturizer 73g",
    desc: 'Super lightweight and non-oily gel formula. Paraben Free : Yes  Glowing Skin & 24 hr Hydration - Daily Use.',
    info: ", With Hyaluronic Acid & Vitamin E for Fresh Glowing Skin & 24 hr Hydration - Daily Use.",
    img: PondsMoisturizer,
    price: 150,
    categoryName: "Skincare",
    subCategoryName: "Moisturizer",
    brand: "POND'S",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    discount: 30,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "Brightening Vitamin C Face Wash",
    desc: 'Vitamin C promotes even complexion and has anti-aging benefits. Honey soothes, hydrates, and reduces dullness. Daily use of the face wash restores the skin’s suppleness.',
    info: "Helps clearing pores. Gives Soothing effect on face.Vitamin C promotes even complexion and has anti-aging benefits. Honey soothes, hydrates, and reduces dullness. Daily use of the face wash restores the skin’s suppleness.",
    img: mamaearthbodylotion,
    price: 249,
    categoryName: "Skincare",
    subCategoryName: "FaceWash",
    brand: "Wow",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    discount: 10,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "Himalaya Herbals Moisturizing Aloe Vera Face Wash,100ml",
    desc: 'Moisturizing Aloe Vera Face Wash combines natural ingredients to cleanse your skin, leaving it feeling fresh and glowing',
    info: "It is enriched with Cucumber which cools and soothes while Aloe Vera tones and softens your skin. Ingredient Type : Synthetic",
    img: himalayafacewash,
    price: 249,
    categoryName: "Skincare",
    subCategoryName: "FaceWash",
    brand: "Himalaya",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    discount: 10,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  }
  ,
  {
    _id: uuid(),
    name: "Neutrogena Ultra sheer Sunscreen, SPF 50+",
    desc: 'Neutrogena Ultra Sheer Dry Touch Sunblock, SPF 50+ sunscreen for men and women',
    info: "Ultra light, for oily and dry skin, 30ml.LongLasting and waterproof.",
    img: NeutrogenaSunscreen,
    price: "217",
    categoryName: "Skincare",
    subCategoryName: "Sunscreen",
    brand: "Neutrogena",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    discount: 10,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "Lakme Absolute Perfect Radiance Brightening day cream",
    desc: 'Gives a fairer and illuminated look; Brightens the skin tone.Covers blackheads and pores. Illuminates face instantly.',
    info: "Contains with Niacinamide & Micro crystals 50g.Longlasting",
    img: LakmeFaceCream,
    price: 250,
    categoryName: "Skincare",
    subCategoryName: "FaceCream",
    brand: "Lakme",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    discount: 60,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  }
  , {
    _id: uuid(),
    name: "Whisper Ultra Soft Sanitary Pads For Women",
    desc: 'Airy freshness for irritation free feel.500 airfresh pores.  X-Large Pack of 50 Napkins.Gives comfort.',
    info: " X-Large Pack of 50 Napkins.Gives comfort.",
    img: Whisperpads,
    price: 300,
    categoryName: "MenstrualHygiene",
    subCategoryName: "SanitaryPads",
    brand: "Whisper",
    inStock: "true",
    fastDelivery: "true",
    rating: 4,
    discount: 60,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "Stayfree Dry Max All Night XL Dry Cover Sanitary Pads",
    desc: 'Ultra-Thin pads which prevent leakages from all sides no matter how much you move in your sleep. Usage type: Disposable. Wings: Yes',
    info: "For Women Combo offer, 3 x 42s (126 napkins)",
    img: Stayfreepads,
    price: 1500,
    category: "MenstrualHygiene",
    brand: "Stayfree",
    inStock: "true",
    fastDelivery: "true",
    rating: 4,
    discount: 50,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    id: 300 + Date.now(),
    name: "Everteen SuperPlus Tampons with Applicator for Women",
    desc: 'Invisible leak-proof protection with never-before freedom to swim, dance & go to gym during periods',
    info: "(12-15gm absorbency, 1 pack of 8pcs),Complete leak-proof.",
    img: Tampons,
    price: 273,
    categoryName: "MenstrualHygiene",
    subCategoryName: "Tampoons",
    brand: "Everteen",
    inStock: "true",
    fastDelivery: "true",
    rating: 4,
    discount: 30,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "Mamaearth Almond Shampoo.",
    desc: 'PROMOTES HEALTHY HAIR GROWTH: Get stronger and longer hair with Mamaearth Almond Shampoo, enriched with the natural goodness of cold pressed Almond Oil,',
    info: "Promotes hair groth.Stops hairfall and dandruff. Vitamin E and wheat amino acids.",
    img: Mamaearth,
    price: 2730,
    categoryname: "Haircare",
    subCategoryName: "HairOil",
    brand: "Mamaearth",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    discount: 10,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "L'Oreal Paris Extraordinary Clay Shampoo, 640ml (With 10% Extra)",
    desc: 'Infused The Extraordinary Power Of Pure Clay',
    info: "Loreal Total Repair 5, infused with ceramide cement.",
    img: LorealShampoo,
    price: 550,
    categoryName: "Haircare",
    subCategoryName: "Shampoo",
    brand: "L'Oreal",
    inStock: "true",
    fastDelivery: "true",
    rating: 4,
    discount: 20,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  {
    _id: uuid(),
    name: "WOW Skin Science Onion Hair Oil",
    desc: 'Onion hair oil by WOW Skin Science is powered with Onion Black Seed Oil extract blended with Almond, Castor, Jojoba, Olive & Coconut Oils',
    info: "Promotes Hair Growth and Hair Fall Control",
    img: wowhairoil,
    price: 600,
    categoryName: "Haircare",
    subCategoryName: "HairOil",
    brand: "Wow",
    inStock: "true",
    fastDelivery: "true",
    rating: 2,
    discount: 20,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  },
  , {
    id: 20000 + Date.now(),
    name: "WOW Skin Science Shea Butter and Cocoa Butter Moisturizing Body Lotion",
    desc: 'Increase skin softness: this lotion is a superlative.',
    info: "moisturizer that gives intensive moisture and hydration thats suitable for all skin types, including thirsty and parched skin",
    img: mamaearthbodylotion,
    price: 300,
    categoryName: "Bodycare",
    subCategoryName: "BodyLotions",
    brand: "Wow",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    offer: "false",
    discount: 40,
    quantity: 0,
    avalQty: 10,
  }, {
    _id: uuid(),
    name: "Mamaearth Vitamin C Body Lotion",
    desc: 'Vitamin C promotes even complexion and has anti-aging benefits. Honey soothes, hydrates, and reduces dullness.',
    info:" Daily use of the body lotion restores the skin’s suppleness.",
    img: mamaearthbodylotion,
    price: 300,
    categoryName: "Bodycare",
    subCategoryName: "BodyLotion",
    brand: "Mamaearth",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    discount: 30,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  }, {
    _id: uuid(),
    name: "NIVEA Body Wash, Fresh Powerfruit Shower Gel",
    desc: 'Contains Antioxidants & Blueberry Scent, 250 ml  Nourishes body and gives a fresh feel. Extremely soothing.',
    info: "Nourishes body and gives a fresh feel. Extremely soothing.",
    img: niveaBodyWash,
    price: 150,
    category: "Bodycare",
    subCategoryName:"BodyWash",
    brand: "Nivea",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    discount: 40,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  }, {
    _id: uuid(),
    name: "Mamaearth Ubtan Body Wash With Turmeric & Saffron, Shower Gel",
    desc: 'Walnut provides natural exfoliation by removing dead skin cells and impurities from the skin, leaving it soft and supple.',
    info: "FOR GLOWING SKIN: Become a glow-getter! Crafted with the goodness of natural ingredients like Turmeric and Saffron, the body wash lends a natural radiance to the skin.",
    img: niveaBodyWash,
    price: 253,
    category: "Bodycare",
    subCategoryName:"BodyWash",
    brand: "Mamaearth",
    inStock: "true",
    fastDelivery: "true",
    rating: 3,
    discount: 40,
    offer: "false",
    quantity: 0,
    avalQty: 10,
  }
];
