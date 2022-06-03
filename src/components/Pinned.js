import PinnedContract from "./PinnedContract"
import Button from "./Button"

const Pinned = ({ pinned, unpinContract, chain, prefix}) => {
  return (
    <div className="pinnedContainer">
        {pinned.map((contract, index) => (
             <PinnedContract key={index} contract={contract} prefix={prefix} chain={chain} unpinContract={unpinContract}/>
        ))}
    </div>
  )
}

export default Pinned