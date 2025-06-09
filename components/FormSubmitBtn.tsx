import { Text, Pressable, PressableProps, ColorValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Define the base styles for clarity and reusability
const baseContainerStyle = "mx-5 overflow-hidden rounded-lg";
const baseGradientStyle = "items-center justify-center px-6 py-4 w-full";
const baseLabelStyle = "text-center text-lg font-bold text-white";

// Define the specific type for the gradient colors, requiring at least two.
type GradientColors = readonly [ColorValue, ColorValue, ...ColorValue[]];

// Default gradient properties that match the required type
const defaultGradientColors: GradientColors = ['#fb923c', '#f97316'];
const defaultGradientStart = { x: 0, y: 0 };
const defaultGradientEnd = { x: 1, y: 0 };

interface FormSubmitBtnProps extends PressableProps {
  label: string;
  containerClassName?: string;
  gradientClassName?: string;
  labelClassName?: string;
  // Use the new, more specific type for the gradientColors prop
  gradientColors?: GradientColors;
}

const FormSubmitBtn = ({
  label,
  containerClassName = '',
  gradientClassName = '',
  labelClassName = '',
  gradientColors = defaultGradientColors,
  ...rest
}: FormSubmitBtnProps) => {
  return (
    <Pressable
      className={`${baseContainerStyle} ${containerClassName}`}
      {...rest}
    >
      <LinearGradient
        className={`${baseGradientStyle} ${gradientClassName}`}
        // The type of `gradientColors` now perfectly matches the expected prop type
        colors={gradientColors}
        start={defaultGradientStart}
        end={defaultGradientEnd}
      >
        <Text className={`${baseLabelStyle} ${labelClassName}`}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default FormSubmitBtn;