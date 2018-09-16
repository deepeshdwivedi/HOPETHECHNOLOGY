function checkRow(idx,col,num,Grid){
    i=0    
    while(i<9){

            if(i!=col && Grid[idx][i]==num){
                return true;}
            i++;
            }
        return false;}
    function checkColumn(idx,row,num,Grid){
        i=0    
    while(i<9){
            if(i!=row && Grid[i][idx]==num){
                return true;}
            i++;
            }
        return false;}
    function checkBox(row,col,num,Grid){
        console.log(Grid)
        i=row-row%3;
        j=col-col%3;
        x=i;
        y=j;
        while (i<x+3){
            j=y;
            while (j<y+3){
                if((i!=row || j!=col) && Grid[i][j]==num){
                     return true;
                      }
                j++}
            i++}
        return false;}
    function checkValid(row,col,num,Grid){
        return !checkRow(row,col,num,Grid) && !checkColumn(col,row,num,Grid) && !checkBox(row,col,num,Grid); }
function checkSudoku(Grid)
{
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(!checkValid(i,j,Grid[i][j],Grid)){
            return false; 
            }
        }
        
        }
return true;
}

        grid=[
			[4,3,5,2,6,9,7,8,1],
			[6,8,2,5,7,1,4,9,3],
			[1,9,7,8,3,4,5,6,2],
			[8,2,6,1,9,5,3,4,7],
			[3,7,4,6,8,2,9,1,5],
			[9,5,1,7,4,3,6,2,8],
			[5,1,9,3,2,6,8,7,4],
			[2,4,8,9,5,7,1,3,6],
			[7,6,3,4,1,8,2,5,9],
	]
if(checkSudoku(grid)){
console.log("valid sudoku");
}else{
    console.log("invalid sudoku");
}
