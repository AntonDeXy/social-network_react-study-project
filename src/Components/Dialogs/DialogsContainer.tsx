import { sendMessage } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'
import { ComponentType } from 'react'

const mapStateToProps = (state: AppStateType) => ({
  dialogsPage: state.dialogsReducer,
})

const mapDispatchToProps = ({
  sendMessage: (message: string) => sendMessage(message), 
})

const DialogsContainer = compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

export default DialogsContainer