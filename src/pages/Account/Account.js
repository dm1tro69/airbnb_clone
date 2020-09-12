import React, {Component} from 'react'
import './Account.css'
import {connect} from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import {Route} from 'react-router-dom'
import AccountSidebar from "./AccountSideBar";

class Account extends Component{

    state = {
        pastBookings: [],
        upcomingBookings: []
    }

   async componentDidMount() {

    }

    render() {
        return(
            <div className={'account container-fluid'}>
               <AccountSidebar/>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}


export default connect(mapStateToProps)(Account)