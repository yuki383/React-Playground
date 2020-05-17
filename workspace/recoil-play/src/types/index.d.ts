declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};
