export const useAdd = (a,b) => {
    return a + b;
}
export function ShowDate(){
    return new Date().toLocaleString();
}
function userC(){
    return "C";
}

function userB(){
    return "B";
}


export { userC ,userB as userCalender}