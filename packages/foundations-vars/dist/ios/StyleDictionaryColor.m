
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Tue, 09 Jun 2020 12:32:20 GMT
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
[UIColor colorWithRed:0.216f green:0.298f blue:0.388f alpha:1.000f],
[UIColor colorWithRed:0.290f green:0.400f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:0.180f green:0.247f blue:0.325f alpha:1.000f],
[UIColor colorWithRed:0.059f green:0.518f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:0.169f green:0.620f blue:0.612f alpha:1.000f],
[UIColor colorWithRed:0.047f green:0.427f blue:0.420f alpha:1.000f],
[UIColor colorWithRed:0.216f green:0.298f blue:0.388f alpha:1.000f],
[UIColor colorWithRed:0.290f green:0.400f blue:0.514f alpha:1.000f],
[UIColor colorWithRed:0.180f green:0.247f blue:0.325f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.447f blue:0.604f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.004f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.373f blue:0.118f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.349f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.349f blue:0.506f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.420f blue:0.718f alpha:1.000f],
[UIColor colorWithRed:0.831f green:0.918f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.255f green:0.549f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.573f green:0.847f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.196f green:0.420f blue:0.718f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.298f blue:0.537f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.616f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.922f blue:0.890f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.392f blue:0.173f alpha:1.000f],
[UIColor colorWithRed:0.839f green:0.192f blue:0.094f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.953f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.839f green:0.192f blue:0.094f alpha:1.000f],
[UIColor colorWithRed:0.624f green:0.165f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.953f blue:0.953f alpha:1.000f],
[UIColor colorWithRed:0.769f green:0.769f blue:0.769f alpha:1.000f],
[UIColor colorWithRed:0.431f green:0.431f blue:0.431f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.925f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.827f blue:0.031f alpha:1.000f],
[UIColor colorWithRed:0.929f green:0.984f blue:0.235f alpha:1.000f],
[UIColor colorWithRed:0.729f green:0.827f blue:0.012f alpha:1.000f],
[UIColor colorWithRed:0.310f green:0.510f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.220f green:0.361f blue:0.039f alpha:1.000f],
[UIColor colorWithRed:0.039f green:0.984f blue:0.984f alpha:1.000f],
[UIColor colorWithRed:0.447f green:0.863f blue:0.859f alpha:1.000f],
[UIColor colorWithRed:0.059f green:0.518f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:0.086f green:0.427f blue:0.400f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.263f blue:0.827f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.502f blue:0.827f alpha:1.000f],
[UIColor colorWithRed:0.678f green:0.125f blue:0.557f alpha:1.000f],
[UIColor colorWithRed:0.380f green:0.188f blue:0.490f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
