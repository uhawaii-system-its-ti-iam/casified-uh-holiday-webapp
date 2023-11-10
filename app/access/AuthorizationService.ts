import User from './User';
import Role from './Role';

export const setRoles = (user: User): void => {
    if (isValidUhUuid(user.uhUuid)) {
        user.roles.push(Role.UH);
    }
}

const isValidUhUuid = (uhUuid: string): boolean => {
    const uhUuidPattern = new RegExp(/^[0-9]{8}$/);
    return uhUuidPattern.test(uhUuid);
}
