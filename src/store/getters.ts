
const getters = {
  user: (state: any) => state.user,
  token: (state: any) => state.user.token,
  roles: (state: any) => state.user.roles,
}

export default getters
