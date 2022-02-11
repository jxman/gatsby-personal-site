import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">{children}</main>
      <Footer />
    </div>
  )
}

export default layout
