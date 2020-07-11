const toggler = document.getElementById('navToggle');
//#navToggleを取得し、togglerに格納


const navList = document.getElementById('navLists');
//#navListsを取得し、navListに格納

const heaDer = document.getElementById('ly-navBoxs');

toggler.addEventListener('click', function() {　
    //togglerクリックされたら、
    
    heaDer.classList.toggle('clicked');
    toggler.classList.toggle('clicked');　
    //clickedクラスがあれば削除
    //clickedクラスがなければ付与
    
    navList.classList.toggle('clicked');

    
});