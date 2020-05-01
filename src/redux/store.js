// import profileReducer from "./profile-reducer";
// import dialogReducer from "./dialog-reducer";
//
//
// let
//     store = {
//         _state: {
//             profilePage: {
//                 posts: [
//                     {message: 'Hello my friend', likesCount: 15},
//                     {message: 'Bad idea', likesCount: 3},
//                     {
//                         message: 'HTML Generators. Dummy Text Generator. ... Enter your text. Select the values you need from the toolbar. The HTML code is automatically updated in the bottom pane when you make a change. Click Preview to see what it looks like (optional)',
//                         likesCount: 99
//                     },
//                 ],
//                 textAreaWords: []
//             },
//             dialogPage: {
//                 dialogs: [
//                     {name: 'Ninja', id: 1},
//                     {name: 'Myth', id: 2},
//                     {name: 'Edward', id: 3},
//                     {name: 'Shaun', id: 4},
//                 ],
//                 messages: [],
//                 textAreaWords: []
//             },
//             sideBar: {
//                 friendsImage: [
//                     {image: 'https://www.w3schools.com/howto/img_avatar2.png', id: 1},
//                     {image: 'https://www.w3schools.com/howto/img_avatar.png', id: 2}
//                 ]
//             }
//
//         },
//         subscribe(observer) {
//             this._callSubscriber = observer;
//         },
//         _callSubscriber() {
//             console.log('State changed');
//         },
//         getState() {
//             return this._state;
//         },
//
//
//         dispatch(action) {
//             this._state.profilePage = profileReducer(this._state.profilePage, action);
//             this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
//             this._callSubscriber(this._state);
//         },
//     }
//
//
//
// export default store;
//
