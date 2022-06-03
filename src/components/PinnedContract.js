import React from 'react'
import Button from './Button'

const pinnedContract = ( {contract, unpinContract, prefix, chain} ) => {
  return (
    <div className='contract' >
        <h3>{contract.name} <Button color="red" text="X" onClick={() => unpinContract(contract._id)}/> </h3>
        <p> {contract.address.substring(0,22) + "..."} </p>
        <a href= {prefix + contract.address } target="_blank"> {chain.toUpperCase()} CONTRACT</a>
    </div>
  )
}

export default pinnedContract