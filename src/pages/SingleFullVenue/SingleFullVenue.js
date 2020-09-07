import React, {Component} from 'react'
import './SingleFullVenue.css'
import axios from 'axios'

export default class SingleFullVenue extends Component{

    state = {
        singleVenue: {}
    }

    async componentDidMount() {
        const vId = this.props.match.params.vid
        const url = `${window.apiHost}/venue/${vId}`
        const axiosResponse = await axios.get(url)
        const singleVenue = axiosResponse.data
        this.setState({singleVenue})

    }

    render() {
        console.log(this.state.singleVenue)
        return(
            <div className={'row single-venue'}>
                <div className={'col s12 center'}>
                    <img src={this.state.singleVenue.imageUrl} alt="img"/>
                </div>
                <div className={'col s8 location-details offset-s2'}>
                    <div className={'location'}>{this.state.singleVenue.location}</div>
                    <div className={'title'}>{this.state.singleVenue.title}</div>
                    <div className={'guests'}>{this.state.singleVenue.guests}</div>
                    <div className={'divider'}></div>
                </div>

            </div>
        )
    }

}