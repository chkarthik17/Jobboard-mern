import { useEffect, useState } from "react";
import { fetchFiles } from "../api/filesApi";
import FileCard from "../components/files/FileCard";

const Files = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles().then(res => setFiles(res.data));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {files.map(file => (
        <FileCard key={file._id} file={file} />
      ))}
    </div>
  );
};

export default Files;
