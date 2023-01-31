---
title: Introduction to web Development.
draft: true
description: "Unlock the Power of the Internet with Web Development: From
  Designing Websites to Managing Data, Learn How to Build and Maintain Dynamic
  and Engaging Online Experiences."
date: 2023-01-30 19:28
author: Ngwobia, Chukwudi M.
slug: introduction-to-web-development
hero_image: code_pc.jpg
hero_image_alt: Macbook pro on brown wooden table.
hero_image_credit_text: Maxwell Nelson
hero_image_credit_link: https://unsplash.com/photos/taiuG8CPKAQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
---

Web development is the process of building, designing, and maintaining websites for the internet (World Wide Web) or an intranet (Private Network). It encompasses a wide range of technologies and skills, including HTML, CSS, and JavaScript for front-end development, as well as server-side languages such as PHP, Python, Node JS, Java, Ruby etc. for back-end development.

Web development can be broadly divided into two categories: front-end development and back-end development.

## Front-end development.
Front-end development focuses on the client-side of web development, which is what the user sees and interacts with when visiting a website. This includes the layout, design, and functionality of the website. There are many technologies used to build web applications on the front end but fundamentally, It typically involves using HTML, CSS, and JavaScript. Other tools used to build web applications _usually_ end up generating HTML, CSS and JavaScript to run on the browser. Let's take a closer look at these terms.

### HTML (Hypertext Markup Language).
HTML is used to create the structure of a webpage. It provides building blocks "sort-of" for our websites. For example, if we want a page with an input field and a button to submit the content of the input field, HTML gives us `tags` or `elements` which we can use by declaring these elements in a HTML document.

```html
	<!-- index.html -->
	
	<input type="text" name="address" />
	<button type="submit">Submit Address</button>
	
```

> To try this out, create a file named `index.html` and paste the code above into the file. Save the file, copy the path (where it's saved on your computer) and paste it into any browser address bar and see your website in action.😉

The elements in this case are input and button. There are [a lot of elements](https://www.w3schools.com/tags/default.asp) and I do not recommend trying to memorise them. There's really no reason why you should. All the information about them are freely available on the internet and also with time and usage, even without trying, you notice you're able to recall some of them from memory.

### CSS (Cascading Style Sheets).
CSS is used to control the layout and design of a webpage. Think of it this way, if HTML provides the building blocks, CSS provides the paint and furniture to make the building look beautiful 😅.
CSS can be used to apply styles to HTML elements. This can be done using [selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).
To style our simple HTML form declared above, we can add [classes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) to the `input` and `button` elements declared earlier in our HTML file.

```html
	<!-- index.html -->
	<input type="text" name="address" class="address-input" />
	<button type="submit" class="submit-button">Submit Address</button>
	<style>
		.address-input {
			/* Add styles for the address input here. */
			height: 40px;
			width: 400px;
		}
		
		.submit-button {
			/* Add styles for the submit buton here. */
			height: 40px;
			width: 150px;
			font-size: large;
		}
	</style>
```
> You can also try this by replacing the contents of the `index.html` file you created in the `HTML Section` and remember to reload your browser (or follow the instructions in that section to open the file in your browser).

Notice how our simple form looks a lot better now because of the styles we added.

### JavaScript.
JavaScript is used to add interactivity and dynamic functionality to a webpage. In our case, let's assume I want to submit my address to my bank when I click the button, we need JavaScript to read the value from the input field, format the data in a way the bank expects and then send the data over to the bank. We also need JavaScript to process the response from the bank. There is a lot we can do with JavaScript; we can add new HTML elements to the screen, remove elements currently on the screen, fetch data from a remote server and render it on our screen, check that the user trying to access our website is logged in before granting access etc. The list is endless to be honest, if you can think it, you can do it with JavaScript. 😅 ~an exaggeration but you get my point~.
Below is a sample script to submit our form to a fictional bank.

```html
	<!-- index.html -->
	<input type="text" name="address" class="address-input" id="address-input" />
	<button type="submit" class="submit-button" id="submit-button">Submit Address</button>
	<style>
		/* styles remain unchanged. */
	</style>
	<script>

		let submitButton = document.getElementById("submit-button");
		function handleSubmit() {
			let inputValue = document.getElementById("address-input").value;
			// now that we have the input value, we can send it to our bank
			// ... {code to send inputValue to the bank (we actually just print the value out to the console) 😉}
			console.log(inputValue);
		}
		// Listen for clicks on the submit button and submit the adress when we get a click.
		submitButton.addEventListener("click", handleSubmit);
	</script>
```
> ⚠️ This code will not send information to any bank, we just log it to the console so feel free to run it in the `index.html` file.

Notice we added `id="address-input"` to the input field and the equivalent to the submit button. This is because we want to get those elements by their `id` using JavaScript. We will discuss these in detail later so no need to worry if it doesn't make much sense right now. _The key take away is, we can add interactivity to our webpage and do really cool stuff with JavaScript._


## Backend Development

Back-end development focuses on the server-side of web development. It typically involves using a server-side languages such as PHP, Python, Ruby etc. to manage data and provide an interface for the front-end to interact with. These languages are used to create dynamic websites that can interact with databases and retrieve or store data.

Web development also involves optimising websites for performance and SEO, as well as testing and debugging code. Additionally, web developers often use version control systems such as [Git](https://git-scm.com) to manage and track changes to the codebase.

Overall, web development is a field that is constantly evolving and growing, with new technologies and frameworks emerging all the time. It is an exciting and challenging field that offers many opportunities for creative problem-solving and collaboration.

And there you have it folks! A quick overview of what web development is all about. In this series, I'll be your guide as we explore the exciting world of building and maintaining websites. I'll take you from a complete newbie to a skilled web developer, breaking down the concepts discussed in this post and explaining them in detail. Whether it's setting up your local environment or optimising for performance, I've got you covered. So buckle up and get ready to join me on this thrilling journey! Next up, I'll be showing you how to set up your local development environment, so stay tuned and let's get started on this amazing adventure of becoming a web developer.
