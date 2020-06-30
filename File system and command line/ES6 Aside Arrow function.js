// const square=(x)=>{
//     return x*x;
// }
// const square=(x)=> x*x
// console.log(square(5))

const event={
    name:'Birthday party',
    guestList:['Rahul','singh','bhardwaj'],
    printguestList(){
        console.log(`Guest list for ${this.name}`)
        this.guestList.forEach((guest)=>{
            console.log(`${guest} is attending ${this.name}`)
        })
    }
}
event.printguestList()
