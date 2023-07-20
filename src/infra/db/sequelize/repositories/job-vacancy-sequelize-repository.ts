import { AddJobVacancyRepository, FindJobVacanciesRepository, ListJobVacanciesByRecruiterIdRepository, LoadJobVacancyByIdRepository, UpdateJobVacancyRepository } from "@/data";
import { ListJobVacancyApplicants } from "@/domain/usecases";
import { Candidate, JobVacancy, JobVacancySequelizeModel, Recruiter, SocialGroup, User } from "@/infra/db/sequelize/models";
import { Op } from "sequelize";

JobVacancy.associate();
export class JobVacancySequelizeRepository implements AddJobVacancyRepository, FindJobVacanciesRepository, LoadJobVacancyByIdRepository, UpdateJobVacancyRepository, ListJobVacanciesByRecruiterIdRepository, ListJobVacancyApplicants{
  async add(jobVacancyData: AddJobVacancyRepository.Params): Promise<boolean>{

    const jobVacancy = await JobVacancySequelizeModel.create(jobVacancyData);
    
    return jobVacancy !==null;
  }

  async find(data: FindJobVacanciesRepository.Params): Promise<FindJobVacanciesRepository.Result>{
    const jobVacancies = await JobVacancySequelizeModel.findAll({
      where: {
        [Op.or]:{
          title: {
            [Op.like]: `%${data.jobInfos}%`,
          },
          description: { 
            [Op.like]: `%${data.jobInfos}%`,
          }
        }
      },
      include:[
        {
          model: SocialGroup,
          as: 'SocialGroups',
          where: {
            id: {
              [Op.in]: data.socialGroupsIds
            }
          }
        }
      ]
    });

    let result: FindJobVacanciesRepository.Result = null;
    
    if(jobVacancies) {
      result = jobVacancies.map(item => ({
        id: item.id,
        description: item.description,
        recruiterId: item.recruiterId,
        title: item.title,
        company: item.company,
        wage: item.wage,
        socialGroups: item.SocialGroups.map(inner => ({
          id: inner.id,
          title: inner.title,
        }))
      }));
    }

    return result;
  }

  async loadById (id: string): Promise<LoadJobVacancyByIdRepository.Result>{
    const jobVacancy = await JobVacancySequelizeModel.findByPk(id, {
      include: [
        {
          model: SocialGroup,
          as: 'SocialGroups'
        }
      ]
    });

    let result: LoadJobVacancyByIdRepository.Result= null;

    if (jobVacancy) {
      result = {
        id: jobVacancy.id,
        description: jobVacancy.description,
        recruiterId: jobVacancy.recruiterId,
        title: jobVacancy.title,
        company: jobVacancy.company,
        wage: jobVacancy.wage,
        socialGroupsIds: jobVacancy.SocialGroups.map( item => (item.id))
      };
    }

    return result;
  }

  async update (jobVacancyId: string, jobVacancyData: UpdateJobVacancyRepository.Params): Promise<boolean>{
    const updated = await JobVacancySequelizeModel.update(jobVacancyData, { where: { id: jobVacancyId }});

    return updated !== null;
  }

  async listByRecruiterId(recruiterId: string): Promise<ListJobVacanciesByRecruiterIdRepository.Result>{
    let result = null;

    const jobVacancies = await JobVacancySequelizeModel.findAll({
      include: [
        {
          model: Recruiter,
          as: 'Recruiter',
          where: { id: recruiterId }
        },
        {
          model: SocialGroup,
          as: 'SocialGroups'
        }
      ]
    });

    if(jobVacancies.length > 0){
      result = jobVacancies.map(item => ({
        id: item.id,
        description: item.description,
        recruiterId: item.recruiterId,
        title: item.title,
        company: item.company,
        wage: item.wage,
        socialGroups: item.SocialGroups.map(inner => ({
          id: inner.id,
          title: inner.title
        }))
      }));
    }

    return result;
  }

  async listJobVacancyApplicants (jobVacancyId: string): Promise<ListJobVacancyApplicants.Result>{
    const jobVacancy = await JobVacancySequelizeModel.findOne({
      where: {
        id: jobVacancyId
      },
      include: [
        {
          model: Candidate,
          include: [
            {
            model: User,
            as: 'user',
            },
          ]
        }
      ]
    });
    

    if(!jobVacancy) {
      return null;
    }
    const candidates = jobVacancy.Candidates;

    return {
      id: jobVacancy.id,
      description: jobVacancy.description,
      recruiterId: jobVacancy.recruiterId,
      wage:jobVacancy.wage,
      company: jobVacancy.company,
      title: jobVacancy.title,
      applicants: candidates.map((candidate) => ({
        id: candidate.user.id,
        name: candidate.user.name,
        email: candidate.user.email,
        phone: candidate.user.phone,
        candidate: {
          role: candidate.role
        }
      }))
    };
  }
}