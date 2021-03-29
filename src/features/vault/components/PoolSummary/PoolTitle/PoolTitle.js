import React, { memo, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const PoolTitle = ({ name, logo, description, launchpool, buyTokenUrl, addLiquidityUrl }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid item xs={3} className={classes.container}>
      <Avatar
        alt={name}
        variant="square"
        imgProps={{ style: { objectFit: 'contain' } }}
        src={require(`images/${logo}`)}
      />
      <div className={classes.texts}>
        <Typography className={classes.title} variant="body2" gutterBottom>
          {name}
        </Typography>
        <Typography className={classes.subtitle} variant="body2">
          {description}
        </Typography>
          <table> 
            <tr>
              <td> 
        {buyTokenUrl ? (
          <div style={{ marginTop: '4px' }}>
            <a
              className={classes.url}
              display='block'
              border='3px black'
              href={buyTokenUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{name === 'WBNB' ? t('Wrap BNB') :t('Buy Token ')}</span>
            </a>
          </div>
        ) : (
          ''
        )}
        </td>
        <td>
        {addLiquidityUrl ? (
          <div style={{ marginTop: '4px' }}>
            <a
              className={classes.url}
              display="block"
              href={addLiquidityUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t('| Add-Liquidity')}</span>
            </a>
          </div>
        ) : (
          ''
        )}
            </td>
          </tr>
        </table>
        {launchpool ? (
          <a className={classes.btnBoost} href={'/stake/pool/' + launchpool.poolIndex}>
            <img alt="Boost" src={require('images/stake/boost.svg')} height={15} />
            <span>
              <img alt="Fire" src={require('images/stake/fire.png')} height={30} />
            </span>
          </a>
        ) : (
          ''
        )}
      </div>
    </Grid>
  );
};

export default memo(PoolTitle);
