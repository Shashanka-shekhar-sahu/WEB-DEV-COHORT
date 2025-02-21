// here having one attribute working  on many function 
// Example 01
// Change Mode with different button
function changeBackgroundColor (color){
    document.body.style.backgroundColor = color
}

function changeTextColor (color){
    document.body.style.color = color
}

const darkMode = document.getElementById('dark-mode')
//darkMode.innerText = 'blackmode'
darkMode.addEventListener('click', function(){
    console.log('i got clicked for dark mode')
    changeBackgroundColor('black')
    changeTextColor('white')
})

const whiteMode = document.getElementById('white-mode')
whiteMode.addEventListener('click',function(){
    console.log('i got clicked for white mode')
    changeBackgroundColor('white')
    changeTextColor('black')
})


//Example 02
// incriment and decriment with show value

const increse = document.getElementById('plus'),
      decrise = document.getElementById('minus')
      result = document.getElementById('show')
      let a = 0
      increse.addEventListener('click', function(){
        a ++
        result.innerText = a
        console.log(a)
      })

      decrise.addEventListener('click',function(){
        a --
        result.innerText = a
        console.log(a)
      })


      //Example 03
      // Basic to do list
            const item = document.getElementById('addText')
           const  btn = document.getElementById('btn')
           const  saveItem = document.getElementById('saveText')
            
             btn.addEventListener('click',function(){
                var paragraph = document.createElement('li')
                paragraph.innerText = item.value
                saveItem.appendChild(paragraph)
                item.value = ""
                console.log(paragraph.innerText)

                const delBtn = document.createElement('button')
                delBtn.innerText ='X'
                paragraph.appendChild(delBtn)
                delBtn.addEventListener('click',function(){
                    paragraph.remove()   
                })

             } )



             //Example 04
             // Change Mode with one button

             function modeChange(color){
                document.body.style.backgroundColor = color
             }

             const themeBtn = document.getElementById('themeChange')

             themeBtn.addEventListener('click',()=>{
             console.log(document.body.style.backgroundColor)
             const currentColor = document.body.style.backgroundColor

             if (! currentColor || currentColor == 'white') {
                modeChange('black')
                themeBtn.innerText = ('light mode')
                changeTextColor('white')

             }else{
                modeChange('white')
                themeBtn.innerText = ('dark mode')
                changeTextColor('black')

             }

             })
             



    


