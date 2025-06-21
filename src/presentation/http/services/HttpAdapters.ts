export interface HttpRequest {
  body: any;
  params: Record<string, string>;
  query: Record<string, string>;
}

export interface HttpResponse {
  statusCode: number;
  body: any;
}

export abstract class HttpAdapter {
  abstract adaptRequest(req: any): HttpRequest;
  abstract adaptResponse(res: HttpResponse, originalRes: any): void;
}
