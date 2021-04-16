import React, {FC } from 'react';

import Card from '../card'

type VehicleParking = {
    time: string,
    pay: boolean
}

interface Props {
    id: string
}

const Cards: FC<Props> = () =>{
    return (
        <>
            <section>  
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </>
    )
}

export default Cards
