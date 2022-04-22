// ourdomain.com/news/newsArticleDetail is this Route
// could also create a folder called newsArticle1 and put index.js for even further nesting
// This is a hardcoded route(newsArticleDetail.js), but we'd want it to be a dynamic route/page
// Create dynamic page by [] syntax, renamed to [newsId].js
//Now, when you go to localhost:3000/news1 or localhost:3000/news2, these pages both show
// this detail Page with an h1 of "The Detail Page!"

// Extract Dynamic Parameter such as news1 or news2 and display on the page -> done by custom hook of nextjs import
    // done by useRouter() hook but remember to extract by the name of the file
        // What I mean is that router.query.newsId, newsId is the name of the file with dynamic ability
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const extractRouteParam = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId
  
  return (
    <div>
      <h1>The Detail Page!</h1>
      <h2>The extracted dynamic route is {extractRouteParam}!</h2>
    </div>
  );
};

export default DetailPage;
