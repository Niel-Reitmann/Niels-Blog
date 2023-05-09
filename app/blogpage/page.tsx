import Posts from "../components/Posts"

export default function blogpage() {
  return (
    <main className="px-6 mx-auto flex items-center justify-center h-screen">
      <div className="w-full max-w-2xl mx-auto flex items-center justify-center h-screen">
      {/* <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome to Niel's blog
      </p> */}

        <Posts />

      </div>
    </main>
  )
}