        //TARGETING THE PARENT DIV AND  SPECIFIC BUTTONS OF DIFFERENT ALGORITHMS 
let parentdiv = document.getElementsByClassName('parentdiv');
let bubblesort = document.getElementsByClassName('bubblesort');
let insertionsort = document.getElementsByClassName('insertionsort');
let mergesort = document.getElementsByClassName('mergesort');
let quicksort = document.getElementsByClassName('quicksort');

        //CREATING AN ARRAY AND FILLING RANDOM VALUES
let values = [];
for(let i=0;i<50;i++)
{
  values.push(Math.floor(Math.random()*40));
}
   //FOR EACH ARRAY ELEMENT A DIV IS BEING CREATED ,GIVEN SOME STYLE AND THEN APPENDED IN THE PARENDIV
let k=0;
values.forEach(e =>{

    let innerdiv = document.createElement('div');
    innerdiv.style.height = (e*10 +'px');
    innerdiv.style.margin= '1px';
    innerdiv.style.width = '5px';
    innerdiv.style.backgroundColor = 'rgb(251, 85, 24)';
    innerdiv.style.boxShadow = "3px 3px 0px 0px  #06066f" ;
    innerdiv.style.justifyContent= 'center';
    innerdiv.style.border="1px black solid";
    innerdiv.style.borderRadius = '30px';
    innerdiv.setAttribute('id','element'+k);
    k++;
    innerdiv.classList.add("innerdiv");
    parentdiv[0].appendChild(innerdiv);
})
   
        // EVENT LISTENER ,ONCLICK FOR VARIOUS BUTTONS

bubblesort[0].addEventListener("click", ()=>BubbleSort(values));
insertionsort[0].addEventListener("click", ()=>InsertionSort(values));
mergesort[0].addEventListener("click", ()=>MergeSort(values,0,values.length));
quicksort[0].addEventListener("click", ()=>QuickSort(values,0,values.length-1));

const sleepbubble =(time) =>{
    return new Promise(resolve => setTimeout(resolve,time))
}

// BUBBLE SORT

var lastvalue1 =0;
var lastvalue2=0;
 async function BubbleSort(values)
 {
    for(let p=0;p < values.length-1; p++)
    {
       for(let j=0;j<(values.length-p-1);j++)
       {
            await sleepbubble(0.01);
           if(values[j]>values[j+1])
           {
              swapbubble(values,j);
              changebarheightbubble(j);
           }
           lastvalue1=j+1;
           lastvalue2 =j;
       }
       changebarcolor(lastvalue1);
    }
    changebarcolor(lastvalue2);
 }
 // SWAPPING FUNCTION

 function swapbubble(values,j)
 {
    let swap = values[j];
    values[j] = values[j+1];
    values[j+1] =swap; 
 }

// CHANGE BAR HEIGHT

 function changebarheightbubble(j)
 {
     let a = 'element'+(j+1);
     let b  = 'element'+j;

     let e1 = document.getElementById(a);
     let e2 = document.getElementById(b);
    
     let h1 = e1.clientHeight;
     let h2 = e2.clientHeight;
   
     e1.style.height = h2+'px';
     e2.style.height = h1+'px';
 }
 // CHANGE BAR COLOR
 function changebarcolor(lastvalue1)
 {
   let a = 'element'+lastvalue1;
   let e1 = document.getElementById(a);
   e1.style.backgroundColor ='white';
 }


  // INSERTION SORT

  const sleepinsertion =(time) =>{
   return new Promise(resolve => setTimeout(resolve,time))
}
 async function InsertionSort(values)
{
   for(let i=0;i<values.length-1;i++)
   {
      for(let j=i+1;j>0;j--)
      {
         if(values[j]<values[j-1])
         {
            swapinsertion(values,j);
            changebarcolorinsertionpurple(j);
            await sleepinsertion(50);
            changebarheightinsertion(j);
         }
         changebarcolorinsertiongreen(j);
         changebarcolorinsertiongreen(j-1);
      }
   }
}

 // SWAPPING FUNCTION

  function swapinsertion(values,j)
 {
    let swap = values[j];
    values[j] = values[j-1];
    values[j-1] =swap;
 }

// CHANGE BAR HEIGHT

 function changebarheightinsertion(j)
 {
     let a = 'element'+(j-1);
     let b  = 'element'+j;

     let e1 = document.getElementById(a);
     let e2 = document.getElementById(b);
    
     let h1 = e1.clientHeight;
     let h2 = e2.clientHeight;
   
     e1.style.height = h2+'px';
     e2.style.height = h1+'px';
 }
  // CHANGE BAR COLOR
 function changebarcolorinsertiongreen(lastvalue1)
 {
   let a = 'element'+lastvalue1;
   let e1 = document.getElementById(a);
   e1.style.backgroundColor ='white';
 }
 function changebarcolorinsertionpurple(lastvalue1)
 {
   let a = 'element'+lastvalue1;
   let e1 = document.getElementById(a);
   e1.style.backgroundColor ='rgb(14, 8, 97)';
 }

   //MERGESORT
   const sleepmerge =(time) =>{
    return new Promise(resolve => setTimeout(resolve,time))
    } 

  async function MergeSort(values,start, end) {
    if (end - start == 1) {
        return;
    }
    let mid = Math.trunc((start + end) / 2);
    await  MergeSort(values, start, mid);
    await MergeSort(values, mid, end);

    await Arrange(values, start, mid, end);
}

async function Arrange(values,start,mid,end) {
    let mix = new Array(end-start);
    let mixid = new Array(end-start);
    let i = start;
    let j = mid;
    let k = 0;
    var pb; var kb;
    while (i < mid && j < end) {
        if (values[i] < values[j]) {
            mix[k] = values[i];
            i++;
            k++;
        } else {
            mix[k] = values[j];
            j++;
            k++;
        }
    }
    while (i < mid) {
        mix[k] = values[i];
        i++;
        k++;
    }
    while (j < end) {
        mix[k] = values[j];
        j++;
        k++;
    }
    for (let p = 0; p < mix.length; p++) 
    {
        values[start + p] = mix[p];
        var pb= 'element'+(start+p);
       await sleepmerge(20);
      await  mergechangebarheight(pb,mix[p]);
    }
}
// CHANGE BARHEIGHT AND COLOUR
async function mergechangebarheight(id1,val)
 {
  return new Promise(resolve=>{ 
   let e1 = document.getElementById(id1);
   e1.style.height=(val*10)+'px';
   setTimeout(resolve,50);
  });
 }

       // QUICK SORT
  const sleepquick =(time) =>{
  return new Promise(resolve => setTimeout(resolve,time))
  } 

     async function QuickSort(values, low, high) 
     {
        if (high - low == 0) {
            return;
        }
        let start = low;
        let end = high;
        let mid = Math.trunc((start + end) / 2);
        let pivot = values[mid];
         await changebarcolorpivot(mid);
        while (start <= end) {
            while (values[start] < pivot) {
                start++;
            }
            while (values[end] > pivot) {
                end--;
            }
            if (start <= end) {
             
                let swap = values[end];
                values[end] = values[start];
                values[start] = swap;
                 await sleepquick(20);
                 await changebarheightquick(start,end);
                start++;
                end--;
            }
        }
                  QuickSort(values, low, end);
           await  QuickSort(values, start, high);
    }
         // CHANGEBARHEIGHT
    function changebarheightquick(start,end)
   {
     return new Promise(resolve=>{
       let e1 = document.getElementById('element'+start);
       let e2 = document.getElementById('element'+end);
      
       let h1 = e1.clientHeight;
       let h2 = e2.clientHeight;
     
        e1.style.height = h2+'px';
        e2.style.height = h1+'px';
         setTimeout(resolve,10);
        });
   }
    function changebarcolorpivot(mid)
   {
     return new Promise(resolve=>{
     let a = 'element'+mid;
     let e1 = document.getElementById(a);
     e1.style.backgroundColor ='yellow';
      setTimeout(resolve,10);
     });
   }




  

