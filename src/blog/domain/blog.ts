export enum BlogType {
    Blog = "Blog",
    Convocatoriaabierta = "Convocatoriaabierta",
    Oferta = "Oferta",
    Programa = "Programa",
    ProgramaE = "ProgramaE",
    ProgramasEX = "ProgramasEX",
    Prensa = "Prensa"
}

export class Blog {
    constructor(
        readonly title: string,
        readonly previewContent: string,
        readonly content: string,
        readonly image: string,
        readonly author: string,
        readonly date: Date,
        readonly lenguaje : string,
        readonly type: BlogType
    ){}
}