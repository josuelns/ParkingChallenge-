import React, { FC } from 'react'

import Header from '../components/header'
import TabNavBar from '../components/tab-navbar'
import FormParking from '../components/form-parking'
import Modal from '../components/modal'
    
const ExitPage: FC = () => {
    return (
        <>
            <Header />
            <section>
                <TabNavBar exit />
            </section>
            <section>
                <FormParking payment exit history/>
            </section>
            <section>
                <Modal />
            </section>

        </>
    )
}

export default ExitPage