import PropTypes from 'prop-types';
import { TYPOGRAPHY_VARIANTS } from './constants';
import styles from './typography.module.css';

const Typography = ({ variant, children, style }) => {
  return (
    <div className={styles[variant]} style={style}>
      {children}
    </div>
  );
};

Typography.defaultProps = {
  children: '',
  variant: '',
  style: {},
};

Typography.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  variant: PropTypes.oneOf(Object.values(TYPOGRAPHY_VARIANTS)),
  style: PropTypes.object,
};
export default Typography;
