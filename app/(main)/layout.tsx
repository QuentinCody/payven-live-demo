
import {usePathname} from "next/navigation";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/components/tremor/ui/navigation/Sidebar";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})



// export default function Layout({
//     children,
//   }: Readonly<{
//     children: React.ReactNode
//   }>) {
//     return (
//       <div className="relative">
//         <main className="p-4 sm:px-6 sm:pb-10 sm:pt-10 lg:px-10 lg:pt-7">
//           {children}
//         </main>
//       </div>
//     )
//   }


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950`}
        suppressHydrationWarning
      >
        <div className="mx-auto max-w-screen-2xl">
          <ThemeProvider defaultTheme="system" attribute="class">
            <Sidebar />
            <main className="lg:pl-72">{children}</main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}