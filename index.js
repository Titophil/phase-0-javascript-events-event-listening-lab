let input = document.getElementById('button')
function addingEventListener() {
    if(input){
        input.addEventListener('click',function(){
        alert('I was clicked!')
        })
    }
        else{
            console.error('No event!')

        }

    }




