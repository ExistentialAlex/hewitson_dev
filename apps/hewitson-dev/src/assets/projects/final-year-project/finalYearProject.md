# Overview

For my disseration I had to produce a piece of software that utilised an algorithmic concept known as suffix arrays. The result was a web based platform comprising of an Angular front-end and firebase backend-as-a-service. The system developed extracts text from a document uploaded by the user, generates a suffix array of this text to improve the efficiency of recurrent searches for individual search terms and produces contexts of these search terms with which to perform sentiment analysis.

## But what are 'Suffix Arrays'

Taking the wikipedia definition: 'a suffix array is a sorted array of all suffixes of a string'.
What this means, is that by creating a suffix array of a string (or in this case a whole word document), it allows for faster recurrent searches of that string as we already know all the component parts.

## Sentiment Analysis

Another part of the project was the use of sentiment analysis. This provides a value by which we can rate specific phrases within a text for whether they are positive or negative.

For the project, The system searches before and after the specific word by 25 characters to obtain context for these search terms. The contexts are then assigned to the terms in the database for storage and analysis. The context is analysed to determine whether it is positive or negative (sentiment analysis) and then provide an appropriate rating based upon this.

# Front-End

The front-end user interface was created using Angular, a javascript web framework used for creating complex systems.

Although I previously had experience at university with creating websites (using PHP and basic HTML and CSS) I had never used a modern framework before.
Angular represented a big leap in this regard, it had been recommended to me by a colleague on my industrial placement year and I thought that taking a dive into a move robust development set up would be useful to expand my skillset.

And I wasn't wrong.

Angular proved to be an incredibly versatile and fun framework to use and built upon the knowledge I already had. Through learning the framework I grew to understand more about developing for the web as a whole; improving my understanding of CSS and how to craft beautiful UIs.

# Back-End

For the back-end, I used firebase. This was primarly chosen to streamline the development process with their robust APIs for interacting with Angular but also to gain an understanding of the back-end as a service model they were using.

## Cloud Firestore

Newly released when I started my final year, Cloud Firestore is a document based database designed with high availability and access.

I used this to handle everything from user creation to storing the suffix arrays and generated contexts in my application.

## Firebase Storage

I used firebase stroage to handle file uploads and storage for my users. This also acted as a dedicated place to store user profile pictures.

## Cloud Functions

I used Firebase Cloud Functions as my processor for the uploaded files. When a file was uploaded, a cloud function would trigger to create a suffix array of the file and perform the sentiment analysis of the searched for words; in their given context. This was I could keep the processing of the front-end light and provide user feedback with loading bars using the various APIs at my displosal.
