export interface LoadUserByToken {
  load: (accessToken: string, role?: string) => Promise<LoadUserByToken.Result | null>
}

export namespace LoadUserByToken {
  export type Result = {
    id: string
  }
}
