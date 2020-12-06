# Webpack boilerplate for vanilla JS SPA 🎇

<br>

## 🧮 First commands:
In terminal:

***Create a project folder***

    mkdir projectName

***Go into project folder***

    cd projectName

***Initiate git repository***

    git init

***Initiate npm project***

    npm init

<br><br>

## 🗂 Project structure
Make this structure in root folder:
* src
	* pages
	* routes
	* templates
	* styles
	* utils
	* index.js
* public
	* index.html
* package.json

<br><br>

## 📦 Install Webpack
In terminal:

***install Webpack packages and dependencies (--save dev)***

    npm install @babel/core babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server --save-dev

<br><br>

## ⚙ Configure Webpack

 ***make `webpack.config.js` file on root folder and paste:***
  
 
    const path = require('path');
    const HtmlWebPackPlugin = require('html-webpack-plugin');
    
    module.exports = {
	    entry: './src/index.js',
	    output: {
		    path: path.resolve(__dirname),
		    filename: 'main.js'
	    },
	    devServer: {
		    // abrir la APP en el BROWSER
		    // open: true, (navegador por defecto)
		    open: 'chrome',

		    // HACK para permitir ver la APP desde otros dispositivos
		    // host: '0.0.0.0',

		    // ver el progreso de compilacion en la consola
		    progress: true,

		    // esto para que todas las URLs que fallen (404) devuelvan nuestro index.html
		    // historyApiFallback: true,

		    // para que los errores en consola aparescan en un overlay en el BROWSER
		    // overlay: true,

		    // habilitar HMR
		    hot: true,
	    },
	    resolve: {
		    extensions: ['.js'],
	    },
	    module: {
		    rules: [
			    {
				    test: /\.js?$/,
				    exclude: /node_modules/,
				    use: {
					    loader: 'babel-loader',
				    }
			    }
		    ]
	    },
	    plugins: [
		    new HtmlWebPackPlugin(
			    {
				    inject: true,
				    template: './public/index.html',
				    filename: './index.html',  
			    }
		    )
	    ]
    }


<br><br>

## 🛑 Git ignore
***make `.gitignore` file and paste:***

    node modules

<br><br>

## ⌨ Make scripts
***on `package.json` scripts paste:***

    "scripts": {
	    "build": "webpack --mode production",
	    "start":"webpack serve"
    }
    
    
    Configuracion adicional para webpack 5:
    https://es.geanmarroquin.com/blog/configurar-webpack-5/
