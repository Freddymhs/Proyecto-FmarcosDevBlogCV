module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Freddy Marcos Huaylla Silvestre","short_name":"FmarcosDev","start_url":"/","background_color":"#00BCD4","theme_color":"#00BCD4","display":"standalone","icon":"src/images/icon.png","legacy":true},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1000,"quality":80,"showCaptions":true,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"G-9FL5R42WJ0","head":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"black","showSpinner":true},
    }]
