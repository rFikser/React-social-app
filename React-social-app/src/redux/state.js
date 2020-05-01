import {renderEntireTree} from "../Render";

let state = {
    profilePage: {
        posts: [
            {message: 'Hello my friend', likesCount: 15},
            {message: 'Bad idea', likesCount: 3},
            {
                message: 'HTML Generators. Dummy Text Generator. ... Enter your text. Select the values you need from the toolbar. The HTML code is automatically updated in the bottom pane when you make a change. Click Preview to see what it looks like (optional)',
                likesCount: 99
            },
        ],
        textAreaWords: []
    },
    dialogPage: {
        dialogs: [
            {name: 'Ninja', id: 1},
            {name: 'Myth', id: 2},
            {name: 'Edward', id: 3},
            {name: 'Shaun', id: 4},
        ],
        messages: [],
        textAreaWords: []
    },
    sideBar: {
        friendsImage: [
            {image: 'https://www.w3schools.com/howto/img_avatar2.png', id: 1},
            {image: 'https://www.w3schools.com/howto/img_avatar.png', id: 2}
        ]
    }

}

window.state = state;

export let sendMessage = () => {
    let newMessage = {
        id: 1,
        message: state.dialogPage.textAreaWords
    }
    state.dialogPage.messages.push(newMessage);
    renderEntireTree(state);
};

export let updateTextAreaLetters = (newText) => {
    state.dialogPage.textAreaWords = newText;
    renderEntireTree(state);

};

export let addPost = () => {
    let newPost = {
        message: state.profilePage.textAreaWords,
        likesCount: 15
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state);
}

export let updateTextAreaProfile = (newText) => {
    state.profilePage.textAreaWords = newText;
    renderEntireTree(state);

};

export default state;