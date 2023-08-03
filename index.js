const file = document.getElementById('file');
const uplordBox = document.getElementById('uploard-box');
previewImg = uplordBox.querySelector('img');
let inputwidth = document.querySelector('#Inputwidth');

let inputheight = document.querySelector('#Inputheight');

let inputratio = document.querySelector('#aspact-ratio');

let inputreduce = document.querySelector('#reduce');
const downloadbtn = document.querySelector('#btn')
let originaImgRatio;




file.addEventListener('change', (e) => {
    const inputFile = e.target.files[0];
    // console.log(inputFile)
    if(!inputFile){
        return
    }
 
    previewImg.src = URL.createObjectURL(inputFile);
    previewImg.addEventListener('load',(e)=>{
        inputwidth.value = previewImg.naturalWidth;
        inputheight.value = previewImg.naturalHeight;
        originaImgRatio = previewImg.naturalWidth/previewImg.naturalHeight;
        document.querySelector('.main-container').classList.add("active")

    })
    
})
inputwidth.addEventListener('keyup',()=>{
    let height = inputratio.checked ? inputwidth.value/originaImgRatio: inputheight;
    inputheight.value = Math.floor(height);
})
inputheight.addEventListener('keyup',()=>{
    let width = inputratio.checked ? inputheight.value*originaImgRatio: inputwidth;
    inputwidth.value = Math.floor(width);
})


downloadbtn.addEventListener('click',()=>{
    const canvas = document.createElement('canvas');
    const a = document.createElement('a');
    const ctx = canvas.getContext('2d')
    const imgredice = inputreduce.checked ? 0.8:1;
    canvas.width = inputwidth.value;
    canvas.height = inputheight.value;
    ctx.drawImage(previewImg,0,0,canvas.width,canvas.height)
    a.href = canvas.toDataURL('image/jpeg',imgredice)
    a.download = new Date().getTime();
    a.click()
})
uplordBox.addEventListener('click', () => file.click());




