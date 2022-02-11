import React, { useState } from "react"
import axios from "axios"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const MyForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/2fc25267-0255-4cd9-951d-38b852d9391e",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <Layout>
      <div>
        <h1 className="mb-5 text-5xl font-bold ">Contact Me</h1>
        <p className=" mb-5">
          Find me on my LinkedIn below or send me a message here:{" "}
        </p>

        <form onSubmit={handleOnSubmit}>
          <div className="form-control">
            <div className="flex flex-auto ">
              <div className="basis-1/2 pr-1 mb-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="basis-1/2 pl-1 mb-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <input
              type="text"
              name="message"
              placeholder="Your Message"
              className="textarea h-40 textarea-bordered"
            />
            <div className="flex right justify-end px-4 py-2 gap-4">
              <button type="submit" className="btn btn-outline btn-primary">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default MyForm
