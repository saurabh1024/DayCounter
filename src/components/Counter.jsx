import { useState } from 'react'
import moment from 'moment'
import './Counter.css'

const Counter = () => {
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))
    const [error, setError] = useState("")
    const handleChange = (e) => {
        let userDate = moment(e.target.value).format("YYYY-MM-DD")
        let todaysDate =  moment().format("YYYY-MM-DD")
        if(moment(todaysDate).isBefore(userDate)){
            setDate(userDate)
            setError("")
        }
        else
            setError("Cannot be a past date.")
    }
  return (
    <div className='counterContainer'>
        <div className='dateContainer'>
            <label>Enter your important date here :</label>
            <input type='date' onChange={handleChange} value={date} placeholder='Enter Date' />
        </div>
        {error && <span className='error'>{error}</span>}

        <div className="counter">
        {
            date === moment().format('YYYY-MM-DD')
            ? "Ready to count!"
            : date
        }
        </div>
    </div>
  )
}

export default Counter