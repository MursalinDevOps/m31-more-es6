const user = {
  id: 101,
  name: "Mursalin",
  address: {
    permanentAddress: {
      village: "Kagmari para",
      post: "Shialkole",
      upzilla: "Bhuapur",
      zilla: "Tangail",
      more:{
        city:'Dhaka',
        country:'Bangladesh'
      }
    }
  }
};
// console.log(user.address.permanentAddress.more.country);

const user2 = {
    id: 102,
    name: "Tyler",
    address: {
      permanentAddress: {
          city:'NYC',
          country:'USA'
      }
    }
  }
  console.log(user2.address.permanentAddress.more?.country); // Optional Chaining (?) it stops code execution if any value is undefined and returns "undefined".
