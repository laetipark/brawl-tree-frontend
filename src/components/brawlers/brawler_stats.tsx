import React from 'react';
import { useTranslation } from 'react-i18next';

import config from '~/config/config';

import styles from './brawler_stats.module.scss';

const BrawlerStats = ({ brawler, brawlerStats }) => {
  const { t } = useTranslation();

  const brawlerTL = brawlerStats.find((item) => {
    return (
      item.brawlerID === brawler.brawlerID.toString() && item.matchType === 0
    );
  });

  const brawlerPLSolo = brawlerStats.find((item) => {
    return (
      item.brawlerID === brawler.brawlerID.toString() && item.matchType === 2
    );
  });

  const brawlerPLTeam = brawlerStats.find((item) => {
    return (
      item.brawlerID === brawler.brawlerID.toString() && item.matchType === 3
    );
  });

  return (
    <div className={styles.brawlerStatsWrapper}>
      <div className={styles.brawlerTitle}>
        <img
          src={`${config.assets}/brawlers/profiles/${brawler.brawlerID}.webp`}
          alt={brawler.brawlerID}
        />
        <div>
          <h3>{t(`brawler.brawler.${brawler.name}`)}</h3>
          <span>
            {t(`brawler.brawlerRarity.${brawler.rarity}`)}
          </span>
          <span>-</span>
          <span>
            {t(`brawler.brawlerRole.${brawler.role}`)}
          </span>
        </div>
      </div>
      <div className={styles.brawlerContent}>
        <div>
          <div>
            <img
              src={`${config.assets}/modes/icon/trophyLeague.webp`}
              alt={'트로피'}
            />
            <div>
              <div className={styles.rateTitle}>
                {t('brawler.stats.trophyLeaguePick')}
              </div>
              <div className={styles.rateContent}>
                <span>
                  {Math.round(brawlerTL?.pickRate * 100) / 100.0 || 0}
                </span>
                <span>%</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={`${config.assets}/modes/icon/trophyLeague.webp`}
              alt={'트로피'}
            />
            <div>
              <div className={styles.rateTitle}>
                {t('brawler.stats.trophyLeagueWin')}
              </div>
              <div className={styles.rateContent}>
                <span>
                  {Math.round(brawlerTL?.victoryRate * 100) / 100.0 || 0}
                </span>
                <span>%</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src={`${config.assets}/modes/icon/powerLeague.webp`}
              alt={'powerLeague'}
            />
            <div>
              <div className={styles.rateTitle}>
                {t('brawler.stats.powerLeaguePick')}
              </div>
              <div className={styles.rateContent}>
                <span>
                  {Math.round(brawlerPLSolo?.pickRate * 100) / 100.0 || 0}
                </span>
                <span>%</span>
                <span>/</span>
                <span>
                  {Math.round(brawlerPLTeam?.pickRate * 100) / 100.0 || 0}
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
              <div className={styles.rateTitle}>
                {t('brawler.stats.powerLeagueWin')}
              </div>
              <div className={styles.rateContent}>
                <span>
                  {Math.round(brawlerPLSolo?.victoryRate * 100) /
                    100.0 || 0}
                </span>
                <span>%</span>
                <span>/</span>
                <span>
                  {Math.round(brawlerPLTeam?.victoryRate * 100) /
                    100.0 || 0}
                </span>
                <span>%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrawlerStats;
