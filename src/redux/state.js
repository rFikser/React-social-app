let state = {
    profilePage: {
        posts: [
            {message: 'Hello my friend', likesCount: 15},
            {message: 'Bad idea', likesCount: 3},
        ]
    },
    dialogPage: {
        dialogs: [
            {name: 'Ninja', id: 1},
            {name: 'Myth', id: 2},
            {name: 'Edward', id: 3},
            {name: 'Shaun', id: 4},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Bye'},
        ]
    },
    sideBar: {
        friendsImage: [
            {image: 'https://www.w3schools.com/howto/img_avatar2.png', id: 1},
            {image: 'https://www.w3schools.com/howto/img_avatar.png', id: 2}
        ]
    }

}

export default state;