import React from 'react'
import { Select } from 'antd';
import i18n from '../../../i18n/i18n.js'
const { Option } = Select;
export default function LanguageSelector() {

    function handleChange(value) {
        i18n.changeLanguage(value);
      }

    return (
        <Select defaultValue="es" onChange={handleChange}>
            <Option value="en">EN</Option>
            <Option value="es">ES</Option>
            <Option value="fr">FR</Option>
           
        </Select>
    )
}
