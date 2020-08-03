
export default {
  user: {
    id: '',
    name: '',
    email: '',
    ridesTot: 0,
    registered: ''
  }
  // isRequested: 'false',
  // rides: [
  //   {
  //     "id": 1,
  //     "firstname": "Jimbo",
  //     "lastname": "O'Hoolihan",
  //     "phone": "575-964-3939",
  //     "pickupLocation": "200 N Main St. Lovington NM 88260",
  //     "dropoffLocation": "3524 Happy Way, Lovington, NM 88260",
  //     "comments": "I'm standing out front in the blue jacket"
  //   },
  //   {
  //     "id": 2,
  //     "firstname": "Kelly",
  //     "lastname": "Ford",
  //     "phone": "575-692-0897",
  //     "pickupLocation": "Jalisco's Restaurant in Hobbs",
  //     "dropoffLocation": "2000 Baja Rd., Hobbs NM 88240",
  //     "comments": "Call me and I will come outside please. It's cold!!!"
  //   }
  // ],
  // stories: [
  //   {
  //     id: 1,
  //     name: 'Tipsy Taxi at Lea County Fair & Rodeo',
  //     image: 'https://d38trduahtodj3.cloudfront.net/images.ashx?t=ig&rid=LeaCounty&i=carnival_1p7818.jpg',
  //     article: "We will have all of outr tires on the road for Lea County Fair and Rodeo. The event lasts from August 17 - August 24 and we will be your designated driver for ALL of them. Come enjoy the arts & crafts showcase, carnival, concerts, Xtreme Bulls Event, PRCA Rodeo, Livestock Shows, Commercial Vendors, and enjoy some of the best fair food in the area! If you choose to drive please drink responsibly. Otherwise, give us a call and we will get you home safe! We will have all of outr tires on the road for Lea County Fair and Rodeo. The event lasts from August 17 - August 24 and we will be your designated driver for ALL of them. Come enjoy the arts & crafts showcase, carnival, concerts, Xtreme Bulls Event, PRCA Rodeo, Livestock Shows, Commercial Vendors, and enjoy some of the best fair food in the area! If you choose to drive please drink responsibly. Otherwise, give us a call and we will get you home safe!"
  //   },
  //   {
  //     id: 2,
  //     name: 'Title of the second article',
  //     image: 'https://images.unsplash.com/photo-1588099246635-d6868ab08b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  //     article: 'lo;gogo nskjhfbl  eilubvilug sb;uu ;uh;oub;ubbhb lyvvykuc ktyfkutf kuyfkuyfkuyf uyfkyuf kyufkuyfvkytdrdyrsr su yflyflygfligkuyfutdktf jl fyulfkud kutdkutdluylvjhlf lyuf luyflutfuf luyfluyfluyf lufluyf luyf y flyuf lyufluyf lyuflyuhjvmhgdktfljhligliuhgliubliugliugliyfliyug. lo;gogo nskjhfbl  eilubvilug sb;uu ;uh;oub;ubbhb lyvvykuc ktyfkutf kuyfkuyfkuyf uyfkyuf kyufkuyfvkytdrdyrsr su yflyflygfligkuyfutdktf jl fyulfkud kutdkutdluylvjhlf lyuf luyflutfuf luyfluyfluyf lufluyf luyf y flyuf lyufluyf lyuflyuhjvmhgdktfljhligliuhgliubliugliugliyfliyug.'
  //   },
  //   {
  //     id: 3,
  //     name: 'Title of the third article',
  //     image: 'https://images.unsplash.com/photo-1595617810683-5bcbe1526bbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
  //     article: 'lo;gogo nskjhfbl  eilubvilug sb;uu ;uh;oub;ubbhb lyvvykuc ktyfkutf kuyfkuyfkuyf uyfkyuf kyufkuyfvkytdrdyrsr su yflyflygfligkuyfutdktf jl fyulfkud kutdkutdluylvjhlf lyuf luyflutfuf luyfluyfluyf lufluyf luyf y flyuf lyufluyf lyuflyuhjvmhgdktfljhligliuhgliubliugliugliyfliyug. lo;gogo nskjhfbl  eilubvilug sb;uu ;uh;oub;ubbhb lyvvykuc ktyfkutf kuyfkuyfkuyf uyfkyuf kyufkuyfvkytdrdyrsr su yflyflygfligkuyfutdktf jl fyulfkud kutdkutdluylvjhlf lyuf luyflutfuf luyfluyfluyf lufluyf luyf y flyuf lyufluyf lyuflyuhjvmhgdktfljhligliuhgliubliugliugliyfliyug.'
  //   },
  //   {
  //     id: 4,
  //     name: 'Title of the fourth article',
  //     image: 'https://images.unsplash.com/photo-1595693396174-619c6ac551b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  //     article: 'lo;gogo nskjhfbl  eilubvilug sb;uu ;uh;oub;ubbhb lyvvykuc ktyfkutf kuyfkuyfkuyf uyfkyuf kyufkuyfvkytdrdyrsr su yflyflygfligkuyfutdktf jl fyulfkud kutdkutdluylvjhlf lyuf luyflutfuf luyfluyfluyf lufluyf luyf y flyuf lyufluyf lyuflyuhjvmhgdktfljhligliuhgliubliugliugliyfliyug. lo;gogo nskjhfbl  eilubvilug sb;uu ;uh;oub;ubbhb lyvvykuc ktyfkutf kuyfkuyfkuyf uyfkyuf kyufkuyfvkytdrdyrsr su yflyflygfligkuyfutdktf jl fyulfkud kutdkutdluylvjhlf lyuf luyflutfuf luyfluyfluyf lufluyf luyf y flyuf lyufluyf lyuflyuhjvmhgdktfljhligliuhgliubliugliugliyfliyug.'
  //   }
  // ],
  // drivers: [
  //   {
  //     id: 1,
  //     name: 'David Gasch',
  //     username: 'd.gasch512',
  //     password: 'playingGoFishWithGrandma4',
  //     totalRides: 16, 
  //     isManager: true
  //   },
  //   {
  //     id: 2,
  //     name: 'DJ Jazzy Jax',
  //     username: 'Best_Dog_Ever',
  //     password: 'imCuteaf21',
  //     totalRides: 32,
  //     isManager: false
  //   }
  // ]


}