const StyleDictionary = require('style-dictionary');
var _ = require('lodash');

console.log('Building Co-op design tokens...');
console.log('\n==============================================');

StyleDictionary.registerTransform({ 
  name: 'cti/hyphen',
  type: 'name',
    transformer: function(prop, options) {
      
      let tokenPath = prop.path;
      tokenLast = _.last(tokenPath);
      tokenEnd = '--' + tokenLast;

      let tokenPathRemove = prop.path;
      tokenPathRemoveLast = tokenPathRemove.pop();

      tokenPathJoin = _.kebabCase([options.prefix].concat(tokenPathRemove).join('-'));

      returnedToken = tokenPathJoin.concat(tokenEnd);

      return [
        returnedToken
      ]
    }
});

StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');

StyleDictionaryExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');