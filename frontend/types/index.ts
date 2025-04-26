export interface IColumn {
    id: number | string
    key: string
    name: string
    type: string
}

export interface IItem {
    id: number | string
    title: string
    body: string
    userId: number
}