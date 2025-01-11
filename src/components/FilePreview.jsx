const FilePreview = ({ file, removeFile }) => {
  return (
    <div className="mt-4 w-full">
      <div className="relative w-32 h-32 mx-auto">
        <img
          src={file.preview}
          alt={file.name}
          className="w-full h-full object-cover rounded-md"
        />
        <button
          onClick={removeFile}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FilePreview;
