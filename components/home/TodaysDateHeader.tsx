import { Text } from 'react-native';

const today = new Date();

const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formattedDate = today.toLocaleDateString('en-GB', options);

const TodaysDateHeader = () => {
  return <Text className="mb-5 mt-5 font-nunito-bold">{formattedDate}</Text>;
};

export default TodaysDateHeader;