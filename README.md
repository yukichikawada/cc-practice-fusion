# Similar Doctors

Write a simple web application which allows you to view a list of doctors. Users can browse for
doctors given a specific specialty, area, review score etc.
• When a doctor is selected, display their details, along with a list of similar doctors, in a
prioritized order.
• You define what similar means and the result ordering, but clearly document any
assumptions in your code.
• You can use any data source you like.
• Before you start, estimate how long you think you will work on this exercise
(recommendation is no more than two hours). Submit the amount of time you actually
spent on this exercise.
> Estimate: 4 hours. Actual: 3.5 + (1hr sketching out component hierarchy)
• Given more time, explain what other changes you'd like to make, or things you would
want to improve on.
> Given more time I would've liked to have gotten to the similar doctors
> portion. The implementation plan was to show similar docs based on +-5 score.
>
> My assumption was that given the recommended time of 2 hours, the
> goal of this project was to see how much could be accomplished in a short 
> time frame and the architectural direction with follow up interviews
> focused on extending the intial project. 2 hours seems like an impossible
> amount of time to create an app with a store, reducers, and actions, yet hard
> coding the entire project seems too simplistic.
>
> If I got to making a proper category search container/component I would've 
> liked to reuse DoctorIndexContainer for the results rather than hardcode it.
>
> I would've liked to add css to make things look better but I prioritized 
> functionality above form.
>
> Searched for an easier backend solution re:deployment.

## How to: Set up locally
* ```npm i``` install node_modules
* ```npm i -g json-server```
* ```npm json-server --watch db.json``` start api endpoint
* ```npm start``` start Similar Doctors app
* navigate to [http://localhost:3000](http://localhost:3000)

json-server.json is config file for server and is set to run on port 3004

---
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).