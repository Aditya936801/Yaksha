import Typography from '../../../components/Typography';
import { TYPOGRAPHY_VARIANTS } from '../../../components/Typography/constants';
import dropDown from '../../../assets/dropDown.svg';
import styles from './subComponents.module.css';
import { useState } from 'react';

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer} onClick={handleMenu}>
        <div className={styles.profile} />
        <Typography style={inlineStyles.profile} variant={TYPOGRAPHY_VARIANTS.subtitle1}>
          Jane
        </Typography>
        <img
          className={isMenuOpen ? styles.dropDownOpen : styles.dropDownClose}
          src={dropDown}
          alt='profile-toggle'
        />
      </div>
      {isMenuOpen && (
        <div className={styles.menu}>
          {['My Account', 'Others'].map((el) => {
            return (
              <div className={styles.menuItem} key={el} onClick={handleMenu}>
                {el}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const inlineStyles = {
  profile: {
    color: '#FFFFFF',
  },
};

export default ProfileMenu;
