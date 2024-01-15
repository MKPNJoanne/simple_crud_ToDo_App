# SimpleCrudToDo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

**Task Management App**
This is a simple task management app that allows users to add, mark as complete, and delete tasks. It provides a straightforward way to organize and manage your tasks efficiently.

**Features**
1. Adding Tasks
Users can easily add new tasks to the list.
Input validation ensures that tasks cannot be empty.

2. Marking Tasks as Complete
Mark tasks as complete to keep track of your progress.
Completed tasks are visually distinguished from the active ones.

4. Deleting Tasks
Delete single tasks when they are no longer relevant.
An option to delete all tasks is available for a fresh start.

<h3>How it works</h3>
Local Storage Functionality
The app incorporates local storage functionality to persist task data across sessions. Here are the key functions related to local storage

<h4>Local Storage Methods</h4>
<ol>
  <li>setItem()</li>
  <li>getItem()</li>
  <li>removeItem()</li>
  <li>clear()</li>
</ol>


1. **Save Function**
To store the task list in local storage, the list is converted to a string using JSON.stringify and passed to localStorage.setItem with a specific key (e.g., "todo").
This function should be called whenever tasks are added, deleted, or updated.

2. **Get Function**
Retrieves the value from local storage using localStorage.getItem and assigns it to a variable named value.
Checks if the key exists in local storage; if not, it returns an empty string.
If the value is not empty, it parses the value and assigns it to the list variable.

3. **Add Function**
Accesses user input through the task variable, used with ngModel on the HTML side.
Creates a new object with properties TaskName and IsCompleted. The IsCompleted property is set to false when adding a new task.
Pushes this object into the list array and calls the save function to store the updated list in local storage.
Clears the value of the task variable to reset the user's textbox.

4. **Delete and Delete All Function**
Delete Function: Takes an array index from the HTML side, checks if the index is less than the length of the array, removes the item using the splice method, and calls the save function to update local storage.

Delete All Function: Reinitializes the array with an empty array and calls the save function.

5. **Change Status Function**
Takes an array index and current status as parameters.
Checks if the array's length exceeds the index's value, gets the element, and updates the value of IsCompleted.
Calls the save function to update data in local storage.

<h2>Additional Notes</h2>
Angular Two-Way Data Binding
This app uses Angular's ngModel for two-way data binding, allowing seamless communication between the HTML template and TypeScript file. To enable ngModel, ensure that you have imported FormsModule in your app.module.ts file.
