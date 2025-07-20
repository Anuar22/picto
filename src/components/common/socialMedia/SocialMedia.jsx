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
    { icon: faFacebookF, link: "#!" },
    { icon: faDribbble, link: "#!" },
    { icon: faInstagram, link: "#!" },
    { icon: faLinkedin, link: "#!" },
    { icon: faBehance, link: "#!" },
  ];
  return (
    <div>
      {socialIcons.map((item, index) => (
        <a href={item.link} className={``} key={index}>
          <FontAwesomeIcon
            icon={item.icon}
            size="xl"
            className={`w-4 h-4 xxs:w-4.5 xxs:h-4.5 xxs:p-3 lg:p-3.75 p-2.5 text-picto-primary hover:bg-picto-primary hover:text-white rounded-md
            }`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
