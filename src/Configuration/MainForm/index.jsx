import React from 'react'
import { useTranslation } from 'react-i18next'
import { useConfiguration } from '../../GlobalContext/ConfigurationContext'

const MainForm = () => {

    const { t } = useTranslation();
    const { spaceName, setSpaceName } = useConfiguration()

    return (
        <div>
            <h1>{t("Configuration")}</h1>
        </div>
    )
}
export default MainForm