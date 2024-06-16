import logo from '../../assets/logo.svg';
import support from '../../assets/support.svg';
import dropDown from '../../assets/dropDown.svg';
import Typography from '../../components/Typography';
import { TYPOGRAPHY_VARIANTS } from '../../components/Typography/constants';
import styles from './header.module.css';

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
          <img src={support} width="21px" height="21px" />
          <Typography variant={TYPOGRAPHY_VARIANTS.body2}>Support</Typography>
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.profile} />
          <Typography style={inlineStyles.profile} variant={TYPOGRAPHY_VARIANTS.subtitle1}>Jane</Typography>
          <img src={dropDown} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

const inlineStyles = {
  title: {
    color: '#FFFFFF',
  },
  profile: {
    color: '#FFFFFF',
  }
};

export default Header;
