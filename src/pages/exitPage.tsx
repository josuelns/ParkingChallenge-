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
                <TabNavBar />
            </section>
            <section>
                <FormParking />
            </section>
            <section>
                <Modal />
            </section>

        </>
    )
}

export default ExitPage