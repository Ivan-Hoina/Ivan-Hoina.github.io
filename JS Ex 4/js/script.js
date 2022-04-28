let answer = prompt('How old are you?', '');

if(answer < 18){
    alert('Sorry, you are too young to drive this car. Access blocked');
}else if(answer == 18){
    alert('Greatings with your first drive experiance');
}else{
    alert('The engine is running. Have a nice trip!');
}