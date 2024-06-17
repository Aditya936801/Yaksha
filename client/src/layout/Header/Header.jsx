import logo from '../../assets/logo.svg';
import support from '../../assets/support.svg';
import Typography from '../../components/Typography';
import { TYPOGRAPHY_VARIANTS } from '../../components/Typography/constants';
import styles from './header.module.css';
import ProfileMenu from './subComponents/ProfileMenu';

const Header = () => {
  return (
    <div className={styles.container}>
      {/* Left side */}
      <div className={styles.leftSide}>
        <img src={logo} width='47px' height='47px' />
        <Typography style={inlineStyles.title} variant={TYPOGRAPHY_VARIANTS.heading4}>
          Admin Console
        </Typography>
        <div className={styles.badge}>
          <Typography variant={TYPOGRAPHY_VARIANTS.body1}>Admin View</Typography>
        </div>
      </div>
      {/* Right side */}
      <div className={styles.rightSide}>
        <div className={styles.supportSection}>
          <img src={support} width='21px' height='21px' />
          <Typography variant={TYPOGRAPHY_VARIANTS.body2}>Support</Typography>
        </div>
        <ProfileMenu />
      </div>
      <div></div>
    </div>
  );
};

const inlineStyles = {
  title: {
    color: '#FFFFFF',
  },
};

export default Header;
