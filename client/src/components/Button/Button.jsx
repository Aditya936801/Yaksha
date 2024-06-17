import styles from './button.module.css';

const Button = ({ title, onClick, inverted = false, leftSide = null, invertedColor = '' }) => {
  return (
    <button
      style={{
        backgroundColor: inverted ? 'white' : '#F59322',
        color: inverted ? invertedColor || '#F59322' : 'white',
        border: '2px solid #F59322',
      }}
      className={styles.container}
      onClick={onClick}
    >
      {leftSide}
      <div className={styles.title}>{title}</div>
    </button>
  );
};

export default Button;
