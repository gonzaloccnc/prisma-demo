import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const userRouter = Router()
const prisma = new PrismaClient()

userRouter.get('/users', async (req, res) => {
  // esto busca todos los usuarios, incluyendo los post segun la relacion, si no tiene parametros
  // recuperara los usuarios sin relaciones
  const user = await prisma.user.findMany({
    include: {
      post: true
    }
  })

  res.json({
    data: user
  })
})

export {
  userRouter
}
