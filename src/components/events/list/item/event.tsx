import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import useInterval from '~/hooks/use-interval.hook';

import config from '~/config/config';

import styles from './event.module.scss';

const EventItem = ({ event, type }) => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const nextTime = moment(type === 'end' ? event.endTime : event.startTime);
  const diffTime = {
    day: type === 'end' ? moment.duration(nextTime.diff(moment())).days() : 0,
    hour:
      type === 'end'
        ? moment.duration(nextTime.diff(moment())).hours()
        : Math.abs(moment.duration(nextTime.diff(moment())).hours()),
    minute:
      type === 'end'
        ? moment.duration(nextTime.diff(moment())).minutes()
        : Math.abs(moment.duration(nextTime.diff(moment())).minutes()),
  };

  useInterval(() => {
    diffTime.day =
      type === 'end' ? moment.duration(nextTime.diff(moment())).days() : 0;
    diffTime.hour =
      type === 'end'
        ? moment.duration(nextTime.diff(moment())).hours()
        : Math.abs(moment.duration(nextTime.diff(moment())).hours());
    diffTime.minute =
      type === 'end'
        ? moment.duration(nextTime.diff(moment())).minutes()
        : Math.abs(moment.duration(nextTime.diff(moment())).minutes());
  }, 1000);

  return (
    <div
      key={event.startTime?.toString()}
      className={styles.eventWrapper}
      onClick={() => {
        navigate(
          `${!/\/blossom.*/g.test(location.pathname) ? '' : '/blossom'}/maps/${
            event.mapID
          }`,
        );
      }}
    >
      <div>
        <div className={styles.eventTitle}>
          <img
            src={`${config.assets}/modes/icon/${event.mode}.webp`}
            alt={event.mode}
          />
          <div>
            <div>
              <span className={styles.content}>
                {t(`map.map.${event.mapID}`) || event.name}
              </span>
            </div>
            {type && (
              <div>
                <span className={styles.content}>
                  {`${
                    type === 'end'
                      ? t('map.event.endsIn')
                      : t('map.event.startsIn')
                  } ${diffTime.day}${t('map.event.d')} ${diffTime.hour}${t(
                    'map.event.h',
                  )} ${diffTime.minute}${t('map.event.m')}`}
                </span>
              </div>
            )}
          </div>
        </div>
        <div>
          <img
            className={styles.eventBanner}
            src={`${config.assets}/modes/banner/${event.mode}.webp`}
            alt={event.mode}
          />
        </div>
      </div>
    </div>
  );
};

export default EventItem;
