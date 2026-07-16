import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about our Next.js application.",
};

export default function About() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>About Page</h1>
      <p>This page demonstrates page-specific SEO metadata.</p>
    </main>
  );
}