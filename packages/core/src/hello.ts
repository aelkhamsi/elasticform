import { HelloProps } from "./types";

export const hello = ({ firstName }: HelloProps) => {
  console.log(`Hello ${firstName} from the @elasticform/core package`);
};
