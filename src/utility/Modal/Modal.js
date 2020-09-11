import React, {Component} from 'react'
import './Modal.css'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import openModal from "../../actions/openModal";

class Modal extends Component{

    state = {

    }

    closeModal = () => {
        this.props.openModal('closed', '')
    }

    render() {
        let modalInLineStyle = {
            display: 'block'
        }
        if (this.props.siteModal.openClose === 'open'){
           modalInLineStyle = {
                display: 'block'
            }
        }else {
            modalInLineStyle = {
                display: 'none'
            }
        }

        return(
            <div className={'site-modal'} style={modalInLineStyle}>
                <div className={'modal-content'}>
                    <div className="col right">
                        <span onClick={this.closeModal} className={'close'}>&times;</span>
                    </div>
                    <div className={''}>
                        {this.props.siteModal.content}
                    </div>
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
       siteModal: state.siteModal
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      openModal: openModal
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)