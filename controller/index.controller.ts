import { Request, Response } from "express"

import { User } from "../interfaces/user.interface"
import { Data } from "../interfaces/data.interface"
import { DB } from "../Repository/dbRepo"

import Users from "../Schema/User.schema"
import Datas from "../Schema/Data.schema"

export const addUser = async (req: Request, res: Response) => {
    const user: User = req.body
    const db = new DB<User>(Users);
    const data = await db.create(user);
    res.send(data)
}

export const seeAllUser = async (req: Request, res: Response) => {
    const db = new DB<User>(Users);
    const data = await db.find();
    res.send(data)
}

export const seeOneUser = async (req: Request, res: Response) => {
    const id = req.params.id
    const db = new DB<User>(Users);
    const data = await db.findById(id);
    res.send(data)
}

//=========================================================

export const addData = async (req: Request, res: Response) => {
    const data: Data = req.body
    const db = new DB<Data>(Datas);
    const nData = await db.create(data);
    res.send(nData)
}

export const seeAllData = async (req: Request, res: Response) => {
    const db = new DB<Data>(Datas);
    const data = await db.find();
    res.send(data)
}

export const seeOneData = async (req: Request, res: Response) => {
    const id = req.params.id
    const db = new DB<Data>(Datas);
    const data = await db.findById(id);
    res.send(data)
}