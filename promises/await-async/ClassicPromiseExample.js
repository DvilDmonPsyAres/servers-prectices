// function walkTheDog() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('happy dog');
//       }, 1000);
//     });
//   }

//   function doChores() {
//     console.log('before walking the dog');
//     walkTheDog()
//       .then(res => {
//           console.log(res);
//           console.log('after walking the dog');
//       });
//     return 'done';
//   }

//   console.log(doChores());

  // prints:
  //
  // before walking the dog
  // done
  // happy dog
  // after walking the dog


//   /*ASYNC*/
//   function walkTheDog() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('happy dog');
//       }, 1000);
//     });
//   }

//   async function doChores() {
//     console.log('before walking the dog');
//     const res = await walkTheDog();
//     console.log(res);
//     console.log('after walking the dog');
//   }

//   doChores();
//   // prints:
//   // before walking the dog
//   // happy dog
//   // after walking the dog


// function walkTheDog() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('happy dog');
//       }, 1000);
//     });
//   }

//   async function doChores() {
//     console.log('before walking the dog');
//     const res = await walkTheDog();
//     console.log('after walking the dog');
//     return res.toUpperCase();
//   }

//   doChores().then(result => console.log(result, result.toLowerCase()));
//   // prints:
//   // before walking the dog
//   // after walking the dog
//   // HAPPY DOG

function walkTheDog() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('2');
        resolve('happy dog');
      }, 1000);
    });
  }

  async function doChores() {
    console.log('1');
    const res = await walkTheDog();
    console.log('3');
    return res.toUpperCase();
  }

  async function wrapper() {
    console.log('0');
    const finalResult = await doChores();
    console.log('4');
    console.log(finalResult + '!!!');
  }

  wrapper();
  // prints:
  // 0
  // 1
  // 2
  // 3
  // 4
  // HAPPY DOG!!!


//   Refactoring a promise chain
// Refactoring a promise chain is straightforward with async/await. Let's say wanted to print the resolved values for 3 promises in order:

// function wrapper() {
//   promise1
//     .then(res1 => {
//       console.log(res1);
//       return promise2;
//     })
//     .then(res2 => {
//       console.log(res2);
//       return promise3;
//     })
//     .then(res3 => {
//       console.log(res3);
//     });
// }

// // We can refactor it into this:

// async function wrapper() {
//   console.log(await promise1);
//   console.log(await promise2);
//   console.log(await promise3);
//   console.log(await promise4);
// }



function action() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hello') //resolve
        reject('uh-oh'); // rejected
      }, 3000);
    });
  }

  async function handlePromise() {
    try {
      const res = await action();
      console.log('resolved with', res);
    } catch (err) {
      console.log('rejected because of', err);
    }
  }

  handlePromise();
  // prints:
  // rejected because of: uh-oh
