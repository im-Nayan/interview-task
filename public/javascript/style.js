const div_second=document.querySelector('.div_second')
const div_third=document.querySelector('.div_third')

function toggler(){
    div_second.classList.add('click')
    div_third.classList.remove('click')
}
function toggler2(){
    div_second.classList.remove('click')
    div_third.classList.add('click')
}