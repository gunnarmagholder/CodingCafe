# CodingCafe
Project for finding developers to code in cafes or other public places
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Important: 

To get around the CORS Error in calling the bing-maps-api change the following in 
webpack.config.dev.js:
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    hot: true,
    inline: true,
    headers: {
        "Access-Control-Allow-Origin": "*"
      }
  },
