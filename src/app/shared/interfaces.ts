export interface ITodo {
    id: number,
    title: string,
    isCompleted: boolean,
    targetDate: string,
    tags: string;
    category: string
}

export interface ITag {
    label: string,
    checked: boolean
}