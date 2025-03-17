
// function task1(){
//     console.log("Task1 started")

//     let start = Date.now()
//     let delay = 7000
//     let end = start + delay
    
//     console.log('Task1 executing')
    
//     while(Date.now() <= end){

//     }
//     console.log('Task1 completed')
    
// }

// function task2(){
//     console.log("Task2 started")

//     let start = Date.now()
//     let delay = 14000
//     let end = start + delay
    
//     console.log('Task2 executing')
    
//     while(Date.now() <= end){

//     }
//     console.log('Task2 completed')
    
// }

// function task3(){
//     console.log("Task3 started")

//     let start = Date.now()
//     let delay = 13000
//     let end = start + delay
    
//     console.log('Task3 executing')
    
//     while(Date.now() <= end){

//     }
//     console.log('Task3 completed')
    
// }

// task1()
// task2()
// task3()




function delaySync(ms) {
    const start = Date.now()
    while (Date.now() - start < ms) {
    }
}

function task1() {
    console.log("Task1 started")
    console.log("Task1 executing")
    delaySync(7000)
    console.log("Task1 completed")
}

function task2() {
    console.log("Task2 started")
    console.log("Task2 executing")
    delaySync(14000)
    console.log("Task2 completed")
}

function task3() {
    console.log("Task3 started")
    console.log("Task3 executing")
    delaySync(13000)
    console.log("Task3 completed")
}

task1()
task2()
task3()


