module.exports = (env, argv) => {
  return {
    collections: [
      // Slider Images 1
      {
        /* A name to identify the collection */
        name: "Slider images 1",

        /* The source directory in which the script is looking for image files */
        source: "./dist/images/slides",

        /* Define if the resizing should include files in subdirectories */
        recursive: true,

        /* The sizes to create */
        sizes: [
          {
            /* The name of the size, to identify it in case of errors */
            name: "Tablet Resolution",

            /* The width of the new image */
            width: 690,

            /* The height of the new image */
            height: 280,

            /*
             * Define the method by which the image should fit (default: cover)
             *
             *   cover:     Crop to cover both provided dimensions.
             *   contain:   Embed within both provided dimensions.
             *   fill:      Ignore the aspect ratio of the input and stretch to both provided dimensions.
             *   inside:    Preserving aspect ratio, resize the image to be as large as possible while
             *              ensuring its dimensions are less than or equal to both those specified.
             *   outside:   Preserving aspect ratio, resize the image to be as small as possible while
             *              ensuring its dimensions are greater than or equal to both those specified.
             */
            fit: "cover",

            /*
             * You can specify the postfix that is used for the filename of the new image.
             * The width and height are used by default (e.g. slide-001-1920x1080.jpg).
             */
            postfix: "-690x280"
          },
          {
            name: "Smartphone Resolution",
            width: 510,
            height: 207
          },
          {
            name: "Changed width only",
            width: 510
          },
          {
            name: "Changed height only",
            height: 207
          }
        ]
      },
      // Slider Images 2
      {
        name: "Slider images 2",
        source: "./dist/images/slides-two",
        recursive: true,
        sizes: [
          {
            name: "Tablet Resolution",
            width: 690,
            height: 280,
            postfix: "-690x280"
          }
        ]
      }
    ]
  };
};
