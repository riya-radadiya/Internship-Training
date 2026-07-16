"use client";

import { Button } from "@mui/material";
import styled from "styled-components";

const Card = styled.div`
  background: #2563eb;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 320px;
  margin-top: 20px;
`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        React Styling Demo
      </h1>

      <p className="text-gray-700">
        Tailwind CSS + Material UI + Styled Components
      </p>

      {/* Tailwind Button */}
      <button className="rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700">
        Tailwind Button
      </button>

      {/* Material UI Button */}
      <Button variant="contained" color="primary">
        Material UI Button
      </Button>

      {/* Styled Components */}
      <Card>
        <h2>Styled Component</h2>
        <p>This card is styled using styled-components.</p>
      </Card>
    </main>
  );
}