export interface IemailConfig {
  alias: string;
  /** 用户邮箱 */
  user: string;
  host: string;
  port: number;
  secure: boolean;
  auth: {
    type?: string;
    /** 用户邮箱 */
    // user: string;
    clientId?: string;
    clientSecret?: string;
    refreshToken?: string;
    /** s授权码 */
    pass?: string;
  };
}
