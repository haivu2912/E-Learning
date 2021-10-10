const dropdownUser = document.querySelector('.dropdown-user__menu')
const avatar = document.querySelector('#avatar');

const groupBtn1 = document.getElementsByClassName('filter__btn')[0];
const dropdownList1 = document.getElementsByClassName('dropdown__list')[0];
const groupBtn2 = document.getElementsByClassName('filter__btn')[1];
const dropdownList2 = document.getElementsByClassName('dropdown__list')[1];
const groupBtn3 = document.getElementsByClassName('filter__btn')[2];
const dropdownList3 = document.getElementsByClassName('dropdown__list')[2];

const moreBtn = document.querySelector('.ellipsis-wrap');
const dropdownList4 = document.querySelector('.ellipsis-wrap .dropdown__list');



dropdownUser.style.display = 'none';
dropdownList1.style.display = 'none';
dropdownList2.style.display = 'none';
dropdownList3.style.display = 'none';
dropdownList4.style.display = 'none';


avatar.onclick = () => {
    if(dropdownUser.style.display == 'none') {
        dropdownUser.style.display = 'block';
    }else{
        dropdownUser.style.display = 'none';
    }
}

groupBtn1.onclick = () => {
    if(dropdownList1.style.display == 'none') {
        dropdownList1.style.display = 'block';
    }else{
        dropdownList1.style.display = 'none';
    }
}

groupBtn2.onclick = () => {
    if(dropdownList2.style.display == 'none') {
        dropdownList2.style.display = 'block';
    }else{
        dropdownList2.style.display = 'none';
    }
}

groupBtn3.onclick = () => {
    if(dropdownList3.style.display == 'none') {
        dropdownList3.style.display = 'block';
    }else{
        dropdownList3.style.display = 'none';
    }
}

moreBtn.onclick = () => {
    if(dropdownList4.style.display == 'none') {
        dropdownList4.style.display = 'block';
    }else{
        dropdownList4.style.display = 'none';
    }
}

