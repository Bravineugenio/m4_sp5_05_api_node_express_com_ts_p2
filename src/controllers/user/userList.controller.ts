import { Request, Response } from 'express'
import listUsersService from '../../services/user/userList.service'

const userListController = async (req: Request, res: Response) => {

    try {

        const users = await listUsersService()

        return res.send(users)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export default userListController