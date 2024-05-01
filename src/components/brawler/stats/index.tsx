import React from 'react';

import styles from './index.module.scss';
import config from '~/config/config';
import { useTranslation } from 'react-i18next';

export const BrawlerStats = ({ brawler, stats, maps }) => {
  const { t } = useTranslation();

  const brawlerTrophy = stats.find(({ brawlerID, matchType }) => {
    return brawlerID === String(brawler.id) && Number(matchType) === 0;
  });
  const brawlerRanked = stats.find(({ brawlerID, matchType }) => {
    return brawlerID === String(brawler.id) && Number(matchType) === 2;
  });

  const filterBrawler = maps
    .filter(({ brawlerID }) => brawlerID === brawler.id)
    .slice(0, 10);

  return (
    <div className={styles.brawlerStatsWrapper}>
      <div className={styles.brawlerStatsSummaryBox}>
        <div>
          <div>
            <img
              src={`${config.assets}/modes/icon/trophy.webp`}
              alt={'트로피'}
            />
            <div>
              <div className={styles.brawlerRateTitle}>
                {t('brawler.stats.trophyLeaguePick')}
              </div>
              <div className={styles.brawlerRateContent}>
                <span>
                  {Math.round(brawlerTrophy?.pickRate * 100) / 100.0 || 0}
                </span>
                <span>%</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={`${config.assets}/modes/icon/trophy.webp`}
              alt={'트로피'}
            />
            <div>
              <div className={styles.brawlerRateTitle}>
                {t('brawler.stats.trophyLeagueWin')}
              </div>
              <div className={styles.brawlerRateContent}>
                <span>
                  {Math.round(brawlerTrophy?.victoryRate * 100) / 100.0 || 0}
                </span>
                <span>%</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={`${config.assets}/modes/icon/powerLeague.webp`}
              alt={'powerLeague'}
            />
            <div>
              <div className={styles.brawlerRateTitle}>
                {t('brawler.stats.powerLeaguePick')}
              </div>
              <div className={styles.brawlerRateContent}>
                <span>
                  {Math.round(brawlerRanked?.pickRate * 100) / 100.0 || 0}
                </span>
                <span>%</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={`${config.assets}/modes/icon/powerLeague.webp`}
              alt={'powerLeague'}
            />
            <div>
              <div className={styles.brawlerRateTitle}>
                {t('brawler.stats.powerLeagueWin')}
              </div>
              <div className={styles.brawlerRateContent}>
                <span>
                  {Math.round(brawlerRanked?.victoryRate * 100) / 100.0 || 0}
                </span>
                <span>%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statsSummaryWrapper}>
        {filterBrawler.map(({ mapID, mapName, mode, pickRate, victoryRate }) => {
          return (
            <a
              key={mapID}
              className={styles.statsSummaryMapButton}
              href={`../maps/${mapID}`}
            >
              <img src={`${config.assets}/modes/icon/${mode}.webp`} alt={mode} />
              <span style={{ fontWeight: 600 }}>
              {t(`map.map.${mapID}`) || mapName}
            </span>
              <div>
                <span>Pick</span>
                <span style={{ fontWeight: 600 }}>{pickRate}</span>
                <span>%</span>
              </div>
              <div>
                <span>Win</span>
                <span style={{ fontWeight: 600 }}>{victoryRate}</span>
                <span>%</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
