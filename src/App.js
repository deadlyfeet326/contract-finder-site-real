import './App.css';
import React, {useState, useEffect, useRef} from 'react'
// import {Button, Container, Col, Row, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Contracts from './components/Contracts'
// import MainHeader from './components/MainHeader'
// import Filters from './components/Filters'
// import Pinned from './components/Pinned'
// import PinnedContracts from './components/PinnedContract'
// import { getContractAddress } from 'ethers/lib/utils';
// import io from 'socket.io-client'
import { BrowserRouter as Router, Routes , Route, useRoutes} from 'react-router-dom'
import BSC from './routes/BSC'
import Home from './routes/Home'
import ETH from './routes/ETH'

function App() {

  // const socket = io.connect('http://localhost:5000')
  // const socket2 = io.connect('http://localhost:5000')
  // const socket3 = io.connect('http://localhost:5000')

  // const[showFilters, setShowFilters] = useState(false)
  // const[contracts, setContracts] = useState([])
  // const[pinned, setPinned] = useState([])
  // const[filters, setFilters] = useState({name: "", decimals: "", supply: "", date: ""})

  // let firstLoad = true

  // useEffect(() =>{
  //   firstLoad = false
  //   getContracts()
  //   getPinned()
  // }, [firstLoad])

  // socket.on('request', ({ data }) => {
  //   setContracts(data)
  // })

  // socket.on('filteredRequest', ({ data }) => {
  //   setContracts(data)
  // })

  // socket.on('getPinned', ({data}) => {
  //   setPinned(data)
  // })

  // socket2.on('request', ({ data }) => {
  //   setContracts(data)
  // })

  // socket2.on('filteredRequest', ({ data }) => {
  //   setContracts(data)
  // })

  // socket2.on('getPinned', ({data}) => {
  //   setPinned(data)
  // })

  // const getContracts = async () => {
  //   fetchContracts()
  // }

  // function getPinned(){
  //   fetchPinned()
  // }

  // async function fetchContracts(){
  //   let chain = "bsc"
  //   socket.emit('request', { chain })
  // }

  // async function fetchPinned(){
  //   socket.emit('getPinned')
  // }

  // async function getFilteredContracts(name, decimals, supply, date){
  //   let filterData = {name : name, decimals : decimals, supply : supply, date : date}
  //   console.log(filterData)
  //   socket.emit('filteredRequest', { filterData })
  //   console.log("done")
  // }

  // const changeFilters = async (name, decimals, supply, date) => {
  //   setFilters({name: name, decimals: decimals, supply: supply, date: date})
  //   await getFilteredContracts(name, decimals, supply, date)
  // }

  // function pinContract(pinnedData){
  //   socket.emit('pinContract', {pinnedData})
  // }

  // function unpinContract(id){
  //   socket.emit('unpinContract', {id})
  // }

  return (
    <div>

      <Router>
      
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/bsc" element ={<BSC />} />
          <Route path="/eth" element ={<ETH />} />
        </Routes>
      </Router>
        
    </div>


  );
}

export default App;
