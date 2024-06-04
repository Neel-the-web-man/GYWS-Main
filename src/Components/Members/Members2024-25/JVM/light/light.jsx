import React from 'react'
import '../../GB/GB.css'
import Card from '../../Card/card'
import data from './light'
import ceo from './ceo'
import HCard from '../../../../HeaderCard/HCard'

export default function page() {
    return (

        <>

            <HCard head={"LiGHT CEO 2023-24"}></HCard>
            <div className="members_container">
                {ceo.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
            <br /><br />
           
            <HCard head={"LiGHT Heads"}></HCard>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}
