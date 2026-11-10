import{test,expect} from '@playwright/test'

test('POST API - create a booking',async ({request})=>{

    let postRequest = await request.post("https://restful-booker.herokuapp.com/booking",{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        data:{
            "firstname":"Shashank",
            "lastname":"Bundela",
            "totalprice":1500,
            "depositpaid":true,
            "bookingdates":{
                "checkin":"2026-11-10",
                "checkout":"2026-11-12"
            },
            "additionalneeds":"Breakfast"
        }
    })

    console.log(postRequest.status());
    let responseBody = await postRequest.json();
    console.log(responseBody);

    expect(postRequest.status()).toBe(200);
    expect(responseBody.bookingid).toBeTruthy();
    expect(responseBody.booking.firstname).toBe("Shashank");
    expect(responseBody.booking.totalprice).toBe(1500);

});
