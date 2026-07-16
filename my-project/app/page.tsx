"use client";

import { useState } from "react";

const messages = {
  en: {
    title: "Welcome",
    description: "This is an internationalized Next.js app.",
  },
  hi: {
    title: "स्वागत है",
    description: "यह एक बहुभाषी Next.js एप्लिकेशन है।",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  return (
    <main style={{ padding: 30 }}>
      <h1>{messages[language].title}</h1>

      <p>{messages[language].description}</p>

      <button onClick={() => setLanguage("en")}>
        English
      </button>

      <button
        onClick={() => setLanguage("hi")}
        style={{ marginLeft: 10 }}
      >
        हिंदी
      </button>
    </main>
  );
}