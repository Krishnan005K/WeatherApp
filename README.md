# Weather App 

# Overview

This project is a simple weather application built using HTML, CSS, and JavaScript. It utilizes the OpenWeather API to fetch weather data for a given city and displays it on the webpage.


# Features

Displays current temperature, sky situation, max and min temperatures, wind speed, humidity, pressure, sunrise, and sunset times.

Allows users to search for weather data of any city.

Changes background image dynamically based on the weather conditions.


# Getting Started

To run this project locally and obtain weather data, follow these steps:

# Prerequisites

Make sure you have a code editor installed on your machine.

You will need an API key from OpenWeather to access their weather data.


# Installation

Clone this repository to your local machine:

          git clone https://github.com/Krishnan005K/WeatherApp

Navigate to the project directory:

          cd weather-app
          
Open the project in your code editor.


# Obtaining API Key

Visit the OpenWeather website and sign up for a free account.

After signing in, navigate to the API Keys section in your account dashboard.

Generate a new API key.

Copy the generated API key.

Setting API Key

In the script.js file of the project, locate the ApiKey variable inside the fetching function.

Replace "YOUR_API_KEY" with your actual API key obtained from OpenWeather.

        let ApiKey = "YOUR_API_KEY";

# Running the Project
Open the index.html file in your web browser or start a local server.

You should now be able to search for weather data of any city and view the results on the webpage.

# Resources
[OpenWeather API Documentation](https://openweathermap.org/api)
