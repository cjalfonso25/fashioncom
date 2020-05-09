const users = [
  {
    _id: 1,
    name: "John Doe",
    email: "johndoe@domain.com",
    mobile: "09123456789",
    gender: "Male",
    birthday: "Not set",
    addresses: [
      {
        _id: 1,
        address: "42 st. New Ave, New Jersey, USA",
      },
    ],
    orders: [
      {
        _id: 1,
        name: "Clothes 2",
        image:
          "/assets/img/photography-of-guy-wearing-yellow-hoodie-1183266.jpg",
        price: 99,
        category: "men",
        quantity: 2,
        orderDate: "January 1, 2020",
        orderStatus: "Delivered",
        reviews: [
          {
            user: "John Doe",
            review: "This item is really amazing!",
            rate: 5,
          },
        ],
      },

      {
        _id: 2,
        name: "Clothes 2",
        image:
          "/assets/img/photography-of-guy-wearing-yellow-hoodie-1183266.jpg",
        price: 99,
        category: "men",
        quantity: 2,
        orderDate: "March 18, 2020",
        orderStatus: "In Progress",
        reviews: [
          {
            user: "John Doe",
            review: "This item is really amazing!",
            rate: 5,
          },
        ],
      },
    ],
    wishlists: [
      {
        _id: 14,
        name: "Hoody for Men",
        image:
          "/assets/img/photography-of-guy-wearing-yellow-hoodie-1183266.jpg",
        price: 45.99,
        color: "Yellow",
        category: "men",
        reviews: [
          {
            user: "John Doe",
            review: "This item is really amazing!",
            rate: 5,
          },
        ],
      },
    ],
  },
];

const getUser = (id) => {
  const user = users.filter((user) => user._id === id);
  return user[0];
};

const getUsers = () => {
  return users;
};

module.exports = {
  getUser,
  getUsers,
};
