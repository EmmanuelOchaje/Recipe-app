/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const TopChefs = ({ chef }) => {
  return (
    <div className="chef-card">
      <div className="chef-card-image">
        <img src={chef.img} alt="Name" className="imgchef" />
      </div>
      <div className="chef-card-info">
        <h3 className="chef-card-name">{chef.name}</h3>
        <p className="chef-card-descrption">
          Recipes: <b>{chef.recipe}</b>
        </p>
        <p className="chef-card-descrption">
          Cuisine: <b>{chef.cuisine}</b>
        </p>
        <p className="chef-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
        </p>
      </div>
    </div>
  );
};

export default TopChefs;
