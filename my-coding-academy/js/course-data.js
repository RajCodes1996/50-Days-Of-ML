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
        title: "Day 4: Create and Load Your Dataset (CSV)",
        content: `
        <h3>Create and Load Your Dataset (CSV)</h3>
        <p>CSV stands for <strong>Comma-Separated Values</strong>. It is a simple file format used to store tabular data, where each row represents one record and each column stores one type of information.</p>

        <h4>CSV Structure</h4>
        <ul>
            <li>The first row usually contains column names, also called headers.</li>
            <li>Each row after the header contains one data entry.</li>
            <li>Values are separated by commas.</li>
            <li>CSV files usually end with the <code>.csv</code> extension.</li>
        </ul>

        <h4>Step 1: Create a Dataset in Python</h4>
        <p>Before loading a CSV, students should understand how a dataset can be created from a Python dictionary. The keys become column names, and the lists become column values.</p>

        <h4>Step 2: Export the Dataset as <code>students_data.csv</code></h4>
        <p><code>df.to_csv("students_data.csv", index=False)</code> saves the DataFrame as a CSV file. The <code>index=False</code> part prevents Pandas from adding an extra index column to the file.</p>

        <h4>Example CSV File</h4>
        <pre style="background:#090d16; color:#00d2ff; padding:12px; border-radius:6px;">
hours_studied,marks
5,50.0
8,60.0
10,70.0
12,60.0
15,60.0</pre>

        <h4>Step 3: Load the CSV Again</h4>
        <p>After creating the CSV file, you can load it back using <code>pd.read_csv("students_data.csv")</code>. This is the usual workflow when working with real datasets.</p>

        <h4>Expected Loaded Data</h4>
        <pre style="background:#090d16; color:#00d2ff; padding:12px; border-radius:6px;">
   hours_studied  marks
0              5   50.0
1              8   60.0
2             10   70.0
3             12   60.0
4             15   60.0</pre>

        <h4>Optional Visualization</h4>
        <p>The same cleaned data can also be visualized with a scatter plot to compare <code>hours_studied</code> and <code>marks</code>.</p>
        `,
        description: "Learn what CSV files are, how to create one from a DataFrame, and how to load it back into Pandas.",
        objectives: [
            "Understand what a CSV file is",
            "Recognize headers, rows, and columns in a dataset",
            "Create a CSV file using to_csv()",
            "Load a CSV file into Pandas using read_csv()",
            "Visualize CSV data with a simple scatter plot"
        ],
        keyPoints: [
            "CSV stands for comma-separated values",
            "Headers become DataFrame column names",
            "Each CSV row becomes one DataFrame row",
            "to_csv() creates a CSV file from a DataFrame",
            "read_csv() loads a CSV file into a DataFrame"
        ],
        note: "This Day 4 lesson now shows the full beginner workflow: create data, clean it, save it as CSV, load it again, and visualize it.",
        codeSnippet: `# Importing required libraries
import pandas as pd
import matplotlib.pyplot as plt
from IPython.display import FileLink, display

# Create a dataset
data = {
    "hours_studied": [5, 8, 10, 12, 15],
    "marks": [50, 60, 70, None, None]
}

df = pd.DataFrame(data)

# Fill missing marks with the average marks
df["marks"] = df["marks"].fillna(df["marks"].mean())

# Create a CSV file
df.to_csv("students_data.csv", index=False)
print("CSV file generated successfully!")

# Print the cleaned DataFrame
print(df)

# Load the created CSV file again
loaded_df = pd.read_csv("students_data.csv")
print("\\nLoaded CSV data:")
print(loaded_df)

# Display a downloadable CSV link in Jupyter Notebook
display(FileLink("students_data.csv"))

# Visualization
plt.scatter(loaded_df["hours_studied"], loaded_df["marks"])
plt.xlabel("hours_studied")
plt.ylabel("marks")
plt.title("Marks Vs Hours_studied")
plt.show()`
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
    {
        id: "day-7",
        title: "Day 7: Handling Missing Values",
        content: `
        <h3>Handling Missing Values in DataFrames</h3>
        <p>Real-world datasets often contain missing values. In Pandas, missing values are usually shown as <code>NaN</code>, and they must be handled before analysis or machine learning.</p>

        <h4>What Happens in This Example?</h4>
        <ul>
            <li>The <code>marks</code> column has two missing values written as <code>None</code>.</li>
            <li>Pandas treats those missing values as <code>NaN</code>.</li>
            <li><code>df["marks"].mean()</code> calculates the average of available marks.</li>
            <li><code>fillna()</code> replaces missing marks with that average.</li>
        </ul>

        <h4>Expected Output</h4>
        <pre style="background:#090d16; color:#00d2ff; padding:12px; border-radius:6px;">
   hours_studied      marks
0              5  50.000000
1              8  60.000000
2             10  70.000000
3             12  60.000000
4             15  60.000000</pre>

        <h4>Why This Matters</h4>
        <p>Many machine learning models cannot work properly with missing values. Filling missing values with the mean is a simple and common first technique for numerical columns.</p>
        `,
        description: "Learn how to find and replace missing values in a DataFrame using fillna() and mean().",
        objectives: [
            "Understand how missing values appear in Pandas",
            "Use mean() to calculate a replacement value",
            "Use fillna() to replace missing values"
        ],
        keyPoints: [
            "None values become NaN in Pandas",
            "mean() ignores missing values by default",
            "fillna() replaces missing values with a chosen value",
            "Handling missing values is part of data cleaning"
        ],
        note: "Mean replacement works well as a beginner-friendly technique for numerical data, but later you can also learn median, mode, dropping rows, and model-based imputation.",
        codeSnippet: `# Importing Pandas
import pandas as pd

# Dataset with missing marks
data = {
    "hours_studied": [5, 8, 10, 12, 15],
    "marks": [50, 60, 70, None, None]
}

df = pd.DataFrame(data)

# Replace missing values in marks with the average marks
df["marks"] = df["marks"].fillna(df["marks"].mean())

print(df)`
    },
    {
        id: "day-8",
        title: "Day 8: Data Visualization with Matplotlib",
        content: `
        <h3>Data Visualization with Matplotlib</h3>
        <p>Data visualization helps us understand patterns in a dataset faster than looking at numbers alone. In this lesson, we clean missing marks, save the dataset as a CSV file, and create a scatter plot showing the relationship between study hours and marks.</p>

        <h4>What This Code Does</h4>
        <ul>
            <li>Creates a small student dataset using <code>hours_studied</code> and <code>marks</code>.</li>
            <li>Fills missing marks using the average mark value.</li>
            <li>Saves the cleaned DataFrame as <code>students_data.csv</code>.</li>
            <li>Uses <code>plt.scatter()</code> to draw a graph of marks against study hours.</li>
        </ul>

        <h4>Graph Preview: Marks vs Hours Studied</h4>
        <svg viewBox="0 0 520 300" role="img" aria-label="Scatter plot showing marks increasing as hours studied increase" style="width:100%; max-width:640px; background:#090d16; border:1px solid #1e293b; border-radius:8px; padding:14px;">
            <line x1="58" y1="236" x2="470" y2="236" stroke="#94a3b8" stroke-width="2"></line>
            <line x1="58" y1="236" x2="58" y2="36" stroke="#94a3b8" stroke-width="2"></line>
            <text x="210" y="282" fill="#cbd5e1" font-size="15">hours_studied</text>
            <text x="8" y="132" fill="#cbd5e1" font-size="15" transform="rotate(-90 16 132)">marks</text>
            <text x="155" y="24" fill="#f8fafc" font-size="18" font-weight="700">Marks Vs Hours Studied</text>
            <circle cx="90" cy="196" r="7" fill="#00d2ff"></circle>
            <circle cx="178" cy="156" r="7" fill="#00d2ff"></circle>
            <circle cx="236" cy="116" r="7" fill="#00d2ff"></circle>
            <circle cx="294" cy="156" r="7" fill="#38bdf8"></circle>
            <circle cx="382" cy="156" r="7" fill="#38bdf8"></circle>
            <text x="78" y="256" fill="#94a3b8" font-size="12">5</text>
            <text x="168" y="256" fill="#94a3b8" font-size="12">8</text>
            <text x="224" y="256" fill="#94a3b8" font-size="12">10</text>
            <text x="284" y="256" fill="#94a3b8" font-size="12">12</text>
            <text x="372" y="256" fill="#94a3b8" font-size="12">15</text>
            <text x="28" y="200" fill="#94a3b8" font-size="12">50</text>
            <text x="28" y="160" fill="#94a3b8" font-size="12">60</text>
            <text x="28" y="120" fill="#94a3b8" font-size="12">70</text>
            <text x="290" y="144" fill="#cbd5e1" font-size="12">filled mean</text>
        </svg>

        <h4>Why This Matters</h4>
        <p>Scatter plots are useful in AI and machine learning because they reveal relationships between two numeric variables. Here, students can see how marks generally change as study hours increase.</p>
        `,
        description: "Learn how to clean missing data, export a CSV file, and visualize a DataFrame using a scatter plot.",
        objectives: [
            "Fill missing values before visualization",
            "Save cleaned data using to_csv()",
            "Create a scatter plot with Matplotlib",
            "Understand the relationship between hours studied and marks"
        ],
        keyPoints: [
            "fillna() prepares missing values for plotting",
            "to_csv() exports the cleaned dataset",
            "scatter() compares two numeric columns",
            "xlabel(), ylabel(), and title() make graphs easier to understand"
        ],
        note: "In notebooks, plt.show() displays the graph output. In regular Python scripts, it opens the Matplotlib graph window.",
        codeSnippet: `# Importing required libraries
import pandas as pd
import matplotlib.pyplot as plt
from IPython.display import FileLink, display

# Dataset with missing values
data = {
    "hours_studied": [5, 8, 10, 12, 15],
    "marks": [50, 60, 70, None, None]
}

df = pd.DataFrame(data)

# Fill missing marks with the average marks
df["marks"] = df["marks"].fillna(df["marks"].mean())

# Export cleaned data to a CSV file
df.to_csv("students_data.csv", index=False)
print("CSV file generated successfully!")

# Display the cleaned DataFrame
print(df)

# Display a downloadable CSV link in Jupyter Notebook
display(FileLink("students_data.csv"))

# Visualization
plt.scatter(df["hours_studied"], df["marks"])
plt.xlabel("hours_studied")
plt.ylabel("marks")
plt.title("Marks Vs Hours_studied")
plt.show()`
    },
    {
        id: "day-9",
        title: "Day 9: Feature Engineering and Sorting Data",
        content: `
        <h3>Feature Engineering and Sorting Data</h3>
        <p>Feature engineering means creating new useful columns from existing data. Sorting helps us arrange data in a meaningful order, such as highest marks first.</p>

        <h4>What This Lesson Covers</h4>
        <ul>
            <li><code>df[df["marks"] > 60]</code> filters rows where marks are greater than 60.</li>
            <li><code>df["performance"] = df["marks"] * 2</code> creates a new feature column.</li>
            <li><code>sort_values()</code> sorts the DataFrame by a selected column.</li>
            <li><code>loc</code> updates a specific row and column value.</li>
            <li><code>fillna()</code> handles missing values after a value is replaced.</li>
        </ul>

        <h4>Example Output After Feature Engineering</h4>
        <pre style="background:#090d16; color:#00d2ff; padding:12px; border-radius:6px;">
    name  hours_studied  marks  performance
0    Raj              5     50          100
1  Shaam              8     60          120
2  Vinod             10     70          140</pre>

        <h4>Why This Matters</h4>
        <p>In machine learning, raw data is rarely perfect. We often filter important rows, create new columns, sort values, and clean missing values before training a model.</p>
        `,
        description: "Learn how to filter rows, create a new feature column, sort data, update values, and handle missing values.",
        objectives: [
            "Filter rows using conditions",
            "Create a new performance feature",
            "Sort a DataFrame by marks",
            "Replace and fill missing values"
        ],
        keyPoints: [
            "Filtering selects rows that match a condition",
            "Feature engineering creates new useful columns",
            "sort_values() arranges rows by a column",
            "loc updates a specific cell",
            "fillna() replaces missing values"
        ],
        note: "Feature engineering is a major part of AI and machine learning because better input columns can help models learn better patterns.",
        codeSnippet: `# Importing Pandas
import pandas as pd

# Create a sample student dataset
data = {
    "name": ["Raj", "Shaam", "Vinod"],
    "hours_studied": [5, 8, 10],
    "marks": [50, 60, 70]
}

df = pd.DataFrame(data)

# Print the original dataset
print(df)
print("\\n")

# Filter students with marks greater than 60
print("Students with marks greater than 60:")
print(df[df["marks"] > 60])
print("\\n")

# Feature engineering: create a new column
df["performance"] = df["marks"] * 2

# Save the dataset with the new column
df.to_csv("Dataset With New Column.csv", index=False)

print("Dataset with new performance column:")
print(df)
print("\\n")

# Sort data by marks in descending order
df_sorted = df.sort_values(by="marks", ascending=False)
print("Sorted dataset by marks:")
print(df_sorted)
print("\\n")

# Replace one value with a missing value
df.loc[2, "marks"] = None
print("Replace Values")
print(df)
print("\\n")

# Handle missing values using mean
df["marks"] = df["marks"].fillna(df["marks"].mean())
print("Handling Missing Values")
print(df)`
    },
];
