import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
    const [platformData, setPlatformData] = useState(null);

    useEffect(() => {
        fetch('https://www.zesty.io/-/gql/platform_section.json')
            .then(response => response.json())
            .then(data => {
                setPlatformData(data);
            })
            .catch(error => {
                console.error('There was a problem fetching the data:', error);
            });
    }, []); 

    return (
        <div className="platformSections">
            {platformData !== null && platformData.map((item, index) => (
                <div key={index}>
                    <h1 className='title'>{item.title}</h1>
                    <div className='textContent' dangerouslySetInnerHTML={{ __html: item.text_content }} />
                </div>
            ))}
        </div>
    );
}
