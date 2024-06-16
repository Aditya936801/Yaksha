import styles from './button.module.css';

const Button = ({ title, onClick, inverted = false }) => {
  return (
    <button
      style={{
        backgroundColor: inverted ? 'white' : '#F59322',
        color: inverted ? '#F59322' : 'white',
        border: inverted ? '1px solid #F59322' : '',
      }}
      className={styles.container}
      onClick={onClick}
    >
      <div className={styles.title}>{title}</div>
    </button>
  );
};

export default Button;
