
#include <array>
using namespace std;

class Solution {
    
public:

    string getSmallestString(int numberOfChars, int value) {
        
        const char ascii_a = 97;
        const int maxValueOfChar = 26;
        string smallestString;
        smallestString.resize(numberOfChars);

        while (numberOfChars > 0) {
            int valueCurrentChar = min((value - numberOfChars + 1), maxValueOfChar);
            smallestString[numberOfChars - 1] = (char) (ascii_a + valueCurrentChar - 1);
            value -= valueCurrentChar;
            numberOfChars--;
        }
        return smallestString;
    }
};
