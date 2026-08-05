import {noop} from '@utils/utils'
export default function Top() {
  return (
    <section className="bg-brand-blue-600 h-[45em] flex items-center justify-center">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-4xl font-bold">
          Hello<span className="text-emerald-400">,</span> I'm Adeola
        </h1>
        <h2 className="job-role">
          Full Stack Engineer <span>based in Ontario</span>
        </h2>
        <div className="flex">
          <button
            type="button"
            aria-controls="mobile-menu"
            className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            onClick={() => noop}
            id="mobile-menu-button"
          >
            Hire Me
          </button>
          <button
            type="button"
            aria-controls="mobile-menu"
            className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            onClick={() => noop}
            id="mobile-menu-button"
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  )
}
