interface IMain {
  main : {
    isCollapsed: boolean,
    loading: boolean
  }
}

interface IUser {
  users: {
    user: any,
    loading: boolean
  }
}

export type { IMain, IUser }