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

In order for this command to work properly you need to have "clean" filenames for your images, that don't match the patterns used to create the resized filenames automatically. The filenames get a postfix, based on the resizing settings for the images width and height.

Filenames, that will be recognized as original images, are as follows.

| Allowed Filename            | Description                                              |
| :-------------------------- | :------------------------------------------------------- |
| my-image.jpg                | Simple filenames                                         |
| my-image-1982-to-2018.jpg   | Filenames including numbers, also at the end.            |
| my-image-400x200-tablet.jpg | Filenames including dimensions, but not at the end.      |
| my-image_400x200.jpg        | Filenames including dimensions, but using an underscore. |

Filenames, that will **not** be recognized as original images, are as follows.

| Prohibited Filename    | Description                            | Pattern                                 |
| :--------------------- | :------------------------------------- | :-------------------------------------- |
| your-image-w200.jpg    | Resized using a fixed width only       | {filename}-w{width}.{extension}         |
| your-image-h400.jpg    | Resized using a fixed height only      | {filename}-h{height}.{extension}        |
| your-image-200x400.jpg | Resized using a fixed width and height | {filename}-{width}x{height}.{extension} |

You can use a [test tool](https://regex101.com/r/6f2cEu/4) to check if your filenames will work correctly, by adding one filename per line into the "Test Strings" field. This helps to ensure that none of your images will be deleted.

You can use the regular expression to test files on your local machine, too. On Linux and Mac operating systems you can check if any images in a folder match the pattern by using the following command:

```bash
find ./ -regextype egrep -regex ".*\-([0-9]+x[0-9]+|w[0-9]+|h[0-9]+)\.[a-z]+$"
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

### Can I remove the generated images?

Yes, you can! If you don't like the images that have been generated, you can add "remove" as an argument to the npm command.

**Important:**

The recreation process will remove all images it detects as being resized by their filename. If you use other tools for your images, this might lead to false positives, so please backup your files before you run this.

```bash
npm run images remove
```

## Placeholder Images

All placeholder images used in the `index.html` file are downloaded from [pexels.com](https://www.pexels.com/), and [pixabay.com](https://pixabay.com/). Those are two fantastic collections of free stock photos from photographers around the globe.

If you're one of the photographers and would like to change the linked website or get an image removed from the boilerplate, please shoot me an email to code@dominik-hanke.de and I'll update it as soon as possible.

**Slides**

| Slide | Photographer                                                     | Website                                                           | Image Source                                                                |
| :---- | :--------------------------------------------------------------- | :---------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| 1     | [kailash kumar](https://www.pexels.com/@kailash-kumar-212268)    | [facebook page](https://www.facebook.com/kailashkumarphotogrphy/) | [pexels.com](https://www.pexels.com/photo/white-sheep-on-farm-693776/)      |
| 2     | [Cleverpix](https://pixabay.com/en/users/Cleverpix-2508959/)     | [cleverpix.com.au](https://www.cleverpix.com.au/)                 | [pixabay.com](https://pixabay.com/en/sunset-tree-water-silhouette-1373171/) |
| 3     | [GregMontani](https://pixabay.com/en/users/GregMontani-1014946/) | -                                                                 | [pixabay.com](https://pixabay.com/en/desert-morocco-dunes-sand-2435404/)    |

**Album Photos**

| Photo | Photographer                                                   | Website                                                            | Image Source                                                                                               |
| :---- | :------------------------------------------------------------- | :----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 1     | [skeeze](https://pixabay.com/en/users/skeeze-272447/)          | -                                                                  | [pixabay.com](https://pixabay.com/en/landscape-panorama-scenic-clouds-2278315/)                            |
| 2     | [shottrotter](https://www.pexels.com/@shottrotter)             | [shottrotter.be](http://www.shottrotter.be/)                       | [pexels.com](https://www.pexels.com/photo/photo-of-person-walking-on-deserted-island-934718/)              |
| 3     | [sasint](https://pixabay.com/en/users/sasint-3639875/)         | [pixartasia.com](http://www.pixartasia.com/)                       | [pixabay.com](https://pixabay.com/en/elephant-animals-asia-large-1822636/)                                 |
| 4     | [Walkerssk](https://pixabay.com/en/users/Walkerssk-1409366/)   | [walkers.sk](http://www.walkers.sk/)                               | [pixabay.com](https://pixabay.com/en/cinque-terre-italy-houses-color-1859688/)                             |
| 5     | [Marcocarli](https://pixabay.com/en/users/Marcocarli-4847725/) | -                                                                  | [pixabay.com](https://pixabay.com/en/mountain-alpine-wild-emperor-2444712/)                                |
| 6     | [Jaymantri](https://www.pexels.com/@jaymantri)                 | [jaymantri.com](https://jaymantri.com/)                            | [pexels.com](https://www.pexels.com/photo/nature-forest-trees-fog-4827/)                                   |
| 7     | [veeterzy](https://www.pexels.com/@veeterzy)                   | [instagram profile](https://www.instagram.com/veeterzy?ref=pexels) | [pexels.com](https://www.pexels.com/photo/road-landscape-nature-forest-39811)                              |
| 8     | [Pok Rie](https://www.pexels.com/@pok-rie-33563)               | -                                                                  | [pexels.com](https://www.pexels.com/photo/brown-wooden-footbridge-on-body-of-water-during-sunrise-129441/) |
