export interface LoginResponse {
result?: {
email?: string;
userId?: string;
  }
error?: {
  code?:string;
  message?: string;
}
}
