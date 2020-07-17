export interface ITodo {
  title: string;
  description: string;
  marked?: boolean;
  tagColor?: Tag;
  created_at: Date;
  done?: boolean;
}

export enum Tag {
  Orange,
  Blue,
  Red,
  Green
}
