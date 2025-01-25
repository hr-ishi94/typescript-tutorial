// infer type

// let username = "Debug media"
// username = 19

// Defining types 

// let userName :string = 'hrishi'
// let age:number = 18
// let subscribers:number = 30_000 
// let isSubscribed :boolean = true
// let skills: string[] = ["js","css","html"]
// let count:number [] = [1,2,4]
// let emptyArray:[] = []
// let userDetails:{name:string,age:number} = {name:'hrishi',age:12}

// Interface Method

// interface UserDetails {
//     name:string;
//     age:number;
//     role:string;
//     getName:()=> void

// }

// let userDetail:UserDetails = {
//     name:'hirhisk',
//     age:18,
//     role:'user',
//     getName:()=>{
//         console.log('hrishi')
//     }
// }

// Type Property

// type UserDetails = {
//     name:string;
//     age:number;
//     role?:string; //Optional operator
// }

// // Union type operator
// type Status = 'Pending' | 'Completed'

// let skills :Status = 'Completed'

// // Optional type operator
// const userDetail:UserDetails = {
    //     name:'hrihsi',
    //     age:25
    // }
    
    
    // inline definition
    // function getUser({name,age}:{name:string,age:number}){
        //     return name;
        // }
        
        
// type UserDetails = {
//     name:string;
//     age:number;
// }

// function getUser (user:UserDetails):string{
//     return user.name
// }

// function printUserName(user:UserDetails):void{
//     console.log('Hello, world!')
// }

// // function overloading


// function add(num1:string,num2:string):string;
// function add(num1:number,num2:number):number;
// function add(num1:any,num2:any):any{
//     return num1 + num2
// }


// add(1,1)
// add('hrihi','kesh')

// generics

// eg1:
function getAge <T>(age:T):T{
    return age   
}

getAge<number>(50)
getAge<string>('55')

// eg2:
type UserDetails = {
    name:string;
    age:number;
}
type AdminDetails = {
    name:string;
    role:string
}

const userDetail:UserDetails ={
    name:'hrishi',
    age:18
}

const adminDetail:AdminDetails = {
    name:"admin",
    role:"sdfsdf"
}

function User <T>(user:T):T{
    return user
}

const userValue = User<UserDetails>(userDetail)
const adminValue = User<AdminDetails>(adminDetail)
