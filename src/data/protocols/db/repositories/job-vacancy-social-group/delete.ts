export interface DeleteJobVacancySocialGroupRepository {
  delete: (jobVacancyId: string, socialGroupId: string) => Promise<void>;
}
