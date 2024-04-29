import { ConfigModule } from '@nestjs/config';
import { IemailConfig } from '../interfaces/email';

export default async function getEmailConfig(): Promise<
  Record<string, IemailConfig>
> {
  await ConfigModule.envVariablesLoaded;
  const GMAIL_ADDRESS = process.env.GMAIL_ADDRESS;
  const GMAIL_CLIENTID = process.env.GMAIL_CLIENTID;
  const GMAIL_CLIENTSECRET = process.env.GMAIL_CLIENTSECRET;
  const GMAIL_REFRESHTOKEN = process.env.GMAIL_REFRESHTOKEN;

  const FOXMAIL_SMTP_CODE = process.env.FOXMAIL_SMTP_CODE;
  const FOXMAIL_ADDRESS = process.env.FOXMAIL_ADDRESS;
  return {
    // ...
    GMAIL: {
      // 别名，自己定义
      alias: 'WEBXUE',
      user: GMAIL_ADDRESS,
      // 邮件服务器地址
      host: 'smtp.gmail.com',
      // 邮件服务器端口
      port: 465,
      // 是否使用默认465端口
      secure: true,
      auth: {
        type: 'OAuth2',
        clientId: GMAIL_CLIENTID,
        clientSecret: GMAIL_CLIENTSECRET,
        refreshToken: GMAIL_REFRESHTOKEN,
      },
    },
    FOXMAIL: {
      // 别名，自己定义
      alias: 'FOXMAIL',
      user: FOXMAIL_ADDRESS,
      // 邮件服务器地址
      host: 'smtp.qq.com',
      // 邮件服务器端口
      port: 465,
      // 是否使用默认465端口
      secure: true,
      auth: {
        pass: FOXMAIL_SMTP_CODE,
      },
    },
  };
}
