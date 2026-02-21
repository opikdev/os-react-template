import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <div className="flex items-center gap-8">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            alt="React"
            className="h-20 transition-all hover:drop-shadow-[0_0_24px_#61dafbaa]"
          />
        </a>
        <span className="text-4xl font-extralight text-zinc-600">+</span>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            alt="Vite"
            className="h-20 transition-all hover:drop-shadow-[0_0_24px_#646cffaa]"
          />
        </a>
        <span className="text-4xl font-extralight text-zinc-600">+</span>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:drop-shadow-[0_0_24px_#38bdf8aa]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-20 w-20"
          >
            <path
              d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.35 10.82 14.48 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.65 7.18 14.52 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.35 16.82 9.48 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.65 13.18 9.52 12 7 12z"
              fill="#38BDF8"
            />
          </svg>
        </a>
      </div>

      <h1 className="mt-10 text-5xl font-bold tracking-tight">
        React + Vite + Tailwind
      </h1>
      <p className="mt-3 text-lg text-zinc-400">
        Starter template ready to go.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
        >
          React Docs
        </a>
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
        >
          Vite Docs
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
        >
          Tailwind Docs
        </a>
      </div>

      <p className="mt-16 text-sm text-zinc-600">
        Edit <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-zinc-400">src/App.tsx</code> to get started.
      </p>
    </div>
  );
}

export default App;
