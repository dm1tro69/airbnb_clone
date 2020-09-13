import React from "react";
import moment from 'moment'
import Swal from "sweetalert2";
import axios from 'axios'

const Bookings = (props) => {

    const cancelBooking = async (bid, location)=> {
         const cancelReservation = await Swal.fire({
             text: `Are you sure you want to cancel your trip to ${location} `,
             buttons: true,
             icon: 'warning'

         })
        if(cancelReservation){
            const url = `${window.apiHost}/reservation/cancel`
            const data = {
                token: props.token,
                bid
            }
            const resp = await axios.post(url, data)
            if(resp.data.msg === 'cancelled'){
                Swal.fire({
                    title: 'Cancelled',
                    icon: 'success'
                })
            }else {
                Swal.fire({
                    title: 'There was an error cancelling',
                    icon: 'error'
                })
            }
        }
    }

    const bookings = props.bookings.map((booking, i)=> {
        const dates = `${moment(booking.checkIn).format('MMM Do')} - ${moment(booking.checkOut).format('MMM Do YYYY')}`
          return(
              <tr key={i} className="booking-row">
                  <td>{booking.status}</td>
                  <td>
                      <div className="booking-detail">{dates}</div>
                      <div className="booking-detail">{booking.venueData.title}</div>
                      <div className="booking-detail">{booking.venueData.location}</div>
                  </td>
                  <td>
                      <div className="booking-detail">Confirmation #: {booking.conf}</div>
                      <div className="booking-detail">{booking.numberOfGuests} Guests, {booking.totalNights} Nights</div>
                      <div className="booking-detail">${booking.pricePerNight} per night</div>
                      <div className="booking-detail">${booking.totalPrice} Total</div>
                  </td>
                  <td>
                      <div className="booking-detail pointer">
                          Print Reservation
                      </div>
                      {
                          props.type === 'upcoming' && booking.status !== 'cancelled'? <div onClick={()=>cancelBooking(booking.id, booking.venueData.location)} className="booking-detail pointer">Cancel Confirmation</div> : <></>
                      }
                  </td>
              </tr>
          )
    })

    return(
        <table className="booking">
            <thead>
            <tr>
                <th>Status</th>
                <th>Dates and location</th>
                <th>Details</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {bookings}
            </tbody>
        </table>
    )
}
export default Bookings