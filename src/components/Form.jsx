"use client";

import postLinks from "@/services/postLinks";
import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postLinks({ title, url });
    setTitle("");
    setUrl("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="url">url</label>
        <input
          type="text"
          id="url"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default Form;
