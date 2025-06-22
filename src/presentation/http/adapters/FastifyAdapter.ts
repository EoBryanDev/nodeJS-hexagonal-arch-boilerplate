import { HttpAdapter, HttpRequest, HttpResponse } from "../services/HttpAdapters";

class FastifyAdapter extends HttpAdapter {
  adaptRequest<T = any, U = Record<string, string>, V = Record<string, string>>(req: any): HttpRequest<T, U, V> {
return {
  body: req.body as T,
  params: req.params as U,
  query: req.query as V,
  headers: req.headers as Record<string, string>
};
  }

  adaptResponse(res: HttpResponse, originalRes: any): void {
    originalRes.status(res.statusCode).send(res.body);
  }
}

export { FastifyAdapter };
