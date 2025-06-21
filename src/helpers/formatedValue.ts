export function getDateFormatted(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

const getDateDayOfYearFormatted = (dayOfYearStr: string): string => {
  const dayOfYear = parseInt(dayOfYearStr, 10);
  if (dayOfYear < 1 || dayOfYear > 365) return 'Ошибка в указании дня года';

  const date = new Date();
  date.setFullYear(new Date().getFullYear(), 0, dayOfYear);

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return `${date.getDate()} ${months[date.getMonth()]}`;
};

function getNumberFormatted(number: number): string {
  return Math.round(number).toLocaleString('ru-RU');
}

export type FormatData = 'number' | 'dayOfYear' | 'default';

export function getFormattedValue(
  value: number | string | undefined,
  format: FormatData = 'default'
): string | number | undefined {
  if (value === undefined) return '';
  switch (format) {
    case 'number':
      return getNumberFormatted(Number(value));
    case 'dayOfYear':
      return getDateDayOfYearFormatted(String(value));
    default:
      return value;
  }
}
