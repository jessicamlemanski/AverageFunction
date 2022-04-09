  # AverageFunction
  Project to create average function and prove out function with unit tests
            
    averageFunction.js contains a function to average two or more numbers
    test/average.test.js contains unit testing for averageFunction.js
    Needed installations: nodejs, mocha, chai
    In main project folder run "npm run test" to run unit testing 


  Expected output of average.test.js:

  > testaverage@1.0.0 test
  > mocha



    Average Function: Invalid Number of Arguments
      √ Average()     -- Expect "Error: Arguments needed in average function"
      √ Average(2)    -- Expect "Error: Arguments needed in average function"
      √ Average('3')  -- Expect "Error: Arguments needed in average function"
      √ Average("123")-- Expect "Error: Arguments needed in average function"

    Average Function: 2 numbers
      √ Average(2,4)      -- Expect 3
      √ Average(100,150)  -- Expect 125
      √ Average(0,0)      -- Expect 0
      √ Average(-2,-4)    -- Expect -3
      √ Average(-100,200) -- Expect 50
      √ Average(30,-5)    -- Expect 12.5

    Average Function: 2 String/Char
      √ Average('2','4')        -- Expect 3
      √ Average('5.87','199.34')-- Expect 102.605
      √ Average("2","4")        -- Expect 3
      √ Average("5.87","199.34")-- Expect 102.605
      √ Average("-2","-45")     -- Expect -23.5
      √ Average("1.33","-34.2") -- Expect -16.435

    Average Function: Multi Input
      √ Average("2",4,'9')                   -- Expect 5
      √ Average("-5.87",9.1,"24",'-3')       -- Expect 6.0575
      √ Average("1",2,"3",4,'5',6,7,8,"9",10)-- Expect 5.5
      √ Average(2,-34.2,"7","-0.5")          -- Expect -6.425

    Average Function: Invalid Input
      √ Average("hello","world")-- Expect "Error: Non-Number Parameter"
      √ Average("123Hello",1)   -- Expect "Error: Non-Number Parameter"
      √ Average("1",3,"Invalid")-- Expect "Error: Non-Number Parameter"


    23 passing (39ms)
