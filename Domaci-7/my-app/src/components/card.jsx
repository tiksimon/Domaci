import React from 'react'
import {Description} from './description'
import {Emoji} from './emoji'

export const Card = ({text, url}) => {
    return (
        <Emoji emoji={url}/>
        <Description description={text}/>
    )
}