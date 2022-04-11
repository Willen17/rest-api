# Cat N' Chill

## About the project 📃

I have created a basic REST-API in Nodejs with the help of Express. The API has functionality for the CRUD-principles and has all the endpoints to support it.

The API contains a list of cats (because why not 😼) and each cat has the following properties: name, age, favorite food, img url and a unique id. The database used for this is a simple JSON-document, which works since it's such a small project. In the UI the user can see all the cats, post a new cat and update or remove an existing one. The API also comes with basic 404 error-codes, if the user were to call for an ID that doesn't exist, or if the list would be empty.

[Link to repo](https://github.com/Willen17/rest-api)

## Initiate project 👨‍💻

To run the project, simply write the following command in the terminal:

```

npm install

npm start

```

and open the url http://localhost:8080 in your browser.

## Bootstrap 📦

This project was built using components from _Bootstrap_.

Click [here](https://getbootstrap.com/) to read more about _Bootstrap_.

---

## Created by:

### William Saar [**Github**](https://github.com/Willen17)

---

## For my teacher:

> **Krav för godkänt:**
>
> - Projektet innehåller minst 4 st. endpoints. **[ X ]**
> - Samtliga endpoints skall kunna nås via en REST Client fil **[ X ]**
> - Datan som API:et hanterar sparas lokalt i serverfilen **[ se VG ]**
> - APIét ska svara med 404 om datan saknas. **[ X ]**
> - Git & GitHub har använts **[ X ]**
> - Projektmappen innehåller en README.md fil **[ X ]**
> - Uppgiften lämnas in i tid! **[ X ]**
>
> **Krav för väl godkänt:**
>
> - Alla punkter för godkänt är uppfyllda. **[ X ]**
> - All data skall vara sparad i en JSON-fil istället för i serverfilen. **[ X ]**
> - Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort **[ X ]**
> - Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information. **[ X ]**
> - Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt **[ X ]**
>
> _Alla_ krav är **uppfyllda**.
