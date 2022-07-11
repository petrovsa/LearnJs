///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

const paths = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];
// const loadAll = async function (imgPaths) {
//   // const res = await imgPaths.map((path) => path);
//   const res = await Promise.all(imgPaths).then((res) => res);
//   console.log(res);
// };

// loadAll(paths);
const container = document.querySelector(".images");
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// const loadNPause = async function (imgPath) {
//   const res = await function () {
//     const imgEl = document.createElement("img");
//     imgEl.src = imgPath;
//     imgEl.addEventListener("load", function () {
//       container.append(imgEl);
//     });
//     res.catch((err) => new Error(`Image not Found ${err}`));
//     return res.json();
//   };
// };
// loadNPause("img/img-1.jpg");
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    imgEl.src = imgPath;
    imgEl.addEventListener("load", function () {
      container.append(imgEl);
      resolve(imgEl);
    });
    imgEl.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};
// let currentImage;
// createImage("img/img-1.jpg")
//   .then((el) => {
//     currentImage = el;
//     console.log(el);
//     return wait(2);
//   })
//   .then(() => (currentImage.style.display = "none"))
//   .then(() => {
//     return createImage("img/img-2.jpg");
//   })
//   .then((el) => {
//     currentImage = el;
//     return wait(2);
//   })
//   .then(() => (currentImage.style.display = "none"))
//   .catch((err) => new Error(err));
const loadNPause = async function () {
  try {
    console.log("Load image 1");
    let img = await createImage("img/img-1.jpg");
    img.style.display = "none";
    await wait(2);
    console.log("Load image 2");
    img = await createImage("img/img-2.jpg");
    img.style.display = "none";
    await wait(2);
    console.log("Load image 3");
    img = await createImage("img/img-3.jpg");
    img.style.display = "none";
    await wait(1);
  } catch (err) {
    return new Error(`Image not Found ${err}`);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imges = imgArr.map(async (img) => await createImage(img));
    const resArr = await Promise.all(imges);
    console.log(resArr);
    resArr.forEach((img) => img.classList.add("paralell"));
  } catch (err) {
    return new Error(`Images array not Found ${err}`);
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
