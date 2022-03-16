import dayjs from 'dayjs';

export const dateAndTimeFormat = (
  date?: string | number | Date,
  formatter?: string,
): string => {
  return dayjs(date ?? new Date().toLocaleString()).format(
    formatter ?? 'h:mmA, MMM DD YYYY',
  );
};

export const getCurrentTimestamp = () => new Date().getTime();
