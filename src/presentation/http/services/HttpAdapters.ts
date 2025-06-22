export interface HttpRequest<T= any, U= Record<string,string>, V= Record<string,string>> {
  body: T ;
  params: U ;
  query: V;
  headers: Record<string, string>;
}

export interface HttpResponse {
  statusCode: number;
  body: any;
}

export abstract class HttpAdapter {
  abstract adaptRequest<T=any, U=Record<string,string>, V=Record<string,string>>(req: any): HttpRequest<T, U, V>;
  abstract adaptResponse(res: HttpResponse, originalRes: any): void;
}
