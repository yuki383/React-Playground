declare module "recoil" {
  export type AtomOptions<T> = {
    key: string;
    default: T;
  };

  export type AtomObject<T> = {
    key: T;
  };

  export const atom: <T>(obj: AtomOptions<T>) => AtomObject<T>;

  export const useRecoilValue: <T extends AtomObject<any>>(
    atom: T,
  ) => T extends AtomObject<infer U> ? U : never;
}
