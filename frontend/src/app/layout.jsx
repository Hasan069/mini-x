import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
export const metadata = {
  title: "X-mini",
  description: "Created by Tanvir Hasan Serazy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
