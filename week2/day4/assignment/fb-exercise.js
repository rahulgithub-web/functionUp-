const facebookProfiles = [
  {
    firstName: "Akash",
    lastName: "Agarwal",
    number: "111111111",
    likes: ["music", "movies"],
    hasDrivingLicense: false,
    address: {
      location: "rampur",
      state: "up",
    },
    emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
  },
  {
    firstName: "Pritesh",
    lastName: "Kumar",
    number: "222222222",
    likes: ["code", "driving"],
    hasDrivingLicense: false,
    address: {
      location: "gurgaon",
      state: "haryana",
    },
    emails: ["fgdfg@gmail.com"],
  },
  {
    firstName: "Sabiha",
    lastName: "Khan",
    number: "333333333",
    hasDrivingLicense: false,
    address: {
      location: "lucknow",
      state: "up",
    },
  },
  {
    firstName: "Suyash",
    lastName: "Kashyap",
    number: "444444444",
    likes: ["travel", "driving"],
    hasDrivingLicense: true,
    address: {
      location: "alwar",
      state: "rajasthan",
    },
    emails: ["abc@yahoo.com"],
  },
  {
    firstName: "Jay",
    likes: ["food", "mobile"],
    hasDrivingLicense: true,
    address: {
      location: "gurgaon",
      state: "haryana",
    },
    emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
  },
];

// 1. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )

const fullNames = facebookProfiles
  .filter((profile) => profile.address.location === "gurgaon")
  .map((profile) => profile.firstName + " " + (profile.lastName || ""));

  console.log(fullNames);





















  function profileLookup(name, property) {
    for (let i = 0; i < facebookProfiles.length; i++) {
      if (facebookProfiles[i].firstName == name) {
        if (facebookProfiles[i].hasOwnProperty(property)) {
          return facebookProfiles[i][property];
        } else if (facebookProfiles[i].address.hasOwnProperty(property)) {
          return facebookProfiles[i].address[property];
        } else {
          return "no such property found";
        }
      }
    }
    return "person does not exist";
  }
  console.log(profileLookup("Akash", "number"));