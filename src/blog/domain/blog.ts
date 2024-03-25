export enum BlogType {
    TUTORIAL = "Tutorial",
    NOTICIA = "Noticia",
    OPINION = "Opinión",
    RESENA = "Reseña",
    GUÍA = "Guía",
    OTRO = "Otro"
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