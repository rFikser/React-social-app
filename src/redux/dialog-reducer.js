const SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_TEXT_AREA_DIALOG = 'UPDATE-TEXT-AREA-DIALOG';

let initState = {
    dialogs: [
        {name: 'John', id: 1},
        {name: 'NotJohn', id: 2}
    ],
    messages: [],
    textAreaWords: []
}

const dialogReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_MESSAGE : {
            let newMessage = {
                id: 1,
                message: state.textAreaWords
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.textAreaWords = '';
            return stateCopy;
        }
        case UPDATE_TEXT_AREA_DIALOG : {
            let stateCopy = {...state};
            stateCopy.textAreaWords = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};
export const updateTextAreaDialogActionCreator = (text) => {
    return {
        type: UPDATE_TEXT_AREA_DIALOG, newText: text
    }
}

export default dialogReducer;