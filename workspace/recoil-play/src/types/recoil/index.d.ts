declare module "recoil" {
  export type AtomOptions<T> = {
    key: string;
    default: T;
  };

  export type AtomObject<T> = {
    hoge: T;
  };

  type AtomValue<T extends AtomObject<any>> = T extends AtomObject<infer U>
    ? U
    : any;

  export type SetRecoilValue<T> = ((oldValue: T) => T) | T;

  export const atom: <T>(obj: AtomOptions<T>) => AtomObject<T>;

  export const useRecoilValue: <T extends AtomObject<any>>(
    atom: T,
  ) => AtomValue<T>;

  export const useSetRecoilState: <T extends AtomObject<any>>(
    atom: T,
  ) => (newValue: SetRecoilValue<AtomValue<T>>) => AtomValue<T>;

  export const useRecoilState: <T extends AtomObject<any>>(
    atom: T,
  ) => T extends AtomObject<infer U>
    ? [U, (arg: SetRecoilValue<U>) => U]
    : never;

  export const RecoilRoot: React.FC;

  export const selector: <T1>(arg: {
    key: string;
    get: (arg: { get: <T2>(atom: AtomObject<T2>) => T2 }) => T1;
  }) => AtomObject<T1>;
}
