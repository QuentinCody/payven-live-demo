import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/components/tremor/ui/navigation/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} p-4 sm:px-6 sm:pb-10 sm:pt-10 lg:px-10 lg:pt-7`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="system" attribute="class">
          <div className="flex mx-auto max-w-screen-2xl">
            <Sidebar />
            <main className="flex-1 p-4 sm:px-6 sm:pb-10 sm:pt-10 lg:px-10 lg:pt-7 ml-72">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
