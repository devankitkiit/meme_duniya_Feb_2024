
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MemeCards from './MemeCards';

function ShowMeme() {

    const [myMeme, setMyMeme] = useState([]);

    async function displayMeme() {
        const data = await axios.get("https://api.imgflip.com/get_memes");
        setMyMeme(data?.data?.data?.memes)
        console.log(setMyMeme);
    }


    useEffect(() => {

        displayMeme();
    }, [])
    console.log("show meme");

    return (
        <div>
            {myMeme && myMeme.map((items) => {
                return (
                    <MemeCards key={items?.id} memeName={items?.name} memeImg={items?.url} />
                    )
            })}
        </div>
    )
}

export default ShowMeme
