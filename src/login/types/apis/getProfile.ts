export interface Response {
  result: string;
  data: {
    nickname: string;
    isNicknameUpdateAvailable: boolean;
  };
}
