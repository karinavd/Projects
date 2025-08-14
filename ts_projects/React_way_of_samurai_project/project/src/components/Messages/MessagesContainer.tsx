import React from 'react'
import type { AppStateType } from '../../redux/redux_store'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../../redux/profile_reducer'
import Messages from './Messages'


let mapStateToProps = (state:AppStateType)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps)

)(Messages)