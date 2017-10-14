
import { USER_LIST } from "../profiles/profiles";
import { Messages } from "../../models/messages/messages";

const userList =USER_LIST;
const messageList: Messages[] =[];

userList.forEach((user) => {
  messageList.push({User:user,date: new Date(), lastMessage:'Hello smarty'})
})

// const messageList: Messages[] = [
//   {User: userList[0], date: new Date()},
//   {User: userList[1], date: new Date()},
//   {User: userList[2], date: new Date()},
//   {User: userList[3], date: new Date()}
// ]

export const MESSAGE_LIST = messageList;
