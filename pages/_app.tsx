import LayOut from "@/Components/LayOut";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  )
}
