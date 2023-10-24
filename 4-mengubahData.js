
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: 
  {
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  }

  let data1 = {...data, name: "Khairullah Haidar", email: "haidar4941@gmail.com", hobby: "Main game",}

  console.log(data1)

  // console.log(data)
  const {street, city} = data.address

  console.log(city, street)