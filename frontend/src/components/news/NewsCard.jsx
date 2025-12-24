const NewsCard = ({ news }) => {
  return (
    <div className="min-w-[260px] bg-white rounded-xl shadow p-4">
      <img
        src={news.image}
        alt={news.title}
        className="h-40 w-full object-cover rounded-lg"
      />
      <h3 className="mt-2 font-semibold">{news.title}</h3>
      <p className="text-sm text-gray-600">{news.description}</p>
    </div>
  );
};

export default NewsCard;
