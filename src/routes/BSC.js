import '../App.css';
import {useState, useEffect} from 'react'
import {Button, Container, Col, Row, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contracts from '../components/Contracts'
import MainHeader from '../components/MainHeader'
import Filters from '../components/Filters'
import Pinned from '../components/Pinned'
import { getContractAddress } from 'ethers/lib/utils';
import io from 'socket.io-client'
let chain = "bsc"

const socket = io.connect('https://bsc-new-contracts.herokuapp.com/')

function BSC() {

  
  // const socket2 = io.connect('http://localhost:5000')
  // const socket3 = io.connect('http://localhost:5000')

  const[showFilters, setShowFilters] = useState(false)
  const[contracts, setContracts] = useState([])
  const[pinned, setPinned] = useState([])
  const[filters, setFilters] = useState({name: "", decimals: "", supply: "", date: ""})

  useEffect(() =>{
    getContracts()
    getPinned()
  }, [])

  socket.on('request', ({ data }) => {
    setContracts(data)
  })

  socket.on('filteredRequest', ({ data }) => {
    setContracts(data)
  })

  socket.on('getPinned', ({data}) => {
    setPinned(data)
  })

  // socket2.on('request', ({ data }) => {
  //   setContracts(data)
  // })

  // socket2.on('filteredRequest', ({ data }) => {
  //   setContracts(data)
  // })

  // socket2.on('getPinned', ({data}) => {
  //   setPinned(data)
  // })

  const getContracts = async () => {
    fetchContracts()
  }

  function getPinned(){
    fetchPinned()
  }

  async function fetchContracts(){
    socket.emit('request')
  }

  async function fetchPinned(){
    socket.emit('getPinned')
  }

  async function getFilteredContracts(name, decimals, supply, date){
    let filterData = {name : name, decimals : decimals, supply : supply, date : date}
    console.log(filterData)
    socket.emit('filteredRequest', {filterData })
    console.log("done")
  }

  const changeFilters = async (name, decimals, supply, date) => {
    setFilters({name: name, decimals: decimals, supply: supply, date: date})
    await getFilteredContracts(name, decimals, supply, date)
  }

  function pinContract(pinnedData){
    socket.emit('pinContract', {pinnedData})
  }

  function unpinContract(id){
    socket.emit('unpinContract', {id})
  }

  return (
    <div className="App">
      <div className='header'>
        <h2> BSC </h2>
        <MainHeader className="filterButton" onFilter={() => setShowFilters(!showFilters)} showFilters={showFilters}/>
      </div>
      
      <div className="filters">
                { showFilters && <Filters  name={filters.name} decimals={filters.decimals} supply={filters.supply} date={filters.date} changeFilters={changeFilters} /> }
      </div>
      <div className='content'>
        <div className="contracts">
          <b> CONTRACTS </b>
          <Contracts contracts={contracts} pinContract={pinContract}/>
        </div>
        <div className='pinned'>
        <b> PINNED </b>
        {pinned.length > 0 && <Pinned pinned={pinned} unpinContract={unpinContract}/> }
        </div>
      </div>
    </div>

    
  );
}

export default BSC;
