import React, { useState, useEffect } from 'react';
import './About.css';

export default function About() {
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
        fetch('https://www.zesty.io/-/instant/7-e93178-vqvclg.json')
            .then(response => response.json())
            .then(data => {
                setPageContent(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='pageContent'>
            {pageContent !== null && pageContent.data && pageContent.data.length > 0 && (
                <div dangerouslySetInnerHTML={{ __html: pageContent.data[0].content.page_content }} />
            )}
        </div>
    );
}
