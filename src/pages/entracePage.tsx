import React, {FC} from 'react'

import Header from '../components/header'
import TabNavBar from '../components/tab-navbar'
import FormParking from '../components/form-parking'
import Modal from '../components/modal'

const entracePage: FC = () => {
    return(
        <>
            <Header />
            <section>
                <TabNavBar  entrance/>
            </section>
            <section>
                <FormParking entrace />
            </section>
            <section>
                <Modal />
            </section>

        </>
    )
}

export default entracePage