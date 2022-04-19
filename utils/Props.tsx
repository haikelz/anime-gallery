export type Images = {
  id: number 
  src: string
  name: string
  tag: string 
  link: string
}

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(''); 
};
