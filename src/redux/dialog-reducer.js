const SEND_MESSAGE = "SEND-MESSAGE";

let initState = {
  dialogs: [
    { name: "John", id: 1 },
    { name: "NotJohn", id: 2 },
  ],
  messages: [],
};

const dialogReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 1,
        message: action.newMessageBody,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
  };
};

export default dialogReducer;
