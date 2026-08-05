import {SITE_URL, SITE_NAME} from '../utils/constants'
import {useState} from 'react'

export const Nav = () => {
  const [focus, setFocus]: [
      boolean,
      React.Dispatch<React.SetStateAction<boolean>>,
    ] = useState(false),
    [display, setDisplay]: [
      boolean,
      React.Dispatch<React.SetStateAction<boolean>>,
    ] = useState(false),
    [isActive, setIsActive]: [
      boolean,
      React.Dispatch<React.SetStateAction<boolean>>,
    ] = useState(false)

  return (
    <header>
      <nav className="relative bg-brand-blue-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                aria-controls="mobile-menu"
                className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                onClick={() => setIsActive(!isActive)}
                id="mobile-menu-button"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 in-aria-expanded:hidden"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 not-in-aria-expanded:hidden"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-between justify-end">
              <div className="flex shrink-0 items-center">
                <img
                  src="/hassanadeola-logo.png"
                  alt={SITE_NAME}
                  className="h-8 w-auto"
                  loading="eager"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#" aria-current="page" className="nav-link-cta">
                    Home
                  </a>
                  <a href="#" className="nav-link-cta">
                    About
                  </a>
                  <a href="#" className="nav-link-cta">
                    Skills
                  </a>
                  <a href="#" className="nav-link-cta">
                    Projects
                  </a>
                  <a href="#" className="nav-link-cta">
                    Services
                  </a>
                  <a href="#" className="nav-link-cta">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          hidden={isActive}
          className="block sm:hidden"
          aria-labelledby="mobile-menu-button"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              aria-current="page"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            >
              Home
            </a>
            <a href="#" className="nav-mobile-link-cta">
              About
            </a>
            <a href="#" className="nav-mobile-link-cta">
              Skills
            </a>
            <a href="#" className="nav-mobile-link-cta">
              Projects
            </a>
            <a href="#" className="nav-mobile-link-cta">
              Services
            </a>
            <a href="#" className="nav-mobile-link-cta">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
