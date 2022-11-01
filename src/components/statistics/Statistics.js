import PropTypes from 'prop-types'
import styles from './statistics.module.css'


function groupStats(statisticalData) {
  statisticalData = Object.values(
    statisticalData.reduce((acc, item) => {
      (
        acc[item.label] ||
        (acc[item.label] = { label: item.label, percentage: 0 })
      ).percentage += item.percentage;
      return acc;
    },{})
  )
  return statisticalData;
};

const Statistics = ({ title, stats}) => (

  <section className={styles.statistics}>
    {title ?<h2 className={styles.statistics__title}>{title}</h2> : null}

    <ul className={styles.statistics__list}>
      {groupStats(stats).map((el) =>

        (<li className={styles.statistics__item} style={{backgroundColor: getRandomColor()}} key={el.id}>
          <span className={styles.statistics__label}>{el.label}</span>
          <span className={styles.statistics__precentage}>{el.percentage}%</span>
        </li>))}
    </ul>
  </section>
);

// Statistics.defaultProps = {
//   title: ''
// }

Statistics.propTypes = {

  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let randomBgColor = '#';
  for (let i = 0; i < 6; i++) {
    randomBgColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomBgColor;
}



export default Statistics;
