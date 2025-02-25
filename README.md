## Running the Application

To run the application, follow these steps:

1. Install dependencies:

  using npm
  
   ```bash
   npm install
   ```

   using yarn
   ```bash
   yarn add
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173/` to see the application running.

## Data Visualization

- **Chart & Bar Graph**: We used [chartJS](https://www.chartjs.org/) for data visualization in this project. ChartJS is a composable charting library built on React components.

- **Table Data**: We used [MaterialUI](https://mui.com/material-ui/react-table/) for tabular data presentation.
- **Select Component**: we use [React Select](https://react-select.com/) for selection component in the data filteration part.

## State Management

- **State Management**: We use [Zustand](https://zustand-demo.pmnd.rs/) for state management to handle complex state logic.

## Additional Feature 

- Modular Design Pattern
- Modular Store Management(Slice pattern)
- Vite + Typescript
- Added features like (sorting, searching) in table data.
- Filtering the visualizing data
- Added Lazy load component for the all the Chart and Table component