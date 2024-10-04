const asyncHandler = require("../../middlewares/async.middleware");
const UserModel = require("../../models/user.model");
const _response = require("../../utils/response.util");

const users = [
  {
    address: "(Q; 2088 Graphic Road, Lyon France 11425",
    companyName: "Nethues Technologies pvt",
    email: "mark.harrison@lorem.com",
    jobTitle: "Software Engineer",
    name: "Mark Harrison",
    phone: "208897885778",
  },
  {
    address: "(Q; 123 Elm St, Springfield, USA",
    companyName: "Tech Innovations LLC",
    email: "jane.doe@lorem.com",
    jobTitle: "Project Manager",
    name: "Jane Doe",
    phone: "3035568899",
  },
  {
    address: "(Q; 456 Maple Ave, Gotham City, USA",
    companyName: "Design Corp",
    email: "bruce.wayne@lorem.com",
    jobTitle: "Creative Director",
    name: "Bruce Wayne",
    phone: "5043998877",
  },
  {
    address: "(Q; 789 Oak St, Metropolis, USA",
    companyName: "Web Solutions Inc",
    email: "clark.kent@lorem.com",
    jobTitle: "Frontend Developer",
    name: "Clark Kent",
    phone: "7024579999",
  },
  {
    address: "(Q; 135 Pine St, Star City, USA",
    companyName: "Data Systems Co",
    email: "oliver.queen@lorem.com",
    jobTitle: "Data Analyst",
    name: "Oliver Queen",
    phone: "9123456789",
  },
  {
    address: "(Q; 246 Birch St, Central City, USA",
    companyName: "Innovatech",
    email: "barry.allen@lorem.com",
    jobTitle: "Software Tester",
    name: "Barry Allen",
    phone: "8224567890",
  },
  {
    address: "(Q; 369 Cedar St, Coast City, USA",
    companyName: "AI Dynamics",
    email: "hal.jordan@lorem.com",
    jobTitle: "AI Engineer",
    name: "Hal Jordan",
    phone: "6612233445",
  },
  {
    address: "(Q; 579 Ash St, Smallville, USA",
    companyName: "Tech Titans",
    email: "diana.prince@lorem.com",
    jobTitle: "UX Designer",
    name: "Diana Prince",
    phone: "8059988776",
  },
  {
    address: "(Q; 682 Willow St, Riverdale, USA",
    companyName: "NextGen Tech",
    email: "peter.parker@lorem.com",
    jobTitle: "Backend Developer",
    name: "Peter Parker",
    phone: "4145656789",
  },
  {
    address: "(Q; 794 Palm St, Bay City, USA",
    companyName: "Future Tech Inc",
    email: "tony.stark@lorem.com",
    jobTitle: "Systems Engineer",
    name: "Tony Stark",
    phone: "9101234567",
  },
  {
    address: "(Q; 918 Cherry St, Metropolis, USA",
    companyName: "Global Solutions",
    email: "natasha.romanoff@lorem.com",
    jobTitle: "Product Manager",
    name: "Natasha Romanoff",
    phone: "3116789012",
  },
  {
    address: "(Q; 124 Walnut St, Hill Valley, USA",
    companyName: "E-Com Solutions",
    email: "marty.mcfly@lorem.com",
    jobTitle: "E-Commerce Specialist",
    name: "Marty McFly",
    phone: "5123412345",
  },
  {
    address: "(Q; 236 Chestnut St, Gotham, USA",
    companyName: "WebX Solutions",
    email: "harry.potter@lorem.com",
    jobTitle: "Web Developer",
    name: "Harry Potter",
    phone: "2025647890",
  },
  {
    address: "(Q; 348 Fir St, Salem, USA",
    companyName: "CloudTech",
    email: "hermione.granger@lorem.com",
    jobTitle: "Cloud Engineer",
    name: "Hermione Granger",
    phone: "7074128390",
  },
  {
    address: "(Q; 469 Spruce St, Mystic Falls, USA",
    companyName: "Smart Data",
    email: "elena.gilbert@lorem.com",
    jobTitle: "Data Scientist",
    name: "Elena Gilbert",
    phone: "3034447890",
  },
  {
    address: "(Q; 579 Maple St, Pawnee, USA",
    companyName: "Creative Minds",
    email: "leslie.knope@lorem.com",
    jobTitle: "Community Manager",
    name: "Leslie Knope",
    phone: "2125550987",
  },
  {
    address: "(Q; 681 Oak St, Albany, USA",
    companyName: "StartUp Hub",
    email: "tom.holland@lorem.com",
    jobTitle: "Intern",
    name: "Tom Holland",
    phone: "8161234567",
  },
  {
    address: "(Q; 792 Pine St, Springfield, USA",
    companyName: "Innovate Labs",
    email: "steve.rogers@lorem.com",
    jobTitle: "Marketing Specialist",
    name: "Steve Rogers",
    phone: "9056781234",
  },
  {
    address: "(Q; 803 Cedar St, Long Beach, USA",
    companyName: "Tech Wizards",
    email: "wanda.maximoff@lorem.com",
    jobTitle: "Software Architect",
    name: "Wanda Maximoff",
    phone: "5551234567",
  },
  {
    address: "(Q; 914 Fir St, Emerald City, USA",
    companyName: "Data Insights",
    email: "vision@lorem.com",
    jobTitle: "Data Engineer",
    name: "Vision",
    phone: "7771234567",
  },
];

const createUser = asyncHandler(async (req, res, next) => {
  console.log("req.body", req.body);
  await UserModel.insertMany(users);
  return _response(res, "User created successfully", true, 200, {});
});

const getUsers = asyncHandler(async (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;

  const skip = (page - 1) * limit;

  const totalUsers = await UserModel.find().countDocuments();

  const users = await UserModel.find().skip(skip).limit(limit);

  return _response(res, "User retrieved successfully", true, 200, {
    users,
    totalUsers,
  });
});

module.exports = { createUser, getUsers };
