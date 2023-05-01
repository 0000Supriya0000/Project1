import React, {useState} from 'react'
import "./SearchBox.css"
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

export default function SearchBox({ placeholder, data}) {
    const [filterData, setFilterData] = useState([]);


    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase);
        });
        setFilterData(newFilter)
    }
  return (
    <div className ="SearchBox">
        <div className = "SearchInput">
            <input type='text' placeholder={placeholder} onChange={handleFilter}/>
            <div className='searchIcon' ><SavedSearchIcon />
            </div>
            </div>
            {filterData.length!== 0 && (
            <div className = "dataResult">
                {filterData.map((value, key) => {
                    return (
                    <a className='dataItem' href = {value.link} target="_blank">
                        
                        <p>{value.framework}</p> 
                        </a>
                    )
                
                })}
                

            </div> )
}
        </div>
            
    )
}
