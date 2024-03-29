var data = [
  {
    _id: "oqwiuhfur7hw",
    title: "Custom T-Shirt",
    price: 19.95,
    category: "Apparel",
    image: "other-t-shirt.png",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "9quwnrpf9o8ins4",
    title: "Custom Long-sleeve",
    price: 24.95,
    category: "Apparel",
    image: "long-sleeve.png",
    discount: 3,
    minimum: 1,
  },
  {
    _id: "fasiurjhntga556",
    title: "Custom Face Mask",
    price: 7.95,
    category: "Apparel",
    image: "face-mask.png",
    discount: 1.5,
    minimum: 2,
  },
  {
    _id: "as98udhbt7jdas0pj",
    title: "Etched Glass Beer Mug",
    price: 21.95,
    category: "Mugs",
    image: "glass beer mug.png",
    discount: 1.5,
    minimum: 1,
  },
  {
    _id: "aisurtb034uwehnrf0",
    title: "Vinyl Printed Travel Mug",
    price: 24.95,
    category: "Mugs",
    image: "travel-mug.png",
    discount: 1.5,
    minimum: 1,
  },
  {
    _id: "alsiuebr9qwu4jenrt0",
    title: "Morning Memory Mug",
    price: 13.95,
    category: "Mugs",
    image: "coffee-mug.png",
    discount: 1.5,
    minimum: 2,
  },
  {
    _id: "awi847ueh5rfp9asoeimr",
    title: "Garden Flag",
    price: 12.95,
    category: "Hme & Garden",
    image: "garden-flag.png",
    discount: 1.5,
    minimum: 2,
  },
];

class ItemService {
  getCatalog() {
    return data;
  }
}

export default ItemService;
