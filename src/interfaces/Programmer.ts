import { BorderTopLeftRadiusProperty } from "csstype";

export interface Programmer {
    name: string
    framework: string
    experience: number
    available: boolean

    id?: number
    Filter?(programmer: Programmer): boolean
}