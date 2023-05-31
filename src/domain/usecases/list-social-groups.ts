export interface ListSocialGroups {
  listSocialGroups: () => Promise<ListSocialGroups.Result>;
}

export namespace ListSocialGroups {
  export type Result = {
    description: string;
    title: string;
    id: string;
  }[] | null;
}