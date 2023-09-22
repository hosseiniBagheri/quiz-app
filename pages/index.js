import Link from "next/link"
import Layout from "@/components/Layout"


const HomePage = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold text-gray-800">Quiz App</h1>
            <Link href="/quiz">
                <button className="rounded-lg ring-1 text-blue-500 py-3 px-6 font-semibold transition-all hover:bg-blue-500 hover:text-white">Start Quiz</button>
            </Link>
        </Layout>
    )
}

export default HomePage