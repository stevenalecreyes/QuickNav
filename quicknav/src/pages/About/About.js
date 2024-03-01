import React, { useState, useEffect } from 'react';

export default function About() {
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
        fetch('https://www.zesty.io/-/instant/7-e93178-vqvclg.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPageContent(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            {pageContent !== null && pageContent.data && pageContent.data.length > 0 && (
                <div>
                    {pageContent.data[0].content.page_content}
                </div>
            )}
        </div>
    );
}
