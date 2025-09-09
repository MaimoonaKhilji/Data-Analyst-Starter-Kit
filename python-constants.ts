import type { ExcelConcept } from './types';

export const PYTHON_CONCEPTS: ExcelConcept[] = [
  // Section 1: Python & Environment Setup
  {
    id: 1,
    title: 'Python & Jupyter Notebooks Intro',
    definition: 'Python is a versatile, high-level programming language widely used for data analysis. Jupyter Notebooks are interactive environments that let you write and run code, visualize data, and add narrative text in a single document, making them perfect for data exploration.',
    useCases: [
      'Performing data cleaning and transformation tasks.',
      'Conducting statistical analysis and building machine learning models.',
      'Creating data visualizations to communicate findings.',
      'Automating data processing pipelines.',
    ],
    tutorial: [
        { step: 1, description: 'What is Python? An open-source language with a rich ecosystem of libraries specifically for data science, like Pandas, NumPy, and Matplotlib.' },
        { step: 2, description: 'What are Jupyter Notebooks? They run in your web browser and are composed of "cells". A "Code" cell is for writing and running Python code. A "Markdown" cell is for writing formatted text, like headings and notes.'},
        { step: 3, description: 'Running a Cell: You can write Python code in a code cell and press `Shift + Enter` to execute it. The output will appear directly below the cell.'},
        { step: 4, description: 'Example Code Cell:', example: 'print("Hello, Data Analyst!")' },
        { step: 5, description: 'This interactive, cell-by-cell execution makes Jupyter ideal for exploratory data analysis, as you can test ideas and see results immediately without re-running an entire script.' },
    ],
    quiz: [
      {
        question: 'What is a primary advantage of using Jupyter Notebooks for data analysis?',
        options: [ 'It only works with very small datasets.', 'It allows for interactive, cell-by-cell code execution with outputs and text in one document.', 'It automatically writes the code for you.', 'It does not require Python to be installed.' ],
        correctAnswer: 'It allows for interactive, cell-by-cell code execution with outputs and text in one document.',
        explanation: 'Jupyter\'s strength is its interactive nature, which is perfect for exploring data, testing hypotheses, and documenting your analysis process step-by-step.',
      },
      {
        question: 'How do you execute a code cell in a Jupyter Notebook?',
        options: [ 'Ctrl + S', 'Shift + Enter', 'Alt + Tab', 'Double-click the cell' ],
        correctAnswer: 'Shift + Enter',
        explanation: 'The `Shift + Enter` keyboard shortcut is the standard way to run the code in the current cell and move to the next one.',
      },
    ],
  },
  // Section 2: Pandas - The Core Library
  {
    id: 2,
    title: 'Pandas Intro: Series & DataFrames',
    definition: 'Pandas is the fundamental Python library for data manipulation. Its two main data structures are the Series (a single column of data) and the DataFrame (a two-dimensional table of data with rows and columns, similar to an Excel spreadsheet).',
    useCases: [
      'Reading data from a CSV file into a DataFrame.',
      'Calculating summary statistics for a dataset.',
      'Filtering and selecting specific rows and columns.',
      'Handling missing data.',
    ],
    tutorial: [
        { step: 1, description: 'Import Pandas: The first step in any script is to import the library. The `as pd` is a standard convention.', example: 'import pandas as pd' },
        { step: 2, description: 'Creating a DataFrame: You can create one from a dictionary. The keys become column names and the values become the column data.', example: "data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}\ndf = pd.DataFrame(data)" },
        { step: 3, description: 'Viewing Data: Use `.head()` to see the first few rows of your DataFrame. This is crucial for getting a quick look at your data.', example: 'df.head()' },
        { step: 4, description: 'Viewing Info: Use `.info()` to get a summary of the DataFrame, including the data type of each column and whether it has missing values.', example: 'df.info()' },
        { step: 5, description: 'A Series is just a single column from a DataFrame. You can select one using square brackets.', example: "age_series = df['Age']" },
    ],
    quiz: [
      {
        question: 'What is the primary data structure in Pandas for representing a table of data?',
        options: [ 'Series', 'List', 'DataFrame', 'Dictionary' ],
        correctAnswer: 'DataFrame',
        explanation: 'A DataFrame is the core object in Pandas, representing a 2D labeled data structure with columns of potentially different types.',
      },
      {
        question: 'What does the `.head()` method do on a DataFrame?',
        options: [ 'It shows the column names.', 'It calculates the average of each column.', 'It shows the first 5 rows by default.', 'It shows the last 5 rows.' ],
        correctAnswer: 'It shows the first 5 rows by default.',
        explanation: '`.head()` is one of the most frequently used commands to quickly inspect the beginning of your DataFrame and understand its structure.',
      },
    ],
  },
  {
    id: 3,
    title: 'Reading & Writing Files',
    definition: 'Pandas provides easy-to-use functions for reading data from various file formats into DataFrames and writing DataFrames back to files.',
    useCases: [
      'Reading a CSV file into a DataFrame using `pd.read_csv()`.',
      'Reading an Excel file using `pd.read_excel()`.',
      'Connecting to a SQL database to run a query and load the results into a DataFrame.',
      'Saving a cleaned DataFrame to a new CSV file for later use using `df.to_csv()`.',
    ],
    tutorial: [
        { step: 1, description: 'Reading a CSV: This is the most common data import task. You just need to provide the file path.', example: "df = pd.read_csv('path/to/your/file.csv')" },
        { step: 2, description: 'Reading an Excel file: This is similar, but you may need to specify the sheet name if the file has multiple sheets.', example: "df_excel = pd.read_excel('path/to/your/file.xlsx', sheet_name='Sheet1')" },
        { step: 3, description: 'Writing to a CSV: After cleaning or analyzing your data, you might want to save the result. The `index=False` argument is important to prevent Pandas from writing the DataFrame index as a column in your file.', example: "cleaned_df.to_csv('path/to/output/cleaned_data.csv', index=False)" },
    ],
    quiz: [
      {
        question: 'Which Pandas function is used to read data from a CSV file?',
        options: [ 'pd.open_csv()', 'pd.read_csv()', 'pd.load_csv()', 'pd.get_csv()' ],
        correctAnswer: 'pd.read_csv()',
        explanation: '`pd.read_csv()` is the standard and powerful function for reading comma-separated value files into a DataFrame.',
      },
      {
        question: 'When using `df.to_csv()`, why is the argument `index=False` often used?',
        options: [ 'To make the file read-only', 'To save the file faster', 'To prevent writing the DataFrame index as a new column in the CSV file', 'To include a header row' ],
        correctAnswer: 'To prevent writing the DataFrame index as a new column in the CSV file',
        explanation: 'Usually, the DataFrame index (0, 1, 2, ...) is not part of your actual data, so you exclude it when saving the file to avoid confusion later.',
      },
    ],
  },
  {
    id: 4,
    title: 'Selection & Filtering (.loc, .iloc)',
    definition: 'Pandas provides powerful ways to select subsets of your data. `.loc` is used for label-based indexing (using column and row names), while `.iloc` is used for integer position-based indexing (using row and column numbers).',
    useCases: [
      'Selecting a single column by its name.',
      'Selecting multiple rows and columns based on a condition.',
      'Filtering a DataFrame to show only rows where "Sales" are greater than 1000.',
      'Selecting the first 10 rows and first 3 columns of a DataFrame.',
    ],
    tutorial: [
        { step: 1, description: 'Selecting a Single Column: This returns a Series.', example: "df['Sales']" },
        { step: 2, description: 'Selecting Multiple Columns: Pass a list of column names. This returns a DataFrame.', example: "df[['Name', 'Region', 'Sales']]" },
        { step: 3, description: 'Conditional Filtering: This is a core data analysis task. First, create a boolean condition.', example: "high_sales_condition = df['Sales'] > 1000" },
        { step: 4, description: 'Apply the Condition: Use the condition inside square brackets to filter the DataFrame.', example: "high_sales_df = df[high_sales_condition]" },
        { step: 5, description: 'Using `.loc` for Label-Based Selection: Select rows by index label and columns by column name.', example: "df.loc[0:5, ['Name', 'Sales']]" },
        { step: 6, description: 'Using `.iloc` for Position-Based Selection: Select rows and columns by their integer position.', example: "df.iloc[0:10, 0:3]  # First 10 rows, first 3 columns" },
    ],
    quiz: [
      {
        question: 'You want to select all rows where the "Region" column is "North". How would you do this?',
        options: [ "df.select(df['Region'] == 'North')", "df['Region' == 'North']", "df[df['Region'] == 'North']", "df.filter('Region', 'North')" ],
        correctAnswer: "df[df['Region'] == 'North']",
        explanation: 'This is the standard syntax for boolean filtering. `df[\'Region\'] == \'North\'` creates a boolean Series (True/False), which is then used to filter the rows of the DataFrame.',
      },
      {
        question: 'Which accessor is used for selecting data by its integer position?',
        options: [ '.loc', '.iloc', '.ix', '.pos' ],
        correctAnswer: '.iloc',
        explanation: '`.iloc` stands for "integer location" and is used exclusively for selecting data based on its numerical position in the DataFrame.',
      },
    ],
  },
  {
    id: 5,
    title: 'Data Cleaning (Handling Missing Values)',
    definition: 'Real-world data is often messy and contains missing values (represented as `NaN` in Pandas). Cleaning involves strategies for finding and dealing with this missing data.',
    useCases: [
      'Identifying which columns have the most missing values.',
      'Dropping rows that have missing data in critical columns.',
      'Filling missing numerical data with the mean or median of the column.',
      'Filling missing categorical data with the most frequent value (mode).',
    ],
    tutorial: [
        { step: 1, description: 'Check for Missing Values: `.isnull().sum()` is a vital command. It returns the count of missing values for each column.', example: 'df.isnull().sum()' },
        { step: 2, description: 'Dropping Missing Values: `dropna()` can be used to remove rows or columns with `NaN` values. Use with caution as it can lead to data loss.', example: "df_cleaned = df.dropna()  # Drops any row with at least one NaN" },
        { step: 3, description: 'Filling Missing Values: `fillna()` is often a better approach. You can fill with a specific value, or a calculated value like the mean.', example: "mean_age = df['Age'].mean()\ndf['Age'].fillna(mean_age, inplace=True)" },
        { step: 4, description: 'The `inplace=True` argument modifies the DataFrame directly, without needing to assign it to a new variable. Be careful when using it.' },
    ],
    quiz: [
      {
        question: 'Which method chain would you use to count the number of missing values in each column of a DataFrame `df`?',
        options: [ 'df.missing().count()', 'df.isnull().sum()', 'df.nan().total()', 'df.count_missing()' ],
        correctAnswer: 'df.isnull().sum()',
        explanation: '`.isnull()` returns a DataFrame of booleans (True for NaN), and `.sum()` then treats True as 1 and False as 0, effectively counting the missing values per column.',
      },
      {
        question: 'What does the `fillna()` method do?',
        options: [ 'It deletes rows with missing values.', 'It fills missing (NaN) values with a specified value.', 'It highlights missing values.', 'It returns the count of missing values.' ],
        correctAnswer: 'It fills missing (NaN) values with a specified value.',
        explanation: '`fillna()` is the primary tool for imputing missing data, allowing you to replace `NaN` values with a constant, mean, median, or mode.',
      },
    ],
  },
  {
    id: 6,
    title: 'Group By & Aggregations',
    definition: 'The "Group By" operation involves splitting data into groups based on some criteria, applying a function to each group independently, and combining the results into a data structure. This is the cornerstone of data analysis.',
    useCases: [
      'Calculating the average sales for each region.',
      'Finding the total number of products sold in each category.',
      'Identifying the maximum salary in each department of a company.',
      'Counting the number of customers per country.',
    ],
    tutorial: [
        { step: 1, description: 'The Split-Apply-Combine Pattern: This is the logic behind `.groupby()`. You split the data by a key, apply an aggregation function (like sum, mean, max), and combine the results.'},
        { step: 2, description: 'Group by a Single Column: This example finds the total sales for each region.', example: "regional_sales = df.groupby('Region')['Sales'].sum()" },
        { step: 3, description: 'Group by Multiple Columns: You can group by more than one category. This finds the total sales for each unique combination of Region and Category.', example: "sales_by_region_cat = df.groupby(['Region', 'Category'])['Sales'].sum()" },
        { step: 4, description: 'Multiple Aggregations: Use the `.agg()` method to apply multiple functions at once.', example: "df.groupby('Region')['Sales'].agg(['sum', 'mean', 'count'])" },
    ],
    quiz: [
      {
        question: 'You want to find the average salary for each department in a DataFrame `df`. What is the correct syntax?',
        options: [ "df.groupby('Department')['Salary'].mean()", "df.mean().groupby('Department')", "df.agg(mean, by='Department')", "df.split('Department').mean('Salary')" ],
        correctAnswer: "df.groupby('Department')['Salary'].mean()",
        explanation: 'This follows the standard pattern: group the DataFrame by the "Department" column, select the "Salary" column, and then apply the `.mean()` aggregation.',
      },
      {
        question: 'What does the `.agg()` method allow you to do in a groupby operation?',
        options: [ 'Only calculate the sum', 'Apply multiple aggregation functions at the same time', 'Filter the data before grouping', 'Sort the results' ],
        correctAnswer: 'Apply multiple aggregation functions at the same time',
        explanation: '`.agg()` is a flexible method that lets you compute several summary statistics (like sum, mean, count, min, max) for each group in a single operation.',
      },
    ],
  },
  {
    id: 7,
    title: 'Merging & Joining DataFrames',
    definition: 'Combining data from different DataFrames is a common task. Pandas provides functions like `pd.merge()` to perform SQL-style joins (inner, outer, left, right) on DataFrames.',
    useCases: [
      'Merging a "Sales" DataFrame with a "Customers" DataFrame using a common "CustomerID" column.',
      'Joining employee data with department data to enrich the employee records.',
      'Combining product details with sales transactions.',
    ],
    tutorial: [
        { step: 1, description: 'Setup: Imagine you have a `sales_df` (with OrderID, CustomerID, Amount) and a `customers_df` (with CustomerID, CustomerName, Country).' },
        { step: 2, description: 'Inner Join: `pd.merge()` performs an inner join by default. It combines the two DataFrames, keeping only the rows where the key ("CustomerID") exists in *both* tables.', example: "merged_df = pd.merge(sales_df, customers_df, on='CustomerID')" },
        { step: 3, description: 'Left Join: A left join keeps *all* rows from the left DataFrame (`sales_df`) and matches them with rows from the right DataFrame. If a sale has a CustomerID that isn\'t in the customers table, the customer fields will be `NaN`.', example: "left_join_df = pd.merge(sales_df, customers_df, on='CustomerID', how='left')" },
        { step: 4, description: 'The `on` parameter specifies the key column to join on. If the key has a different name in each DataFrame, you can use the `left_on` and `right_on` parameters.' },
    ],
    quiz: [
      {
        question: 'Which `pd.merge()` join type will keep all rows from the left DataFrame and only the matching rows from the right DataFrame?',
        options: [ 'inner', 'outer', 'right', 'left' ],
        correctAnswer: 'left',
        explanation: 'A left join is essential when you want to enrich one dataset with information from another without losing any records from the original (left) dataset.',
      },
      {
        question: 'What does the `on` parameter in `pd.merge()` specify?',
        options: [ 'The type of join to perform', 'The name of the new merged DataFrame', 'The column name(s) to join on', 'The order to sort the data' ],
        correctAnswer: 'The column name(s) to join on',
        explanation: 'The `on` parameter is critical as it tells Pandas which column contains the common key that should be used to match rows between the two DataFrames.',
      },
    ],
  },
   // Section 3: Data Visualization
  {
    id: 8,
    title: 'Data Visualization Intro',
    definition: 'Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.',
    useCases: [
      'Presenting sales trends to stakeholders.',
      'Identifying correlations between variables.',
      'Communicating complex data stories in a simple, visual format.',
    ],
    tutorial: [
        { step: 1, description: 'Key Libraries: In Python, the most common libraries for plotting are Matplotlib and Seaborn.' },
        { step: 2, description: 'Matplotlib: A powerful and fundamental library that gives you fine-grained control over every aspect of a plot. It can be complex for beginners.' },
        { step: 3, description: 'Seaborn: Built on top of Matplotlib, Seaborn provides a high-level interface for drawing attractive and informative statistical graphics. It works very well with Pandas DataFrames and is often easier to use for common plot types.' },
        { step: 4, description: 'Standard Imports:', example: "import matplotlib.pyplot as plt\nimport seaborn as sns" },
        { step: 5, description: 'The general workflow is: 1. Prepare your data in a Pandas DataFrame. 2. Use a Seaborn or Matplotlib function to create the plot. 3. Use Matplotlib functions like `plt.title()` and `plt.show()` to customize and display the plot.' },
    ],
    quiz: [
      {
        question: 'Which library is built on top of Matplotlib and is often easier to use for creating common statistical plots?',
        options: [ 'Pandas', 'NumPy', 'Seaborn', 'Python' ],
        correctAnswer: 'Seaborn',
        explanation: 'Seaborn simplifies the process of creating beautiful and informative plots, abstracting away much of the complexity of Matplotlib.',
      },
      {
        question: 'What is the standard alias for importing `matplotlib.pyplot`?',
        options: [ 'as mat', 'as plot', 'as mpl', 'as plt' ],
        correctAnswer: 'as plt',
        explanation: 'The convention `import matplotlib.pyplot as plt` is used almost universally in the Python data science community.',
      },
    ],
  },
  {
    id: 9,
    title: 'Bar Charts & Histograms',
    definition: 'A Bar Chart is used to compare values across different discrete categories. A Histogram is used to show the distribution of a single continuous numerical variable by dividing the data into "bins" and counting the frequency in each bin.',
    useCases: [
      'Bar Chart: Comparing sales figures for five different products.',
      'Bar Chart: Showing the population of different countries.',
      'Histogram: Understanding the distribution of customer ages.',
      'Histogram: Visualizing the distribution of exam scores.',
    ],
    tutorial: [
        { step: 1, description: 'Bar Chart with Seaborn: Ideal for showing a value for each category. `x` is the category, `y` is the numerical value.', example: "sns.barplot(x='Region', y='Sales', data=df)\nplt.title('Sales by Region')\nplt.show()" },
        { step: 2, description: 'Histogram with Seaborn: Used for a single numerical column to see its distribution.', example: "sns.histplot(data=df, x='Age', bins=10)\nplt.title('Distribution of Customer Ages')\nplt.show()" },
        { step: 3, description: 'The `bins` parameter in a histogram controls how many bars the data is divided into. Experimenting with this number can help reveal different patterns.' },
    ],
    quiz: [
      {
        question: 'You want to visualize the number of employees in each of the 5 company departments. Which chart type is most appropriate?',
        options: [ 'Histogram', 'Scatter Plot', 'Line Chart', 'Bar Chart' ],
        correctAnswer: 'Bar Chart',
        explanation: 'A bar chart is perfect for comparing a numerical value (number of employees) across discrete categories (departments).',
      },
      {
        question: 'What does a histogram show?',
        options: [ 'The relationship between two variables', 'A comparison across categories', 'The distribution of a single numerical variable', 'A trend over time' ],
        correctAnswer: 'The distribution of a single numerical variable',
        explanation: 'Histograms are specifically designed to help you understand the frequency distribution (shape, center, spread) of your numerical data.',
      },
    ],
  },
  {
    id: 10,
    title: 'Line Charts & Scatter Plots',
    definition: 'A Line Chart displays information as a series of data points connected by straight line segments, typically used to show a trend over time. A Scatter Plot uses dots to represent the values for two different numeric variables, used to observe relationships between them.',
    useCases: [
      'Line Chart: Tracking a company\'s stock price over a year.',
      'Line Chart: Showing monthly website traffic.',
      'Scatter Plot: Investigating the relationship between advertising spend and sales.',
      'Scatter Plot: Comparing people\'s height and weight.',
    ],
    tutorial: [
        { step: 1, description: 'Line Chart with Seaborn: Your DataFrame should have a time-based column (like Date or Month) and a numerical column.', example: "sns.lineplot(x='Month', y='Revenue', data=monthly_df)\nplt.title('Monthly Revenue Trend')\nplt.show()" },
        { step: 2, description: 'Scatter Plot with Seaborn: Used to see if two numerical variables are correlated.', example: "sns.scatterplot(x='Temperature', y='Ice_Cream_Sales', data=df)\nplt.title('Ice Cream Sales vs. Temperature')\nplt.show()" },
        { step: 3, description: 'Interpreting a Scatter Plot: If the dots trend upwards from left to right, it indicates a positive correlation. If they trend downwards, it\'s a negative correlation. If they are spread randomly, there is likely no correlation.' },
    ],
    quiz: [
      {
        question: 'Which chart type is best for showing a trend in a variable over a continuous interval like time?',
        options: [ 'Bar Chart', 'Pie Chart', 'Scatter Plot', 'Line Chart' ],
        correctAnswer: 'Line Chart',
        explanation: 'Line charts are the standard for visualizing time-series data, as the connecting line clearly illustrates the progression and trend of the data points.',
      },
      {
        question: 'You want to see if there is a relationship between the number of hours a student studies and their final exam score. Which plot should you use?',
        options: [ 'Scatter Plot', 'Bar Chart', 'Histogram', 'Line Chart' ],
        correctAnswer: 'Scatter Plot',
        explanation: 'A scatter plot is the ideal choice for visualizing the relationship between two continuous numerical variables.',
      },
    ],
  },
  {
    id: 11,
    title: 'Customizing Plots',
    definition: 'While Seaborn provides great defaults, you often need to customize your plots to make them more readable and professional for presentations.',
    useCases: [
      'Adding a clear and descriptive title to a chart.',
      'Labeling the X and Y axes.',
      'Changing the size of the plot.',
      'Rotating axis labels to prevent them from overlapping.',
    ],
    tutorial: [
        { step: 1, description: 'Most customization is done using Matplotlib functions after creating the plot with Seaborn.' },
        { step: 2, description: 'Set Figure Size: Call `plt.figure()` *before* your Seaborn plot command.', example: "plt.figure(figsize=(10, 6))  # 10 inches wide, 6 inches tall\nsns.barplot(x='Category', y='Sales', data=df)" },
        { step: 3, description: 'Add Title and Labels:', example: "sns.barplot(x='Category', y='Sales', data=df)\nplt.title('Total Sales by Product Category', fontsize=16)\nplt.xlabel('Product Category', fontsize=12)\nplt.ylabel('Total Sales ($)', fontsize=12)" },
        { step:4, description: 'Rotate X-axis Labels: This is useful when you have long category names.', example: "plt.xticks(rotation=45)" },
        { step: 5, description: 'Display the Plot: Always end your plotting code with `plt.show()` to display the final, customized visual.', example: "plt.show()" },
    ],
    quiz: [
      {
        question: 'After creating a plot with `sns.lineplot()`, which Matplotlib function would you use to add a title?',
        options: [ 'plt.add_title()', 'plt.title()', 'plt.set_title()', 'plt.header()' ],
        correctAnswer: 'plt.title()',
        explanation: '`plt.title("Your Title Here")` is the standard Matplotlib function for adding a title to the current plot.',
      },
      {
        question: 'How can you change the size of your entire plot figure?',
        options: [ 'By using the `.resize()` method on the plot object', 'By calling `plt.figure(figsize=(width, height))` before the plotting command', 'By adjusting the axis labels', 'It cannot be changed' ],
        correctAnswer: 'By calling `plt.figure(figsize=(width, height))` before the plotting command',
        explanation: 'Setting the figure size is done at the figure level with Matplotlib before you create the actual plot with Seaborn or other Matplotlib commands.',
      },
    ],
  },
   // Section 4: Mini Project
  {
    id: 12,
    title: 'Applying Your Skills',
    definition: 'The best way to solidify your knowledge is to apply it to a real-world scenario. A typical mini-project involves loading, cleaning, analyzing, and visualizing a dataset to answer a business question.',
    useCases: [
        "Analyzing a sales dataset to find the top-performing products and regions.",
        "Exploring a dataset of movie ratings to see which genres are most popular.",
        "Cleaning and visualizing survey data to understand customer satisfaction.",
    ],
    tutorial: [
        { step: 1, description: 'The Business Question: "Which product categories generate the most sales, and how do sales for these categories trend over time?"' },
        { step: 2, description: 'Load Data: Load your sales data from a CSV file into a Pandas DataFrame.', example: "df = pd.read_csv('sales_data.csv')" },
        { step: 3, description: 'Clean Data: Check for missing values (`df.isnull().sum()`) and ensure data types are correct (`df.info()`). Convert your \'OrderDate\' column to a datetime object.', example: "df['OrderDate'] = pd.to_datetime(df['OrderDate'])" },
        { step: 4, description: 'Analyze - Top Categories: Group by product category and sum the sales to find the top performers.', example: "top_categories = df.groupby('Category')['Sales'].sum().sort_values(ascending=False)" },
        // Fix: Escaped the single quotes around 'OrderDate' to prevent a syntax error.
        { step: 5, description: 'Analyze - Trend Over Time: Create a "Month" column from the \'OrderDate\'. Then group by month and sum the sales.', example: "df['Month'] = df['OrderDate'].dt.to_period('M')\nmonthly_sales = df.groupby('Month')['Sales'].sum()" },
        { step: 6, description: 'Visualize: Create a bar chart for the top categories and a line chart for the monthly sales trend. Use your customization skills to make them clear and professional.' },
    ],
    quiz: [
      {
          question: 'In a typical data analysis project, what is the first step after getting a business question?',
          options: ['Building a machine learning model', 'Creating visualizations', 'Loading and inspecting the data', 'Writing a final report'],
          correctAnswer: 'Loading and inspecting the data',
          explanation: 'Before any analysis can be done, you must first load your data into your environment (e.g., a Pandas DataFrame) and inspect it to understand its structure, quality, and content.'
      },
      {
        question: "If your DataFrame has a date column as a string (e.g., '2023-01-15'), which function is essential for converting it to a proper date type for time-series analysis?",
        options: [ "pd.to_string()", "pd.to_datetime()", "pd.to_date()", "df.convert_date()" ],
        correctAnswer: "pd.to_datetime()",
        explanation: "`pd.to_datetime()` is the standard Pandas function for parsing various string formats and converting them into a datetime object, which unlocks powerful time-based operations."
      }
    ]
  },
];