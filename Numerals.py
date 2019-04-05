import math as mt

# Built a dictionary containing unique values
distinct_numerals_step1 = {1:'I', 5:'V', 10:'X'}
distinct_numerals_step2 = {1:'X', 5:'L', 10:'C'}
distinct_numerals_step3 = {1:'C', 5:'D', 10:'M'}

def romanNumeral(digit):
    '''
    :param digit: an integer value must be supplied
    :return: the roman numeral value of the given digit in a string format
    '''


    power = int(mt.log10(digit))                #used log to get the power of the number to the base of 10
    holder = str(digit)                         #To hold the "string-ified" digit for iteration
    container = ''                              #Collecting bin for the response

    for i in holder:
        if power % 3 == 0 and power == 0:

            if int(i) == 5:
                container += distinct_numerals_step1[5]


            # elif int(i) == 1:
            #     container += distinct_numerals_step1[1]

            elif int(i) > 5:
                if int(i) - 5 > 3:
                    container += distinct_numerals_step1[1]
                    container += distinct_numerals_step1[10]

                else:
                    container += distinct_numerals_step1[5]
                    container += (int(i) - 5) * distinct_numerals_step1[1]


            elif int(i) != 0:
                if 2 > 5 - int(i):
                    container += (5 - int(i)) * distinct_numerals_step1[1]
                    container += distinct_numerals_step1[5]

                else:
                    container += int(i) * distinct_numerals_step1[1]

        if power % 3 == 1:
            if int(i) == 5:
                container += distinct_numerals_step2[5]

            # elif int(i) == 1:
            #     container += distinct_numerals_step1[10]

            elif int(i) > 5:
                if int(i) - 5 > 3:
                    container += distinct_numerals_step2[1]
                    container += distinct_numerals_step2[10]

                else:
                    container += distinct_numerals_step2[5]
                    container += (int(i) - 5) * distinct_numerals_step2[1]


            elif int(i) != 0:
                if 2 > 5 - int(i):
                    container += (5 - int(i)) * distinct_numerals_step2[1]
                    container += distinct_numerals_step2[5]

                else:
                    container += int(i) * distinct_numerals_step2[1]

        if power % 3 == 2:

            if int(i) == 5:
                container += distinct_numerals_step3[5]

            # elif int(i) == 1:
            #     container += distinct_numerals_step2[10]

            elif int(i) > 5:
                if int(i) - 5 > 3:
                    container += distinct_numerals_step3[1]
                    container += distinct_numerals_step3[10]

                else:
                    container += distinct_numerals_step3[5]
                    container += (int(i) - 5) * distinct_numerals_step3[1]


            elif int(i) != 0:
                if 2 > 5 - int(i):
                    container += (5 - int(i)) * distinct_numerals_step3[1]
                    container += distinct_numerals_step3[5]

                else:
                    container += int(i) * distinct_numerals_step3[1]


        if power % 3 == 0 and power != 0:
            holder1 = holder[:-3]
            container += int(holder1) * distinct_numerals_step3[10]
            holder = holder[-3:]


        power -= 1

    return container
