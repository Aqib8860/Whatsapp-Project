
import User from "../Models.tsx/User";


export const registerUser = async (user:User) => {
    console.log("Register ", user);
    
    let uri = `${import.meta.env.VITE_BACKEND_DOMAIN}/api/register/`;

    const resp = await fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await resp.json();
    
    console.log("Response ", data)

    return {'data':data,  'status':resp.status};

}

export const checkEmailFromServer = async (email:string) => {
    const resp = await fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/api/check-email/${email}`);
    
    
    if (resp.status === 200) {
        return false;
    }
    else{
        return true;
    }    
}

