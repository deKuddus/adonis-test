import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import CreatePost from 'App/Validators/CreatePostValidator'

export default class AuthController {
  public async create() {
    return await View.render('welcome')
  }
  public async store(ctx: HttpContextContract) {
    const payload = await ctx.request.validate(CreatePost)
    return payload
  }
}
