export class TypeAppointment {
    id:string;
    name?:string;
    description?:string;
    durationMinutes?:number;
    colorHexCode?:string;

    constructor(id:string, name:string, description:string, durationMinutes:number, colorHexCode:string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.durationMinutes = durationMinutes;
        this.colorHexCode = colorHexCode;
    }
}