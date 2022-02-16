import { ROLES } from "./roles.enum";

export class User {
    userName = '';
    email = '';
    password = '';
    role = ROLES.USER;
}