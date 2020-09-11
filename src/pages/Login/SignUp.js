import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import openModal from "../../actions/openModal";
import regAction from "../../actions/regAction";
import Login from "./Login";
import './Login.css'
import axios from 'axios'
import Swal from 'sweetalert2'

class SignUp extends Component{

    state = {
        lowerPartOfForm: '',
        email: '',
        password: ''
    }

    componentDidMount() {
        this.setState({lowerPartOfForm: <button type={'button'} onClick={this.showInput} className="sign-up-button">Sign up with email</button>})
    }

    showInput = () => {
       this.setState({
           lowerPartOfForm: <SignUpInputFields changeEmail={this.changeEmail} changePassword={this.changePassword}/>
       })
    }
    submitLogin = async (e) => {
        e.preventDefault()
        const url = `${window.apiHost}/users/signup`
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const resp = await axios.post(url, data)
        const token = resp.data.token


        //////////
        // resp.data.msg could be:
        // - invalidData
        // - userExist
        // - userAdded
        if (resp.data.msg === 'userExists'){
            Swal.fire({
                title: 'Email Exists',
                text: 'The email you provide is already registered. Please try another',
                icon: 'warning'

            })
        }else if(resp.data.msg === 'invalidData'){
            Swal.fire({
                title: 'Invalid email/password',
                text: 'Please provide a valid and password',
                icon: 'error'

            })
        }else if(resp.data.msg === 'userAdded'){
            Swal.fire({
                title: 'Success!',
                icon: 'success'

            })
            this.props.regAction(resp.data)
        }


        // const url2 = `${window.apiHost}/users/token-check`
        // const resp2 = await axios.post(url2, {token})
        // console.log(resp2)


    }

    changePassword = (e) => {
         this.setState({password: e.target.value})
    }
    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }


    render(){
        console.log(this.props.auth)
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    {this.state.lowerPartOfForm}
                    <div className="divider"></div>
                    <div>Already have an account? <span className={'pointer'} onClick={()=>this.props.openModal('open', <Login/>)}>Log in</span> </div>
                </form>
            </div>

        )
    }

}
const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openModal: openModal,
        regAction: regAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const SignUpInputFields = (props) => {
    return(
       <div className={'sign-up-wrapper'}>
           <div className={'col m12'}>
               <div className={'input-field'} id={'email'}>
                   <div className={'form-label'}>Email</div>
                   <input onChange={props.changeEmail} type="text" placeholder={'Email'}/>
               </div>
           </div>

           <div className={'col m12'}>
               <div className={'input-field'} id={'password'}>
                   <div className={'form-label'}>Password</div>
                   <input onChange={props.changePassword} type="password" placeholder={'Password'}/>
               </div>
           </div>
           <div className={'col m12'}>
               <button type={'submit'} className={'btn red accent-2'}>Log in</button>
           </div>
       </div>
    )
}