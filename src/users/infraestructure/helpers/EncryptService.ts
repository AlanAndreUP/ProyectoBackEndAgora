import { IEncrypterService } from "../../application/services/IEncrypterService";
import bcrypt from 'bcrypt';
export class EncryptService implements IEncrypterService {
    public hashProfession(password: string): string {         
        return bcrypt.hashSync(password, parseInt(process.env.SALT_ROUNDS_BCRYPT!))
    }
    public authProfession(pass:string, passwordEncode: string): boolean {
        return bcrypt.compareSync(pass, passwordEncode)
    }
}