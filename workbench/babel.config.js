module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {},
        'transform-runtime': {},
        'styled-jsx': {},
        'class-properties': {},
      },
    ],
  ],
  plugins: [],
};

/*
 NOTE:
 Using a babel.config.js file inside a next app automatically switches the compiler from SWC
 But we need this config to tell jest how to transform modules to keep tests happy
 Is there a way to do both, or use SWC to transform modules for testing instead of babel?
 Although there isn't too much of a difference in compile time (yet!)
*/
