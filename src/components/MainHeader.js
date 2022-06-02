import Button from './Button'

const MainHeader = ({onFilter, showFilters, showButton}) => {
  return (
    <header className='header'>
        {<Button color={showFilters ? 'red' : 'green'} text ={showFilters ? 'X' : 'Filters' } onClick={onFilter}/>} 
    </header>
    
  )
}

MainHeader.defaultProps = {
  title: 'New Contracts'
}

export default MainHeader