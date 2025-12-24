import { useEffect, useState } from "react";
import { fetchNews } from "../api/newsApi";
import NewsCard from "../components/news/NewsCard";

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews()
      .then(res => setNews(res.data))
      .catch(() => setError("Failed to load news"));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      <h2>Trending News</h2>

      <div
        style={{
          display: "flex",
          gap: 16,
          overflowX: "auto",
          paddingTop: 10
        }}
      >
        {Array.isArray(news) &&
          news.map(item => (
            <NewsCard key={item._id} news={item} />
          ))}
      </div>
    </div>
  );
};

export default News;
