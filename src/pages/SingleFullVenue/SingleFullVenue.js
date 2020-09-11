import React, {Component} from 'react'
import './SingleFullVenue.css'
import axios from 'axios'
import Point from "./Point";

export default class SingleFullVenue extends Component {

    state = {
        singleVenue: {},
        points: []
    }

    async componentDidMount() {
        const vId = this.props.match.params.vid
        const url = `${window.apiHost}/venue/${vId}`
        const axiosResponse = await axios.get(url)
        const singleVenue = axiosResponse.data

        const pointsUrl = `${window.apiHost}/points/get`
        const pointAxiosResponse = await axios.get(pointsUrl)

        const points = singleVenue.points.split(',').map((point, i) => {
            return (
                <Point key={i} pointDesc={pointAxiosResponse.data} point={point}/>
            )
        })
        this.setState({singleVenue, points})

    }

    reserveNow = (e) => {
      console.log('Reserve!!!')
    }

    render() {
        console.log(this.state.singleVenue)
        return (
            <div className={'row single-venue'}>
                <div className={'col s12 center'}>
                    <img src={this.state.singleVenue.imageUrl} alt="img"/>
                </div>
                <div className={'col s8 location-details offset-s2'}>
                    <div className={'col s8 left-details'}>
                        <div className={'location'}>{this.state.singleVenue.location}</div>
                        <div className={'title'}>{this.state.singleVenue.title}</div>
                        <div className={'guests'}>{this.state.singleVenue.guests}</div>
                        <div className={'divider'}></div>
                        {this.state.points}
                        <div className={'details'}>{this.state.singleVenue.details}</div>
                        <div className={'amenities'}>{this.state.singleVenue.amenities}</div>
                    </div>
                    <div className={'col s4 right-details'}>
                          <div className={'price-per-day'}>${this.state.singleVenue.pricePerNight} <span>per day</span></div>
                        <div className="rating">{this.state.singleVenue.rating}</div>
                        <div className="col s6">
                            Check-In
                            <input type="date"/>
                        </div>
                        <div className="col s6">
                            Check-Out
                            <input type="date"/>
                        </div>
                        <div className="col s12">
                            <select className={'browser-default'}>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guest</option>
                                <option value="3">3 Guest</option>
                                <option value="4">4 Guest</option>
                                <option value="5">5 Guest</option>
                                <option value="6">6 Guest</option>
                                <option value="7">7 Guest</option>
                                <option value="8">8 Guest</option>
                                <option value="9">9 Guest</option>
                            </select>
                        </div>
                        <div className={'col s12 center'}>
                            <button onClick={this.reserveNow} className={'btn red accent-2'}>Reserve</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}