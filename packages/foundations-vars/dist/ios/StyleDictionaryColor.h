
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Wed, 03 Jun 2020 20:04:42 GMT
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
