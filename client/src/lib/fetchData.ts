import { postRefreshToken } from "@/services";

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
type InterceptorType = {
  url: string;
  method: "POST" | "PUT" | "DELETE" | "PATCH" | "GET";
  body?: any;
  headers?: Headers;
  params?: {
    key: string;
    value: string;
  };
  credentials?: "include" | "omit" | "same-origin";
};
// type RequestInterceptor = (request: RequestInit) => RequestInit;
// type ResponseInterceptor = (response: Response) => Response;

const baseUrl = "http://localhost:3000/api/v1/";

const refreshTokenFetcher = async (interceptor: InterceptorType) => {
  try {
    // const userStorage = !localStorage.getItem("user")
    //   ? null
    //   : JSON.parse(localStorage.getItem("user") as string);
    // const decoded = jwtDecode(
    //   userStorage?.accessToken ? (userStorage?.accessToken as string) : ""
    // );
    // const isExpired = decoded?.exp
    //   ? dayjs.unix(decoded.exp).diff(dayjs()) < 1
    //   : true;
    const res = await postRefreshToken();
    if (res?.status === "success") {
      const response = await fetch(
        baseUrl +
          interceptor.url +
          `?${interceptor.params?.key}=${interceptor.params?.value}`,
        {
          cache: "no-store",
          method: interceptor.method,
          headers: !interceptor.headers
            ? { "Content-Type": "application/json" }
            : interceptor.headers,
          body: JSON.stringify(interceptor.body),
          credentials: interceptor.credentials || "include",
        }
      );
      const data = await response.json();
      return data;
    } else {
      return {
        status: "expired",
        message: "login to continue!",
      };
    }
  } catch (error) {
    return error;
  }
};

async function queryData(query: queryType) {
  try {
    const res = await fetch(
      baseUrl + query.url + `?${query.params?.key}=${query.params?.value}`,
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

async function mutationData(mutation: mutationType) {
  try {
    const res = await fetch(
      baseUrl +
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

// function handleDecoded() {
//   const storageData = localStorage.getItem("user");
//   let storageString;
//   let decoded;
//   if (storageData && isJsonString(storageData)) {
//     storageString = JSON.parse(storageData);
//     decoded = jwtDecode(storageString?.accessToken);
//   }
//   return { decoded, storageString };
// }
// async function interceptRefreshTokenRequest(request: RequestInit) {
//   const { decoded, storageString } = handleDecoded();
//   const currentTime = new Date();
//   if (decoded?.exp && decoded?.exp < currentTime.getTime() / 1000) {
//     const res = await postRefreshToken();
//     console.log(res);
//   }
//   // Modify request or do something before it is sent
//   return request;
// }
// function interceptRefreshTokenResponse(response: Response): Response {
//   // Modify response or do something with it
//   console.log("Response interceptor:", response);
//   return response;
// }

export { refreshTokenFetcher, queryData, mutationData };
