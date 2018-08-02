# cli-args-parser

## Instructions
### 1. To parse string like arguments
  the input should be like: `"--foo bar"`

    node parser --foo bar
 
 ### 2. To parse array like arguments
   the input should be like: `["--foo", "bar"]`
 
     node parserArray [--foo, bar]
  
 ### Test
   To test more complex inputs you could run
 
     npm run parse-string
     npm run parse-array
  
