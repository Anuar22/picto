import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { Element } from "react-scroll";

const Contact = () => {
  const contactData = [
    {
      icon: faLocationDot,
      title: "Address",
      description: "New Mexico, 31134",
    },
    {
      icon: faEnvelope,
      title: "My Email",
      description: "mymail@mail.com",
    },
    {
      icon: faPhone,
      title: "Call Me Now",
      description: "00-123 00000",
    },
  ];

  return (
    <div
      className="content min-lg:h-180 center z-10 p-10 min-lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
      id="contact"
    >
      <div className="flex flex-col-reverse min-lg:flex-row items-center justify-between w-full h-full">
        <div className="w-full min-lg:w-120.25 min-lg:h-136">
          <div className="min-xl:h-28.5 max-lg:hidden">
            <p className="text-[38px] font-semibold text-[#132238]">
              Let’s discuss your Project
            </p>
            <p className="text-lg line- font-normal text-[#87909D]">
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
          </div>
          <div className="w-full min-lg:w-84 min-lg:h-78 my-8.75 md:max-lg:flex justify-between">
            {contactData.map((item, index) => (
              <Address item={item} key={index} />
            ))}
          </div>
          <div className="w-full min-md:w-72 h-12 max-lg:text-center">
            <SocialMedia />
          </div>
        </div>
        <div className="w-full min-lg:w-140 min-lg:h-123 overflow-y-scroll">
          <p className="text-[38px] font-semibold text-[#132238] min-lg:hidden text-center section-title">
            Let’s discuss your Project
          </p>

          <Form />
        </div>
        {/* <div className="absolute end-20 w-5 h-full bg-white" /> */}
      </div>
    </div>
  );
};

export default Contact;
