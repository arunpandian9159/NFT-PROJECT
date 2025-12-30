import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

import images from "@/images";
import Form from "../components/account/Form";

const Account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className="min-h-screen py-20">
      <div className="w-[80%] max-md:w-[90%] mx-auto mb-12">
        <h1 className="text-5xl max-md:text-3xl font-bold mb-6 gradient-text">
          Profile settings
        </h1>
        <p className="text-slate-400 text-lg">
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className="w-[80%] max-md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 items-start">
        <div className="text-center cursor-pointer group" {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user1}
            alt="account upload"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-indigo-500 group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all"
          />
          <p className="mt-4 py-3 px-6 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full inline-block font-semibold hover:shadow-lg transition-shadow">
            Change Image
          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Account;
