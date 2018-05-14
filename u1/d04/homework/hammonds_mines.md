**Part 1**

**1. Create a variable called guestOfHonor and assign it's value to the name of the paleontologist at Snakewater, Montana.**

 var guestOfHonor =  snakewater_montana.paleontologist
 guestOfHonor
'Dr. Alan Grant’

**2. Access the value of the specimen found in Snakewater, Montana, and store it in a variable called clever_girl.**

 var clever_girl = snakewater_montana.specimen

 clever_girl
'Velociraptor'

**Part 2**

**1. Store the array of specimens of this site into a variable called nicaraguanSpecimens.**

 var nicaraguanSpecimens = nicaragua.specimens

 nicaraguanSpecimens

[ 'Tyrannosaurus Rex',
  'Stegosaurous',
  'Triceratops',
  'Velociraptor' ]

**2. Make a variable called favoriteSpecimen and assign it's value to your favorite dinosaur within nicaraguanSpecimens.**
 var favoriteSpecimen = nicaraguanSpecimens[0]

 favoriteSpecimen
'Tyrannosaurus Rex’

**3. Add 250000 to the annual budget of this site.**
 nicaragua.annual_budget = nicaragua.annual_budget + 250000
1750000



**Part 3**

**1. Access the depth of John Hammond's mine in Mexico.**

 hammonds_mines.mexico.depth
'350 meters'

**2. Store the depth of the Mexican mine into an appropriately named variable.**

 var mexicoDepth = hammonds_mines.mexico.depth
 mexicoDepth
'350 meters'

**3. Access and the annual budget for Hammond's mine in Buenos Airies.**

 hammonds_mines.buenos_aires.annual_budget
1000000

**4. Store the annual budget for Hammond's mine in Buenos Aires into an appropriately named variable.**

 var buenosBudget = hammonds_mines.buenos_aires.annual_budget

 buenosBudget
1000000
 

**5. Access the dinosaur DNA specimens found in Buenos Aires.**

 hammonds_mines.buenos_aires.specimens
[ 'Dilophosaurus', 'Brachiosaurus' ]

**6. Insert Nicaragua into hammonds_mines.**

 hammonds_mines.nicaragua = nicaragua

{ depth: '200 meters',
  annual_budget: 1750000,
  specimens: 
   [ 'Tyrannosaurus Rex',
     'Stegosaurous',
     'Triceratops',
     'Velociraptor' ] }

**7. Create three variables to store the annual budgets for each mine into them.**
 var buenosBudget = hammonds_mines.buenos_aires.annual_budget

 buenosBudget
1000000


 var mexicoBudget = hammonds_mines.mexico.annual_budget
undefined
 mexicoBudget
900000
 
var nicaraguaBudget = hammonds_mines.nicaragua.annual_budget

 nicaraguaBudget
1750000

**8. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.**

 var nicaraguaBudget = hammonds_mines.nicaragua.annual_budget
undefined
 nicaraguaBudget
1750000
 
**9. Access the "Parasaurolophus" specimen.**

 hammonds_mines.mexico.specimens[1]

'Parasaurolophus'