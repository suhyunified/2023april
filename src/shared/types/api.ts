export interface ApiResponse<T> {
  config: any;
  data: {
    data: T;
    result: string;
  };
  headers: any;
  request: any;
  status: number;
  statusText: string;
}
