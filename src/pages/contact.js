import React from "react"
import { FaLinkedin } from "react-icons/fa"

import Layout from "../components/layout"

function contact() {
  return (
    <div>
      <Layout>
        <h1 className="mb-5 text-5xl font-bold ">Contact Me</h1>
        <p className=" mb-5">
          Fill out my form to contact me with any inquiries
        </p>
        <form>
          <div className="form-control ">
            <div className="flex flex-auto">
              <div className="basis-1/2 pr-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Last"
                  className="input input-bordered w-full"
                ></input>
              </div>
              <div className="basis-1/2 pl-1">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="first.last@email.com"
                  className="input input-bordered w-full"
                ></input>
              </div>
            </div>

            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea h-40 textarea-bordered"
              placeholder=""
            ></textarea>
          </div>
          <div className="flex right justify-end px-4 py-2 gap-4">
            <div>
              <a
                href="/contact#my-modal"
                class="btn btn-outline btn-secondary "
              >
                Submit
              </a>
              <a href="/contact#my-modal" class="btn btn-outline btn-primary ">
                Cancel
              </a>
              <div id="my-modal" class="modal">
                <div class="modal-box">
                  <p>
                    Thank you for your reaching out, however I am still working
                    on this feature. In the meantime let's connect on{" "}
                    <a href="https://www.linkedin.com/in/johnx/">
                      LinkedIn. <FaLinkedin className="inline text-2xl" />
                    </a>
                  </p>
                  <div class="modal-action">
                    <a href="/contact#" class="btn btn-outline btn-primary">
                      Ok
                    </a>
                    <a href="/contact#" class="btn btn-outline">
                      Close
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </div>
  )
}

export default contact
