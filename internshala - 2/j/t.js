const data={
"AccountName": "Current Account",
"BankBalance": "XXXXX",
"transactionamount" : 15000,
"transactiondate": "2022-08-12 15:55",
"PaymentType": {
  "Id": "X",
  "Name": "Bank to Wallet Transfer"
},
"senderDetails" : {
"sender": "Saurabh Sharma",
"bank" : "SBI",
"IFSC": "SBIN016095",
"accountno": "xxxxxxxxx5736",
"transactiondate" : "2022-08-12 15:55",
},
"recieverDetails" : {
"reciever": "Saurabh Sharma",
"wallet" :" Grwpital Wallet ",
"referenceno": "DBTR/222201998174",
"transactiondate" : "2022-08-12 15:55",
},
"paymentmethod": "UPI",
"transactionId": "DBTR/222201998174"

}


document.getElementById("recn").innerHTML=data.senderDetails.sender;
document.getElementById("recAc").innerHTML=`${data.senderDetails.bank}, IFSC ${data.senderDetails.IFSC} <br> A/c No.${data.senderDetails.accountno}`;
document.getElementById("recd").innerHTML=data.senderDetails.transactiondate;
document.getElementById("recto-n").innerHTML=data.recieverDetails.reciever;
document.getElementById("recto-Ac").innerHTML=`${data.recieverDetails.wallet} Ref No. <br>${data.recieverDetails.referenceno} `;
document.getElementById("recto-d").innerHTML=data.recieverDetails.transactiondate;
document.getElementById("recto-m").innerHTML=data.transactionId;
