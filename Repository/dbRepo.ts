import mongoose from "mongoose";

export class DB<T>{
    private model: mongoose.Model<mongoose.Document>;
    constructor([collection, schema]: [string, mongoose.Schema]) {
        this.model = mongoose.model(collection, schema);
    }
    async find(): Promise<T[]> {
        return await this.model.find();
    }

    async findById(id: string): Promise<Awaited<T> | null> {
        return await this.model.findById(id);
    }

    async create(item: T): Promise<T | any> {
        return await this.model.create(item);
    }

    async findOneAndUpdate(id: string, item: T): Promise<boolean | null> {
        return await this.model.findByIdAndUpdate(id, item, { new: true });
    }

    async findOneAndDelete(id: string): Promise<boolean | null> {
        return await this.model.findByIdAndDelete(id);
    }
}