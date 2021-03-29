const path = require("path");


module.exports = {
    resolve:{
        alias:{
            // "@pageObjects":path.resolve(__dirname, "pageObjects"),
            "@pageObjects":path.resolve(__dirname, 'cypress/integration/pageObjects'),
            // ApI:path.resolve(__dirname, 'cypress/integration/pageObjects'),
        },
    },

};
 
    //  var pathobj = path.parse(__filename);
    //   console.log(pathobj);
// O/p for above 2 lines—
// {
//   root: '/',
//   dir: '/Users/suneetha/Documents/cypress-bbc-website',
//   base: 'webpack.config.js',
//   ext: '.js',
//   name: 'webpack.config'
