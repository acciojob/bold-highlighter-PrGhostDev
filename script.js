function highlight() {
    //Write your code here
    const strongElements = document.querySelectorAll('p strong'); 
    strongElements.forEach((element) => {
        element.style.color = 'green';
    });
}


function return_normal() {
    //Write your code here
    const strongElements = document.querySelectorAll('p strong');
      
    strongElements.forEach((element) => {
        element.style.color = 'black';
    });
    
}
