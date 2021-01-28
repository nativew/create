import styles from './styles.js';

const { bgGreen, black, reset } = styles;

const highlight = text => bgGreen + black + text + reset;

export default highlight;
