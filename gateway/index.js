const PROTO_PATH = __dirname + '../productsService/products.proto';
const grpc = require('grpc');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({origin: '*'}));
app.use(express.json());

const productsProto = grpc.load('./protos/products.proto');
const cartProto = grpc.load('./protos/cart.proto');

const port = 8080
// const productsService = new productsProto.ProductService('products-service:5000', grpc.credentials.createInsecure());
const productsService = new productsProto.ProductService('127.0.0.1:5000', grpc.credentials.createInsecure());
// const cartService = new cartProto.CartService('cart-service:5001', grpc.credentials.createInsecure());
const cartService = new cartProto.CartService('127.0.0.1:5001', grpc.credentials.createInsecure());

const user_id = '123';
app.get('', (req, res) => {
    res.json({'status': 'ok'})
});
app.get('/products', (req, res) => {
    console.log('Getting products...')
    productsService.getProducts({}, (error, products) => {
        if (error)
          console.log('Error: ', error);
        else
          res.json(products);
    });
});
app.get('/cart', (req, res) => {
    cartService.getCart({user_id}, (error, cart) => {
        if (error)
            console.log('Error: ', error);
        else
            res.json(cart);
    });
});
app.post('/cart/add-item', (req, res) => {
    console.log(req.body)
    cartService.addItem({user_id, item: req.body}, (error, empty) => {
        if (error)
            console.log('Error: ', error);
        res.end();
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))