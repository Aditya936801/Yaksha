import Header from './Header';
import PropTypes from 'prop-types';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.containerBody}>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
