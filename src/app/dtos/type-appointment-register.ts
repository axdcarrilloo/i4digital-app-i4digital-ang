export class TypeAppointmentRegister {
    name:string;
    description?:string;
    durationMinutes:number;
    colorHexCode:string;

    constructor(name:string, description:string, durationMinutes:number, colorHexCode:string) {
        this.name = name;
        this.description = description;
        this.durationMinutes = durationMinutes;
        this.colorHexCode = colorHexCode;
    }
}