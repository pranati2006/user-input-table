number=0
function addRow(id){
    
    const table = document.getElementById(id);
    m=table.innerHTML
    n=m.split(`</th>`).length - 1
    const newRow = table.querySelector('tbody').insertRow(); 
   newRow.classList.add('row'+`${number}`)
   console.log(newRow)
   number++
    th=table.querySelector('thead').querySelector('tr').querySelectorAll('th')
    
    
    for (let i=0; i<n ; i++){

        
        const cell = newRow.insertCell(i);

        // if (th[i].classList.contains('radio')){
        //     cell.innerHTML = '';
        //     list=(th[i].getAttribute('val').split(','))
        //     for(j=0;j<list.length;j++){
        //         cell.innerHTML+= `<div><input type="radio" name='radio`+`${i}'><label>${list[j]}</label></div>`
        //     }
            
        // }
         if (th[i].classList.contains('date')){
        if (th[i].classList.contains('disabled')){cell.innerHTML = `<input class='inp' disabled type="date">`}else{cell.innerHTML = `<input class='inp' type="date">`}
            ;
        }
        else if (th[i].classList.contains('number')){
            // cell.innerHTML = `<input class='inp' type="number">`;
            if (th[i].classList.contains('disabled')){cell.innerHTML = `<input class='inp' disabled type="number">`}else{cell.innerHTML = `<input class='inp' type="number">`}
        }
        else if (th[i].classList.contains('select')){
            if (th[i].classList.contains('disabled')){p = `<select class='inp' disabled name="selval" id="selval">`;
                list=(th[i].getAttribute('val').split(','))
                
                for(j=0;j<list.length;j++){
                    
                    p+= `<option value="${list[j]}">${list[j]}</option>`
                    
                    if(j==(list.length-1)){
                        p+=`</select>`
                        
                    }
                }cell.innerHTML=p}else{
                    p = `<select class='inp' name="selval" id="selval">`;
            list=(th[i].getAttribute('val').split(','))
            
            for(j=0;j<list.length;j++){
                
                p+= `<option value="${list[j]}">${list[j]}</option>`
                
                if(j==(list.length-1)){
                    p+=`</select>`
                    
                }
            }cell.innerHTML=p
                }
            
        }
        
        else if (th[i].classList.contains('delete')){
           
            cell.innerHTML = `<div class='dbb'
            ><button class='delb' onclick='delrow(${number-1},${id})''>DEL</button></div>`;
            console.log(cell.innerHTML)
        }
        else {
            // cell.innerHTML = `<input class='inp' type="text">`;
            if (th[i].classList.contains('disabled')){cell.innerHTML = `<input class='inp' disabled type="text">`}else{cell.innerHTML = `<input class='inp' type="text">`}
        }









        inp=document.querySelectorAll('.inp');
        console.log(inp)
        inp.forEach((val,ind)=>{
        val.addEventListener('keydown',(event)=>{
        if (event.keyCode===13){
            console.log(val,ind)
            
            for (i=ind;i<inp.length;i++){
                m=inp[i+1].tagName
                console.log(m)
                console.log(i)
                console.log(inp[i])
                if (inp[i+1].disabled){
                    continue
                }
                else{
                    inp[i+1].focus()
                    break
                }
            }
            
        }
    })
})
       

  
}}

function delrow(i,table){
    console.log(i)
    console.log(table)
    // const table = document.getElementById(id);
    body=table.querySelector('tbody')
    let clas = '.row'+i
    console.log(clas)
    rows=document.querySelector(clas)
    console.log(rows)
    rows.style.display='none'
    // m=table.innerHTML
    // n=m.split(`</th>`).length - 1
    
    //     console.log(rows.pop(i))
    //     console.log(rows)
    
    // table.querySelector('tbody').querySelectorAll('tr')=rows

}



// inp=document.querySelectorAll('.inp');
// console.log(inp)
// inp.forEach((val,ind)=>{
//     val.addEventListener('keydown',(event)=>{
//         if (event.keyCode===13){
//             console.log(val,ind)
            
//             for (i=ind;i<inp.length;i++){
//                 m=inp[i+1].tagName
//                 console.log(m)
//                 console.log(i)
//                 console.log(inp[i])
//                 if (inp[i+1].disabled){
//                     continue
//                 }
//                 else{
//                     inp[i+1].focus()
//                     break
//                 }
//             }
            
//         }
//     })
// })