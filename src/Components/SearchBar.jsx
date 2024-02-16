import React, { useEffect, useState } from 'react'
import './SearchBar.css'
function SearchBar({ duplicateMeme, setMyMeme }) {
    const [searchTxt, setSearchTxt] = useState(``);
    console.log(searchTxt);
    //searchTxt
    //data
    // console.log("duplicatememe = ", duplicateMeme[0]?.name.toLowerCase());
    function filterMyData() {
        const filteredData = duplicateMeme.filter((items) => {
            return items?.name.toLowerCase().includes(searchTxt.toLowerCase());
        })

        console.log("filteredData is ", filteredData);
        setMyMeme(filteredData);

    }

    useEffect(() => {
        filterMyData();
    }, [searchTxt])

    return (
        <div>
            <input className='inputField' type='text' placeholder='Enter the name'
                onChange={(event) => {
                    setSearchTxt(event?.target?.value);
                }}

            />
        </div>
    )
}

export default SearchBar
