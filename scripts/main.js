window.onload=function(){
    var menu=document.getElementsByClassName("items")[0];
    document.getElementsByClassName("hamburger")[0].onclick=function(){
        this.classList.toggle("is-active");
        menu.classList.toggle("active");
    }
}