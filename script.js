let mainbg=document.getElementById('main-bg');
let mid=document.getElementById('mid');
let side=document.getElementById('side');
let rock=document.getElementById('rock');
let earth=document.getElementById('earth');
console.log('here');
window.addEventListener('mousemove',function(){
    var x =event.clientX;
    var y=event.clientY;
    if(x>716){
        earth.style.left=35-(x-716)*0.005+'%';
        rock.style.left=20-(x-716)*0.001+'%';
        mainbg.style.left=-5-(x-716)*0.001+'%';
        mid.style.left=-5-(x-716)*0.003+'%';
        side.style.left=63-(x-716)*0.006+'%';
    }
    if(x<716){
        earth.style.left=35+(716-x)*0.005+'%';
        rock.style.left=20+(716-x)*0.001+'%';
        mainbg.style.left=-5+(716-x)*0.001+'%';
        mid.style.left=-5+(716-x)*0.003+'%';
        side.style.left=63+(716-x)*0.006+'%';
    }
    if(y>331){
        earth.style.top=16-(y-331)*0.005+'%';
        rock.style.top=20-(y-331)*0.001+'%';
        mainbg.style.top=-5-(y-331)*0.001+'%';
        mid.style.top=10-(y-331)*0.003+'%';
        side.style.top=-5-(y-331)*0.006+'%';
    }
    if(y<331){
        earth.style.top=16+(331-y)*0.005+'%';
        rock.style.top=20+(331-y)*0.001+'%';
        mainbg.style.top=-5+(331-y)*0.001+'%';
        mid.style.top=10+(331-y)*0.003+'%';
        side.style.top=-5+(331-y)*0.006+'%';
    }
})