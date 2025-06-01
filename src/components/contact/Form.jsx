import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Form = () => {
  return (
    <div className="">
      <p className="text-lg font-normal text-[#87909D] mt-12.5">
        There are many variations of passages of Lorem Ipsu available, but the
        majority have suffered alte.
      </p>
      <div>
        <form className="flex flex-col gap-4 mt-4">
          {/* WORKING */}
          <label /* Name */ class="floating-label border-0 ">
            <input
              type="text"
              placeholder="Name*"
              class="input input-lg border-0 border-b-2 border-gray-100 w-full"
              required
            />
            <span className="bg-red-500">Name*</span>
          </label>
          <label /* Email */ class="floating-label border-0 ">
            <input
              type="email"
              placeholder="Email*"
              class="input input-lg border-0 border-b-2 border-gray-100 w-full"
              required
            />
            <span className="bg-red-500">Email*</span>
          </label>
          <label /* Location */ class="floating-label border-0 ">
            <input
              type="text"
              placeholder="Location*"
              class="input input-lg border-0 border-b-2 border-gray-100 w-full"
              required
            />
            <span className="bg-red-500">Location*</span>
          </label>

          {/* WORKING */}
          <div className="flex">
            <label /* Budget */ class="floating-label border-0 w-[35%]">
              <input
                type="text"
                placeholder="Budget*"
                class="input input-lg border-0 border-b-2 border-gray-100 "
                required
              />
              <span className="bg-red-500">Budget*</span>
            </label>
            <label /* Subject */ class="floating-label border-0 w-full ms-6">
              <input
                type="text"
                placeholder="Subject*"
                class="input input-lg border-0 border-b-2 border-gray-100 w-full"
                required
              />
              <span className="bg-red-500">Subject*</span>
            </label>
          </div>

          <label /* Message */ class="floating-label border-0 ">
            <textarea
              type="text"
              placeholder="Message*"
              class="input input-lg border-0 border-b-2 border-gray-100 w-full"
              required
            />
            <span className="bg-red-500">Message*</span>
          </label>
          <button
            type="submit"
            className="btn btn-primary text-[16px] font-semibold w-35.25 h-12 rounded-sm"
          >
            Submit <FontAwesomeIcon icon={faPaperPlane} size="xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
