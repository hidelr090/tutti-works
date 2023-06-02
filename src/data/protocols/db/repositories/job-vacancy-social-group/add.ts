export interface AddJobVacancySocialGroupRepository {
  add: (jobVacancyId: string, socialGroupId: string) => Promise<void>;
}

