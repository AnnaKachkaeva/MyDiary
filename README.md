 The main idea of our project is to work out as much skills as possible in small app. <br/>
 And to make diary is one of the easyest way to do that. Because we need all common operations like: write file, read file and change information.

> It's our first project made in a team, so please be gentle)
<br/>
<br/>



## How to get started with our diary:

1. **Download this repo**   
```git clone https://some/address/here```  
<br/>

2. **Write this in command line**  
```npm init```  
By this action all dependencies will be installed

<br/>


3. **To start app in developer mode write**  
```npm run dev```  
App will start with nodemon. It helps to reload server every time you changes files.


4. **To generate documentation**  
```npm run docs:app```  
On *http://localhost:4001/* documentation will be generated  


<br/>
<br/>
All dependencies are in package.json

## How to launch a diary with docker :

1. **Make sure docker is running then switch to Linux containers**
<br/>

2. **Run this commands**    
```docker build . -t nodejs-diary```   
The created image will now be displayed in the list of all images    
```docker images```   
Run the image  
```docker run -p 3001:3001 -d nodejs-diary```
<br/>

3. **Now the diary will be on**  
```http://localhost:3001```
