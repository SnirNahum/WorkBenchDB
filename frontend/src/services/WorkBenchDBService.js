import { httpService } from "./http.service";
import { storageService } from "./storageService";
import { utilService } from "./utilService";

const PRODUCT_KEY = "productDB";
export const workBenchDBService = {
  
  setWorkBenchDBPrompt,
  getEmptyProduct,

};

async function setWorkBenchDBPrompt(gptPrompt) {
  const promptContent = { message: gptPrompt }
  const prompt = await httpService.post('generatePrompt/', promptContent);
  return prompt;
}


_createProducts()

function _createProducts() {
  let products = storageService.load(PRODUCT_KEY);
  if (!products || !products.length) {
    products = [
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
      _createProduct(utilService.getRandomLoremIpsum(2), utilService.getRandomInt(20, 100), utilService.getRandomLoremIpsum(15)),
    ];
    storageService.store(PRODUCT_KEY, products);
  }
  return products;
}

function _createProduct(title, price, desc) {
  return {
    _id: utilService.makeId(),
    title,
    price,
    img: "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/https://www.payngo.co.il/media/catalog/product/8/8/887-263-413-999-p3-5ah.png",
    desc,
    createdAt: Date.now(),
  };
}
function getEmptyProduct() {
  return {
    _id: utilService.makeId(),
    title: "",
    price: 0,
    img: "",
    desc: "",
  }
}

