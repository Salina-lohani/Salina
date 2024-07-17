// promise

const goDate=new Promise( (resolve,reject)=>{
    const dating=false
    if (dating){
       resolve("Date is confirmed")
    }else{
        reject ("Date is not confirmed")
    }
});

goDate
    .then((data)=>{
        console.log(data);
    })
    .catch(
        (rejected_data)=>{
            console.log(rejected_data)
        }
    );


    const oddEven=new Promise((resolve,reject)=>{
        const number=true;
        if(number){
            resolve("Number is even")
        }else{
            reject ("Number is odd")
        }
    });

    oddEven
      .then((data)=>{
        console.log(data);
      })
      .catch(
        (rejected_data)=>{
            console.log(rejected_data)
        }
      )

//Q