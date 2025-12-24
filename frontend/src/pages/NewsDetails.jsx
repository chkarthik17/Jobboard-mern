import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchNewsById } from "../api/newsApi";

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetchNewsById(id).then(res => setNews(res.data));
  }, [id]);

  if (!news) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{news.title}</h1>
      <img src={news.image} className="my-4 rounded" />
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetails;
