import User from './User';
import Role from './Role';

export default class AuthorizationService {

    public static setRoles = (user: User) => {
        user.roles.push(Role.ADMIN);
    }
    
}
