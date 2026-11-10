import{test,expect} from '@playwright/test'

let username="admin";
let password="admin123"

let login=`${username}:${password}`

let loginInfo=btoa(login) //!to convert username and password to Base64 (encoding, not encryption)


test('API testing first',async ({request})=>{

    let getRequest = await request.get(`https://httpbin.org/basic-auth/${username}/${password}`,{
        headers:{
            "Authorization":`Basic ${loginInfo}`
        }
    })

    console.log(getRequest.status());
    console.log(await getRequest.json());

    expect(getRequest.status()).toBe(200);

});
