import { IRectangle } from "../../types";

interface ICornerCoordinates {
    pivotX: number,
    pivotY: number,
    cornerX: number,
    cornerY: number,
    angle: number,
}


const getCorner = ({ pivotX, pivotY, cornerX, cornerY, angle }: ICornerCoordinates )  => {
    const diffX = cornerX - pivotX;
    const diffY = cornerY - pivotY;
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);
    
    const angleFromPivotToCorner = angle + Math.atan2(diffY, diffX);

    const x = pivotX + distance * Math.cos(angleFromPivotToCorner);
    const y = pivotY + distance * Math.sin(angleFromPivotToCorner);
    
    return ({ x, y });
}

export const generateBoundingBox = (width: number, height: number, rotation: number) => {
    const angle = rotation * Math.PI / 180;

    const rectCornersCoordinates = [width, height, width, height];
    const px = width / 2;
    const py = height / 2;

    const c1 = getCorner({ pivotX: px, pivotY: py, cornerX: rectCornersCoordinates[0], cornerY: rectCornersCoordinates[1], angle });
    const c2 = getCorner({ pivotX: px, pivotY: py, cornerX: rectCornersCoordinates[0] + rectCornersCoordinates[2], cornerY: rectCornersCoordinates[1], angle });
    const c3 = getCorner({ pivotX: px, pivotY: py, cornerX: rectCornersCoordinates[0] + rectCornersCoordinates[2], cornerY: rectCornersCoordinates[1] + rectCornersCoordinates[3], angle });
    const c4 = getCorner({ pivotX: px, pivotY: py, cornerX: rectCornersCoordinates[0], cornerY: rectCornersCoordinates[1] + rectCornersCoordinates[3], angle });


    const bx1 = Math.min(c1.x, c2.x, c3.x, c4.x);
    const by1 = Math.min(c1.y, c2.y, c3.y, c4.y);
    const bx2 = Math.max(c1.x, c2.x, c3.x, c4.x);
    const by2 = Math.max(c1.y, c2.y, c3.y, c4.y);

    return ({
        width: bx2 - bx1, 
        height: by2 - by1
    });
}