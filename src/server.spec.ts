import axios from "axios";
import {testConfig} from "./test-utils/TestConfig";

describe('server root', () => {
  describe('health check', () => {
      it('should be successful', async () => {
        const healthEndpoint = `${testConfig.host}:${testConfig.port}/health`
        const result = await axios.get(healthEndpoint)
        expect(result.status).toEqual(200)
      })
  })
})
