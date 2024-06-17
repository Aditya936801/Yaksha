import Typography from '../../../../components/Typography';
import { TYPOGRAPHY_VARIANTS } from '../../../../components/Typography/constants';
import styles from './subComponents.module.css';
import arrow from '../../../../assets/arrow.svg';
import { useState } from 'react';

const DealerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (e) => {
    e?.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Typography variant={TYPOGRAPHY_VARIANTS.heading3}>Select Dealer</Typography>
      <div className={styles.menuWrapper} onClick={handleMenu}>
        <Typography variant={TYPOGRAPHY_VARIANTS.subtitle2}>AAA MITSUBISHI DEALER</Typography>
        <img
          className={isMenuOpen ? styles.dropDownOpen : styles.dropDownClose}
          src={arrow}
          alt='arrow'
        />
        {isMenuOpen && (
          <div className={styles.menu}>
            {['Menu Item 1', 'Menu Item 2'].map((el) => {
              return (
                <div className={styles.menuItem} key={el} onClick={handleMenu}>
                  {el}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DealerMenu;
