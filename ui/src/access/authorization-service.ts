import User from './user';
import Role from './role';

export const setRoles = (user: User): void => {
    if (isValidUhUuid(user.uhUuid)) {
        user.roles.push(Role.UH);
    }
}

const isValidUhUuid = (uhUuid: string): boolean => {
    const uhUuidPattern = new RegExp(/^[0-9]{8}$/);
    return uhUuidPattern.test(uhUuid);
}
