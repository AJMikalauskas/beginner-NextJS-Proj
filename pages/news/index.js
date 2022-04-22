// ourdomain.com/news Route
    // Not the only solution by creating a news.js for the Route above.
        // Can also create a news folder and put this file in it and rename this file to "index.js"
        // Same result as news.js in pages folder  as  index.js in news folder in pages folder

// If you want to go to even further nesting, index.js solution in news folder is necessary and is what he uses
    // ourdomain.com/news/newsArticle1
        // in order to go to the newsArticle1 URL above, need to have news folder and not just news.js

// We want links to different pages, not manual URL changing
    // create a list of news items with links to the news items
import Link from 'next/link'; 
import { Fragment } from 'react';

const NewsPage = () => {

    return(
    <Fragment>
        <h1>The News Page</h1>
        {/* Can do it with hrefs, list elements, and h tags, but this is the 2nd best way to do so: 
            Not an SPA because new page is called everytime a link is clicked 
        <ul>
            <li><a href='/news/news article 1'>News Article 1</a></li>
            <li><a href='/news/news article 2'>News Article 2</a></li>
            <li><a href='/news/news article 3'>News Article 3</a></li>
        </ul>
        */}
        {/* All you have to do is replace <a> tags with <Link> import from next js, The link tag even expects 
        an href property!  IMPORTANT: import Link from 'next/link'; 
        This keeps the SPA while the <a> tags make it no longer SPA by loading symbole becoming cross in top left*/}
        <ul>
            <li><Link href="/news/news article 1">News Article 1</Link></li>
            <li><Link href="/news/news article 2">News Article 2</Link></li>
        </ul>
    </Fragment>
    )
}

export default NewsPage;