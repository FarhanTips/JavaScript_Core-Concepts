
// break হলো একটি loop control statement। এর কাজ হলো loop সম্পূর্ণ বন্ধ করে দেওয়া। Stop the whole loop.
// Practise Task-10
for (let i = 1; i<=50; i++) {
    if (i>30) {
        break;
    }
    console.log(i);
}


// continue সেই iteration স্কিপ করে পরের iteration-এ যায়, তাই এই সংখ্যাগুলো প্রিন্ট হয় না। Skip only the current iteration, then continue the loop.
// Practise Task-11
for (let i = 1; i<=20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

