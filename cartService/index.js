const grpc = require('grpc')
const cartProto = grpc.load('./protos/cart.proto')
const redis = require('redis');

const redisClient = redis.createClient('6379', 'redis');
// const redisClient = redis.createClient('6379', '172.17.0.2');


const server = new grpc.Server()
server.addService(cartProto.CartService.service, {
    getCart: (call, callback) => {
        redisClient.get(call.request.user_id, (error, result) => {
            if (error) {
                console.log(error);
            }
            else {
                if (result) {
                    callback(null, JSON.parse(result));
                }
                else {
                    callback(null, {'items': []});
                }
            }
        })
    },

    addItem: (call, callback) => {
        redisClient.get(call.request.user_id, (error, result) => {
            if (error) {
                console.log(error);
            }
            else {
                if (result) {
                    const cart = JSON.parse(result);
                    cart.items = [...cart.items, call.request.item];
                    redisClient.set(call.request.user_id, JSON.stringify(cart), redis.print)
                    callback(null, {});
                }
                else {
                    const cart = {'items': [call.request.item]}
                    redisClient.set(call.request.user_id, JSON.stringify(cart), redis.print);
                    callback(null, {});
                }
            }
        })
    }
})

server.bind('0.0.0.0:5001', grpc.ServerCredentials.createInsecure())
// server.bind('127.0.0.1:5001', grpc.ServerCredentials.createInsecure())
server.start()