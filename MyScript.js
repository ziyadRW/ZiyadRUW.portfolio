(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function openPdf(){
<<<<<<< HEAD
    var pdfPath = './img/Ziyad-Alruwaished-Resume.pdf'; 

    // Open the PDF file in a new tab
    window.open(pdfPath, '_blank');
}
=======
    var pdfPath = './img/ZidAlruwaishedCV.pdf'; 

    // Open the PDF file in a new tab
    window.open(pdfPath, '_blank');
}
>>>>>>> c8cbde7f14e95a3797638700399c3cb4cec5509d
