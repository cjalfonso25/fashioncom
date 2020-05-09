const products = [
  {
    _id: "1",
    name: "Clothes 1",
    image: "/assets/img/man-wearing-black-hat-and-black-coat-157675.jpg",
    price: 99,
    category: "men",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "2",
    name: "Clothes 2",
    image: "/assets/img/photography-of-guy-wearing-yellow-hoodie-1183266.jpg",
    price: 99,
    category: "men",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "3",
    name: "Clothes 3",
    image:
      "/assets/img/woman-in-peach-color-and-red-floral-sweatshirt-holding-gray-794062.jpg",
    price: 99,
    category: "women",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "4",
    name: "Clothes 4",
    image: "/assets/img/woman-standing-near-building-1906873.jpg",
    price: 99,
    category: "women",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },
  {
    _id: "5",
    name: "Clothes 5",
    image:
      "/assets/img/woman-wearing-pink-overcoat-and-black-inner-top-2043590.jpg",
    price: 99,
    category: "women",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },
  {
    _id: "6",
    name: "Clothes 6",
    image:
      "/assets/img/woman-wearing-white-and-yellow-scoop-neck-mini-dress-884979.jpg",
    price: 99,
    category: "women",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },
  {
    _id: "7",
    name: "Clothes 7",
    image:
      "/assets/img/man-in-white-and-gray-shirt-wearing-sunglasses-against-1192609.jpg",
    price: 99,
    category: "men",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "8",
    name: "Clothes 8",
    image: "/assets/img/woman-posing-for-photo-shoot-1689731.jpg",
    price: 99,
    category: "women",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "9",
    name: "Clothes 9",
    image: "/assets/img/woman-wearing-yellow-adidas-shirt-1759622.jpg",
    price: 99,
    category: "women",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "10",
    name: "Clothes 10",
    image:
      "/assets/img/man-in-white-and-gray-shirt-wearing-sunglasses-against-1192609.jpg",
    price: 99,
    category: "men",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "11",
    name: "Clothes 11",
    image:
      "/assets/img/man-in-white-and-gray-shirt-wearing-sunglasses-against-1192609.jpg",
    price: 99,
    category: "men",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "12",
    name: "Clothes 12",
    image:
      "/assets/img/man-in-white-and-gray-shirt-wearing-sunglasses-against-1192609.jpg",
    price: 99,
    category: "men",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "13",
    name: "Black Jacket",
    image: "/assets/img/woman-posing-for-photo-shoot-1689731.jpg",
    price: 113.75,
    category: "women",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },

  {
    _id: "14",
    name: "Hoody for Men",
    image: "/assets/img/photography-of-guy-wearing-yellow-hoodie-1183266.jpg",
    price: 45.99,
    category: "men",
    reviews: [
      {
        user: "John Doe",
        review: "This item is really amazing!",
        rate: 5,
      },
    ],
  },
];

function getProducts() {
  return products;
}

function getProduct(id) {
  return products.find((product) => product._id === id);
}

module.exports = {
  getProducts,
  getProduct,
};
