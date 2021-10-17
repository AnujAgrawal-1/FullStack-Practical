let counter =document.getElementById("value");
        // var s=document.getElementsByClassName('decreament');
     

        let count=0;
        function dec(){
            if(counter.innerText<'1'){
             document.getElementById("decreament").disabled = true;
            }
            else{
            count--;
            counter.innerText=count;}
            
        }
        function inc(){
            count++;
            counter.innerText=count;
            document.getElementById("decreament").disabled = false;
            
        }
