# TASK
 Add the practice excercise in Day-11 Numpy section as practice excericse below the explanation as i want both in Day-11. 

Since you're learning AIML step by step, our goal isn't just to get predictions. You'll understand what each block does, why each NumPy operation is used, and how the mathematics connects to machine learning.
Project overview

Project: Student Performance Predictor
Library: NumPy
Algorithm: Multiple Linear Regression
Training method: Gradient Descent
Prediction: Estimate a student's exam score from study hours, attendance, and previous marks.

#### Complete project code


import numpy as np

# BLOCK 1: Generate a synthetic student dataset
np.random.seed(42)
n = 300

study_hours = np.random.uniform(0, 10, n)
attendance = np.random.uniform(50, 100, n)
previous_marks = np.random.uniform(30, 100, n)

X = np.column_stack((study_hours, attendance, previous_marks))
noise = np.random.normal(0, 5, n)
y = np.clip(
    5 * study_hours + 0.2 * attendance
    + 0.5 * previous_marks + noise, 0, 100
)

# BLOCK 2: Split data into training and testing sets
indices = np.random.permutation(n)
split = int(0.8 * n)
train_idx, test_idx = indices[:split], indices[split:]

X_train, X_test = X[train_idx], X[test_idx]
y_train, y_test = y[train_idx], y[test_idx]

# BLOCK 3: Standardize the input features
mean = X_train.mean(axis=0)
std = X_train.std(axis=0)
std[std == 0] = 1

X_train = (X_train - mean) / std
X_test = (X_test - mean) / std

# BLOCK 4: Initialize the model
weights = np.zeros(X_train.shape[1])
bias = y_train.mean()
learning_rate = 0.01
epochs = 3000

# BLOCK 5: Train using gradient descent
for epoch in range(epochs):
    predictions = X_train @ weights + bias
    errors = predictions - y_train

    dw = (2 / len(y_train)) * (X_train.T @ errors)
    db = 2 * errors.mean()

    weights -= learning_rate * dw
    bias -= learning_rate * db

# BLOCK 6: Evaluate on unseen test data
test_predictions = X_test @ weights + bias
mae = np.mean(np.abs(test_predictions - y_test))
rmse = np.sqrt(np.mean((test_predictions - y_test) ** 2))
ss_res = np.sum((y_test - test_predictions) ** 2)
ss_tot = np.sum((y_test - y_test.mean()) ** 2)
r2 = 1 - ss_res / ss_tot

print("Test MAE:", round(mae, 2))
print("Test RMSE:", round(rmse, 2))
print("Test R²:", round(r2, 3))

# BLOCK 7: Predict for a new student
student = np.array([[4.5, 90, 75]])
student_scaled = (student - mean) / std
score = (student_scaled @ weights + bias)[0]

print("Predicted exam score:", round(float(np.clip(score, 0, 100)), 2))
