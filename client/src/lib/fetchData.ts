type mutationType = {
  url: string;
  method: "POST" | "PUT" | "DELETE" | "PATCH";
  body?: any;
  headers?: Headers;
  params?: {
    key: string;
    value: string;
  };
  credentials?: "include" | "omit" | "same-origin";
};
interface queryType {
  url: string;
  headers?: Headers;
  params?: {
    key: string;
    value: string;
  };
  credentials?: "include" | "omit" | "same-origin";
}
type RequestInterceptor = (request: RequestInit) => RequestInit;
type ResponseInterceptor = (response: Response) => Response;
class fetchData {
  private baseUrl;
  constructor(BASE_URL = "http://localhost:3000/api/v1/") {
    this.baseUrl = BASE_URL;
  }
  interceptRefreshTokenRequest(request: RequestInit): RequestInit {
    // Modify request or do something before it is sent
    console.log("Request interceptor:", request);
    return request;
  }
  interceptRefreshTokenResponse(response: Response): Response {
    // Modify response or do something with it
    console.log("Response interceptor:", response);
    return response;
  }
  async interceptRefreshTokenFetch(
    url: string,
    options: RequestInit
  ): Promise<Response> {
    options = this.interceptRefreshTokenRequest(options);
    return fetch(url, options)
      .then((res) => this.interceptRefreshTokenResponse(res).json())
      .catch((err) => {
        console.log("interceptRefreshToken error!");
        throw err;
      });
  }
  async queryData(query: queryType) {
    try {
      const res = await fetch(
        this.baseUrl +
          query.url +
          `?${query.params?.key}=${query.params?.value}`,
        {
          cache: "no-store",
          method: "GET",
          headers: !query.headers
            ? { "Content-Type": "application/json" }
            : query.headers,
          next: { revalidate: 60 },
          credentials: query.credentials || "include",
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  async mutationData(mutation: mutationType) {
    try {
      const res = await fetch(
        this.baseUrl +
          mutation.url +
          `?${mutation.params?.key}=${mutation.params?.value}`,
        {
          cache: "no-store",
          method: mutation.method,
          headers: !mutation.headers
            ? { "Content-Type": "application/json" }
            : mutation.headers,
          body: JSON.stringify(mutation.body),
          credentials: mutation.credentials || "include",
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}
export default new fetchData();
