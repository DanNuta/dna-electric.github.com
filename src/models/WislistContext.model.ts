import {dataProductModel} from "./dataProduct.model";

export type Wishlist = {
        wishlistState: dataProductModel[],
        addWishList: (id: dataProductModel) => void;

}