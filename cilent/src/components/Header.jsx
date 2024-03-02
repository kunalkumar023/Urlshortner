import React, { useState } from 'react';
import axios from 'axios';
import '../components/style.css'

const Header = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const createShortUrl = async () => {
        try {
            const response = await axios.post('http://localhost:4000/convert', {
                url: url
            });

            const shortUrl = response.data.shortUrl;
            setShortUrl(shortUrl);
        } catch (error) {
            console.error( error);
        }
    };

    return (
        <>
        <div id='body'>
            
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='url'>URL:</label>
                <input
                    type='text'
                    id='url'
                    name='url'
                    value={url}
                    onChange={handleUrlChange}
                    placeholder='Enter Url'
                    required
                />
                <br />
                <button id='btn' type='button' onClick={createShortUrl}>Short</button>
            </form>
            {shortUrl && (
                <div>
                    <p><a id='link' href={shortUrl} target='_blank' rel='noopener noreferrer'>{shortUrl}</a></p>
                </div>
            )}
        </div>
        </>
    );
};

export default Header;
