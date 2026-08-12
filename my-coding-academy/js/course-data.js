const courseData = [
    {
        id: "day-1",
        title: "Day 1: Variables and Data Types",
        content: `
        <h3>Variables and Data Types</h3>
        <p>Variables help us store information in memory so programs can reuse values later. In Python, a variable can hold different kinds of data, and each kind has its own data type.</p>

        <h4>What Are Data Types?</h4>
        <p>Data types tell Python what kind of value is stored inside a variable. This matters because different types behave differently when you print them, compare them, or use them in calculations.</p>

        <h4>Common Python Data Types</h4>
        <ul>
            <li><strong>String</strong> (<code>str</code>) - stores text like names or words</li>
            <li><strong>Integer</strong> (<code>int</code>) - stores whole numbers like <code>10</code> or <code>42</code></li>
            <li><strong>Float</strong> (<code>float</code>) - stores decimal numbers like <code>3.14</code> or <code>99.5</code></li>
            <li><strong>Boolean</strong> (<code>bool</code>) - stores <code>True</code> or <code>False</code></li>
        </ul>

        <h4>Example Values</h4>
        <pre style="background:#090d16; color:#00d2ff; padding:12px; border-radius:6px;">
name = "Raj"         # str
age = 30             # int
height = 5.9         # float
is_teacher = True    # bool</pre>

        <h4>Why This Matters</h4>
        <p>Knowing the correct data type helps you write better programs. For example, you can add integers, compare booleans, and join strings to build messages.</p>
        `,
        description: "Variables help us store information in memory so programs can reuse values later, and data types tell Python what kind of value each variable contains.",
        objectives: [
            "Understand what a variable is",
            "Learn the common Python data types",
            "Recognize the difference between strings, integers, floats, and booleans",
            "See how values are assigned and printed"
        ],
        keyPoints: [
            "Strings store text",
            "Integers store whole numbers",
            "Floats store decimal numbers",
            "Booleans store True or False"
        ],
        note: "A good first habit is to use clear variable names like student_name or marks_total, and always choose the right data type for the value you are storing.",
        codeSnippet: `# Daily Code Practice
name = "Raj"
age = 30
height = 5.9
is_teacher = True

print(type(name))
print(type(age))
print(type(height))
print(type(is_teacher))
print(f"Hello, my name is {name} and I am {age} years old.")`
    },
    {
        id: "day-2",
        title: "Day 2: Mastering Pandas DataFrames",
        content: `
        <h3>Mastering Pandas DataFrames</h3>
        <p>A DataFrame is like a smart table for data analysis. It helps you read CSV files, inspect rows, and work with columns easily.</p>
        `,
        description: "A DataFrame is like a smart table for data analysis. It helps you read CSV files, inspect rows, and work with columns easily.",
        objectives: [
            "Import pandas successfully",
            "Load a CSV file into a DataFrame",
            "Preview the first few rows of data"
        ],
        keyPoints: [
            "pd.read_csv() reads tabular files",
            "head() shows the top rows",
            "Columns are accessed by name"
        ],
        note: "DataFrames are one of the most important tools in AI and machine learning because they make data cleaning and analysis simpler.",
        codeSnippet: `# Importing the library
import pandas as pd

# Reading a dataset
df = pd.read_csv("students_data.csv")
print(df.head())`
    },
    {
        id: "day-3",
        title: "Day 3: Intro to DataFrames: Creating Datasets",
        content: `
        <h3>Creating Your First Pandas DataFrame</h3>
        <p>In Machine Learning, structured datasets are managed using two-dimensional arrays known as <strong>DataFrames</strong>. Below is how you can construct one from scratch using a Python dictionary.</p>
        
        <h4>Key Concepts:</h4>
        <ul>
            <li><strong>Dictionary Keys</strong> become the column names (<code>hours_studied</code>, <code>marks</code>).</li>
            <li><strong>Dictionary Values</strong> (lists) become the rows under each column.</li>
            <li>Pandas automatically assigns an <strong>index</strong> starting at 0 for each row.</li>
        </ul>

        <h4>Expected Console Output:</h4>
        <pre style="background:#090d16; color:#00d2ff; padding:12px; border-radius:6px;">
   hours_studied  marks
0              5     50
1              8     60
2             10     70
3             12     80
4             15     90</pre>
        `,
        description: "Learn how to represent structured tabular data in Python using key-value pairs.",
        objectives: [
            "Understand how dictionaries map into DataFrame columns",
            "See how rows and columns are created in Pandas",
            "Learn why DataFrames are essential in data science"
        ],
        keyPoints: [
            "Columns come from dictionary keys",
            "Rows come from dictionary values",
            "The DataFrame index starts at 0"
        ],
        note: "If the lists inside your dictionary do not have equal length, Pandas will raise a ValueError.",
        codeSnippet: `# Importing Pandas Library
import pandas as pd

# Define raw data using a dictionary
data = {
    "hours_studied": [5, 8, 10, 12, 15],
    "marks": [50, 60, 70, 80, 90]
}

# Convert dictionary to DataFrame
df = pd.DataFrame(data)

# Output the DataFrame
print(df)`
    },
    {
        id: "day-4",
        title: "Day 4: Load Your Dataset (CSV)",
        content: `
        <h3>Load Your Dataset (CSV)</h3>
        <p>CSV files are one of the easiest ways to store datasets. Once loaded, you can inspect the data and prepare it for analysis or machine learning.</p>
    `,
        description: "CSV files are one of the easiest ways to store datasets. Once loaded, you can inspect the data and prepare it for analysis or machine learning.",
        objectives: [
            "Understand what a CSV file is",
            "Load a file into pandas",
            "Check that the data loaded correctly"
        ],
        keyPoints: [
            "CSV stands for comma-separated values",
            "Use read_csv() to load the file",
            "Always check the output with head()"
        ],
        note: "If your file does not load, double-check the filename and make sure it is in the same folder as your Python script.",
        codeSnippet: `import pandas as pd

# Load the CSV file
df = pd.read_csv('your_file.csv')

# View the first 5 rows
print(df.head())`
    },
    {
        id: "pandas-inspection",
        title: "Day 5: Inspecting DataFrames (.head, .info, .describe)",
        content: `
        <h3>Inspecting and Exploring DataFrames</h3>
        <p>Before applying Machine Learning algorithms, you must inspect the raw data to understand its shape, data types, and overall structure.</p>

        <h4>Essential Functions:</h4>
        <ul>
            <li><code>df.head(n)</code> - View top <code>n</code> rows (default 5).</li>
            <li><code>df.tail(n)</code> - View bottom <code>n</code> rows.</li>
            <li><code>df.info()</code> - Display column names, non-null counts, and memory usage.</li>
            <li><code>df.describe()</code> - Calculate statistical summaries (mean, min, max, std).</li>
        </ul>

        <h3>Using <code>iloc</code> to Access Data by Position</h3>
        <p><code>iloc</code> lets you select rows and columns using their integer position, which is useful when you want specific parts of the DataFrame without using column names.</p>

        <h4>How <code>iloc</code> Works:</h4>
        <ul>
            <li><code>df.iloc[0]</code> - Get the first row.</li>
            <li><code>df.iloc[0:3]</code> - Get rows from position 0 up to 2.</li>
            <li><code>df.iloc[0, 1]</code> - Get the value at first row, second column.</li>
            <li><code>df.iloc[:, 1]</code> - Get all rows from the second column.</li>
        </ul>

        <h4>Expected Output for <code>df.describe()</code>:</h4>
        <pre style="background:#090d16; color:#00d2ff; padding:12px; border-radius:6px;">
       hours_studied      marks
count       5.000000   5.000000
mean       10.000000  70.000000
std         3.807887  15.811388
min         5.000000  50.000000
max        15.000000  90.000000</pre>
        `,
        description: "Learn how to inspect datasets using core Pandas summary functions.",
        objectives: [
            "Use head() to preview the top rows",
            "Use tail() to inspect the bottom rows",
            "Use info(), describe(), and iloc() to understand the dataset"
        ],
        keyPoints: [
            "head() and tail() help with quick data checks",
            "info() shows column types and missing values",
            "describe() gives numerical summary statistics",
            "iloc() selects rows and columns by integer position"
        ],
        note: "Inspecting your DataFrame is one of the most important first steps before cleaning or modeling data.",
        codeSnippet: `# Importing Pandas
import pandas as pd

# Sample dataset
data = {
    "hours_studied": [5, 8, 10, 12, 15],
    "marks": [50, 60, 70, 80, 90]
}

df = pd.DataFrame(data)

# 1. Preview top 3 rows
print("--- Top 3 Rows ---")
print(df.head(3))

# 2. View DataFrame Summary & Data Types
print("\\n--- DataFrame Info ---")
df.info()

# 3. View Summary Statistics
print("\\n--- Statistical Summary ---")
print(df.describe())

# 4. Select rows and columns by position
print("\\n--- Using iloc ---")
        print(df.iloc[0])      # First row
        print(df.iloc[0:3])    # First three rows
        print(df.iloc[0, 1])   # First row, second column
        print(df.iloc[:, 1])   # Entire second column`
    },
    {
        id: "day-6",
        title: "Day 6: Exploring DataFrame Operations",
        content: `
        <h3>Exploring DataFrame Operations</h3>
        <p>Once you load a dataset, the next step is to quickly explore its structure, size, columns, and basic statistics. These operations help you understand what is inside your data before cleaning or modeling it.</p>

        <h4>Important DataFrame Commands</h4>
        <ul>
            <li><code>print(df)</code> - displays the full DataFrame.</li>
            <li><code>df.head()</code> - shows the first five entries.</li>
            <li><code>df.shape</code> - returns the number of rows and columns.</li>
            <li><code>df.columns</code> - lists all column names.</li>
            <li><code>df.info()</code> - prints dataset information such as data types and non-null counts.</li>
            <li><code>df.describe()</code> - shows summary statistics for numeric columns.</li>
            <li><code>df.mean()</code> - calculates the average of numeric columns.</li>
            <li><code>df.max()</code> - returns the maximum value in each numeric column.</li>
        </ul>

        <h4>Why These Are Useful</h4>
        <p>These commands help students and data scientists get a quick understanding of the dataset before they start data cleaning, visualization, or machine learning model building.</p>
        `,
        description: "Learn how to explore a DataFrame using common display, summary, and statistics commands.",
        objectives: [
            "Print a DataFrame and preview its rows",
            "Check dataset shape and column names",
            "Use info(), describe(), mean(), and max() for quick analysis"
        ],
        keyPoints: [
            "head() gives the first five rows",
            "shape tells rows and columns",
            "columns lists the DataFrame headers",
            "info(), describe(), mean(), and max() reveal dataset details"
        ],
        note: "These operations are often the first step after loading a dataset because they give a fast summary of the data.",
        codeSnippet: `# Importing Pandas
import pandas as pd

# Sample dataset
data = {
    "hours_studied": [5, 8, 10, 12, 15],
    "marks": [50, 60, 70, 80, 90]
}

df = pd.DataFrame(data)

# 1. Print the full DataFrame
print(df)

# 2. Show first five entries
print("\\n The first five entries are: ", df.head())

# 3. Show dataset shape
print("\\n The shape of the dataset is: ", df.shape)

# 4. Show columns
print("\\n The columns of the dataset are: ", df.columns)

# 5. Show dataset info
print("\\n The dataset info is: ")
df.info()

# 6. Show dataset description
print("\\n The dataset description is : ")
print(df.describe())

# 7. Show averages
print("\\n The Average : ", df.mean())

# 8. Show max values
print("\\n The max value is : ", df.max())`
    },
];
