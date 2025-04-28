export interface IColumn {
    id: number | string
    key: string
    name: string
}

export interface IItem {
    id: number | string
    title: string
    description: string
    created_at: string,
    updated_at: string

}

export interface IConfig {
    api_url: string
}

export interface IParams {
    page: number;
    pageSize: number;
}

export interface IItemResponse {
    data: {
        item: IItem
    },
    message: string,
    success: boolean,
    status: number
}

export interface IItemListResponse {
    data: {
        items: IItem[],
        page: number,
        pageSize: number,
        total: number,
        totalPages: number
    }
    message: string,
    success: boolean,
    status: number
}

export interface IItems {
    list: IItem[];
    total: number;
    totalPages: number;
}