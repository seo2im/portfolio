import React from 'react'
import * as history from './History.style'
import config from '../../../../configuration'
import { MyPostit } from '../../'

type Prop = {
    flag: boolean
}
const History: React.FC<Prop> = ({ flag }) => {
    const { past, current } = config.main.history

    return (
        <>
            <MyPostit {...past} flag={flag}>
                <history.Title>{past.title}</history.Title>
                <history.PastBox>
                {past.items.map((item ,i) => (
                    <history.PastItem key={`${i}`}>
                        {item.content}  (<history.PastDuration>{item.duration}</history.PastDuration>)
                    </history.PastItem>
                ))}
                </history.PastBox>
            </MyPostit>
            <MyPostit {...current} flag={flag}>
                <history.Title>{current.title}</history.Title>
                <history.Box>
                {current.items.map((item ,i) => (
                    <history.Item key={`${i}`} bold={item.bold? item.bold : false}>
                        {item.content}  (<history.Duration>{item.duration}</history.Duration>)
                    </history.Item>
                ))}
                </history.Box>
            </MyPostit>
        </>
    )
}

export default History
