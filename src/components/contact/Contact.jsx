import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

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
    <div className="content h-180  center absolute z-10 start-[15.62%] p-22 bg-white rounded-2xl shadow-2xl ">
      <div className="flex items-center justify-between w-full h-full">
        <div className="w-120.25 h-136">
          <div className="h-28.5">
            <p className="text-[38px] font-semibold text-[#132238]">
              Let’s discuss your Project
            </p>
            <p className="text-lg line- font-normal text-[#87909D]">
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
          </div>
          {/* WORKING */}
          <div className="w-84 h-78 my-8.75">
            {contactData.map((item, index) => (
              <Address item={item} key={index} />
            ))}
          </div>
          <div className="w-72 h-12">
            <SocialMedia />
          </div>
        </div>
        <div className="w-140 h-123 overflow-y-scroll">
          <Form />
        </div>
        <div className="absolute end-20 w-5 h-full bg-white" />
      </div>
    </div>
  );
};

export default Contact;
