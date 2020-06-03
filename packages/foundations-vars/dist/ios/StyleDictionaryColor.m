
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Wed, 03 Jun 2020 20:04:42 GMT
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.000f green:0.694f blue:0.906f alpha:1.000f],
[UIColor colorWithRed:0.157f green:0.157f blue:0.157f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.447f blue:0.604f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.004f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.373f blue:0.118f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.349f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.349f blue:0.506f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
