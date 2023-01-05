function convertToRoman(num) {
 switch (true) {
   case num >= 1000:
    return "M" + convertToRoman(num - 1000);
   case num >= 900 && num < 1000:
    return "CM" + convertToRoman(num - 900);
   case num >= 500 && num < 900:
    return "D" + convertToRoman(num - 500);
   case num >= 400 && num < 500:
    return "CD" + convertToRoman(num - 400);
   case num >= 100 && num < 400:
    return "C" + convertToRoman(num - 100);
   case num >= 90 && num < 100:
    return "XC" + convertToRoman(num - 90);
   case num >= 50 && num < 90:
    return "L" + convertToRoman(num - 50);
   case num >= 40 && num < 50:
    return "XL" + convertToRoman(num - 40);
   case num >= 10 && num < 40:
    return "X" + convertToRoman(num - 10);
   case num == 9:
    return "IX";
   case num >= 5 && num < 9:
    return "V" + convertToRoman(num - 5);
   case num == 4:
    return "IV";
   case num >= 1 && num < 4:
    return "I" + convertToRoman(num - 1);
   case num == 0:
    return "";
 }
}

convertToRoman(36);
