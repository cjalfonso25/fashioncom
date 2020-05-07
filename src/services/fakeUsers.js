const users = [
  {
    _id: 1,
    name: "John Doe",
    email: "johndoe@domain.com",
    mobile: "09123456789",
    gender: "Male",
    Birhday: "Not set",
    orders: [
      {
        _id: "2",
        name: "Clothes 2",
        image:
          "/assets/img/photography-of-guy-wearing-yellow-hoodie-1183266.jpg",
        price: 99,
        category: "men",
        quantity: 2,
        reviews: [
          {
            user: "John Doe",
            review: "This item is really amazing!",
            rate: 5,
          },
        ],
      },
    ],
    wishlist: [],
  },
];

const getUser = (id) => {
  return users.filter((user) => _id === id);
};

const getUsers = () => {
  return users;
};

module.exports = {
  getUser,
  getUsers,
};
