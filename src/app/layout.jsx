import "./globals.css";
import { site } from "@/data/site";

export const metadata = {
  title: {
    default: `${site.name} | Solar Energy Guides & Information`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}