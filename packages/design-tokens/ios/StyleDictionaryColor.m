
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Fri, 18 Dec 2020 14:50:23 GMT
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
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.953f blue:0.953f alpha:1.000f],
[UIColor colorWithRed:0.847f green:0.847f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.769f green:0.769f blue:0.769f alpha:1.000f],
[UIColor colorWithRed:0.431f green:0.431f blue:0.431f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.953f blue:0.953f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.961f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.867f green:0.914f blue:0.929f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.957f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.141f blue:0.188f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.945f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.729f green:0.137f blue:0.153f alpha:1.000f],
[UIColor colorWithRed:0.886f green:0.059f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.416f blue:0.427f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.757f blue:0.765f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.859f blue:0.859f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.945f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.729f green:0.137f blue:0.153f alpha:1.000f],
[UIColor colorWithRed:0.886f green:0.059f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.820f blue:0.337f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.933f blue:0.780f alpha:1.000f],
[UIColor colorWithRed:0.745f green:0.251f blue:0.082f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.341f blue:0.141f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.482f blue:0.231f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.612f blue:0.349f alpha:1.000f],
[UIColor colorWithRed:0.992f green:0.725f blue:0.475f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.906f blue:0.757f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.973f blue:0.906f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.341f blue:0.141f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.698f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.827f blue:0.035f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.898f blue:0.231f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.953f blue:0.447f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.988f blue:0.663f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.984f blue:0.804f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.976f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.827f blue:0.035f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.953f blue:0.447f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.898f blue:0.231f alpha:1.000f],
[UIColor colorWithRed:0.314f green:0.506f blue:0.106f alpha:1.000f],
[UIColor colorWithRed:0.843f green:0.890f blue:0.776f alpha:1.000f],
[UIColor colorWithRed:0.227f green:0.376f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.310f green:0.510f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.447f green:0.667f blue:0.141f alpha:1.000f],
[UIColor colorWithRed:0.588f green:0.796f blue:0.282f alpha:1.000f],
[UIColor colorWithRed:0.725f green:0.886f blue:0.467f alpha:1.000f],
[UIColor colorWithRed:0.906f green:0.969f blue:0.796f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.988f blue:0.914f alpha:1.000f],
[UIColor colorWithRed:0.227f green:0.376f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:0.310f green:0.510f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.588f green:0.796f blue:0.282f alpha:1.000f],
[UIColor colorWithRed:0.725f green:0.886f blue:0.467f alpha:1.000f],
[UIColor colorWithRed:0.016f green:0.376f blue:0.384f alpha:1.000f],
[UIColor colorWithRed:0.059f green:0.518f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:0.153f green:0.667f blue:0.671f alpha:1.000f],
[UIColor colorWithRed:0.294f green:0.780f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:0.475f green:0.863f blue:0.890f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.949f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.914f green:0.980f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.016f green:0.376f blue:0.384f alpha:1.000f],
[UIColor colorWithRed:0.059f green:0.518f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:0.475f green:0.863f blue:0.890f alpha:1.000f],
[UIColor colorWithRed:0.475f green:0.863f blue:0.890f alpha:1.000f],
[UIColor colorWithRed:0.027f green:0.380f blue:0.761f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.953f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.027f green:0.380f blue:0.761f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.953f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.067f green:0.302f blue:0.580f alpha:1.000f],
[UIColor colorWithRed:0.027f green:0.380f blue:0.761f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.604f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.718f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.890f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.933f green:0.953f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.067f green:0.302f blue:0.580f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.604f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.890f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.027f green:0.380f blue:0.761f alpha:1.000f],
[UIColor colorWithRed:0.231f green:0.259f blue:0.498f alpha:1.000f],
[UIColor colorWithRed:0.310f green:0.322f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:0.553f green:0.604f blue:0.894f alpha:1.000f],
[UIColor colorWithRed:0.686f green:0.741f blue:0.961f alpha:1.000f],
[UIColor colorWithRed:0.812f green:0.859f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.953f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.090f blue:0.549f alpha:1.000f],
[UIColor colorWithRed:0.404f green:0.153f blue:0.725f alpha:1.000f],
[UIColor colorWithRed:0.553f green:0.267f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.827f green:0.584f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.929f green:0.765f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.976f green:0.929f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.090f blue:0.549f alpha:1.000f],
[UIColor colorWithRed:0.506f green:0.137f blue:0.451f alpha:1.000f],
[UIColor colorWithRed:0.671f green:0.153f blue:0.553f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.565f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.722f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.980f green:0.820f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.980f green:0.918f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.671f green:0.153f blue:0.553f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.565f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.980f green:0.820f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.694f blue:0.906f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.694f blue:0.906f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.694f blue:0.906f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.976f blue:0.992f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.141f blue:0.188f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.141f blue:0.188f alpha:1.000f],
[UIColor colorWithRed:0.404f green:0.255f blue:0.439f alpha:1.000f],
[UIColor colorWithRed:0.067f green:0.302f blue:0.580f alpha:1.000f],
[UIColor colorWithRed:0.027f green:0.380f blue:0.761f alpha:1.000f],
[UIColor colorWithRed:0.157f green:0.486f blue:0.875f alpha:1.000f],
[UIColor colorWithRed:0.282f green:0.224f blue:0.396f alpha:1.000f],
[UIColor colorWithRed:0.388f green:0.325f blue:0.522f alpha:1.000f],
[UIColor colorWithRed:0.467f green:0.424f blue:0.655f alpha:1.000f],
[UIColor colorWithRed:0.557f green:0.533f blue:0.729f alpha:1.000f],
[UIColor colorWithRed:0.518f green:0.490f blue:0.710f alpha:1.000f],
[UIColor colorWithRed:0.698f green:0.682f blue:0.808f alpha:1.000f],
[UIColor colorWithRed:0.827f green:0.820f blue:0.894f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.910f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.467f green:0.424f blue:0.655f alpha:1.000f],
[UIColor colorWithRed:0.557f green:0.533f blue:0.729f alpha:1.000f],
[UIColor colorWithRed:0.518f green:0.490f blue:0.710f alpha:1.000f],
[UIColor colorWithRed:0.698f green:0.682f blue:0.808f alpha:1.000f],
[UIColor colorWithRed:0.827f green:0.820f blue:0.894f alpha:1.000f],
[UIColor colorWithRed:0.918f green:0.910f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.322f green:0.208f blue:0.369f alpha:1.000f],
[UIColor colorWithRed:0.443f green:0.322f blue:0.529f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.400f blue:0.592f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.463f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:0.663f green:0.463f blue:0.733f alpha:1.000f],
[UIColor colorWithRed:0.733f green:0.635f blue:0.776f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.729f blue:0.831f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.867f blue:0.914f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.400f blue:0.592f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.463f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:0.663f green:0.463f blue:0.733f alpha:1.000f],
[UIColor colorWithRed:0.733f green:0.635f blue:0.776f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.729f blue:0.831f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.867f blue:0.914f alpha:1.000f],
[UIColor colorWithRed:0.424f green:0.243f blue:0.325f alpha:1.000f],
[UIColor colorWithRed:0.525f green:0.306f blue:0.408f alpha:1.000f],
[UIColor colorWithRed:0.616f green:0.357f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.737f green:0.443f blue:0.565f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.361f blue:0.549f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.624f blue:0.706f alpha:1.000f],
[UIColor colorWithRed:0.890f green:0.796f blue:0.831f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.898f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.616f green:0.357f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.737f green:0.443f blue:0.565f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.361f blue:0.549f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.624f blue:0.706f alpha:1.000f],
[UIColor colorWithRed:0.890f green:0.796f blue:0.831f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.898f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.212f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.608f green:0.275f blue:0.169f alpha:1.000f],
[UIColor colorWithRed:0.706f green:0.365f blue:0.169f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.612f blue:0.224f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.655f blue:0.294f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.733f blue:0.561f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.867f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.969f green:0.933f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.706f green:0.365f blue:0.169f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.612f blue:0.224f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.655f blue:0.294f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.733f blue:0.561f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.867f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.969f green:0.933f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.439f green:0.306f blue:0.141f alpha:1.000f],
[UIColor colorWithRed:0.569f green:0.420f blue:0.227f alpha:1.000f],
[UIColor colorWithRed:0.749f green:0.518f blue:0.243f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.820f blue:0.427f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.855f blue:0.427f alpha:1.000f],
[UIColor colorWithRed:0.929f green:0.824f blue:0.451f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.886f blue:0.643f alpha:1.000f],
[UIColor colorWithRed:0.976f green:0.945f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.749f green:0.518f blue:0.243f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.820f blue:0.427f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.855f blue:0.427f alpha:1.000f],
[UIColor colorWithRed:0.929f green:0.824f blue:0.451f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.886f blue:0.643f alpha:1.000f],
[UIColor colorWithRed:0.976f green:0.945f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.231f green:0.247f blue:0.145f alpha:1.000f],
[UIColor colorWithRed:0.337f green:0.341f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.451f blue:0.271f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.788f blue:0.471f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.808f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.831f blue:0.647f alpha:1.000f],
[UIColor colorWithRed:0.894f green:0.898f blue:0.776f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.965f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.451f blue:0.271f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.788f blue:0.471f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.808f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.831f blue:0.647f alpha:1.000f],
[UIColor colorWithRed:0.894f green:0.898f blue:0.776f alpha:1.000f],
[UIColor colorWithRed:0.965f green:0.965f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.169f green:0.286f blue:0.275f alpha:1.000f],
[UIColor colorWithRed:0.224f green:0.380f blue:0.373f alpha:1.000f],
[UIColor colorWithRed:0.282f green:0.490f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.506f green:0.722f blue:0.722f alpha:1.000f],
[UIColor colorWithRed:0.529f green:0.804f blue:0.804f alpha:1.000f],
[UIColor colorWithRed:0.725f green:0.855f blue:0.851f alpha:1.000f],
[UIColor colorWithRed:0.827f green:0.906f blue:0.898f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.961f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.282f green:0.490f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.506f green:0.722f blue:0.722f alpha:1.000f],
[UIColor colorWithRed:0.529f green:0.804f blue:0.804f alpha:1.000f],
[UIColor colorWithRed:0.725f green:0.855f blue:0.851f alpha:1.000f],
[UIColor colorWithRed:0.827f green:0.906f blue:0.898f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.961f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.173f green:0.259f blue:0.345f alpha:1.000f],
[UIColor colorWithRed:0.271f green:0.396f blue:0.533f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.467f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:0.545f green:0.710f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.561f green:0.729f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.757f green:0.843f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.847f green:0.902f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.965f blue:0.992f alpha:1.000f],
[UIColor colorWithRed:0.318f green:0.467f blue:0.639f alpha:1.000f],
[UIColor colorWithRed:0.545f green:0.710f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.561f green:0.729f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.757f green:0.843f blue:0.933f alpha:1.000f],
[UIColor colorWithRed:0.847f green:0.902f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.941f green:0.965f blue:0.992f alpha:1.000f],
[UIColor colorWithRed:0.153f green:0.306f blue:0.592f alpha:1.000f],
[UIColor colorWithRed:0.059f green:0.518f blue:0.510f alpha:1.000f],
[UIColor colorWithRed:0.110f green:0.420f blue:0.416f alpha:1.000f],
[UIColor colorWithRed:0.071f green:0.286f blue:0.282f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.345f blue:0.471f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.345f blue:0.471f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.243f blue:0.333f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.122f blue:0.169f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.937f blue:0.937f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.937f blue:0.937f alpha:1.000f],
[UIColor colorWithRed:0.847f green:0.847f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.769f green:0.769f blue:0.769f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.937f blue:0.937f alpha:1.000f],
[UIColor colorWithRed:0.847f green:0.847f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.345f blue:0.471f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.243f blue:0.333f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.122f blue:0.169f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.447f blue:0.604f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.447f blue:0.604f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.224f blue:0.306f alpha:1.000f],
[UIColor colorWithRed:0.553f green:0.267f blue:0.847f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.173f blue:0.239f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.173f blue:0.239f alpha:1.000f],
[UIColor colorWithRed:0.157f green:0.157f blue:0.157f alpha:1.000f],
[UIColor colorWithRed:0.157f green:0.157f blue:0.157f alpha:1.000f],
[UIColor colorWithRed:0.349f green:0.349f blue:0.349f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
