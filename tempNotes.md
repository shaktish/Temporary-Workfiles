## Form

#### form validation
 when you enter data the web application checks it to see if it is correct. If so, it allows it to be submitted to the server and (usually) saved in a database; if not, it gives you error messages to explain what you've done wrong (provided you've done it right). Form validation can be implemented in a number of different ways.


### Preventing form from submitting when input field is empty
- get form, input fields and store them in variables
- use event.preventDefault() method, it won't allow the form to be submitted

```html
<form onsubmit="return validate()">
  <label for="fname">Name</label>
  <input type="text" name="fname" id="fname">
  <label for="password">Password</label>
  <input type="password" name="password" id="password">
  <input type="submit" value="Submit">
</form>
```
```javascript
function validate (){
  // getting form
  var form = document.querySelector('form');
  // getting all input fields except input type button using not selector attribute
  var inputList = document.querySelectorAll('form input:not([type="button"])');

  // accessing input list using array forEach method
  inputList.forEach(function (element) {
    // if value is empty
    if(element.value == '' ) {
      alert('empty');

      // prevents from submitting
      event.preventDefault();
      // for formality
      return false;
    } else {
      // fields are filled go true, NOT Neccessary
      return true;
    }
  });
}

```















The <form> tag is used to create an HTML form for user input.
Form elements
- `<input>`
- <textarea>
- <button>
- <select>
- <option>
- <optgroup>
- <fieldset>
- <label>

Differences Between HTML 4.01 and HTML5
- HTML5 has added two new attributes: autocomplete and novalidate, and removed the accept attribute.

New attributes
- autocomplete : Specifies whether a form should have autocomplete on or off
	- When autocomplete is on, the browser automatically complete values based on values that the user has entered before.
	```
	<form action="/action_page.php" method="get" autocomplete="on">
	...
	</form>
	```
- novalidate : The novalidate attribute is a boolean attribute.
	- When present, it specifies that the form-data (input) should not be validated when submitted.
	```<form novalidate>```

## HTML <input> Tag
- The <input> tag specifies an input field where the user can enter data, the <input> element is empty, it contains attributes only. 
- In HTML, the <input> tag has no end tag.

New Attributes 
- accept : Specifies the types of files that the server accepts (only for type="file")
``` <input type="file" name="pic" accept="image/*">```

- autofocus Attribute : Specifies that an <input> element should automatically get focus when the page loads. 
	-The autofocus attribute is a boolean attribute.
```
<form action="/action_page.php">
  First name: <input type="text" name="fname" autofocus><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit">
</form>
```

- HTML <input> multiple Attribut : Specifies that a user can enter more than one value in an <input> element
```
<form action="/action_page.php">
  Select images: <input type="file" name="img" multiple>
  <input type="submit">
</form>
```

- HTML <input> readonly Attribute
	- The readonly attribute is a boolean attribute. When present, it specifies that an input field is read-only.
	- A read-only input field cannot be modified (however, a user can tab to it, highlight it, and copy the text from it).
```
<form action="/action_page.php">
  Country: <input type="text" name="country" value="Norway" readonly><br>
  <input type="submit" value="Submit">
</form>
```	



# General HTML tags

## Doctype Declarations

- The <!DOCTYPE> declaration must be the very first thing in your HTML document, before the <html> tag.
- In HTML 4.01, the <!DOCTYPE> declaration refers to a DTD (Standard Generalized Markup Language), because HTML 4.01 was based on SGML. The DTD (document type definition) specifies the rules for the markup language, so that the browsers render the content correctly.

### Common DOCTYPE Declarations
- HTML 5
```<!DOCTYPE html>```
<html>
...
</html>

- HTML 4.01
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

## Anchor Tag
Attributes

Download Attribute
The download attribute specifies that the target will be downloaded when a user clicks on the hyperlink.
- Add **download** attribute to a tag
- This attribute is only used if the href attribute is set.
```
<a href="/images/myw3schoolsimage.jpg" download>
  <img border="0" src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142">
</a>
```

## HTML <area> Tag for IMAGE
- The <area> tag defines an area inside an image-map (an image-map is an image with clickable areas).
- The <area> element is always nested inside a <map> tag.
- The usemap attribute in the <img> tag is associated with the <map> element's name attribute, and creates a relationship between the image and the map.
```
<img src="planets.gif" width="145" height="126" alt="Planets"
usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun">
  <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury">
  <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus">
</map>
```

## Canvas 
- The <canvas> tag is used to draw graphics, on the fly, via scripting (usually JavaScript).
- The <canvas> tag is only a container for graphics, you must use a script to actually draw the graphics.
```
<canvas id="myCanvas"></canvas>

<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 80, 80);
</script>
```

## HTML <link> Tag
- The <link> tag defines a link between a document and an external resource. The <link> tag is used to link to external style sheets.
```html
<head>
  <link rel="stylesheet" type="text/css" href="theme.css">
</head>
```
What are the differences between JavaScript's window.onload and jQuery's $(document).ready() method?

The **ready event** occurs after the HTML document has been loaded, while the **onload** event occurs later, when all content (e.g. images) also has been loaded.

The **onload** event is a standard event in the DOM, while the ready event is specific to jQuery. The purpose of the ready event is that it should occur as early as possible after the document has loaded, so that code that adds functionality to the elements in the page doesn't have to wait for all content to load.



## Attribute Selector 

- **[attribute]**
The [attribute] selector is used to select elements with the specified attribute.

Selects all a elements with a target attribute

css
```css
a[href] {
  color : red;
}

- **[attribute=value]** : The [attribute=value] selector is used to select elements with the specified attribute and value.

Selects all elements with target="_blank"
```
css
```css
a[target=_blank] {
  font-size :36px;
}
```

- **[attribute~=value]** : The [attribute~=value] selector is used to select elements with an attribute value containing a specified word.

Selects all elements with a title attribute containing the word "flower"

css
```css
[title~=flower] { 
    background-color: yellow;
}
```
- **[attribute|=value]** : The [attribute|=value] selector is used to select elements with the specified attribute starting with the specified value.

**Note:**The value has to be a whole word, either alone, like class="top", or followed by a hyphen(top-part ), like class="top-part".

Select and style elements, where the class attribute's value starts with "top" or 'top-part':

css
```css
[class|=top] { 
    background-color: yellow;
}
```
html
```html
// applies
<div class="top">
  <p>this is p tag</p>
</div>
// applies
  
<div class="top-part">
  <p>this is p tag</p>
</div>
// won't be applied  
<div class="top content">
  <p>this is p tag</p>
</div>
```
- **[attribute^=value]** : The [attribute^=value] selector matches every element whose attribute value begins with a specified value.

css
```css
[class^="top"] {
    background: #ffff00;
}
```
html
```html

//applies
<div class="top content">
  <p>this is p tag</p>
</div>

// won't apply
<div class="mix top content">
  <p>this is p tag</p>
</div>
```

- **[attribute$=value]** : The [attribute$=value] selector matches every element whose attribute value ends with a specified value.

css
```css
[class^="top"] {
    background: teal;
    color:#fff;
}
```
html
```html
// applies
<div class="content top">
  <p>this is p tag</p>
</div>

// won't apply
<div class="top content">
  <p>this is p tag</p>
</div>
```

- **[attribute*=value]** : The [attribute*=value] selector matches every element whose attribute value containing a specified value.
css
```css
[class*="top"] {
    background: orange;
    color:#fff;
}
```
html
```html
// applies
<div class="content top">
  <p>this is p tag</p>
</div>

//  applies
<div class="top content">
  <p>this is p tag</p>
</div>
```


- **:not(selector)** : The :not(selector) selector matches every element that is NOT the specified element/selector.

css
```css
// select all input except and style the background to yellow.
form input:not([type='button']) {
  background-color:yellow;
}

```
html
```html
<form onsubmit="return validate()">
  <label for="fname">Name</label>
  <input type="text" name="fname" id="fname">
  <label for="password">Password</label>
  <input type="password" name="password" id="password">
  <input type="submit" value="Submit">
</form>
```

















