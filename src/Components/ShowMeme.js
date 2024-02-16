
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MemeCards from './MemeCards';
import SearchBar from './SearchBar';

function ShowMeme() {

    const [myMeme, setMyMeme] = useState([]);
    const [duplicateMeme, setDuplicateMeme] = useState([]);
    async function displayMeme() {
        const data = await axios.get("https://api.imgflip.com/get_memes");
        setMyMeme(data?.data?.data?.memes);
        setDuplicateMeme(data?.data?.data?.memes);
    }


    useEffect(() => {
        displayMeme();

    }, []);

    console.log("show meme");

    return (
        <div>
            <SearchBar duplicateMeme={duplicateMeme} setMyMeme={setMyMeme} />
            {myMeme && myMeme.map((items) => {
                return (
                    <MemeCards key={items?.id} memeName={items?.name} memeImg={items?.url} />
                )
            })}
        </div>
    )
}

export default ShowMeme
