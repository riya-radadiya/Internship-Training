import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Final Assessment",
  description: "Admin & User Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}