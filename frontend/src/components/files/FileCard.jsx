const FileCard = ({ file }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img
        src={file.thumbnail}
        alt=""
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{file.title}</h3>
      <button
        onClick={() => window.open(file.fileUrl)}
        className="mt-2 w-full bg-purple-600 text-white py-2 rounded"
      >
        Read
      </button>
    </div>
  );
};

export default FileCard;
