export type Category = Array<string>;

export interface Task {
  id: string;
  label: string;
  description?: string;
  category: Category;
  isCompleted: Boolean;
}
