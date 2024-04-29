import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { awaitTo } from '../utils/index';
import getEmailConfig from '../config/email';

import { IemailConfig } from '../interfaces/email';

let MAIL_CONFIG: IemailConfig;
(async () => {
  const data = await getEmailConfig();
  // 自己选择合适的邮箱，用 foxmail 吧，gmail 有时候连不上
  MAIL_CONFIG = data.FOXMAIL;
})();

interface sendOption {
  to: string;
  subject: string;
  text: string;
}
// 这个是用 gmail 的时候使用的，需要定时更新
const accessToken = '';
@Injectable()
export class MailService {
  constructor() {
    // 配置邮件发送器
    this.transporter = nodemailer.createTransport({
      host: MAIL_CONFIG.host,
      port: MAIL_CONFIG.port,
      secure: true,
      auth: {
        ...MAIL_CONFIG.auth,
        user: MAIL_CONFIG.user,
        accessToken: accessToken,
      },
    });
  }

  private transporter: any;

  async sendMail(options: sendOption): Promise<Error | any> {
    // const MAIL_CONFIG = getEmailConfig()['GMAIL'];
    const message = {
      from: MAIL_CONFIG.user, // 发件人邮箱
      to: options.to, // 收件人邮箱
      subject: options.subject, // 邮件主题
      text: options.text, // 邮件正文
      // html: '<b>Hello world?</b>', // 可以发送HTML格式的邮件
    };
    console.log(`发送`, message);
    // transporter.sendMail({
    //   from: "test@gmail.com",
    //   to: "test@qq.com",
    //   subject: "Gmail 测试邮件",
    //   html: "Gmail 测试邮件 内容",
    // })
    const [err, data] = await awaitTo(this.transporter.sendMail(message));
    console.log(err, data);
    if (err) return err;
    return data;
  }
}
