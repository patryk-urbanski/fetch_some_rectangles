export interface IItem {
    id: string,
    color: string,
    rotation: number,
    x: number,
    y: number,
    width: number,
    height: number,
}

export interface IProject {
    id: string,
    name: string,
    width: number,
    height: number,
    items: IItem[];
}