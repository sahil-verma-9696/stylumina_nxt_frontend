const SubmitButton = ({ loading, handleSubmit }) => {
    return (
      <button
        onClick={handleSubmit}
        className={`mt-4 w-full py-2 px-4 rounded-md ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    );
  };
  
  export default SubmitButton;
  