import { AddRecruiter } from "../../domain/usecases";
import { AddRecruiterRepository, CheckRecruiterByUserIdRepository } from "../protocols/db/repositories";

export class DbAddRecruiter implements AddRecruiter {
  constructor(
    private readonly addRecruiterRepository: AddRecruiterRepository,
    private readonly checkRecruiterByUserIdRepository: CheckRecruiterByUserIdRepository
  ){}

  async add(recruiterData: AddRecruiter.Params): Promise<AddRecruiter.Result> {

    const exists = await this.checkRecruiterByUserIdRepository.checkByUserId(recruiterData.userId);
    let result = false;

    if(!exists){
      await this.addRecruiterRepository.add(recruiterData);
      result = true;
    }

    return result;
  }
}