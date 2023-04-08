export interface RequestParams {
  wishId: number;
}

export interface Response {
  result: string;
  data: {
    wishId: number;
    reactionCount: number;
  };
}
