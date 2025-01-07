# Prerequisites  


-   [Nodejs](https://nodejs.org/en) v18.19.0 or higher


# Install Hardhat  
```shell
npm install --save-dev hardhat
```

# Install packages   
```shell
npm install 
```
# Contract Deployment  

Run the following command to compile and deploy the contracts
```shell
npx hardhat run scripts/deploy.helloworld.js --network pentestnet
```
After deployment the output of the script will be the addresses of the contracts  

After deployment the output of the script will be the addresses of the contracts  

```
Contract deployed to address:  0x5FbDB2315678afecb367f032d93F642f64180aa3
Greeting function says  Hello World!
```

# Contract Testing

Run the following command to run the tests. Tests are located in test/ folder .
```shell
npx hardhat test
```

# Contract Testing Coverage

Run the following command to check the contract test cases coverage  .
```shell
npx hardhat coverage
```




