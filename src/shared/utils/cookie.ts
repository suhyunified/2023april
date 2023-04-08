export function setCookie(
  name: string,
  value: string,
  expiredTimeStamp: number = 3 * 24 * 60 * 60 * 1000,
  domain?: string
) {
  const date = new Date();
  date.setTime(date.getTime() + expiredTimeStamp);

  let cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  if (domain) {
    cookie += `; domain=${import.meta.env.VITE_DOMAIN}`;
  }

  document.cookie = cookie;
}

export function getCookie(name: string) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");

  if (parts.length === 2) {
    return parts.pop()?.split(";")?.shift();
  }
}

export function deleteCookie(name: string) {
  const date = new Date();
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=; expires=${date.toUTCString()}; path=/`;
}
