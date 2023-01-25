const path = require('path');
module.exports = {
  configureWebpack: {
    
      resolve: {
        modules: ['node_modules'],
        //modules: [...],
        fallback: {
          "fs": false,
          //"path": path.resolve("path-browserify"),
          
          //"path": require.resolve("path-browserify"),
          "tls": false,
          "net": false,
          "path": false,
          "zlib": false,
          "http": false,
          "https": false,
          "stream": false,
          "crypto": false,
          //"crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
        },
      },
      
    // Webpack configuration applied to web builds and the electron renderer process
  },
  pluginOptions: {
    electronBuilder: {
      chainWebpackMainProcess: (config) => {
        // Chain webpack config for electron main process only
      },
      chainWebpackRendererProcess: (config) => {
        // Chain webpack config for electron renderer process only (won't be applied to web builds)
      },
      // Use this to change the entrypoint of your app's main process
      //externals: null,
      //mainProcessFile: 'src/background.js',
      mainProcessFile: 'src/background.js',
      // Use this to change the entry point of your app's render process. default src/[main|index].[js|ts]
      //rendererProcessFile: 'public/renderer.js',
      rendererProcessFile: 'src/main.js',
      
      builderOptions:{
        extraResources: ["./node_modules/@electron/remote/**"],
      }
      // Provide an array of files that, when changed, will recompile the main process and restart Electron
      // Your main process file will be added by default
        //mainProcessWatch: ['src/myFile1', 'src/myFile2'],
      // Provide a list of arguments that Electron will be launched with during "electron:serve",
      // which can be accessed from the main process (src/background.js).
      // Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself
      // Command line args (excluding --debug, --dashboard, and --headless) are passed to Electron as well
        //mainProcessArgs: ['--arg-name', 'arg-value']
    }
  }
}










/*const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  pluginOptions: {
    mainProcessFile: 'src/background.js',
    electronBuilder: {
      extends: null,
      transpileDependencies: true,
      mainProcessFile: 'src/background.js',
      builderOptions: {
        
        extends: null,

        // options placed here will be merged with default configuration and passed to electron-builder
      }
    }
  }
})*/
/*
module.exports = {
  pluginOptions: {
    electronBuilder: {
      transpileDependencies: true,
      mainProcessFile: 'src/background.js',
      builderOptions: {
        
        // options placed here will be merged with default configuration and passed to electron-builder
      }
    }
  }
}*//*
module.exports = {
  
  configureWebpack: {
    // Webpack configuration applied to web builds and the electron renderer process
  },
  pluginOptions: {
    extends: null,
    electronBuilder: {
      //extends: null,
      builderOptions: {
        extends: null,
        
        //mainProcessFile: 'src/background.js',
        /*appId: 'test.com',
        win: {
          icon: 'public/windows.ico'
        },
      },
      /*chainWebpackMainProcess: (config) => {
        // Chain webpack config for electron main process only
      },
      chainWebpackRendererProcess: (config) => {
        // Chain webpack config for electron renderer process only (won't be applied to web builds)
      }
      // Use this to change the entrypoint of your app's main process
      
      // Use this to change the entry point of your app's render process. default src/[main|index].[js|ts]
      //rendererProcessFile: 'src/myMainRenderFile.js',
      // Provide an array of files that, when changed, will recompile the main process and restart Electron
      // Your main process file will be added by default
      //mainProcessWatch: ['src/myFile1', 'src/myFile2'],
      // Provide a list of arguments that Electron will be launched with during "electron:serve",
      // which can be accessed from the main process (src/background.js).
      // Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself
      // Command line args (excluding --debug, --dashboard, and --headless) are passed to Electron as well
     //mainProcessArgs: ['--arg-name', 'arg-value']
    }
  }
}*/