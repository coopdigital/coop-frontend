
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Thu, 04 Jun 2020 12:38:39 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBrand,
ColorText,
ColorWhite,
ColorBlack,
ColorButtonBase,
ColorButtonHover,
ColorButtonActive,
ColorButtonPrimaryBase,
ColorButtonPrimaryHover,
ColorButtonPrimaryActive,
ColorButtonDarkBase,
ColorButtonDarkHover,
ColorButtonDarkActive,
ColorLinkBase,
ColorLinkHover,
ColorLinkFocus,
ColorLinkActive,
ColorLinkVisited,
ColorBlueNotificationBase,
ColorBlueNotificationLight,
ColorBlueBright,
ColorBlueLight,
ColorBlueMid,
ColorBlueDark,
ColorOrangeAlertBase,
ColorOrangeAlertLight,
ColorOrangeMid,
ColorRedErrorBase,
ColorRedErrorLight,
ColorRedMid,
ColorRedDark,
ColorGreyLight,
ColorGreyMid,
ColorGreyDark,
ColorYellowBright,
ColorYellowLight,
ColorYellowMid,
ColorGreenBright,
ColorGreenLight,
ColorGreenMid,
ColorGreenDark,
ColorTurquoiseBright,
ColorTurquoiseLight,
ColorTurquoiseMid,
ColorTurquoiseDark,
ColorPinkBright,
ColorPinkLight,
ColorPurpleMid,
ColorPurpleDark
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
