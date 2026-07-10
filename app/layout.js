import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider} from '@clerk/nextjs'
import { Toaster } from "sonner";

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Splitify",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      {/* <link rel="stylesheet" href="" /> */}
    </head>
      <body className={`${inter}`} >
        <ClerkProvider>

          <ConvexClientProvider>

            <Header/>
            <main className="min-h-screen">{children}</main>
            <Toaster richColors/>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
