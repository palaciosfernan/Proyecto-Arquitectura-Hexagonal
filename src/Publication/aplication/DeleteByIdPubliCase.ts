import PubliRepository from "../domain/PubliRepository";

export default class DeletePubliCase {
    constructor(readonly entryRepository: PubliRepository) {}

    async run(id: string): Promise<boolean> {
        return await this.entryRepository.deleteById(id);
    }
}
