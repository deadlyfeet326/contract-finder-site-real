import Button from './Button'
import {useState, useEffect} from 'react'
const Filters = ({ name, decimals, supply, date, changeFilters}) => {

  const [tempName, setTempName] = useState(name)
  const [tempDecimals, setTempDecimals] = useState(decimals)
  const [tempSupply, setTempSupply] = useState(supply)
  const [tempDate, setTempDate] = useState(date)

  function resetFilters(){
    setTempName("")
    setTempDecimals("")
    setTempSupply("")
    setTempDate("")
  }

  return (
    <form className="filter-form">
        <div >
            <label > Name </label>
            <input type="text" placeholder="Contract Name" value={tempName} onChange={(e) => {
              setTempName(e.target.value)
              console.log(tempName)}}/>
            <label> Decimals </label>
            <input type="text" placeholder="Decimal #" value={tempDecimals} onChange={(e) => {
              if (e.target.value != null){
                setTempDecimals(e.target.value)
              }else {
                setTempDecimals("")
              }
            }
            }
              />
          </div>
          <div>
            <label> Supply </label>
            <input type="text" placeholder="Supply #" value={tempSupply} onChange={(e) => {
              if (e.target.value != null){
                setTempSupply(e.target.value)
              } else {
                setTempSupply("")}
              }
            }/>

            <label >Start Date</label>
            <input type="date" id="date" value={tempDate} onChange={(e) => setTempDate(e.target.value)}/>
        </div>
        <div>
          <Button color='black' text="Reset Filters" onClick={(e) => {
            e.preventDefault()
            changeFilters("", "", "", "")
            resetFilters()
          }}/>
          <Button color = 'black' text="Apply Filters" onClick={(e) => {
            e.preventDefault()
            changeFilters(tempName, tempDecimals, tempSupply, tempDate)
          }}/>
        </div>

    </form>
  )
}

export default Filters