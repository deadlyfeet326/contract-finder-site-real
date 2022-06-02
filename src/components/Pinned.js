import PinnedContract from "./PinnedContract"
import Button from "./Button"

const Pinned = ({ pinned, unpinContract}) => {
  return (
    <div className="pinnedContainer">
        {pinned.map((contract, index) => (
             <PinnedContract key={index} contract={contract} unpinContract={unpinContract}/>
        ))}
    </div>
  )
}

export default Pinned