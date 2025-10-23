import api from "./api";

export interface ApiResponse<T> {
  data: T | null;
  message: string;
  error: string | any | null;
}

export const postRequest = async <T>(
  endpoint: string,
  payload: Record<string, any>
): Promise<ApiResponse<T>> => {
  try {
    const response = await api.post<T>(endpoint, payload, {
      validateStatus: (status) => {
        return status < 400;
      },
    });
    return { data: response.data, error: null, message: "" };
  } catch (error: any) {
    return {
      data: null,
      error: error,
      message: error.response?.data.message || error.message,
    };
  }
};

export const getRequest = async <T>(
  endpoint: string,
  params: Record<string, any> = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await api.get<T>(endpoint, {
      params,
      validateStatus: (status) => {
        return status < 400;
      },
    });
    return { data: response.data, error: null, message: "" };
  } catch (error: any) {
    return {
      data: null,
      error: error,
      message: error.response?.data || error.message,
    };
  }
};
