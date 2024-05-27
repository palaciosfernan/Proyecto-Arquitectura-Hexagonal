import PubliRepository from "../domain/PubliRepository";

export default class DeleteAllPubliCase {
    constructor(readonly entryRepository: PubliRepository) {}

    async run(): Promise<boolean> {
        return await this.entryRepository.deleteAll();
    }
}
