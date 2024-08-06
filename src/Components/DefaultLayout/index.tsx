import { ReactNode } from "react"
import { Header } from "../Header"

interface defaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: defaultLayoutProps) => {
  return (
    <>
      <Header />
      { children }
    </>
  )
}
