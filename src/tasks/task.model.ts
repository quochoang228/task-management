// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TaskModel {
  id: string;
  title: string;
  des: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROCESS = 'IN_PROCESS',
  DONE = 'DONE',
}
