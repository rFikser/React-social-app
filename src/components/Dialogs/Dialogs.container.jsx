import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateTextAreaDialogActionCreator} from "../../redux/dialog-reducer";

let mapStateToProps = (state) => {
    return  {
        dialogPage: state.dialogPage,
        textAreaWords: state.dialogPage.textAreaWords
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateText : (text) => {
            dispatch(updateTextAreaDialogActionCreator(text))
        }
    }
};


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;