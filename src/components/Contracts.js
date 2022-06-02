import Contract from './Contract'

const Contracts = ( {contracts, pinContract} ) => {
  return (
    <div className='contractContainer'>
        {contracts.map((contract, index) => (
             <Contract key={index} contract={contract} pinContract={pinContract}/>
        ))}
    </div>
  )
}

export default Contracts