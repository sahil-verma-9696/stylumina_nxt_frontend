import React, { useEffect, useState } from "react";

const CustomAlert = ({ message, type = "success", duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!isVisible) return null;

  const alertStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-lg ${alertStyles[type]} flex items-center space-x-2`}
    >
      <span>{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
        className="text-xl font-bold ml-4 hover:text-gray-300 focus:outline-none"
      >
        ×
      </button>
    </div>
  );
};

export default CustomAlert;
