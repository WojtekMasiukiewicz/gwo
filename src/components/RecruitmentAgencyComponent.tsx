import * as React from "react";

import { Programmer } from "../interfaces/Programmer";
import { RecruitmentAgency } from "../classes/RecruitmentAgency";
import { ProgrammerComponent } from './ProgrammerComponent'
import { Table, HeaderCell } from "./Elements/Table";
import { Button } from "./Elements/Button";
import AddProgrammerWindow from "./AddProgrammerWindow";

interface State {
    programmerList: Array<Programmer>
    showAddWindow: boolean
    editedProgrammer: Programmer
    showcase: string
}

class RecruitmentAgencyComponent extends React.Component<{}, State> {
    private agency: RecruitmentAgency = null

    constructor(p: {}) {
        super(p)
        this.state = {
            programmerList: [],
            showAddWindow: false,
            editedProgrammer: null,
            showcase: null
        }
    }

    componentDidMount() {
        fetch('https://files.gwo.pl/custom/random-data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (this.agency === null) {
                    this.agency = new RecruitmentAgency(data)
                }

                this.updateList()
            })
    }

    showAddProgrammerWindow = () => {
        this.setState({
            showAddWindow: true
        })
    }

    addProgrammer = (programmer: Programmer) => {
        this.agency.addProgrammer(programmer)
        this.updateList()
        this.setState({
            showAddWindow: false
        })
    }

    editProgrammer = (programmer: Programmer) => {
        this.setState({
            showAddWindow: true,
            editedProgrammer: programmer
        })
    }

    updateProgrammer = (programmer: Programmer) => {
        this.agency.updateProgrammer(programmer)
        this.updateList()
        this.closeWindow()
    }

    deleteProgrammer = (programmer: Programmer) => {
        this.agency.deleteProgrammer(programmer)
        this.updateList()
    }

    updateList() {
        this.setState({
            programmerList: this.agency.getAllProgrammers()
        })
    }

    closeWindow = () => {
        this.setState({
            showAddWindow: false,
            editedProgrammer: null
        })
    }

    getShowcase = () => {
        this.setState({
            showcase: this.agency.getShowcase()
        })
    }

    render() {
        return (
            <React.Fragment>
                <Table>
                    <thead>
                        <tr>
                            <HeaderCell>Name</HeaderCell>
                            <HeaderCell>Framework</HeaderCell>
                            <HeaderCell>Experience</HeaderCell>
                            <HeaderCell>Available</HeaderCell>
                            <HeaderCell>Action</HeaderCell>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.programmerList.map(item => {
                            return <ProgrammerComponent key={item.id} {...item} editProgrammer={this.editProgrammer} deleteProgrammer={this.deleteProgrammer} />
                        })}
                        <tr>
                            <td colSpan={5}><Button onClick={this.showAddProgrammerWindow}>Add</Button></td>
                        </tr>
                        <tr>
                            <td colSpan={5}><Button onClick={this.getShowcase}>Get Showcase</Button></td>
                        </tr>
                    </tbody>
                </Table>

                {this.state.showcase && <div dangerouslySetInnerHTML={{ __html: this.state.showcase }} />}

                {this.state.showAddWindow && (
                    <AddProgrammerWindow
                        addProgrammer={this.addProgrammer}
                        updateProgrammer={this.updateProgrammer}
                        programmer={this.state.editedProgrammer}
                        closeWindow={this.closeWindow} />
                )}
            </React.Fragment>
        )
    }
}



export default RecruitmentAgencyComponent