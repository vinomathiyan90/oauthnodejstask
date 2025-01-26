// require('dotenv').config();
// const CilentID = process.env._CILENTID


function handleCredentialResponse(response){
    const token = response.credential;
    console.log("token:",token);
    
}




// window.onload = function(){
//     google.account.id.initialize({
//         cilent_id: CilentID,
//         callback:CredientalResponse
//     })
//     google.account.id.prompt();
    
// }