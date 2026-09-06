import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    console.log("Document")
    
    return (
        <Html>
            <Head />
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}