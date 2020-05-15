import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { sendMessageActionCreator } from "../../redux/dialog-reducer";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
    textAreaWords: state.dialogPage.textAreaWords,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
