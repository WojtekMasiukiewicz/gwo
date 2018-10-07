import { Programmer } from "../interfaces/Programmer";


export class RecruitmentAgency {

    private programmerList: Array<Programmer> = []
    private nextKey: number = 1

    constructor(pList: Array<Programmer> = []) {
        pList.map(item => this.addProgrammer(item))
    }

    addProgrammer(programmer: Programmer) {
        this.programmerList = [...this.programmerList, { ...programmer, id: this.nextKey }]
        this.nextKey++
    }

    deleteProgrammer(programmer: Programmer) {
        this.programmerList = this.programmerList.filter(item => item.id !== programmer.id)
    }

    getAllProgrammers() {
        return this.programmerList
    }

    getShowcase() {
        let results = "<h3>Hello!!!</h3>"
        this.programmerList.map(item => {
            if (item.available) {
                results += `<p>${item.name}</p>`
            }
        })
        return results
    }

    updateProgrammer(programmer: Programmer) {
        console.log(programmer)
        this.programmerList = this.programmerList.map(item => {
            if (item.id !== programmer.id) {
                return item
            }
            return programmer

        })
    }


}