export interface SidebarMainMenu {
  title: string;
  path: string;
  icon: string;
  isExact?: boolean;
}

// This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
// the expected return type of your API response.
export type ApiResponse = Record<string, any>;

export type DataMap<T> = Record<string, T>;
