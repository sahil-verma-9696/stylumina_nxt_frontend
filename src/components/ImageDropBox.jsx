import React from "react";
import { useDropzone } from "react-dropzone";
import { useImageUpload } from "./../hooks/useImageUpload";
import FilePreview from "./FilePreview";
import DescriptionInput from "./DescriptionInput";
import SubmitButton from "./SubmitButton";
import FeatureTable from "./FeatureTable";

const ImageDropBox = () => {
  const {
    file,
    loading,
    description,
    apiResponse,
    onDrop,
    setDescription,
    handleSubmit,
    removeFile,
  } = useImageUpload();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center">
      {/* Drop Box */}
      {!file && (
        <div
          {...getRootProps()}
          className="w-full h-64 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-100"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-500">Drop the file here...</p>
          ) : (
            <p className="text-gray-500">
              Drag & drop an image, or{" "}
              <span className="text-blue-500 underline cursor-pointer">browse</span>
            </p>
          )}
        </div>
      )}

      {/* Preview */}
      {file && (
        <FilePreview file={file} removeFile={removeFile} />
      )}

      {/* Description Input */}
      {file && (
        <DescriptionInput
          description={description}
          setDescription={setDescription}
        />
      )}

      {/* Submit Button */}
      {file && (
        <SubmitButton loading={loading} handleSubmit={handleSubmit} />
      )}

      {/* Display the API Response Table */}
      {apiResponse && <FeatureTable featureData={apiResponse} />}
    </div>
  );
};

export default ImageDropBox;
