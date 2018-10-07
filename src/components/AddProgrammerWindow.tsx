import * as React from "react";
import styled from "react-emotion";
import { Button } from "./Elements/Button";
import { Programmer } from "../interfaces/Programmer";

interface Props {
    programmer?: Programmer
    addProgrammer(programmer: Programmer): void
    updateProgrammer(programmer: Programmer): void
    closeWindow(): void
}
interface State {
    programmer: Programmer
}
class AddProgrammerWindow extends React.Component<Props, State> {

    static frameworkOptions = ['Angular', 'React', 'Vue', 'VanillaJS']

    constructor(props: Readonly<Props>) {
        super(props)

        this.state = {
            programmer: this.props.programmer ?
                this.props.programmer :
                {
                    name: '',
                    framework: AddProgrammerWindow.frameworkOptions[0],
                    experience: 0,
                    available: true
                }
        }
    }

    addProgrammer = () => {
        if (this.state.programmer.id) {
            return this.props.updateProgrammer(this.state.programmer)
        }
        return this.props.addProgrammer(this.state.programmer)
    }

    setProperty = (value: string | boolean, property: string) => {
        this.setState((state, props) => {
            return {
                programmer: { ...state.programmer, [property]: value }
            }
        })

    }

    render() {

        return (
            <Window>
                <Close onClick={() => this.props.closeWindow()} />
                <InputField>
                    <Label htmlFor='name'>Name</Label>
                    <input type='text' id='name' name='name' value={this.state.programmer.name} onChange={(e) => this.setProperty(e.target.value, 'name')} />
                </InputField>
                <InputField>
                    <Label htmlFor='framework'>Framework</Label>
                    <select id='framework' name='framework' value={this.state.programmer.framework} onChange={(e) => this.setProperty(e.target.value, 'framework')}  >
                        {AddProgrammerWindow.frameworkOptions.map((framework, index) => {
                            return (
                                <option key={index} value={framework}>{framework}</option>
                            )
                        })}
                    </select>
                </InputField>
                <InputField>
                    <Label htmlFor='experience'>Experience</Label>
                    <input type='text' id='experience' name='experience' value={this.state.programmer.experience} onChange={(e) => this.setProperty(e.target.value, 'experience')} />
                </InputField>
                <InputField>
                    <Label htmlFor='available'>Available</Label>
                    <input type='checkbox' id='available' name='available' checked={this.state.programmer.available} onChange={(e) => this.setProperty(e.target.checked, 'available')} />
                </InputField>

                <Button onClick={this.addProgrammer}>{this.state.programmer.id ? 'Edit' : 'Add'}</Button>

            </Window>
        )
    }
}

const Window = styled('div')({
    position: 'absolute',
    width: 200,
    padding: 20,
    top: '30%',
    left: 'calc(50% - 100px)',
    background: '#ffe082',
    textAlign: 'center',
    boxShadow: '2px 2px 10px #000'
})

const Close = styled('div')({
    position: 'absolute',
    right: 2,
    top: 2,
    width: 32,
    height: 32,
    opacity: 0.3,
    cursor: 'pointer',
    ':hover': {
        opacity: 1
    },
    ':before, :after': {
        position: 'absolute',
        left: 15,
        content: "' '",
        height: 33,
        width: 2,
        backgroundColor: '#333'
    },
    ':before': {
        transform: 'rotate(45deg)'
    },
    ':after': {
        transform: 'rotate(-45deg)'
    }
})

const InputField = styled('div')({
    padding: 10,
    display: 'block'
})

const Label = styled('label')({
    display: 'block'
})

export default AddProgrammerWindow