function img1(){
    var changemement;
    document.getElementById('imgslide1').style.left = '631px';
    document.getElementById('imgslide1').style.maxWidth = '400px';
    document.getElementById('imgslide1').style.zIndex = '800';
    document.getElementById('imgslide1').style.top = '100px';
    document.getElementById('imgslide1').style.filter = 'none';
    document.getElementById('imgslide2').style.left = '350px';
    document.getElementById('imgslide2').style.maxWidth = '300px';
    document.getElementById('imgslide2').style.zIndex = '0';
    document.getElementById('imgslide2').style.top = '125px';
    document.getElementById('imgslide2').style.filter = 'none';
    changemement++
    if (changemement>0){

    }
}

function img2(){
    document.getElementById('imgslide2').style.left = '631px';
    document.getElementById('imgslide2').style.maxWidth = '400px';
    document.getElementById('imgslide2').style.zIndex = '800';
    document.getElementById('imgslide2').style.top = '100px';
    document.getElementById('imgslide2').style.filter = 'none';
    document.getElementById('imgslide1').style.left = '350px';
    document.getElementById('imgslide1').style.maxWidth = '300px';
    document.getElementById('imgslide1').style.zIndex = '0';
    document.getElementById('imgslide1').style.top = '125px';
    document.getElementById('imgslide1').style.filter = 'none';
}
