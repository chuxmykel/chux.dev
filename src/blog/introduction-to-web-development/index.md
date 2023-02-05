---
title: Introduction to Web Development.
draft: false
description: "Unlock the Power of the Internet with Web Development: From
  Designing Websites to Managing Data, Learn How to Build and Maintain Dynamic
  and Engaging Online Experiences."
date: 2023-02-05 14:33
author: Ngwobia, Chukwudi M.
slug: introduction-to-web-development
tags:
  - HTML
  - CSS
  - JavaScript
hero_image: code_pc.jpg
hero_image_alt: MacBook pro on a brown wooden table.
hero_image_credit_text: Maxwell Nelson
hero_image_credit_link: https://unsplash.com/photos/taiuG8CPKAQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
---

## Introduction.
Web development is the process of building, designing, and maintaining websites for the internet (World Wide Web) or an [intranet](https://en.wikipedia.org/wiki/Intranet) (Private Network). It also involves optimising websites for performance and [SEO](https://searchengineland.com/guide/what-is-seo), as well as testing and debugging code. Web developers also use version control systems such as [Git](https://git-scm.com) to manage and track changes to their codebases and some other tools to smoothen out the Software Development Life Cycle [(SDLC)](https://en.wikipedia.org/wiki/Systems_development_life_cycle) as much as possible. In this article, we will be looking at a high-level explanation of the basic concepts of web-developmet and we will progress to more advanced concepts as we move through the series.

Web development can be broadly divided into two categories: front-end development and back-end development and it encompasses a wide range of technologies and skills, including HTML, CSS, and JavaScript for front-end development, as well as server-side languages and tools such as PHP, Python, Node JS, Java, Ruby etc. for back-end development.



## Front-end development.

Front-end development focuses on the [client-side](https://en.wikipedia.org/wiki/Client-side) of web development, which is what the user sees and interacts with when visiting a website. This includes the layout, design, and functionality of the website. There are many technologies used to build web applications on the front end, but fundamentally, It typically involves using HTML, CSS, and JavaScript. Other tools used to build web applications *usually* end up generating HTML, CSS and JavaScript to run on the browser. Let's take a closer look at these terms (HTML, CSS & JavaScript).

### HTML (Hypertext Markup Language).

HTML is used to create the structure of a webpage. It provides building blocks "sort-of" for our websites. For example, if we want a page with an input field and a button to submit the content of the input field, HTML gives us *tags* or *elements* which we can use by declaring these elements in a HTML document.

```html
	<!-- index.html -->
	
	<input type="text" name="address" />
	<button>Submit Address</button>
	
```

_To try this out, create a file named *index.html* and paste the code above into the file. Save the file, copy the path (where it's saved on your computer) and paste it into any browser address bar and see your website in action._

The elements in this case are 'input' and 'button'. There are [lots of elements](https://www.w3schools.com/tags/default.asp) and I do not recommend trying to memorise them all. There's really no reason why you should. You can find all the information you need about them online and also with time and usage, even without trying, you notice you're able to recall some of them from memory.

> TIP: Use the [MDN Docs](https://developer.mozilla.org/) or [W3Schools](https://www.w3schools.com/) as a reference for your web development needs.

Here's what you should see on the browser if you followed the instructions above.

![The input and button element as declared in the code](https://i.ibb.co/tp0WVnC/Screenshot-2023-02-04-at-14-40-35.png)

### CSS (Cascading Style Sheet).

CSS is used to modify the layout and design of a webpage by applying styles to HTML elements. This can be done using [selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).
To style our simple HTML form declared above, we can add [classes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) to the *input* and *button* elements declared earlier in our HTML file, and select them to be styled using the classes assigned to them.

```html
	<!-- index.html -->

	<!-- Notice the "class" attribute added to both elements  -->
	<input type="text" name="address" class="address-input" />
	<button class="submit-button">Submit Address</button>

	<!-- To apply CSS styles in an HTML file, you have to declare them using the <style></style> tag -->
	<style>
		/* Selector for the address input based on the class assigned to it */
		.address-input {
			/* Add styles for the address input here. */
			height: 40px;
			width: 400px;
		}
		
		/* Selector for the submit button based on the class assigned to it */
		.submit-button {
			/* Add styles for the submit buton here. */
			all: unset;
			height: 40px;
			width: 150px;
			font-size: large;
			background-color: blue;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 20px;
			border-radius: 10px;
		}
	</style>
```

_You can also try this by replacing the contents of the *index.html* file you created in the *HTML Section* and remember to reload your browser (or follow the instructions in that section to open the file in your browser)._

This is what our page should look like with the styles applied.

![The same user interface (UI) but styled](https://i.ibb.co/5G4NmG2/Screenshot-2023-02-04-at-15-56-32.png)

Notice how our simple form looks different now because of the styles we added.

>Think of it this way; if HTML provides the building blocks, CSS provides the paint, furniture and other items needed to make the resulting building look beautiful 😅. 

### JavaScript.

JavaScript is used to add interactivity and dynamic functionality to a webpage. In our case, let's assume I want to submit my address to my bank when I click the button. We can use JavaScript to read the value(address) from the input field, format it to be the way the bank expects and then send it over to the bank. We also need JavaScript to process the response from the bank. There is a lot we can do with JavaScript; we can add new HTML elements to the screen, remove elements currently on the screen, fetch data from a remote server, render the data on our screen, check that the user trying to access our website is logged in before granting access.

The list is endless to be honest. If you can think it, you can do it with JavaScript. _An exaggeration, but you get my point_. 😅


Below is a sample script to submit our form to a fictional bank.

```html
	<!-- index.html -->

	<!-- Notice the "id" attribute added to both elements  -->
	<input type="text" name="address" class="address-input" id="address-input" />
	<button class="submit-button" id="submit-button">Submit Address</button>
	<style>
		/* styles remain unchanged. */
	</style>

	<!-- Scripts are declared using the <script></script> tag -->
	<script>

		// Get a reference to the submit button.
		let submitButton = document.getElementById("submit-button");

		function handleSubmit() {
			// Get the value of the text currently in the input.
			let inputValue = document.getElementById("address-input").value;

			// now that we have the input value, we can send it to our bank
			// ... {code to send inputValue to the bank (⚠️ DO NOT BE AFRAID! we actually just print the value out to the console😉) }
			sendAddressToBank(inputValue);
		}

		function sendAddressToBank(address) {
			// 🚮
			console.log("Sending address to bank: =======> ", address);
		}

		// Listen for clicks on the submit button and submit the adress when we get a click.
		submitButton.addEventListener("click", handleSubmit);
	</script>
```

_⚠️ This code will not send information to any bank, we just log it to the console so feel free to run it in the "index.html" file just like before._

Notice we added *id="address-input"* to the input field and the equivalent to the submit button. This is because we want to get those elements by their *id* using JavaScript. We will discuss these in detail later so no need to worry if it doesn't make much sense right now.

> The key take away is, we can add interactivity to our webpage and do really cool stuff with JavaScript.



## Backend Development

Back-end development focuses on the server-side of web development. It typically involves using [server-side](https://en.wikipedia.org/wiki/Server-side) languages such as PHP, Python, Ruby etc. to manage data and provide an interface for the front-end to interact with. These languages are used to create dynamic websites that can interact with databases and retrieve or store data.

Think about a web app that requires authentication, without a server-side component to store and retrieve information about your users, there's no easy way to know for sure who is trying to access your app. Even if you store information on the browser, it can easily be cleared by the user and there isn't much options or control you have over the client side in that regard.

There are a lot of tools required for backend development and they are going to be discussed extensively in later articles of this series. 

## Conclusion.
Overall, web development is a field that is constantly evolving and growing, with new technologies and frameworks emerging all the time. It is an exciting but challenging field that offers many opportunities for creative problem-solving and collaboration.

And there you have it folks! A quick overview of what web development is all about.

In this series, I'll be your guide as we explore the exciting world of building and maintaining websites. I'll take you from a complete newbie to a skilled full-stack web developer, breaking down the concepts discussed in this post and explaining them in detail. Whether it's setting up your local development environment or optimising for performance, I've got you covered. So buckle up and get ready to join me on this thrilling journey!

Next up, I'll be showing you how to set up your local development environment, so stay tuned and let's get started on this amazing adventure of becoming a web developer.