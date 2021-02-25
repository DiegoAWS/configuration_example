import React from 'react'

import InfoIcon from '../../../assets/icons/InfoIcon.svg'


export default function Description({ children }) {
    return (
        <div style={{ display: 'flex', marginTop: '16px' }}>

            <img alt="" src={InfoIcon} height="17px" />

            <div style={{ marginLeft: '8px'}}>

                {children}

            </div>

        </div>
    )
}
