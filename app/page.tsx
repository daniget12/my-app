export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center sm:items-start justify-between bg-white dark:bg-black rounded-2xl shadow-xl p-8 sm:p-16 max-w-3xl w-full">
        
        {/* Inline SVG logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="40"
          viewBox="0 0 283 64"
          className="dark:invert mb-8"
        >
          <path
            d="M141.5 0L283 64H0L141.5 0z" 
            fill="#000"
          />
          {/* You can replace the path with any SVG path for your logo */}
        </svg>

        {/* Heading and description */}
        <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug text-black dark:text-zinc-50">
            AMBO UNIVERSITY PAGE
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
            Visit our{" "}
            <a
              href="https://t.me/AmboU_confession"
              className="font-medium text-blue-600 dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              confession channel
            </a>{" "}
            or use our{" "}
            <a
              href="https://t.me/AmboUni_confession_bot"
              className="font-medium text-blue-600 dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              confession bot
            </a>.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 text-base font-medium">
          <a
            href="https://t.me/AUDating_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 transition-all"
          >
            Go to our dating bot
          </a>
          <a
            href="https://t.me/Au_confession_admin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 rounded-full px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            Contact Admin
          </a>
        </div>
      </main>
    </div>
  );
}



/*Summary workflow after editing VS Code

git status → check changes

git add . → stage changes

git commit -m "message" → commit changes

git push → update GitHub

vercel --prod → deploy to production */
