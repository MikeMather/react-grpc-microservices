const grpc = require('grpc')
const productsProto = grpc.load('./protos/products.proto')

const products = [
    {id: '123', name: 'Baracuda Coffee', description: 'Dark Roast', price: 954, imagePath: '/images/coffee1.jpeg'},
    {id: '231', name: 'Woodsmans Coffee', description: 'Medium Roast', price: 1211, imagePath: '/images/coffee2.jpeg'},
    {id: '214', name: 'Jungle Coffee', description: 'Dark Roast', price: 655, imagePath: '/images/coffee3.jpeg'},
    {id: '987', name: 'Bay Beans', description: 'Light Roast', price: 1699, imagePath: '/images/coffee4.jpeg'},
    {id: '694', name: 'Verona Coffee', description: 'Medium-Dark Roast', price: 1269, imagePath: '/images/coffee5.jpeg'},
    {id: '382', name: 'Robocoffee', description: 'Light Roast', price: 1099, imagePath: '/images/coffee6.jpeg'},
    {id: '504', name: 'Green Beans', description: 'Dark Roast', price: 1350, imagePath: '/images/coffee7.jpeg'},
    {id: '994', name: 'Bean Boy', description: 'Medium Roast', price: 1466, imagePath: '/images/coffee8.jpeg'}
];

const server = new grpc.Server()
server.addService(productsProto.ProductService.service, {
    getProducts: (_, callback) => {
        callback(null, products);
    },
})

server.bind('0.0.0.0:5000', grpc.ServerCredentials.createInsecure())
//server.bind('127.0.0.1:5000', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:5000')
server.start()