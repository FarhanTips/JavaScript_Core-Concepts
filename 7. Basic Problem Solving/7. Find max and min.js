


function findMaxMin(array){
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }

        if (array[i] < min){
            min = array[i];
        }
    }

    return [max, min];  //এখানে [max, min] নতুন array তৈরি করছে, কিন্তু তুমি সেটাকে কোনো variable-এ store করছো না। তাই let, const এর দরকার নাই। এখানে array বানিয়ে সরাসরি return করা হচ্ছে, তাই const/let লাগছে না। নতুন কোনো জিনিসকে নাম দিয়ে রাখতে চাইলে → let/const use করতে হয়। শুধু তৈরি করে সরাসরি use/return করলে → let/const লাগে না।
}

console.log(findMaxMin([12, 6, 7, 1, 65, 2, 98, 22]));
