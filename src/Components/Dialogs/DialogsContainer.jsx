import { sendMessage } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsReducer,
})

const mapDispatchToProps = ({
  sendMessage: (message: string) => sendMessage(message), 
})

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

export default DialogsContainer