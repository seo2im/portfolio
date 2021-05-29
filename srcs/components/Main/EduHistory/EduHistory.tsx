import React from 'react'
import * as style from './EduHistory.style'
import config from '../../../../configuration'
import { MyPostit } from '../../'

type Prop = {
    flag: boolean
}
const EduHistory: React.FC<Prop> = ({ flag }) => {
    const { eduHistory } = config.main

    return (
        <MyPostit {...eduHistory} flag={flag}>
            <style.Layout>
                <style.Title>{eduHistory.title}</style.Title>
                <style.Wrapper>
                {eduHistory.histories.map((history, i) => (
                    <style.Row key={`his_${i}`}>
                        <style.Content>{history.content}</style.Content>
                        <style.Term>{history.term}</style.Term>
                        <style.Remark>{history.remark}</style.Remark>
                    </style.Row>
                ))}
                </style.Wrapper>
            </style.Layout>
        </MyPostit>
    )
}

export default EduHistory
