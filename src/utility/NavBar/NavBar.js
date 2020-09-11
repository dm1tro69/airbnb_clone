import React, {Component} from 'react'
import './NavBar.css'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import openModal from "../../actions/openModal";
import logoutAction from "../../actions/logoutAction";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";


class NavBar extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.auth.token !== this.props.auth.token){
            this.props.openModal('closed', '')
        }
    }

    render() {

        let navColor = 'transparent'
        if(this.props.location.pathname !== '/'){
            navColor = 'black'
        }

        return (
            <div className={'container-fluid nav'}>
                <div className={'row'}>
                    <nav className={navColor}>
                        <div className={'nav-wrapper'}>
                            <Link className={'left'} to={'/'}>airbnb</Link>
                            <ul id={'nav-mobile'} className={'right'}>
                                <li><Link to={'/'}>English (US)</Link></li>
                                <li><Link to={'/'}>$ USD</Link></li>
                                <li><Link to={'/'}>Become a host</Link></li>
                                <li><Link to={'/'}>Help</Link></li>
                                {this.props.auth.email ? <>
                                  <li>Hello {this.props.auth.email}</li>
                                    <li onClick={()=>this.props.logoutAction()}>Logout</li>
                                </>  : <>
                                    <li className={'login-signup'} onClick={() =>this.props.openModal('open', <SignUp/>)}>Sin-Up</li>
                                    <li className={'login-signup'} onClick={() =>this.props.openModal('open', <Login/>)}>Log in</li>
                                </>}

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       openModal: openModal,
        logoutAction: logoutAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)