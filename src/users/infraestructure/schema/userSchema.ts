import { Schema } from "mongoose"
import { User, ERole } from "../../domain/user";

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    profesion: { type: String, required: true },
    pais: { type: String, required: true },
    empresa: { type: String, required: true },
    role: { type: String, required: true, enum: ERole },
})

export default userSchema