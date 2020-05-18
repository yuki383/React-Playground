declare module "recoil" {
  export type Atom<T> = {
    hoge: T;
  };

  export type AtomValue<T extends Atom<any>> = T extends Atom<infer U>
    ? U
    : any;
  export type GetRecoilState = <A extends Atom<any>>(atom: A) => AtomValue<A>;
  export type SetRecoilState = <A extends Atom<any>>(
    atom: A,
  ) => (newValue: Distribute<A>) => void;
  export type ResetRecoilState = <A extends Atom<any>>(atom: A) => () => void;

  export type Distribute<T extends Atom<any>> = T extends Atom<infer U>
    ? ((oldValue: U) => U) | U
    : never;

  export const atom: <T>(obj: { key: string; default: T }) => Atom<T>;

  export const useRecoilValue: GetRecoilState;
  export const useSetRecoilState: SetRecoilState;
  export const useRecoilState: <A extends Atom<any>>(
    atom: A,
  ) => [AtomValue<A>, (arg: Distribute<A>) => void];
  export const useResetRecoilState: ResetRecoilState;

  export const RecoilRoot: React.FC;

  export type SetStateWithAtom = <A extends Atom<any>>(
    atom: A,
    newState: AtomValue<A>,
  ) => void;

  export type SelectorOptions = {
    get: GetRecoilState;
    set: SetStateWithAtom;
    reset: ResetRecoilState;
  };

  export type SelectorGet<T> = (obj: { get: GetRecoilState }) => T;

  export type Opt<T> = {
    key: string;
    get: SelectorGet<T>;
    set?: (obj: SelectorOptions, newValue: T) => void;
  };

  export const selector: <T>(arg: Opt<T>) => Atom<T>;
}
