import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <footer className="footer-container">
      <p className="footer-text">Created by {props.name}</p>
      <p className="footer-text">Mi contacto es: {props.contact}</p>
      <p className="footer-text">Mi correo es: {props.email}</p>
      <p className="footer-text">Mi usuario es: {props.user}</p>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  name: 'Kruger',
  contact: 593999999999,
  email: 'juan@juan.com',
  user: '@juan',
};
