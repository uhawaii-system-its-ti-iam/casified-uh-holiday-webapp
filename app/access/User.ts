import Role from './Role';

type User = {
    name: string,
    firstName: string,
    lastName: string,
    uid: string,
    uhUuid: string,
    roles: Role[]
}

export const anonymousUser: User = {
    name: '',
    firstName: '',
    lastName: '',
    uid: '',
    uhUuid: '',
    roles: [Role.ANONYMOUS]
}

export default User;
