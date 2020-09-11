import React, {Component} from 'react'
import './SearchBox.css'

class SearchBox extends Component{

    state = {
        where: '',
        checkIn: '',
        checkOut: '',
        guests: 0
    }


    changeWhere = (e) => {
        this.setState({where: e.target.value})
    }

    changeCheckIn = (e) => {
        this.setState({checkIn: e.target.value})
    }
    changeCheckOut = (e) => {
        this.setState({checkOut: e.target.value})
    }
    changeGuests = (e) => {
        this.setState({guests: e.target.value})
    }

    render() {
        return(
            <div className={'home-search-box col m4'}>
                <h1>Book unique places to stay and things to do.</h1>
                <div className="form">
                    <form className="search-box-form">
                        <div className={'col m12'}>
                            <div className="form-label">Where</div>
                            <div className="input-field" id={'where'}>
                                <input
                                    value={this.state.where}
                                    onChange={this.changeWhere}
                                    placeholder={'Anywhere'}
                                    type="text"/>
                            </div>
                        </div>

                        <div className={'col m6'}>
                            <div className="form-label">Check-in</div>
                            <div className="input-field" id={'check-in'}>
                                <input
                                    value={this.state.checkIn}
                                    onChange={this.changeCheckIn}
                                    placeholder={'Anywhere'}
                                    type="date"/>
                            </div>
                        </div>

                        <div className={'col m6'}>
                            <div className="form-label">Check-out</div>
                            <div className="input-field" id={'check-out'}>
                                <input
                                    value={this.state.checkOut}
                                    onChange={this.changeCheckOut}
                                    placeholder={'Anywhere'}
                                    type="date"/>
                            </div>
                        </div>

                        <div className={'col m12'}>
                            <div className="form-label">Where</div>
                            <div className="input-field" id={'where'}>
                                <input
                                    value={this.state.guests}
                                    onChange={this.changeGuests}
                                    placeholder={'Anywhere'}
                                    type="number"/>
                            </div>
                        </div>
                        <div className="col m12 submit-btn">
                            <div className="input-field" id={'submit-btn'}>
                                <input
                                    type={'submit'}
                                    className={'btn-large waves-effect waves-light red accent-2'}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}
export default SearchBox