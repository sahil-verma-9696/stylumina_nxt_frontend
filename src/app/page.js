"use client";
import ImageDropBox from "@/components/ImageDropBox";
import ResponseDisplay from "@/components/ResponseDisplay";
import React, { useState } from "react";

export default function Home() {
  // State to store API response
  const [response, setResponse] = useState(null);

  // Function to handle the API response
  const handleUploadResponse = (res) => {
    setResponse(res);
  };
  return (
    <div className="flex min-h-screen bg-slate-600">
      {/* Left Side: Image Upload */}
      <div className="w-1/2 p-6 border-r border-gray-200">
        <h1 className="text-xl font-bold mb-6">Upload an Image</h1>
        <ImageDropBox onUpload={handleUploadResponse} />
      </div>

      
    </div>
  );
}
