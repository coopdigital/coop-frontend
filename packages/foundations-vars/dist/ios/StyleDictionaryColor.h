
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Wed, 03 Jun 2020 19:45:05 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBrand,
ColorText,
ColorWhite,
ColorBlack,
ColorLinkLink,
ColorLinkHover,
ColorLinkFocus,
ColorLinkActive,
ColorLinkVisited
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
