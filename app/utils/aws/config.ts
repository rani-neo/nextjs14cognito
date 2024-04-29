import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: '4a24hu8fgbdioc2gkmb2jgn4nn',
        userPoolId: 'ap-southeast-2_J1if96oJ6'
        }
      }
    }

export default amplifyConfig;