# Bootstrap 4 + WebPack 4 = Boilerplate

This is a simple boilerplate to setup Bootstrap 4 with SCSS and WebPack for a new project. [Babel](https://babeljs.io/) and the famous [Autoprefixer](https://autoprefixer.github.io/) are included by default - so you're ready work on your new project in a few easy steps.

## Installation

1. Create a directory for your new project

   ```bash
   mkdir new-project
   ```

1. Switch to that directory

   ```bash
   cd new-project
   ```

1. Clone the repository in the project folder

   ```bash
   git clone git@github.com:noreading/bootstrap4-webpack-boilerplate.git .
   ```

1. Remove the Git-Connection to this repository

   ```bash
   rm -rf .git
   ```

1. Update the package.json

   ```JSON
   {
     "name": "new-project",
     "version": "1.0.0",
     "description": "A description of your new project",
      ...
     "author": "Your Name",
     "license": "MIT",
   }
   ```

1. Install needed dependencies

   ```bash
   npm install
   ```

1. Remember the development command

   Don't forget that you need the `npm run dev` command to watch for changes in JS and SCSS files and also to compile them initially.

1. If you don't need Bootstrap's JavaScript features

   If you **do not** want to use any of the Bootstrap features that are relying on JavaScript and jQuery, please remove some lines in your code.

   **/src/index.js**

   ```javascript
   import Popper from "popper.js";
   window.jQuery = $;
   window.$ = $;

   require("bootstrap");
   ```

   **/webpack.config.js**

   ```javascript
   new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery"
   });
   ```

## Build

Run the command `npm run build` or `yarn build` to run webpack in `production` mode and compile all of the assets.

CSS and JavaScript will be minified in the build version, so that you deliver smaller files to your users.

## Development

Run the command `npm run dev` or `yarn dev` to run webpack in `development` mode so that it watches for file changes to recompile assets, when the source code is changed.

## Responsive Image Creation

### What is it?

This boilerplate includes a command to resize images based on a configuration file, to get rid of the hassle to care about the responsive image sizes manually. One of the benefits of this process is that it works on all major operating systems, without the need to do any manual installations.

If you want to use the resizing feature, please edit the file `images.config.js` in the root directory and change all settings to your needs. You can add multiple collections with different configurations for greatest flexibility.

Once the config file is set, you can run the resizing command using npm.

```bash
npm run images
```

---

You need more options?

The [sharp](https://www.npmjs.com/package/sharp) npm package is used to resize the images, so more options and resizing features might get added to the configuration in the future. Contributions are always welcome, as I've got a limited amount of free time to work on projects like this.

---

### Can I recreate all images?

Yes you can! If you want to recreate the responsive versions of your files, because you changed the configuration, you can add "recreate" as an optional argument to the npm command.

**Important:**

The recreation process will remove all images it detects as being resized by their filename. If you use other tools for your images, this might lead to false positives, so please backup your files before you run this.

```bash
npm run images recreate
```
