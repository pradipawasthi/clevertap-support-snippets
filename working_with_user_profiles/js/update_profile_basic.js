// each of the below mentioned fields are optional
// if set, these populate demographic information in the Dashboard
clevertap.profile.push({
 "Site": {
   "Name": "Jack Montana",                  // String
   "Identity": 61026032,                    // String or number
   "Email": "jack@gmail.com",               // Email address of the user
   "Phone": "+14155551234",                 // Phone (with the country code)
   "Gender": "M",                           // Can be either M or F
   "Employed": "Y",                         // Can be either Y or N
   "Education": "Graduate",                 // Can be either School, College or Graduate
   "Married": "Y",                          // Can be either Y or N
   "DOB": new Date(), // Date of Birth. Javascript Date object
   "Age": 28,                               // Not required if DOB is set
   "Tz": "Asia/Kolkata",                    //an abbreviation such as "PST", a full name such as "America/Los_Angeles", 
                                            //or a custom ID such as "GMT-8:00"
   "Photo": 'www.foobar.com/image.jpeg',    // URL to the Image

// optional fields. controls whether the user will be sent email, push etc.
   "MSG-email": false,                      // Disable email notifications
   "MSG-push": true,                        // Enable push notifications
   "MSG-sms": true                          // Enable sms notifications
 }
});
