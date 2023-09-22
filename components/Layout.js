
import Head from "next/head"

const Layout = ({ children }) => {
    return (
        <main className="w-full min-h-screen h-auto flex flex-col items-center justify-center
        gap-8 bg-gray-100">
            <Head>
                <title>Quiz App</title>
            </Head>
            {children}
        </main>
    )
}

export default Layout