import axios from "axios";
import {toBeNotEmptyString} from "../../../../test-utils/ExpectExtensions";
import {testConfig} from "../../../../test-utils/TestConfig";

expect.extend({
  toBeNotEmptyString
})

describe('users router', () => {
  const host = `${testConfig.host}:${testConfig.port}`
  const usersRoute = '/api/v0/users'
  const buildUrl = (endpoint: string) => `${host}${usersRoute}${endpoint}`

  describe(' get /:id', () => {
    it('should return 400 when id param is missing', async () => {
      const result = await axios.get(buildUrl('/'))
        .catch(error => error)
      expect(result.response.status).toEqual(400)
      expect(result.response.data).toEqual({message: 'User id param required and not found.'})
    })

    it('should return not found when email not found', async () => {
      const result = await axios.get(buildUrl('/ghostrider@gmail.com'))
        .catch(error => error)

      expect(result.response.status).toEqual(404)
      expect(result.response.data).toEqual({message: 'User not found.'})
    })

    it('should return user if found', async () => {
      const result = await axios.get(buildUrl(`/${testConfig.username}`))
      expect(result.status).toEqual(200)
      expect(result.data.createdAt).toBeNotEmptyString()
      expect(result.data.email).toEqual('hello@gmail.com')
      expect(result.data.passwordHash).not.toBeNull()
      expect(result.data.passwordHash).not.toEqual('')
      expect(result.data.updatedAt).toBeNotEmptyString()
    })
  })
})
