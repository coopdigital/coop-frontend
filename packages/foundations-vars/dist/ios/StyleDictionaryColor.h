
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Thu, 04 Jun 2020 09:59:25 GMT
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
