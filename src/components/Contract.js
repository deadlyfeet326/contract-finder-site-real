import Button from './Button'

const Contract = ( {contract, pinContract, prefix, chain} ) => {
  return (
    <div className='contract' >
        <h2>{contract.name} <Button text='PIN' onClick={() => pinContract(contract)}/></h2>
        <p> <b>Contract Address : </b> {contract.address} </p>
        <p> 
            <b>Decimals : </b> {contract.decimals} 
            <b> Supply : </b> {contract.supply} 
        </p>
        <p> <b> Dev Wallet : </b>{contract.owner} </p>
        <a href= {prefix + contract.address } target="_blank"> {chain.toUpperCase()} CONTRACT</a>
    </div>
  )
}

export default Contract