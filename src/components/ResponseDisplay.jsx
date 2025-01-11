import React from "react";

const ResponseDisplay = ({ response }) => {
  return (
    <div className="w-full h-full bg-gray-500 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-4">API Response</h2>
      {response ? (
        <pre className="bg-gray-400 p-4 rounded-md text-sm overflow-scroll">
          {JSON.stringify(response, null, 2)}
        </pre>
      ) : (
        <p className="text-gray-500">
          No response yet. Upload an image to see the response.
        </p>
      )}
    </div>
  );
};

export default ResponseDisplay;
