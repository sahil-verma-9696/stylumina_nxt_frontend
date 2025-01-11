import { useState, useCallback } from "react";

// Helper function to convert image file to Base64
function imageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]); // Return Base64 string without the 'data:image/*;base64,' part
    reader.onerror = (error) => reject(error);
  });
}

export const useImageUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [apiResponse, setApiResponse] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const uploadedFile = acceptedFiles[0];
      const filePreview = Object.assign(uploadedFile, {
        preview: URL.createObjectURL(uploadedFile),
      });
      setFile(filePreview);
    }
  }, []);

  const removeFile = () => {
    setFile(null);
    setDescription("");
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("No file selected!");
      return;
    }

    setLoading(true);
    try {
      const base64Data = await imageToBase64(file);
      const apiEndpoint = "https://0cec-27-4-162-76.ngrok-free.app/stylesense/api/feature_extraction/extract_features/";
      const requestData = {
        prod_img_bin_data: base64Data,
        description: description || "",
      };

      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const result = await response.json();
        setApiResponse(result.feature_data);
        alert("Submission successful!");
      } else {
        const errorResponse = await response.text();
        console.error("API Error:", errorResponse);
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data. Please try again.");
    }
    setLoading(false);
  };

  return {
    file,
    loading,
    description,
    apiResponse,
    onDrop,
    setDescription,
    handleSubmit,
    removeFile,
  };
};
