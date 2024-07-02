# Javascript Data Visualisation

### Live site [HERE](https://brieucdegoussencourt.github.io/JS_Data_Visualisation/)

## WHAT? WHEN? WHY?

This challenge is part of the web developer training @ [Becode](https://becode.org/fr/) - June/July 2024.

The aim of the project is to consolidate what we've learned so far and more specifically to develop our JavaScript skills.

## THE CHALLENGE

To create dynamic charts from different tables located either `inside the HTML page` or from a `remote source updating constantly`. These graphs will be interactive in the sense that the user can manipulate them, such as filtering data, or reveal detailed data when the mouse hovers over it.

Here are the full [guidelines](/guidelines.md).

![screenshot](/screenshots/Screenshot%202024-07-02%20at%2011.40.26.png)

## MAIN FEATURES

- **JavaScript**:
  
  JS handles all interactive elements from the charts. The charts would simply not being displayed without the active javascript source.

- **chart.js**:
  
  The aim of the challenge is to learn how to handle third-party charting libraries and I decided to work with [chart.js](https://www.chartjs.org/docs/latest/) as it is currently the most popular one according to GitHub stars (~60,000) and npm downloads (~2,400,000 weekly).
  Chart.js provides a set of frequently used chart types, plugins, and customization options.

- **AJAX/JSON API**

    There are data sitting at this URL : [https://canvasjs.com/services/data/datapoints.php](https://canvasjs.com/services/data/datapoints.php)

    We have to retrieve the data via Ajax, and use it to insert a graph that refreshes every second, just below the main title (`h1`) of the article.


- **HTML/CSS**:

    We could simply just not touch the html files we were given, except to create a "canvas element" to welcome the charts. The pulished site is a real article from an european insitution reporting on criminality.


## TECHNICAL CHALLENGES

- Retrieve the data and convert it to a javascript object that can work with a chart library.
- Learn how to work with third-party charting libraries.
- Choose the right chart type regardind the data type in order to tell a story that makes sense.


## THINGS I LEARNED

- DOM manipulation
- AJAX/FETCH request
- problem-solving : design a logical solution to implement the expected result
- Debugging using the console
- Data visualization in a very powerfull tool.
- Live data manipulation is quite rewarding as it helps understand ever evolving datas.

## ROOM FOR IMPROVEMENT

- Getting to know more complex charting librabries.
- Getting better at chart customization.
- Working with API in general.

## CONCLUSION

This projects gets closer to a real life assignment as we work on existing material. Guidance was limited and we had to find answers on our own which is quite satisfying when it finally works!

I really enjoy data science and would like to learn more about it also in relation with artificial intelligence. 

## AUTHOR

**Brieuc Degoussencourt** - [GitHub](https://github.com/brieucdegoussencourt)


