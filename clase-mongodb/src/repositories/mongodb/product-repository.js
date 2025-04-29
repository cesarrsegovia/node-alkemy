import { ProductModel } from "./models/product-models.js";
import MongoRepository from "./mongo-repository.js";

class ProductRepositoryMongo extends MongoRepository{
    constructor(model){
        super(model)
    }
}

export const productRepository = new ProductRepositoryMongo(ProductModel);