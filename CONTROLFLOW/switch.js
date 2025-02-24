let userRole = 'editor'
switch (userRole) {
    case 'admin':
        console.log('Full access granted');
        break;
    case 'editor':
        console.log('editior access granted');
        break;
    case 'author': 
        console.log('author access granted');
        break;
    case 'student':
        console.log('student access granted');
        console.log('student parents also access granted');
        break;
    default:
        console.log('access denied');
}




let day = 2


switch(day){
    case 0:
    case 6:
        console.log('Happy weekend');
        break   
    case 1:
        console.log('Happy Monday');
    case 2:
    case 3: 
    case 4:
        console.log('Happy MidWeek');
        break
    case 5:
        console.log("Thank God it's Friday");                  
}