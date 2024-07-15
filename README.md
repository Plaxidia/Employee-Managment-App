# Employee Management App

## Overview

The Employee Management App is a web application designed to help businesses manage their employee information efficiently. It provides features such as adding new employees, edit existing employee information,delete the employee and viewing a list of all employees.
Each feature has its own dedicated screen to ensure a clear and organized user experience. The app is built using React for the frontend and Node.js for the backend, with data stored in a MySQL database and RESTful APIs to handle the CRUD operations.


## Features

- **Add New Employees:** A dedicated screen allows you to add new employees with details such as name, position, department, and contact information.
- **Update Employee Details:** An individual screen for updating existing employee details.
- **View All Employees:** A main screen displays a list of all employees.
- **Search Employees:** A search bar on the main screen allows you to search for employees by name or department.

## Technologies Used

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express
- **Database:** MySQL


## Usage and Features

### 1. **Add a New Employee:**
A dedicated screen allows you to add new employees with details such as name, surname, job title, department, gender and email.
   - Click on the "Add Employee" button to navigate to the add employee screen.
   - Fill in the employee details in the form.
   - Click "Submit" to add the employee to the database.

     ![Screenshot 2024-07-12 at 17 14 16](https://github.com/user-attachments/assets/ff57c0d9-a5fa-4905-b71a-80b05eb59c45)


### 3. **Edit Employee Details:**
   A dedicated screen allows you to edit existing employee details.
   - Navigate to the employee screen by clicking the (pen) edit icon.
   - Click on the "Edit" button next to the employee you want to update to go to the update employee screen.
   - Modify the employee details and click "Save" to update the information.
   - You can click cancel button to go to the home screen.

     ![Screenshot 2024-07-15 at 14 08 37](https://github.com/user-attachments/assets/10529dad-3225-485d-8dfb-9e5425f27b91)


### 4. **View Employee:**
   - The homepage displays a list of all employees on the main screen. But to view all the details of a single employee.
   - 
     ![Screenshot 2024-07-12 at 17 50 31](https://github.com/user-attachments/assets/ccba4586-f5a9-47a8-85d2-d241f528c192)

   - Navigate to the employee screen by clicking the (eye) view icon.
  
   
     ![Screenshot 2024-07-12 at 17 51 13](https://github.com/user-attachments/assets/bea2e83e-7dce-4aca-a95c-78d47311b83f)

   - On this screen you can not perform any other operations.
   - you can click cancel button to go to the home screen.

     

### 5. **Search Employees:** 
A search bar on the main screen allows you to search for employees by name, surname, job title, department, gender and email.

   ![Screenshot 2024-07-15 at 14 05 56](https://github.com/user-attachments/assets/8d4ef004-a840-4bc2-8e64-2c82bbbc2626)



### 6. **Delete Employees:**

A dedicated delete popover is used to delete the employee,The  delete popover is  triggered by a user's action in this case si by clicking a delete button/icon next to the employee they wish to delete.
Upon triggering, the popover appears at the centerof the screen. It contains a message asking for confirmation to delete the employee.

   - The popover includes two main buttons:
   - **Confirm** (labeled  "Yes"): Clicking this button confirms the deletion. The popover disappears, and the item is removed from the table and 
database.
   - **Cancel**: (labeled  "No") Clicking this button aborts the deletion process. The popover disappears without making any changes.


   ![Screenshot 2024-07-15 at 14 10 42](https://github.com/user-attachments/assets/4684c3e6-a8ef-4b94-8230-decc822ca58b)

## Contributing

Contributions are welcome! 

## Contact

For any questions or feedback, please reach out to:
plaxidiahove@gmail.com
