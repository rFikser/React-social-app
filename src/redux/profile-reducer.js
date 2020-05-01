const ADD_POST = 'ADD-POST',
    UPDATE_TEXT_AREA_PROFILE = 'UPDATE-TEXT-AREA-PROFILE'

let initState = {
    posts: [
        {message: 'Hello my friend', likesCount: 15},
        {message: 'Bad idea', likesCount: 3},
        {
            message: 'HTML Generators. Dummy Text Generator. ... Enter your text. Select the values you need from the toolbar. The HTML code is automatically updated in the bottom pane when you make a change. Click Preview to see what it looks like (optional)',
            likesCount: 99
        },
    ],
    textAreaWords: []
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                message: state.textAreaWords,
                likesCount: 15
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.textAreaWords = '';
            return stateCopy;
        }
        case UPDATE_TEXT_AREA_PROFILE : {
            let stateCopy = {...state}
            stateCopy.textAreaWords = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateTextAreaProfileActionCreator = (text) => {
    return {
        type: UPDATE_TEXT_AREA_PROFILE, newText: text
    }
};


export default profileReducer;