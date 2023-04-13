
$(document).keydown(f1)

function f1() {
    if($('#dino').classList !=='jump'){
        $('#dino').addClass('jump')
    }
    setTimeout(
        function (){
            $('#dino').removeClass('jump')
        },1000)
}

function f2(){
    let kaktusleft= $('#kaktus').css('left')
    let dinotop= $('#dino').css('top')
    console.log(kaktusleft+'--'+dinotop)
    dinotop=Number(dinotop.slice(0,-2))
    kaktusleft=Number(kaktusleft.slice(0,-2))
    console.log(dinotop)
    if(0<kaktusleft&&kaktusleft<70 && dinotop >340){
        alert('попался')
        location.reload()
    }
}

setInterval(f2,10)


function f3(){
  let birdleft= $('#bird').css('left')
    let dinotop= $('#dino').css('top')
    console.log(birdleft+'--'+dinotop)
    dinotop=Number(dinotop.slice(0,-2))
    birdleft=Number(birdleft.slice(0,-2))
    console.log(birdleft)
    if(0<birdleft&&birdleft<60 && dinotop <350){
        alert('зах')
        location.reload()
    }
}

setInterval(f3,10)
