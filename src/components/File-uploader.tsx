import React, { useRef, useState } from "react";
import CSVReader from "react-csv-reader";

export default function FileUploader({ handleUpload }: any) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<Boolean>(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const handleFileButtonClick = () => {
    inputRef.current?.click();
  };
  const handelFileUpload = (data: any, fileInfo: any) => {
    try {
      setFileName(fileInfo.name);
      handleUpload(data);
      setError(false);
    } catch (error: any) {
      setError(true);
    }
  };

  return (
    <div
      className={`flex border-[1px] ${
        error ? "border-[#D23131]" : " border-[#494949]"
      } w-min-[300px] max-w-fit h-[44px] items-center rounded-[8px] gap-[10px] px-4  justify-between`}
    >
      <div className="text-sm text-[#999999]">
        {fileName ? fileName : "No file Selected"}
      </div>
      <div className="h-full bg-[#494949] w-[1px]"></div>
      <button className="text-sm  font-light" onClick={handleFileButtonClick}>
        Select file
      </button>

      <CSVReader
        onFileLoaded={handelFileUpload}
        ref={inputRef}
        cssClass="hidden"
      />
    </div>
  );
}
