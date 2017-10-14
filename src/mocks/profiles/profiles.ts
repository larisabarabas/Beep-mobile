import { Profile } from "../../models/profile/profile";

const userList: Profile[] =[
  {
    firstName:'Stefania',
    lastName: 'Barabas',
    email:'stefaniabarabas@gmail.com',
    avatar: 'assets/img/chat.png',
    dateOfBirth: new Date(),
  },
  {
    firstName:'Larisa',
    lastName: 'Barabas',
    email:'stefaniabarabas@gmail.com',
    avatar: 'assets/img/chat.png',
    dateOfBirth: new Date(),

  },
  {
    firstName:'Monica',
    lastName: 'Barabas',
    email:'monicabarabas@gmail.com',
    avatar: 'assets/img/chat.png',
    dateOfBirth: new Date(),

  },
  {
    firstName:'Sarah',
    lastName: 'Doe',
    email:'sarahj@gmail.com',
    avatar: 'assets/img/chat.png',
    dateOfBirth: new Date(),

  }
];

export const USER_LIST = userList;
