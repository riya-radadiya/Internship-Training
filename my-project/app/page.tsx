"use client";

import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import FocusInput from "./components/FocusInput";

const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>React Advanced Concepts</h1>

      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <HeavyComponent />
        </Suspense>

        <br />

        <FocusInput />
      </ErrorBoundary>
    </main>
  );
}