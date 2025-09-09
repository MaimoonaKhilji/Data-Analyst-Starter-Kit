import type { ExcelConcept } from './types';

export const POWER_BI_CONCEPTS: ExcelConcept[] = [
  // Section 1: Introduction to Power BI
  {
    id: 1,
    title: 'Intro to Power BI Ecosystem',
    definition: 'Power BI is a collection of software services, apps, and connectors that work together to turn your unrelated sources of data into coherent, visually immersive, and interactive insights. It consists of Power BI Desktop (for authoring), Power BI Service (for sharing), and Power BI Mobile (for viewing).',
    useCases: [
      'Creating interactive sales dashboards that can be accessed by executives on their tablets.',
      'Connecting to multiple data sources (Excel, SQL, web) to build a unified business intelligence report.',
      'Sharing key performance indicators (KPIs) across an organization through the Power BI Service.',
      'Setting up automated data refreshes to ensure reports always show the latest information.',
    ],
    tutorial: [
        { step: 1, description: 'Power BI Desktop: This is the free application you install on your local computer to connect to, transform, and visualize your data. This is where reports are created.' },
        { step: 2, description: 'Power BI Service (app.powerbi.com): This is the cloud-based service (SaaS - Software as a Service) where you publish your reports from Desktop. Here you can share them, create dashboards, and set up refresh schedules.' },
        { step: 3, description: 'Power BI Mobile: These are apps for Windows, iOS, and Android devices that allow you to securely access and view your published reports and dashboards on the go.' },
        { step: 4, description: 'Typical Workflow: 1. Get data and build a report in Power BI Desktop. 2. Publish the report to the Power BI Service. 3. Share the report with others, who can view it in the Service or on their mobile devices.' },
    ],
    quiz: [
      {
        question: 'Where do you typically build and author a Power BI report?',
        options: [ 'Power BI Service', 'Power BI Mobile', 'Power BI Desktop', 'Microsoft Excel' ],
        correctAnswer: 'Power BI Desktop',
        explanation: 'Power BI Desktop is the primary tool for report creation, where you connect to data, model it, and design your report pages with visuals.',
      },
      {
        question: 'What is the main purpose of the Power BI Service?',
        options: [ 'To write complex formulas', 'To clean raw data files', 'To share and collaborate on reports', 'To install on your local computer' ],
        correctAnswer: 'To share and collaborate on reports',
        explanation: 'The Power BI Service is the cloud-based platform for publishing, sharing, and collaborating on the reports you have built in Power BI Desktop.',
      },
    ],
  },
  // Section 2: Getting & Transforming Data
  {
    id: 2,
    title: 'Connecting to Data Sources',
    definition: 'Power BI can connect to a vast number of different data sources, from simple Excel files and CSVs to online services like Salesforce and complex databases like SQL Server or Oracle.',
    useCases: [
      'Importing a local Excel file containing sales data.',
      'Connecting to a corporate SQL Server database to analyze inventory levels.',
      'Pulling data directly from a website table, like a list of stock prices.',
      'Combining data from a folder of monthly CSV report files.',
    ],
    tutorial: [
        { step: 1, description: 'Open Power BI Desktop. On the Home ribbon, click "Get Data".' },
        { step: 2, description: 'A window appears showing common data sources. You can click "More..." to see the full list.' },
        { step: 3, description: 'Select your source. For a simple example, choose "Excel Workbook". Navigate to your file and click "Open".' },
        { step: 4, description: 'The "Navigator" window opens, showing you the sheets and tables within your Excel file. Select the table you want to import.' },
        { step: 5, description: 'You have two choices: "Load" to bring the data directly into your model, or "Transform Data" to open the Power Query Editor first for cleaning. It is almost always best practice to choose "Transform Data".' },
    ],
    quiz: [
      {
        question: 'Which button on the Home ribbon is the starting point for connecting to any new data source?',
        options: [ 'Publish', 'Get Data', 'New Visual', 'Transform Data' ],
        correctAnswer: 'Get Data',
        explanation: 'The "Get Data" dropdown is the central hub for connecting to all supported data sources in Power BI.',
      },
      {
        question: 'After connecting to a data source, what is the recommended next step for a data analyst?',
        options: [ 'Load the data immediately', 'Publish the report', 'Choose "Transform Data" to open the Power Query Editor', 'Start creating visuals' ],
        correctAnswer: 'Choose "Transform Data" to open the Power Query Editor',
        explanation: 'It is a best practice to always review and clean your data in the Power Query Editor before loading it into the data model.',
      },
    ],
  },
  {
    id: 3,
    title: 'Power Query Editor',
    definition: 'The Power Query Editor is the data transformation engine within Power BI. It allows you to clean, shape, and reshape your data using a graphical interface. Every transformation step is recorded and can be refreshed automatically.',
    useCases: [
      'Removing unnecessary rows and columns from a data export.',
      'Splitting a "Full Name" column into "First Name" and "Last Name".',
      'Changing data types (e.g., from text to number or date).',
      'Unpivoting data to turn it from a wide format to a tall, database-friendly format.',
      'Merging data from two different queries (e.g., sales data and product details).',
    ],
    tutorial: [
        { step: 1, description: 'After clicking "Transform Data", the Power Query Editor opens in a new window.' },
        { step: 2, description: 'The main area shows a preview of your data.' },
        { step: 3, description: 'On the right, the "Applied Steps" pane is crucial. It records every change you make. You can click on a step to see how the data looked at that point, or click the "X" to delete a step.' },
        { step: 4, description: 'Example Transformation: Right-click the header of a column you don\'t need and select "Remove". Notice a "Removed Columns" step appears in the Applied Steps pane.' },
        { step: 5, description: 'Example Transformation 2: Click the icon (e.g., ABC, 123) in a column header to change its data type. A "Changed Type" step is recorded.' },
        { step: 6, description: 'Once you are done with all your transformations, click "Close & Apply" on the Home ribbon to load the clean data into your model.' },
    ],
    quiz: [
      {
        question: 'What is the purpose of the "Applied Steps" pane in the Power Query Editor?',
        options: [ 'To list all the charts in your report', 'To record every transformation you make to the data', 'To manage relationships', 'To write DAX formulas' ],
        correctAnswer: 'To record every transformation you make to the data',
        explanation: 'The "Applied Steps" pane is the heart of Power Query, as it creates a repeatable sequence of cleaning steps that can be refreshed automatically.',
      },
      {
        question: 'How do you load your cleaned data from Power Query back into the main Power BI report?',
        options: [ 'Click "Save As"', 'Click "Get Data"', 'Click "Close & Apply"', 'Click "Publish"' ],
        correctAnswer: 'Click "Close & Apply"',
        explanation: '"Close & Apply" closes the Power Query Editor and applies all the recorded transformation steps, loading the resulting clean data into the data model.',
      },
    ],
  },
  // Section 3: Data Modeling
  {
    id: 4,
    title: 'Relationships & Data Model',
    definition: 'The Data Model is where you connect different tables together using relationships. This allows you to analyze data across multiple tables. A common model is a "star schema," with a central "fact" table (like Sales) connected to multiple "dimension" tables (like Products, Customers, Calendar).',
    useCases: [
      'Connecting a Sales table to a Products table so you can filter sales by product category.',
      'Linking an HR Data table to a Calendar table to analyze hiring trends over time.',
      'Building a model that allows a single visual to show data from three different sources.',
    ],
    tutorial: [
        { step: 1, description: 'After loading your tables (e.g., a Sales table and a Products table), go to the "Model" view in Power BI Desktop (the third icon on the left pane).' },
        { step: 2, description: 'You will see boxes representing each of your tables.' },
        { step: 3, description: 'To create a relationship, find the common key field in both tables (e.g., "ProductID").' },
        { step: 4, description: 'Click and drag the "ProductID" field from the Sales (fact) table and drop it onto the "ProductID" field in the Products (dimension) table.' },
        { step: 5, description: 'A line will appear connecting the tables. This line represents the relationship. You can double-click it to edit its properties, like cardinality (e.g., one-to-many).' },
        { step: 6, description: 'Now, in the "Report" view, you can create a chart that uses "Product Category" (from the Products table) and "Sales Amount" (from the Sales table), and it will work correctly.' },
    ],
    quiz: [
      {
        question: 'In a star schema, what is a "dimension" table?',
        options: [ 'A table containing transactional data like sales figures', 'A table that describes business entities (e.g., Products, Customers, Dates)', 'The main table in the model', 'A table used only for calculations' ],
        correctAnswer: 'A table that describes business entities (e.g., Products, Customers, Dates)',
        explanation: 'Dimension tables contain descriptive, categorical information (the "who, what, where, when") that you use to filter and group the numerical data in your fact tables.',
      },
      {
        question: 'How do you create a relationship between two tables in the Model view?',
        options: [ 'Write a DAX formula', 'Use Power Query', 'Drag a common key field from one table to another', 'Publish the report' ],
        correctAnswer: 'Drag a common key field from one table to another',
        explanation: 'The drag-and-drop method in the Model view is the standard, visual way to establish relationships between tables in Power BI.',
      },
    ],
  },
  {
    id: 5,
    title: 'Cardinality',
    definition: 'Cardinality describes the direction and uniqueness of a relationship between two tables. The most common types are one-to-many (*:1), one-to-one (1:1), and many-to-many (*:*). Getting this right is critical for accurate calculations.',
    useCases: [
      'A one-to-many relationship from a Products table to a Sales table (one product can have many sales). This is the most common and ideal type.',
      'A one-to-one relationship between an Employees table and an EmployeeLogins table where each employee has only one login.',
      'A many-to-many relationship between a Students table and a Classes table (a student can take many classes, and a class can have many students).',
    ],
    tutorial: [
        { step: 1, description: 'One-to-Many (*:1): This is the ideal relationship type. The "one" side is a dimension table (like Products) with a unique key for each row (e.g., ProductID). The "many" side is a fact table (like Sales) where the key can appear multiple times.'},
        { step: 2, description: 'How it works: When you filter by "Product Category" from the "one" side, the filter flows "downhill" to the "many" side, filtering the Sales table to only show sales for products in that category.' },
        { step: 3, description: 'One-to-One (1:1): This is less common. It means a key is unique in both tables. This is often used to split a very wide table into smaller, more manageable ones.' },
        { step:4, description: 'Many-to-Many (*:*): Power BI supports this, but it should be used with caution as it can introduce ambiguity. It often requires a "bridge" table to be properly modeled as two one-to-many relationships.' },
        { step: 5, description: 'To view or change cardinality, double-click the relationship line in the Model view to open the properties dialog.' },
    ],
    quiz: [
      {
        question: 'What is the most common and recommended type of cardinality in a Power BI data model?',
        options: [ 'One-to-one (1:1)', 'Many-to-many (*:*)', 'One-to-many (*:1)', 'No relationship' ],
        correctAnswer: 'One-to-many (*:1)',
        explanation: 'A one-to-many relationship is the foundation of a star schema and provides clear, unambiguous filter propagation from dimension tables to fact tables.',
      },
      {
        question: 'You have a table of Customers and a table of Sales Orders. What kind of relationship would you expect between them?',
        options: [ 'One-to-many (one customer can have many orders)', 'One-to-one (one customer has one order)', 'Many-to-many', 'No relationship is possible' ],
        correctAnswer: 'One-to-many (one customer can have many orders)',
        explanation: 'A single customer can place multiple orders over time, but each order belongs to only one customer. This is a classic one-to-many relationship.',
      },
    ],
  },
  // Section 4: DAX
  {
    id: 6,
    title: 'Calculated Columns vs. Measures',
    definition: 'DAX (Data Analysis Expressions) is the formula language of Power BI. You can write DAX in two main contexts: Calculated Columns, which create a new column in a table, and Measures, which create an aggregate calculation.',
    useCases: [
      'Calculated Column: Creating a "Full Name" column by combining "First Name" and "Last Name" columns.',
      'Calculated Column: Categorizing products into "High Price" or "Low Price" based on their list price.',
      'Measure: Calculating the "Total Sales" to be used in a chart.',
      'Measure: Creating a "% of Total" calculation that changes dynamically based on filters.',
    ],
    tutorial: [
        { step: 1, description: 'Calculated Column: Computed row-by-row during data refresh. It uses the current row as its context. It is physically stored in your model, so it consumes memory and increases file size.'},
        { step: 2, description: 'To create one: Go to the Data view, select the table, and on the Table Tools ribbon, click "New Column". Then write the DAX formula, e.g., `FullName = [FirstName] & " " & [LastName]`.'},
        { step: 3, description: 'Measure: Computed at query time (when you use it in a visual). It operates over a set of rows defined by the filters in your report (filter context). It is not stored in the model, so it doesn\'t increase file size.' },
        { step: 4, description: 'To create one: Go to the Report view, select the table you want it to "live" in, and on the Home ribbon, click "New Measure". Then write the DAX formula, e.g., `Total Sales = SUM(Sales[SalesAmount])`.'},
        { step: 5, description: 'Rule of Thumb: If you need to see the value in a row or use it to slice/filter your data (like a category), use a calculated column. For any aggregation (Sum, Average, Count) that will be displayed in a visual, always use a measure.' },
    ],
    quiz: [
      {
        question: 'Which DAX object is calculated at query time and responds dynamically to filters in a report?',
        options: [ 'Calculated Column', 'Measure', 'Relationship', 'Power Query' ],
        correctAnswer: 'Measure',
        explanation: 'Measures are the cornerstone of dynamic analysis in Power BI, as their results are calculated on-the-fly based on the context provided by filters, slicers, and visual interactions.',
      },
      {
        question: 'You want to create a new column in your Products table called "Price Tier" (e.g., "High", "Low") based on the existing Price column. What should you create?',
        options: [ 'A Measure', 'A Calculated Column', 'A Relationship', 'A new data source' ],
        correctAnswer: 'A Calculated Column',
        explanation: 'This is a classic use case for a calculated column because you need to evaluate and store a value for each individual row, and you might want to use this new "Price Tier" category to filter or group your data.',
      },
    ],
  },
  {
    id: 7,
    title: 'DAX Fundamentals (SUM, AVERAGE, COUNTROWS)',
    definition: 'These are some of the most basic but essential DAX aggregation functions. They work similarly to their Excel counterparts but are used within measures to create dynamic calculations.',
    useCases: [
        'Creating a "Total Revenue" measure using SUM.',
        'Calculating the "Average Deal Size" using AVERAGE.',
        'Finding the "Number of Transactions" using COUNTROWS on the sales table.',
    ],
    tutorial: [
        { step: 1, description: 'Create a Measure Table: It is best practice to create a blank table to hold all your measures. On the Home ribbon, click "Enter Data", name the table "_Measures", and click "Load".' },
        { step: 2, description: 'Total Sales Measure: Right-click your "_Measures" table and select "New Measure".', example: 'Total Sales = SUM(Sales[Sales Amount])' },
        { step: 3, description: 'Transaction Count Measure: Create another new measure.', example: 'Transaction Count = COUNTROWS(Sales)' },
        { step: 4, description: 'Average Sale Measure: Create a third measure. You can reference other measures within a new measure.', example: 'Average Sale Value = DIVIDE([Total Sales], [Transaction Count])' },
        { step: 5, description: 'Using DIVIDE is safer than using the `/` operator, as it gracefully handles division by zero by default.' },
    ],
    quiz: [
      {
        question: 'Which DAX function would you use to count the total number of rows in your "Sales" table?',
        options: [ 'COUNT(Sales)', 'ROWS(Sales)', 'COUNTROWS(Sales)', 'SUM(Sales)' ],
        correctAnswer: 'COUNTROWS(Sales)',
        explanation: 'COUNTROWS is the standard and most efficient DAX function for counting the number of rows in an entire table.',
      },
      {
        question: 'What is the benefit of using the DIVIDE function instead of the `/` operator in DAX?',
        options: [ 'It is faster', 'It automatically handles division by zero errors', 'It only works with whole numbers', 'It can divide text' ],
        correctAnswer: 'It automatically handles division by zero errors',
        explanation: 'Using DIVIDE([Numerator], [Denominator]) is best practice because it prevents your visuals from showing errors if the denominator happens to be zero.',
      },
    ],
  },
  {
    id: 8,
    title: 'DAX: CALCULATE',
    definition: 'CALCULATE is the most important and powerful function in DAX. It modifies the "filter context" in which a calculation is performed. It allows you to override existing filters or apply new ones for a specific calculation.',
    useCases: [
      'Calculating the total sales for a specific region ("North") regardless of what other filters are selected.',
      'Calculating the sales for the previous year.',
      'Finding the total sales for all product categories except for one.',
      'Creating complex time-intelligence calculations.',
    ],
    tutorial: [
        { step: 1, description: 'The syntax is `CALCULATE(<expression>, <filter1>, <filter2>, ...)`.' },
        { step: 2, description: '`<expression>` is usually a measure, like `[Total Sales]`.' },
        { step: 3, description: '`<filter>` is a condition that modifies the context.' },
        { step: 4, description: 'Example 1: Sales for a specific product category. This measure will ONLY show sales for "Bikes", no matter what the user clicks on in a slicer.', example: 'Bike Sales = CALCULATE([Total Sales], Products[Category] = "Bikes")' },
        { step: 5, description: 'Example 2: Sales for everything *except* bikes. The ALL function removes existing filters on a column.', example: 'Total Sales All Categories = CALCULATE([Total Sales], ALL(Products[Category]))' },
        { step: 6, description: 'CALCULATE is the key to unlocking advanced analytics in DAX. It allows you to create calculations that compare values across different contexts.' },
    ],
    quiz: [
      {
        question: 'What is the primary purpose of the CALCULATE function in DAX?',
        options: [ 'To sum a column', 'To count rows', 'To modify the filter context for a calculation', 'To format numbers' ],
        correctAnswer: 'To modify the filter context for a calculation',
        explanation: 'CALCULATE is unique because it allows you to change the filters that are being applied to a measure, which is essential for creating comparative and advanced analytics.',
      },
      {
        question: 'How would you write a measure to calculate the total sales for just the "USA" region?',
        options: [ 'SUM(Sales[Sales Amount]) WHERE Region = "USA"', 'CALCULATE([Total Sales], Sales[Region] = "USA")', 'TOTALSALES(Region="USA")', 'IF(Sales[Region]="USA", SUM(Sales[Sales Amount]))' ],
        correctAnswer: 'CALCULATE([Total Sales], Sales[Region] = "USA")',
        explanation: 'This is the correct syntax. The first argument is the base measure, and the second is the filter condition that CALCULATE will apply.',
      },
    ],
  },
  // Section 5: Visualization
  {
    id: 9,
    title: 'Creating Visuals',
    definition: 'Power BI offers a wide range of visuals, from standard bar and line charts to maps and funnel charts. You create a visual by selecting it from the Visualizations pane and dragging data fields into its properties.',
    useCases: [
      'Using a Bar Chart to compare sales across different product categories.',
      'Using a Line Chart to show revenue trends over time.',
      'Using a Map visual to display sales by state or country.',
      'Using a Card visual to show a single, important KPI like "Total Revenue".',
    ],
    tutorial: [
        { step: 1, description: 'Go to the "Report" view in Power BI Desktop.' },
        { step: 2, description: 'In the "Visualizations" pane on the right, click the icon for a "Stacked column chart". A blank placeholder for the visual will appear on your report canvas.' },
        { step: 3, description: 'With the visual selected, look at the "Fields" area of the Visualizations pane. You will see "Y-axis", "X-axis", "Legend", etc.' },
        { step: 4, description: 'From your "Fields" pane (your data tables), drag your "Sales Amount" measure to the "Y-axis" well.' },
        { step: 5, description: 'Drag a date field (like "Month") to the "X-axis" well.' },
        { step: 6, description: 'Drag a category field (like "Product Category") to the "Legend" well. The columns are now subdivided by category.' },
        { step: 7, description: 'You have now created a basic visual. You can resize it and move it around on the canvas.' },
    ],
    quiz: [
      {
        question: 'Which pane in Power BI Desktop contains the different types of charts you can create?',
        options: [ 'Fields pane', 'Filters pane', 'Visualizations pane', 'Data pane' ],
        correctAnswer: 'Visualizations pane',
        explanation: 'The Visualizations pane is where you select the type of visual (bar chart, line chart, etc.) you want to add to your report canvas.',
      },
      {
        question: 'To display a single important number like total profit, which visual is most appropriate?',
        options: [ 'Card', 'Pie Chart', 'Table', 'Map' ],
        correctAnswer: 'Card',
        explanation: 'The Card visual is specifically designed to showcase a single, aggregated number in a large, clear format, making it perfect for KPIs.',
      },
    ],
  },
  {
    id: 10,
    title: 'Formatting & Slicers',
    definition: 'Formatting allows you to customize the appearance of your visuals (colors, labels, titles). Slicers are a user-friendly type of visual that allows report viewers to easily filter the data on the page.',
    useCases: [
      'Changing the colors of a bar chart to match corporate branding.',
      'Adding data labels to a line chart to make specific values easier to read.',
      'Creating a "Year" slicer so users can select which year of data they want to view.',
      'Using a slicer with product categories to let users filter the entire report page.',
    ],
    tutorial: [
        { step: 1, description: 'Formatting: Select a visual on your canvas. In the Visualizations pane, click the "Format your visual" icon (a paintbrush).'},
        { step: 2, description: 'You will now see a list of formatting options like "X-axis", "Y-axis", "Data labels", "Title". You can expand each section to customize its properties.'},
        { step: 3, description: 'Creating a Slicer: Click on a blank area of your report canvas to de-select any visuals.'},
        { step: 4, description: 'In the Visualizations pane, click the "Slicer" icon.'},
        { step: 5, description: 'A blank slicer will appear. From your "Fields" pane, drag the field you want to filter by (e.g., "Year" from your Calendar table) into the "Field" well of the slicer.'},
        { step: 6, description: 'The slicer is now functional. Clicking on a year in the slicer will filter all other visuals on the report page.'},
    ],
    quiz: [
      {
        question: 'What is the purpose of a Slicer in a Power BI report?',
        options: [ 'To perform a mathematical calculation', 'To provide an on-canvas filter for users', 'To change the color of a chart', 'To connect to a new data source' ],
        correctAnswer: 'To provide an on-canvas filter for users',
        explanation: 'Slicers are a type of visual whose sole purpose is to provide a simple and intuitive way for report consumers to filter the data they are looking at.',
      },
      {
        question: 'Where would you go to add a title to your bar chart?',
        options: [ 'In the Power Query Editor', 'In the Model view', 'By creating a DAX measure', 'In the "Format your visual" pane for that chart' ],
        correctAnswer: 'In the "Format your visual" pane for that chart',
        explanation: 'All aesthetic customizations, such as titles, colors, fonts, and labels, are managed in the "Format your visual" section of the Visualizations pane.',
      },
    ],
  },
  {
    id: 11,
    title: 'Filters Pane',
    definition: 'The Filters pane provides a more powerful and detailed way to filter data. You can apply filters to a specific visual, to an entire report page, or to all pages in the report. These filters can be locked and hidden from end-users.',
    useCases: [
      'Filtering a specific chart to exclude a certain category without affecting other charts.',
      'Applying a filter to an entire report page, for example, to show data for the "Current Fiscal Year" only.',
      'Applying a report-level filter to exclude all test data or internal transactions from the entire report.',
      'Using "Top N" filtering to show only the Top 10 products by sales.',
    ],
    tutorial: [
        { step: 1, description: 'The Filters pane is visible on the right side of the Report view, next to the Visualizations pane.' },
        { step: 2, description: 'Filter on this visual: Select a visual. Drag a field into this section of the Filters pane to apply a filter that affects *only* that selected visual.' },
        { step: 3, description: 'Filter on this page: Drag a field into this section to apply a filter to *all* visuals on the current report page.' },
        { step:4, description: 'Filter on all pages: Drag a field here to apply a global filter to every page in your report. This is useful for things like filtering out irrelevant data for the entire report.' },
        { step: 5, description: 'After dragging a field, you can set the filter type (e.g., Basic, Advanced, Top N) and select the values you want to filter by.' },
    ],
    quiz: [
      {
        question: 'You want to filter one specific chart on your report page but leave all other charts unaffected. Where should you apply the filter?',
        options: [ 'In the "Filter on this page" section', 'In the "Filter on all pages" section', 'In the "Filter on this visual" section', 'By creating a Slicer' ],
        correctAnswer: 'In the "Filter on this visual" section',
        explanation: 'This section of the Filters pane is specifically for applying filters that are scoped to a single, selected visual.',
      },
      {
        question: 'What is a key difference between a Slicer and a filter in the Filters pane?',
        options: [ 'Slicers cannot filter dates', 'Filters in the pane can be hidden from the end-user, while Slicers are always visible on the canvas', 'Slicers are less effective', 'Filters in the pane cannot be used for "Top N" filtering' ],
        correctAnswer: 'Filters in the pane can be hidden from the end-user, while Slicers are always visible on the canvas',
        explanation: 'This is a major advantage of the Filters pane. You can apply a permanent filter to a report (e.g., removing old data) and hide it, so the user isn\'t confused by it.',
      },
    ],
  },
  // Section 6: Power BI Service
  {
    id: 12,
    title: 'Publishing & Sharing',
    definition: 'Publishing is the process of sending your report from Power BI Desktop to the Power BI Service. Once in the Service, you can share it with colleagues, who can view it in their web browsers or mobile devices.',
    useCases: [
      'Publishing a completed sales report to a "Sales Team" workspace in the Power BI Service.',
      'Sharing a report with a manager for review.',
      'Granting viewers access to a report without allowing them to edit it.',
    ],
    tutorial: [
        { step: 1, description: 'In Power BI Desktop, once your report is ready, click the "Publish" button on the Home ribbon.' },
        { step: 2, description: 'You will be prompted to sign in to your Power BI account and then choose a "workspace" to publish to. A workspace is like a folder for your content.' },
        { step: 3, description: 'After publishing is successful, you will get a link to open the report in the Power BI Service.' },
        { step: 4, description: 'In the Service, open your report. Click the "Share" button at the top.' },
        { step: 5, description: 'You can then enter the email addresses of your colleagues and choose what permissions they have (e.g., view only, or view and re-share).'},
    ],
    quiz: [
      {
        question: 'What is the action of moving a report from Power BI Desktop to the Power BI Service called?',
        options: [ 'Saving', 'Exporting', 'Publishing', 'Loading' ],
        correctAnswer: 'Publishing',
        explanation: '"Publishing" is the specific term for uploading your PBIX file from Desktop to the cloud-based Power BI Service.',
      },
      {
        question: 'What is a "workspace" in the Power BI Service?',
        options: [ 'The canvas where you build visuals', 'A container for collaboration and storing related reports, dashboards, and datasets', 'A type of DAX formula', 'The Power Query Editor' ],
        correctAnswer: 'A container for collaboration and storing related reports, dashboards, and datasets',
        explanation: 'Workspaces are the primary way to organize and manage content and security in the Power BI Service.',
      },
    ],
  },
  {
    id: 13,
    title: 'Dashboards',
    definition: 'A Power BI dashboard is a single canvas that displays "tiles," which are visualizations pinned from one or more reports. Dashboards provide a high-level, at-a-glance view of the most important metrics.',
    useCases: [
      'Creating an "Executive Dashboard" that shows top-line KPIs from sales, finance, and marketing reports all in one place.',
      'Pinning a single, crucial KPI card to a dashboard for easy monitoring.',
      'Setting up data alerts on a dashboard tile to be notified when a metric crosses a certain threshold.',
    ],
    tutorial: [
        { step: 1, description: 'Report vs. Dashboard: A report can have many interactive pages. A dashboard is a single page, and clicking a tile takes you *to* the underlying report page.' },
        { step: 2, description: 'In the Power BI Service, open a report.' },
        { step: 3, description: 'Hover over a visual that you want to add to a dashboard. You will see a "Pin visual" icon (a pushpin).' },
        { step: 4, description: 'Click the pin icon. A dialog will ask if you want to pin to an "Existing dashboard" or a "New dashboard".' },
        { step: 5, description: 'Choose "New dashboard", give it a name, and click "Pin".' },
        { step: 6, description: 'You can now navigate to your new dashboard to see the pinned visual (called a "tile"). You can resize and rearrange tiles on the dashboard canvas.' },
    ],
    quiz: [
      {
        question: 'What is a key difference between a Report and a Dashboard in the Power BI Service?',
        options: [ 'Reports are not interactive', 'Dashboards are built in Power BI Desktop', 'A Dashboard is a single page that contains tiles pinned from reports', 'Reports cannot be shared' ],
        correctAnswer: 'A Dashboard is a single page that contains tiles pinned from reports',
        explanation: 'This is the fundamental difference. Reports are the detailed, multi-page source, and dashboards are the single-page, consolidated summary view.',
      },
      {
        question: 'How do you add a visual from a report to a dashboard?',
        options: [ 'By taking a screenshot', 'By using the "Pin visual" feature', 'By exporting to PowerPoint', 'By recreating the visual on the dashboard' ],
        correctAnswer: 'By using the "Pin visual" feature',
        explanation: 'Pinning is the specific action you take in a report to add a live visual tile to a dashboard.',
      },
    ],
  },
  {
    id: 14,
    title: 'Scheduled Refresh',
    definition: 'Scheduled Refresh is a feature in the Power BI Service that automatically updates the dataset for your reports from the original data sources. This ensures that your reports are always showing up-to-date information without manual intervention.',
    useCases: [
      'Setting a sales dashboard to refresh every morning at 8 AM before the team starts work.',
      'Scheduling a weekly refresh for a project status report.',
      'Ensuring that an inventory report connected to a live database is refreshed every hour.',
    ],
    tutorial: [
        { step: 1, description: 'For this to work with on-premises data sources (like a local SQL Server or Excel file), you need a "Data Gateway" installed on a machine that is always on. For cloud sources (like SharePoint or Azure SQL), no gateway is needed.' },
        { step: 2, description: 'In the Power BI Service, navigate to the workspace containing your report.' },
        { step: 3, description: 'Find the "Dataset" for your report (it will have the same name), click the ellipsis (...) and select "Settings".' },
        { step: 4, description: 'In the Settings, expand the "Scheduled refresh" section.' },
        { step: 5, description: 'Toggle the refresh on, set the refresh frequency (Daily/Weekly), select a time zone, and add the times you want the refresh to run.' },
        { step: 6, description: 'Click "Apply". The Power BI Service will now attempt to connect to your data sources and refresh the dataset at the times you specified.' },
    ],
    quiz: [
      {
        question: 'Where do you configure a scheduled refresh for a dataset?',
        options: [ 'In Power BI Desktop', 'In the Power BI Mobile App', 'In the Dataset Settings within the Power BI Service', 'In the report\'s Filters pane' ],
        correctAnswer: 'In the Dataset Settings within the Power BI Service',
        explanation: 'Scheduled refresh is a feature of the Power BI Service and is managed at the dataset level, not the report level.',
      },
      {
        question: 'What piece of software is often required to refresh a dataset from an on-premises data source like a local file server?',
        options: [ 'Power BI Desktop', 'An On-premises Data Gateway', 'Microsoft Office', 'A web browser' ],
        correctAnswer: 'An On-premises Data Gateway',
        explanation: 'The gateway acts as a secure bridge, allowing the cloud-based Power BI Service to connect to and retrieve data from sources inside your company\'s local network.',
      },
    ],
  },
  {
    id: 15,
    title: 'Row-Level Security (RLS)',
    definition: 'Row-Level Security (RLS) restricts data access for given users. Filters are applied at the row level, meaning different users can view the same report but see different data based on their role or department. This allows you to create one report for all users instead of separate reports for each group.',
    useCases: [
        "Allowing Regional Managers to see sales data only for their own region.",
        "Ensuring that individual sales representatives can only see their own sales performance and not their colleagues'.",
        "Restricting access to sensitive HR data so that managers can only see information for their direct reports.",
    ],
    tutorial: [
        { step: 1, description: 'Define Roles in Power BI Desktop: On the Modeling ribbon, click "Manage Roles".' },
        { step: 2, description: 'Create a New Role: In the dialog, click "Create" and name your role (e.g., "US Sales Manager").' },
        { step: 3, description: 'Write a DAX Filter Expression: Select the role. On a table (e.g., the "Sales" table), write a DAX expression that filters the data. The expression must return a TRUE/FALSE value.', example: '[Region] = "USA"' },
        { step: 4, description: 'Verify the Role: Still on the Modeling ribbon, click "View as" and select the role you created. Your report will now be filtered as if you were that user. This is for testing.' },
        { step: 5, description: 'Publish and Assign Users in Service: After publishing your report, go to the Dataset Settings in the Power BI Service and find the "Security" section.' },
        { step: 6, description: 'You will see the roles you created. You can now add the email addresses of your colleagues to the appropriate roles. When they view the report, the RLS filter will be applied for them.' },
    ],
    quiz: [
      {
          question: 'What is the primary benefit of using Row-Level Security (RLS)?',
          options: ['It makes reports run faster.', 'It allows you to secure a report so different users see different data.', 'It automatically creates charts.', 'It helps you write DAX formulas.'],
          correctAnswer: 'It allows you to secure a report so different users see different data.',
          explanation: 'RLS is a security feature designed to filter data based on the user\'s identity, enabling a single report to serve multiple audiences with different data access rights.'
      },
      {
        question: 'Where do you first define the roles and DAX filter rules for RLS?',
        options: [ 'In the Power BI Service', 'In the Power Query Editor', 'In Power BI Desktop on the Modeling tab', 'In the Power BI Mobile app' ],
        correctAnswer: 'In Power BI Desktop on the Modeling tab',
        explanation: 'The entire structure of RLS, including the creation of roles and the definition of their filter rules, is built in Power BI Desktop before the report is published.'
      }
    ]
  },
];
