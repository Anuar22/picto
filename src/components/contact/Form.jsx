import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Form = () => {
  return (
    <div className="">
      <p className="text-[14px] min-sm:text-lg font-normal text-[#87909D]">
        There are many variations of passages of Lorem Ipsu available, but the
        majority have suffered alte.
      </p>
      <div className="mx-2">
        <form className="flex flex-col gap-4 mt-4">
          <label /* Name */ className="floating-label border-0 ">
            <input
              type="text"
              placeholder="Name*"
              className="input input-lg border-0 border-b-2 border-gray-100 w-full"
              required
            />
            <span>Name*</span>
          </label>
          <label /* Email */ className="floating-label border-0 ">
            <input
              type="email"
              placeholder="Email*"
              className="input input-lg border-0 border-b-2 border-gray-100 w-full"
              required
            />
            <span>Email*</span>
          </label>
          <label /* Location */ className="floating-label border-0 ">
            <input
              type="text"
              placeholder="Location*"
              className="input input-lg border-0 border-b-2 border-gray-100 w-full"
              required
            />
            <span>Location*</span>
          </label>

          <div className="flex">
            <label /* Budget */ className="floating-label border-0 w-[35%]">
              <input
                type="text"
                placeholder="Budget*"
                className="input input-lg border-0 border-b-2 border-gray-100 "
                required
              />
              <span>Budget*</span>
            </label>
            <label
              /* Subject */ className="floating-label border-0 w-full ms-6"
            >
              <input
                type="text"
                placeholder="Subject*"
                className="input input-lg border-0 border-b-2 border-gray-100 w-full"
                required
              />
              <span>Subject*</span>
            </label>
          </div>

          <label /* Message */ className="floating-label border-0 ">
            <input
              type="text"
              placeholder="Message*"
              className="input input-lg border-0 border-b-2 border-gray-100 w-full"
              required
            />
            <span>Message*</span>
          </label>
          <button
            type="submit"
            className="btn btn-primary text-[16px] font-semibold w-35.25 h-12 rounded-sm mt-5 max-sm:12.5 min-[1032px]:mt-12.5 max-lg:mx-auto"
          >
            Submit <FontAwesomeIcon icon={faPaperPlane} size="xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
