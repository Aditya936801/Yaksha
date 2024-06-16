import SectionTitle from '../../../components/SectionTitle';
import styles from './averageMSRP.module.css';
import AverageMSRPBarGraph from './subComponents/AverageMSRPBarGraph';
import AverageMSRPFilterButtons from './subComponents/AverageMSRPFilterButtons';

const AverageMSRP = () => {
  return (
    <div>
      <div className={styles.titleWrapper}>
        <SectionTitle title='Average MSRP in USD' />
        <AverageMSRPFilterButtons />
      </div>
      <AverageMSRPBarGraph />
    </div>
  );
};

export default AverageMSRP;
