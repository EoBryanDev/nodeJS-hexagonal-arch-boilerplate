import { HttpAdapter, HttpRequest, HttpResponse } from "../services/HttpAdapters";

class FastifyAdapter extends HttpAdapter {
  adaptRequest(req: any): HttpRequest {
    return {
      body: req.body,
      params: req.params,
      query: req.query,
    };
  }

  adaptResponse(res: HttpResponse, originalRes: any): void {
    originalRes.status(res.statusCode).send(res.body);
  }
}

export { FastifyAdapter };
