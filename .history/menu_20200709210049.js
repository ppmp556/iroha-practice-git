const toggler = document.getElementById('navToggle');
//#navToggleを取得し、togglerに格納


const navList = document.getElementById('navLists');
//#navListsを取得し、navListに格納

const navBoxs = document.getElementById('ly-navBoxs');

toggler.addEventListener('click', function() {　
    //togglerクリックされたら、
    
    
    toggler.classList.toggle('clicked');　
    //clickedクラスがあれば削除
    //clickedクラスがなければ付与
    
    navList.classList.toggle('clicked');

    navBoxs.classList.toggle('clicked');
});