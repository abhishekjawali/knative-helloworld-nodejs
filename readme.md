# Simple application for knative serving

This is a simple application written in nodejs and deployed to knative. This exposes a GET endpoint which returns a message along with the value of environment variable.

### Installation

#### Docker build and push to docker hub

```
# Build the container image (Change the docker hub user name accordingly)
docker build -t abhishekjv/helloworld-nodejs .

# Push the image to docker hub (Change the docker hub user name accordingly)
docker push abhishekjv/helloworld-nodejs
```

### Deployment to knative

#### Pre-requisite:

Knative is setup.

#### Deploy to knative

```
kubectl apply -f service.yaml
```

### Execution

#### Find IP and Host

Note: These commands are for GKE. Minikube has different commands to find the IP. (To be updated)

```
# Get the IP address
export IP_ADDRESS=$(kubectl get svc $INGRESSGATEWAY --namespace istio-system --output 'jsonpath={.status.loadBalancer.ingress[0].ip}')

# Get the Host URL
export HOST_URL=$(kubectl get route helloworld-nodejs  --output jsonpath='{.status.domain}')
```

#### Hit the endpoint

```
curl -H "Host: ${HOST_URL}" http://${IP_ADDRESS}
```
