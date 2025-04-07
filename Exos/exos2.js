const userListData = [
{ firstName: "John" , lastName:"Doe", age:28 },
{ firstName:"Anna" , lastName:"Smith",age:32 },
{ firstName:"Peter" , lastName:"Jones",age:38 }];

function filterUserByLastName(userList, lastname){
    if(!userList){
        return "List undefined";
    }
    const filteredList = userList.filter((user)=>{
        return user.lastName.toLowerCase().includes(lastname.toLowerCase());
    })
    return filteredList;
}

function filterUserByAge(userList, age){
    if(!userList){
        return "List undefined";
    }
    const filteredList = userList.filter((user)=>{
        return user.age == age;
    })
    return filteredList;
}

const filteredListUserByLastname = filterUserByLastName(userListData, "ones");
console.log("By lastname",filteredListUserByLastname);


const fiilteredListByAge = filterUserByAge(userListData, 28);
console.log("By age",fiilteredListByAge)