# Expense Tracker

## Cat Expense Web

Your task is to implement a cat expense web front end with the following functionalities:

### Main UI:

- The Main UI should have the same components as Image 1 below, although you can
  style the UI anyway you look. (Show your creativity!)

### Add Expense:

- When pressing the “Add Expense” button, the “Expense Detail” dialog should pop up.
  (see image 2) – again feel free to style it.
- In the Expense Detail dialog, the user needs to input Item name, Category, and the
  amount. (All mandatory)
- Feel free to add any additional validations that you think is appropriate
- There are three categories: Food, Furniture, Accessory.
- Everytime we pop-up the “Expense Detail dialog”, the dialog should show a random cat
  fact obtained from calling the API: https://catfact.ninja/
- In the Expense Detail dialog, when the user clicks submit, the dialog should close and
  the new item should show up in the Main UI

### Delete Expenses:

- The user can select one or more items to delete by using the check box , and “Delete
  Expense” button.

### Top CATegory:

- All the rows with the highest spending category should be highlighted (see the green row
  in image 1)
- If you spent the same on two categories, please highlight both categories.

### Other notes:

- Feel free to add any additional validations that you think is appropriate
- No back end is needed, this is just a temporary , client only app
- React JS is highly preferred, but other libraries / frameworks are welcome too.
- For extra point, show your creativity, and add any cool features you think is appropriate
- We expect you to spend around half a day on this. So don’t aim for perfection.

## Features

- ✅ Add and delete expenses with an intuitive interface
- ✅ Categorize expenses (Food, Furniture, Accessory, etc.)
- ✅ Select and delete multiple expenses at once
- ✅ Responsive design that works on desktop and mobile
- ✅ Random cat facts displayed when adding new expenses
- ✅ Built with reusable components for easy extension

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Redux and Redux toolkit** - State management
- **Tailwind CSS** - Styling
- **Jest** - Testing
- **Cat Facts API** - External data integration
- **Framer motion** - Animations
- **Netlify** - Deployment

## Deployment

https://cat-expenses-web.netlify.app/

## Installation

1. Clone the repository:

```bash
git clone https://github.com/DemisRincon/cat-expenses
cd cat-expenses
npm install
npm run dev
```
