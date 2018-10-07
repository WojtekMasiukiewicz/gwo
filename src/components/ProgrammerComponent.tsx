import * as React from 'react'
import { Programmer } from '../interfaces/Programmer';
import { Cell, Row } from './Elements/Table';
import styled from 'react-emotion';
import { Button } from './Elements/Button';

interface Props {
    editProgrammer(programmer: Programmer): void
    deleteProgrammer(programmer: Programmer): void
}

type IProps = Programmer & Props

export const ProgrammerComponent = (props: IProps) => {
    return (
        <Row>
            <Cell>{props.name}</Cell>
            <Cell>{props.framework}</Cell>
            <Cell>{props.experience}</Cell>
            <Cell><Available available={props.available} /></Cell>
            <Cell>
                <Button onClick={() => props.editProgrammer({ name: props.name, framework: props.framework, experience: props.experience, available: props.available, id: props.id })}>Edit</Button>
                <Button onClick={() => props.deleteProgrammer({ name: props.name, framework: props.framework, experience: props.experience, available: props.available, id: props.id })} red={true}>Delete</Button>
            </Cell>
        </Row>
    )

}
const Available: any = styled('div')((props: any) => ({
    background: props.available ? '#0f0' : '#f00',
    width: 100,
    height: 20
}))