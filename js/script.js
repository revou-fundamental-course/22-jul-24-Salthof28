
function formValidation() {
    let name = document.getElementById('input-name').value;
    console.log(name);
    let email = document.getElementById('input-email').value;
    console.log(email);
    let interested = document.getElementById('input-interested').value;
    console.log(interested);

    if (name =='' || email == '' || interested == '') {
        alert('Maaf Proses input tidak dapat diproses karena ada inputan yang kosong');
    }
    else {
        alert ('Proses Input Data Behasil');
    }
}

let indexSlide = 1;
showslide(1);


function nextSlide(n) {
    showslide(indexSlide += n);
    
}


function showslide(n) {
    let listImage = document.getElementsByClassName('main_content_banner');
    console.log(listImage);

    if (n > listImage.length) {
        indexSlide = 1;
    }

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    
}

setInterval(() => nextSlide(1), 3000);