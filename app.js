const cols = document.querySelectorAll('.col')
const letters = document.querySelectorAll('span')
const board = document.querySelector('.board')
const fixedDiv = document.querySelector('.fixedDiv')
const resultCount = document.querySelector('.result')
const resultCard = document.querySelector('.resultCard')
let arr = ['class-a']
let resarr = []
let count = 0
let adjective = 'so much strong'
cols.forEach(coll => {
    coll.addEventListener('click', function(e){
        const letter = coll.querySelector('span')
        if(letter.classList.contains('show-letter')){

        }else {
            count+=1
           resultCount.innerHTML=`you have attacked <b>${count}</b> times `
           if(count>25 && count<30) adjective = 'strong'
           else if(count>30 && count<35) adjective='weak'
           else if(count>35) adjective='so much weak'
            resultCard.innerHTML=`Your brain is ${adjective}.`

            let pre = e.target.getAttribute('class')
        arr.push(pre)
        if(arr[arr.length-1] == arr[arr.length-2]){

            let fixedClasess = e.target.getAttribute('class')
           let classes = document.querySelectorAll(`.${fixedClasess}`)
           classes.forEach(n => n.classList.add('fixed-letter'))
           let results = arr[arr.length-1] == arr[arr.length-2]
           resarr.push(results)
        //    if(resarr==10){
        //     alert('You have done')
        // }
            
        }else{
            letters.forEach(letter => letter.classList.remove('show-letter'))
        }
        
        
        const span = coll.querySelector('span')
        span.classList.add('show-letter')

       
       if(resarr.length==10){
        fixedDiv.classList.add('show-fixedDiv')
       }
        
    } 
        }
                                                                                                                                                               
)
})
//another
const btn = document.getElementById('button')
btn.addEventListener('click', function(){
    location.reload()
}) 