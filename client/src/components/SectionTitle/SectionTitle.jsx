import Typography from '../Typography';
import PropTypes from 'prop-types';
import { TYPOGRAPHY_VARIANTS } from '../Typography/constants';

const SectionTitle = ({ title = '' }) => {
  return (
    <div>
      <Typography variant={TYPOGRAPHY_VARIANTS.heading3}>{title}</Typography>
    </div>
  );
};

SectionTitle.defaultProps = {
  title: '',
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
