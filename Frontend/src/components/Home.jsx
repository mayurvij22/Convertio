import React, { useState } from "react";
import { FaRegFileWord } from "react-icons/fa";
import axios from "axios";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convert, setConvert] = useState("");
  const [downloadError, setDownloadError] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setConvert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/convertFile",
        formData,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      setSelectedFile(null);
      setConvert("File Converted Successfully");
      setDownloadError("");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setDownloadError("Error occurred: " + error.response.data.message);
      } else {
        setDownloadError("Error occurred while converting the file");
      }
      setConvert("");
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-10 py-6 md:px-60">
        <div className="flex h-screen items-center justify-center">
          <div className="border-2 border-dashed px-4 py-2 md:px-8 md:py-6 border-indigo-400 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">Word To PDF</h1>
            <p className="text-sm text-center mb-5">Convert the word to pdf</p>
            <div className="flex flex-col items-center space-y-4">
              <input
                className="hidden"
                accept=".doc,.docx"
                type="file"
                id="FileInput"
                onChange={handleFileChange}
              />
              <label
                className="w-full flex items-center justify-center px-4 py-6 bg-gray-100 text-gray-700 rounded-lg shadow-lg cursor-pointer border-blue-300 hover:bg-blue-700 duration-300 hover:text-white"
                htmlFor="FileInput"
              >
                <FaRegFileWord />
                <span className="text-2xl ml-2">
                  {selectedFile ? selectedFile.name : "Choose File"}
                </span>
              </label>
              <button
                onClick={handleOnSubmit}
                disabled={!selectedFile}
                className="text-white bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 disabled:pointer-events-none duration-300 font-bold px-4 py-2 rounded-lg"
              >
                Convert File
              </button>
              {convert && <p>{convert}</p>}
              {downloadError && <p className="text-red-500">{downloadError}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
