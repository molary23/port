export {}

declare global {
  type RegularObject = Record<string, unknown>

  interface InfoContextProps {
    children: ReactNode
  }
}
