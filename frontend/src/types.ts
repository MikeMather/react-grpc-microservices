
export interface ProductType {
    id: string,
    name: string,
    description: string,
    price: number,
    imagePath: string,
    inCart: boolean
};

export interface CartItemType {
    product_id: string,
    quantity: number
}

export interface ContextType {
    items: ProductType[],
    getCart: Function
}