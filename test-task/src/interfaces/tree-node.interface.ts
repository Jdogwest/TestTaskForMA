export interface ITreeNodeInterface {
  id: number;
  title: string;
  is_deleted: boolean;
  deleted_at?: null | string;
  children: ITreeNodeInterface[];
}
