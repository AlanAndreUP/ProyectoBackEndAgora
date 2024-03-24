export interface IEncrypterService {
    hashEmail(email: string): string;
    authPassword(pass:string, passwordEncode: string): boolean;
}