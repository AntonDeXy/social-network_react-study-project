import { sendMessageText, updateNewMessageText } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsReducer,
  }
}

let DialogsContainer = compose(
  connect(mapStateToProps, {sendMessageText, updateNewMessageText}),
  withAuthRedirect
)(Dialogs)

export default DialogsContainer