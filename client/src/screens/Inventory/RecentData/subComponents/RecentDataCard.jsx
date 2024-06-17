import styles from './subComponents.module.css';
import Typography from '../../../../components/Typography';
import { TYPOGRAPHY_VARIANTS } from '../../../../components/Typography/constants';
import PropTypes from 'prop-types';

const RecentDataCard = (props) => {
  const { category = '', displayValue = '' } = props;
  return (
    <div className={styles.recentCardContainer}>
      <Typography variant={TYPOGRAPHY_VARIANTS.heading2}>{displayValue}</Typography>
      <Typography variant={TYPOGRAPHY_VARIANTS.subtitle1} style={inlineStyles.category}>
        {category}
      </Typography>
    </div>
  );
};

const inlineStyles = {
  category: {
    color: '#FF9926',
    textTransform: 'uppercase',
    marginTop: 5,
  },
};

RecentDataCard.defaultProps = {
  category: '',
  displayValue: '',
};

RecentDataCard.propTypes = {
  category: PropTypes.string,
  displayValue: PropTypes.string,
};

export default RecentDataCard;
