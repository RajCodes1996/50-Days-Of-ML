ere is the next lesson on Selecting and Filtering Data, covering column selection, condition-based filtering, and indexing with .loc[] and .iloc[].

HTML
<div class="lesson-container">
    <header class="lesson-header">
        <span class="badge">Module 1: Data Handling</span>
        <h2>Selecting and Filtering Data</h2>
        <p class="subtitle">Master extracting specific columns, filtering rows by conditions, and index-based slicing.</p>
    </header>

    <section class="lesson-section">
        <h3>1. Concept Overview</h3>
        <p>In real-world AIML datasets, you rarely use all columns and rows at once. Filtering allows you to isolate features (inputs) and targets (outputs), or isolate specific instances matching custom criteria.</p>
    </section>

    <section class="lesson-section">
        <h3>2. Selection Techniques</h3>
        <div class="explanation-cards">
            <div class="card">
                <h4>Selecting Columns</h4>
                <p>Pass a column name string <code>df['marks']</code> to get a Series, or a list of strings <code>df[['hours_studied', 'marks']]</code> to get a DataFrame subset.</p>
            </div>
            <div class="card">
                <h4>Boolean Filtering</h4>
                <p>Pass a condition like <code>df[df['marks'] >= 70]</code> to return only the rows where the condition evaluates to <code>True</code>.</p>
            </div>
            <div class="card">
                <h4><code>.iloc[]</code> (Integer Position)</h4>
                <p>Selects rows and columns purely by numerical index position (e.g., <code>df.iloc[0:3, 0]</code> gets rows 0–2 for column 0).</p>
            </div>
            <div class="card">
                <h4><code>.loc[]</code> (Label Indexing)</h4>
                <p>Selects rows and columns based on explicit index labels or conditional expressions.</p>
            </div>
        </div>
    </section>
</div>
Integration into course-data.js
Add this object as the next entry in your courseData array:

JavaScript
{
    id: "pandas-filtering",
    title: "Day 6: Selecting & Filtering Data",
    content: `
        <h3>Selecting & Filtering Data</h3>
        <p>Preparing data for Machine Learning requires extracting target columns and filtering out irrelevant rows.</p>

        <h4>Key Methods:</h4>
        <ul>
            <li><code>df['column_name']</code> — Extract a single column.</li>
            <li><code>df[df['col'] > value]</code> — Filter rows using logical conditions.</li>
            <li><code>df.iloc[row_index, col_index]</code> — Index by numerical position.</li>
        </ul>

        <h4>Expected Filtering Output (marks >= 70):</h4>
        <pre style="background:#090d16; color:#00d2ff; padding:12px; border-radius:6px;">
   hours_studied  marks
2             10     70
3             12     80
4             15     90</pre>
    `,
    codeSnippet: `# Importing Pandas
import pandas as pd

# Sample dataset
data = {
    "hours_studied": [5, 8, 10, 12, 15],
    "marks": [50, 60, 70, 80, 90]
}

df = pd.DataFrame(data)

# 1. Select a single column
hours = df["hours_studied"]
print("--- Single Column (Hours) ---")
print(hours)

# 2. Filter rows where marks are 70 or higher
high_scores = df[df["marks"] >= 70]
print("\n--- High Scoring Students (>= 70) ---")
print(high_scores)

# 3. Position-based selection with .iloc (First 2 rows, First column)
subset = df.iloc[0:2, 0]
print("\n--- Using .iloc[0:2, 0] ---")
print(subset)`
}