import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Quote = () => {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        Food is everything we are. It is an extension nationalist feeling,
        ethnic feeling, your personal history, your province, your region, your
        tribe, your grandma. Its inseperable from those from the get-go.
      </p>
      <p className="quote-author">-Anthony Bourdain</p>
    </div>
  );
};

export default Quote;
