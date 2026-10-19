### TASK go back to day-8 and add more data about visualization code below also insert good graphs or charts images for better understanding :

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