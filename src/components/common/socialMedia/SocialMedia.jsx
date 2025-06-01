import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = () => {
  const socialIcons = [
    { icon: faFacebookF, link: "#" },
    { icon: faDribbble, link: "#" },
    { icon: faInstagram, link: "#" },
    { icon: faLinkedin, link: "#" },
    { icon: faBehance, link: "#" },
  ];
  return (
    <div>
      {socialIcons.map((item, index) => (
        <a href={item.link} className={``} key={index}>
          <FontAwesomeIcon
            icon={item.icon}
            size="xl"
            className={`w-4.5 h-4.5 p-3.75 text-[#9929fb] hover:bg-[#9929fb] hover:text-white rounded-md
            }`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
