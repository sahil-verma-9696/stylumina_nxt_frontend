const DescriptionInput = ({ description, setDescription }) => {
    return (
      <textarea
        className="mt-4 w-full h-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description (optional)"
      ></textarea>
    );
  };
  
  export default DescriptionInput;
  