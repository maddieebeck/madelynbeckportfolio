import "../sass/global.scss";

export const metadata = {
  title: "Madelyn Beck",
  description:
    "A digital Portfolio created by Madelyn Beck to document her experience, skills, an dpassion projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
