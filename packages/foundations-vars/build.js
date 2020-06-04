const StyleDictionary = require('style-dictionary');
var _ = require('lodash');

console.log('Building Co-op design tokens...');
console.log('\n==============================================');

StyleDictionary.registerTransform({ 
  name: 'cti/hyphen',
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

			} else {

				return [
					_.kebabCase([options.prefix].concat(prop.path).join('-'))
				]

			}

        

    //   if ('modifier' in prop === true) {
    //     let tokenPath = prop.path;
    //     tokenLast = _.last(tokenPath);
    //     tokenEnd = '--' + tokenLast;

    //     let tokenPathRemove = prop.path;
    //     tokenPathRemoveLast = tokenPathRemove.pop();

    //     tokenPathJoin = _.kebabCase([options.prefix].concat(tokenPathRemove).join('-'));

    //     returnedToken = tokenPathJoin.concat(tokenEnd);
    //   } else {
    //     _.kebabCase([options.prefix].concat(prop.path).join('-'));
    //   }   

    //   return [
    //       returnedToken
    //   ]
    }
});


// StyleDictionary.registerTransform({ 
//   name: 'cti/hyphen',
//   type: 'name',
//     transformer: function(prop, options) {
      
//       let tokenPath = prop.path;
//       tokenLast = _.last(tokenPath);
//       tokenEnd = '--' + tokenLast;

//       let tokenPathRemove = prop.path;
//       tokenPathRemoveLast = tokenPathRemove.pop();

//       tokenPathJoin = _.kebabCase([options.prefix].concat(tokenPathRemove).join('-'));

//       returnedToken = tokenPathJoin.concat(tokenEnd);

//       return [
//         returnedToken,
//         prop.attributes.item
//       ]
//     }
// });

StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');

StyleDictionaryExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');