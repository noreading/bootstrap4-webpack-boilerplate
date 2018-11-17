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

<table>
  <thead>
    <tr>
      <th align="left">Allowed Filename</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">my-image.jpg</td>
      <td valign="top">Simple filenames</td>
    </tr>
    <tr>
      <td valign="top">my-image-1982-to-2018.jpg</td>
      <td valign="top">Filenames including numbers, also at the end.</td>
    </tr>
    <tr>
      <td valign="top">my-image-400x200-tablet.jpg</td>
      <td valign="top">Filenames including dimensions, but not at the end.</td>
    </tr>
    <tr>
      <td valign="top">my-image_400x200.jpg</td>
      <td valign="top">Filenames including dimensions, but using an underscore.</td>
    </tr>
  </tbody>
</table>

Filenames, that will **not** be recognized as original images, are as follows.

<table>
  <thead>
    <tr>
      <th align="left">Prohibited Filename</th>
      <th align="left">Description</th>
      <th align="left">Pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">your-image-w200.jpg</td>
      <td valign="top">Resized using a fixed width only</td>
      <td valign="top">{filename}-w{width}.{extension}</td>
    </tr>
    <tr>
      <td valign="top">your-image-h400.jpg</td>
      <td valign="top">Resized using a fixed height only</td>
      <td valign="top">{filename}-h{height}.{extension}</td>
    </tr>
    <tr>
      <td valign="top">your-image-200x400.jpg</td>
      <td valign="top">Resized using a fixed width and height</td>
      <td valgin="top">{filename}-{width}x{height}.{extension}</td>
    </tr>
  </tbody>
</table>

You can use a [test tool](https://regex101.com/r/6f2cEu/4) to check if your filenames will work correctly, by adding one filename per line into the "Test Strings" field. This helps to ensure that none of your images will be deleted.

You can use the regular expression to test files on your local machine, too. On Linux and Mac operating systems you can check if any image in a folder would conflict with the resizing tool by using the following command:

```bash
find ./ | grep -E ".*\-([0-9]+x[0-9]+|w[0-9]+|h[0-9]+)\.[a-z]+$"
```

All files that are listed should get renamed, following the rules you can see in the tables above.

---

You need more options?

The [sharp](https://www.npmjs.com/package/sharp) npm package is used to resize the images, so more options and resizing features might get added to the configuration in the future. Contributions are always welcome, as I've got a limited amount of free time to work on projects like this.

---

### The Configuration

The responsive image configuration is saved in the `images.config.js` file, located in the root directory of the project.

#### Global Settings

The configuration has some global settings, that you should set to your personal preferences.

<table>
  <thead>
    <tr>
      <th align="left">Options</th>
      <th align="left">Description</th>
      <th align="left">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">useTrash</td>
      <td valign="top">Moves files to the trash instead of deleting them directly, when using the "recreate" or "remove" argument.</td>
      <td valign="top">false</td>
    </tr>
  </tbody>
</table>

#### Collections

The configuration uses **collections** which include a set of configuration options to resize images. This allows you to define different resizing rules for multiple directories.

Each collection has the following options.

<table>
  <thead>
    <tr>
      <th align="left">Option</th>
      <th align="left">Description</th>
      <th align="left">Required</th>
      <th align="left">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">name</td>
      <td valign="top">The name of the collection, to identify it in error messages, etc.</td>
      <td valign="top">yes</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">source</td>
      <td valign="top">The source directory of the image files that should get resized.</td>
      <td valign="top">yes</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">recursive</td>
      <td valign="top">Resize images in subdirectories, too?</td>
      <td valign="top">no</td>
      <td valign="top">true</td>
    </tr>
    <tr>
      <td valign="top">sizes</td>
      <td valign="top">The configurations for image sizes that get created.</td>
      <td valign="top">yes</td>
      <td valign="top">-</td>
    </tr>
  </tbody>
</table>

##### Sizes

Each collection has the option "sizes" which includes a set of configurations for different image sizes that will be generated. Width and height are optional, if at least one of them is set.

Each size has the following options.

<table>
  <thead>
    <tr>
      <th align="left">Option</th>
      <th align="left">Type</th>
      <th align="left">Description</th>
      <th align="left">Required</th>
      <th align="left">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">name</td>
      <td valign="top">{string}</td>
      <td valign="top">The name of the collection, to identify it in error messages, etc.</td>
      <td valign="top">yes</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">width</td>
      <td valign="top">{number}</td>
      <td valign="top">The width of the resized image.</td>
      <td valign="top">no</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">height</td>
      <td valign="top">{number}</td>
      <td valign="top">The height of the resized image.</td>
      <td valign="top">no</td>
      <td valign="top">-</td>
    </tr>
    <tr>
      <td valign="top">fit</td>
      <td valign="top">{string}</td>
      <td valign="top">The method by which the image should fit.<br /><br />
        <code>cover</code><br />Crop to cover both provided dimensions.<br /><br /><code>contain</code><br>Embed within both provided dimensions.<br /><br /><code>file</code><br />Ignore the aspect ratio of the input and stretch to both provided dimensions.<br /><br /><code>inside</code><br />Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.<br /><br /><code>outside</code><br />Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.
      </td>
      <td valign="top">no</td>
      <td valign="top">cover</td>
    </tr>
    <tr>
      <td valign="top">position</td>
      <td valign="top">{string}</td>
      <td valign="top">The position When using a fit of "cover" or "contain"<br /><br /><code>left</code>, <code>right</code>, <code>top</code>, <code>bottom</code>, <code>center</code>, <code>left top</code>, <code>right top</code>, <code>left bottom</code>, <code>right bottom</code></td>
      <td valign="top">no</td>
      <td valign="top">center</td>
    </tr>
  </tbody>
</table>

### The Command Line Arguments

The resizing command supports different arguments to remove resized images, recreate all images, etc.

<table>
  <thead>
    <tr>
      <th align="left">Command</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">npm run images</td>
      <td valign="top">Creates all resized versions of a file that are missing.</td>
    </tr>
    <tr>
      <td valign="top">npm run images recreate</td>
      <td valign="top">Removes the resized versions of all files and recreates them.</td>
    </tr>
    <tr>
      <td valign="top">npm run remove</td>
      <td valign="top">Removes the resized versions of all files.</td>
    </tr>
  </tbody>
</table>

**Important:**

The recreation and removal arguments will force the command to remove all images it detects as being resized versions (by their filename). If you use other tools for your images that add postfixes to the filenames, this might lead to false positives, so please backup your files before you run this.

```bash
npm run images remove
```

## Placeholder Images

All placeholder images used in the `index.html` file are downloaded from [pexels.com](https://www.pexels.com/), and [pixabay.com](https://pixabay.com/). Those are two fantastic collections of free stock photos from photographers around the globe.

If you're one of the photographers and would like to change the linked website or get an image removed from the boilerplate, please shoot me an email to code@dominik-hanke.de and I'll update it as soon as possible.

<table>
  <thead>
    <tr>
      <th align="left">Slide</th>
      <th align="left">Photographer</th>
      <th align="left">Website</th>
      <th align="left">Image Source</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">1</td>
      <td valign="top">
        <a href="https://www.pexels.com/@kailash-kumar-212268">kailash kumar</a>
      </td>
      <td valign="top">
        <a href="https://www.facebook.com/kailashkumarphotogrphy/">facebook page</a>
      </td>
      <td valign="top">
        <a href="https://www.pexels.com/photo/white-sheep-on-farm-693776/">pexels.com</a>
      </td>
    </tr>
    <tr>
      <td valign="top">2</td>
      <td valign="top">
        <a href="https://pixabay.com/en/users/Cleverpix-2508959/">Cleverpix</a>
      </td>
      <td valign="top">
        <a href="https://www.cleverpix.com.au/">cleverpix.com.au</a>
      </td>
      <td valign="top">
        <a href="https://pixabay.com/en/sunset-tree-water-silhouette-1373171/">pixabay.com</a>
      </td>
    </tr>
    <tr>
      <td valign="top">3</td>
      <td valign="top">
        <a href="https://pixabay.com/en/users/GregMontani-1014946/">GregMontani</a>
      </td>
      <td valign="top">
        -
      </td>
      <td valign="top">
        <a href="https://pixabay.com/en/desert-morocco-dunes-sand-2435404/">pixabay.com</a>
      </td>
    </tr>
  </tbody>
</table>

<br />

<table>
  <thead>
    <th align="left">Album Photo</th>
    <th align="left">Photographer</th>
    <th align="left">Website</th>
    <th align="left">Image Source</th>
  </thead>
  <tbody>
    <tr>
      <td valign="top">1</td>
      <td valign="top">
        <a href="https://pixabay.com/en/users/skeeze-272447/">skeeze</a>
      </td>
      <td valign="top">
        -
      </td>
      <td valign="top">
        <a href="https://pixabay.com/en/landscape-panorama-scenic-clouds-2278315/">pixabay.com</a>
      </td>
    </tr>
    <tr>
      <td valign="top">2</td>
      <td valign="top">
        <a href="https://www.pexels.com/@shottrotter">shottrotter</a>
      </td>
      <td valign="top">
        <a href="http://www.shottrotter.be/">shottrotter.be</a>
      </td>
      <td valign="top">
        <a href="https://www.pexels.com/photo/photo-of-person-walking-on-deserted-island-934718/">pexels.com</a>
      </td>
    </tr>
    <tr>
      <td valign="top">3</td>
      <td valign="top">
        <a href="https://pixabay.com/en/users/sasint-3639875/">sasint</a>
      </td>
      <td valign="top">
        <a href="http://www.pixartasia.com/">pixartasia.com</a>
      </td>
      <td valign="top">
        <a href="https://pixabay.com/en/elephant-animals-asia-large-1822636/">pixabay.com</a>
      </td>
    </tr>
    <tr>
      <td valign="top">4</td>
      <td valign="top">
        <a href="https://pixabay.com/en/users/Walkerssk-1409366/">Walkerssk</a>
      </td>
      <td valign="top">
        <a href="http://www.walkers.sk/">walkers.sk</a>
      </td>
      <td valign="top">
        <a href="https://pixabay.com/en/cinque-terre-italy-houses-color-1859688/">pixabay.com</a>
      </td>
    </tr>
    <tr>
      <td valign="top">5</td>
      <td valign="top">
        <a href="https://pixabay.com/en/users/Marcocarli-4847725/">Marcocarli</a>
      </td>
      <td valign="top">
        -
      </td>
      <td valign="top">
        <a href="https://pixabay.com/en/mountain-alpine-wild-emperor-2444712/">pixabay.com</a>
      </td>
    </tr>
    <tr>
      <td valign="top">6</td>
      <td valign="top">
        <a href="https://www.pexels.com/@jaymantri">Jaymantri</a>
      </td>
      <td valign="top">
        <a href="https://jaymantri.com/">jaymantri.com</a>
      </td>
      <td valign="top">
        <a href="https://www.pexels.com/photo/nature-forest-trees-fog-4827/">pexels.com</a>
      </td>
    </tr>
    <tr>
      <td valign="top">7</td>
      <td valign="top">
        <a href="https://www.pexels.com/@veeterzy">veeterzy</a>
      </td>
      <td valign="top">
        <a href="https://www.instagram.com/veeterzy?ref=pexels">instagram profile</a>
      </td>
      <td valign="top">
        <a href="https://www.pexels.com/photo/road-landscape-nature-forest-39811">pexels.com</a>
      </td>
    </tr>
    <tr>
      <td valign="top">8</td>
      <td valign="top">
        <a href="https://www.pexels.com/@pok-rie-33563">Pok Rie</a>
      </td>
      <td valign="top">
        -
      </td>
      <td valign="top">
        <a href="https://www.pexels.com/photo/brown-wooden-footbridge-on-body-of-water-during-sunrise-129441/">pexels.com</a>
      </td>
    </tr>
  </tbody>
</table>
