export interface IRectangle {
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
    project: {
        id: string,
        name: string,
        width: number,
        height: number,
        items: IRectangle[]; 
    }
}