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

## Placeholder Images

All placeholder images are downloaded from [Pexels.com](https://www.pexels.com/), and [pixabay.com](https://pixabay.com/) two fantastic collections of free stock photos, shared by talented photographers around the globe.

**Slides**

| Photographer                                                     | Source Link                                                                 |
| :--------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| [kailash kumar](https://www.pexels.com/@kailash-kumar-212268)    | [pexels.com](https://www.pexels.com/photo/white-sheep-on-farm-693776/)      |
| [Cleverpix](https://pixabay.com/en/users/Cleverpix-2508959/)     | [pixabay.com](https://pixabay.com/en/sunset-tree-water-silhouette-1373171/) |
| [GregMontani](https://pixabay.com/en/users/GregMontani-1014946/) | [pixabay.com](https://pixabay.com/en/desert-morocco-dunes-sand-2435404/)    |

**Album Photos**

| Photographer                                                   | Source Link                                                                                                |
| :------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| [skeeze](https://pixabay.com/en/users/skeeze-272447/)          | [pixabay.com](https://pixabay.com/en/landscape-panorama-scenic-clouds-2278315/)                            |
| [shottrotter](https://www.pexels.com/@shottrotter)             | [pexels.com](https://www.pexels.com/photo/photo-of-person-walking-on-deserted-island-934718/)              |
| [sasint](https://pixabay.com/en/users/sasint-3639875/)         | [pixabay.com](https://pixabay.com/en/elephant-animals-asia-large-1822636/)                                 |
| [Walkerssk](https://pixabay.com/en/users/Walkerssk-1409366/)   | [pixabay.com](https://pixabay.com/en/cinque-terre-italy-houses-color-1859688/)                             |
| [Marcocarli](https://pixabay.com/en/users/Marcocarli-4847725/) | [pixabay.com](https://pixabay.com/en/mountain-alpine-wild-emperor-2444712/)                                |
| [Jaymantri](https://www.pexels.com/@jaymantri)                 | [pexels.com](https://www.pexels.com/photo/nature-forest-trees-fog-4827/)                                   |
| [veeterzy](https://www.pexels.com/@veeterzy)                   | [pexels.com](https://www.pexels.com/photo/road-landscape-nature-forest-39811)                              |
| [Pok Rie](https://www.pexels.com/@pok-rie-33563)               | [pexels.com](https://www.pexels.com/photo/brown-wooden-footbridge-on-body-of-water-during-sunrise-129441/) |
