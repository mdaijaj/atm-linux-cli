var readline=require("readline-sync");  
console.log("Welcome to the ICC bank ATM");
var insertATM=readline.question("Insert Debit Card: ");
if(insertATM=="y"){
    console.log("Select Your Language           1. English")
    console.log("Select Your Language           2. Hindi")
    console.log("Select Your Language           3. Punjabi")
    console.log("Select Your Language           4. Urdu")
    console.log("5. Generate ATM PIN \n")
    var language=readline.question("Select your above option: ");
    if(language==1){
        english_language()
    }
    else if(language==2){

    }else if(language==3){

    }else if(language==4){

    }else if(language==5){
        pin_generate()
    }else{
        console.log("please choose correct option.....")
    }
}else{
    console.log("Your ATM card not accept remove and try again properly.....")
}  



function english_language(){
    var pin=(readline.question("Please Enter your pin number: "));
    if(pin.length==4){
        console.log("1. MOBILE RECHARGE");
        console.log("2. OPEN FUND DEPOSITE");
        console.log("3. UTILITY BILL PAYMENT");
        console.log("4. PIN CHANGE");
        console.log("5. ULTRA FAST CASH");
        console.log("6. CASH WITHDRAW");
        console.log("7. BALANCE INQUIRY");
        console.log("8 MORE OPTION \n")

        var user=Number(readline.question("What do you want to do? "));

        if(user===1){
            mobile_recharge()
        }else if(user==2){
            money_deposite()
        }else if(user===3){
            bill_payment()
        }else if(user===4){
            pin_generate()
        }else if(user==5){
            fast_cash()
        }else if(user===6){
            cash_withdraw()
        }else if(user==7){
            balance_inquiry()
        }else if(user==8){
            more_option()
        }else{
            console.log("please choose valid input/......")
        }
    }else{
        console.log("Invalid Pin! Please Enter correct pin number..... \n")
    }
}


function pin_generate(){
    console.log("1. generate otp")
    console.log("2 allready have otp generate ATM pin no")
    var option=readline.question("choose of the following above? ");
    if(option==1){
        var mobile_no=readline.question("Enter register mobile no? ");
        var dob=readline.question("enter you dob?")
        console.log("please wait your transection is being proceed")
        console.log("you otp has been sent your registered mobile no.")
        console.log("please card swap again....")
    }else if(option==2){
        var sent_otp=Math.floor(Math.random() * 9999);
        console.log(sent_otp)
        var enter_otp=readline.question("enter your mobile registered otp number")
        if(enter_otp.length==4){
            if(sent_otp==enter_otp){
                console.log("please wait your transection is being proceed")
                var new_pin=readline.question("enter your NEW PIN")
                var re_new_pin=readline.question("Re-enter your NEW PIN")
                if(new_pin==re_new_pin){
                    console.log("your pin has been changed Successfully!")
                }else{
                    console.log("please match new pin.....")
                }
            }else{
                console.log("please choose correct otp no.....")
            }
        }else{
            console.log("please otp length should be 4th digit...")
        }
    }else{
        console.log("please choose valid input.......")
    }
}


function mobile_recharge() {
    var mobile=Number(readline.question("Please Enter mobile number:"));
    var amount=Number(readline.question("Please Enter Amount.."));
    console.log("1. Saving Account:");
    console.log("2. Current Account:");
    console.log("3. Credit Card: \n")
    var choose=Number(readline.question("Type of account?"));
    if(choose===1){
        console.log("please wait your transection is being proceed")
        console.log("Your mobile has been recharged Successfully!")
    }else if(choose==3){
        var mobile=Number(readline.question("Please Enter your credit card detail"));

    }
}

function money_deposite() {
    var account_no=Number(readline.question("Please Enter account number:"));
    var re_account_no=Number(readline.question("Please Re-Enter account number:"));
    if(account_no===re_account_no){
        console.log("your Account Number is:", account_no)
        console.log("1. Add Cash")
        console.log("2. Canceled")
        var choose=Number(readline.question("choose above option: "));
        if(choose==1){
            console.log("Insert money below the box.....")
            console.log("yoru cash is beeing sorted")
            var arr=[100, 500, 1000, 2000,3000, 5000, 10000, 20000, 30000, 50000]
            var amt=arr[Math.floor(Math.random()*arr.length)];
            console.log("confirm deposite verify account_no: ",account_no)
            console.log("confirt add to balance: ", amt)
            var confirm=readline.question("confirm your detail: ");
            if(confirm=="y"){
                console.log("please wait your transection is being proceed")
                console.log("fund deposite Successfully!")
            }else{
                console.log("please try again.....")
            }
        }else{
            console.log("money deposite Canceled please try again later......")
        }
    }else{
        console.log("please input match account_no......")
    }
}

function bill_payment() {
    console.log("1. Saving Account:");
    console.log("2. Current Account:");
    console.log("3. David/Credit Card payment: \n")
    var choose=Number(readline.question("choose of payment method"));
    if(choose==1){
        console.log("1. Mobile payment:");
        console.log("2. Electricity payment:");
        console.log("3. Gas payment:");
        console.log("4. Policy payment:");
        console.log("5. School/collage fee payment:")
        console.log("6. : \n")

        var payment=Number(readline.question("Select of payment above"));
        if(payment==2){
            
            var arr={
                "Andhra Pradesh": [
                    "Central Power Distribution Company of A.P. Ltd.", 
                    "Eastern Power Distribution Company of A.P. Ltd.", 
                    "Northern Power Distribution Company of A.P. Ltd."
                ],
                "Assam": [
                    "Central Assam Electricity Distribution Company Ltd.",
                    "Lower Assam Electricity Distribution Company Ltd.",
                    "Upper Assam Electricity Distribution Company Ltd."
                ],
                "Bihar": "Bihar State Electricity Board",
                "Chattisgarh": "Chhattisgarh State Power Distribution Company Ltd.",
                "Delhi": [
                    "BSES Rajdhani Power Ltd.",
                    "BSES Yamuna Power Ltd.",
                    "New Delhi Municipal Council",
                    "North Delhi Power Ltd."
                ],
                "Gujarat": [
                    "Dakshin Gujarat Vij Company Ltd.",
                   "Madhya Gujarat Vij Company Ltd.",
                    "Paschim Gujarat Vij Company Ltd.",
                   "Torrent Power Ltd.",
                    "Uttar Gujarat Vij Company Ltd."
                ],
                "Haryana": [
                    "Dakshin Haryana Bijli Vitran Nigam",
                    "Uttar Haryana Bijli Vitran Nigam Ltd."
                ],
                "Himachal Pradesh": "Himachal Pradesh State Electricity Board",
                "Jharkhand": [
                    "Damodar Valley Corporation",
                    "Jamshedpur Utility and Services Company",
                    "Jharkhand State Electricity Board",
                    "Bokaro Power Supply Co Pvt. Ltd."
                ],
                "Karnataka": [
                    "Bangalore Electricity Supply Company Ltd.",
                    "Chamundeshwari Electricity Supply Corporation Ltd.",
                    "Gulbarga Electricity Supply Company Ltd.",
                    "Hubli Electricity Supply Company Ltd.",
                    "Mangalore Electricity Supply Company Ltd."
                ],
                "Kerala": "Kerala State Electricity Board",
                "Manipur": "Electricity Department, Manipur",
                "Madhya Pradesh": [
                    "Madhya Pradesh Paschim Kshetra Vidyut Vitran Co. Ltd.",
                    "M.P. Poorv Kshetra Vidyut Vitran Co.",
                    "M.P.Madhya Kshetra Vidyut Vitran Co."
                ],
                "Maharashtra": [
                    "Best Undertaking",
                    "Maharashtra State Electricity Distribution Co. Ltd.",
                    "Reliance Energy Ltd.",
                    "Tata Power Ltd."
                ],
                "Meghalaya": "Meghalaya State Electricity Board",
                "Orissa": [
                    "Central Electricity Supply Company of Orissa Ltd.",
                    "North Eastern Electricity Supply Company of Orissa Ltd.",
                    "Southern Electricity Supply Company of Orissa Ltd.",
                    "Western Electricity Supply Company of Orissa Ltd.",
                ],
                "Punjab": "Punjab State Electricity Board",
                "Rajasthan": [
                    "Ajmer Vidyut Vitran Nigam Ltd.",
                    "Jaipur Vidyut Vitran Nigam Ltd.",
                    "Jodhpur Vidyut Vitran Nigam Ltd."
                ],
                "Tamil Nadu": "Tamil Nadu Electricity Board",
                "Tripura": "Tripura State Electricity Corporation Ltd",
                "Uttarakhand": "Uttarakhand Power Corporation Ltd",
                "Uttar Pradesh": [
                    "Dakshinanchal Vidyut Vitran Nigam Ltd.",
                    "Kanpur Electric Supply Co. Ltd.",
                    "Madhyanchal Vidyut Vitran Nigam Ltd.",
                    "Noida Power Company Ltd.",
                    "Paschimanchal Vidyut Vitran Nigam Ltd",
                    "Purvanchal Vidyut Vitran Nigam Ltd.",
                    "Uttar Pradesh Power Corporation Ltd."
                ],
                "West Bengal": [
                    "Calcutta Electricity Supply Company Ltd.",
                    "Damodar Valley Corporation",
                    "DPSC Ltd.",
                    "West Bengal State Electricity Distribution Company Ltd."
                ]
            }
            count=0
            counter=0
            for (var key in arr){
                count+=1
                console.log( count, key );
            }
            var choose=Number(readline.question("Select State given above."));
            for (var key in arr){
                counter+=1
                if(choose==counter){
                    for (var i in arr[key]){
                        console.log(i, arr[key][i])
                    }
                    var power=Number(readline.question("Select Electricity given above."));
                    for (var j in arr[key]){
                        if(power==j){
                            console.log("please wait your transection is being proceed......")
                            console.log(arr[key][j])  
                            var consumer_no=Number(readline.question("Enter consumer_no"));
                            var account_no=Number(readline.question("Enter account_no"));
                            var re_account_no=Number(readline.question("Enter re_account_no"));
                            if(account_no==re_account_no){
                                console.log("please wait your transection is being proceed.....")
                                console.log("Bill Payment Successfully!")
                            }else{
                                console.log("please input valid account no")
                            }
                        }
                    }
                }
            }
        }
    }
}


function fast_cash() {
    console.log("1. Saving Account:");
    console.log("2. Current Account: \n");
    var choose=Number(readline.question("Type of account?"));
    if(choose==1){
        console.log("please wait is being proceed.....")
        var arr={1:100, 2:500, 3:1000, 4:2000, 5:3000, 6:5000, 7:10000, 8:20000, 9:30000, 10:50000}
        console.log(arr)
        
        var amt=Number(readline.question("Select amount"));
        console.log(arr[amt])
        var confirm=readline.question("for confirmation");
        if(confirm=="y"){
            console.log("please wait your transection is being proceed")
            console.log(" Successfully!")
        }else{ 
            console.log("please try again.....")
        }
    }
}

function cash_withdraw(){
    console.log("1. Saving Account:");
    console.log("2. Current Account: \n");
    var choose=Number(readline.question("Type of account?"));
    if(choose===1){
        var money=Number(readline.question("Please Enter Amount.."));
        console.log("Take your money", money +"\n")
        var receipt=readline.question("Do you want to reciept? ");
        if(receipt=="y"){
            console.log("Amount is processing");
            console.log("Successfully Withdraw Amount \n");
            another=readline.question("IF you want to another transection?");
                if (another=="y"){
                    console.log(atm())
                }else{
                    console.log("Thanking you in ICC Bank")
                }
        }else{
            console.log("Successfully Withdraw Amount \n");
            var balance=readline.question("Do you want check your balace? ");
            if(balance=="y"){
                console.log("your balace is: ",money +"\n");
                console.log("Thanking you in ICC bank \n")
                
                var another=readline.question("IF you want to another transection.");
                if (another=="y"){
                    console.log(atm())
                }else{
                    console.log("Thanking you in ICC Bank \n")
                }
            }else{
                console.log("Thanking you in ICC Bank \n")
            }
        }   
    }
}


function balance_inquiry(){
    console.log("1. Saving Account:");
    console.log("2. Current Account:");
    console.log("3. David/Credit Card payment:")
    var choose=Number(readline.question("choose of payment method"));
    if(choose==1){
        console.log("please wait transection is beeing processing....")
        console.log("your corrent Balance is: 10000", )
        console.log("Thanking you using ICICI banking")
    }else{
        console.log("please choose valid input.....")
    }
} 


function more_option() {
    console.log("1. MINI STATEMENT");
    console.log("2. FUND TRANSFER");
    console.log("3. CHEQUE BOOK REQUEST");
    console.log("4. EVC GENERATE");
    console.log("5. LOAN CREDIT CARD PAYMENT");
    console.log("6. REGISTER YOUR MOBILE NUMBER");
    console.log("7. AADHAR UPDATE");
    console.log("8 MORE OPTION \n")
}
