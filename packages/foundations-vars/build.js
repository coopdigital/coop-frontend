const StyleDictionary = require('style-dictionary');
var _ = require('lodash');

console.log('Building Co-op design tokens...');

StyleDictionary.registerTransform({ 
  name: 'name/cti/hyphen',
  type: 'name',
    transformer: function(prop, options) {

			if ('modifier' in prop === true) {

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

			} if ('base' in prop === true) {

				let tokenPath = prop.path;
				tokenLast = _.last(tokenPath);
				tokenEnd = '';

				let tokenPathRemove = prop.path;
				tokenPathRemoveLast = tokenPathRemove.pop();

				tokenPathJoin = _.kebabCase([options.prefix].concat(tokenPathRemove).join('-'));

				returnedTokenBase = tokenPathJoin.concat(tokenEnd);

				return [
					returnedTokenBase
				] 

			} if ('letterNumber' in prop === true) {

				let tokenPath = prop.path;

				tokenFirst = _.first(tokenPath);
				tokenLast = _.last(tokenPath);
				tokenSize = _.nth(tokenPath, -2);
				tokenNo = _.nth(tokenPath, -3);

        returnedTokenBase = _.concat([tokenFirst, '-' + tokenNo, '-' + tokenSize, '-' + tokenLast]).join('');
				
				return [
					returnedTokenBase
				]

			} else {

				return [
					_.kebabCase([options.prefix].concat(prop.path).join('-'))
				]

			}
    }
});

StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');

StyleDictionaryExtended.buildAllPlatforms();

console.log('\nBuild completed!');