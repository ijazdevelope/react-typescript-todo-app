export interface Note {
    id: string,
    title: string,
    text: string,
    color: String,
    date: string
}

export interface Todo {
    id: number,
    todo: string,
    isDone: boolean,
    // counter: number
}
