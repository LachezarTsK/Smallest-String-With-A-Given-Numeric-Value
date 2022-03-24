
public class Solution {

    public String getSmallestString(int numberOfChars, int value) {

        final int ascii_a = 97;
        final int maxValueOfChar = 26;
        char[] smallestString = new char[numberOfChars];

        while (numberOfChars > 0) {
            int valueCurrentChar = Math.min((value - numberOfChars + 1), maxValueOfChar);
            smallestString[numberOfChars - 1] = (char) (ascii_a + valueCurrentChar - 1);
            value -= valueCurrentChar;
            numberOfChars--;
        }
        return String.valueOf(smallestString);
    }
}
