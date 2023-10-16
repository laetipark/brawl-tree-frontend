import React from 'react';
import { useTranslation } from 'react-i18next';

import config from '~/config/config';

import styles from './stats.module.scss';

const MapStats = ({brawlers}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.brawlerStatsWrapper}>
      {brawlers?.map((brawler) => {
        return (
          <div
            key={`${brawler.brawlerID}`}
            className={styles.brawlerStatsItem}
          >
            <div className={styles.brawlerTitle}>
              <img
                src={`${config.assets}/brawlers/pins/${brawler.brawlerID}.webp`}
                alt={'브롤러'}
              />
              <div>
                {t(`brawler.brawler.${brawler.name}`)}
              </div>
            </div>
            <div className={styles.brawlerContent}>
              <div>
                <span>Pick</span>
                <span className={styles.textRate}>{brawler.pickRate}%</span>
              </div>
              <div>
                <span>Win</span>
                <span className={styles.textRate}>
                  {brawler.victoryRate}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MapStats;
