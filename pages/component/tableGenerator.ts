export default function createMap(rowCount:any, columnCount:any) {
    let map:any = [];
    for (let x = 1; x < rowCount; x++) {
        for (let y = 1; y < columnCount; y++) {
            addCell(x, y); 
        }
    }

    function addCell(x:any, y:any) {
        map[x] = map[x] || [];
        map[x][y] = [x,y];
    }
   
    return map
}

