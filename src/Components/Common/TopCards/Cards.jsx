import React from 'react'
import './Style.scss'
import Theme from '../../../Theme/Theme'
import { useTranslation } from 'react-i18next';

const Cards = () => {
    const lightTheme = Theme();
    const { t } = useTranslation();
  return (
    <div className='mainContainerC'>
    {/* <p style={{ color: `${lightTheme.blackText}` }}>{t('Mills.1')}</p> */}
    <div className='cardDivs'>
        <div className='card'>
            <p>45</p>
            <p>{t('Mills.newCustomers')}</p> {/* Update the key */}
        </div>
        <div className='card'>
            <p>45</p>
            <p>{t('Mills.newOrders')}</p> {/* Update the key */}
        </div>
        <div className='card'>
            <p>45</p>
            <p>{t('Mills.orderInProcess')}</p> {/* Update the key */}
        </div>
        <div className='card'>
            <p>45</p>
            <p>{t('Mills.processedOlives')}</p> {/* Update the key */}
        </div>
    </div>
</div>
  )
}

export default Cards