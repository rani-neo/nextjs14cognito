import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: 'jdns1vn2nko5jv6svear4d2qf',
        userPoolId: 'ap-southeast-2_gClVqA6mt'
        }
      }
    }

export default amplifyConfig;