/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = ({ links, close }) => {
  return (
    <div className="sidebar" onClick={close}>
      {links.map((lnk) => (
        <a href="#!" className="sidebar-link" key={lnk.name}>
          <span>
            <FontAwesomeIcon icon={lnk.icon} />
          </span>
          {lnk.name}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
