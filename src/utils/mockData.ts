import Avatar from "../assets/images/user.png";
export const todoCards = [
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    dates: "Jan 3.",
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    numOfComments: 7,
    numOfFilters: 2,
    dates: "May 8. - Sep 10.",
    profileImgs: [Avatar],
  },

  {
    id: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    profileImgs: [Avatar],
  },
  {
    id: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    statusColors: ["#4B9AE5", "#F47075", "#64CD7C", "#FFC236", "#B06AD1"],
    profileImgs: [Avatar],

    numOfComments: 7,
    numOfFilters: 2,
    dates: "May 8. - Sep 10.",
  },
  {
    id: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    statusColors: ["#4B9AE5", "#F47075", "#64CD7C", "#FFC236", "#B06AD1"],

    numOfComments: 7,
    numOfFilters: 2,
    dates: "May 8. - Sep 10.",
  },
  {
    id: 6,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    statusColors: ["#4B9AE5", "#F47075", "#64CD7C", "#FFC236", "#B06AD1"],

    numOfComments: 7,
    numOfFilters: 2,
    dates: "May 8. - Sep 10.",
  },
  {
    id: 7,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    statusColors: ["#4B9AE5", "#F47075", "#64CD7C", "#FFC236", "#B06AD1"],

    numOfComments: 7,
    numOfFilters: 2,
    dates: "May 8. - Sep 10.",
  },
];

export const inProgressCards = [
  {
    id: 8,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    statusColors: ["#4B9AE5", "#F47075"],
    profileImgs: [Avatar, Avatar, Avatar],
    numOfComments: 7,
    numOfFilters: 2,
    dates: "May 8. - Sep 10.",
  },
  {
    id: 9,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    statusColors: ["#FFC236", "#64CD7C"],
    profileImgs: [Avatar],

    numOfComments: 7,
    numOfFilters: 2,
    dates: "May 8. - Sep 10.",
  },
  {
    id: 10,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    profileImgs: [Avatar],
  },
];

export const reviewCards = [
  {
    id: 11,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    statusColors: ["#4B9AE5"],
    numOfComments: 7,
    numOfFilters: 2,
    dates: "May 8. - Sep 10.",
  },
  {
    id: 12,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    dates: "May 8. - Sep 10.",
    highPriority: true,
  },
  {
    id: 13,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const testingCards = [
  {
    id: 14,
    text: "Lorem Ipsum is simply dummy text of the.",
    statusColors: ["#4B9AE5", "#F47075", "#64CD7C", "#FFC236", "#B06AD1"],

    profileImgs: [Avatar],

    numOfComments: 7,
    numOfFilters: 2,
    dates: "May 8. - Sep 10.",
  },
];
export const completeCards = [
  {
    id: 15,
    isCompleted: true,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    dates: "May 8. - Sep 10.",
    profileImgs: [Avatar],
  },
  {
    id: 16,
    isCompleted: true,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const columnList = [
  {
    id: 17,
    title: "To Do",
    list: todoCards,
  },
  { id: 18, title: "In Progress", list: inProgressCards },
  { id: 19, title: "Ready for review", list: reviewCards },
  {
    id:20,
    title: "Testing",
    list: testingCards,
  },
];
