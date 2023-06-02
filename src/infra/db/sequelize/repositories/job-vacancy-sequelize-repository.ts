import { AddJobVacancyRepository, FindJobVacanciesRepository, LoadJobVacancyByIdRepository, UpdateJobVacancyRepository} from "@/data";
import { JobVacancy, JobVacancySequelizeModel, SocialGroup } from "@/infra/db/sequelize/models";
import { Op } from "sequelize";

JobVacancy.associate();
export class JobVacancySequelizeRepository implements AddJobVacancyRepository, FindJobVacanciesRepository{
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
          as: 'socialGroups',
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
        description: item.description,
        recruiterId: item.recruiterId,
        title: item.title,
        company: item.company,
        wage: item.wage,
        socialGroups: item.socialGroups.map(inner => ({
          id: inner.id,
          title: inner.title,
        }))
      }));
    }

    return result;
  }
}