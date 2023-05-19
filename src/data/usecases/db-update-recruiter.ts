import { UpdateRecruiter } from "@/domain/usecases";
import { UpdateRecruiterRepository, FindRecruiterByUserIdRepository } from "@/data/protocols/db/repositories";

export class DbUpdateRecruiter implements UpdateRecruiter {
  constructor(
    private readonly updateRecruiterRepository: UpdateRecruiterRepository,
    private readonly findRecruiterByUserIdRepository: FindRecruiterByUserIdRepository
  ){}

  async update(userId: string, data: UpdateRecruiter.Params): Promise<UpdateRecruiter.Result> {

    const recruiterToUpdate = await this.findRecruiterByUserIdRepository.findByUserId(userId);
    
    let result = false;

    if(recruiterToUpdate){
      await this.updateRecruiterRepository.update(recruiterToUpdate.id, { ...recruiterToUpdate, ...data });
      result = true;
    }

    return result;
  }
}