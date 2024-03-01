import React, { useEffect, useState } from 'react';

export default function Home() {
    const [platformData, setPlatformData] = useState(null);

    useEffect(() => {
        fetch('https://www.zesty.io/-/gql/platform_section.json')
            
            .then(response => response.json())
            .then(data => {
                setPlatformData(data);
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem fetching the data:', error);
            });
    }, []); 

    return (
        <div id="platformSections">
            {platformData !== null && platformData.map((item, e) => (
                <div key={e}>
                    <h1>{item.title}</h1>
                    <div>{item.text_content}</div>
                </div>
            ))}
        </div>
    );
}
