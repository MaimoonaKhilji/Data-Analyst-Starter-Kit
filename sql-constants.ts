import type { ExcelConcept } from './types';

export const SQL_CONCEPTS: ExcelConcept[] = [
  // Section 1: SQL Fundamentals
  {
    id: 1,
    title: 'Intro to SQL & Databases',
    definition: 'SQL (Structured Query Language) is the standard language for managing and querying data in relational databases. A relational database organizes data into tables, which consist of rows and columns, similar to a spreadsheet.',
    useCases: [
      'Extracting specific customer information from a large customer database.',
      'Analyzing sales transactions to identify trends.',
      'Generating reports by combining data from multiple tables.',
      'Updating or inserting new records into a database.',
    ],
    tutorial: [
        { step: 1, description: 'Database: An organized collection of data. Think of it as a container for related tables.' },
        { step: 2, description: 'Table: A collection of related data held in a table format within a database. It consists of columns and rows (also called fields and records).', example: 'Customers Table, Orders Table' },
        { step: 3, description: 'Query: A "question" or a request for data from a database. Queries are written in SQL.'},
        { step: 4, description: 'Basic SQL Commands: `SELECT` (to query data), `INSERT` (to add data), `UPDATE` (to change data), `DELETE` (to remove data). As an analyst, you will primarily use `SELECT`.'},
    ],
    quiz: [
      {
        question: 'What does SQL stand for?',
        options: [ 'Strong Question Language', 'Structured Query Language', 'Simple Query Logic', 'Standard Query Library' ],
        correctAnswer: 'Structured Query Language',
        explanation: 'SQL stands for Structured Query Language and is the standard language for interacting with relational databases.',
      },
      {
        question: 'In a relational database, what is a table?',
        options: [ 'A single piece of data', 'A command to retrieve data', 'A collection of related data organized into columns and rows', 'A visual chart' ],
        correctAnswer: 'A collection of related data organized into columns and rows',
        explanation: 'Tables are the fundamental objects in a database for storing data in a structured format of rows (records) and columns (fields).',
      },
    ],
  },
  {
    id: 2,
    title: 'SELECT & FROM',
    definition: 'The `SELECT` statement is used to specify the columns you want to retrieve from a database. The `FROM` clause specifies the table from which you want to retrieve the data. These are the two most fundamental clauses of any SQL query.',
    useCases: [
      'Retrieving all columns from a customer table.',
      'Selecting just the name and email address of all customers.',
      'Getting a list of all product names from a products table.',
    ],
    tutorial: [
        { step: 1, description: 'The basic syntax is `SELECT column1, column2, ... FROM table_name;`.' },
        { step: 2, description: 'To select all columns from a table, you can use the wildcard `*`.', example: 'SELECT * FROM Customers;' },
        { step: 3, description: 'To select specific columns, list them by name, separated by commas.', example: 'SELECT FirstName, LastName, Email FROM Customers;' },
        { step: 4, description: 'It is good practice to specify the columns you need instead of using `*`, especially with large tables, as it is more efficient.'},
    ],
    quiz: [
      {
        question: 'Which SQL keyword is used to specify the table you want to query?',
        options: [ 'TABLE', 'FROM', 'SELECT', 'WHERE' ],
        correctAnswer: 'FROM',
        explanation: 'The `FROM` clause always follows the `SELECT` clause and indicates the source table for the data.',
      },
      {
        question: 'How do you select all columns from a table named `Products`?',
        options: [ 'SELECT all FROM Products;', 'GET * FROM Products;', 'SELECT * FROM Products;', 'SELECT Products.all;' ],
        correctAnswer: 'SELECT * FROM Products;',
        explanation: 'The asterisk (*) is the universal wildcard in SQL for selecting all available columns in the specified table(s).',
      },
    ],
  },
  {
    id: 3,
    title: 'WHERE Clause',
    definition: 'The `WHERE` clause is used to filter records. It extracts only those records that fulfill a specified condition, allowing you to narrow down your query results.',
    useCases: [
      'Finding all customers from a specific country, like `WHERE Country = \'USA\'`.',
      'Selecting all orders with a sales amount greater than 100, like `WHERE Sales > 100`.',
      'Retrieving all products from the \'Electronics\' category.',
      'Combining conditions with `AND` and `OR`, like finding sales in the USA `AND` over $100.',
    ],
    tutorial: [
        { step: 1, description: 'The `WHERE` clause is placed after the `FROM` clause.' },
        { step: 2, description: 'Filtering on text (string) values: Use single quotes around the value.', example: 'SELECT * FROM Customers WHERE City = \'London\';' },
        { step: 3, description: 'Filtering on numeric values: Do not use quotes.', example: 'SELECT * FROM Orders WHERE Amount > 500;' },
        { step: 4, description: 'Using `AND`: Combines multiple conditions, and all must be true.', example: 'SELECT * FROM Customers WHERE Country = \'Germany\' AND City = \'Berlin\';' },
        { step: 5, description: 'Using `OR`: Combines multiple conditions, and at least one must be true.', example: 'SELECT * FROM Customers WHERE City = \'Berlin\' OR City = \'Paris\';' },
        { step: 6, description: 'Using `IN`: A shorthand for multiple `OR` conditions on the same column.', example: 'SELECT * FROM Customers WHERE City IN (\'Berlin\', \'Paris\', \'London\');' },
    ],
    quiz: [
      {
        question: 'Which query correctly selects all products with a price greater than 50?',
        options: [ 'SELECT * FROM Products WHERE Price > 50;', 'SELECT * FROM Products > 50;', 'SELECT * FROM Products FILTER Price > 50;', 'SELECT * WHERE Price > 50 FROM Products;' ],
        correctAnswer: 'SELECT * FROM Products WHERE Price > 50;',
        explanation: 'The correct syntax is to use the `WHERE` clause followed by the column name, a comparison operator, and the value.',
      },
      {
        question: 'How do you filter for rows where the "Country" is either \'USA\' or \'Canada\'?',
        options: [ 'WHERE Country = \'USA\' AND Country = \'Canada\'', 'WHERE Country IN (\'USA\', \'Canada\')', 'WHERE Country = \'USA\', \'Canada\'', 'WHERE Country IS \'USA\' OR \'Canada\'' ],
        correctAnswer: 'WHERE Country IN (\'USA\', \'Canada\')',
        explanation: 'The `IN` operator is the most efficient and readable way to filter a column against a list of possible values.',
      },
    ],
  },
  {
    id: 4,
    title: 'ORDER BY',
    definition: 'The `ORDER BY` clause is used to sort the result set of a query in ascending (ASC) or descending (DESC) order based on one or more columns.',
    useCases: [
      'Listing customers alphabetically by their last name.',
      'Finding the most recent orders by sorting by date in descending order.',
      'Ranking products from highest to lowest price.',
      'Sorting a report by region first, and then by sales amount within each region.',
    ],
    tutorial: [
        { step: 1, description: 'The `ORDER BY` clause is placed at the end of the `SELECT` statement.' },
        { step: 2, description: 'Ascending order is the default. The `ASC` keyword is optional.', example: 'SELECT * FROM Customers ORDER BY LastName;' },
        { step: 3, description: 'To sort in descending order, you must use the `DESC` keyword.', example: 'SELECT * FROM Orders ORDER BY OrderDate DESC;' },
        { step: 4, description: 'You can sort by multiple columns. The data is sorted by the first column, and then, for any rows with the same value in the first column, it sorts them by the second column.', example: 'SELECT * FROM Customers ORDER BY Country, City;' },
    ],
    quiz: [
      {
        question: 'How do you sort a list of products from the most expensive to the least expensive?',
        options: [ 'ORDER BY Price DESC', 'ORDER BY Price ASC', 'SORT BY Price DESC', 'GROUP BY Price' ],
        correctAnswer: 'ORDER BY Price DESC',
        explanation: 'To sort from highest to lowest, you must use the `ORDER BY` clause with the `DESC` (descending) keyword.',
      },
      {
        question: 'Where is the `ORDER BY` clause typically placed in a query?',
        options: [ 'Before the `SELECT` clause', 'Before the `FROM` clause', 'After the `WHERE` clause', 'It can be anywhere' ],
        correctAnswer: 'After the `WHERE` clause',
        explanation: 'The standard order of clauses is `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, and finally `ORDER BY`.',
      },
    ],
  },
  {
    id: 5,
    title: 'Aggregate Functions (COUNT, SUM, AVG)',
    definition: 'Aggregate functions perform a calculation on a set of values and return a single value. Common functions include `COUNT` (counts rows), `SUM` (sums values), `AVG` (calculates average), `MIN` (finds minimum), and `MAX` (finds maximum).',
    useCases: [
      'Finding the total number of customers in a table.',
      'Calculating the total revenue from all sales.',
      'Determining the average price of a product.',
      'Finding the date of the earliest and latest orders.',
    ],
    tutorial: [
        { step: 1, description: 'Aggregate functions are used in the `SELECT` statement.' },
        { step: 2, description: '`COUNT(*)` counts the total number of rows in the result set.', example: 'SELECT COUNT(*) FROM Customers;' },
        { step: 3, description: '`SUM()` calculates the sum of a numeric column.', example: 'SELECT SUM(SalesAmount) FROM Orders;' },
        { step:4, description: 'Using aliases with `AS` is good practice to give the result column a descriptive name.', example: 'SELECT AVG(Price) AS AveragePrice FROM Products;' },
    ],
    quiz: [
      {
        question: 'Which function would you use to find the total revenue from a `Sales` column?',
        options: [ 'COUNT(Sales)', 'AVG(Sales)', 'TOTAL(Sales)', 'SUM(Sales)' ],
        correctAnswer: 'SUM(Sales)',
        explanation: 'The `SUM()` function is used to calculate the total sum of all values in a numeric column.',
      },
      {
        question: 'What does `SELECT COUNT(*) FROM Orders;` return?',
        options: [ 'The sum of all order IDs', 'The total number of rows in the Orders table', 'The number of columns in the Orders table', 'The average order amount' ],
        correctAnswer: 'The total number of rows in the Orders table',
        explanation: '`COUNT(*)` is the standard way to count all records (rows) that match the query criteria (in this case, the whole table).',
      },
    ],
  },
  {
    id: 6,
    title: 'GROUP BY & HAVING',
    definition: 'The `GROUP BY` clause is used with aggregate functions to group the result set by one or more columns. The `HAVING` clause is used to filter these grouped results, similar to how `WHERE` filters individual rows.',
    useCases: [
      'Calculating the total sales for each country.',
      'Finding the number of customers in each city.',
      'Identifying which product categories have an average price greater than $50.',
      'Listing all departments that have more than 10 employees.',
    ],
    tutorial: [
        { step: 1, description: '`GROUP BY` must be used whenever you have both an aggregate function (like `SUM()`) and a non-aggregated column in your `SELECT` statement.' },
        { step: 2, description: 'This query finds the total sales for each country.', example: 'SELECT Country, SUM(Amount) AS TotalSales FROM Orders GROUP BY Country;' },
        { step: 3, description: 'The `WHERE` clause filters rows *before* they are grouped.'},
        { step: 4, description: 'The `HAVING` clause filters groups *after* they have been created by the `GROUP BY` clause.' },
        { step: 5, description: 'This query finds the countries where total sales are greater than 1000.', example: 'SELECT Country, SUM(Amount) AS TotalSales FROM Orders GROUP BY Country HAVING SUM(Amount) > 1000;' },
    ],
    quiz: [
      {
        question: 'You want to find the number of employees in each department. What clauses do you need?',
        options: [ 'SELECT, FROM, WHERE', 'SELECT, FROM, GROUP BY', 'SELECT, FROM, HAVING', 'SELECT, FROM, ORDER BY' ],
        correctAnswer: 'SELECT, FROM, GROUP BY',
        explanation: 'You need `SELECT COUNT(*), Department`, `FROM Employees`, and `GROUP BY Department` to group the rows by department before counting them.',
      },
      {
        question: 'What is the key difference between the `WHERE` and `HAVING` clauses?',
        options: [ 'They are interchangeable', '`WHERE` filters individual rows, `HAVING` filters aggregated groups', '`HAVING` filters rows, `WHERE` filters groups', '`WHERE` is used for numbers, `HAVING` is used for text' ],
        correctAnswer: '`WHERE` filters individual rows, `HAVING` filters aggregated groups',
        explanation: 'The `WHERE` clause is applied first to the raw data, and the `HAVING` clause is applied last to the results of the `GROUP BY` aggregation.',
      },
    ],
  },
  {
    id: 7,
    title: 'JOINs (INNER, LEFT)',
    definition: '`JOIN`s are used to combine rows from two or more tables based on a related column between them. An `INNER JOIN` returns only the rows where the key exists in both tables. A `LEFT JOIN` returns all rows from the left table and the matched rows from the right table.',
    useCases: [
      'Combining a `Customers` table and an `Orders` table to see which customers have placed orders (`INNER JOIN`).',
      'Enriching an `Orders` table with product details from a `Products` table.',
      'Finding all customers, including those who have not yet placed an order (`LEFT JOIN`).',
    ],
    tutorial: [
        { step: 1, description: 'Setup: You have an `Orders` table with `CustomerID` and a `Customers` table with `CustomerID` and `CustomerName`.' },
        { step: 2, description: 'The join condition is specified with the `ON` keyword, where you state which columns should match.' },
        { step: 3, description: '`INNER JOIN`: This query will only return orders that have a matching customer in the Customers table.', example: 'SELECT Orders.OrderID, Customers.CustomerName FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;' },
        { step: 4, description: '`LEFT JOIN`: This query will return ALL orders, and if an order has a `CustomerID` that doesn\'t exist in the Customers table, the `CustomerName` will be NULL.', example: 'SELECT Orders.OrderID, Customers.CustomerName FROM Orders LEFT JOIN Customers ON Orders.CustomerID = Customers.CustomerID;' },
        { step: 5, description: 'Using table aliases (like `o` for Orders and `c` for Customers) makes queries with joins much easier to read.', example: 'SELECT o.OrderID, c.CustomerName FROM Orders AS o LEFT JOIN Customers AS c ON o.CustomerID = c.CustomerID;' },
    ],
    quiz: [
      {
        question: 'You want to see a list of all customers and their corresponding orders, but you also want to include customers who have not placed any orders. Which join should you use?',
        options: [ 'INNER JOIN', 'RIGHT JOIN', 'LEFT JOIN', 'CROSS JOIN' ],
        correctAnswer: 'LEFT JOIN',
        explanation: 'A `LEFT JOIN` (with `Customers` as the left table) will ensure that every customer is included in the result, with NULL values in the order columns for those who haven\'t placed an order.',
      },
      {
        question: 'What does an `INNER JOIN` between a `Products` table and a `Sales` table return?',
        options: [ 'All products, regardless of whether they have been sold', 'All sales, regardless of whether the product exists', 'Only the sales for products that exist in the Products table', 'A combination of all rows from both tables' ],
        correctAnswer: 'Only the sales for products that exist in the Products table',
        explanation: 'An `INNER JOIN` returns only the intersection of the two tables—the records where the join key exists in both.',
      },
    ],
  },
  {
    id: 8,
    title: 'Subqueries',
    definition: 'A subquery, or inner query, is a query nested inside another SQL query. It can be used in the `SELECT`, `FROM`, or `WHERE` clause to perform an intermediate calculation or filtering step.',
    useCases: [
      'Finding all employees who have a salary higher than the company average salary.',
      'Selecting all products that have been sold more than 10 times.',
      'Filtering a customer list to show only those who have placed an order in the last 30 days.',
    ],
    tutorial: [
        { step: 1, description: 'A subquery is always executed first, and its result is then used by the outer query.'},
        { step: 2, description: 'Subquery in a `WHERE` clause: This is the most common use. This query finds all products whose price is above the average price of all products.', example: 'SELECT ProductName, Price FROM Products WHERE Price > (SELECT AVG(Price) FROM Products);' },
        { step: 3, description: 'In the example, `(SELECT AVG(Price) FROM Products)` runs first, returns a single number (the average price), and the outer query then uses that number to filter the products.' },
        { step: 4, description: 'Subquery with `IN`: You can use a subquery that returns a list of values.', example: 'SELECT CustomerName FROM Customers WHERE CustomerID IN (SELECT CustomerID FROM Orders);' },
    ],
    quiz: [
      {
        question: 'What is a subquery?',
        options: [ 'A query that is saved for later use', 'A query that is nested inside another query', 'A query that joins more than two tables', 'A query that contains an error' ],
        correctAnswer: 'A query that is nested inside another query',
        explanation: 'A subquery, or inner query, is a complete SELECT statement that is embedded within another SQL statement.',
      },
      {
        question: 'Which query correctly finds all employees with a salary below the average?',
        options: [ 'SELECT * FROM Employees WHERE Salary < AVG(Salary);', 'SELECT * FROM Employees WHERE Salary < (SELECT AVG(Salary) FROM Employees);', 'SELECT * FROM Employees HAVING Salary < AVG(Salary);', 'SELECT * FROM Employees WHERE Salary < AVG();' ],
        correctAnswer: 'SELECT * FROM Employees WHERE Salary < (SELECT AVG(Salary) FROM Employees);',
        explanation: 'You cannot use an aggregate function like `AVG()` directly in a `WHERE` clause. You must first calculate the average in a subquery and then use that result to filter in the outer query.',
      },
    ],
  },
  {
    id: 9,
    title: 'CASE Statements',
    definition: 'The `CASE` statement goes through conditions and returns a value when the first condition is met (like an IF-THEN-ELSE statement). It allows you to create new, conditional columns in your query results.',
    useCases: [
      'Categorizing customers into tiers ("Gold", "Silver", "Bronze") based on their total spending.',
      'Labeling orders as "Large" or "Small" based on their amount.',
      'Flagging transactions as "Domestic" or "International" based on the country.',
    ],
    tutorial: [
        { step: 1, description: 'The `CASE` statement is used within a `SELECT` clause to create a new column.' },
        { step: 2, description: 'The syntax starts with `CASE`, followed by one or more `WHEN ... THEN ...` conditions, an optional `ELSE` for default values, and must end with `END`.' },
        { step: 3, description: 'This example creates a new column `PriceCategory` based on the product price.', example: 'SELECT ProductName, Price, CASE WHEN Price > 100 THEN \'Expensive\' WHEN Price > 50 THEN \'Moderate\' ELSE \'Inexpensive\' END AS PriceCategory FROM Products;' },
        { step: 4, description: 'The conditions are evaluated in order. A price of 150 would match the first `WHEN` and be labeled "Expensive"; it would not be evaluated against the second condition.' },
    ],
    quiz: [
      {
        question: 'What is the purpose of a `CASE` statement?',
        options: [ 'To filter rows', 'To sort results', 'To perform conditional logic and create a new column', 'To join tables' ],
        correctAnswer: 'To perform conditional logic and create a new column',
        explanation: '`CASE` statements are the SQL equivalent of if/else logic, perfect for creating custom categories or labels in your query output.',
      },
      {
        question: 'What keyword must be used to conclude every `CASE` statement?',
        options: [ 'FINISH', 'STOP', 'END', 'CLOSE' ],
        correctAnswer: 'END',
        explanation: 'Every `CASE` statement must be terminated with the `END` keyword, which is often followed by `AS NewColumnName` to name the resulting column.',
      },
    ],
  },
  {
    id: 10,
    title: 'Common Table Expressions (CTEs)',
    definition: 'A Common Table Expression (CTE) is a temporary, named result set that you can reference within a `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement. It helps to break down complex queries into simple, readable, and logical steps.',
    useCases: [
      'Simplifying a query that involves multiple levels of subqueries.',
      'Calculating an intermediate value (like regional sales) and then joining it back to another table.',
      'Writing recursive queries to traverse hierarchical data (like an employee organizational chart).',
    ],
    tutorial: [
        { step: 1, description: 'A CTE is defined using the `WITH` keyword followed by the CTE name.' },
        { step: 2, description: 'The query that defines the CTE is placed inside parentheses `AS (...)`.' },
        { step: 3, description: 'You can then reference this CTE in your main query as if it were a regular table.' },
        { step: 4, description: 'This example finds the customers in the regions that have the highest total sales.', example: 'WITH RegionalSales AS ( SELECT Region, SUM(Sales) AS TotalSales FROM Orders GROUP BY Region ) SELECT c.CustomerName, c.Region FROM Customers c JOIN RegionalSales rs ON c.Region = rs.Region WHERE rs.TotalSales > 100000;' },
        { step: 5, description: 'The CTE `RegionalSales` is created first, and then the main query joins the `Customers` table to this temporary result set.' },
    ],
    quiz: [
      {
        question: 'What keyword is used to start the definition of a Common Table Expression (CTE)?',
        options: [ 'CTE', 'TEMP', 'AS', 'WITH' ],
        correctAnswer: 'WITH',
        explanation: 'Every CTE begins with the `WITH` clause, followed by the name you want to give your temporary result set.',
      },
      {
        question: 'What is a major benefit of using a CTE over a complex subquery?',
        options: [ 'They are faster in all situations', 'They make the query more readable and easier to debug', 'They can be used in a `WHERE` clause', 'They can only be used once' ],
        correctAnswer: 'They make the query more readable and easier to debug',
        explanation: 'CTEs allow you to structure your query into logical building blocks, which is a huge advantage for readability and maintenance compared to deeply nested subqueries.',
      },
    ],
  },
  {
    id: 11,
    title: 'Window Functions',
    definition: 'Window functions perform a calculation across a set of table rows that are somehow related to the current row. Unlike aggregate functions, they do not collapse the rows; they return a value for each row based on the "window" of data defined by the `OVER()` clause.',
    useCases: [
      'Ranking products by sales within each product category.',
      'Calculating a running total of sales over time.',
      'Finding the sales of the previous month for comparison.',
      'Numbering rows to find duplicates or perform pagination.',
    ],
    tutorial: [
        { step: 1, description: 'A window function uses an `OVER()` clause to define the window (the set of rows to operate on).' },
        { step: 2, description: '`PARTITION BY` in the `OVER()` clause divides the rows into partitions (groups). The window function is then applied independently to each partition. It is similar to `GROUP BY` but doesn\'t collapse the rows.' },
        { step: 3, description: '`ORDER BY` in the `OVER()` clause sorts the rows within each partition. This is important for ranking and running totals.' },
        { step: 4, description: 'Ranking Example: This query ranks employees by salary within each department.', example: 'SELECT EmployeeName, Department, Salary, RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS DeptRank FROM Employees;' },
        { step: 5, description: 'Running Total Example: This calculates the cumulative sum of sales over time.', example: 'SELECT OrderDate, SalesAmount, SUM(SalesAmount) OVER (ORDER BY OrderDate) AS RunningTotal FROM Sales;' },
    ],
    quiz: [
      {
        question: 'What is a key difference between a window function and a regular aggregate function like `SUM()` with `GROUP BY`?',
        options: [ 'Window functions are slower', 'Window functions do not collapse the rows; they return a value for each row', 'Aggregate functions can work with text', 'Window functions cannot be used with an `ORDER BY` clause' ],
        correctAnswer: 'Window functions do not collapse the rows; they return a value for each row',
        explanation: 'This is the fundamental property of window functions. They allow you to perform aggregations without losing the detail of the individual rows, which is incredibly powerful.',
      },
      {
        question: 'In a window function, what does the `PARTITION BY` clause do?',
        options: [ 'Sorts the rows', 'Filters the rows', 'Divides the rows into groups for the function to operate on', 'Deletes the rows' ],
        correctAnswer: 'Divides the rows into groups for the function to operate on',
        explanation: '`PARTITION BY` is like a `GROUP BY` for window functions; it sets the boundaries for the calculation, which is then reset for each new partition.',
      },
    ],
  },
  {
    id: 12,
    title: 'Data Cleaning (NULLs, Duplicates)',
    definition: 'Practical data cleaning in SQL involves handling NULL values, which represent missing data, and identifying or removing duplicate records from your query results.',
    useCases: [
      'Filtering out rows where a critical column (like email) is `NULL`.',
      'Replacing `NULL` values in a numeric column with 0 using `COALESCE` or `ISNULL`.',
      'Getting a unique list of all cities where customers live.',
      'Finding duplicate customer records based on name and email address.',
    ],
    tutorial: [
        { step: 1, description: 'Filtering `NULL`s: You cannot use `= NULL`. You must use the `IS NULL` or `IS NOT NULL` operator.', example: 'SELECT * FROM Customers WHERE Email IS NOT NULL;' },
        { step: 2, description: 'Replacing `NULL`s: The `COALESCE` function returns the first non-NULL value in a list. It is great for providing a default value.', example: 'SELECT ProductName, COALESCE(Discount, 0) AS Discount FROM Products;' },
        { step: 3, description: 'Finding Unique Values: `DISTINCT` is used in the `SELECT` statement to remove duplicate rows from the result set.', example: 'SELECT DISTINCT Country FROM Customers;' },
        { step: 4, description: 'Finding Duplicate Records: You can use `GROUP BY` and `HAVING` to find records that appear more than once.', example: 'SELECT Email, COUNT(*) FROM Customers GROUP BY Email HAVING COUNT(*) > 1;' },
    ],
    quiz: [
      {
        question: 'How do you correctly filter a query to find all rows where the "Region" column is missing data?',
        options: [ 'WHERE Region = NULL', 'WHERE Region = \'\'', 'WHERE Region IS NULL', 'WHERE Region IS MISSING' ],
        correctAnswer: 'WHERE Region IS NULL',
        explanation: 'In SQL, `NULL` is not a value that can be compared with `=`. The correct syntax is always to use the `IS NULL` or `IS NOT NULL` operator.',
      },
      {
        question: 'Which keyword removes duplicate rows from your query result?',
        options: [ 'UNIQUE', 'DISTINCT', 'NO DUPLICATES', 'SINGLE' ],
        correctAnswer: 'DISTINCT',
        explanation: 'The `DISTINCT` keyword is placed directly after `SELECT` to ensure that every row in your final result set is unique.',
      },
    ],
  },
];