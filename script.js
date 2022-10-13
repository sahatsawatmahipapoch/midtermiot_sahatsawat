document.addEventListener('DOMContentLoaded',function(){
    fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
});