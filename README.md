# React app using gRPC microservices

This app is an exagerrated demonstration of how microservices can be used to distribute workloads using grpc servers. Each service runs in a container in a Kubernetes cluster. I was using [Minikube](https://github.com/kubernetes/minikube) to configure the servers. 

The application consists of a simple e-commerce store for shopping for coffee products. You can view the list of products, add products to your cart and view your cart. The application is not feature-rich and is simply a demonstration of how microservices could be used to distribute work to multiple servers using gRPC.

## The Components

![Services Diagram](https://github.com/MRoym/react-grpc-microservices/blob/master/media/microservices.png)

### Frontend
The client side application made with ReactJS which provides the simple UI for the application.


### Gateway
The internet-exposed backend application in NodeJS that handles pulling various resources from the services and returns the data to the client side


### Cart Service
Stores the user's cart in a Redis cache and uses gRPC to connect to the gateway. The user can add, remove and view the products in a cart.


### Products Cart
Stores all available products in a MongoDB database. Returns the list of available products
