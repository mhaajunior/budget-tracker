import { Currencies } from "@/lib/currencies";

export function DateToUTCDate(date: Date) {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  );
}

export function GetFormatterForCurrency(currency: string) {
  const locale = Currencies.find((c) => c.value === currency)?.locale;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });
}

export function convertToLocalDate(date: Date): Date {
  // หักลบเวลา UTC เพื่อแปลงเป็นเวลาท้องถิ่น
  const localOffset = date.getTimezoneOffset() * 60000; // ค่า offset ในมิลลิวินาที
  return new Date(date.getTime() - localOffset);
}
