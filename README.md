# Bootstrap 4 + WebPack 4 = Boilerplate

This is a basic boilerplate using Bootstrap 4 with SCSS and WebPack, to have an easy and fast setup for new website projects to build upon.

## Installation

1. Clone the repository
2. Run `npm install` or `yarn` on the command line

## Build

Run the command `npm run build` to run webpack in `production` mode.

## Development

Run the command `npm run dev` to run webpack and let it watch for file changes to recompile, when needed.

## How to work with this boilerplate on a new project

### 1. Create a new directory for your project

```bash
mkdir new-project
```

### 2. Switch to that directory

```bash
cd new-project
```

### 3. Clone this repository into the project folder

```bash
git clone git@github.com:noreading/bootstrap4-webpack-boilerplate.git .
```

### 4. Remove the Git-Connection to this repository

```bash
rm -rf .git
```

#### 5. Update the package.json

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

### 6. Install needed dependencies

```bash
npm install
```

### 7. Remember the development command

Don't forget that you need the `npm run dev` command to watch for changes in JS and SCSS files and also to compile them initially.

### 8. If you don't need Bootstrap's JavaScript features

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
