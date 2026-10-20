Codex Task: Improve Day 8 — Data Visualization
Use a token-efficient workflow and make the changes in the existing Day 8 learning material in this repository.
Task
1. Locate the existing Day 8 content and identify the right file(s) to update. Do not create a duplicate lesson if one already exists.
2. Expand the data-visualization section with clear, beginner-friendly explanations of correlation, outliers, scatter plots, line plots, bar charts, and histograms.
3. Correct and improve the supplied example below. Explain what each chart is for and how to interpret it.
4. Add useful graph/chart images or generate chart images from the example if the repository's format and existing workflow support this. Save assets in the project's established location and embed them in the lesson. Prefer real charts generated from code over decorative or misleading images.
5. Keep the lesson consistent with surrounding Day 8 material, formatting, and the learner's current level. Avoid unrelated changes.
Important correctness notes
- A correlation matrix with only one numeric column (marks) does not demonstrate a meaningful relationship between two variables. Use a suitable second numeric variable, such as study hours, if needed, and explain that correlation does not imply causation.
- name is categorical data, so plt.hist(df["name"]) is incorrect for a marks distribution. Use the numeric marks column for the histogram.
- A line plot connects observations in an order and can imply continuity. Explain when that is appropriate; for comparing student categories, a bar chart is usually clearer.
- Adding a student with 100 marks does not by itself prove that the value is an outlier. Explain that outliers need to be assessed relative to the distribution and context.
- Include readable titles, axis labels, sensible tick labels, and a layout that does not overlap.
- Do not add numpy or other dependencies unless they are actually used and are not already available.

### Starting code

<!-- #Code -->
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

data = {
    "name": ["raj", "Shaam", "Rohit", "Priya", "Neha"],
    "marks": [50,60,70,80,90]
}

df = pd.DataFrame(data)

# Finding-Correlation
print(df.corr(numeric_only=True))

# Outliers
new_row = {"name": "Zara", "marks": 100}
df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)
print(df)

# Scatter-Plot
plt.scatter(df["name"], df["marks"])
plt.xlabel("name")
plt.ylabel("marks")
plt.title("Student Names Vs Marks")
plt.show()

#Line-Plot
plt.plot(df["name"], df["marks"])
plt.show()

# Bar-Chart
plt.bar(df["name"], df["marks"])
plt.title("Student Vs Marks")
plt.show()

# Histogram
plt.hist(df["name"])
plt.title("Marks")
plt.show()

Verification
- Run only relevant checks (for example, execute the example if the environment supports it).
- Inspect the final diff and ensure image paths/links resolve.
- Do not claim that charts were generated or code was tested unless verified.
Final response
In at most 5 bullets, state which files changed, what was added, which checks were run, and any remaining limitations.