const user_name = document.getElementById('name');
const user_email = document.getElementById('emailid');
const user_Password = document.getElementById('password');
const user_Confirm_Password = document.getElementById('password_confirm');
const sign_In_button = document.getElementById('sign_in_button');
const login = document.getElementById('login');

function check_if_user_exist(e_id){

    let usres = JSON.parse(localStorage.getItem('users')); // user is a array of obj
    const obj = usres.find(userobj=>{
        return userobj.Email_id === e_id;
    });

    if(obj) {
        return true;
    }
    else {
        return false;
    }
}


// adding a new user to the localstorage in a JSON format 
function ADD_new_user(Uname, mail_id, pwd ) {
    let new_User_obj = {
        User_name : Uname,
        Email_id : mail_id,
        Password : pwd,
    };

    let users = JSON.parse(localStorage.getItem('users')); // users will become an array of object 
    if (users === null) {  // 
        users = [];
    }

    users.push(new_User_obj);
    localStorage.setItem('users',JSON.stringify(users)); 


}

// on clicking the sign u button 
sign_In_button.addEventListener('click',(event) =>{
    event.preventDefault();
    // check if any field is empty or filled with  => "      " 
    if (
        user_name.value.trim() === "" ||
        user_email.value.trim() === "" ||
        user_Password.value.trim() === "" ||
        user_Confirm_Password.value.trim() === "" 
    ) {
        alert("** all field mandatory **");
    }
    // if the fields are filled then check if the password
    else{
        if (
            user_Password.value.trim() !== user_Confirm_Password.value.trim()
        ) {
            alert("XX Password and Confirm_Password does not match XX");
            user_Password.value = '';
            user_Confirm_Password = '';
        }

        else {
            if (localStorage.getItem(users)) {  // c
                if (check_if_user_exist(user_email.value)) {
                    alert(" user alrady exist ! ")
                }
                else{
                    ADD_new_user(user_name.value, user_email.value, user_Password.value);
                }
            } else {
                ADD_new_user(user_name.value, user_email.value, user_Password.value);
            }
        }
    }
} )

/*
login.addEventListener('click', () =>{
    location.href='';
})

*/