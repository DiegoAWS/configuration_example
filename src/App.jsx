import React from 'react'
import { ConfigurationContextProvider } from './globalContext/ConfigurationContext'
import Configuration from './pages/Configuration'

const App = () => {
    return (
        <ConfigurationContextProvider>
            <Configuration />
        </ConfigurationContextProvider>
    )
}
export default App