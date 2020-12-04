# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def oddnum arr
    # arr.select { |x| x.is_a?(Integer) }
    array = arr.select { |x| x.instance_of?(Integer) }
    final_array = array.select { |x| x.odd?}
    final_array.sort
end

# p oddnum(full_arr1)



# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

def word_with_letter arr, letter
    arr.select { |x| x.include? (letter)}
end

# p word_with_letter beverages_array, letter_o
# p word_with_letter beverages_array, letter_a




# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel string
    # string = string.split("")
    # string = string.downcase
    string = string.delete 'AaEeIiOoUu'
    # string = string.capitalize

end

p vowel album1
p vowel album2
p vowel album3


# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum array
    total = 0
    array.map {|x| total = total + x}
    p total
end

# sum nums_array1
# sum nums_array2




# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'


def pali(string)
    str = string
    string = string.gsub(/[[:space:]]/, '')
    string = string.downcase
    # p string
    if string.reverse == string
      puts "#{str} pali"
    else 
      puts "#{str} not a pali"
    end
  end

# pali is_palindrome1
# pali is_palindrome2
# pali is_palindrome3
# pali is_palindrome4
