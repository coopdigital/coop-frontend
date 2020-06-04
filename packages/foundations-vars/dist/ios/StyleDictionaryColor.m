
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Thu, 04 Jun 2020 07:05:42 GMT
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
[UIColor colorWithRed:0.000f green:0.349f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.059f green:0.518f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:0.169f green:0.620f blue:0.612f alpha:1.000f],
[UIColor colorWithRed:0.047f green:0.427f blue:0.420f alpha:1.000f],
[UIColor colorWithRed:0.216f green:0.298f blue:0.388f alpha:1.000f],
[UIColor colorWithRed:0.290f green:0.400f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:0.180f green:0.247f blue:0.325f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
