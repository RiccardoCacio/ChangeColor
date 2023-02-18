window.onload = function () {
    let buttonChange = document.getElementById('buttonChange')
    buttonChange.addEventListener('click', () => {

        let randomColor = '#' + Math.floor(Math.random() * (256 * 256 * 256).toString(16).padStart(6, '0'))
        document.body.style.background = randomColor;
       
        let spanHex= document.getElementById('spanHex');
        spanHex.innerHTML= randomColor
        

    })


}