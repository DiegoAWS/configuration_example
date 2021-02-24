import React from 'react'

import VisualExample from './VisualExample'
import MainForm from './MainForm'

export default function index() {
    return (

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <MainForm />
                <VisualExample />
                
            </div>
 
    )
}
