import "./globals.css";

export const metadata = {
  title: "Sai Charan | Full Stack Developer",
  description:
    "Portfolio website for Sai Charan showcasing full stack projects, skills, and contact details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
