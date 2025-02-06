let IS_PROD = true;
// const server = IS_PROD ?
//     "https://apnacollegebackend.onrender.com" :

//     "http://localhost:8000"
const server = IS_PROD ? "http://localhost:8000":  "https://apnacollegebackend.onrender.com"
 
export default server;