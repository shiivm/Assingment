export interface IHttpException {
  statusCode?: number;
  status?: number;
  message: string;
  error: string | null;
}