import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
import ClientOnly from "./ClientOnly"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-3 pb-12 flex-grow">{children}</main>
      <Footer />
      <ClientOnly>
        <ScrollToTop />
      </ClientOnly>
    </div>
  )
}

export default Layout
