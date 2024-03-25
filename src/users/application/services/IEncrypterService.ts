export interface IEncrypterService {
    hashProfession(email: string): string;
    authProfession(pass:string, passwordEncode: string): boolean;
}