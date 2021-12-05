interface TestConfig {
  host: string;
  port: string;
  token: string;
  username: string;
  password: string;
}

export const testConfig: TestConfig = {
  host: process.env.UDAGRAM_HOST,
  port: process.env.PORT,
  token: process.env.JWT_TEST_TOKEN,
  username: process.env.UDAGRAM_TEST_USERNAME,
  password: process.env.UDAGRAM_TEST_PASSWORD
}
