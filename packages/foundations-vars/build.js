const StyleDictionary = require('style-dictionary');
var _ = require('lodash');

console.log('Building Co-op design tokens...');
console.log('\n==============================================');

// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({ 
  name: 'cti/hyphen',
  type: 'name',
    transformer: function(prop, options) {
      return [
          // Will need to see if lodash can help us add te extra -- we use in vars...
        _.kebabCase([options.prefix].concat(prop.path).join('-')),
        .splice(prop.name, 1)
        _.replace(prop.name, prop.name, '--' + prop.name)
      ]
    }
});

StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');

StyleDictionaryExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');