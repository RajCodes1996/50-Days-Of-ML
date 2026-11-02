# TASK
Day-12 Add Linear Regression Intro, basic theory and the code below with explanation with data visulization. 

import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# =====================================
# STEP 1: CREATE THE DATASET
# =====================================

# Input: Study hours
X = np.array([[1], [2], [3], [4], [5], [6]])

# Target: Student marks
y = np.array([20, 30, 40, 50, 60, 70])

print("Study Hours:")
print(X)

print("\nStudent Marks:")
print(y)

print("\nDataset Shape:")
print("X:", X.shape)
print("y:", y.shape)


# =====================================
# STEP 2: VISUALIZE THE DATASET
# =====================================

plt.scatter(X, y)

plt.xlabel("Study Hours")
plt.ylabel("Student Marks")
plt.title("Study Hours vs Student Marks")

plt.show()


# =====================================
# STEP 3: CREATE THE MODEL
# =====================================

model = LinearRegression()


# =====================================
# STEP 4: TRAIN THE MODEL
# =====================================

model.fit(X, y)


# =====================================
# STEP 5: UNDERSTAND WHAT MODEL LEARNED
# =====================================

print("\nModel Learning Results:")

print("Slope:", model.coef_[0])
print("Intercept:", model.intercept_)


# =====================================
# STEP 6: PREDICT STUDENT MARKS
# =====================================

new_student = np.array([[7]])

predicted_marks = model.predict(new_student)

print("\nPrediction:")
print("Study Hours:", new_student[0][0])
print("Predicted Marks:", predicted_marks[0])


# =====================================
# STEP 7: VISUALIZE THE REGRESSION LINE
# =====================================

plt.scatter(X, y, label="Actual Data")

plt.plot(X, model.predict(X), label="Regression Line")

plt.xlabel("Study Hours")
plt.ylabel("Student Marks")
plt.title("Linear Regression - Student Marks Prediction")

plt.legend()
plt.show()
