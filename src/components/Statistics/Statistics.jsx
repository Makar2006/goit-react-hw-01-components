import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.statisticsTitle}>{title}</h2>

      <ul className={css.statisticsStatList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.statisticsItem} key={id}>
              <span className={css.statisticsLabel}>{label}</span>
              <span className={css.statisticsPercentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
