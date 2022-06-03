import Contract from './Contract'

const Contracts = ( {contracts, pinContract, prefix, chain} ) => {
  return (
    <div className='contractContainer'>
        {contracts.map((contract, index) => (
             <Contract key={index} contract={contract} prefix={prefix} chain={chain} pinContract={pinContract}/>
        ))}
    </div>
  )
}

export default Contracts