# JavaScript DOM Manipulation — Complete Guide

A comprehensive guide to **DOM (Document Object Model) Manipulation in JavaScript**, covering fundamental concepts, DOM structure, selectors, properties, methods, attributes, styles, element creation, modification, traversal, and removal.

This guide is designed for beginners who want to understand how JavaScript interacts with HTML documents and dynamically modifies webpage content.

---

## Table of Contents

1. [Introduction to the DOM](#1-introduction-to-the-dom)
2. [What Is DOM Manipulation?](#2-what-is-dom-manipulation)
3. [How the DOM Works](#3-how-the-dom-works)
4. [DOM Tree Structure](#4-dom-tree-structure)
5. [The `document` Object](#5-the-document-object)
6. [Selecting HTML Elements](#6-selecting-html-elements)
7. [Understanding DOM Collections](#7-understanding-dom-collections)
8. [Accessing and Modifying Content](#8-accessing-and-modifying-content)
9. [Working with HTML Attributes](#9-working-with-html-attributes)
10. [Working with CSS Styles](#10-working-with-css-styles)
11. [Working with Classes](#11-working-with-classes)
12. [Creating HTML Elements](#12-creating-html-elements)
13. [Adding Elements to the DOM](#13-adding-elements-to-the-dom)
14. [Removing and Replacing Elements](#14-removing-and-replacing-elements)
15. [DOM Traversal](#15-dom-traversal)
16. [Working with Text Nodes and Element Nodes](#16-working-with-text-nodes-and-element-nodes)
17. [Working with Forms and Input Elements](#17-working-with-forms-and-input-elements)
18. [Working with HTML Collections and Node Lists](#18-working-with-html-collections-and-node-lists)
19. [The `dataset` Property](#19-the-dataset-property)
20. [Cloning DOM Elements](#20-cloning-dom-elements)
21. [Document Fragments](#21-document-fragments)
22. [HTML Parsing and Security](#22-html-parsing-and-security)
23. [DOM Measurements and Computed Styles](#23-dom-measurements-and-computed-styles)
24. [DOM Manipulation Best Practices](#24-dom-manipulation-best-practices)
25. [Common DOM Manipulation Mistakes](#25-common-dom-manipulation-mistakes)
26. [Complete DOM Manipulation Project](#26-complete-dom-manipulation-project)
27. [DOM Manipulation Interview Questions](#27-dom-manipulation-interview-questions)
28. [Practice Questions](#28-practice-questions)
29. [DOM Manipulation Quick Revision](#29-dom-manipulation-quick-revision)

---

# 1. Introduction to the DOM

## What Is the DOM?

DOM stands for **Document Object Model**.

It is a programming interface that represents an HTML or XML document as a structured tree of objects.

JavaScript can use the DOM to:

* Access HTML elements.
* Read webpage content.
* Change text and HTML.
* Modify CSS styles.
* Add new HTML elements.
* Remove existing elements.
* Change HTML attributes.
* Navigate between parent, child, and sibling elements.

### Example

HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="heading">Hello World</h1>
    <p>This is my first paragraph.</p>
</body>
</html>
```

JavaScript:

```javascript
const heading = document.getElementById("heading");

heading.textContent = "Hello JavaScript!";
```

The heading displayed on the webpage changes from:

```text
Hello World
```

to:

```text
Hello JavaScript!
```

### Important Concept

HTML defines the webpage's structure, CSS defines its presentation, and JavaScript can use the DOM to access and modify the document dynamically.

---

# 2. What Is DOM Manipulation?

DOM manipulation means using JavaScript to access and modify the DOM.

For example, JavaScript can change the content, styling, attributes, or structure of a webpage without requiring a complete page reload.

### Example

HTML:

```html
<h1 id="title">Original Title</h1>
```

JavaScript:

```javascript
const title = document.getElementById("title");

title.textContent = "Updated Title";
title.style.color = "blue";
title.style.fontSize = "40px";
```

The heading now displays:

* Updated text.
* Blue text color.
* A font size of 40 pixels.

### Main Categories of DOM Manipulation

| Category               | Purpose                               |
| ---------------------- | ------------------------------------- |
| DOM selection          | Find HTML elements                    |
| Content manipulation   | Read or modify text and HTML          |
| Attribute manipulation | Read or change attributes             |
| Style manipulation     | Change CSS properties                 |
| Class manipulation     | Add, remove, and toggle CSS classes   |
| Element creation       | Create new HTML elements              |
| Element insertion      | Insert elements into the document     |
| Element removal        | Remove existing elements              |
| DOM traversal          | Navigate between related elements     |
| DOM inspection         | Examine nodes, dimensions, and styles |

---

# 3. How the DOM Works

When a browser loads an HTML document, it parses the HTML and constructs a DOM tree.

JavaScript can access that tree through objects such as `document`, `Element`, and `Node`.

Consider:

```html
<body>
    <h1>Welcome</h1>
    <p>Learning JavaScript</p>
</body>
```

The browser represents the structure approximately as:

```text
document
   |
   html
   |
   body
   |
   +--- h1
   |     |
   |     +--- "Welcome"
   |
   +--- p
         |
         +--- "Learning JavaScript"
```

JavaScript can access these nodes and modify them.

Example:

```javascript
document.querySelector("h1").textContent = "Hello!";
```

This updates the heading's text node through the DOM.

**Important:** The DOM is not the same thing as the original HTML source. It is the browser's structured representation of the document.

---

# 4. DOM Tree Structure

The DOM represents a document as a hierarchy of nodes.

Consider:

```html
<div id="container">
    <h1>My Website</h1>
    <p>Welcome to my website.</p>
</div>
```

The DOM structure is approximately:

```text
div#container
   |
   +--- h1
   |     |
   |     +--- "My Website"
   |
   +--- p
         |
         +--- "Welcome to my website."
```

## Important DOM Terms

### 1. Document

The entire document is represented by the `document` object.

```javascript
console.log(document);
```

### 2. Element

An element is an HTML tag represented as a DOM element.

Examples:

```html
<h1>Hello</h1>
<p>Welcome</p>
<div>Content</div>
```

JavaScript:

```javascript
const heading = document.querySelector("h1");

console.log(heading);
```

### 3. Node

A node is a general object in the DOM tree.

Common node types include:

* Document nodes.
* Element nodes.
* Text nodes.
* Comment nodes.

### 4. Parent Node

A parent node contains another node.

```html
<div>
    <p>Hello</p>
</div>
```

Here, the `div` is the parent element of the `p` element.

### 5. Child Node

A child node is contained directly within another node.

In the example above, the `p` element is a child of the `div`.

### 6. Sibling Nodes

Nodes that share the same parent are siblings.

```html
<div>
    <h1>Title</h1>
    <p>Paragraph</p>
</div>
```

The `h1` and `p` elements are siblings.

---

# 5. The `document` Object

The `document` object provides access to the current HTML document.

It is the starting point for most DOM manipulation operations.

## Important Document Properties

### 1. `document.title`

Gets or sets the document's title.

```javascript
console.log(document.title);
```

Change the title:

```javascript
document.title = "My JavaScript Website";
```

### 2. `document.URL`

Returns the document's URL.

```javascript
console.log(document.URL);
```

### 3. `document.domain`

Returns the document's domain under applicable browser security rules.

```javascript
console.log(document.domain);
```

This legacy property is generally unnecessary for modern applications and should not be used for security decisions.

### 4. `document.body`

Returns the document's body element.

```javascript
console.log(document.body);
```

Change its background:

```javascript
document.body.style.backgroundColor = "lightgray";
```

### 5. `document.head`

Returns the document's head element.

```javascript
console.log(document.head);
```

### 6. `document.documentElement`

Returns the root element of the document, usually `<html>`.

```javascript
console.log(document.documentElement);
```

### 7. `document.forms`

Returns an HTML collection of forms in the document.

```javascript
console.log(document.forms);
```

### 8. `document.images`

Returns an HTML collection of images.

```javascript
console.log(document.images);
```

### 9. `document.links`

Returns an HTML collection of links with an `href` attribute.

```javascript
console.log(document.links);
```

### 10. `document.scripts`

Returns an HTML collection of script elements.

```javascript
console.log(document.scripts);
```

---

# 6. Selecting HTML Elements

DOM selection means finding HTML elements so JavaScript can work with them.

JavaScript provides several selection methods.

## 6.1 `getElementById()`

Selects an element by its ID.

HTML:

```html
<h1 id="heading">Hello World</h1>
```

JavaScript:

```javascript
const heading = document.getElementById("heading");

console.log(heading);
```

Important points:

* Pass the ID without `#`.
* An ID should be unique within the document.
* Returns the matching element or `null` if no element is found.

## 6.2 `getElementsByClassName()`

Selects elements by class name.

HTML:

```html
<p class="text">First paragraph</p>
<p class="text">Second paragraph</p>
<p class="text">Third paragraph</p>
```

JavaScript:

```javascript
const paragraphs = document.getElementsByClassName("text");

console.log(paragraphs);
console.log(paragraphs.length);
console.log(paragraphs[0]);
```

Important points:

* Pass the class name without `.`.
* Returns a live `HTMLCollection`.
* Multiple matching elements can be returned.

Access individual elements:

```javascript
console.log(paragraphs[0].textContent);
console.log(paragraphs[1].textContent);
```

## 6.3 `getElementsByTagName()`

Selects elements by their HTML tag name.

HTML:

```html
<p>First paragraph</p>
<p>Second paragraph</p>
<h1>Heading</h1>
```

JavaScript:

```javascript
const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs.length);
```

Access the first paragraph:

```javascript
console.log(paragraphs[0].textContent);
```

This method returns a live `HTMLCollection`.

## 6.4 `querySelector()`

Returns the first element matching a CSS selector.

HTML:

```html
<h1 id="heading">Welcome</h1>
<p class="text">Hello</p>
```

JavaScript:

```javascript
const heading = document.querySelector("#heading");

const paragraph = document.querySelector(".text");

const firstParagraph = document.querySelector("p");
```

CSS selector examples:

```javascript
document.querySelector("#heading");       // ID
document.querySelector(".text");          // Class
document.querySelector("p");              // Tag
document.querySelector("div p");          // Descendant
document.querySelector("ul > li");        // Direct child
document.querySelector("input[type='text']"); // Attribute selector
```

If nothing matches, `querySelector()` returns `null`.

## 6.5 `querySelectorAll()`

Returns a static `NodeList` containing all elements matching a CSS selector.

HTML:

```html
<p class="text">First</p>
<p class="text">Second</p>
<p class="text">Third</p>
```

JavaScript:

```javascript
const paragraphs = document.querySelectorAll(".text");

console.log(paragraphs);
console.log(paragraphs.length);
```

Loop through the elements:

```javascript
paragraphs.forEach(function(paragraph) {
    console.log(paragraph.textContent);
});
```

Arrow function version:

```javascript
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
```

## Selector Comparison

| Method                     | Returns                          | Live or Static?  |
| -------------------------- | -------------------------------- | ---------------- |
| `getElementById()`         | One element or `null`            | Not a collection |
| `getElementsByClassName()` | `HTMLCollection`                 | Live             |
| `getElementsByTagName()`   | `HTMLCollection`                 | Live             |
| `querySelector()`          | First matching element or `null` | Not a collection |
| `querySelectorAll()`       | `NodeList`                       | Static           |

**Recommendation:** Use `querySelector()` and `querySelectorAll()` when you want the flexibility of CSS selectors.

---

# 7. Understanding DOM Collections

DOM selection methods may return either individual elements or collections.

## 7.1 HTMLCollection

An `HTMLCollection` contains HTML elements.

Example:

```javascript
const items = document.getElementsByClassName("item");
```

It is live, meaning it automatically reflects relevant changes to the document.

For example, if a new element with class `item` is added to the document, the collection updates automatically.

## 7.2 NodeList

A `NodeList` is a collection of nodes.

Example:

```javascript
const items = document.querySelectorAll(".item");
```

This returns a static `NodeList`, meaning it does not automatically update when matching elements are added or removed.

A `NodeList` can also come from properties such as `childNodes`, which returns a live collection.

### Convert a collection to an array

```javascript
const items = document.querySelectorAll(".item");

const itemsArray = Array.from(items);

console.log(itemsArray);
```

You can also use the spread operator:

```javascript
const itemsArray = [...document.querySelectorAll(".item")];
```

---

# 8. Accessing and Modifying Content

JavaScript provides several properties for reading or modifying an element's content.

Consider:

```html
<div id="box">
    <h1>Hello</h1>
    <p>Welcome to JavaScript</p>
</div>
```

## 8.1 `textContent`

Gets or sets the text content of an element and its descendants.

```javascript
const box = document.querySelector("#box");

console.log(box.textContent);
```

Change the content:

```javascript
box.textContent = "New content";
```

The existing child elements are removed, and the container now contains the specified text.

## 8.2 `innerText`

Gets or sets the rendered text of an element.

```javascript
const box = document.querySelector("#box");

console.log(box.innerText);
```

Example:

```javascript
box.innerText = "Updated visible text";
```

Unlike `textContent`, `innerText` takes rendered appearance into account when reading text and may trigger layout-related work.

## 8.3 `innerHTML`

Gets or sets the HTML markup inside an element.

```javascript
const box = document.querySelector("#box");

console.log(box.innerHTML);
```

Output may look like:

```html
<h1>Hello</h1>
<p>Welcome to JavaScript</p>
```

You can also insert markup:

```javascript
box.innerHTML = "<h2>New Heading</h2><p>New paragraph</p>";
```

The existing child nodes are replaced by the parsed markup.

**Security warning:** Never place untrusted user input directly into `innerHTML`. It can introduce cross-site scripting (XSS) vulnerabilities. Use `textContent` for plain text.

## 8.4 `outerHTML`

Returns or replaces the element itself, including its markup.

HTML:

```html
<p id="message">Hello</p>
```

JavaScript:

```javascript
const message = document.querySelector("#message");

console.log(message.outerHTML);
```

Output:

```html
<p id="message">Hello</p>
```

Replace the element:

```javascript
message.outerHTML = "<h2>Updated heading</h2>";
```

The original element is replaced in the document.

## 8.5 `value`

Used to read or modify the current value of form controls.

HTML:

```html
<input id="username" type="text" value="Rahul">
```

JavaScript:

```javascript
const username = document.querySelector("#username");

console.log(username.value);
```

Change the value:

```javascript
username.value = "Aman";
```

## Content Properties Comparison

| Property      | Purpose                                         |
| ------------- | ----------------------------------------------- |
| `textContent` | Reads or sets text content                      |
| `innerText`   | Reads or sets rendered text                     |
| `innerHTML`   | Reads or sets inner HTML markup                 |
| `outerHTML`   | Reads or replaces the element's complete markup |
| `value`       | Reads or sets a form control's current value    |

---

# 9. Working with HTML Attributes

HTML attributes provide additional information about elements.

Example:

```html
<img id="photo" src="photo.jpg" alt="Profile photo">
```

Here, `id`, `src`, and `alt` are attributes.

## 9.1 `getAttribute()`

Reads an attribute's value.

```javascript
const image = document.querySelector("#photo");

console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));
```

## 9.2 `setAttribute()`

Sets an attribute or updates its value.

```javascript
const image = document.querySelector("#photo");

image.setAttribute("alt", "Student profile photo");

image.setAttribute("title", "My profile picture");
```

## 9.3 `removeAttribute()`

Removes an attribute.

```javascript
image.removeAttribute("title");
```

## 9.4 `hasAttribute()`

Checks whether an attribute exists.

```javascript
console.log(image.hasAttribute("alt"));
```

Returns `true` if the attribute exists.

## 9.5 Reading and setting properties

Many HTML attributes correspond to JavaScript properties.

```html
<a id="link" href="https://example.com">Visit</a>
```

JavaScript:

```javascript
const link = document.querySelector("#link");

console.log(link.href);
console.log(link.getAttribute("href"));
```

The `href` property generally returns the resolved URL, while `getAttribute("href")` returns the attribute's specified value.

**Important:** An HTML attribute and its corresponding DOM property are related, but they are not always identical. For example, a form control's `value` property can change independently of its original `value` attribute.

---

# 10. Working with CSS Styles

JavaScript can modify inline CSS styles through an element's `style` property.

HTML:

```html
<h1 id="heading">Hello World</h1>
```

JavaScript:

```javascript
const heading = document.querySelector("#heading");

heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";
heading.style.textAlign = "center";
```

## Important Rule

CSS properties written in kebab-case are generally converted to camelCase when accessed through `element.style`.

Examples:

| CSS Property       | JavaScript Property |
| ------------------ | ------------------- |
| `background-color` | `backgroundColor`   |
| `font-size`        | `fontSize`          |
| `text-align`       | `textAlign`         |
| `border-radius`    | `borderRadius`      |
| `margin-top`       | `marginTop`         |
| `z-index`          | `zIndex`            |

## Example: Modify Multiple Styles

```javascript
const box = document.querySelector("#box");

box.style.width = "200px";
box.style.height = "100px";
box.style.backgroundColor = "lightblue";
box.style.border = "2px solid black";
box.style.borderRadius = "10px";
```

### Important: Inline Styles vs. Computed Styles

The `element.style` property reads or modifies inline styles. It does not generally return the final value of a CSS property applied through a stylesheet.

To read the computed style:

```javascript
const box = document.querySelector("#box");

console.log(getComputedStyle(box).color);
console.log(getComputedStyle(box).fontSize);
```

---

# 11. Working with Classes

CSS classes allow you to organize styles separately from JavaScript.

HTML:

```html
<p id="message" class="text">Hello World</p>
```

CSS:

```css
.text {
    color: blue;
    font-size: 20px;
}

.highlight {
    background-color: yellow;
}
```

JavaScript:

```javascript
const message = document.querySelector("#message");
```

## 11.1 `className`

Reads or sets the element's entire class attribute.

```javascript
console.log(message.className);
```

Set a class:

```javascript
message.className = "highlight";
```

Be careful: assigning `className` replaces the existing class list.

## 11.2 `classList`

Provides methods for working with individual classes.

### `classList.add()`

Adds a class.

```javascript
message.classList.add("highlight");
```

### `classList.remove()`

Removes a class.

```javascript
message.classList.remove("text");
```

### `classList.toggle()`

Adds the class if it is absent or removes it if it is present.

```javascript
message.classList.toggle("highlight");
```

You can also provide a force argument:

```javascript
message.classList.toggle("highlight", true);
```

This ensures that the class is present.

```javascript
message.classList.toggle("highlight", false);
```

This ensures that the class is absent.

### `classList.contains()`

Checks whether the class exists.

```javascript
console.log(message.classList.contains("highlight"));
```

### `classList.replace()`

Replaces an existing class with another class.

```javascript
message.classList.replace("text", "highlight");
```

This returns `true` if the old class was found and replaced; otherwise, it returns `false`.

---

# 12. Creating HTML Elements

JavaScript can create new DOM elements dynamically.

## 12.1 `document.createElement()`

Creates an HTML element.

```javascript
const heading = document.createElement("h1");

console.log(heading);
```

This creates an element but does not automatically add it to the document.

## Example: Create a Heading

```javascript
const heading = document.createElement("h1");

heading.textContent = "Hello JavaScript";

heading.classList.add("title");

document.body.appendChild(heading);
```

The heading is now part of the document.

## 12.2 `document.createTextNode()`

Creates a text node.

```javascript
const text = document.createTextNode("Hello World");

console.log(text);
```

Add the text node to an element:

```javascript
const paragraph = document.createElement("p");

paragraph.appendChild(text);

document.body.appendChild(paragraph);
```

## 12.3 `document.createComment()`

Creates a comment node.

```javascript
const comment = document.createComment("This is a comment");

document.body.appendChild(comment);
```

Comment nodes are part of the DOM but are not displayed as visible webpage text.

---

# 13. Adding Elements to the DOM

After creating an element, you can insert it into the document.

## 13.1 `appendChild()`

Adds a node to the end of a parent's child-node list.

```javascript
const list = document.querySelector("#list");

const item = document.createElement("li");

item.textContent = "New Item";

list.appendChild(item);
```

If the node already exists elsewhere in the DOM, `appendChild()` moves it rather than creating a copy.

## 13.2 `append()`

Adds one or more nodes or strings to the end of an element.

```javascript
const container = document.querySelector("#container");

const heading = document.createElement("h2");

heading.textContent = "Heading";

container.append(heading, " Additional text");
```

Unlike `appendChild()`, `append()` can accept multiple arguments and strings.

## 13.3 `prepend()`

Adds nodes or strings at the beginning of an element.

```javascript
const list = document.querySelector("#list");

const item = document.createElement("li");

item.textContent = "First Item";

list.prepend(item);
```

## 13.4 `before()`

Inserts nodes or strings before an element.

```javascript
const heading = document.querySelector("#heading");

const paragraph = document.createElement("p");

paragraph.textContent = "This appears before the heading.";

heading.before(paragraph);
```

## 13.5 `after()`

Inserts nodes or strings after an element.

```javascript
const heading = document.querySelector("#heading");

const paragraph = document.createElement("p");

paragraph.textContent = "This appears after the heading.";

heading.after(paragraph);
```

## 13.6 `insertBefore()`

Inserts a node before a specified child node.

```javascript
const list = document.querySelector("#list");

const secondItem = list.children[1];

const newItem = document.createElement("li");

newItem.textContent = "Inserted Item";

list.insertBefore(newItem, secondItem);
```

The new item is inserted immediately before the second list item.

## 13.7 `insertAdjacentHTML()`

Inserts HTML markup at a specified position relative to an element.

```javascript
const container = document.querySelector("#container");

container.insertAdjacentHTML(
    "beforeend",
    "<p>New paragraph</p>"
);
```

Supported positions:

| Position      | Meaning                                    |
| ------------- | ------------------------------------------ |
| `beforebegin` | Before the element itself                  |
| `afterbegin`  | At the beginning of the element's contents |
| `beforeend`   | At the end of the element's contents       |
| `afterend`    | After the element itself                   |

**Security warning:** Do not insert untrusted strings using `insertAdjacentHTML()`. It parses HTML and can introduce XSS vulnerabilities.

---

# 14. Removing and Replacing Elements

JavaScript can remove or replace nodes in the DOM.

## 14.1 `remove()`

Removes an element from the document.

```javascript
const paragraph = document.querySelector("#paragraph");

paragraph.remove();
```

## 14.2 `removeChild()`

Removes a specified child node from its parent.

```javascript
const list = document.querySelector("#list");

const firstItem = list.firstElementChild;

if (firstItem) {
    list.removeChild(firstItem);
}
```

## 14.3 `replaceWith()`

Replaces an element with another node or string.

```javascript
const oldHeading = document.querySelector("#heading");

const newHeading = document.createElement("h2");

newHeading.textContent = "Updated Heading";

oldHeading.replaceWith(newHeading);
```

## 14.4 `replaceChild()`

Replaces a child node with another node.

```javascript
const list = document.querySelector("#list");

const oldItem = list.children[0];

const newItem = document.createElement("li");

newItem.textContent = "Replacement Item";

if (oldItem) {
    list.replaceChild(newItem, oldItem);
}
```

## 14.5 `replaceChildren()`

Replaces all children of an element with the supplied nodes or strings.

```javascript
const container = document.querySelector("#container");

container.replaceChildren("Only this text remains.");
```

Calling `replaceChildren()` without arguments removes all children.

---

# 15. DOM Traversal

DOM traversal means navigating through the DOM tree to access related nodes.

Consider:

```html
<div id="parent">
    <h1 id="heading">Heading</h1>
    <p id="paragraph">Paragraph</p>
</div>
```

## 15.1 `parentElement`

Returns the parent element.

```javascript
const heading = document.querySelector("#heading");

console.log(heading.parentElement);
```

## 15.2 `parentNode`

Returns the parent node, which may be an element or another node type.

```javascript
console.log(heading.parentNode);
```

## 15.3 `children`

Returns a live `HTMLCollection` containing the element's child elements.

```javascript
const parent = document.querySelector("#parent");

console.log(parent.children);
```

This collection includes elements such as `h1` and `p`, but not text nodes.

## 15.4 `childNodes`

Returns a live `NodeList` containing all child nodes, including text nodes and comment nodes.

```javascript
console.log(parent.childNodes);
```

Whitespace between HTML tags can create text nodes.

## 15.5 `firstElementChild`

Returns the first child element.

```javascript
console.log(parent.firstElementChild);
```

## 15.6 `lastElementChild`

Returns the last child element.

```javascript
console.log(parent.lastElementChild);
```

## 15.7 `firstChild`

Returns the first child node, which may be a text node.

```javascript
console.log(parent.firstChild);
```

## 15.8 `lastChild`

Returns the last child node, which may be a text node.

```javascript
console.log(parent.lastChild);
```

## 15.9 `nextElementSibling`

Returns the next sibling element.

```javascript
const heading = document.querySelector("#heading");

console.log(heading.nextElementSibling);
```

## 15.10 `previousElementSibling`

Returns the previous sibling element.

```javascript
const paragraph = document.querySelector("#paragraph");

console.log(paragraph.previousElementSibling);
```

## Traversal Comparison

| Property                 | Returns                  |
| ------------------------ | ------------------------ |
| `parentElement`          | Parent element           |
| `parentNode`             | Parent node              |
| `children`               | Child elements           |
| `childNodes`             | All child nodes          |
| `firstElementChild`      | First child element      |
| `lastElementChild`       | Last child element       |
| `firstChild`             | First child node         |
| `lastChild`              | Last child node          |
| `nextElementSibling`     | Next sibling element     |
| `previousElementSibling` | Previous sibling element |
| `nextSibling`            | Next sibling node        |
| `previousSibling`        | Previous sibling node    |

**Important:** Prefer element-specific properties when you need HTML elements and do not want whitespace text nodes.

---

# 16. Working with Text Nodes and Element Nodes

The DOM distinguishes between different types of nodes.

Example:

```html
<p id="message">Hello World</p>
```

JavaScript:

```javascript
const message = document.querySelector("#message");

console.log(message.nodeType);
console.log(message.firstChild.nodeType);
```

The element's `nodeType` is `1`, while its text node's `nodeType` is `3`.

## Common Node Types

| Node Type         | Constant                      | Numeric Value |
| ----------------- | ----------------------------- | ------------: |
| Element           | `Node.ELEMENT_NODE`           |             1 |
| Attribute         | `Node.ATTRIBUTE_NODE`         |             2 |
| Text              | `Node.TEXT_NODE`              |             3 |
| Comment           | `Node.COMMENT_NODE`           |             8 |
| Document          | `Node.DOCUMENT_NODE`          |             9 |
| Document type     | `Node.DOCUMENT_TYPE_NODE`     |            10 |
| Document fragment | `Node.DOCUMENT_FRAGMENT_NODE` |            11 |

### Example

```javascript
const paragraph = document.querySelector("#message");

console.log(paragraph.nodeType === Node.ELEMENT_NODE);
```

Output:

```text
true
```

## `nodeName`

Returns a node's name.

```javascript
console.log(paragraph.nodeName);
```

For an HTML element, the result is generally its tag name in uppercase, such as `P`.

## `nodeValue`

Returns the value of certain node types, such as text nodes.

```javascript
console.log(paragraph.firstChild.nodeValue);
```

Output:

```text
Hello World
```

For an element node, `nodeValue` is generally `null`.

## `data`

Text nodes provide a `data` property that can be used to read or modify their text.

```javascript
const textNode = paragraph.firstChild;

console.log(textNode.data);

textNode.data = "Updated text";
```

For normal content changes, `textContent` is often simpler.

---

# 17. Working with Forms and Input Elements

JavaScript can read and modify form controls through the DOM.

HTML:

```html
<form id="studentForm">
    <label for="name">Name:</label>

    <input id="name" type="text" value="Rahul">

    <label for="course">Course:</label>

    <select id="course">
        <option value="BCA">BCA</option>
        <option value="MCA" selected>MCA</option>
    </select>

    <label>
        <input id="agree" type="checkbox" checked>
        I agree
    </label>
</form>
```

## 17.1 Reading an input value

```javascript
const nameInput = document.querySelector("#name");

console.log(nameInput.value);
```

Output:

```text
Rahul
```

## 17.2 Changing an input value

```javascript
nameInput.value = "Aman";
```

## 17.3 Reading a checkbox

```javascript
const checkbox = document.querySelector("#agree");

console.log(checkbox.checked);
```

Output:

```text
true
```

## 17.4 Reading a selected option

```javascript
const course = document.querySelector("#course");

console.log(course.value);
```

Output:

```text
MCA
```

## 17.5 Checking an element's state

```javascript
console.log(nameInput.disabled);
console.log(nameInput.readOnly);
console.log(checkbox.checked);
```

These properties expose the current state of the relevant form controls.

## 17.6 Accessing forms

```javascript
const form = document.querySelector("#studentForm");

console.log(form.elements);
```

The `elements` property provides access to the form's listed controls.

**Note:** This section covers DOM access to forms and their values, not event handling or form-submission logic.

---

# 18. Working with HTML Collections and Node Lists

Collections can look similar, but their behavior differs.

## Example: Live HTMLCollection

HTML:

```html
<ul id="list">
    <li>Apple</li>
    <li>Banana</li>
</ul>
```

JavaScript:

```javascript
const list = document.querySelector("#list");

const items = list.getElementsByTagName("li");

console.log(items.length); // 2

const newItem = document.createElement("li");

newItem.textContent = "Mango";

list.appendChild(newItem);

console.log(items.length); // 3
```

The collection updates automatically.

## Example: Static NodeList

```javascript
const list = document.querySelector("#list");

const items = list.querySelectorAll("li");

console.log(items.length); // Current number of matching items

const newItem = document.createElement("li");

newItem.textContent = "Orange";

list.appendChild(newItem);

console.log(items.length); // Does not automatically increase
```

The NodeList retains the elements that matched when the query was made.

To get the updated list:

```javascript
const updatedItems = list.querySelectorAll("li");

console.log(updatedItems.length);
```

---

# 19. The `dataset` Property

The `dataset` property provides access to custom HTML data attributes.

HTML:

```html
<div
    id="student"
    data-name="Rahul"
    data-course="MCA"
    data-age="22">
</div>
```

JavaScript:

```javascript
const student = document.querySelector("#student");

console.log(student.dataset.name);
console.log(student.dataset.course);
console.log(student.dataset.age);
```

Output:

```text
Rahul
MCA
22
```

## Setting a Data Attribute

```javascript
student.dataset.city = "Prayagraj";
```

This creates an attribute similar to:

```html
data-city="Prayagraj"
```

## Removing a Data Attribute

```javascript
delete student.dataset.age;
```

### Important Points

* HTML attributes use the `data-*` format.
* JavaScript accesses them through `dataset`.
* Attribute names are converted to camelCase where applicable.
* Dataset values are strings.

For example:

```javascript
student.dataset.age = 22;

console.log(typeof student.dataset.age);
```

Output:

```text
string
```

Convert numeric values when needed:

```javascript
const age = Number(student.dataset.age);
```

---

# 20. Cloning DOM Elements

JavaScript can duplicate existing DOM nodes.

The `cloneNode()` method creates a copy of a node.

## 20.1 Shallow Clone

```javascript
const original = document.querySelector("#card");

const copy = original.cloneNode(false);
```

A shallow clone copies the element itself and its attributes, but not its child nodes.

## 20.2 Deep Clone

```javascript
const original = document.querySelector("#card");

const copy = original.cloneNode(true);
```

A deep clone copies the element and its descendant nodes.

## Adding the Clone

```javascript
const original = document.querySelector("#card");

const copy = original.cloneNode(true);

document.body.appendChild(copy);
```

### Important Warning

Cloning an element can also duplicate its ID and other attributes.

Duplicate IDs can cause incorrect element selection and invalid HTML.

If necessary, assign a unique ID:

```javascript
copy.id = "card-copy";
```

Cloning also does not copy JavaScript event listeners added through `addEventListener()`. Event handling is outside the scope of this guide.

---

# 21. Document Fragments

A `DocumentFragment` is a lightweight container for DOM nodes.

It is not part of the active document tree itself.

## Creating a Fragment

```javascript
const fragment = document.createDocumentFragment();
```

## Example: Build a List

HTML:

```html
<ul id="list"></ul>
```

JavaScript:

```javascript
const list = document.querySelector("#list");

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");

    item.textContent = `Item ${i}`;

    fragment.appendChild(item);
}

list.appendChild(fragment);
```

The fragment's child nodes are moved into the list.

### Benefits

* Allows you to build a group of nodes before insertion.
* Keeps the temporary container outside the active document tree.
* Can make complex DOM-building code easier to organize.

A fragment is not automatically faster in every situation; modern browsers optimize many DOM operations.

---

# 22. HTML Parsing and Security

Some DOM properties parse strings as HTML, while others treat strings as plain text.

Understanding this difference is important for security.

## Safe Approach for Plain Text

```javascript
const message = document.querySelector("#message");

message.textContent = "<h1>Hello</h1>";
```

The browser displays the characters:

```text
<h1>Hello</h1>
```

It does not create a heading element.

## HTML Parsing Approach

```javascript
message.innerHTML = "<h1>Hello</h1>";
```

The browser creates a heading element inside the message container.

## Security Risk: Cross-Site Scripting (XSS)

Consider:

```javascript
const userInput = "<img src=x onerror=alert('XSS')>";
```

Inserting untrusted HTML using `innerHTML` can introduce security vulnerabilities.

Avoid:

```javascript
container.innerHTML = userInput;
```

Prefer:

```javascript
container.textContent = userInput;
```

If your application genuinely needs to render user-provided HTML, use a well-maintained HTML sanitization library and an appropriate security policy.

**Rule:** Use `textContent` for plain text. Use HTML-parsing APIs only when you intentionally need HTML and have handled the security implications.

---

# 23. DOM Measurements and Computed Styles

The DOM provides properties for inspecting an element's dimensions and position.

## 23.1 `getBoundingClientRect()`

Returns a rectangle describing the element's size and position relative to the viewport.

```javascript
const box = document.querySelector("#box");

const rect = box.getBoundingClientRect();

console.log(rect.width);
console.log(rect.height);
console.log(rect.top);
console.log(rect.left);
console.log(rect.right);
console.log(rect.bottom);
```

## 23.2 `offsetWidth` and `offsetHeight`

Return the element's layout width and height, including padding and borders.

```javascript
console.log(box.offsetWidth);
console.log(box.offsetHeight);
```

These values are generally integers and include rendered dimensions such as padding and borders.

## 23.3 `clientWidth` and `clientHeight`

Return the element's inner dimensions, including padding but excluding borders and scrollbars.

```javascript
console.log(box.clientWidth);
console.log(box.clientHeight);
```

## 23.4 `scrollWidth` and `scrollHeight`

Describe the dimensions of an element's scrollable content.

```javascript
console.log(box.scrollWidth);
console.log(box.scrollHeight);
```

These values can exceed the visible client dimensions when content overflows.

## 23.5 `getComputedStyle()`

Returns the computed CSS style values for an element.

```javascript
const box = document.querySelector("#box");

const styles = getComputedStyle(box);

console.log(styles.color);
console.log(styles.backgroundColor);
console.log(styles.fontSize);
```

**Important:** Layout measurements may trigger browser layout calculations. Avoid repeatedly measuring layout and changing styles in a way that causes unnecessary layout work.

---

# 24. DOM Manipulation Best Practices

Follow these practices when writing JavaScript.

## 1. Use Appropriate Selectors

Prefer readable selectors:

```javascript
const heading = document.querySelector("#heading");
```

## 2. Check Whether an Element Exists

```javascript
const heading = document.querySelector("#heading");

if (heading) {
    heading.textContent = "Updated Heading";
}
```

This prevents errors when an element is missing.

## 3. Prefer `textContent` for Plain Text

```javascript
heading.textContent = "Hello World";
```

Avoid using `innerHTML` for untrusted text.

## 4. Separate CSS from JavaScript

Instead of repeatedly changing multiple inline styles:

```javascript
heading.style.color = "blue";
heading.style.fontSize = "30px";
```

Consider using a CSS class:

```css
.heading-style {
    color: blue;
    font-size: 30px;
}
```

JavaScript:

```javascript
heading.classList.add("heading-style");
```

## 5. Use `const` for References That Do Not Need Reassignment

```javascript
const heading = document.querySelector("#heading");
```

The variable cannot be reassigned, but the referenced DOM element can still be modified.

## 6. Avoid Unnecessary DOM Updates

Build complex structures clearly before inserting them into the document.

A `DocumentFragment` may be useful when constructing many nodes.

## 7. Use Descriptive Variable Names

Prefer:

```javascript
const studentList = document.querySelector("#student-list");
```

over:

```javascript
const x = document.querySelector("#student-list");
```

## 8. Keep DOM Code Organized

Separate responsibilities into functions when appropriate.

```javascript
function updateHeading(text) {
    const heading = document.querySelector("#heading");

    if (heading) {
        heading.textContent = text;
    }
}

updateHeading("Welcome");
```

---

# 25. Common DOM Manipulation Mistakes

## Mistake 1: Incorrect Selector

Incorrect:

```javascript
document.getElementById("#heading");
```

Correct:

```javascript
document.getElementById("heading");
```

`getElementById()` expects the ID without `#`.

## Mistake 2: Accessing a Missing Element

```javascript
const heading = document.querySelector("#missing");

heading.textContent = "Hello";
```

If no element matches, `heading` is `null`, so accessing its `textContent` causes an error.

Correct:

```javascript
const heading = document.querySelector("#missing");

if (heading) {
    heading.textContent = "Hello";
}
```

## Mistake 3: Using `innerHTML` Instead of `textContent`

If you want to display literal text, use `textContent`.

```javascript
element.textContent = "<b>Hello</b>";
```

## Mistake 4: Confusing `children` and `childNodes`

* `children` returns child elements.
* `childNodes` returns all child nodes, including whitespace text nodes and comments.

## Mistake 5: Forgetting That Collections Can Be Live

`getElementsByClassName()` and `getElementsByTagName()` return live collections.

Adding or removing matching elements can change the collection while you iterate over it.

## Mistake 6: Modifying a Collection While Iterating

Removing elements from a live collection can cause elements to be skipped.

One approach is to take a snapshot:

```javascript
const items = Array.from(
    document.getElementsByClassName("item")
);

for (const item of items) {
    item.remove();
}
```

This iterates over the copied array rather than the changing live collection.

## Mistake 7: Writing JavaScript Before Elements Exist

If a script runs before the target HTML elements have been parsed, a selector may return `null`.

One simple approach is to place the script before the closing `</body>` tag:

```html
<body>
    <h1 id="heading">Hello</h1>

    <script src="script.js"></script>
</body>
```

Alternatively, use a suitable script-loading strategy, such as `defer` on an external script.

---

# 26. Complete DOM Manipulation Project

## Project: Dynamic Student List

This project demonstrates:

* Selecting elements.
* Reading input values.
* Creating elements.
* Adding elements.
* Updating text.
* Applying classes.
* Removing elements.
* Using `dataset`.

The project deliberately excludes event handling. The functions are called directly to demonstrate the DOM operations.

## HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>DOM Manipulation Project</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="container">
        <h1 id="heading">Student List</h1>

        <input
            type="text"
            id="studentName"
            placeholder="Enter student name"
        >

        <ul id="studentList"></ul>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

## CSS (`style.css`)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 30px;
}

.container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
}

#heading {
    color: #222;
    text-align: center;
}

#studentName {
    width: 95%;
    padding: 10px;
    margin-bottom: 15px;
}

.student-item {
    padding: 10px;
    margin-bottom: 8px;
    background-color: #e8f0fe;
    border-radius: 5px;
}

.student-item strong {
    color: #174ea6;
}
```

## JavaScript (`script.js`)

```javascript
const heading = document.querySelector("#heading");

const studentNameInput = document.querySelector("#studentName");

const studentList = document.querySelector("#studentList");

// Update heading
heading.textContent = "My Students";

// Create a student item
function createStudent(name) {
    const li = document.createElement("li");

    li.classList.add("student-item");

    li.dataset.name = name;

    const strong = document.createElement("strong");

    strong.textContent = name;

    li.appendChild(strong);

    return li;
}

// Add a student
function addStudent(name) {
    const trimmedName = name.trim();

    if (trimmedName === "") {
        console.log("Please enter a student name.");
        return;
    }

    const student = createStudent(trimmedName);

    studentList.appendChild(student);
}

// Remove a student by name
function removeStudent(name) {
    const students = Array.from(studentList.children);

    for (const student of students) {
        if (student.dataset.name === name) {
            student.remove();
            return;
        }
    }
}

// Change the heading style
heading.classList.add("heading-style");

// Add example students
addStudent("Rahul");
addStudent("Aman");
addStudent("Priya");

// Remove one student
removeStudent("Aman");
```

### Expected Result

The webpage displays:

* The heading `My Students`.
* Rahul.
* Priya.

Aman is removed by the `removeStudent()` function.

### Concepts Used

| Concept                   | Example                |
| ------------------------- | ---------------------- |
| Element selection         | `querySelector()`      |
| Content modification      | `textContent`          |
| Element creation          | `createElement()`      |
| Adding classes            | `classList.add()`      |
| Adding elements           | `appendChild()`        |
| Reading input values      | `value`                |
| Removing elements         | `remove()`             |
| Reading custom attributes | `dataset.name`         |
| Traversing child elements | `studentList.children` |

**Note:** This project intentionally has no event listeners or event-handling logic. The functions are executed directly from JavaScript.

---

# 27. DOM Manipulation Interview Questions

### Q1. What is the DOM?

The Document Object Model represents an HTML or XML document as a structured tree of objects that JavaScript can access and modify.

### Q2. What is DOM manipulation?

DOM manipulation is the process of accessing and modifying the document's structure, content, attributes, or styles through the DOM API.

### Q3. What is the difference between `getElementById()` and `querySelector()`?

`getElementById()` selects an element by its ID. `querySelector()` selects the first element matching a CSS selector.

### Q4. What is the difference between `querySelector()` and `querySelectorAll()`?

`querySelector()` returns the first matching element or `null`. `querySelectorAll()` returns a static NodeList containing all matching elements.

### Q5. What is the difference between `innerHTML` and `textContent`?

`innerHTML` reads or parses HTML markup, while `textContent` reads or sets text content without parsing assigned strings as HTML.

### Q6. What is the difference between `innerText` and `textContent`?

`innerText` reflects rendered text, while `textContent` accesses text content from the DOM tree without accounting for rendered visibility in the same way.

### Q7. What is the difference between `children` and `childNodes`?

`children` returns child elements. `childNodes` returns all child nodes, including text and comment nodes.

### Q8. What is the difference between `append()` and `appendChild()`?

`append()` can insert multiple nodes or strings. `appendChild()` inserts a single node and returns the inserted node.

### Q9. What is the difference between `remove()` and `removeChild()`?

`remove()` removes the element itself. `removeChild()` removes a specified child node from its parent.

### Q10. What is `classList`?

`classList` provides methods to add, remove, toggle, check, and replace CSS classes on an element.

### Q11. What is the difference between an attribute and a property?

An HTML attribute is specified in markup. A DOM property is part of the JavaScript object representing the element. Related attributes and properties can behave differently.

### Q12. What is a DocumentFragment?

A DocumentFragment is a lightweight container for DOM nodes that can be built separately and then inserted into the document.

### Q13. What is DOM traversal?

DOM traversal means navigating between nodes and elements using properties such as `parentElement`, `children`, `nextElementSibling`, and `previousElementSibling`.

### Q14. What is a live HTMLCollection?

A live HTMLCollection automatically reflects relevant changes to the document.

### Q15. What is a static NodeList?

A static NodeList, such as the one returned by `querySelectorAll()`, does not automatically update when the DOM changes.

### Q16. What is XSS?

Cross-site scripting is a security vulnerability that can allow malicious script execution in a user's browser. Unsafe insertion of untrusted HTML is one possible cause.

### Q17. How can you create an HTML element using JavaScript?

Use `document.createElement()`.

### Q18. How can you replace an HTML element?

Use `replaceWith()` or the parent's `replaceChild()` method.

### Q19. How can you access custom HTML data attributes?

Use the `dataset` property.

### Q20. How can you find the dimensions of an element?

Use properties such as `offsetWidth`, `clientWidth`, and `scrollWidth`, or use `getBoundingClientRect()` for its dimensions and viewport-relative position.

---

# 28. Practice Questions

Complete these tasks without copying the solution immediately.

## Beginner Level

1. Select an element by its ID and print it.
2. Select all paragraphs using `querySelectorAll()`.
3. Change the text of an `h1` element.
4. Change the document title.
5. Change an element's background color.
6. Add a CSS class to an element.
7. Remove a CSS class from an element.
8. Read an input's current value.
9. Read an image's `src` attribute.
10. Change the `alt` attribute of an image.

## Intermediate Level

11. Create a new paragraph and append it to the body.
12. Create a list containing five items.
13. Insert an element before another element.
14. Replace an existing heading with a new heading.
15. Remove the last child element from a container.
16. Find the parent element of a paragraph.
17. Find the next sibling element.
18. Display all child elements of a container.
19. Use `Object.entries()` to display an object's key-value pairs.
20. Create an element with a custom `data-*` attribute and read its value.

## Advanced Level

21. Create a dynamic product list using `createElement()`.
22. Build a table dynamically from an array of objects.
23. Clone an element and assign the clone a unique ID.
24. Use a DocumentFragment to build a list.
25. Compare the behavior of a live HTMLCollection and a static NodeList.
26. Use `getBoundingClientRect()` to inspect an element's position.
27. Replace all children of an element using `replaceChildren()`.
28. Use `classList.toggle()` with its force argument.
29. Safely display user-provided text without parsing it as HTML.
30. Build a small profile card using only DOM creation and manipulation methods.

---

# 29. DOM Manipulation Quick Revision

## Selection

```javascript
document.getElementById("id");

document.getElementsByClassName("class");

document.getElementsByTagName("p");

document.querySelector(".class");

document.querySelectorAll(".class");
```

## Content

```javascript
element.textContent;

element.innerText;

element.innerHTML;

element.outerHTML;

element.value;
```

## Attributes

```javascript
element.getAttribute("name");

element.setAttribute("name", "value");

element.removeAttribute("name");

element.hasAttribute("name");
```

## Styles

```javascript
element.style.color = "red";

element.style.backgroundColor = "yellow";

getComputedStyle(element).color;
```

## Classes

```javascript
element.classList.add("active");

element.classList.remove("active");

element.classList.toggle("active");

element.classList.contains("active");

element.classList.replace("old", "new");
```

## Creation

```javascript
document.createElement("div");

document.createTextNode("Hello");

document.createComment("Comment");
```

## Insertion

```javascript
parent.appendChild(child);

parent.append(child);

parent.prepend(child);

element.before(newElement);

element.after(newElement);

parent.insertBefore(newElement, referenceNode);
```

## Removal and Replacement

```javascript
element.remove();

parent.removeChild(child);

element.replaceWith(newElement);

parent.replaceChild(newElement, oldElement);

element.replaceChildren(newElement);
```

## Traversal

```javascript
element.parentElement;

element.parentNode;

element.children;

element.childNodes;

element.firstElementChild;

element.lastElementChild;

element.nextElementSibling;

element.previousElementSibling;
```

## Data Attributes

```javascript
element.dataset.name;

element.dataset.course = "MCA";

delete element.dataset.name;
```

## Cloning

```javascript
element.cloneNode(false);

element.cloneNode(true);
```

## Measurements

```javascript
element.getBoundingClientRect();

element.offsetWidth;

element.offsetHeight;

element.clientWidth;

element.clientHeight;

element.scrollWidth;

element.scrollHeight;
```

---

# Final Summary

DOM manipulation is one of the most important JavaScript concepts for frontend development.

To master it, focus on these areas in order:

1. Understand the DOM tree and nodes.
2. Learn the `document` object.
3. Practise selecting elements.
4. Understand `textContent`, `innerText`, and `innerHTML`.
5. Learn attributes, styles, and classes.
6. Practise creating and inserting elements.
7. Learn how to remove and replace elements.
8. Understand DOM traversal.
9. Work with forms, collections, and data attributes.
10. Build small projects to combine the concepts.

**Next recommended topic:** JavaScript DOM Event Handling, including `addEventListener()`, event objects, event bubbling, event capturing, event delegation, and common event types.

---

**Author:** JavaScript Learning Notes
**Topic:** DOM Manipulation
**Level:** Beginner to Advanced
**Language:** JavaScript
**Purpose:** Learning, revision, interview preparation, and practical frontend development
