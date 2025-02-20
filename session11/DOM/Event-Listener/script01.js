// here having one attribute working  on many  function 

function changeBackgroundColor (color){
    document.body.style.backgroundColor = color
}

const darkMode = document.getElementById('dark-mode')
//darkMode.innerText = 'blackmode'
darkMode.addEventListener('click', function(){
    console.log('i got clicked for dark mode')
    changeBackgroundColor('black')
})

const whiteMode = document.getElementById('white-mode')
whiteMode.addEventListener('click',function(){
    console.log('i got clicked for white mode')
    changeBackgroundColor('white')
})