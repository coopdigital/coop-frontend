
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Thu, 04 Jun 2020 07:05:42 GMT
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
ColorLinkVisited,
ColorButtonPrimaryBase,
ColorButtonPrimaryHover,
ColorButtonPrimaryActive,
ColorButtonDarkBase,
ColorButtonDarkHover,
ColorButtonDarkActive
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
