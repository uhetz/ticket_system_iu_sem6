
 var results, asc1 = 1,
            asc2 = 1,
            asc3 = 1;
        window.onload = function () {
            results = document.getElementById("results");
        }

    function sort_table(tbody, col, asc){
            var rows = tbody.rows, rlen = rows.length, arr = new Array(), i, j, cells, clen;
            // fill the array with values from the table
            for(i = 0; i < rlen; i++){
            cells = rows[i].cells;
            clen = cells.length;
            arr[i] = new Array();
                for(j = 0; j < clen; j++){
                arr[i][j] = cells[j].innerHTML;
                }
    }
            
    function getRaw(s){
        return s.replace(/".*"/,''   ).trim();
    }
    
    function getRawFloat(s){
        return s.replace("€",""   ).trim();
    }
    
    switch (col){
        case 0:
             arr.sort(function(a,b){
                 var retval=0;
                 var fA=parseFloat(a[col]);
                 var fB=parseFloat(b[col]);
                 if(a[col] != b[col]){
                        if((fA==a[col]) && (fB==b[col]) ){ retval=( fA > fB ) ? asc : -1*asc; } //numerical
                        else { retval=(a[col] > b[col]) ? asc : -1*asc;}
                        }
                return retval;      
                });
            
            break;
            
        case 1:
           arr.sort(function(a, b){
        return (getRaw(a[col]) == getRaw(b[col])) ? 0 : ((getRaw(a[col]) > getRaw(b[col])) ? asc : -1*asc);
           });
          
            break;
        case 2:
            arr.sort(function(a, b){
        return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? asc : -1*asc);
            });
           
        break;
        case 3:
            arr.sort(function(a,b){
                 var retval=0;
                 var fA=parseFloat(getRawFloat(a[col]));
                 var fB=parseFloat(getRawFloat(b[col]));
                 if(getRawFloat(a[col]) != getRawFloat(b[col])){
                        if((fA==getRawFloat(a[col])) && (fB==getRawFloat(b[col])) ){ retval=( fA > fB ) ? asc : -1*asc; } //numerical
                        else { retval=(getRawFloat(a[col]) > getRawFloat(b[col])) ? asc : -1*asc;}
                        }
                return retval;      
                });
            
            break;
            case 4:
            arr.sort(function(a, b){
        return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? asc : -1*asc);
            });
            
            
            break;
            case 5:
               arr.sort(function(a, b){
            return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? asc : -1*asc);
                });
        
            
            
            break;
        
    };
    
     
    for(i = 0; i < rlen; i++){
        arr[i] = "<td>"+arr[i].join("</td><td>")+"</td>";
    }
    tbody.innerHTML = "<tr>"+arr.join("</tr><tr>")+"</tr>";
    }


    
