import type { ExcelConcept } from './types';

export const EXCEL_CONCEPTS: ExcelConcept[] = [
  // Section 1: Foundations
  {
    id: 1,
    title: 'Essential Keyboard Shortcuts',
    definition: 'Keyboard shortcuts are combinations of keys that you can press to perform tasks more quickly than using a mouse. Mastering them is a key differentiator for efficient data analysts, dramatically increasing speed and productivity.',
    useCases: [
      'Quickly navigating large datasets without endless scrolling.',
      'Selecting entire columns, rows, or data regions in a single keystroke.',
      'Applying common formatting like bold, italics, or number formats instantly.',
      'Performing frequent actions like saving, undoing, or opening the formatting dialog box.',
    ],
    shortcuts: [
      { category: 'General', keys: 'Ctrl + S', description: 'Save the current workbook' },
      { category: 'General', keys: 'Ctrl + N', description: 'Create a new, blank workbook' },
      { category: 'General', keys: 'Ctrl + Z', description: 'Undo the last action' },
      { category: 'General', keys: 'Ctrl + Y', description: 'Redo the last undone action' },
      { category: 'General', keys: 'Ctrl + 1', description: 'Open the Format Cells dialog box' },
      { category: 'Navigation', keys: 'Arrow Keys', description: 'Move one cell in any direction' },
      { category: 'Navigation', keys: 'Ctrl + Arrow Keys', description: 'Move to the edge of the current data region' },
      { category: 'Navigation', keys: 'Ctrl + Home', description: 'Move to the beginning of the worksheet (A1)' },
      { category: 'Navigation', keys: 'Ctrl + End', description: 'Move to the last used cell on the worksheet' },
      { category: 'Navigation', keys: 'Ctrl + PgUp / PgDn', description: 'Switch to the previous/next worksheet' },
      { category: 'Selection', keys: 'Shift + Arrow Keys', description: 'Extend the selection by one cell' },
      { category: 'Selection', keys: 'Ctrl + Shift + Arrow', description: 'Extend selection to the last non-blank cell' },
      { category: 'Selection', keys: 'Ctrl + A', description: 'Select the entire data region or worksheet' },
      { category: 'Selection', keys: 'Shift + Space', description: 'Select the entire row' },
      { category: 'Selection', keys: 'Ctrl + Space', description: 'Select the entire column' },
      { category: 'Formatting', keys: 'Ctrl + B', description: 'Apply or remove bold formatting' },
      { category: 'Formatting', keys: 'Ctrl + I', description: 'Apply or remove italic formatting' },
      { category: 'Formatting', keys: 'Ctrl + U', description: 'Apply or remove an underline' },
      { category: 'Formatting', keys: 'Ctrl + Shift + $', description: 'Apply Currency format with two decimal places' },
      { category: 'Formatting', keys: 'Ctrl + Shift + %', description: 'Apply Percentage format with no decimal places' },
    ],
    quiz: [
      {
        question: 'Which shortcut quickly selects the entire data region around the active cell?',
        options: [ 'Ctrl + S', 'Ctrl + A', 'Shift + Space', 'Ctrl + 1' ],
        correctAnswer: 'Ctrl + A',
        explanation: '"Ctrl + A" is a powerful shortcut to select the current contiguous block of data, or the entire worksheet if the active cell is not in a data block.',
      },
      {
        question: 'How do you move to the very last used cell on a worksheet?',
        options: [ 'End key', 'Ctrl + Arrow Down', 'Ctrl + End', 'Ctrl + Home' ],
        correctAnswer: 'Ctrl + End',
        explanation: '"Ctrl + End" is the most reliable way to navigate to the bottom-rightmost cell that has been used in the worksheet.',
      },
      {
        question: 'Which shortcut opens the "Format Cells" dialog box?',
        options: [ 'Ctrl + F', 'Alt + H', 'Ctrl + 1', 'Ctrl + P' ],
        correctAnswer: 'Ctrl + 1',
        explanation: '"Ctrl + 1" is a universal shortcut to access the detailed formatting options for cells, including number, alignment, font, and border.',
      }
    ],
  },
  {
    id: 2,
    title: 'Cell Referencing (Absolute, Relative, Mixed)',
    definition: 'Understanding how cell references behave when copied. Relative (A1) changes based on position, Absolute ($A$1) remains fixed, and Mixed ($A1 or A$1) locks either the column or the row. Mastery is crucial for creating scalable formulas.',
    useCases: [
      'Dragging a formula down a column to calculate totals for each row (Relative).',
      'Using a single, fixed tax rate cell in multiple calculations across a worksheet (Absolute).',
      'Creating a multiplication table where row and column headers must be referenced correctly (Mixed).',
      'Building dynamic financial models where key assumptions are held in fixed cells.',
    ],
    tutorial: [
        { step: 1, description: 'Scenario Setup: You have a list of sales amounts in column A. A single, fixed tax rate of 8% is in cell E1. You want to calculate the tax for each sale in column B.' },
        { step: 2, description: 'Enter Data: In A1:A3, enter 100, 150, 200. In E1, enter 8%.' },
        { step: 3, description: 'Relative Reference (Incorrect): In B1, enter the formula `=A1*E1`. The result is 8. This is correct for this row.' },
        { step: 4, description: 'The Problem: Drag the fill handle of B1 down to B3. You will see 0 or incorrect values in B2 and B3. Why? The formula in B2 becomes `=A2*E2` - it incorrectly shifted the tax rate cell down.' },
        { step: 5, description: 'Absolute Reference (Correct): Go back to B1. Change the formula to lock the reference to E1 using dollar signs. The F4 key is a shortcut to cycle through reference types.', example: '=A1*$E$1' },
        { step: 6, description: 'The Solution: Now, drag the corrected formula from B1 down to B3. The formulas will be `=A2*$E$1`, `=A3*$E$1`, etc. The reference to the sales amount changes (relative), but the tax rate is always locked to E1 (absolute).' },
    ],
    quiz: [
      {
        question: 'In a formula, which reference type would you use for a fixed commission rate that should NOT change when the formula is copied to other cells?',
        options: [ 'Relative (A1)', 'Absolute ($A$1)', 'Mixed ($A1)', 'Dynamic (A:A)' ],
        correctAnswer: 'Absolute ($A$1)',
        explanation: 'An absolute reference ($A$1) uses dollar signs to lock both the column and row, ensuring it always points to the same cell, which is perfect for a fixed constant like a tax or commission rate.',
      },
      {
        question: 'If you copy the formula =$A1 from cell B1 to cell C2, what will the formula become?',
        options: [ '=$B2', '=$A2', '=$A1', '=$B1' ],
        correctAnswer: '=$A2',
        explanation: 'The column is absolute ($A), so it does not change. The row is relative (1), so it changes as you move down one row, becoming 2. The formula becomes =$A2.',
      }
    ],
  },
  {
    id: 3,
    title: 'Named Ranges & Tables',
    definition: 'Named Ranges allow you to assign a memorable name to a cell or range, making formulas more readable (e.g., `=SUM(Sales)` instead of `=SUM(C2:C100)`). Excel Tables provide structured references that automatically expand as data is added.',
    useCases: [
        "Using a named range like 'TaxRate' throughout a workbook for clarity and easy updates.",
        "Creating an Excel Table so that PivotTables and charts based on it update automatically when new rows are added.",
        "Simplifying complex formulas by using descriptive names instead of cell coordinates.",
        "Using structured references like `Table1[Sales]` to create robust and readable formulas."
    ],
    tutorial: [
        { step: 1, description: 'Setup: Create a small dataset with headers "Product" and "Sales" in A1:B4.' },
        { step: 2, description: 'Create Table: Select your data range (A1:B4). On the Insert tab, click "Table". A dialog box appears; ensure "My table has headers" is checked and click OK.' },
        { step: 3, description: 'Name the Table: Click anywhere in your new table. A "Table Design" tab appears. In the top-left, you can change the "Table Name" from "Table1" to something descriptive, like "SalesData".'},
        { step: 4, description: 'Use Structured Reference: Below your table, type `=SUM(`. Now, with your mouse, click the top of the "Sales" column header. Excel automatically inserts the structured reference for you.', example: '=SUM(SalesData[Sales])' },
        { step: 5, description: 'Test Dynamic Range: Add a new row of data to your table. Notice the formula result updates automatically without you having to change the formula range. This is the power of Tables.' },
    ],
    quiz: [
      {
          question: 'What is a key benefit of using an Excel Table?',
          options: ['It changes the font color.', 'Formulas and charts based on it automatically update when new data is added.', 'It locks the worksheet from editing.', 'It sorts the data permanently.'],
          correctAnswer: 'Formulas and charts based on it automatically update when new data is added.',
          explanation: 'Excel Tables are dynamic. When you add new rows or columns, the table range expands, and any dependent formulas, PivotTables, or charts will automatically include the new data upon refresh.'
      },
      {
        question: "How do you refer to the 'Sales' column in a table named 'SalesData'?",
        options: [ 'SalesData(Sales)', 'SalesData!Sales', 'SalesData[Sales]', 'SalesData.Sales' ],
        correctAnswer: 'SalesData[Sales]',
        explanation: 'Excel Tables use structured references, where the table name is followed by the column name in square brackets, like `TableName[ColumnName]`.',
      }
    ]
  },
  // Section 2: Data Analysis & Cleaning
  {
    id: 4,
    title: 'Data Analysis Basics',
    definition: 'The process of inspecting, cleaning, transforming, and modeling data with the goal of discovering useful information and supporting decision-making. In Excel, this starts with using tools like sorting and filtering to understand a dataset.',
    useCases: [
      'Identifying top-selling products by sorting sales data from highest to lowest.',
      'Focusing on a specific region\'s performance by filtering a master sales report.',
      'Understanding data quality by quickly spotting outliers or blanks after sorting.',
      'Answering simple business questions, like "Who are our top 10 customers by sales?"',
    ],
    tutorial: [
        { step: 1, description: 'Setup: Create a table with headers: "Product", "Region", "Sales", and "Date". Populate with a dozen rows of sample data.' },
        { step: 2, description: 'Multi-Level Sort: Click in your data. Go to the Data tab and click the large "Sort" button. In the dialog, sort by "Region" (A to Z). Click "Add Level" and then sort by "Sales" (Largest to Smallest).'},
        { step: 3, description: 'Observe: This organizes the data by region, and *within* each region, it shows the top sales first. This is a more granular view than a single sort.'},
        { step: 4, description: 'Apply Number Filter: Go to the Data tab and click "Filter". Click the arrow on the "Sales" header, go to "Number Filters", and select "Top 10...".'},
        { step: 5, description: 'Find Top Performers: The default is "Top 10 Items". Click OK. The data is now filtered to show only the overall top 10 sales across all regions, a very common business request.' },
    ],
    quiz: [
      {
          question: 'What is the primary goal of sorting and filtering data in the initial phase of analysis?',
          options: ["To make the data look visually appealing.", "To identify patterns, outliers, and subsets of data for further investigation.", "To permanently delete irrelevant data.", "To create complex charts."],
          correctAnswer: "To identify patterns, outliers, and subsets of data for further investigation.",
          explanation: 'Sorting and filtering are fundamental first steps that help you organize and explore your data, making it easier to spot trends and focus on the information that matters most for your analysis.'
      },
      {
        question: 'After applying a filter, what happens to the rows that do not meet the criteria?',
        options: ["They are deleted.", "They are hidden.", "They are moved to a new sheet.", "Their font color changes."],
        correctAnswer: "They are hidden.",
        explanation: 'Filtering is non-destructive. It temporarily hides the rows you don\'t want to see, allowing you to focus on a subset of your data without losing any information.'
      }
    ]
  },
  {
    id: 5,
    title: 'Data Cleaning: Text Functions',
    definition: 'A powerful suite of functions for manipulating text strings, essential for cleaning and standardizing inconsistent data. Key functions include TRIM (removes extra spaces), LEFT/RIGHT/MID (extract characters), CONCAT/& (join text), LEN (counts characters), and SUBSTITUTE (replaces text).',
    useCases: [
      'Using TRIM to remove accidental leading/trailing spaces from data entry.',
      'Using LEFT, RIGHT, and MID to parse components from a complex ID string (e.g., "REG-PROD123-2024").',
      'Using CONCAT or "&" to create a unique ID by combining a first name and a last name.',
      'Using SUBSTITUTE to replace outdated product codes with new ones across a dataset.',
      'Using LEN to check if a product ID has the correct number of characters.',
    ],
    tutorial: [
        { step: 1, description: 'Scenario: In cell A2, you have a messy full name: `"  jane DOE  "`. In B2, you have a city and state: `"New York,NY"`. Your goal is to create a clean email address like `"jdoe@example.com"`.'},
        { step: 2, description: 'Clean the Name: First, use TRIM to remove spaces and LOWER to standardize the case.', example: '=LOWER(TRIM(A2))' },
        { step: 3, description: 'Extract First Initial: Use the LEFT function on your cleaned name to get the first letter.', example: '=LEFT(LOWER(TRIM(A2)), 1)' },
        { step: 4, description: 'Extract Last Name: This is tricky. Use RIGHT, LEN, and FIND to get the text after the space.', example: '=RIGHT(LOWER(TRIM(A2)), LEN(LOWER(TRIM(A2))) - FIND(" ", LOWER(TRIM(A2))))' },
        { step: 5, description: 'Combine Everything: Now join the parts together with the `&` operator to form the final email address.', example: '=LEFT(LOWER(TRIM(A2)), 1) & RIGHT(LOWER(TRIM(A2)), LEN(LOWER(TRIM(A2))) - FIND(" ", LOWER(TRIM(A2)))) & "@example.com"' },
        { step: 6, description: 'Result: The formula combines multiple text functions to perform a realistic data cleaning task, resulting in "jdoe@example.com".' }
    ],
    quiz: [
      {
        question: 'Which function would you use to extract the middle part of a product code like "PROD-12345-US"?',
        options: [ 'LEFT', 'RIGHT', 'TRIM', 'MID' ],
        correctAnswer: 'MID',
        explanation: 'The MID function is designed to extract a specific number of characters from the middle of a text string, starting at a position you specify.',
      },
      {
        question: 'A cell contains the text "  New York  ". Which function would return "New York"?',
        options: [ 'CLEAN', 'SUBSTITUTE', 'TRIM', 'PROPER' ],
        correctAnswer: 'TRIM',
        explanation: 'The TRIM function is specifically designed to remove all leading and trailing spaces from a text string.',
      }
    ],
  },
  {
    id: 6,
    title: 'Data Validation',
    definition: 'A feature used to control what a user can enter into a cell. It helps maintain data integrity by restricting entries to a specific data type, range, or a predefined list from a drop-down menu.',
    useCases: [
      'Creating a drop-down list of choices (e.g., "High", "Medium", "Low") to prevent typos.',
      'Restricting a cell to only accept whole numbers between 1 and 100.',
      'Ensuring that a date entered into a cell is a future date.',
      'Preventing duplicate entries in a column of unique IDs by using a custom formula.',
    ],
    tutorial: [
        { step: 1, description: 'Goal: In column B, create a "Status" field where users can only choose from a predefined list.' },
        { step: 2, description: 'Create Source List: In an out-of-the-way place, like column Z, type your options: "Not Started", "In Progress", "Completed".' },
        { step: 3, description: 'Select Cells: Select the cells you want to apply the rule to (e.g., B2:B10).' },
        { step: 4, description: 'Open Menu: Go to the Data tab > Data Validation.' },
        { step: 5, description: 'Set Criteria: In the dialog box, under "Allow:", choose "List". In the "Source:" box, select your list from column Z (e.g., `=$Z$1:$Z$3`).' },
        { step: 6, description: 'Improve UX: Click the "Error Alert" tab. Change the style to "Stop" and write a helpful message, like "Invalid status. Please select an option from the list." This provides clear feedback to the user.' },
        { step: 7, description: 'Result: Column B now has drop-down menus, and if a user tries to type a different value, they will get your custom error message.' },
    ],
    quiz: [
      {
        question: 'How would you ensure users can only select from a predefined list of departments ("Sales", "HR", "IT") in a cell?',
        options: [ 'Conditional Formatting', 'Data Validation', 'A PivotTable filter', 'An IF formula' ],
        correctAnswer: 'Data Validation',
        explanation: 'Data Validation is the perfect tool for creating drop-down lists. You can set the "Allow" criteria to "List" and provide the department names as the source to ensure data consistency.',
      },
      {
        question: 'What is the primary benefit of using Data Validation?',
        options: [ 'It makes cells look colorful.', 'It improves data integrity and accuracy.', 'It automatically calculates totals.', 'It sorts data alphabetically.' ],
        correctAnswer: 'It improves data integrity and accuracy.',
        explanation: 'By controlling what users can enter, Data Validation minimizes typos and ensures that the data in your worksheet is consistent and reliable.',
      }
    ],
  },
   {
    id: 7,
    title: 'Handling Errors (IFERROR)',
    definition: 'A function that traps and handles errors in formulas. Instead of showing an ugly error like #N/A or #DIV/0!, IFERROR lets you return a custom, more user-friendly result, such as 0, a blank cell, or a text message.',
    useCases: [
      "Wrapping a VLOOKUP to return 'Not Found' instead of #N/A if a value doesn't exist.",
      'Preventing #DIV/0! errors in a calculation by returning 0 if the denominator is zero.',
      "Cleaning up reports to look more professional by replacing all potential error messages with blanks.",
    ],
    tutorial: [
        { step: 1, description: 'Scenario: You are using a VLOOKUP to pull in prices for a list of Product IDs. Some IDs in your list might not exist in the master price table, causing #N/A errors.' },
        { step: 2, description: 'Standard VLOOKUP: You write your normal VLOOKUP formula.', example: '=VLOOKUP(A2, PriceTable, 2, FALSE)' },
        { step: 3, description: 'The Problem: If the ID in A2 is not found in the `PriceTable`, the formula returns a jarring #N/A error.' },
        { step: 4, description: 'Wrap with IFERROR: Edit the formula by wrapping the entire VLOOKUP function inside IFERROR. The first argument is your original formula. The second argument is what you want to show if an error occurs.' },
        { step: 5, description: 'The Solution: You can return a more meaningful result like a 0, a blank (`""`), or a descriptive text string.', example: '=IFERROR(VLOOKUP(A2, PriceTable, 2, FALSE), "Product Not Found")' },
        { step: 6, description: 'Result: Your report now looks much cleaner. Instead of errors, you have a clear message indicating which products could not be found.' },
    ],
    quiz: [
      {
        question: 'You are using a VLOOKUP that sometimes results in an #N/A error. How can you display the text "Missing" instead?',
        options: [ 'Use the IF function.', 'Use Conditional Formatting.', 'Wrap the VLOOKUP in an IFERROR function.', 'Use the ISERROR function alone.' ],
        correctAnswer: 'Wrap the VLOOKUP in an IFERROR function.',
        explanation: 'IFERROR is the standard way to handle this. The formula would be `=IFERROR(VLOOKUP(...), "Missing")`, which tries the VLOOKUP and returns "Missing" if it fails.',
      },
      {
        question: 'What does the formula =IFERROR(10/0, 0) return?',
        options: [ '#DIV/0!', '10', '0', 'FALSE' ],
        correctAnswer: '0',
        explanation: 'The first part of the formula (10/0) results in a #DIV/0! error. IFERROR catches this error and returns the second argument, which is 0.',
      }
    ],
  },
  // Section 3: Logical & Lookup Functions
  {
    id: 8,
    title: 'Logical Functions (IF, AND, OR)',
    definition: 'Functions that perform logical tests. IF returns one value if a condition is true and another if false. AND checks if all conditions are true, while OR checks if any condition is true. They are often nested together.',
    useCases: [
      'Using IF to assign "Pass" or "Fail" status based on an exam score.',
      'Calculating a bonus only for employees who are in the "Sales" department AND have sales over $50,000.',
      'Marking an order for review if the order amount is over $1000 OR the customer is new.',
      'Creating complex business rules by nesting multiple IF, AND, and OR functions.',
    ],
    tutorial: [
        { step: 1, description: 'Scenario: You want to assign a priority to tasks. A task is "High Priority" if its Status (Col A) is "Overdue" OR its Impact (Col B) is "High".' },
        { step: 2, description: 'Setup: In A2, enter "In Progress". In B2, enter "High".' },
        { step: 3, description: 'Build the OR condition: First, test if either condition is met.', example: '=OR(A2="Overdue", B2="High")' },
        { step: 4, description: 'Nest inside IF: Place the OR function as the logical test inside an IF function. If the OR is true, return "High Priority"; otherwise, return "Normal Priority".' },
        { step: 5, description: 'Final Formula: The complete formula in C2 would be:', example: '=IF(OR(A2="Overdue", B2="High"), "High Priority", "Normal Priority")' },
        { step: 6, description: 'Result: Since the impact is "High", the formula returns "High Priority", even though the status is not "Overdue".' }
    ],
    quiz: [
      {
        question: 'Which formula correctly identifies a transaction for review if it is either from the "International" region OR has a value greater than $10,000?',
        options: [ '=IF(AND(A1="International", B1>10000), "Review", "")', '=IF(OR(A1="International", B1>10000), "Review", "")', '=IF(A1="International", "Review", "")', '=IF(B1>10000, "Review", "")' ],
        correctAnswer: '=IF(OR(A1="International", B1>10000), "Review", "")',
        explanation: 'The OR function is the correct choice because the condition is met if EITHER of the logical tests is true, not necessarily both.',
      },
      {
        question: 'What is the result of the formula =IF(5 > 10, "Yes", "No")?',
        options: [ 'Yes', 'No', '5', '10' ],
        correctAnswer: 'No',
        explanation: 'The logical test (5 > 10) is FALSE. Therefore, the IF function returns the third argument, which is "No".',
      }
    ],
  },
  {
    id: 9,
    title: 'Aggregate Functions (SUMIFS, COUNTIFS)',
    definition: 'Powerful functions that sum or count values based on multiple criteria. SUMIFS sums cells that meet several conditions, while COUNTIFS counts cells that meet several conditions. They are essential for multi-layered data analysis.',
    useCases: [
      "Calculating total sales for a specific product in a specific region.",
      "Counting the number of employees in the 'HR' department who have 'Manager' as their title.",
      "Summing the revenue from transactions that occurred after a certain date and are above a certain value.",
      "Analyzing survey data to count respondents who are in a specific age group and gave a specific answer."
    ],
    tutorial: [
        { step: 1, description: "Setup: Create a table with Region (Col A), Product (Col B), Date (Col C), and Sales (Col D)." },
        { step: 2, description: "Goal: Count how many sales of 'Product A' occurred in the 'North' region after January 1st, 2023." },
        { step: 3, description: "Use COUNTIFS: Since we are counting based on multiple criteria, we use COUNTIFS. Each condition is a pair of arguments: a criteria range and the criteria for that range." },
        { step: 4, description: "Build the Formula:", example: "=COUNTIFS(A2:A100, \"North\", B2:B100, \"Product A\", C2:C100, \">\" & DATE(2023,1,1))" },
        { step: 5, description: "Breakdown: The formula checks for \"North\" in the Region column, \"Product A\" in the Product column, AND a date greater than Jan 1, 2023 in the Date column. Note how the date criteria is constructed." },
        { step: 6, description: "Result: The function returns the total number of rows that satisfy all three conditions simultaneously." }
    ],
    quiz: [
      {
          question: "To find the number of sales transactions in 'Q4' that were over '$500', which function should you use?",
          options: ["SUMIF", "COUNT", "IF", "COUNTIFS"],
          correctAnswer: "COUNTIFS",
          explanation: "COUNTIFS is required because you are applying two separate criteria: the quarter must be 'Q4', and the sales amount must be greater than 500."
      },
      {
        question: "In a SUMIFS function, what is the first argument you must provide?",
        options: ["The criteria", "The criteria range", "The sum range", "The logical test"],
        correctAnswer: "The sum range",
        explanation: "Unlike SUMIF, the SUMIFS function requires you to specify the range to be summed (the sum_range) as the very first argument."
      }
    ]
  },
  {
    id: 10,
    title: 'Lookup: VLOOKUP',
    definition: 'The classic Vertical Lookup function. It searches for a value in the first column of a table and returns a corresponding value from a specified column in the same row. It is widely used but has limitations.',
    useCases: [
      'Finding the price of a product by looking up its product code in a master price list.',
      'Enriching a sales report with employee details by matching an Employee ID.',
      'Merging customer information from two different sheets using a unique customer ID.',
    ],
    tutorial: [
        { step: 1, description: 'Setup: In a sheet named "PriceList", create a table in A1:B10 with Product IDs (Col A) and Prices (Col B). This is your lookup table.'},
        { step: 2, description: 'Goal: On your main "Sales" sheet, you have a Product ID in cell A2. You want to pull its price into cell B2.' },
        { step: 3, description: 'VLOOKUP Formula: In cell B2 on the "Sales" sheet, start typing the formula.', example: '=VLOOKUP(A2, PriceList!A1:B10, 2, FALSE)' },
        { step: 4, description: 'Breakdown: `A2` is what you\'re looking for. `PriceList!A1:B10` is where to look (use absolute references `$A$1:$B$10` if copying). `2` means return the value from the 2nd column of that table. `FALSE` is crucial - it forces an EXACT match.' },
        { step: 5, description: 'Common Mistake: Forgetting `FALSE` can lead to incorrect results if your data isn\'t sorted. For most data analysis, you always want an exact match.' },
    ],
    quiz: [
      {
        question: 'What is a major limitation of the VLOOKUP function?',
        options: [ 'It cannot work with numbers.', 'It can only search for a value in the leftmost column of the lookup table.', 'It is slow.', 'It does not support exact matches.' ],
        correctAnswer: 'It can only search for a value in the leftmost column of the lookup table.',
        explanation: 'VLOOKUP requires the lookup value to be in the first column of your table array, and it can only return values from columns to the right. This is its biggest weakness.',
      },
      {
        question: "In the formula `=VLOOKUP(A1, B1:D10, 3, FALSE)`, what does the number '3' represent?",
        options: [ "The value to look for.", "The number of rows to search.", "The column index number to return a value from.", "The number of matches to find." ],
        correctAnswer: "The column index number to return a value from.",
        explanation: "The third argument, `col_index_num`, specifies the column within the table array (B1:D10) from which to return a value. In this case, it's the 3rd column, which is column D."
      }
    ],
  },
  {
    id: 11,
    title: 'Lookup: INDEX + MATCH',
    definition: 'A powerful and flexible two-function combo for advanced lookups. MATCH finds the position (row number) of a value, and INDEX returns the value at that position. It overcomes the limitations of VLOOKUP.',
    useCases: [
      'Looking up a value in a column to the *left* of the lookup column (impossible with VLOOKUP).',
      'Creating robust lookups that do not break if a new column is inserted into the table.',
      'Performing two-way (matrix) lookups by matching both a row and a column criteria.',
      'Finding the sales amount for a specific product sold in a specific month from a large grid.',
    ],
    tutorial: [
        { step: 1, description: 'Scenario: You have a table with Employee Name (Col A) and their Employee ID (Col B). You are given an ID and need to find the corresponding Name (a right-to-left lookup).' },
        { step: 2, description: 'Setup: In E1, enter an Employee ID to search for.'},
        { step: 3, description: 'MATCH part: First, find the row number where the ID exists. The `0` ensures an exact match.', example: '=MATCH(E1, B1:B100, 0)' },
        { step: 4, description: 'INDEX part: Next, use INDEX to retrieve a value from the Name column (A1:A100) at the row number you just found.' },
        { step: 5, description: 'Combine them: Replace the row number in the INDEX function with your entire MATCH function. This creates a single, dynamic formula.', example: '=INDEX(A1:A100, MATCH(E1, B1:B100, 0))' },
        { step: 6, description: 'Benefit: This formula is superior to VLOOKUP because the lookup and return columns are independent. You could insert a new column C and the formula would not break.' },
    ],
    quiz: [
      {
        question: 'What is a key advantage of using INDEX + MATCH over VLOOKUP?',
        options: [ 'It is simpler to write.', 'It can perform lookups from right-to-left.', 'It only works with numbers.', 'It automatically sorts the data.' ],
        correctAnswer: 'It can perform lookups from right-to-left.',
        explanation: 'Unlike VLOOKUP, INDEX + MATCH is not restricted to searching in the leftmost column. It can look up a value in any column and return a value from any other column, making it far more flexible.',
      },
      {
        question: 'What does the MATCH function return?',
        options: [ 'The value from a cell.', 'The relative position (row or column number) of an item in a range.', 'A TRUE or FALSE value.', 'The sum of a range.' ],
        correctAnswer: 'The relative position (row or column number) of an item in a range.',
        explanation: 'MATCH is used to find the location of a lookup value within a range. It returns a number representing this position, which is then typically fed into the INDEX function.'
      }
    ],
  },
  {
    id: 12,
    title: 'Lookup: XLOOKUP',
    definition: 'The modern successor to VLOOKUP and INDEX+MATCH. XLOOKUP is designed to be easier, more flexible, and more robust. It requires fewer arguments and has built-in features like error handling.',
    useCases: [
        'Replacing all VLOOKUP and most INDEX+MATCH formulas with a simpler, more powerful function.',
        'Performing lookups that can return values from the left or right of the lookup column.',
        'Finding the last occurrence of an item in a list by searching from the bottom up.',
        'Returning a default value like "Not Found" without needing an IFERROR wrapper.'
    ],
    tutorial: [
        { step: 1, description: 'Scenario: Same as INDEX+MATCH - you have Name (Col A), ID (Col B). You are given an ID in E1 and need to find the Name.' },
        { step: 2, description: 'XLOOKUP Formula: The syntax is much more intuitive.' },
        { step: 3, description: 'Arguments: 1. Lookup_value (E1). 2. Lookup_array (the ID column, B:B). 3. Return_array (the Name column, A:A). 4. [If_not_found] (optional, e.g., "ID not found").' },
        { step: 4, description: 'Complete Formula:', example: '=XLOOKUP(E1, B:B, A:A, "ID not found")' },
        { step: 5, description: 'Result: The formula is easier to read, write, and audit than INDEX+MATCH. It handles errors gracefully and is not affected by inserting new columns.' },
    ],
    quiz: [
      {
          question: 'Which of the following is a built-in feature of XLOOKUP that is not present in VLOOKUP?',
          options: ['Ability to perform a lookup.', 'A required column index number.', 'A built-in argument for what to return if the value is not found.', 'It can only find approximate matches.'],
          correctAnswer: 'A built-in argument for what to return if the value is not found.',
          explanation: 'XLOOKUP includes an optional `[if_not_found]` argument, which simplifies formulas by eliminating the need to wrap them in an IFERROR function, a common practice with VLOOKUP.'
      },
      {
        question: 'How does XLOOKUP differ from VLOOKUP in how you specify the return data?',
        options: ['You specify a column index number.', 'You specify a return array (a single column or row).', 'You specify the number of columns to the right.', 'It can only return data from the adjacent column.'],
        correctAnswer: 'You specify a return array (a single column or row).',
        explanation: 'Instead of a column index number, XLOOKUP uses a `return_array`, which is more robust because the formula won\'t break if you insert or delete columns in your source table.'
      }
    ]
  },
  // Section 4: Data Analysis Tools
  {
    id: 13,
    title: 'Sorting & Filtering',
    definition: 'Fundamental tools for organizing and narrowing down data. Sorting arranges data in a specific order (A-Z, largest to smallest), while Filtering temporarily hides rows that do not meet specified criteria.',
    useCases: [
      'Sorting a customer list alphabetically by last name.',
      'Filtering a sales table to show only the transactions from the last quarter.',
      'Performing a multi-level sort to organize data by Region, then by Sales Rep.',
      'Using advanced filters to extract a unique list of records or filter based on complex formula criteria.',
    ],
    tutorial: [
        { step: 1, description: 'Setup: Create a table with columns for "Region", "Sales Rep", and "Sales".' },
        { step: 2, description: 'Enable Filter: Click anywhere in your data. Go to the Data tab and click "Filter". Drop-down arrows will appear in your headers.' },
        { step: 3, description: 'Filter by Text: Click the drop-down arrow in the "Region" header. Uncheck "Select All" and then check only "North". Click OK.' },
        { step: 4, description: 'Filter by Number: Now, click the drop-down for "Sales". Go to "Number Filters" and select "Greater Than...". Enter a value like 5000.' },
        { step: 5, description: 'Result: Your table is now filtered twice, showing only sales from the "North" region that are also over 5000. This layered filtering is a core analysis technique.' },
    ],
    quiz: [
      {
        question: 'You want to see only the sales records from the "West" region that have a value over $500. What should you do?',
        options: [ 'Sort by Region.', 'Use a Filter for "West" on the Region column, then a Number Filter for ">500" on the Sales column.', 'Create a PivotTable.', 'Use Conditional Formatting.' ],
        correctAnswer: 'Use a Filter for "West" on the Region column, then a Number Filter for ">500" on the Sales column.',
        explanation: 'This requires applying two separate filters to your data: a text filter for the region and a number filter for the sales amount. This will narrow down the data to only the rows that meet both criteria.',
      },
      {
        question: 'What is a "multi-level sort"?',
        options: [ 'Sorting data on multiple sheets at once.', 'Sorting by one column, then sorting by another column within that first sort.', 'Sorting both numbers and text.', 'A sort that cannot be undone.' ],
        correctAnswer: 'Sorting by one column, then sorting by another column within that first sort.',
        explanation: 'A multi-level sort allows you to define a primary sort order (e.g., by Department) and then a secondary sort order (e.g., by Last Name) to organize data more granularly.'
      }
    ],
  },
  {
    id: 14,
    title: 'Conditional Formatting',
    definition: 'A feature that automatically applies formatting—such as colors, icons, and data bars—to cells based on their values or a formula. It makes data easier to visualize and analyze at a glance.',
    useCases: [
      'Highlighting all sales figures above a certain target in green.',
      'Using color scales to quickly identify the highest and lowest values in a range of data.',
      'Marking projects that are past their due date in red using a formula-based rule.',
      'Identifying duplicate entries in a column to assist in data cleaning.',
    ],
    tutorial: [
        { step: 1, description: 'Scenario: You want to highlight the entire row of a project if its status in Column C is "Overdue".' },
        { step: 2, description: 'Select Data: Highlight the entire range of your data table, starting from the first row of data (e.g., A2:E100).' },
        { step: 3, description: 'Open Menu: Go to the Home tab > Conditional Formatting > New Rule.' },
        { step: 4, description: 'Use a Formula: In the dialog box, select "Use a formula to determine which cells to format".' },
        { step: 5, description: 'Enter Formula: In the formula box, you will write a formula for the top-left cell of your selection (A2). Use a mixed reference to lock the column.', example: '=$C2="Overdue"' },
        { step: 6, description: 'Breakdown: The `$` locks column C, so as Excel evaluates each cell in your selection, it will always check the value in column C for that row. The row number `2` is relative, so it adjusts for each row.' },
        { step: 7, description: 'Set Format: Click the "Format..." button and choose a red fill color. Click OK twice. The specified rows will now be highlighted.' },
    ],
    quiz: [
      {
        question: 'Which Excel feature would you use to automatically color-code all negative numbers in a financial report?',
        options: [ 'Cell Styles', 'Format Painter', 'PivotTables', 'Conditional Formatting' ],
        correctAnswer: 'Conditional Formatting',
        explanation: 'Conditional Formatting is specifically designed to apply formatting rules to cells that meet certain criteria, such as being less than zero (negative).',
      },
      {
        question: 'What are "Data Bars" in Conditional Formatting?',
        options: [ 'A type of chart.', 'Horizontal bars placed inside cells that represent their value relative to other cells.', 'A tool to clean data.', 'A way to validate data entry.' ],
        correctAnswer: 'Horizontal bars placed inside cells that represent their value relative to other cells.',
        explanation: 'Data Bars provide a quick visual way to compare values in a range. Longer bars represent higher values, making it easy to spot high and low performers at a glance.'
      }
    ],
  },
  {
    id: 15,
    title: 'PivotTables',
    definition: 'An interactive tool to calculate, summarize, and analyze data that lets you see comparisons, patterns, and trends. They are highly flexible and can be quickly adjusted with a drag-and-drop interface, forming the cornerstone of Excel analysis.',
    useCases: [
      'Summarizing sales data by region and quarter to identify top-performing areas.',
      'Analyzing survey results by grouping responses by demographic categories.',
      'Creating a dynamic report of project expenses, categorized by task and team member.',
      'Using Slicers and Timelines to create interactive dashboards.',
    ],
    tutorial: [
        { step: 1, description: 'Setup: Have a table of raw data with headers like "Date", "Region", "Category", and "Sales". Ensure it\'s formatted as an Excel Table for best results.' },
        { step: 2, description: 'Create PivotTable: Click inside your data. Go to Insert tab > PivotTable. Click OK.' },
        { step: 3, description: 'Build Initial Report: From the "PivotTable Fields" pane, drag "Region" to Rows, "Category" to Columns, and "Sales" to Values.' },
        { step: 4, description: 'Group Dates: Drag the "Date" field into the Rows area. Right-click any date in the PivotTable, select "Group...", and choose "Months" and "Years". Now you have a drill-down summary.' },
        { step: 5, description: 'Change Calculation: By default, you have "Sum of Sales". Right-click a value, go to "Summarize Values By", and choose "Average" to see the average sale size instead.' },
        { step: 6, description: 'Add a Slicer for Interactivity: Click in the PivotTable. Go to the "PivotTable Analyze" tab > "Insert Slicer". Check the box for "Region". Now you have a user-friendly button panel to filter your entire report.' },
    ],
    quiz: [
      {
        question: 'What is the primary function of a PivotTable?',
        options: [ 'To create visually appealing charts.', 'To write complex formulas.', 'To summarize and analyze large datasets.', 'To format cells with different colors.' ],
        correctAnswer: 'To summarize and analyze large datasets.',
        explanation: 'PivotTables are designed specifically to help you quickly summarize, group, and analyze large amounts of data to uncover insights and trends.',
      },
      {
        question: 'In a PivotTable, which area would you place a "Sales Amount" field in to calculate its total?',
        options: [ 'Filters', 'Columns', 'Rows', 'Values' ],
        correctAnswer: 'Values',
        explanation: 'The "Values" area is used for fields that you want to perform a calculation on, such as Sum, Count, or Average. It is the numerical core of the PivotTable.'
      }
    ],
  },
  {
    id: 16,
    title: 'Pivot Charts',
    definition: 'A Pivot Chart is a visual representation of the data in a PivotTable. It provides an interactive graphical summary of the data, allowing you to quickly see comparisons, patterns, and trends. Any change made to the PivotTable (like filtering or rearranging fields) is instantly reflected in the Pivot Chart, and vice versa.',
    useCases: [
        'Creating an interactive dashboard where users can filter by region or product to see the chart update instantly.',
        'Visualizing summarized sales data from a PivotTable to quickly compare performance across different categories.',
        'Presenting high-level trends from a large dataset to stakeholders in a clear, graphical format.',
        'Dynamically changing the chart view from a column chart to a line chart to analyze different aspects of the summarized data.',
    ],
    tutorial: [
        { step: 1, description: 'Prerequisite: Start with an existing PivotTable. For this example, assume you have a PivotTable with "Region" in Rows and "Sum of Sales" in Values.' },
        { step: 2, description: 'Create the Chart: Click anywhere inside your PivotTable. Go to the "PivotTable Analyze" tab on the Ribbon.' },
        { step: 3, description: 'Select Chart Type: In the "Tools" group, click "PivotChart". An "Insert Chart" dialog box will appear. Choose a chart type, like a "Clustered Column" chart, and click OK.' },
        { step: 4, description: 'Interact with the Chart: Your Pivot Chart is now created. Notice the interactive field buttons directly on the chart (e.g., "Region"). You can use these to filter the data directly from the chart, and both the chart and the PivotTable will update.' },
        { step: 5, description: 'Add a Slicer for Better Interaction: Click on your Pivot Chart. On the "PivotTable Analyze" tab, click "Insert Slicer". Choose a field like "Category". Now you have a slicer that filters both your PivotTable and your Pivot Chart, creating a simple dashboard.' },
        { step: 6, description: 'Customize Appearance: You can format a Pivot Chart just like a regular chart. Use the "Design" and "Format" tabs that appear when the chart is selected to change colors, add titles, and adjust data labels.' },
    ],
    quiz: [
        {
            question: 'What is the relationship between a PivotTable and a Pivot Chart?',
            options: ['They are independent of each other.', 'The Pivot Chart is a static image of the PivotTable.', 'They are directly linked; filtering one automatically filters the other.', 'A Pivot Chart can only be a pie chart.'],
            correctAnswer: 'They are directly linked; filtering one automatically filters the other.',
            explanation: 'Pivot Charts and their associated PivotTables are intrinsically linked. Any filtering, sorting, or structural change in one is immediately reflected in the other, making them a powerful duo for interactive analysis.'
        },
        {
            question: 'How do you create a Pivot Chart?',
            options: ['From the "Insert" tab, choosing a standard chart.', 'By clicking inside a PivotTable and selecting "PivotChart" from the "PivotTable Analyze" tab.', 'By copying and pasting a PivotTable as a picture.', 'By writing a VBA macro.'],
            correctAnswer: 'By clicking inside a PivotTable and selecting "PivotChart" from the "PivotTable Analyze" tab.',
            explanation: "The correct and most direct way to create a Pivot Chart is from an existing PivotTable using the dedicated 'PivotChart' button on the 'PivotTable Analyze' ribbon tab."
        }
    ]
  },
  {
    id: 17,
    title: 'Charts & Visualization',
    definition: 'Graphical representations of data that make it easier to understand trends, patterns, and outliers. Choosing the right chart type is a key skill for a data analyst.',
    useCases: [
      'Using a Line Chart to show sales trends over several months.',
      'Using a Bar Chart to compare the performance of different, discrete categories.',
      'Using a Pie Chart to show the percentage contribution of each region to a whole.',
      'Using a Scatter Plot to identify the relationship between two numeric variables.',
    ],
    tutorial: [
        { step: 1, description: 'Setup: In column A, list months (Jan, Feb, Mar...). In column B, list "Sales Target". In column C, list "Actual Sales".' },
        { step: 2, description: 'Select Data: Highlight all your data, including the headers.' },
        { step: 3, description: 'Insert Combo Chart: Go to Insert > Recommended Charts > All Charts > Combo.' },
        { step: 4, description: 'Configure Chart: For the "Actual Sales" series, choose a "Clustered Column" chart type. For the "Sales Target" series, choose a "Line" chart type. Click OK.' },
        { step: 5, description: 'Result: You now have a "Combo Chart" that visually compares actual performance (bars) against a target (line) for each month. This is a very common and effective business chart.' },
        { step: 6, description: 'Customize: Click on the chart. Use the "+" icon to add elements like a "Chart Title" and "Data Labels" to make your chart clearer and more professional.' },
    ],
    quiz: [
      {
        question: 'Which chart type is best suited for showing a trend in a data series over time?',
        options: [ 'Pie Chart', 'Bar Chart', 'Line Chart', 'Scatter Plot' ],
        correctAnswer: 'Line Chart',
        explanation: 'A Line Chart is ideal for visualizing data points over a continuous interval or time period, clearly illustrating trends, increases, and decreases.',
      },
      {
        question: 'To compare sales figures between five distinct product categories, which chart is most appropriate?',
        options: [ 'Line Chart', 'Bar Chart', 'Pie Chart', 'Scatter Plot' ],
        correctAnswer: 'Bar Chart',
        explanation: 'A Bar Chart (or Column Chart) is perfect for comparing values across discrete categories, as each category gets its own bar, making direct comparison easy.'
      }
    ],
  },
  {
    id: 18,
    title: 'What-If Analysis (Goal Seek)',
    definition: 'A set of tools that allows you to use the results you want from a formula to find the possible input values required to achieve them. Goal Seek is the most common, used for solving for a single variable.',
    useCases: [
        "Determining how many units you need to sell to reach a specific profit target.",
        "Calculating the required final exam score needed to achieve a 'Pass' grade for a course.",
        "Figuring out the interest rate needed on a loan to have a specific monthly payment."
    ],
    tutorial: [
        { step: 1, description: 'Scenario: You are planning a project with costs and revenue. You want to find out the minimum number of units you need to sell to break even (i.e., make a profit of $0).'},
        { step: 2, description: 'Setup: A1: "Units Sold" (value: 100). A2: "Price/Unit" (value: $10). A3: "Fixed Costs" (value: $500). A4: "Profit" (formula: `=(A1*A2)-A3`). This currently shows a profit of $500.'},
        { step: 3, description: 'Open Goal Seek: Go to Data tab > What-If Analysis > Goal Seek.' },
        { step: 4, description: 'Set Parameters: In the dialog box: "Set cell:" should be your profit cell (A4). "To value:" should be 0 (your break-even goal). "By changing cell:" should be your input cell (A1, Units Sold).'},
        { step: 5, description: 'Execute: Click OK. Excel will rapidly test different values in A1 until the formula in A4 results in 0.' },
        { step: 6, description: 'Result: Goal Seek will find a solution and update cell A1 to 50. This tells you that you need to sell 50 units to cover your fixed costs.' },
    ],
    quiz: [
      {
          question: 'You have a financial model where profit is calculated based on revenue and expenses. Which tool would you use to find out exactly how much revenue you need to achieve a $1,000,000 profit?',
          options: ['PivotTable', 'Conditional Formatting', 'Goal Seek', 'Data Validation'],
          correctAnswer: 'Goal Seek',
          explanation: 'Goal Seek is perfect for this "reverse" calculation. It allows you to set the target value for a formula cell (profit) and tells you what an input cell (revenue) needs to be to achieve that target.'
      },
      {
        question: "Goal Seek works by changing the value in one cell to achieve a specific result in another. What is the cell that is being changed called?",
        options: [ 'The set cell', 'The target cell', 'The changing cell', 'The result cell' ],
        correctAnswer: 'The changing cell',
        explanation: 'In the Goal Seek dialog, the "By changing cell" is the single input cell that Excel will adjust to find the solution.'
      }
    ]
  },
  // Section 5: Advanced Excel
  {
    id: 19,
    title: 'Dynamic Array Functions (FILTER, UNIQUE, SORT)',
    definition: "Modern functions that automatically 'spill' results into multiple cells. FILTER extracts records that meet criteria, UNIQUE returns a list of unique values, and SORT arranges a range in a specified order. These eliminate complex legacy array formulas.",
    useCases: [
        "Creating a live, filtered list of sales from a specific region that updates automatically.",
        "Generating a unique list of customer names from a long transaction log.",
        "Building a dynamic leaderboard that automatically sorts sales reps by performance.",
        "Combining UNIQUE and SORT to present a sorted list of unique products."
    ],
    tutorial: [
        { step: 1, description: "Setup: Create a table of sales data (named 'SalesData') with columns for 'Sales Rep', 'Region', and 'Sales Amount'." },
        { step: 2, description: "Goal: Create a dynamic report that shows all sales from the 'North' region, sorted from highest to lowest sales amount." },
        { step: 3, description: "FILTER Function: First, use FILTER to extract only the rows where the region is 'North'.", example: "=FILTER(SalesData, SalesData[Region]=\"North\")" },
        { step: 4, description: "SORT Function: Now, wrap the entire FILTER function inside a SORT function to order the results.", example: "=SORT(FILTER(SalesData, SalesData[Region]=\"North\"), 3, -1)" },
        { step: 5, description: "Breakdown of SORT: The first argument is the data from your FILTER. The `3` tells it to sort by the 3rd column (Sales Amount). The `-1` specifies descending order (highest to lowest)." },
        { step: 6, description: "Result: The single formula in one cell will spill out the entire filtered and sorted report. If you change a value in the source table (e.g., change a region to 'North'), this report will update instantly." }
    ],
    quiz: [
      {
          question: "You have a large table of project data. Which dynamic array function would you use to create a new table showing only the projects assigned to 'John Doe'?",
          options: ["SORT", "UNIQUE", "FILTER", "TRANSPOSE"],
          correctAnswer: "FILTER",
          explanation: "The FILTER function is designed to extract a subset of data from a range based on a logical condition, such as the project's assigned person being 'John Doe'."
      },
      {
        question: "What does it mean for a dynamic array formula to 'spill'?",
        options: [ "It returns an error.", "It automatically outputs the results into a range of adjacent cells.", "It saves the result to a new file.", "It deletes the source data." ],
        correctAnswer: "It automatically outputs the results into a range of adjacent cells.",
        explanation: "'Spilling' is the behavior where a single formula entered in one cell produces a range of results that fill, or spill into, neighboring empty cells."
      }
    ]
  },
  {
    id: 20,
    title: 'Power Query (Get & Transform)',
    definition: 'A data transformation engine that lets you connect to various data sources, clean and shape your data with a user-friendly interface, and then load it into Excel. The steps are recorded and can be refreshed.',
    useCases: [
      'Automatically combining all CSV files from a folder into one master table.',
      'Cleaning messy data by removing columns, changing data types, and splitting columns.',
      'Unpivoting data from a "wide" format to a "tall" format suitable for PivotTables.',
      'Merging data from two different sources (e.g., an Excel sheet and a database).',
    ],
    tutorial: [
        { step: 1, description: 'Scenario: You receive a data export with unnecessary columns, incorrect data types (e.g., numbers stored as text), and a "Full Name" column you need to split.' },
        { step: 2, description: 'Load Data: Go to Data tab > Get & Transform Data > From Table/Range. This opens the Power Query Editor.' },
        { step: 3, description: 'Remove Columns: In the editor, right-click the headers of columns you don\'t need and select "Remove".' },
        { step: 4, description: 'Change Data Types: Click the icon in the header of a column (e.g., a Sales column). Choose the correct type, like "Currency" or "Date".' },
        { step: 5, description: 'Split Column: Select the "Full Name" column. Go to the Home tab > "Split Column" > "By Delimiter". Choose "Space" as the delimiter and split at the "Left-most delimiter". This creates "First Name" and "Last Name" columns.' },
        { step: 6, description: 'Load to Excel: Click "Close & Load". A new sheet is created with your clean, transformed data. All your steps are saved in the "Applied Steps" pane in Power Query.' },
        { step: 7, description: 'Automate: When you get a new export, simply replace the old data, go to the Data tab, and click "Refresh All". Power Query will instantly re-run all your cleaning steps.' },
    ],
    quiz: [
      {
        question: 'What is the primary benefit of using Power Query for repetitive data cleaning tasks?',
        options: [ 'It creates the most beautiful charts.', 'It writes complex VBA macros for you.', 'It records your cleaning steps so they can be refreshed and automated.', 'It is the only way to enter data into Excel.' ],
        correctAnswer: 'It records your cleaning steps so they can be refreshed and automated.',
        explanation: 'Power Query\'s strength lies in automation. It records every transformation step, creating a query that can be refreshed with one click to re-apply the same cleaning process to new data.',
      },
      {
        question: 'Is Power Query a destructive process for your original data source?',
        options: [ 'Yes, it always modifies the source file.', 'No, it works on a preview of the data and loads the transformed result to a new location.', 'Only if you save the file.', 'Yes, but you can undo the changes.' ],
        correctAnswer: 'No, it works on a preview of the data and loads the transformed result to a new location.',
        explanation: 'Power Query is non-destructive. It connects to your data source but does not change it. All transformations are applied and the clean data is loaded into a new table in Excel.'
      }
    ],
  },
  {
    id: 21,
    title: 'Power Pivot & Data Model',
    definition: 'An add-in used for creating sophisticated data models. It allows you to handle millions of rows, create relationships between different tables, and write advanced calculations using the DAX (Data Analysis Expressions) formula language.',
    useCases: [
        "Analyzing millions of rows of sales data, far exceeding Excel's worksheet limit.",
        "Creating a relationship between a 'Sales' table and a 'Products' table to analyze sales by product category.",
        "Writing DAX measures like 'Year-over-Year Growth' that would be very complex in standard Excel.",
        "Building a scalable and efficient data model that serves as the foundation for PivotTables and Power BI reports."
    ],
    tutorial: [
        { step: 1, description: 'Setup: You have two separate tables: a "Sales" table (with ProductID, Sales) and a "Products" lookup table (with ProductID, Category, Product Name).' },
        { step: 2, description: 'Load to Data Model: Load both tables into Excel. For each table, go to the Power Pivot tab and click "Add to Data Model".' },
        { step: 3, description: 'Manage Data Model: Go to the Power Pivot tab > Manage. This opens the Power Pivot window.' },
        { step: 4, description: 'Create Relationship: In the Power Pivot window, go to the "Home" tab and click "Diagram View". You will see visual representations of your tables.' },
        { step:5, description: 'Drag and Connect: Click and drag the "ProductID" field from the "Sales" table and drop it directly onto the "ProductID" field in the "Products" table. A line will appear, representing a one-to-many relationship.' },
        { step: 6, description: 'Create PivotTable from Model: Go back to Excel. Insert > PivotTable > "From Data Model".' },
        { step: 7, description: 'Analyze Across Tables: In your PivotTable Fields list, you will see both tables. You can now drag "Category" (from the Products table) to Rows and "Sales" (from the Sales table) to Values. The relationship allows the PivotTable to work seamlessly across both tables.' },
    ],
    quiz: [
      {
          question: 'What is the primary purpose of creating relationships in the Power Pivot Data Model?',
          options: ['To format tables with different colors.', 'To allow PivotTables to use data from multiple, related tables simultaneously.', 'To sort the data automatically.', 'To check for spelling errors.'],
          correctAnswer: 'To allow PivotTables to use data from multiple, related tables simultaneously.',
          explanation: 'Relationships are the foundation of the Data Model. They define how tables are connected so you can build meaningful analyses that combine data from different sources, such as sales figures and product details.'
      },
      {
        question: 'What is a major advantage of Power Pivot over a standard Excel worksheet?',
        options: [ 'It has more colors and fonts.', 'It can handle millions of rows of data efficiently.', 'It can check your grammar.', 'Every cell can contain a chart.' ],
        correctAnswer: 'It can handle millions of rows of data efficiently.',
        explanation: "Power Pivot's VertiPaq engine compresses data and stores it in memory, allowing it to analyze datasets far larger than Excel's ~1 million row worksheet limit."
      }
    ]
  },
  {
    id: 22,
    title: 'Formula Auditing',
    definition: 'A set of tools that help you understand, debug, and trace the flow of data in your formulas. Key tools include Trace Precedents (shows which cells affect the current cell) and Trace Dependents (shows which cells are affected by the current cell).',
    useCases: [
        "Debugging a complex formula that is returning an error by tracing its inputs.",
        "Understanding how a final summary number in a large financial model is calculated.",
        "Identifying which other formulas will be impacted if you delete a specific cell.",
        "Using the 'Evaluate Formula' tool to step through a calculation and pinpoint the exact location of an error."
    ],
    tutorial: [
        { step: 1, description: 'Scenario: A complex formula like `=IF(VLOOKUP(A1,B:C,2,0)>100, "High", "Low")` is returning an unexpected result.' },
        { step: 2, description: 'Select Cell: Click on the cell containing the complex formula.' },
        { step: 3, description: 'Evaluate Formula Tool: Go to the Formulas tab > Formula Auditing group > "Evaluate Formula".' },
        { step: 4, description: 'Step-by-Step Evaluation: A dialog box appears showing your formula. The underlined part is what will be evaluated next. Click the "Evaluate" button repeatedly.' },
        { step: 5, description: 'Observe the Logic: You will see the `VLOOKUP` resolve to its value, then the comparison `>100` resolve to TRUE or FALSE, and finally the `IF` statement resolve to its final result. This allows you to see exactly where the logic went wrong.' },
        { step: 6, description: 'Trace Precedents: To see where the inputs came from visually, click "Trace Precedents" on the Formulas tab. Blue arrows will point from the source cells to your formula cell.' },
    ],
    quiz: [
      {
          question: 'You have a cell with a final calculation, but the result is wrong. Which auditing tool would you use to see which other cells feed into your formula?',
          options: ['Trace Dependents', 'Evaluate Formula', 'Trace Precedents', 'Error Checking'],
          correctAnswer: 'Trace Precedents',
          explanation: 'Trace Precedents is specifically designed to show you the "precedent" cells—the ones that provide data to the selected formula cell, helping you trace the source of the error.'
      },
      {
        question: 'If you select cell A1 and use "Trace Dependents," what will it show you?',
        options: [ 'All cells that A1 uses in its formula.', 'All cells that use cell A1 in their formulas.', 'All cells in column A.', 'All cells with errors.' ],
        correctAnswer: 'All cells that use cell A1 in their formulas.',
        explanation: 'Trace Dependents does the opposite of Trace Precedents. It shows you which other cells are "dependent" on the cell you have selected.'
      }
    ]
  },
  {
    id: 23,
    title: 'Macros (Recording)',
    definition: 'A macro is a recorded sequence of actions, formatting, and calculations that can be replayed to automate repetitive tasks. Recording a macro is a simple way to get started with automation without writing any VBA (Visual Basic for Applications) code.',
    useCases: [
        "Automating a weekly report that requires the same formatting and filtering steps every time.",
        "Recording a macro to clean up a raw data export by deleting specific columns and applying number formats.",
        "Creating a button that instantly applies a complex set of sorting rules to a dataset.",
    ],
    tutorial: [
        { step: 1, description: 'Scenario: Every week you get a data dump that you need to format into a clean report by applying a specific table style, number format, and column width.' },
        { step: 2, description: 'Enable Developer Tab: If not visible, go to File > Options > Customize Ribbon and check the "Developer" box.' },
        { step: 3, description: 'Start Recording: Go to the Developer tab and click "Record Macro". Give your macro a descriptive name (e.g., "FormatWeeklyReport") and click OK.' },
        { step: 4, description: 'Perform Actions: Now, perform the exact formatting steps you want to automate. For example: 1. Select all data (Ctrl+A). 2. Apply a Table Style (Home > Format as Table). 3. Select the sales column and apply Currency format. 4. AutoFit the column widths.' },
        { step: 5, description: 'Stop Recording: Go to the Developer tab and click "Stop Recording". Your actions have been translated into VBA code.' },
        { step: 6, description: 'Run Macro: The next week, after pasting in the new raw data, just go to Developer > Macros, select "FormatWeeklyReport", and click "Run". Excel will execute all your formatting steps in an instant.' },
    ],
    quiz: [
      {
          question: 'What is the most common use case for recording a macro?',
          options: ['To perform complex statistical analysis.', 'To automate repetitive formatting or data manipulation tasks.', 'To create charts and visualizations.', 'To connect to external databases.'],
          correctAnswer: 'To automate repetitive formatting or data manipulation tasks.',
          explanation: 'Macros are ideal for automation. They save time and reduce errors by perfectly replaying a sequence of steps that you would otherwise have to perform manually over and over again.'
      },
      {
        question: 'When you record a macro, what language is Excel writing in the background?',
        options: [ 'Python', 'JavaScript', 'SQL', 'VBA (Visual Basic for Applications)' ],
        correctAnswer: 'VBA (Visual Basic for Applications)',
        explanation: 'The macro recorder is a tool that automatically generates VBA code based on your actions, which is the programming language used for automation within Microsoft Office applications.'
      }
    ]
  },
];